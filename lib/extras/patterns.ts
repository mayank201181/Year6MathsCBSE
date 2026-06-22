import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Around 700 CE, long before Fibonacci was born in Europe, the Indian scholar Virahanka described the sequence 1, 1, 2, 3, 5, 8, 13 while counting rhythms in poetry. The same numbers turn up in pinecones and sunflowers!",
  didYouKnow: [
    "The triangular numbers 1, 3, 6, 10, 15 are why 10 bowling pins and the rack of pool balls form perfect triangles.",
    "Adding the first n odd numbers always lands you on a perfect square — try it: 1, 1+3, 1+3+5… give 1, 4, 9.",
    "A 9-year-old Carl Friedrich Gauss is said to have added 1 to 100 in seconds by pairing the numbers into fifties of 101, getting 5050.",
  ],
  experiments: [
    {
      title: "Build the square from odd L-layers",
      materials: ["A handful of coins, beans or buttons", "A flat table"],
      steps: [
        "Place 1 coin. Then add 3 coins in an L-shape to make a 2×2 square.",
        "Add 5 more in a bigger L to make a 3×3 square; then 7 to make 4×4.",
        "Count the total each time: 1, 4, 9, 16.",
      ],
      whatHappens: "Each odd number is exactly the L-shaped layer needed to grow one square into the next — so the running total is always a perfect square.",
    },
    {
      title: "Triangular laddoos",
      materials: ["10 small round objects (laddoos, marbles or grapes)"],
      steps: [
        "Make rows of 1, then 2, then 3, then 4 objects stacked into a triangle.",
        "Count them: 1, 3, 6, 10 — the triangular numbers.",
        "Now make a second identical triangle and fit the two together into a rectangle.",
      ],
      whatHappens: "Two triangles always lock into an n by (n+1) rectangle, showing why the nth triangular number is n(n+1)/2.",
    },
  ],
  bonusDiagrams: [
    {
      caption: "Two copies of a triangular number form a 4×5 rectangle, showing T4 = 4×5÷2 = 10.",
      svg: '<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two triangles of dots fitted together into a four by five rectangle of twenty dots, showing the fourth triangular number is ten"><circle cx="30" cy="30" r="6" fill="#6366f1"/><circle cx="60" cy="30" r="6" fill="#6366f1"/><circle cx="90" cy="30" r="6" fill="#6366f1"/><circle cx="120" cy="30" r="6" fill="#6366f1"/><circle cx="30" cy="55" r="6" fill="#6366f1"/><circle cx="60" cy="55" r="6" fill="#6366f1"/><circle cx="90" cy="55" r="6" fill="#6366f1"/><circle cx="120" cy="55" r="6" fill="#f59e0b"/><circle cx="30" cy="80" r="6" fill="#6366f1"/><circle cx="60" cy="80" r="6" fill="#6366f1"/><circle cx="90" cy="80" r="6" fill="#f59e0b"/><circle cx="120" cy="80" r="6" fill="#f59e0b"/><circle cx="30" cy="105" r="6" fill="#6366f1"/><circle cx="60" cy="105" r="6" fill="#f59e0b"/><circle cx="90" cy="105" r="6" fill="#f59e0b"/><circle cx="120" cy="105" r="6" fill="#f59e0b"/><text x="160" y="70" font-size="13" fill="#334155">4×5 = 20</text><text x="160" y="90" font-size="13" fill="#334155">half = 10</text></svg>',
    },
  ],
  interactive: "number-line",
};

export default extras;
