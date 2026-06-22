import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Florence Nightingale saved thousands of soldiers' lives partly by drawing a graph — her famous 'rose diagram' showed generals that more soldiers died of dirty wards than of wounds. A good picture of data can change the world.",
  didYouKnow: [
    "Tally marks are one of the oldest forms of writing — the Ishango bone, carved over 20,000 years ago, may be a tally of counts.",
    "A pictograph with a giant key (one symbol = 1,000,000) lets a single small picture stand for a whole city's worth of people.",
    "A bar graph whose axis does not start at 0 can make a tiny difference look enormous — a favourite trick in misleading advertisements.",
  ],
  experiments: [
    {
      title: "Survey your home",
      materials: ["Paper", "Pencil"],
      steps: [
        "Pick a question, e.g. 'favourite colour' and ask everyone at home.",
        "Record each answer with a tally mark next to that colour.",
        "Turn your tallies into a frequency table, then draw a bar graph choosing a sensible scale.",
      ],
      whatHappens: "The colour with the tallest bar is the family favourite — you have turned a messy survey into a clear picture.",
    },
    {
      title: "Coin and dice chance lab",
      materials: ["A coin", "A six-sided die"],
      steps: [
        "Before tossing, predict: is heads certain, likely, even, unlikely or impossible?",
        "Toss the coin 20 times and tally heads and tails.",
        "Roll the die 20 times and tally each face; was rolling a 7 ever possible?",
      ],
      whatHappens: "Heads and tails come out roughly equal (an even chance), and a 7 never appears — it was impossible all along.",
    },
  ],
  interactive: "probability-spinner",
};

export default extras;
