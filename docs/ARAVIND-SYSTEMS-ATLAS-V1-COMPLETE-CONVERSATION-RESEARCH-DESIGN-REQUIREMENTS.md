# Aravind Systems Atlas — V1 Complete Conversation, Research & Design Requirements

**Reconciliation layer, not a completeness claim.**
Companions: `docs/ARAVIND-SYSTEMS-ATLAS-V1-FINAL-MASTER-REQUIREMENTS.md` (canonical
specification, 44 requirements in full) and `docs/ATLAS-44-REQUIREMENTS-TRACEABILITY.md`
(implementation traceability report). This document reconciles those with the later
seven-domain expansion, the morning discussions, the consolidated content master, the
standalone website, and the portfolio gateway — and records, explicitly, where they
do not yet agree.

## 0. The distinction this document exists to enforce

**A successful content release is not the same as completing the Atlas V1 website
redesign.** The standalone Atlas now has a consolidated 57-chapter content release.
That does not establish that the design, layouts, navigation, visual learning
experiences, or business/economics research structure discussed have been
implemented.

**Current live site = content-release baseline, not the final Atlas V1 experience.**
Production deployment `dpl_GbyEKCL4teT5vhnAPv9qiPustsRb` (READY) serves release
`v1-consolidated-001` (57 chapters, 136 images, 22 diagrams, 48 tables, content SHA
`970489efd3899d29`, verified on the public domain). Rollback deployment
`dpl_GybGUAeXR9SAkfVpFRkFsnVDBbBL` is preserved. **The 57 chapters must not be
replaced or reduced simply to achieve a cleaner design.** Redesign (Milestone B)
must accommodate the full preserved content; cutting content for layout is
forbidden. Production stays unchanged while this reconciliation and the frontend
audit proceed.

## 1. Three kinds of completeness (never collapsed into one percentage)

| Completeness | Question | Current verdict | Evidence |
|---|---|---|---|
| Conversation completeness | Have we captured every meaningful decision, idea, question, and requirement from all discussions? | **Not demonstrated.** Today's major themes are captured; pre-today historical conversations have not been recovered or audited by this assistant. | This chat + compacted summary (2026-10-27); no historical-conversation audit exists. |
| Research completeness | Have we preserved every available original note, source, subject, concept, and illustration in the consolidated master? | **Partial.** 806/806 baseline items verified for the 7 audited editions; remaining root HTMLs, semantic paragraph split, and photo re-checks open. | Preservation audits; gaps G1–G4. |
| Implementation completeness | Does the deployed website deliver the approved structure, design, functionality, and content? | **Partial.** Content release live; Milestone B platform (new design system, reader, explorer, paths) not built. | Traceability matrix: VERIFIED 2, PARTIAL 27, NOT_STARTED 9, FUTURE 6. |

No single completion percentage may be reported. Each release reports the three
separately. **100% completeness is not claimed for any of the three.**

## 2. Provenance rules — three origins, never interchangeable

Every requirement in §4–§5 carries one origin:

- **Origin A — User's original research.** Atlas editions, notebook photographs,
  study photos, timeline exports, recovery archives. Preserved, never rewritten as
  if it were new.
- **Origin B — User's approved product decisions.** His explicit words only:
  freeze, staging-first, deploy order, link-means-deploy rule, canonical spec
  placement, 57-chapter no-reduction rule, project walls, zero budget. These bind.
- **Origin C — AI suggestions.** Briefs, blueprints, the seven-domain proposal, the
  multi-perspective model, example tables. These are **proposals** until he adopts
  them. A suggestion never becomes a decision by being written into a document.

Requirements introduced after the original 44 are added explicitly as R45+ below —
never silently folded into older items.

## 3. The original 44 (compact reconciliation table)

Full requirement text: canonical specification. Status: traceability matrix.
Acceptance criterion: the matrix's Gap column must be empty for a requirement to be
VERIFIED; PARTIAL items carry their gap explicitly.

