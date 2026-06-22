import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook:
    "Lifts in tall buildings number their basements −1, −2, −3 … and the dashboard in your car or a freezer shows minus signs all the time. Negative numbers are everywhere once you start looking below zero.",
  didYouKnow: [
    "Negative numbers were used in India over 1,500 years ago — the mathematician Brahmagupta (7th century) wrote rules for 'fortunes' (positive) and 'debts' (negative), including that a debt minus a debt can become a fortune.",
    "The coldest natural temperature ever recorded on Earth was about −89°C in Antarctica — far below the 0°C at which water freezes.",
    "Sea level is the world's agreed 'zero' for height: the Dead Sea shore sits at roughly −430 m, the lowest dry land on the planet.",
  ],
  experiments: [
    {
      title: "Walk a human number line",
      materials: ["Chalk or sticky notes", "A long floor or corridor"],
      steps: [
        "Mark a line of squares and label one square 0, with positives one way and negatives the other.",
        "Stand on 0. Call out a sum like (−3) + 5: face the positive direction, step left for the −3, then right 5 for the +5.",
        "Read the square you land on — that is the answer. Try subtraction by turning around or 'adding the opposite'.",
      ],
      whatHappens:
        "You feel addition as stepping right and negatives as stepping left, so why (−3) + 5 = 2 stops being a rule to memorise and becomes a place you walked to.",
    },
    {
      title: "Red-and-blue token bank",
      materials: ["About 20 counters or bottle caps in two colours"],
      steps: [
        "Let one colour be +1 (a 'fortune') and the other −1 (a 'debt').",
        "Build a number like −4 with four debt tokens, then add +6 by tossing in six fortune tokens.",
        "Pair off every fortune with a debt (a zero pair) and remove the pairs; count what survives.",
      ],
      whatHappens:
        "The leftover tokens are the answer (here, +2). You can SEE that a +1 and a −1 destroy each other, which is exactly why opposite signs subtract.",
    },
  ],
  interactive: "number-line",
};

export default extras;
