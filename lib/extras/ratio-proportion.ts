import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Mix orange squash 2 : 3 or 3 : 5 with water — which tastes stronger? Ratios let you compare 'strength' even when nobody is using the same number of cups.",
  didYouKnow: [
    "The colon symbol ':' for ratios was first used in the 1600s — before that people wrote ratios as plain fractions.",
    "Map scales are ratios: a scale of 1 : 50000 means 1 cm on the map stands for 50000 cm (half a kilometre) on the ground.",
    "The 'golden ratio', about 1 : 1.618, shows up in sunflowers, seashells and even the proportions of famous buildings.",
  ],
  experiments: [
    {
      title: "Taste-test the ratio",
      materials: ["Orange squash or any concentrate", "Water", "Two identical glasses", "A spoon for measuring"],
      steps: [
        "In glass A mix 1 spoon of squash with 3 spoons of water (ratio 1 : 3).",
        "In glass B mix 2 spoons of squash with 5 spoons of water (ratio 2 : 5).",
        "Before tasting, predict which is stronger by comparing 1/4 and 2/7.",
        "Taste both and check your prediction.",
      ],
      whatHappens: "Glass B tastes slightly stronger because 2/7 ≈ 0.29 of it is squash, more than 1/4 = 0.25 of glass A. You compared ratios by turning them into fractions.",
    },
    {
      title: "Unit-price detective",
      materials: ["Two grocery packs of different sizes (e.g. 500 g and 1 kg)", "Their prices"],
      steps: [
        "Write down the price and weight of each pack.",
        "For each, use the unitary method: price ÷ weight = cost of 1 gram (or 100 g).",
        "Compare the two unit prices.",
      ],
      whatHappens: "The bigger pack is often (but not always!) cheaper per gram. The unitary method reveals the true 'best value' even when pack sizes differ.",
    },
  ],
  bonusDiagrams: [
    {
      caption: "Sharing ₹600 in the ratio 1 : 2 : 3 cuts it into 6 equal shares of ₹100.",
      svg: '<svg viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bar split into six equal shares grouped as one, two and three for a one to two to three split"><rect x="10" y="25" width="300" height="35" fill="none" stroke="#334155" stroke-width="2"/><rect x="10" y="25" width="50" height="35" fill="#f87171"/><rect x="60" y="25" width="100" height="35" fill="#fbbf24"/><rect x="160" y="25" width="150" height="35" fill="#34d399"/><line x1="60" y1="25" x2="60" y2="60" stroke="#334155" stroke-width="2"/><line x1="110" y1="25" x2="110" y2="60" stroke="#334155"/><line x1="160" y1="25" x2="160" y2="60" stroke="#334155" stroke-width="2"/><line x1="210" y1="25" x2="210" y2="60" stroke="#334155"/><line x1="260" y1="25" x2="260" y2="60" stroke="#334155"/><text x="35" y="18" text-anchor="middle" font-size="11" fill="#334155">1</text><text x="110" y="18" text-anchor="middle" font-size="11" fill="#334155">2</text><text x="235" y="18" text-anchor="middle" font-size="11" fill="#334155">3</text><text x="160" y="75" text-anchor="middle" font-size="11" fill="#334155">6 shares of ₹100</text></svg>',
    },
  ],
};

export default extras;
