# Aravind Systems Atlas — 44-Requirement Traceability Matrix

**Living document.** Maintained at `docs/ATLAS-44-REQUIREMENTS-TRACEABILITY.md` in the
content repo (`AravindMutthe/aravind-systems-atlas-content`). This file supersedes the
status vocabulary of the dated snapshot `atlas-audit/traceability-matrix-2026-10-27.md`
(same evidence, restated in the checklist's status vocabulary).
**Last verified: 2026-10-27 ~12:50 IST.**

Rule, enforced throughout: **a requirement is never marked complete because it appears
in a document, a design mockup, or a preview.** Status reflects code, content, or
verified builds only. The checklist's example rows (R01, R04, R10, R11, R28, R32, R33,
R44) were placeholders, not an audit — the values below are the audit.

## The three inputs (kept distinct, never conflated)

1. **Research source** — Atlas editions, timeline exports, original notes on the phone
   (`/storage/emulated/0/Atlas`), plus the research packs in the content repo.
2. **Product specification** — the 44 numbered requirements (§§1–27 original brief +
   §§28–44 additional requirements) from the 2026-10-27 conversation.
3. **Implementation baseline** — GitHub repos (standalone, portfolio, content, GradeSpot
   Web A / Web B / API) and the website preview (live production sites + standalone
   staging deployment `dpl_EWsqXtEWQ5EdahHY4GWFAcYPmQeo`).

## Three milestones (never describe a later one as done when only an earlier one is)

- **Milestone A — V1 research consolidation and preservation.** Largely delivered:
  master built, validated, tagged, staged. Production promotion still pending his tap.
- **Milestone B — Modern technical library and visual learning platform.** Not started:
  Phase 0+1 approval still pending; no feature branch, no design system, no new reader.
- **Milestone C — AI, GradeSpot integration, advanced learning, commercialization.**
  Future only. Nothing in Milestone C is implemented.

## Status definitions (checklist vocabulary)

- `NOT_STARTED` — no verified implementation.
- `IN_PROGRESS` — development has started. (Currently unused: Phase 0 is audit, not
  development; no platform code is being written yet.)
- `PARTIAL` — some required functionality exists.
- `IMPLEMENTED` — functionality exists in the codebase. (Currently unused: the two
  fully-delivered items also passed verification, so they are `VERIFIED`.)
- `VERIFIED` — functionality has passed relevant tests.
- `BLOCKED` — missing source, dependency, access, or decision. (Currently none.)
- `FUTURE` — explicitly deferred to a later phase (Milestone C, or post-Milestone-B).
- `NOT_APPLICABLE` — not applicable, with documented justification. (Currently none.)

## Summary counts

- `VERIFIED`: 2 (R09, R21)
- `PARTIAL`: 27
- `NOT_STARTED`: 9 (R05, R06, R07, R14, R24, R28, R29, R30, R36)
- `FUTURE`: 6 (R32, R33, R34, R35, R37, R38)
- `IN_PROGRESS`: 0 · `IMPLEMENTED`: 0 · `BLOCKED`: 0 · `NOT_APPLICABLE`: 0
- **Total: 44**

## Source verification inventory (§3 — availability + integrity, verified live)

Verified 2026-10-27 ~12:50 IST by direct `sha256sum` of the phone Atlas root.
"Inspected" means contents were parsed in the preservation audits, not merely listed.