| ID | Requirement (one line) | Origin | Status | Acceptance criterion (short) |
|---|---|---|---|---|
| R01 | Multidisciplinary-team role; inspect then build; no false completion claims | C (brief) | PARTIAL | First response delivered; platform build not started |
| R02 | Standalone canonical; portfolio curated gateway; no two full copies | B+C | PARTIAL | Portfolio gateway built; both sites report same release |
| R03 | Repository + project inspection; audit before destructive change | C (brief) | PARTIAL | Code-level repo audit complete incl. GradeSpot SHAs |
| R04 | Source preservation; 8 reconciliation reports; no overwrite | A+B | PARTIAL | G1/G2 closed; full per-file SHA table complete |
| R05 | Product positioning (connected knowledge + learning platform) | C (brief) | NOT_STARTED | Positioning copy shipped on new homepage |
| R06 | Design direction (tokens, typography, themes) | C (brief) | NOT_STARTED | Design system built; contrast verified |
| R07 | Global navigation (Explore, Library, Paths, Explorer, Labs, About) | C (brief) | NOT_STARTED | Nav shipped; unbuilt items hidden or "planned" |
| R08 | Homepage (hero, search, domains, featured, discovery) | C (brief) | PARTIAL | Brief homepage sections built on real content |
| R09 | Five-domain taxonomy (content organization) | C (brief) | VERIFIED | Counts generated from content (holds today) |
| R10 | Technical library (search, filters, sort, real-article cards) | C (brief) | PARTIAL | Filters/sort/full-text search functional |
| R11 | Chapter reader (3-zone, TOC, tools, references) | C (brief) | PARTIAL | New reader shipped on desktop + mobile |
| R12 | Content depth (no 3-paragraph summaries) | A+C | PARTIAL | Per-topic depth mapped to real chapters |
| R13 | Visual technical content (diagram components) | C (brief) | PARTIAL | Reusable diagram library shipped |
| R14 | Two reading experiences on shared canonical content | C (brief) | NOT_STARTED | Mode switch shipped; facts never forked |
| R15 | Original research archive (/sources/[id]) | A+C | PARTIAL | Dedicated sources viewer shipped |
| R16 | Technical stack (Next.js/TS/Tailwind; JSON deviation recorded) | C (brief) | PARTIAL | CI set up; stack decision (JSON vs MDX) closed |
| R17 | Content data model (stable IDs, slugs, metadata) | C (brief) | PARTIAL | Difficulty/status/reading/tags complete; redirects live |
| R18 | SEO + discoverability (canonical, sitemap, structured data) | C (brief) | PARTIAL | Sitemap/OG/structured data live; portfolio duplication ended |
| R19 | Accessibility + responsiveness (WCAG 2.2 AA) | C (brief) | PARTIAL | WCAG 2.2 AA tested on desktop + mobile |
| R20 | Commercialization architecture (free library uncompromised) | C (brief) | PARTIAL | Free tier intact; premium layers deferred by design |
| R21 | Content versioning (release manifest, checksums) | B+C | VERIFIED | Manifest matches published release (holds today) |
| R22 | Automated testing (routes, content, images, metadata, a11y, preservation) | C (brief) | PARTIAL | a11y/mobile/search-failure tests added |
| R23 | Implementation phases 0–7 | C (brief) | PARTIAL | Phases 1–5, 7 executed |
| R24 | Branching strategy (feature branches, protected main) | C (brief) | NOT_STARTED | `feat/atlas-platform-v2` created; mains protected |
| R25 | Required deliverables 1–16 | C (brief) | PARTIAL | All 16 produced as files/commits/previews |
| R26 | Acceptance criteria | C (brief) | PARTIAL | All criteria met on production, not staging only |
| R27 | First-response instructions (A–F before major changes) | C (brief) | PARTIAL | Branch work begun only after approval |
| R28 | Advanced frontend (selective stack, lazy heavy modules) | C (brief) | NOT_STARTED | Components shipped selectively, performance held |
| R29 | Example-first explanations (~99% target, not a metric) | C (brief) | NOT_STARTED | Editorial pass measured, not asserted |
| R30 | Interactive System Explorer (/explore) | C (brief) | NOT_STARTED | At least one end-to-end explorer (only if V1 bar adopted, D2) |
| R31 | Historical + industrial evolution timelines | A+C | PARTIAL | Interactive timeline experience shipped |
| R32 | Future AI + GenAI (grounded, cited, never authoritative) | C (brief) | FUTURE | Milestone C; prototype only if D2 adopts it into V1 |
| R33 | GradeSpot ecosystem integration (stable APIs/links only) | C (brief) | FUTURE | Contracts audited; no customer-DB access; IP/licensing resolved |
| R34 | GradeSpot growth + business ecosystem research | C (brief) | FUTURE | Evidence-based report; no fabricated projections |
| R35 | Partnerships + collaborations (no fabricated status) | C (brief) | FUTURE | Partner matrix with evidence URLs |
| R36 | Global + local business network explorer | C (brief) | NOT_STARTED | Explorer shipped; relationship types distinguished |
| R37 | User acquisition + visitor growth | C (brief) | FUTURE | Measured engagement, not assumed conversion |
| R38 | Commercial models (evaluated, conservative) | C (brief) | FUTURE | Model comparison with labeled assumptions |
| R39 | Knowledge graph (typed relations, evidenced) | C (brief) | PARTIAL | Typed relations modelled; company relations evidenced |
| R40 | Visual learning standards (diagrams, examples, tables) | C (brief) | PARTIAL | Per-chapter coverage audited |
| R41 | Performance + cost control (static, lazy, minimal JS, CWV) | C (brief) | PARTIAL | Image optimization, build-time search, CWV monitoring live |
| R42 | Implementation priorities P1–P5 | C (brief) | PARTIAL | Sequencing followed through delivery |
| R43 | Additional deliverables 1–14 | C (brief) | PARTIAL | All 14 produced |
| R44 | Final product principle (11-question chain) | C (brief) | PARTIAL | Chain applied as an editorial pass |

