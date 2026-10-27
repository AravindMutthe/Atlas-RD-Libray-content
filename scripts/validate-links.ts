import * as fs from "node:fs";
import * as path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const errors: string[] = [];
function must(cond: boolean, msg: string): void {
  if (!cond) errors.push(msg);
}
type ChapterEntry = { slug: string; title: string; domain: string };
const chapters = JSON.parse(
  fs.readFileSync(path.join(root, "manifests/chapters.json"), "utf8")
) as ChapterEntry[];
const release = JSON.parse(
  fs.readFileSync(path.join(root, "manifests/release.json"), "utf8")
) as { chapters: number; unique_images: number };
const slugs = new Set(chapters.map((c) => c.slug));
must(release.chapters === chapters.length,
  `release.chapters ${release.chapters} != chapters.json length ${chapters.length}`);
const assetFiles = new Set(fs.readdirSync(path.join(root, "assets/original-notes")));
must(release.unique_images === assetFiles.size,
  `release.unique_images ${release.unique_images} != asset files ${assetFiles.size}`);
type ChapterFile = {
  slug: string; illustrations: string[];
  original_notes: { file: string }[]; related_concepts: string[];
};
for (const c of chapters) {
  const file = path.join(root, "chapters", c.domain, `${c.slug}.json`);
  must(fs.existsSync(file), `missing chapter file: ${c.domain}/${c.slug}.json`);
  if (!fs.existsSync(file)) continue;
  const ch = JSON.parse(fs.readFileSync(file, "utf8")) as ChapterFile;
  for (const img of ch.illustrations) {
    must(assetFiles.has(img), `chapter ${c.slug} references missing image ${img}`);
  }
  for (const note of ch.original_notes) {
    must(assetFiles.has(note.file), `chapter ${c.slug} references missing note ${note.file}`);
  }
  for (const rel of ch.related_concepts) {
    must(slugs.has(rel), `chapter ${c.slug} references unknown chapter ${rel}`);
  }
}
if (errors.length > 0) {
  console.error(`validate-links FAILED (${errors.length} errors):`);
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}
console.log(`validate-links OK: ${chapters.length} chapters, ${assetFiles.size} images, all links resolve.`);