| File | Size (B) | SHA-256 | Status |
|---|---|---|---|
| Aravind-Systems-Knowledge-Atlas-V1-Research-Edition.html (preservation baseline) | 110,847,964 | 522eddd34c4a637fe14c9903c1b580012143625caa2d6faef20bd4fc00c54c86 | Present, parsed in audits |
| Aravind-Systems-Atlas-V1-Industry-Evolution-Edition.html (latest additions) | 63,134,508 | 5834e66dea94c7a1b4b5f0014784c7fd78a4a0606cca6162b432ed3e4c013615 | Present, parsed in audits |
| Aravind-Systems-Knowledge-Atlas-V1.html | 110,841,415 | b85932f3f17602a9d101b799dee497a008ad11c79f3a5e0908b2b01989db542d | Present, parsed in audits |
| Aravind-Systems-Atlas-V1-Archive-First-Preview.html | 110,851,191 | 2558cd422d6d6b61205575b57e114bdec1263987cee55efd3f68049fe8551604 | Present, parsed; text-identical to Research |
| Aravind-Systems-Atlas-V1-Structured-Library.html | 62,913,085 | e9a0765000b8f576c7c7ac5b9fd4bf88990cd1facb11146fc8c8a3fbf7613878 | Present, parsed; subset of Research |
| Aravind-Systems-Atlas-V1-Clean-Reading-Edition.html | 62,919,415 | ba5096b6e488c7939a072c65ce216063c0b8a851b14e1dc6f2099161f9be209e | Present, parsed; subset of Research |
| Aravind-Systems-Atlas-V1-Expanded-Historical-Research.html (+ `-1.html`, byte-identical duplicate) | 62,981,759 | ba2e2fd95e633deb80b3e9d5227a251982c4d80d0f2c185e5787e5f19fcd29be | Present, parsed; extras already in Industry |
| Aravind-Atlas-V1-Expected-Site-Preview.zip (49 chapters + index + css + README) | 247,212 | 0d202fa63f209e8cdb2a2f49350f9745bdfd419170c3fe7eb01152bc16677d49 | Present; preview only, NOT complete evidence |
| Aravind-Atlas-Timeline-Research-Repo-Pack.zip | 15,319 | 72887f28c91364c73e8fed20e30ffa6e7b49fed9b5f3169dc5a2a8e3f04cd01d | Present; all 8 checksums matched; extracted to content repo `research/historical-recovery/` |
| Aravind-Atlas-Timeline-Complete-Archive.zip | 131,951,811 | 808ce24cd7664c38b3a16cadf750618a8d4ae40dbdb211da9d6705e99de95671 | Present; all 10 checksums matched; NOT in git (backup / release-asset candidate) |
| atlas-timeline.md | 6,634 | 0e345dbf84a750f6b6f632f45b21f7f9f63fa6101228ea1fc822b10dbc721a25 | Present; byte-identical to ERA_TIMELINE_README.md |
| atlas-era-recovery-sep-oct-2025.zip (= atlas-download.zip, byte-identical) | 65,980,165 | b835dfdfe122bb9dc99c74860bb0f5c7e4715a7873ff3e1bf63f926fc62b3c14 | Present; evidence inside zips, reconciled from them |
| Original notebook + study photographs | 189 files (129 study + 20 notebook × 3) | 136 unique image payloads verified in master | Present; master carries 136 unique images with provenance |

**New finding from this verification (corrects the earlier inventory framing):** the Atlas
root holds many more edition-like HTMLs than the 7 audited editions — b014, b021, b023,
b028-os-hypervisors, 2025-2026-recovery, conversation-integrated, deep-review,
expanded-offline (×2, identical), final-demo, hybrid-illustrated, hybrid-self-contained,
atlas-offline (= index-1 = index-2, three copies of one 87 MB file), ATLAS_INTEGRATION,
atlas-priority, index set, and a chapter-c01…c29 set (c16 absent from the sequence —
observation only, not claimed as a gap, since this set was never in the audit inventory).
These files were **not** compared against the master in the preservation audits. The
"closed universe" claim (136 images, paragraph universe) therefore holds for the
7 audited editions only. Comparing the remaining root HTMLs against the master is an
open Milestone A task — see Gap G1. Duplicate filenames with identical hashes
(Expanded-Historical ×2, expanded-offline ×2, atlas-offline/index-1/index-2,
era-recovery/download) are source-folder storage duplicates, not master content.

**Research vs product features (never conflated):** a research chapter is content; a
learning path is a structured collection of content; an interactive diagram is a
presentation component; an AI assistant is a service capability; a partnership strategy
is a business requirement; a source-preservation audit is an engineering process. The
44 requirements must NOT all become website navigation items. Proposed Milestone B
learning paths (Networking Foundations, Linux & Operating Systems, Cloud & DevOps,
Cybersecurity, Technology & Industry Evolution) sequence real chapters — they are not
chapters themselves.

