import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Take a loop of string the same length each time. You can squeeze it into a long thin sliver with almost no space inside, or open it into a fat square holding lots of space — same perimeter, wildly different area!",
  didYouKnow: [
    "For a fixed perimeter, a circle encloses the largest possible area — which is exactly why bubbles and water drops pull themselves round.",
    "Farmers and councils often charge land by area (per square metre or per acre) but fencing by length (per metre) — so a long thin plot can be cheap to buy yet expensive to fence.",
    "A 'hectare', used for big fields in India, is just the area of a 100 m × 100 m square = 10,000 m².",
  ],
  experiments: [
    {
      title: "Same string, different space",
      materials: ["A loop of string about 40 cm long", "Squared paper", "A pencil"],
      steps: [
        "Lay the loop into a long thin rectangle on the squared paper and trace it.",
        "Reshape the SAME loop into a square and trace that too.",
        "Count the whole squares inside each tracing to estimate the areas.",
      ],
      whatHappens: "Both shapes have the same perimeter (the string length), but the square traps far more squares inside — proving perimeter doesn't fix the area.",
    },
    {
      title: "Tile your tabletop",
      materials: ["A ruler or measuring tape", "Some square sticky notes or playing cards"],
      steps: [
        "Measure the length and breadth of a book or tray in centimetres.",
        "Predict the area using Area = length × breadth.",
        "Now actually cover it with equal squares and count them to check.",
      ],
      whatHappens: "The number of squares you lay down matches length × breadth — showing the formula is really just counting rows of unit squares.",
    },
  ],
  bonusDiagrams: [
    {
      caption: "Same perimeter (12 units), different areas: a 5×1 rectangle holds only 5 squares, but a 3×3 square holds 9.",
      svg: '<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 5 by 1 rectangle next to a 3 by 3 square, both perimeter 12, with areas 5 and 9"><rect x="10" y="40" width="150" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="85" y="30" text-anchor="middle" font-size="12" fill="#15803d">5 × 1, P = 12</text><text x="85" y="90" text-anchor="middle" font-size="12" fill="#334155">Area = 5</text><rect x="220" y="20" width="90" height="90" fill="#86efac" stroke="#15803d" stroke-width="2"/><text x="265" y="14" text-anchor="middle" font-size="12" fill="#15803d">3 × 3, P = 12</text><text x="265" y="135" text-anchor="middle" font-size="12" fill="#334155">Area = 9</text></svg>',
    },
  ],
};

export default extras;
