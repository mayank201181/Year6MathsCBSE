// Self-assessment grading for written (QA) answers.
// Maths-aware: numeric answers graded with tolerance and equivalent forms;
// otherwise keyword/mark-scheme coverage.

import type { QA } from "./types";

export type Grade = "correct" | "partial" | "needs-work";

// Pull the first sensible number out of a free-text answer.
function extractNumbers(s: string): number[] {
  const cleaned = s.replace(/,/g, "");
  const matches = cleaned.match(/-?\d+(\.\d+)?(\/\d+(\.\d+)?)?/g);
  if (!matches) return [];
  return matches.map((m) => {
    if (m.includes("/")) {
      const [a, b] = m.split("/").map(Number);
      return b !== 0 ? a / b : NaN;
    }
    return Number(m);
  });
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9./\s-]/g, " ").replace(/\s+/g, " ").trim();
}

export function gradeQA(qa: QA, answer: string): Grade {
  const ans = answer.trim();
  if (!ans) return "needs-work";

  // 1) Numeric grading with tolerance, if a numeric answer is specified.
  if (typeof qa.numericAnswer === "number") {
    const tol = qa.tolerance ?? 1e-6;
    const nums = extractNumbers(ans);
    if (nums.some((n) => Number.isFinite(n) && Math.abs(n - qa.numericAnswer!) <= tol)) {
      return "correct";
    }
    // a present-but-wrong number still gets keyword credit below
  }

  // 2) Keyword / mark-scheme coverage.
  const norm = normalize(ans);
  const points = qa.markScheme.length;
  if (points === 0) return ans.length > 12 ? "partial" : "needs-work";

  let hits = 0;
  for (const point of qa.markScheme) {
    // Each mark point may list alternatives separated by " / " or "|".
    const alts = point
      .split(/\s*[/|]\s*/)
      .map((a) => normalize(a))
      .filter(Boolean);
    const matched = alts.some((alt) => {
      if (!alt) return false;
      // match whole-ish tokens; allow numbers and short keywords
      return norm.includes(alt);
    });
    if (matched) hits += 1;
  }

  const ratio = hits / points;
  if (ratio >= 0.7) return "correct";
  if (ratio >= 0.3) return "partial";
  return "needs-work";
}

export function gradeLabel(g: Grade): { text: string; emoji: string; tone: string } {
  switch (g) {
    case "correct":
      return { text: "Spot on!", emoji: "✅", tone: "green" };
    case "partial":
      return { text: "Partly there", emoji: "🟡", tone: "amber" };
    default:
      return { text: "Keep trying", emoji: "✏️", tone: "rose" };
  }
}
