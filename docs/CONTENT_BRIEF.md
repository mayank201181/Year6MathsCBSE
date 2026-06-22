# Content authoring brief — Maths Quest (Year 6 CBSE)

You are authoring ONE topic file for a CBSE Class 6 maths study app.

## Before you write
1. Read `lib/types.ts` — the exact `Topic` data model. Follow it precisely.
2. Read `lib/topics/fractions.ts` — the gold-standard template. Match its shape, quality and AoPS style.
3. Read `lib/extras/fractions.ts` — the extras template.

## Deliverables (two files)
- `lib/topics/<id>.ts` — `export default` a `Topic` (audited content). 
- `lib/extras/<id>.ts` — `export default` a `TopicExtras` (engagement; never put answer keys here).

Do NOT edit any other file (the registry is wired up separately). Do NOT import anything that doesn't exist.

## Hard rules
- **Globally unique ids.** Every MCQ/QA id must start with the given PREFIX, e.g. `<prefix>-mcq-q01`, `<prefix>-qa-q03`. Zero-pad to 2 digits. Never reuse an id.
- **Comprehensive depth:** ~20 MCQs and ~10 QAs.
- **Difficulty spread:** tag every question `difficulty: "warmup" | "core" | "challenge"`. Include a genuine spread — roughly 6 warmup, 9 core, 5 challenge for MCQ; for QA ~3 core-ish, plus at least **3 real challenge** problems that would stretch a strong student (competition-flavoured where natural: invariants, extremal cases, clever counting, working backwards).
- **Hint ladders:** every `core` and `challenge` question gets a `hints` array of 3–4 steps (gentle nudge → bigger hint → key step). Warm-ups usually don't need hints.
- **Multi-method solutions:** at least 2 QAs include a `solutions` array with ≥1 worked method; where a second approach is illuminating (e.g. algebra vs picture), give two.
- **Numeric grading:** when a QA has a single numeric answer, set `numericAnswer` (and `tolerance` if not exact). Mark-scheme points may list alternatives separated by ` / ` or `|` (the grader treats them as OR).
- **Mark schemes reward method**, not just the final number.
- **commonError** on most QAs (a real misconception).
- **strategy** tag (a named move) on core/challenge questions, e.g. "Work backwards", "Find a pattern", "Try small cases", "Draw a diagram", "Introduce a variable", "Use symmetry", "Look for invariants".

## Guide (3–5 sections)
Each `GuideSection`:
- `heading`, `body` (markdown-lite: `**bold**`, `*italic*`, `` `code` ``, and `- ` bullet lists; separate paragraphs with a blank line).
- `discovery` (problem-first opener: an intriguing `problem` the learner tries BEFORE the method, plus the `idea` it leads to) on most sections.
- `whyItWorks` (a short derivation / intuition — derive, don't decree).
- `strategies` (named moves used).
- `keyPoints` (3–4 crisp bullets).
- Optionally `thinkDeeper`.
- **Diagrams:** include at least **2 inline SVG** diagrams total across the guide. Rules for every SVG string:
  - Must include `viewBox`, `xmlns="http://www.w3.org/2000/svg"`, `role="img"`, and a descriptive `aria-label`.
  - **No backticks and no `${` anywhere** (they live inside template strings).
  - Keep them simple and self-explanatory; use plain colours.

## learn
- `flashcards`: 5–7 `{front, back}` quick-revision cards.
- `formulae`: the key rules/identities for the topic as `{name, rule}`.

## questionBank
Group the canonical quiz questions into sittable papers using the SAME objects (no new ids), exactly like the bottom of `fractions.ts`:
- 2 MCQ papers (split the 20), 1–2 QA papers.

## Maths style
- Plain-text maths only (no LaTeX). Use ×, ÷, −, ², ½ etc. Small, age-appropriate numbers.
- Indian context where natural (rupees ₹, Indian names, Indian place-value system where relevant).
- Be 100% correct: the `answerIndex` must point to the correct option; the `explanation` must match it; numeric answers must be right.

## Available explorable widget keys (for `extras.interactive`)
Only these exist — set `interactive` to one of them if relevant, else omit:
`fraction-bar`, `number-line`, `probability-spinner`, `function-grapher`.

## TopicExtras (engagement)
`hook` (intriguing opener), `didYouKnow` (3 facts), `experiments` (1–2 "try at home" activities), optionally `bonusDiagrams`, and `interactive` (a widget key above if relevant).

When done, ensure the file is valid TypeScript that satisfies the `Topic` / `TopicExtras` types. Keep imports to just `import type { Topic } from "../types";` (topics) and `import type { TopicExtras } from "../types";` (extras).