## Content consolidation checklist (§4 — 15 steps)

| Step | Status | Evidence |
|---|---|---|
| 1. Inventory all available source editions | Done for 7 audited editions; open for remaining root HTMLs (G1) | Preservation + intermediate audits; inventory table above |
| 2. Record filenames, sizes, SHA-256 | Done for key files (table above) | Verified 2026-10-27 ~12:50 IST |
| 3. Extract chapter headings + stable identifiers | Done | Master: 57 chapters with stable slugs |
| 4. Compare substantive paragraphs across editions | Done | 491 retained; 142 upper-bound unmatched (see G2) |
| 5. Identify content missing from newer editions | Done as upper bound | 142 distinct Research paragraphs not exactly matched in Industry |
| 6. Identify new content absent from older editions | Done | 222 added in Industry; 283 industry paras in master |
| 7. Inventory original images + diagrams | Done | 136 images, 22 diagrams, 48 tables in master |
| 8. Restore original image provenance | Done | Filename refs restored in master `original_notes` |
| 9. Import historical timeline evidence | Done | Content repo `research/historical-recovery/` + `research/conversation-evidence/` |
| 10. Reconcile duplicate chapters | Done | 22 duplicate-title teasers recorded in release.json; 6 substantive second instances kept as `-2` chapters |
| 11. Preserve references and citations | Partial | Edition provenance + scans preserved; per-claim citations to standards/books do NOT exist yet |
| 12. Identify unresolved source gaps | Done | Gaps G1–G7 below |
| 13. Build the V1 Consolidated Master | Done | Content repo commit 104fe5e, tag `v1-consolidated-001`, release 1.0.0-continuing, sha 970489efd3899d29 |
| 14. Validate the master against source inventories | Done | `reconcile-sources`, `validate-links`, `verify-preservation`, 3 release tests — all pass; 806/806 baseline items (760 exact, 46 substring-merged, 0 absent) |
| 15. Produce a preservation report before deployment | Done | `atlas-audit/preservation-audit-2026-10-27.md` + this matrix; production still frozen pending his tap |

## The 44-requirement matrix

