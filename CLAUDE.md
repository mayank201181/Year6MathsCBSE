@AGENTS.md

# Maths Quest — project notes for agents

CBSE Class 6 Maths study app. Next.js 16 App Router + React 19 + Tailwind v4. See README.md.

## Conventions
- **Audited content** (guides + questions + answer keys) lives in `lib/topics/<id>.ts`. **Engagement
  extras** (hooks, fun facts, experiments, interactive widget keys) live in `lib/extras/<id>.ts`.
  Never add engagement to a topic file, and never let an extras edit touch an answer key.
- Every question `id` is **globally unique** with a topic prefix (e.g. `fra-mcq-q03`, `ex-qa-q01`).
  `lib/topics/index.ts` builds a deduped `QUESTION_INDEX` from the canonical `quiz` arrays.
- Pedagogy is **AoPS by default**: `discovery` openers, `whyItWorks`, `strategies`, hint ladders,
  multi-method `solutions`, and a real challenge spread. See `docs/CONTENT_BRIEF.md`.
- Inline SVG diagrams only (no binary assets). Each SVG needs `viewBox`, `xmlns`, `role="img"`,
  `aria-label`, and **no backticks / `${`** (they live in template strings).
- Run `npm run build` (type-check + static gen) and keep it green before committing.

## Server/runtime notes
- API routes are `runtime = "nodejs"`, `dynamic = "force-dynamic"` (except the icon image route).
- Without `BLOB_READ_WRITE_TOKEN` the app runs in single-device **guest mode**; test auth with
  `npm run dev` (secure cookies aren't sent over http under `npm start`).