## 4. Post-44 requirements (added explicitly, with origin + adoption status)

### R45 — Seven-domain target taxonomy (PROPOSED, not adopted)

- **Proposal (Origin C):** Computing & Hardware; Networks & Infrastructure;
  Evolution & History; Industries & Sectors; Business & Organizations; Economics &
  Markets; Ecosystems & Relationships. Organizes a larger chapter library without
  making every concept a top-level menu item.
- **Inconsistency (stated, not hidden):** the canonical specification and the live
  content organization still use **five** domains. The seven-domain proposal does
  not overwrite them until a decision is made.
- **Expected behavior if adopted:** every one of the 57 chapters re-mapped to the
  seven domains in a verified pass; both sites and both documents updated together;
  no chapter dropped in the re-mapping.
- **Target:** content taxonomy + library filters. **Repo:** content repo.
- **Status:** NOT_STARTED (decision D1 pending). **Acceptance:** re-mapping
  verified chapter-by-chapter, or an explicit decision to keep five domains.

### R46 — Multi-perspective concept presentation (PROPOSED)

- **Proposal (Origin C):** a reader can explore one concept from multiple
  perspectives. Example — Cloud Computing: Technical (servers, VMs, containers,
  networking); Historical (mainframes → virtualization → cloud); Industrial (data
  centers, chips, energy, telecom); Business (IaaS, PaaS, SaaS, managed services);
  Economic (pricing, scale, capital expenditure); Market (AWS, Azure, Google Cloud,
  customers); Relationships (vendors, partners, regulators, users); Future (AI
  infrastructure, edge, sustainability).