| ID | Requirement | Source / specification | Implementation location | Status | Test evidence | Gap |
|---|---|---|---|---|---|---|
| R01 | Roles and responsibilities (architecture, design, editorial, migration, QA, DevOps) | Master brief §1 | This file (content repo `docs/`) + first-response report | PARTIAL | First response delivered 2026-10-27 | No platform team/code yet; roles are process, not product |
| R02 | Existing website audit (both deployments + repos) | Master brief §2 | Content repo + staging build; live standalone + portfolio | PARTIAL | Staging verified vs master; live sites audited as old content | Live sites still serve old 30-chapter content; portfolio staging never built |
| R03 | Repository + project inspection (routes, content loading, dependencies, infra) | Master brief §3 | Standalone, portfolio, content repos; Vercel projects | PARTIAL | Repo names/visibility re-verified live 2026-10-27 | GradeSpot branch/deploy SHAs unverified (GitHub helper truncates ~4 KB) |
| R04 | Source preservation (research, notes, images, historical evidence) | Master brief §4; research archive | Content repo `research/`, `manifests/`; phone `/Atlas` (source) | PARTIAL | `verify-preservation`: 806/806 baseline items | G1 (unaudited root HTMLs), G2 (semantic split), full-collection backup outstanding |
| R05 | Product positioning (connected technical knowledge + learning platform) | Master brief §5 | — (spec only) | NOT_STARTED | None | Product copy not implemented |
| R06 | Design direction (typography, colors, spacing, identity, themes) | Master brief §6 | — (spec only) | NOT_STARTED | None | Tokens proposed, contrast unverified; live sites still V1 design |
| R07 | Global navigation (Explore, Library, Learning Paths, System Explorer, Labs, About) | Master brief §7 | — (spec only; target: app nav) | NOT_STARTED | None | Current nav is chapter menus/sidebar; Labs/Explorer must stay hidden or "planned" until real |
| R08 | Homepage design (hero, search, domain explorer, featured chapters, discovery) | Master brief §8 | Staging hub (V1 design); target: `app/page.tsx` | PARTIAL | Staging hub verified (release badge, 57 chapters) | Brief homepage sections (paths, explorer, timeline, recently-updated) not built |
| R09 | Research domain taxonomy (5 domains) | Master brief §9 | Content repo `chapters/` (5 domain dirs) | VERIFIED | `reconcile-sources` regenerates domain counts; staging organized by domain | None for taxonomy; typed relations are R39 |
| R10 | Technical library (searchable, filterable chapter discovery) | Master brief §10 | Content repo `chapters/` + staging `search.json`; target: `app/library/` | PARTIAL | Staging search entries verified (57) | Filters, sort, difficulty, tags, reading time, full-text search not built |
| R11 | Chapter reader (complete articles, navigation, contents, references) | Master brief §11 | Staging chapter pages; target: `app/library/[domain]/[slug]/` | PARTIAL | Sample chapter markers verified (steps, original notes, image refs, related chapters) | 3-zone layout, TOC, print, font-size, section links not built |
| R12 | Content depth (substantive explanations, full research chapters) | Master brief §12 | Content repo `chapters/` | PARTIAL | Preservation verification (806 items) | Brief example titles are placeholders, not master chapters; per-topic coverage unmapped |
| R13 | Technical visualizations (diagrams, flowcharts, timelines, code, comparison tables) | Master brief §13 | Content repo chapters (diagram/table objects); target: `components/diagrams/` | PARTIAL | Counts generated (22 diagrams, 48 tables) | Reusable component library not built |
| R14 | Two reading experiences (Explore & Learn + Technical Reference, shared canonical content) | Master brief §14 | — (spec only); single presentation on staging | NOT_STARTED | None | Must never fork facts or hide research in the intro view |
| R15 | Original research archive (scans, verified transcriptions, provenance) | Master brief §15 | Content repo `original_notes` + staging refs; target: `app/sources/[source-id]/` | PARTIAL | Staging original-note refs verified | Dedicated /sources viewer not built; verified transcriptions only partial; sensitive material stays private |
| R16 | Technical stack (Next.js, React, TypeScript, supporting architecture) | Master brief §16 | Portfolio repo (Next.js 15.5/TS/Tailwind); content repo layout; standalone static HTML | PARTIAL | Build + validation scripts pass | DEVIATION: master is JSON, not MDX — JSON stays source of truth; standalone is not Next.js; no GitHub Actions CI; deploys via files API (git deploys seat-blocked) |
| R17 | Content data model (stable IDs, slugs, metadata, relationships) | Master brief §17 | Content repo `chapters/*.json` + `manifests/chapters.json` | PARTIAL | `validate-links` passes | Difficulty, status, reading minutes, tags incomplete; slug-change redirects missing |
| R18 | SEO + discoverability (semantic content, canonical URLs, metadata, structured data) | Master brief §18 | Staging static pages (partial) | PARTIAL | None for sitemap/structured data | Sitemap/robots/OG/structured data not built; LIVE VIOLATION: portfolio + standalone both carry the same full old text |
| R19 | Accessibility + responsive design (desktop, tablet, mobile, WCAG 2.2 AA) | Master brief §19 | Staging V1 styling (responsive) | PARTIAL | Not tested | WCAG 2.2 AA untested; new reader layouts not built |
| R20 | Commercialization architecture (premium-ready, free research uncompromised) | Master brief §20 | Staging free library; premium: none | PARTIAL | None | Premium layers intentionally deferred (Milestone C) |
| R21 | Content versioning (releases, manifests, commits, checksums) | Master brief §21 | Content repo `manifests/release.json` | VERIFIED | Staging release.json verified identical to master (v1-consolidated-001, sha 970489efd3899d29) | Manifest timestamp field to confirm on next revision (commit + tag already recorded) |
| R22 | Automated testing (routes, content, images, metadata, a11y, preservation) | Master brief §22 | Content repo `scripts/` + `tests/` | PARTIAL | `reconcile-sources`, `validate-links`, `verify-preservation`, 3 release tests — all pass | MDX validity N/A (JSON, not MDX); automated a11y/mobile/search-failure tests not built |
| R23 | Implementation phases (discovery, design, reconciliation, development, QA, deployment) | Master brief §23 | This file + freeze record | PARTIAL | Phase 0 audits + standalone staging delivered | Phases 1–5, 7 not done; production needs his tap |
| R24 | Branching strategy (feature branches, PRs, protected production) | Master brief §24 | — (branch not created); target: `feat/atlas-platform-v2` | NOT_STARTED | None | First step after Phase 0+1 approval; mains untouched so far (good) |
| R25 | Required deliverables (code, audits, docs, tests, previews) | Master brief §25 | Content repo `docs/` (this file) + `atlas-audit/` | PARTIAL | Listed artifacts verified present | IA/sitemap, design system spec, new homepage/library/reader, CI/CD, portfolio staging, production plan not produced |
| R26 | Acceptance criteria (completeness, design, navigation, performance, source integrity) | Master brief §26 | Staging verification vs master | PARTIAL | Staging verification | NOT met on production (old content; portfolio duplicates full text); modern reader not built |
| R27 | First-response instructions (existing-state findings + risks before major changes) | Master brief §27 | Conversation first response + this file | PARTIAL | A–F delivered 2026-10-27 | Branch work awaits Phase 0+1 approval |
| R28 | Advanced frontend technologies (interactive diagrams, animation, illustrations, visual learning) | Extended brief §28 | — (spec only; target: `components/diagrams/`) | NOT_STARTED | None | Libraries to be used selectively; heavy modules lazy-loaded; no invented imagery |
| R29 | Example-first explanations (concrete examples in nearly every substantive section) | Extended brief §29 | — (spec only; editorial pass pending) | NOT_STARTED | None | ~99% is a target, not a verified metric; exclude references/legal/metadata |
| R30 | Interactive System Explorer (connected, clickable system diagrams) | Extended brief §30 | — (spec only; target: `app/explore/`) | NOT_STARTED | None | Static SVG/Mermaid where simpler; never force every article into a canvas |
| R31 | Historical + industrial evolution (timelines connecting eras, industries, infrastructure, institutions) | Extended brief §31 | Content repo `research/historical-recovery/` + `atlas-timeline.md` | PARTIAL | Pack checksums verified (8/8, 10/10) | Interactive timeline experience not built |
| R32 | Future AI + GenAI integration (source-grounded assistants, tutors, architecture helpers, assessments) | Extended brief §32 | — (spec only; target: `docs/ai/`) | FUTURE | None | Milestone C; verified library stays the fact source; model never authoritative; private material never trains external models |
| R33 | GradeSpot ecosystem integration (Web A Leo, Web B Rebuild, Axon API/backend) | Extended brief §33 | — (spec only; target: `integrations/gradespot/`) | FUTURE | Repos mapped (names + visibility verified 2026-10-27) | Milestone C; stable APIs/deep links only; no customer-DB access; API contracts required; IP/licensing unresolved |
| R34 | GradeSpot business growth research (IT services, education, EdTech, SaaS, AI, local/global) | Extended brief §34 | — (spec only; GradeSpot research corpus as source) | FUTURE | None | Milestone C; no fabricated market projections |
| R35 | Partnerships + collaborations (colleges, dev communities, startup networks, vendors, B2B) | Extended brief §35 | — (spec only) | FUTURE | None | Milestone C; no affiliation/acceptance/partnership claimed without evidence |
| R36 | Global + local business network explorer (customers, suppliers, ownership, operations, financial, regulatory) | Extended brief §36 | — (spec only; target: explorer) | NOT_STARTED | None | Relationship types (ownership vs service vs customer vs data vs financial vs regulatory) must not be conflated |
| R37 | User acquisition + visitor growth (SEO, community, distribution, conversion) | Extended brief §37 | — (spec only) | FUTURE | None | Milestone C; no spam, purchased traffic, or misleading certification claims |
| R38 | Commercial models (training, premium labs, digital products, consulting, subscriptions, B2B) | Extended brief §38 | — (spec only) | FUTURE | None | Milestone C; profitability not assumed; free library stays free |
| R39 | Knowledge graph (technologies, organizations, industries, concepts, typed relations) | Extended brief §39 | Content repo chapters (`related_concepts`) | PARTIAL | Related-chapter markers verified on staging | Typed relations (depends on, implements, owns, regulates…) not modelled; company relations need evidence |
| R40 | Visual learning standards (images, diagrams, examples, comparisons, practical illustrations) | Extended brief §40 | Content repo chapters (diagrams/tables) | PARTIAL | Counts generated (22 diagrams, 48 tables) | Per-chapter coverage not audited; standards not applied as a pass |
| R41 | Performance + cost control (loading, rendering, search, hosting, interactive modules) | Extended brief §41 | Staging static build | PARTIAL | Staging files verified (199 files, 44 MB) | Image optimization/responsive images, build-time search, Core Web Vitals monitoring not done; no GPU/3D for normal reading |
| R42 | Implementation priorities (reliable core before AI, advanced integrations, commercialization) | Extended brief §42 | This file (phases) | PARTIAL | P1 underway (preservation, master, staging) | P2 partial (diagrams/tables exist; paths/labs not); P3–P5 future |
| R43 | Additional deliverables (tech selections, AI architecture, GradeSpot integration, business research reports) | Extended brief §43 | Content repo `docs/` (this file); rest pending | PARTIAL | This file; tech justification + roadmap drafted in conversation | Diagram library, visual standards, AI-ready spec, retrieval/citation strategy, KG model, integration architecture, classification report, partnership matrix, acquisition strategy, business comparison, editorial guidelines, perf/a11y strategy not produced |
| R44 | Final product principle (what → why → how → evolved → who builds/owns/operates/pays → where used → connections → what's next) | Extended brief §44 | Editorial guidelines (pending); principle in brief | PARTIAL | Principle adopted; chapters preserve research depth | 11-question chain not applied as a systematic editorial pass; GradeSpot chain is a framework, not a success guarantee |

## Architecture + sitemap (proposed, Milestone B — not built)

- Standalone Atlas = canonical full platform. Portfolio Atlas = introduction + deep
  links to canonical chapters. No independent drifting copies.
- Explore (Featured Topics, Research Domains, Technology Timelines, Industry
  Ecosystems) · Library (5 domains) · Learning Paths (Networking Foundations, Linux &
  Operating Systems, Cloud & DevOps, Cybersecurity, Technology & Industry Evolution) ·
  System Explorer (Architecture Diagrams, Protocol Flows, Knowledge Graph, Business
  Network Explorer) · Labs (Practical Exercises, Projects, Assessments) · Sources
  (Original Notes, Historical Research, References) · About.
- Planned features must not appear as functional production destinations until they
  exist. No Labs/System Explorer/AI nav item ships empty.

## Open gaps (carried forward, not hidden)

- **G1.** Remaining Atlas root HTMLs (b-series, recovery, deep-review, hybrid,
  atlas-offline/index set, chapter-c set) never compared against the master. The
  closed-universe claim covers the 7 audited editions only.
- **G2.** Semantic paragraph pass: split the 142 upper-bound unmatched paragraphs into
  deletions vs rewrites (exact matching counts rewrites as missing).
- **G3.** Full-resolution photo re-checks pending: 020, 040, 091, 092, 093, 095, 074
  right column. Per-claim citations to standards/books do not exist yet.
- **G4.** Separate backup of the full Atlas source collection + all notebook photographs
  outstanding (user packs cover timeline-recovery material only).
- **G5.** GradeSpot branch/deploy SHAs unverified (tool limitation, §R03).
- **G6.** Production still serves old 30-chapter content on both sites; portfolio still
  duplicates full text (violates R18 until it becomes a gateway).
- **G7.** Phase 0+1 approval pending — no Milestone B branch, design system, or new
  reader exists yet. Freeze holds: nothing deploys to production on this matrix's word.
