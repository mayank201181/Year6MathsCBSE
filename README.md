# 🧮 Maths Quest — Year 6 (CBSE)

A friendly, problem-solving study app for **CBSE Class 6 Maths**. Built around Art of Problem
Solving pedagogy: discover the idea before the rule, derive instead of memorise, laddered hints,
multiple solution paths, and genuine challenge problems.

Covers both the new **Ganita Prakash** chapters and the broader NCERT topics:
Patterns, Knowing Our Numbers, Whole Numbers, Playing with Numbers (Prime Time), Integers,
Fractions, Decimals, Algebra, Ratio & Proportion, Lines & Angles, Shapes & Constructions,
Perimeter & Area, Data Handling, and Symmetry — plus a cross-topic **Big Exam**.

## Features
- 📖 Illustrated guides with problem-first **discovery** openers, "why it works" derivations, inline SVG diagrams, read-aloud, and quick-revision flashcards + formula sheets.
- ✏️ **Comprehensive practice**: ~20 MCQs + ~10 written questions per topic, tagged warm-up / core / challenge, with progressive **hint ladders** and multi-method worked solutions revealed only after an attempt.
- 🧠 **AI tutor** ("Professor Pi") — Socratic, gives the *next hint* not the answer (needs an Anthropic key).
- 🔬 **Interactive explorables**: fraction bar, integer number line, probability spinner, line grapher.
- ⭐ **Gamification**: stars, ranks, daily streak, daily goal, timed Challenge mode, printable certificate.
- 🔁 **Spaced repetition**: missed questions return on a `[1,3,7,16,35]`-day ladder.
- 👨‍👩‍👧 **Family accounts** with multiple learner profiles and a **PIN-protected parent dashboard** (time-on-task, accuracy, per-topic and weekly charts), synced across devices via Vercel Blob.
- 📱 **Installable PWA**.

## Tech
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Vercel Blob · Anthropic SDK.

## Local development
```bash
npm install
npm run dev      # http://localhost:3000  (use dev, not start, so auth cookies work over http)
```
Without any environment variables the app runs in **single-device guest mode** (progress saved in
the browser) so you can try everything immediately.

## Environment variables (for full cloud features)
| Variable | Purpose |
| --- | --- |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob — enables family accounts, profiles and cross-device sync. Injected automatically when you connect a Blob store to the project. |
| `AUTH_SECRET` | Random string used to sign session cookies. |
| `ANTHROPIC_API_KEY` | Enables the AI tutor. Without it the tutor shows a friendly "ask a grown-up" message. |
| `AI_MODEL` | Optional override (default `claude-opus-4-8`; e.g. `claude-haiku-4-5` for lower cost). |

## Deploy to Vercel
1. Import the repo into Vercel (or use the `vercel` CLI).
2. **Storage → Create Blob store → Connect** to the project (injects `BLOB_READ_WRITE_TOKEN`).
3. Add `AUTH_SECRET` (any random string) and `ANTHROPIC_API_KEY` to the project's env vars.
4. Push to `main` → production deploy at `https://<project>.vercel.app`.

> Note: once the repo is git-connected, Vercel requires the HEAD commit author's email to belong to
> the Vercel team. If a deploy is blocked, set `git config user.email <your-vercel-email>` and
> re-author the commit (`git commit --amend --reset-author`).

## Architecture
- `lib/types.ts` — content data model. `lib/topics/<id>.ts` — audited topic content (guides + questions).
- `lib/extras/<id>.ts` — engagement extras, kept **separate** from audited answer keys.
- `lib/store.tsx` — client store (auth status, profile, progress, debounced cloud sync + localStorage cache, gamification & SRS).
- `lib/server/*` — Vercel Blob KV + scrypt/HMAC auth. `app/api/*` — auth, profiles, progress, parent, AI routes.
- `components/` — `PaperRunner`, `GuideView`, `Explorables`, `AskAI`, `Mascot`, `AppGate`, `ProfilePicker`, `Certificate`.
