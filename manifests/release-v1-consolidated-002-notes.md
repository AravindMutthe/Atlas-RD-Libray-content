# Atlas corrected content release — v1-consolidated-002

**Status:** release record for the corrected content master. This release changes
chapter WORDING ONLY, by the exact owner-authorized correction set below. It
adds no chapters, images, tables, associations, transcriptions, or held
material, and it changes no privacy status, clearance, or exclusion.

## Provenance

- **Parent tag (immutable, unchanged):** `v1-consolidated-001`
- **Parent commit:** `104fe5e2d72e8ef4ed2c9d867ac3ac401a38c6e3`
  (repository `AravindMutthe/aravind-systems-atlas-content`)
- **This release:** `v1-consolidated-002` — new tag on the corrected-master
  commit created from the parent by applying ONLY the correction ledger below.
  The release commit SHA is the tag target (recorded in the release record
  that accompanies this release; a manifest cannot contain its own commit SHA).
- **Authorization:** owner order 2026-10-28 20:37 IST ("I wanted updated one
  with last all modifications and reviewed data"), scoped strictly to the
  already-owner-approved corrections below. No D1–D14 decision is granted or
  applied by this release. D15 (owner iPhone acceptance) remains owed as
  post-deploy acceptance, not as a precondition of this release, at the
  owner's word in that order.

## The correction set (complete — nothing else changed)

Source: Atlas decision batch Stage 5 correction ledger, 2026-10-28
(75 paragraph rows + 6 heading rows = 81 corrected items; 965 of 1,040
paragraphs byte-identical; 0 unaccounted differences; 0 classified "other").

- G-01 (owner tap 2026-10-28 12:31 IST): 9 paragraphs + 1 heading = 10 items.
  Note: there is no 10th G-01 paragraph; "10 claim instances" in the G-01
  acceptance headline reconciles only as 9 paragraphs + 1 heading.
- Siblings (owner tap 2026-10-28 12:46 IST): 55 paragraphs = 58 sentence
  replacements + 5 headings = 60 items.
- Eleven (owner tap 2026-10-28 12:56 IST): 11 paragraphs (4 + 1 + 6) = 11 items.
- Paragraph-level overlap between families: NONE. Heading-level overlap: ONE,
  counted once under G-01 (the 23-artifact-repositories block 7 heading;
  6 distinct heading changes, not 7).

**Record note (Das correction, adopted):** the 81 items are EDITORIAL
CORRECTION RECORDS — owner-authorized honesty corrections to false
present-tense / embedding claims about original-note scans. They are not new
research claims and do not constitute new-research approval.

## Verification (pre-tag gates, all passed)

- Diff (candidate master vs parent `104fe5e2`): EXACTLY the 81 ledger items
  (75 paragraphs + 6 headings); locations and old/new texts match the ledger
  exactly (hash-masked for the elided image-SHA rows); no added, removed, or
  reordered paragraphs; no slug, title, domain, source, count, list, table,
  or diagram change; 41 chapter files changed.
- Diff (candidate chapter text vs deployed branch
  `feat/atlas-audit-corrections-2026-10-28` @ `88d7e54` chapters.ts):
  ZERO chapter-content differences — the candidate equals what production
  already serves.
- Residual scan: ZERO occurrences of all 75 old paragraph texts and all 6 old
  headings in the candidate chapter files.
- Digest method change (documented, not silent): the v1 method (SHA-256 of the
  chapter-metadata entries JSON, truncated to 16 hex characters) cannot
  distinguish text corrections, because all counts are unchanged — it
  reproduces `970489efd3899d29` unchanged for the corrected master, proving
  metadata/counts identical. The v1-consolidated-002 digest is therefore a
  full SHA-256 over the concatenation of the 57 chapter JSON files' raw bytes
  in slug-sorted order (UTF-8, no separators):
  `c60d28fd926710f6a69afd0220efe6b3d572cfe345b33d91a614d89fb9fec494`.
  The old digest `970489efd3899d29` is NOT reused as the content digest; it
  is retained only as `content_sha256_metadata_entries` for continuity.

## Explicit exclusions (NOT in this release)

- b023 proposed chapters N1–N4, 26 b023 embedded images, 48 b023 table cells.
- ANY Ch21 material (mergeable-pending, restricted, or permanently withheld).
- 92 root-page associations. Diagram-deduplication outcomes.
- New taxonomy mappings (five-domain master grouping unchanged).
- M1 (parked). Supporting-sentence final copy (draft stays draft).
- Any privacy-status change, any H1–H9 hold change, any note-image publication.
- The fix coordinator's branch `feat/atlas-batch-fixes-2026-10-28` (separate,
  pending, unverified — untouched; its technical fixes ride a later release,
  if verified).