- **Expected behavior:** concept dimensions shown only where content exists;
  diagrams, real examples, historical comparisons, visual relationships,
  illustrations, interactive explanations, and multiple depth levels — never
  decoration, never invented content.
- **Target:** chapter reader + concept pages + explorer. **Repo:** standalone.
- **Status:** NOT_STARTED. **Acceptance:** at least one concept demonstrably
  presented across its dimensions from real chapters.

### R47 — Participant-role model (PROPOSED)

- **Proposal (Origin C):** Visitor (reads a page), User (uses the platform), Lead
  (expresses interest), Customer (purchases), Consumer (ultimately benefits),
  Client (receives a professional service), Partner (agreed cooperative
  relationship), Collaborator (works together on an activity), Supplier/vendor
  (supplies goods/services), Competitor (competing solution). One person can occupy
  several roles simultaneously (a student may be visitor, user, consumer, and
  paying customer).
- **Expected behavior:** roles distinguished wherever they affect CRM
  architecture, analytics, marketing, data privacy, contracts, or revenue
  attribution. GradeSpot examples used illustratively (course page reader,
  assessment student, training inquiry, company paying for employee training,
  employee attending, website commission, referral agreement, college club
  workshop, hosting/messaging provider, rival institute).
- **Target:** ecosystem + CRM-related pages. **Repo:** standalone (Atlas side only).
- **Status:** NOT_STARTED. **Acceptance:** role distinctions appear in ecosystem
  content and any future CRM contract; no role conflated with another.

### R48 — Business models and organizational structures depth (PARTIAL content)

