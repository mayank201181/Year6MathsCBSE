import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "One little letter can stand for every number at once. Write 3n + 1 and you have just described a pattern that goes on forever — without drawing a single extra matchstick.",
  didYouKnow: [
    "The word 'algebra' comes from the Arabic 'al-jabr', meaning 'reunion of broken parts', from a book by the mathematician al-Khwarizmi around 820 CE.",
    "Indian mathematician Brahmagupta (7th century) wrote rules for solving equations and was among the first to work confidently with zero and negative numbers.",
    "We write 2n instead of 2×n partly because the × sign looks too much like the letter x — so mathematicians just dropped it.",
  ],
  experiments: [
    {
      title: "Grow a matchstick pattern",
      materials: ["A box of matchsticks or toothpicks", "Paper and pencil"],
      steps: [
        "Build 1 square, then a row of 2 squares sharing a side, then 3.",
        "Count and record the sticks each time: 4, 7, 10.",
        "Predict 5 squares using your rule 3n + 1, then build it to check.",
      ],
      whatHappens: "Each new square adds only 3 sticks because it borrows one side from its neighbour — that is exactly why the rule is 3n + 1, not 4n.",
    },
    {
      title: "The mind-reading trick",
      materials: ["A friend"],
      steps: [
        "Ask a friend to think of a number, double it, add 10, then halve the result, and finally subtract their original number.",
        "Announce that their answer is 5 — every time.",
        "Show why with algebra: start with n → 2n → 2n + 10 → n + 5 → 5.",
      ],
      whatHappens: "The original number cancels out, so the answer is always 5. A variable lets you prove the trick works for everyone at once.",
    },
  ],
  interactive: "function-grapher",
};

export default extras;
