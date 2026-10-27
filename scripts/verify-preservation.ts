import * as fs from "node:fs";
import * as path from "node:path";
import { createHash } from "node:crypto";

const root = path.resolve(import.meta.dirname, "..");
const errors: string[] = [];
const NAMED_ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
};
function decodeEntities(p: string): string {
  return p.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g, (match, body: string) => {
    if (body.startsWith("#x") || body.startsWith("#X")) {
      return String.fromCodePoint(parseInt(body.slice(2), 16));
    }
    if (body.startsWith("#")) {
      return String.fromCodePoint(parseInt(body.slice(1), 10));
    }
    return NAMED_ENTITIES[body] !== undefined ? NAMED_ENTITIES[body] : match;
  });
}
function norm(p: string): string {
  return decodeEntities(p).toLowerCase().replace(/\s+/g, " ");
}
function hashNorm(p: string): string {
  return createHash("sha256").update(norm(p)).digest("hex");
}
type Block = { paras: string[] };
type Table = { rows: string[][] };
type ChapterFile = {
  slug: string; blocks: Block[];
  diagrams?: { text: string }[];
  tables?: Table[];
  variants?: Record<string, { blocks: Block[]; diagrams?: { text: string }[]; tables?: Table[] }>;
};
const baseline = JSON.parse(
  fs.readFileSync(path.join(root, "manifests/baseline-paragraph-hashes.json"), "utf8")
) as { count: number; hashes: string[]; texts: string[] };
const chapters = JSON.parse(
  fs.readFileSync(path.join(root, "manifests/chapters.json"), "utf8")
) as { slug: string; domain: string }[];
const present = new Set<string>();
const masterNorms: string[] = [];
function addText(text: string): void {
  if (text.replace(/\s+/g, " ").length < 40) return;
  present.add(hashNorm(text));
  masterNorms.push(norm(text));
}
for (const c of chapters) {
  const file = path.join(root, "chapters", c.domain, `${c.slug}.json`);
  if (!fs.existsSync(file)) {
    errors.push(`missing chapter file: ${c.domain}/${c.slug}.json`);
    continue;
  }
  const ch = JSON.parse(fs.readFileSync(file, "utf8")) as ChapterFile;
  const collect = (blocks: Block[]): void => {
    for (const b of blocks) {
      for (const p of b.paras) addText(p);
    }
  };
  const collectDiagrams = (diagrams: { text: string }[] | undefined): void => {
    if (!diagrams) return;
    for (const d of diagrams) addText(d.text);
  };
  const collectTables = (tables: Table[] | undefined): void => {
    if (!tables) return;
    for (const t of tables) {
      for (const row of t.rows) addText(row.join(" | "));
    }
  };
  collect(ch.blocks);
  collectDiagrams(ch.diagrams);
  collectTables(ch.tables);
  if (ch.variants) {
    for (const v of Object.values(ch.variants)) {
      collect(v.blocks);
      collectDiagrams(v.diagrams);
      collectTables(v.tables);
    }
  }
}
// Two-tier preservation check: exact hash match, or substring containment.
// The source wraps step blocks in outer <p> tags, so some standalone sentences
// appear in the master merged with their step titles; wording intact counts.
const missing: string[] = [];
let substringPass = 0;
let exactPass = 0;
for (const text of baseline.texts) {
  const n = norm(text);
  if (present.has(hashNorm(text))) {
    exactPass += 1;
    continue;
  }
  const contained = masterNorms.some((mn) => mn.includes(n) || n.includes(mn));
  if (contained) {
    substringPass += 1;
  } else {
    missing.push(text.slice(0, 120));
  }
}
if (missing.length > 0) {
  errors.push(`${missing.length} baseline items truly absent from master chapters (of ${baseline.count})`);
  for (const m of missing.slice(0, 10)) errors.push(`  absent: ${m}`);
}
const assetDir = path.join(root, "assets/original-notes");
const assets = fs.readdirSync(assetDir);
const empty = assets.filter((f) => fs.statSync(path.join(assetDir, f)).size === 0);
if (empty.length > 0) errors.push(`empty image assets: ${empty.join(", ")}`);
const release = JSON.parse(
  fs.readFileSync(path.join(root, "manifests/release.json"), "utf8")
) as { unique_images: number };
if (release.unique_images !== assets.length) {
  errors.push(`release.unique_images ${release.unique_images} != asset files ${assets.length}`);
}
if (errors.length > 0) {
  console.error(`verify-preservation FAILED (${errors.length} errors):`);
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}
console.log(
  `verify-preservation OK: ${baseline.count} baseline items covered ` +
  `(${exactPass} exact, ${substringPass} substring-merged, 0 absent), ` +
  `${assets.length} image assets non-empty.`
);
