import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Around 230 BCE, the Greek scholar Eratosthenes invented a 'sieve' to sift out prime numbers — and the same trick still finds primes today.",
  didYouKnow: [
    "There are infinitely many primes — Euclid proved it over 2000 years ago, with a clever argument that never ends.",
    "Only four perfect numbers were known to the ancient world: 6, 28, 496 and 8128.",
    "The numbers 8 and 15 share no factor except 1, so they are co-prime — even though neither is itself prime.",
  ],
  experiments: [
    {
      title: "Build your own prime sieve",
      materials: ["A 10×10 grid of the numbers 1–100", "Coloured pens"],
      steps: [
        "Cross out 1 (it is neither prime nor composite).",
        "Circle 2, then cross out every other multiple of 2.",
        "Circle the next un-crossed number (3) and cross out its multiples; repeat with 5 and 7.",
        "Every number still circled or untouched is prime.",
      ],
      whatHappens: "After only 2, 3, 5 and 7 you have already found every prime up to 100 — because any composite below 100 must have a prime factor under 10.",
    },
    {
      title: "Tiling with the HCF",
      materials: ["Squared paper", "A ruler"],
      steps: [
        "Draw a rectangle 24 squares wide and 36 squares tall.",
        "Try to cover it exactly with identical square tiles, making the tiles as big as possible.",
        "The largest square that fits along both sides is HCF(24, 36) = 12 squares.",
      ],
      whatHappens: "The biggest tile that fills a rectangle with no gaps is always the HCF of the two side lengths — a picture of what HCF really means.",
    },
  ],
  bonusDiagrams: [
    {
      caption: "Factor pairs of 12 meet at the square root.",
      svg: '<svg viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line of factors of twelve showing pairs one and twelve, two and six, three and four"><line x1="10" y1="40" x2="290" y2="40" stroke="#334155" stroke-width="2"/><g font-size="12" fill="#8b5cf6" text-anchor="middle"><text x="30" y="35">1</text><text x="70" y="35">2</text><text x="110" y="35">3</text><text x="150" y="35">4</text><text x="210" y="35">6</text><text x="280" y="35">12</text></g><text x="150" y="62" text-anchor="middle" font-size="11" fill="#334155">1×12, 2×6, 3×4 — partners meet near √12</text></svg>',
    },
  ],
};

export default extras;
