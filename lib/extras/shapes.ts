import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "A football looks round, but the classic one is stitched from 32 flat patches — 20 hexagons and 12 pentagons. Flat shapes can build a ball!",
  didYouKnow: [
    "There are exactly 11 different nets that fold up into a cube — and dozens of 6-square patterns that look fine but do NOT fold into one.",
    "A circle has infinitely many lines of symmetry: every single line through its centre splits it into matching halves.",
    "For ANY solid with flat faces, Faces + Vertices − Edges always equals 2. A cube: 6 + 8 − 12 = 2; a pyramid: 5 + 5 − 8 = 2.",
  ],
  experiments: [
    {
      title: "Fold-your-own cube",
      materials: ["Squared/graph paper", "Scissors", "Sticky tape"],
      steps: [
        "Draw 6 equal squares in a plus/cross shape (a row of four with one square above and one below the second).",
        "Cut out the cross and fold along every join.",
        "Tape the edges together and see it close into a cube.",
        "Now try a different 6-square arrangement and check whether it also folds without overlap.",
      ],
      whatHappens: "You discover which patterns are real nets of a cube — proof that not every group of 6 squares works.",
    },
    {
      title: "Compass treasure circle",
      materials: ["A compass", "A ruler", "Paper"],
      steps: [
        "Open the compass to exactly 5 cm using the ruler.",
        "Mark a centre point and sweep a full circle.",
        "Without changing the compass, place the point anywhere on the circle and mark where the pencil crosses it — repeat around the circle.",
        "Join the marks: six points step neatly around, forming a regular hexagon.",
      ],
      whatHappens: "The radius fits exactly six times around its own circle, which is why the compass draws a perfect hexagon and why constructions are exact.",
    },
  ],
  bonusDiagrams: [
    {
      caption: "A square pyramid: 5 faces (1 square base + 4 triangles), 8 edges, 5 vertices.",
      svg: '<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square pyramid drawn with its apex, triangular faces and square base"><polygon points="100,15 40,120 160,120" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><polygon points="100,15 160,120 120,140 40,120" fill="#f9a8d4" stroke="#be185d" stroke-width="2" opacity="0.7"/><line x1="100" y1="15" x2="120" y2="140" stroke="#be185d" stroke-width="2" stroke-dasharray="4 3"/><line x1="40" y1="120" x2="120" y2="140" stroke="#be185d" stroke-width="2" stroke-dasharray="4 3"/><text x="100" y="155" text-anchor="middle" font-size="11" fill="#334155">F = 5, E = 8, V = 5</text></svg>',
    },
  ],
};

export default extras;
