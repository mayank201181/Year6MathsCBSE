import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "If you counted one number every second without stopping to sleep or eat, reaching one crore (1,00,00,000) would take you nearly four months!",
  didYouKnow: [
    "India officially uses the lakh–crore system, so a phone bill might say ₹1,50,000 — that comma after three digits, then two, is the giveaway.",
    "The Romans had no symbol for zero, which made arithmetic with Roman numerals surprisingly clumsy.",
    "10 lakh equals exactly 1 million, and 10 million equals 1 crore — the two systems are just different ways of grouping the very same digits.",
  ],
  experiments: [
    {
      title: "Digit shuffle race",
      materials: ["Four cards numbered with the digits 1, 0, 7, 5"],
      steps: [
        "Shuffle the four cards and lay them in a row to make a 4-digit number (no leading 0).",
        "Now rearrange the same cards to make the greatest possible number, then the smallest.",
        "Subtract the smallest from the greatest and write down the difference.",
      ],
      whatHappens:
        "However you start, greatest = 7510 and smallest = 1057, and the difference is always 6453 — because the size is controlled entirely by which digit sits in which place.",
    },
    {
      title: "Spot the system",
      materials: ["Old newspapers, bills or product boxes"],
      steps: [
        "Hunt for big numbers printed with commas (populations, prices, view counts).",
        "Decide whether each uses the Indian grouping (3 then 2-2) or the International grouping (groups of 3).",
        "Rewrite one number in the other system.",
      ],
      whatHappens:
        "You'll notice Indian newspapers say 'lakh' and 'crore' while international sites say 'million' — same numbers, different commas.",
    },
  ],
};

export default extras;