- Carried from parent, unchanged: `excluded_instances` (3 navigation pages +
  22 duplicate-title teasers).

## Manifest fields (this release)

`contentRelease` v1-consolidated-002 · `contentSourceEdition`
v1-consolidated-001 · `sourceCommit` 104fe5e2… (parent, per the ledger
proposal) · `content_sha256` c60d28fd… (method above) · `version`
1.0.0-continuing · `status` research-edition · 57 chapters · 136 unique
images · 22 diagrams · 48 tables. The served website `/release.json` adds
`applicationCommit` (website build commit) and `applicationVersion`; the
Vercel deployment ID is recorded in the release record accompanying this
release, not embedded in the artifact (an artifact cannot contain its own
deployment's ID).

## Deployment record (added after production deployment; tag unchanged)

- **Content tag:** `v1-consolidated-002` → commit
  `2e6647e61e26e04eb2693943572e36152ed8fe72` (this tag target is unchanged
  by this section; this section was added in a follow-up commit on the
  release branch only).
- **Website branch:** `feat/atlas-release-v1-consolidated-002`
  (repository `AravindMutthe/aravind-systems-atlas`), commits
  `97a8002c500898f8b96038c848a6ce82e62baa7b` (release displays +
  ATLAS_V2_RELEASE constant + served manifest) and
  `4f4b05eeb5f285ee46058690971d09b9a5fed440` (reader meta/footer, search
  prose, search-index header). Both commits are release-metadata only; no
  chapter text changed in either.
- **Production deployment:** `dpl_DpsgjaB3Rm3WneMxmP7zs8K8Xq9j` (READY),
  target production, Vercel project `prj_WjImgjWsR3ANU9p0x7YmWNGmwNEO`,
  files API (260 files: 145 uploaded, 115 hash-deduped, 0 failed).
  Public domain: https://aravind-systems-atlas.vercel.app
- **Rollback:** `dpl_3aDyrYCB7MocBdbJsbmz2nxhHQFv` (preserved, not deleted).
- **Build verification (final export, from branch tip):** typecheck exit 0;
  build exit 0; clearance PASS (260 files, 8 classes clean); sitemap 67;
  57/57 chapter slugs; forbidden outputs absent; JS MAX 152,950 B
  (149.4 KB) WITHIN the ~150 KB target; export scan PASS (all 81 new texts
  present in chapter HTML, zero old texts in any carrier, old digest only
  in /release.json as the metadata-entries field).
- **Live verification (public domain, fresh fetches):** hub 200 with
  release v1-consolidated-002 and corrected packet/VM wordings; library 200
  with all 57 chapters in 5 domain sections (7/10/20/9/11); system-explorer
  200 with PCI-specific and gateway-bound wordings; chapter page
  (communication-trade-the-first-networks) 200 with "Content release
  v1-consolidated-002" and corrected G-01 + eleven wordings; /release.json
  field-by-field verified (contentRelease v1-consolidated-002, digest
  c60d28fd…, parent edition v1-consolidated-001, separated fields);
  sitemap 67 URLs (10 static + 57 chapters).
- **Known intentional v1-consolidated-001 mentions remaining on the live
  site (provenance, not release identity):** library grouping sentence
  ("grouped here by the verified master domains from release
  v1-consolidated-001" — the grouping is unchanged in v2, so the attribution
  remains true); about methodology prose citing the v1 manifest's
  paragraph accounting (unchanged figures); /release.json parent-edition
  and metadata-entries fields. All release badges and the manifest itself
  read v1-consolidated-002.
- **Deployment identity note:** the Vercel deployment ID cannot be embedded
  in the artifact it deploys (self-reference impossibility); it is recorded
  here and in the release record instead, bound to the content tag, content
  commit, website commits, and the deployed /release.json digest above.
- **Still owed after this release:** D15 owner iPhone acceptance (now
  post-deploy acceptance, at the owner's word); all other D-decisions
  (D1–D14) remain open and untouched by this release.
