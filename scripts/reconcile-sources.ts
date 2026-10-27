import * as fs from "node:fs";
import * as path from "node:path";
import { createHash } from "node:crypto";

// Regenerates manifests/chapters.json and the counts in manifests/release.json
// from the actual chapter files, so counts are generated, never entered manually.
const root = path.resolve(import.meta.dirname, "..");
type Block = { paras: string[] };
type ChapterFile = {
  slug: string; title: string; domain: string; sources: string[];
  blocks: Block[]; illustrations: string[]; diagrams?: unknown[]; tables?: unknown[];
};
const chaptersDir = path.join(root, "chapters");
const entries: {
  slug: string; title: string; domain: string; sources: string[];
  paragraphs: number; images: number; diagrams: number; tables: number;
}[] = [];
for (const domain of fs.readdirSync(chaptersDir)) {
  const dir = path.join(chaptersDir, domain);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".json")) continue;
    const ch = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")) as ChapterFile;
    entries.push({
      slug: ch.slug, title: ch.title, domain: ch.domain, sources: ch.sources,
      paragraphs: ch.blocks.reduce((n, b) => n + b.paras.length, 0),
      images: ch.illustrations.length,
      diagrams: ch.diagrams ? ch.diagrams.length : 0,
      tables: ch.tables ? ch.tables.length : 0,
    });
  }
}
entries.sort((a, b) => a.slug.localeCompare(b.slug));
fs.writeFileSync(
  path.join(root, "manifests/chapters.json"),
  JSON.stringify(entries, null, 2) + "\n"
);
const releasePath = path.join(root, "manifests/release.json");
const release = JSON.parse(fs.readFileSync(releasePath, "utf8")) as Record<string, unknown>;
release["chapters"] = entries.length;
release["diagrams"] = entries.reduce((n, e) => n + e.diagrams, 0);
release["tables"] = entries.reduce((n, e) => n + e.tables, 0);
release["unique_images"] = fs.readdirSync(path.join(root, "assets/original-notes")).length;
release["content_sha256"] = createHash("sha256")
  .update(JSON.stringify(entries))
  .digest("hex")
  .slice(0, 16);
fs.writeFileSync(releasePath, JSON.stringify(release, null, 2) + "\n");
console.log(
  `reconcile-sources OK: ${entries.length} chapters, ` +
  `${release["unique_images"]} images, sha ${release["content_sha256"]}.`
);
