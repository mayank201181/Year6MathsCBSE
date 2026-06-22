import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Every shape you can name — a triangle, a road sign, a samosa — is just a few rays and segments meeting at corners. Learn to read those corners as angles and geometry becomes a language you can speak.",
  didYouKnow: [
    "The degree symbol (°) and splitting a full turn into 360 parts come from the ancient Babylonians, who counted in 60s.",
    "The word 'geometry' comes from Greek: 'geo' (earth) + 'metron' (measure) — it began as a way to measure land after floods on the Nile.",
    "A circle has no corners, yet it can be thought of as a polygon with infinitely many tiny sides — the more sides a regular polygon has, the rounder it looks.",
  ],
  experiments: [
    {
      title: "Make a right-angle checker from paper",
      materials: ["A scrap of paper", "Nothing else!"],
      steps: [
        "Fold the paper once anywhere — you get a straight crease (a straight angle, 180°).",
        "Fold it again so the first crease folds exactly onto itself.",
        "Open it: the two creases meet at a perfect 90° right angle.",
        "Use this corner to test whether corners around your home (books, doors, tiles) are right angles.",
      ],
      whatHappens: "Folding a straight angle (180°) exactly in half gives two equal angles of 90° — a homemade set square that proves a right angle is half a straight angle.",
    },
    {
      title: "Clock-hand angle hunt",
      materials: ["A clock or watch with hands"],
      steps: [
        "Note that each hour mark is 30° apart (360° ÷ 12).",
        "Find a time when the hands make a right angle (try 3:00 and 9:00).",
        "Find a time when they make a straight angle of 180° (try 6:00).",
        "Estimate the angle at 1:00 and 5:00, then check with the 30°-per-hour rule.",
      ],
      whatHappens: "You see angles change as a real turning movement, and you can predict each one using 30° per hour gap.",
    },
  ],
  bonusDiagrams: [
    {
      caption: "A pentagon and all 5 of its diagonals — count the lines that skip a corner.",
      svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A regular pentagon with all five diagonals drawn inside it"><polygon points="100,20 176,75 147,165 53,165 24,75" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/><line x1="100" y1="20" x2="147" y2="165" stroke="#ef4444" stroke-width="2"/><line x1="100" y1="20" x2="53" y2="165" stroke="#ef4444" stroke-width="2"/><line x1="176" y1="75" x2="53" y2="165" stroke="#ef4444" stroke-width="2"/><line x1="176" y1="75" x2="24" y2="75" stroke="#ef4444" stroke-width="2"/><line x1="147" y1="165" x2="24" y2="75" stroke="#ef4444" stroke-width="2"/></svg>',
    },
    {
      caption: "An arc and a sector: the bold arc is part of the circumference; the shaded slice is the sector.",
      svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with a shaded sector between two radii and a bold arc on the circumference"><circle cx="100" cy="100" r="80" fill="none" stroke="#94a3b8" stroke-width="2"/><path d="M100 100 L180 100 A80 80 0 0 0 140 31 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/><path d="M180 100 A80 80 0 0 0 140 31" fill="none" stroke="#b45309" stroke-width="4"/><circle cx="100" cy="100" r="3" fill="#1e3a8a"/><text x="120" y="80" font-size="11" fill="#b45309">sector</text></svg>',
    },
  ],
};

export default extras;