- **Proposal (Origin C):** compare B2B (e.g., Azure serving enterprises), B2C
  (e.g., Netflix subscriptions), B2B2C (e.g., Shopify-powered storefronts), B2G
  (government IT procurement), D2C (e.g., Nike direct sales), Marketplace (e.g.,
  Amazon Marketplace), SaaS (e.g., Salesforce), Managed services, Franchise (e.g.,
  McDonald's), Platform ecosystem (e.g., Apple App Store). Separately cover sole
  proprietorships, partnerships, LLPs, private and public companies, holding
  companies, subsidiaries, joint ventures, cooperatives, nonprofits,
  conglomerates, multinational enterprises. Examples are illustrative, not Atlas
  research claims.
- **Evidence in the live master (Origin A, verified on the public hub):**
  "Technology leadership & business models" (17 paragraphs, 2 images); "Market
  Structures, Integration, Consolidation and the Distribution of Control"
  (6 paragraphs). Present but thin — depth unverified.
- **Target:** library (Business & Organizations if D1 adopts seven domains).
  **Repo:** content repo. **Status:** PARTIAL.
- **Acceptance:** model comparisons + legal-form coverage present as substantive
  chapters, not single-paragraph mentions; illustrative examples labeled as such.

### R49 — Economics and markets depth (PARTIAL content)

- **Proposal (Origin C):** microeconomics and macroeconomics; supply and demand,
  pricing, competition; market structures (monopoly, oligopoly, monopolistic
  competition, perfect competition as a theoretical model); primary, secondary,
  tertiary, quaternary sectors; capital, labor, productivity, industrial
  development; banking, payments, credit, financial markets; trade, imports,
  exports, global value chains; public goods, regulation, taxation,
  public-private partnerships; network effects, platform economics, switching
  costs; geographic markets (local, regional, national, international); industry
  concentration, mergers, vertical/horizontal expansion. A cloud article should
  connect AWS infrastructure to capital expenditure, economies of scale,
  enterprise procurement, platform ecosystems, energy markets, government
  regulation — not just VMs and storage.
- **Evidence in the live master (Origin A, verified on the public hub):**
  "Global Digital Delivery: Networks, Operators, Platforms and Revenue"
  (7 paragraphs); "The Global Digital Industry Stack" (9 + 7 paragraphs);
  "From Electrical Communication to the AI Infrastructure Economy" (25 paragraphs);
  "AI infrastructure, power and the digital economy" (10 paragraphs);
  "Industrial Evolution: From Merchant Networks to AI Ecosystems" (32 paragraphs).
  Present but uneven — formal market-structure theory and banking/payments depth
  unverified.
- **Target:** library (Economics & Markets if D1 adopts seven domains).
  **Repo:** content repo. **Status:** PARTIAL.
- **Acceptance:** economics dimensions present as substantive chapters with
  verified examples; no fabricated statistics.

### R50 — Horizontal vs vertical integration, distinguished (PARTIAL content)

- **Proposal (Origin C):** Horizontal integration — same-stage combination (a
  training company acquiring another training company in the same market).
  Vertical integration — one company across stages (develops, teaches, and sells
  its own courses directly: content creation → training delivery → direct
  distribution). Must also distinguish vertical integration from industry
  verticals, and horizontal integration from horizontal software products —
  similar-sounding, different concepts.
- **Evidence in the live master (Origin A):** "Vertical, Horizontal and Platform
  Integration Across Technology Eras" (5 paragraphs). Present but thin.
- **Target:** library. **Repo:** content repo. **Status:** PARTIAL.
- **Acceptance:** all four distinctions explained with real or clearly labeled
  illustrative examples.

### R51 — Supply chains, procurement, channels (PARTIAL content)

- **Proposal (Origin C):** supply chains, procurement, channel relationships;
  suppliers, vendors, distribution.
- **Evidence in the live master (Origin A):** "Institutions, standards & global
  supply chains" (17 paragraphs, 8 images). Present; procurement/channel depth
  unverified.
- **Target:** library. **Repo:** content repo. **Status:** PARTIAL.
- **Acceptance:** supply-chain, procurement, and channel coverage present as
  substantive material, not only as a chapter title.

### R52 — Public, private, and government networks (PARTIAL content)

- **Proposal (Origin C):** B2B, B2C, B2G, G2B, B2B2C, public-private ecosystems.
- **Evidence in the live master (Origin A):** "Public Infrastructure, Private
  Ecosystems and the Changing Geography of Control" (6 paragraphs). Present but
  thin; B2G/G2B/B2B2C as explicit models unverified.
- **Target:** library. **Repo:** content repo. **Status:** PARTIAL.
- **Acceptance:** each model explained with an example; public-private
  distinctions explicit.

### R53 — Complete technology evolution incl. Web 0/1/2/3, open source, AI to 2026

- **Discussion (today's history, via forwarded summary):** computing, hardware,
  operating systems, networking, virtualization, cloud, cybersecurity, Web 0/1/2/3,
  open source, AI developments through 2026.
- **Evidence in the live master (Origin A):** "From Pre-Web Networks to Web 1.0,
  Web 2.0 and the AI Web" (16 paragraphs); "Shared Foundations, Open Source and
  the Construction of Private Ecosystems" (8 paragraphs). Web 1.0/2.0/AI Web
  present; **Web 0 and Web 3 as explicit coverage unverified** — must be checked
  against the master before any claim.
- **Target:** library (Evolution & History if D1 adopts seven domains).
  **Repo:** content repo. **Status:** PARTIAL.
- **Acceptance:** each era (including Web 0 and Web 3 if claimed) traceable to a
  chapter; gaps listed, not papered over.

### R54 — Conversation completeness audit (NOT_STARTED)

- **Requirement (Origin C recommendation, endorsed approach):** audit conversation
  history — not just today's chat — and map every meaningful decision, idea,
  question, and requirement to this document or to an explicit gap. Today's major
  themes are captured here; **pre-today history is not yet recovered**, and no
  claim of full conversation capture is made.
- **Target:** this document's §3/§5 tables. **Repo:** content repo docs/.
- **Status:** NOT_STARTED. **Acceptance:** audit report listing sources checked,
  items captured, and items still unrecovered.

### R55 — Research Coverage Matrix (NOT_STARTED)

- **Requirement (Origin C recommendation):** alongside the 44-requirement
  checklist, a matrix mapping every source concept to domain, destination
  chapter, and verification status (e.g., BGP routing → Networks &
  Infrastructure → Internet Routing → pending source audit; vertical integration
  → Business & Organizations → Corporate Integration → pending source audit;
  customer vs consumer → Ecosystems & Relationships → Market Participants →
  pending source audit; global supply chains → Industries & Sectors → Global
  Value Chains → pending source audit; platform economics → Economics &
  Markets → Digital Platform Economics → pending source audit). Example
  destinations are illustrative until verified.
- **Rule:** the audit inspects original notes, all HTML editions, timeline
  archives, and relevant repositories, and identifies concepts with no
  corresponding published chapter. Concepts with no source are marked "new
  research required," never presented as preserved.
- **Target:** content repo docs/. **Status:** NOT_STARTED (domain column depends
  on decision D1). **Acceptance:** matrix covers the audited source universe
  with no concept left unmapped or silently dropped.

### R56 — Frontend-vs-requirements audit, preserving all 57 chapters (NOT_STARTED)

- **Requirement (Origin B — user's own words this turn):** audit the actual
  frontend against the approved requirements while preserving the published
  content and production rollback. The live site is the baseline; the audit
  compares code, routes, layouts, navigation, and components against R01–R60.
- **Rule (Origin B):** never replace or reduce the 57 chapters to achieve a
  cleaner design.
- **Target:** standalone repo + portfolio repo. **Status:** NOT_STARTED.
- **Acceptance:** audit report mapping each requirement to code evidence or an
  explicit gap; chapter count still 57 afterward.

### R57 — Three-completeness reporting (NOT_STARTED)

- **Requirement (Origin C):** every release reports conversation, research, and
  implementation completeness separately, with evidence. No single percentage,
  no "100% complete" claim until specification, original research, and actual
  implementation are reconciled.
- **Target:** release manifest + traceability report. **Repo:** content repo.
- **Status:** NOT_STARTED. **Acceptance:** release notes carry the three
  verdicts with evidence links.

### R58 — SEO/AEO, audience growth, licensing (FUTURE)

- **Discussion:** SEO/AEO, audience growth, partnerships, licensing,
  monetization, costs. As implementation this is R37/R38 (FUTURE).
- **Status:** FUTURE. **Acceptance:** per R37/R38.

### R59 — Grounded AI assistant, RAG, concept discovery, personalized learning (FUTURE)

- **Discussion:** grounded research assistant, RAG, concept discovery,
  personalized learning. As implementation this is R32 (FUTURE).
- **Status:** FUTURE. **Acceptance:** per R32; prototype only if D2 adopts it
  into V1.

### R60 — Complete design system (NOT_STARTED)

- **Discussion:** typography, colors, spacing, cards, navigation, animations,
  dark/light themes; hero, editorial layout, discovery sections, visual
  storytelling, research highlights.
- **Current state:** the live site uses the V1 design (dark header, paper
  gradient, teal, gold), not the briefs' navy/blue/teal system. The new design
  system is Milestone B work, not shipped.
- **Target:** standalone app. **Status:** NOT_STARTED.
- **Acceptance:** design system built on real content; contrast verified;
  responsive + accessible on desktop and mobile.

## 5. Discussion-area coverage (honest capture status)

| Area | Discussion origin | Implementation status (matrix) | Capture status |
|---|---|---|---|
| Research preservation | A + today's discussion | PARTIAL (R04) | Today's themes captured; pre-today history unrecovered |
| Knowledge organization (chapters, concepts, domains, graph) | C (briefs + 7-domain proposal) | PARTIAL (R09/R39) | Captured; taxonomy decision pending (D1) |
| Homepage design | C (briefs + blueprint) | PARTIAL (R08) | Captured |
| Complete design system | C (briefs + blueprint) | NOT_STARTED (R06/R60) | Captured |
| Chapter reading experience | C (briefs) | PARTIAL (R11/R14) | Captured |
| Interactive experiences | C (briefs + blueprint) | NOT_STARTED/FUTURE (R30/R36) | Captured |
| Technology subjects | A + C | PARTIAL (R12) | Captured; Web 0/3 unverified (R53) |
| Industries and business | A + C | PARTIAL (R48/R50) | Captured; depth unverified |
| Economics and markets | C (proposal) | PARTIAL (R49) | Captured; formal theory unverified |
| Business ecosystems (roles, vendors, partners) | C (proposal) | NOT_STARTED (R47) | Captured as proposal |
| Learning and research (paths, labs, examples, reference mode) | C (briefs) | PARTIAL/NOT_STARTED (R10/R14/R29) | Captured |
| Future AI | C (briefs) | FUTURE (R32/R59) | Captured as future |
| GradeSpot integration | B + C | FUTURE (R33) | Captured; contracts unaudited |
| Commercialization | C (briefs) | FUTURE (R37/R38/R58) | Captured as future |
| Engineering quality (a11y, performance, responsive, security, CI/CD, testing) | C (briefs) | PARTIAL (R19/R22/R41) | Captured |
| Release management (canonical content, staging, freeze, rollback, gateway) | B | PARTIAL/VERIFIED (R21 + deploy) | Captured; portfolio gateway pending |

## 6. Decisions required (nothing below is decided by this document)

- **D1 — Taxonomy:** adopt seven domains as the Milestone B target (re-mapping
  the 57 chapters in a verified pass) or keep five domains. Until decided, five
  domains remain the content organization and seven remain a proposal.
- **D2 — V1 bar:** does V1 Final require at least one working System Explorer
  end-to-end and one optional citation-grounded AI prototype (blueprint's bar),
  or do those stay post-V1 (canonical spec's Milestone C)? This decides whether
  R30/R32 move into V1 scope.
- **D3 — Content format:** JSON source of truth — already decided and recorded
  (Appendix A of the canonical spec); MDX generation from JSON remains possible.
- **D4 — Portfolio gateway:** direction still pending (curated intro + deep links
  is the canonical rule; the build itself is not approved or started).
- **D5 — Coverage-matrix build:** authorize R55 (and R54 conversation audit) now,
  or after D1. The domain column depends on D1, but the source-concept inventory
  can start independently.

## 7. Open gaps (carried + new)

- G1. Remaining Atlas root HTMLs never compared against the master.
- G2. Semantic paragraph split (142 upper-bound) unresolved.
- G3. Full-resolution photo re-checks + per-claim citations outstanding.
- G4. Separate backup of the full source collection + notebook photographs
  outstanding.
- G5. GradeSpot branch/deploy SHAs unverified; code-level repo audit not done.
- G6. Portfolio production still old content; gateway unbuilt (canonical rule
  forbids a full-copy deploy).
- G7. Phase 0+1 approval pending — no Milestone B branch, design system, or new
  reader exists yet.
- **G8. Conversation history recovery (R54) not started — completeness of capture
  unproven for pre-today discussions.**
- **G9. Frontend-vs-requirements audit (R56) not started.**
- **G10. Five-vs-seven domain inconsistency explicitly unresolved (D1).**

## 8. What production is, and is not (record for the next reader)

- **Is:** the consolidated content release `v1-consolidated-001` — 57 chapters,
  136 images, 22 diagrams, 48 tables — on the standalone public domain, with
  rollback preserved.
- **Is not:** the V1 redesign, the new design system, the seven-domain
  architecture, the System Explorer, the AI assistant, the GradeSpot integration,
  the commercial layer, or a claim of any completeness at 100%.

*End of reconciliation. This document changes no website. Production stays on
`v1-consolidated-001` until a later approved release replaces it.*
