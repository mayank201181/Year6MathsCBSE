// Gamification: star ranks and the SRS ladder.

export interface Rank {
  name: string;
  minStars: number;
  emoji: string;
}

export const RANKS: Rank[] = [
  { name: "Number Newbie", minStars: 0, emoji: "🌱" },
  { name: "Counting Cadet", minStars: 15, emoji: "🔢" },
  { name: "Fraction Friend", minStars: 40, emoji: "🍕" },
  { name: "Decimal Detective", minStars: 80, emoji: "🔍" },
  { name: "Geometry Guru", minStars: 130, emoji: "📐" },
  { name: "Algebra Ace", minStars: 200, emoji: "✨" },
  { name: "Maths Maestro", minStars: 300, emoji: "🧠" },
  { name: "Grand Mathematician", minStars: 450, emoji: "👑" },
];

export function rankFor(stars: number): Rank {
  let current = RANKS[0];
  for (const r of RANKS) {
    if (stars >= r.minStars) current = r;
  }
  return current;
}

export function nextRank(stars: number): Rank | null {
  for (const r of RANKS) {
    if (stars < r.minStars) return r;
  }
  return null;
}

// Spaced repetition ladder, in days.
export const SRS_LADDER = [1, 3, 7, 16, 35];
