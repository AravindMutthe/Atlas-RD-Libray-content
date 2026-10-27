import test from "node:test";
import assert from "node:assert/strict";
import * as fs from "node:fs";
import * as path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const release = JSON.parse(
  fs.readFileSync(path.join(root, "manifests/release.json"), "utf8")
) as { contentRelease: string; version: string; status: string; chapters: number };
const chapters = JSON.parse(
  fs.readFileSync(path.join(root, "manifests/chapters.json"), "utf8")
) as { slug: string; title: string; domain: string }[];

test("release manifest identifies the consolidated release", () => {
  assert.equal(release.contentRelease, "v1-consolidated-001");
  assert.equal(release.version, "1.0.0-continuing");
  assert.equal(release.status, "research-edition");
  assert.equal(release.chapters, chapters.length);
  assert.ok(chapters.length > 0);
});

test("every chapter entry has a slug, title, and domain", () => {
  for (const c of chapters) {
    assert.ok(c.slug.length > 0, "empty slug");
    assert.ok(c.title.length > 0, "empty title");
    assert.ok(c.domain.length > 0, "empty domain");
  }
});

test("every chapter file exists and has blocks", () => {
  for (const c of chapters) {
    const file = path.join(root, "chapters", c.domain, `${c.slug}.json`);
    assert.ok(fs.existsSync(file), `missing ${file}`);
    const ch = JSON.parse(fs.readFileSync(file, "utf8")) as { blocks: unknown[] };
    assert.ok(Array.isArray(ch.blocks) && ch.blocks.length > 0, `empty blocks in ${c.slug}`);
  }
});
