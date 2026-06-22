import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Fold a butterfly down the middle and the two wings vanish into each other. That single crease is doing real maths — it's a line of symmetry, and the same idea hides in rangoli, the Taj Mahal and the letter H.",
  didYouKnow: [
    "A circle has infinitely many lines of symmetry — every single line through its centre is a mirror line.",
    "The Taj Mahal is famous for its near-perfect line symmetry: cover the left half and the right half tells you exactly what was there.",
    "Traditional rangoli and kolam designs are built on lines of symmetry — artists draw one part and mirror it to fill the pattern.",
  ],
  experiments: [
    {
      title: "Ink-blot symmetry",
      materials: ["A sheet of paper", "A few drops of paint or ink"],
      steps: [
        "Fold the paper in half, then open it flat again to leave a crease.",
        "Drop a little paint on ONE side only of the crease.",
        "Fold along the crease, press gently, then open it up.",
      ],
      whatHappens: "The paint prints a mirror-image copy on the other side. The crease is the line of symmetry — every blob has a partner the same distance across it.",
    },
    {
      title: "Paper-fold polygons",
      materials: ["Square paper", "Scissors"],
      steps: [
        "Cut out a square, then fold it every way you can so the halves match exactly — count the folds.",
        "Do the same with a cut-out equilateral triangle and a long rectangle.",
        "Compare your counts: square 4, equilateral triangle 3, rectangle 2.",
      ],
      whatHappens: "Each successful fold is a line of symmetry. You can literally feel why a square has more lines than a rectangle — only equal sides let the diagonal fold match.",
    },
  ],
  bonusDiagrams: [
    {
      caption: "An equilateral triangle has 3 lines of symmetry — one from each vertex to the opposite side's midpoint.",
      svg: '<svg viewBox="0 0 180 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An equilateral triangle with three dashed lines of symmetry from each vertex to the midpoint of the opposite side"><polygon points="90,20 160,150 20,150" fill="#fae8ff" stroke="#86198f" stroke-width="2"/><line x1="90" y1="20" x2="90" y2="150" stroke="#d946ef" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="160" y1="150" x2="55" y2="85" stroke="#d946ef" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="20" y1="150" x2="125" y2="85" stroke="#d946ef" stroke-width="1.5" stroke-dasharray="4 3"/><text x="90" y="166" text-anchor="middle" font-size="12" fill="#86198f">3 lines of symmetry</text></svg>',
    },
    {
      caption: "The letter H has two lines of symmetry: one vertical, one horizontal.",
      svg: '<svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The capital letter H with a dashed vertical line of symmetry and a dashed horizontal line of symmetry"><rect x="40" y="30" width="16" height="90" fill="#86198f"/><rect x="104" y="30" width="16" height="90" fill="#86198f"/><rect x="40" y="67" width="80" height="16" fill="#86198f"/><line x1="80" y1="15" x2="80" y2="135" stroke="#d946ef" stroke-width="2" stroke-dasharray="5 4"/><line x1="20" y1="75" x2="140" y2="75" stroke="#d946ef" stroke-width="2" stroke-dasharray="5 4"/><text x="80" y="148" text-anchor="middle" font-size="12" fill="#86198f">H: 2 lines of symmetry</text></svg>',
    },
  ],
};

export default extras;
