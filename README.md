# Aravind Systems Atlas — Consolidated Content

Versioned content package for the Aravind Systems Atlas. Both the standalone
Atlas site and the portfolio Atlas read from this same tagged release, so
they cannot silently drift apart.

## Release

See `manifests/release.json` for the current release identifier
(`contentRelease`, `version`, `content_sha256`). Both published sites must
display the same identifier.

- **contentRelease:** v1-consolidated-001
- **version:** 1.0.0-continuing
- **status:** research-edition

## Layout

- `chapters/<domain>/<slug>.json` — one complete article per chapter, with
  sources, illustrations, original-note scans, diagrams, tables, related
  concepts, and (for the intro) labelled variant introductions.
- `concepts/concepts.json` — concept index derived from chapter headings.
- `assets/original-notes/` — the 136 unique source scans (SHA-256 verified).
- `assets/illustrations/` — reserved for extracted diagrams.
- `research/` — research evidence. `research/historical-recovery/` holds the
  user-packaged timeline and recovery files (with `MANIFEST.json` checksums).
  The complete 126 MB historical archive is kept out of Git history as a
  backup / GitHub Release asset candidate.
- `archive/` — reserved for original handwritten notes, transcriptions, and
  previous editions.
- `manifests/` — `chapters.json`, `sources.json`, `source-provenance.json`,
  `release.json`, `baseline-paragraph-hashes.json` (preservation evidence).
- `scripts/` — validation and reconciliation tools (see below).
- `tests/` — release checks.

## Preservation

The master was built from the 110.8 MB V1 Research Edition (baseline) plus
the 63.1 MB Industry Evolution Edition, the Knowledge-V1 intro, and the
timeline-recovery evidence. All 7 audited editions share the same 136 unique
images; no unique image was lost. Verification is two-tier: a baseline item
passes on exact match, or on substring containment (the source HTML wraps
step blocks in outer `<p>` tags, so some standalone sentences appear in the
master merged with their step titles — wording intact).

Recovered historical exports are NOT complete verbatim transcripts; coverage
is partial, especially December 2025 to January 2026. Reconstructed summaries
must never be treated as exact original notes.

## Validation (builds fail on any failure)

```sh
node scripts/reconcile-sources.ts   # regenerate manifests from chapter files
node scripts/validate-links.ts      # every chapter, image, note, concept link resolves
node scripts/verify-preservation.ts # every baseline item covered, images non-empty
node tests/release-checks.test.ts   # release identity and chapter files
```

Gates: missing chapter, unresolvable source image, chapter card pointing to
a nonexistent page, or an earlier source item disappearing without an
approved explanation all fail the build.
