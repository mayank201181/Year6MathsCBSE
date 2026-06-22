import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "There is no biggest number. Whatever giant you name, just add 1 — you have made a bigger one. The whole numbers march on forever, starting from a single tiny 0.",
  didYouKnow: [
    "The number 0 took humans thousands of years to invent. Indian mathematicians, including Brahmagupta in the 7th century, were among the first to treat 0 as a number you can calculate with.",
    "The trick of adding 1 + 2 + … + 100 by pairing the ends is often linked to the mathematician Carl Gauss, who is said to have done it as a young schoolboy in seconds — getting 5050.",
    "Multiplying any whole number by 0 always gives 0, but you can never divide by 0 — it simply has no answer.",
  ],
  experiments: [
    {
      title: "Build a square-number staircase",
      materials: ["A handful of dried beans, coins or buttons", "A flat table"],
      steps: [
        "Lay out 1 bean. Around it build a square: add 3 more to make a 2×2 square (4 beans).",
        "Add 5 more to make a 3×3 square (9 beans), then 7 more for a 4×4 square (16).",
        "Write down the number you add each time: 3, 5, 7, … and the totals: 1, 4, 9, 16.",
      ],
      whatHappens: "Each new layer is the next odd number, and the totals are the square numbers — so 1 + 3 + 5 + 7 = 4 × 4 = 16. You can literally see why the odd numbers add up to squares.",
    },
    {
      title: "Number-line hopscotch",
      materials: ["Chalk or paper", "Space to step"],
      steps: [
        "Draw a number line 0 to 12 on the floor.",
        "Stand on 0 and take three equal hops of 4 — call out where you land each time.",
        "Go back to 0 and take four equal hops of 3. Where do you finish?",
      ],
      whatHappens: "Both 3 hops of 4 and 4 hops of 3 land you on 12 — a body-sized proof that 3 × 4 = 4 × 3 (the commutative property).",
    },
  ],
  interactive: "number-line",
};

export default extras;
