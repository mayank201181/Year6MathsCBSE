import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Ancient Egyptians wrote almost every fraction as a sum of different unit fractions like 1/2 + 1/4. They had no symbol for 3/4!",
  didYouKnow: [
    "The line in a fraction is called a vinculum.",
    "1/3 as a decimal goes on forever: 0.3333… — fractions can capture it exactly when decimals can't.",
    "A pizza cut into 0 slices is undefined — you can never divide by zero.",
  ],
  experiments: [
    {
      title: "Fraction kitchen",
      materials: ["A measuring cup", "Water or rice"],
      steps: [
        "Fill 1/2 a cup, then add 1/4 cup.",
        "Pour into an empty cup and read the total.",
        "Check: 1/2 + 1/4 = 3/4.",
      ],
      whatHappens: "You can literally see why a common denominator (quarters) makes the addition work.",
    },
  ],
  interactive: "fraction-bar",
};

export default extras;
