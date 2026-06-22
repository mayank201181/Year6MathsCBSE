import type { Topic } from "../types";

// Playing with Numbers (Prime Time) — CBSE Class 6.
// Factors & multiples, primes & composites, the Sieve of Eratosthenes,
// divisibility rules, prime factorisation, HCF & LCM, co-primes.

const playingWithNumbers: Topic = {
  id: "playing-with-numbers",
  title: "Playing with Numbers (Prime Time)",
  subject: "Maths",
  chapter: "NCERT Ch. 3 / Ganita Prakash Ch. 5 (Prime Time)",
  icon: "🔱",
  color: "#8b5cf6",
  intro:
    "Every whole number is built out of prime numbers, the way every wall is built out of bricks. Once you can spot factors, test divisibility at a glance, and split a number into its prime bricks, problems about sharing, tiling and repeating events all suddenly become easy.",
  guide: [
    {
      heading: "Factors and multiples",
      discovery: {
        problem:
          "You have 12 identical square tiles. In how many different ways can you arrange ALL of them into a perfect rectangle (e.g. 2 rows of 6)? List the rectangles.",
        idea:
          "Each rectangle is a pair of numbers that multiply to 12: 1×12, 2×6, 3×4. The numbers 1, 2, 3, 4, 6, 12 are exactly the *factors* of 12 — and 12 is a *multiple* of each of them.",
      },
      body:
        "A **factor** of a number divides it exactly, leaving no remainder. A **multiple** of a number is what you get by multiplying it by 1, 2, 3, …\n\nSo 3 is a factor of 12, and 12 is a multiple of 3 — the two words describe the same relationship from opposite ends.\n\nA neat trick: factors always come in **pairs** that multiply to the number. For 12: (1,12), (2,6), (3,4). To list every factor, just walk up from 1 and write down both partners each time you find a divisor — you can stop once the pair starts to repeat.\n\nA **perfect number** is a special number equal to the sum of all its factors *except itself*. For 6 the factors are 1, 2, 3, 6, and 1 + 2 + 3 = 6. So 6 is perfect!",
      keyPoints: [
        "A factor divides exactly (no remainder); a multiple is the number times 1, 2, 3, …",
        "Factors come in pairs that multiply to the number.",
        "1 is a factor of every number; every number is a factor (and a multiple) of itself.",
        "A perfect number equals the sum of its factors below it (6 = 1 + 2 + 3).",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Twelve tiles arranged as a three by four rectangle showing three times four equals twelve"><rect x="10" y="20" width="180" height="60" fill="none" stroke="#334155" stroke-width="2"/><line x1="55" y1="20" x2="55" y2="80" stroke="#334155"/><line x1="100" y1="20" x2="100" y2="80" stroke="#334155"/><line x1="145" y1="20" x2="145" y2="80" stroke="#334155"/><line x1="10" y1="40" x2="190" y2="40" stroke="#334155"/><line x1="10" y1="60" x2="190" y2="60" stroke="#334155"/><text x="100" y="14" text-anchor="middle" font-size="12" fill="#334155">3 rows of 4 = 12</text><text x="210" y="55" font-size="12" fill="#8b5cf6">factors of 12: 1,2,3,4,6,12</text></svg>',
      ],
      whyItWorks:
        "If a divides n with no remainder, then n = a × b for some whole number b, and that b is also a factor — so factors must appear in pairs. The two partners meet at the square root, which is why you never have to search past √n.",
      strategies: ["Draw a diagram", "List in pairs"],
    },
    {
      heading: "Primes, composites and the Sieve of Eratosthenes",
      discovery: {
        problem:
          "Some numbers can be split into a rectangle in many ways (12 = 2×6 = 3×4), but others, like 7, can only ever be made as 1×7. What is special about the numbers that have *no* interesting rectangle?",
        idea:
          "A number with exactly two factors (1 and itself) is **prime** — it refuses to be split. Numbers with more than two factors are **composite**. The prime numbers are the indivisible building blocks of all the others.",
      },
      body:
        "A **prime number** has exactly two factors: 1 and itself (2, 3, 5, 7, 11, 13, …). A **composite number** has more than two factors (4, 6, 8, 9, …).\n\n**1 is neither prime nor composite** — it has only one factor. And **2 is the only even prime**; every other even number has 2 as an extra factor.\n\nThe **Sieve of Eratosthenes** finds all primes up to a limit. Write the numbers 1–100, cross out 1, then repeatedly circle the next un-crossed number (it must be prime) and cross out all of its multiples. What survives is the list of primes.\n\nA powerful shortcut: to check if a number under 100 is prime, you only need to test the primes up to its square root — 2, 3, 5, 7. If none of them divides it, it is prime.",
      keyPoints: [
        "Prime = exactly two factors; composite = more than two factors.",
        "1 is neither prime nor composite; 2 is the only even prime.",
        "The sieve crosses out multiples to leave the primes behind.",
        "To test a number under 100, only try primes up to its square root (2, 3, 5, 7).",
      ],
      diagrams: [
        '<svg viewBox="0 0 250 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sieve grid for numbers 1 to 20 with multiples of two and three crossed out and primes circled"><text x="0" y="12" font-size="11" fill="#334155">Sieve 1 to 20 (primes circled)</text><g font-size="12" fill="#334155" text-anchor="middle"><text x="25" y="40">1</text><circle cx="55" cy="36" r="11" fill="none" stroke="#8b5cf6"/><text x="55" y="40">2</text><circle cx="85" cy="36" r="11" fill="none" stroke="#8b5cf6"/><text x="85" y="40">3</text><text x="115" y="40" fill="#cbd5e1">4</text><circle cx="145" cy="36" r="11" fill="none" stroke="#8b5cf6"/><text x="145" y="40">5</text><text x="175" y="40" fill="#cbd5e1">6</text><circle cx="205" cy="36" r="11" fill="none" stroke="#8b5cf6"/><text x="205" y="40">7</text><text x="25" y="80" fill="#cbd5e1">8</text><text x="55" y="80" fill="#cbd5e1">9</text><text x="85" y="80" fill="#cbd5e1">10</text><circle cx="115" cy="76" r="11" fill="none" stroke="#8b5cf6"/><text x="115" y="80">11</text><text x="145" y="80" fill="#cbd5e1">12</text><circle cx="175" cy="76" r="11" fill="none" stroke="#8b5cf6"/><text x="175" y="80">13</text><text x="205" y="80" fill="#cbd5e1">14</text><text x="25" y="110" fill="#cbd5e1">15</text><text x="55" y="110" fill="#cbd5e1">16</text><circle cx="85" cy="106" r="11" fill="none" stroke="#8b5cf6"/><text x="85" y="110">17</text><text x="115" y="110" fill="#cbd5e1">18</text><circle cx="145" cy="106" r="11" fill="none" stroke="#8b5cf6"/><text x="145" y="110">19</text><text x="175" y="110" fill="#cbd5e1">20</text></g></svg>',
      ],
      whyItWorks:
        "If a composite number n had two factors both bigger than √n, their product would be bigger than n — impossible. So every composite must have a factor (and therefore a prime factor) no larger than √n. That is why testing primes up to the square root is enough, and why the sieve only needs to start crossing each prime's multiples from the prime's square.",
      strategies: ["Try small cases", "Look for a pattern"],
      thinkDeeper:
        "The primes 3, 5, 7 are three primes in a row two apart. Can you find any OTHER set of three such 'triplet' primes? Why is it impossible?",
    },
    {
      heading: "Divisibility rules — and why they work",
      discovery: {
        problem:
          "Without dividing, decide whether 7,341 is divisible by 3. Now try 7,343. Is there a quick test that does not need long division?",
        idea:
          "Add the digits: 7+3+4+1 = 15, which is divisible by 3, so 7,341 is too. For 7,343 the digit sum is 17, not divisible by 3. The *digit sum* secretly carries the answer.",
      },
      body:
        "Quick tests let you check divisibility at a glance:\n\n- **2**: last digit is even (0, 2, 4, 6, 8).\n- **5**: last digit is 0 or 5.\n- **10**: last digit is 0.\n- **4**: the number formed by the **last two** digits is divisible by 4.\n- **8**: the number formed by the **last three** digits is divisible by 8.\n- **3**: the **sum of the digits** is divisible by 3.\n- **9**: the **sum of the digits** is divisible by 9.\n- **6**: divisible by **both 2 and 3**.\n- **11**: the difference between the sum of digits in odd places and even places is 0 or a multiple of 11.\n\n**Why the rule for 3 and 9 works:** 10 = 9 + 1, 100 = 99 + 1, 1000 = 999 + 1, and so on. Each power of ten is a multiple of 9 plus 1. So a number like 7341 = 7×999 + 3×99 + 4×9 + (7+3+4+1). The first chunk is always a multiple of 9 (and of 3); what is left over is exactly the **digit sum**. So the whole number is divisible by 3 (or 9) precisely when its digit sum is.",
      keyPoints: [
        "2, 5, 10 → look at the last digit; 4 → last two digits; 8 → last three.",
        "3 and 9 → add the digits.",
        "6 = divisible by 2 AND 3; this combining trick works for any co-prime pair.",
        "11 → alternating digit-sum difference is 0 or a multiple of 11.",
      ],
      whyItWorks:
        "Because every power of 10 leaves remainder 1 when divided by 9 (and by 3), each digit contributes just its own value to the remainder — so the digit sum decides divisibility by 3 and 9. For 11, powers of 10 leave remainders +1, −1, +1, −1, …, which is why the digits alternately add and subtract.",
      strategies: ["Look for invariants", "Break into place values"],
    },
    {
      heading: "Prime factorisation (factor trees)",
      discovery: {
        problem:
          "Break 60 down into a product of prime numbers. Try starting with 60 = 6 × 10, then with 60 = 4 × 15. Do you reach the same set of primes both ways?",
        idea:
          "However you split it, 60 always ends as 2 × 2 × 3 × 5. Every whole number has exactly ONE prime factorisation — this is the Fundamental Theorem of Arithmetic.",
      },
      body:
        "**Prime factorisation** means writing a number as a product of primes only. A **factor tree** is the easiest way: split the number into any two factors, then keep splitting each branch until every leaf is prime.\n\nFor 60: 60 = 6 × 10 = (2 × 3) × (2 × 5) = **2 × 2 × 3 × 5** = 2² × 3 × 5.\n\nNo matter which split you start with, the bag of prime leaves is always the same — only the order can differ.",
      keyPoints: [
        "Prime factorisation expresses a number using primes only.",
        "Use a factor tree: split, then split again until all leaves are prime.",
        "The set of prime factors is unique (only the order can change).",
        "Group repeats with powers: 60 = 2² × 3 × 5.",
      ],
      diagrams: [
        '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Factor tree for sixty splitting into six and ten then into primes two three two five"><g font-size="13" fill="#334155" text-anchor="middle"><text x="130" y="20">60</text><line x1="124" y1="26" x2="80" y2="54" stroke="#334155"/><line x1="136" y1="26" x2="180" y2="54" stroke="#334155"/><text x="74" y="68">6</text><text x="186" y="68">10</text><line x1="68" y1="74" x2="44" y2="102" stroke="#334155"/><line x1="80" y1="74" x2="104" y2="102" stroke="#334155"/><line x1="180" y1="74" x2="156" y2="102" stroke="#334155"/><line x1="192" y1="74" x2="216" y2="102" stroke="#334155"/><text x="40" y="116" fill="#8b5cf6">2</text><text x="108" y="116" fill="#8b5cf6">3</text><text x="152" y="116" fill="#8b5cf6">2</text><text x="220" y="116" fill="#8b5cf6">5</text><text x="130" y="150">60 = 2 × 2 × 3 × 5</text></g></svg>',
      ],
      whyItWorks:
        "Each split replaces a number by two factors whose product is unchanged, so the overall product stays 60 the whole way down. Composite leaves can always be split further, so the process only stops when every leaf is prime — and uniqueness means the destination never depends on the route.",
      strategies: ["Draw a diagram", "Break into smaller parts"],
    },
    {
      heading: "Common factors, HCF, LCM and co-primes",
      discovery: {
        problem:
          "A florist has 24 roses and 36 lilies. She wants identical bunches using ALL the flowers, with no flower left over. What is the largest number of bunches she can make, and what is in each?",
        idea:
          "The number of bunches must divide both 24 and 36 — a *common factor*. The largest such number is the **HCF**, 12. So 12 bunches, each with 2 roses and 3 lilies.",
      },
      body:
        "A **common factor** of two numbers divides both; a **common multiple** is a multiple of both.\n\nThe **Highest Common Factor (HCF)** is the biggest number dividing both — useful for *sharing into equal groups* and *cutting into the largest equal pieces*. The **Lowest Common Multiple (LCM)** is the smallest number both divide into — useful when things *repeat and line up again* (bells ringing together, buses meeting).\n\n**Find them with prime factorisation:**\n- 24 = 2³ × 3, 36 = 2² × 3².\n- HCF = take the **lowest** power of each shared prime = 2² × 3 = 12.\n- LCM = take the **highest** power of every prime that appears = 2³ × 3² = 72.\n\nTwo numbers are **co-prime** if their only common factor is 1 (their HCF is 1), e.g. 8 and 15. They share no prime at all.\n\nA handy check: **HCF × LCM = the product of the two numbers**. Here 12 × 72 = 864 = 24 × 36.",
      keyPoints: [
        "HCF = largest number dividing both → use for equal sharing / largest pieces.",
        "LCM = smallest number both divide → use for repeating events lining up.",
        "From primes: HCF takes lowest shared powers; LCM takes highest powers of all primes.",
        "Co-prime numbers have HCF 1; and HCF × LCM = product of the two numbers.",
      ],
      whyItWorks:
        "A common factor can only use primes that BOTH numbers have, and no more of each than the smaller supply — so the HCF is the lowest shared powers. A common multiple must contain enough of every prime to cover BOTH numbers — so the LCM takes the highest power of each. Together every prime is counted exactly the number of times it appears across both numbers, which is why HCF × LCM equals their product.",
      strategies: ["Use prime factorisation", "Decide HCF vs LCM by the story"],
      thinkDeeper:
        "Two bells ring every 12 and 18 minutes, starting together at 9:00. When do they next ring together — and is that an HCF or an LCM question? Why?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is a factor?", back: "A number that divides exactly into another, leaving no remainder. Factors come in pairs." },
      { front: "Prime vs composite?", back: "A prime has exactly two factors (1 and itself); a composite has more than two. 1 is neither." },
      { front: "Divisibility rule for 3 and 9?", back: "Add the digits. If the digit sum is divisible by 3 (or 9), so is the number." },
      { front: "Rule for divisibility by 4?", back: "Look at the last two digits — if that two-digit number is divisible by 4, so is the whole number." },
      { front: "What is the HCF?", back: "The Highest Common Factor — the largest number that divides both numbers (lowest shared prime powers)." },
      { front: "What is the LCM?", back: "The Lowest Common Multiple — the smallest number both numbers divide into (highest prime powers)." },
      { front: "What are co-prime numbers?", back: "Two numbers whose only common factor is 1 (HCF = 1), e.g. 8 and 15." },
    ],
    formulae: [
      { name: "Divisibility by 3 / 9", rule: "Number is divisible by 3 (or 9) ⇔ its digit sum is" },
      { name: "Divisibility by 4 / 8", rule: "Last 2 digits divisible by 4; last 3 digits divisible by 8" },
      { name: "HCF from primes", rule: "Multiply the LOWEST power of each shared prime" },
      { name: "LCM from primes", rule: "Multiply the HIGHEST power of every prime that appears" },
      { name: "HCF–LCM link", rule: "HCF(a,b) × LCM(a,b) = a × b" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "pwn-mcq-q01",
        question: "Which of these is a factor of 18?",
        options: ["4", "6", "8", "12"],
        answerIndex: 1,
        explanation: "18 ÷ 6 = 3 with no remainder, so 6 is a factor. 4, 8 and 12 do not divide 18 exactly.",
        guideRef: "Factors and multiples",
        difficulty: "warmup",
      },
      {
        id: "pwn-mcq-q02",
        question: "Which number is a multiple of 7?",
        options: ["27", "42", "50", "60"],
        answerIndex: 1,
        explanation: "7 × 6 = 42, so 42 is a multiple of 7. The others are not in the 7 times table.",
        guideRef: "Factors and multiples",
        difficulty: "warmup",
      },
      {
        id: "pwn-mcq-q03",
        question: "Which of these is a prime number?",
        options: ["21", "27", "29", "33"],
        answerIndex: 2,
        explanation: "29 has only the factors 1 and 29. 21 = 3×7, 27 = 3×9, 33 = 3×11 are all composite.",
        guideRef: "Primes, composites and the Sieve of Eratosthenes",
        difficulty: "warmup",
      },
      {
        id: "pwn-mcq-q04",
        question: "How many factors does 1 have?",
        options: ["0", "1", "2", "Infinitely many"],
        answerIndex: 1,
        explanation: "1 has exactly one factor (itself), which is why it is neither prime nor composite.",
        guideRef: "Primes, composites and the Sieve of Eratosthenes",
        difficulty: "warmup",
      },
      {
        id: "pwn-mcq-q05",
        question: "Which number is divisible by 5?",
        options: ["52", "73", "84", "95"],
        answerIndex: 3,
        explanation: "A number is divisible by 5 when its last digit is 0 or 5. Only 95 ends in 5.",
        guideRef: "Divisibility rules — and why they work",
        difficulty: "warmup",
      },
      {
        id: "pwn-mcq-q06",
        question: "What is the only even prime number?",
        options: ["0", "1", "2", "4"],
        answerIndex: 2,
        explanation: "2 is prime (factors 1 and 2). Every other even number also has 2 as a factor, so it is composite.",
        guideRef: "Primes, composites and the Sieve of Eratosthenes",
        difficulty: "warmup",
      },
      {
        id: "pwn-mcq-q07",
        question: "Using the digit-sum rule, which number is divisible by 3?",
        options: ["124", "211", "246", "319"],
        answerIndex: 2,
        explanation: "2+4+6 = 12, which is divisible by 3, so 246 is. The other digit sums (7, 4, 13) are not.",
        guideRef: "Divisibility rules — and why they work",
        difficulty: "core",
        hints: ["Add up the digits of each number.", "Is the digit sum a multiple of 3?", "2 + 4 + 6 = 12 = 3 × 4."],
        strategy: "Look for invariants",
      },
      {
        id: "pwn-mcq-q08",
        question: "Which number is divisible by 4?",
        options: ["118", "226", "316", "542"],
        answerIndex: 2,
        explanation: "Check the last two digits: 16 is divisible by 4, so 316 is. 18, 26 and 42 are not multiples of 4.",
        guideRef: "Divisibility rules — and why they work",
        difficulty: "core",
        hints: ["The rule for 4 uses only the last two digits.", "Is the two-digit ending divisible by 4?", "16 ÷ 4 = 4."],
        strategy: "Break into place values",
      },
      {
        id: "pwn-mcq-q09",
        question: "What is the prime factorisation of 60?",
        options: ["2 × 30", "2² × 15", "2² × 3 × 5", "2 × 3 × 10"],
        answerIndex: 2,
        explanation: "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. The other options still contain composite numbers (30, 15, 10).",
        guideRef: "Prime factorisation (factor trees)",
        difficulty: "core",
        hints: ["Keep splitting until every factor is prime.", "60 = 4 × 15 = (2×2) × (3×5).", "Group the repeated 2s as 2²."],
        strategy: "Draw a diagram",
      },
      {
        id: "pwn-mcq-q10",
        question: "What is the HCF of 24 and 36?",
        options: ["6", "12", "18", "72"],
        answerIndex: 1,
        explanation: "24 = 2³×3, 36 = 2²×3². Lowest shared powers: 2² × 3 = 12.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "core",
        hints: ["Write each as a product of primes.", "Take the lowest power of each shared prime.", "2² × 3 = 12."],
        strategy: "Use prime factorisation",
      },
      {
        id: "pwn-mcq-q11",
        question: "What is the LCM of 6 and 8?",
        options: ["14", "24", "48", "12"],
        answerIndex: 1,
        explanation: "6 = 2×3, 8 = 2³. Highest powers: 2³ × 3 = 24.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "core",
        hints: ["List multiples of 8 and check which is a multiple of 6.", "Or use primes: highest power of each.", "2³ × 3 = 24."],
        strategy: "Use prime factorisation",
      },
      {
        id: "pwn-mcq-q12",
        question: "Which pair of numbers is co-prime?",
        options: ["8 and 12", "9 and 15", "8 and 15", "6 and 9"],
        answerIndex: 2,
        explanation: "8 = 2³ and 15 = 3×5 share no prime factor, so their HCF is 1 — they are co-prime. The other pairs share a factor.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "core",
        hints: ["Co-prime means HCF = 1.", "Do the two numbers share any prime factor?", "8 is all 2s; 15 is 3 and 5 — nothing in common."],
        strategy: "Use prime factorisation",
      },
      {
        id: "pwn-mcq-q13",
        question: "Which number is divisible by 9?",
        options: ["453", "513", "611", "742"],
        answerIndex: 1,
        explanation: "5+1+3 = 9, divisible by 9, so 513 is. Digit sums 12, 8 and 13 are not multiples of 9.",
        guideRef: "Divisibility rules — and why they work",
        difficulty: "core",
        hints: ["Add the digits.", "Is the digit sum divisible by 9?", "5 + 1 + 3 = 9."],
        strategy: "Look for invariants",
      },
      {
        id: "pwn-mcq-q14",
        question: "6 is a perfect number because…",
        options: [
          "it is even",
          "1 + 2 + 3 = 6 (its factors below itself add to 6)",
          "it has six factors",
          "6 = 2 × 3",
        ],
        answerIndex: 1,
        explanation: "A perfect number equals the sum of its factors apart from itself: 1 + 2 + 3 = 6.",
        guideRef: "Factors and multiples",
        difficulty: "core",
        hints: ["List the factors of 6 below 6 itself.", "They are 1, 2 and 3.", "Add them up."],
        strategy: "List in pairs",
      },
      {
        id: "pwn-mcq-q15",
        question: "When using the Sieve of Eratosthenes, after circling the prime 5 you start crossing out its multiples from…",
        options: ["10", "15", "25", "5"],
        answerIndex: 2,
        explanation: "All multiples of 5 below 25 (10, 15, 20) were already crossed out by 2 and 3. The first new one is 5² = 25.",
        guideRef: "Primes, composites and the Sieve of Eratosthenes",
        difficulty: "challenge",
        hints: [
          "Smaller multiples were already removed by smaller primes.",
          "Where does the first NEW multiple of 5 appear?",
          "Begin at the prime squared: 5 × 5.",
        ],
        strategy: "Look for a pattern",
      },
      {
        id: "pwn-mcq-q16",
        question: "What is the smallest number that is divisible by both 4 and 6?",
        options: ["10", "12", "24", "2"],
        answerIndex: 1,
        explanation: "The smallest common multiple of 4 and 6 is their LCM: 4 = 2², 6 = 2×3, so LCM = 2²×3 = 12.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "challenge",
        hints: ["'Divisible by both' and 'smallest' means the LCM.", "Use primes: 2² × 3.", "12 ÷ 4 = 3 and 12 ÷ 6 = 2."],
        strategy: "Use prime factorisation",
      },
      {
        id: "pwn-mcq-q17",
        question: "To test whether 97 is prime, the only primes you actually need to try dividing by are…",
        options: ["2 and 3 only", "2, 3, 5 and 7", "all primes up to 96", "2 up to 48"],
        answerIndex: 1,
        explanation: "You only need primes up to √97 ≈ 9.8, i.e. 2, 3, 5 and 7. None divides 97, so 97 is prime.",
        guideRef: "Primes, composites and the Sieve of Eratosthenes",
        difficulty: "challenge",
        hints: [
          "A composite must have a prime factor no bigger than its square root.",
          "√97 is just under 10.",
          "List the primes below 10: 2, 3, 5, 7.",
        ],
        strategy: "Try small cases",
      },
      {
        id: "pwn-mcq-q18",
        question: "Two numbers have HCF 6 and LCM 72. If one number is 24, what is the other?",
        options: ["12", "18", "36", "48"],
        answerIndex: 1,
        explanation: "HCF × LCM = product of the numbers, so 6 × 72 = 24 × other. The other = 432 ÷ 24 = 18.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "challenge",
        hints: ["Recall HCF × LCM = product of the two numbers.", "6 × 72 = 432.", "432 ÷ 24 = ?"],
        strategy: "Work backwards",
      },
      {
        id: "pwn-mcq-q19",
        question: "Which digit makes 4_6 (a three-digit number) divisible by 3 — choose the option that always works?",
        options: ["The blank must be 0, 3, 6 or 9", "The blank must be 2, 5 or 8", "Any digit works", "The blank must be 1 or 4"],
        answerIndex: 1,
        explanation: "Known digits sum to 4+6 = 10. For divisibility by 3 the total must be a multiple of 3, so the blank must be 2, 5 or 8 (giving 12, 15, 18).",
        guideRef: "Divisibility rules — and why they work",
        difficulty: "challenge",
        hints: ["Add the known digits first.", "4 + 6 = 10; what must the missing digit add to make a multiple of 3?", "10 + 2 = 12, 10 + 5 = 15, 10 + 8 = 18."],
        strategy: "Work backwards",
      },
      {
        id: "pwn-mcq-q20",
        question: "Using the rule for 11, which number is divisible by 11?",
        options: ["2453", "1342", "5280", "7311"],
        answerIndex: 2,
        explanation: "For 5280: (5+8) − (2+0) = 13 − 2 = 11, a multiple of 11. So 5280 is divisible by 11.",
        guideRef: "Divisibility rules — and why they work",
        difficulty: "challenge",
        hints: [
          "Add digits in odd positions, then digits in even positions.",
          "Take the difference of the two sums.",
          "If that difference is 0 or a multiple of 11, the number is divisible by 11.",
        ],
        strategy: "Look for invariants",
      },
    ],
    qa: [
      {
        id: "pwn-qa-q01",
        question: "List all the factors of 36, and state how many there are.",
        modelAnswer:
          "Walking up in pairs: 1×36, 2×18, 3×12, 4×9, 6×6. So the factors are 1, 2, 3, 4, 6, 9, 12, 18, 36 — that is 9 factors.",
        markScheme: [
          "pairs that multiply to 36 | 1×36, 2×18, 3×12, 4×9, 6×6",
          "factors 1,2,3,4,6,9,12,18,36",
          "9 factors",
        ],
        commonError: "Counting 6 twice (it pairs with itself), giving 10 instead of 9.",
        guideRef: "Factors and multiples",
        difficulty: "core",
        numericAnswer: 9,
        hints: ["Find pairs of numbers that multiply to 36.", "Start at 1 and work upward.", "When a pair repeats (6×6) you can stop."],
        strategy: "List in pairs",
        solutions: [
          {
            label: "Factor pairs",
            steps: [
              "1×36, 2×18, 3×12, 4×9, 6×6.",
              "Square number 36 has a repeated middle factor (6), counted once.",
              "Factors: 1, 2, 3, 4, 6, 9, 12, 18, 36 → 9 factors.",
            ],
          },
        ],
      },
      {
        id: "pwn-qa-q02",
        question: "Write 180 as a product of prime factors using a factor tree. Show your working.",
        modelAnswer:
          "180 = 18 × 10 = (2×9) × (2×5) = (2×3×3) × (2×5) = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5.",
        markScheme: [
          "split into factors with a tree | 180 = 18 × 10",
          "all leaves prime | 2,2,3,3,5",
          "2² × 3² × 5",
        ],
        commonError: "Stopping while a leaf is still composite, e.g. leaving 9 unsplit.",
        guideRef: "Prime factorisation (factor trees)",
        difficulty: "core",
        hints: ["Pick any two factors of 180 to start.", "Keep splitting any composite leaf.", "Group repeats as powers."],
        strategy: "Draw a diagram",
        solutions: [
          {
            label: "Factor tree",
            steps: ["180 = 18 × 10.", "18 = 2 × 3 × 3; 10 = 2 × 5.", "Collect: 2² × 3² × 5."],
          },
          {
            label: "Repeated division",
            steps: ["180 ÷ 2 = 90, ÷2 = 45, ÷3 = 15, ÷3 = 5, ÷5 = 1.", "Primes used: 2, 2, 3, 3, 5.", "So 180 = 2² × 3² × 5."],
          },
        ],
      },
      {
        id: "pwn-qa-q03",
        question:
          "Explain why the digit-sum test for divisibility by 3 works, using 132 as your example.",
        modelAnswer:
          "Write 132 by place value: 132 = 1×100 + 3×10 + 2. Now 100 = 99 + 1 and 10 = 9 + 1, so 132 = 1×99 + 3×9 + (1 + 3 + 2). The part 1×99 + 3×9 is a multiple of 3 (since 99 and 9 are). What is left is the digit sum 1 + 3 + 2 = 6, which is a multiple of 3. So 132 is divisible by 3.",
        markScheme: [
          "break into place value | 100 = 99 + 1, 10 = 9 + 1",
          "the 99s and 9s part is a multiple of 3",
          "remainder is the digit sum | 1+3+2 = 6 divisible by 3",
        ],
        commonError: "Just stating 'add the digits' without explaining that each power of ten is one more than a multiple of 9 (and 3).",
        guideRef: "Divisibility rules — and why they work",
        difficulty: "challenge",
        hints: [
          "Split 132 into hundreds, tens and ones.",
          "Write 100 and 10 as a multiple of 9 plus 1.",
          "Show only the digit sum is left over after removing the multiples of 3.",
        ],
        strategy: "Break into place values",
        solutions: [
          {
            label: "Place-value argument",
            steps: [
              "132 = 1×100 + 3×10 + 2.",
              "100 = 99+1, 10 = 9+1, so 132 = (1×99 + 3×9) + (1+3+2).",
              "First bracket is a multiple of 3; leftover is digit sum 6, also a multiple of 3 → 132 divisible by 3.",
            ],
          },
        ],
      },
      {
        id: "pwn-qa-q04",
        question:
          "A shopkeeper has 48 pens and 60 pencils. He wants to make identical gift packs using all of them, with the same number of pens in each pack and the same number of pencils in each pack. What is the greatest number of packs he can make, and what is in each pack?",
        modelAnswer:
          "The number of packs must divide both 48 and 60 — so it is a common factor, and the greatest is the HCF. 48 = 2⁴×3, 60 = 2²×3×5, so HCF = 2²×3 = 12. With 12 packs each gets 48÷12 = 4 pens and 60÷12 = 5 pencils.",
        markScheme: [
          "recognise HCF | greatest number dividing both",
          "HCF(48,60) = 12",
          "each pack 4 pens and 5 pencils",
        ],
        commonError: "Using the LCM (which would be 240) instead of the HCF for an equal-sharing problem.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "challenge",
        numericAnswer: 12,
        hints: [
          "Should the number of packs divide the totals, or be a multiple of them?",
          "It must divide both 48 and 60 → use the HCF.",
          "Then divide each total by the HCF to fill a pack.",
        ],
        strategy: "Decide HCF vs LCM by the story",
        solutions: [
          {
            label: "Prime factorisation",
            steps: [
              "48 = 2⁴ × 3, 60 = 2² × 3 × 5.",
              "HCF = lowest shared powers = 2² × 3 = 12.",
              "Each pack: 48÷12 = 4 pens, 60÷12 = 5 pencils.",
            ],
          },
        ],
      },
      {
        id: "pwn-qa-q05",
        question:
          "Two bells ring at intervals of 12 minutes and 18 minutes. They ring together at 9:00 am. At what time will they next ring together?",
        modelAnswer:
          "They ring together again after a number of minutes that is a multiple of both 12 and 18 — the LCM. 12 = 2²×3, 18 = 2×3², so LCM = 2²×3² = 36 minutes. 9:00 am + 36 minutes = 9:36 am.",
        markScheme: [
          "recognise LCM | repeating events lining up",
          "LCM(12,18) = 36 minutes",
          "9:36 am",
        ],
        commonError: "Using the HCF (6) and answering 9:06, or adding 12 + 18 = 30.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "challenge",
        numericAnswer: 36,
        hints: [
          "Do you need a number both intervals divide INTO, or that divides both?",
          "Repeating-and-lining-up means LCM.",
          "LCM(12,18) = 36; add 36 minutes to 9:00.",
        ],
        strategy: "Decide HCF vs LCM by the story",
        solutions: [
          {
            label: "LCM by primes",
            steps: ["12 = 2²×3, 18 = 2×3².", "LCM = 2²×3² = 36 minutes.", "9:00 + 36 min = 9:36 am."],
          },
          {
            label: "List multiples",
            steps: ["Multiples of 12: 12, 24, 36, …", "Multiples of 18: 18, 36, …", "First shared = 36 minutes → 9:36 am."],
          },
        ],
      },
      {
        id: "pwn-qa-q06",
        question: "Is 91 prime or composite? Justify your answer by testing the necessary primes.",
        modelAnswer:
          "√91 is just under 10, so I only test primes 2, 3, 5, 7. It is odd (not ÷2), digit sum 10 (not ÷3), does not end in 0 or 5 (not ÷5), but 91 = 7 × 13 (÷7 works). So 91 is composite.",
        markScheme: [
          "only test primes up to √91 | 2,3,5,7",
          "rule out 2,3,5",
          "91 = 7 × 13 → composite",
        ],
        commonError: "Assuming 91 is prime because it 'looks prime' without testing 7.",
        guideRef: "Primes, composites and the Sieve of Eratosthenes",
        difficulty: "core",
        hints: ["Which primes do you actually need to try?", "√91 < 10, so only 2, 3, 5, 7.", "Try 7: 7 × 13 = 91."],
        strategy: "Try small cases",
        solutions: [
          {
            label: "Square-root test",
            steps: ["Test primes up to √91 (≈9.5): 2, 3, 5, 7.", "Fails 2, 3, 5.", "91 ÷ 7 = 13 → composite."],
          },
        ],
      },
      {
        id: "pwn-qa-q07",
        question:
          "Find the smallest number that leaves a remainder of 1 when divided by each of 4, 5 and 6.",
        modelAnswer:
          "A number that divides exactly by 4, 5 and 6 is a common multiple of them; the smallest is the LCM. 4 = 2², 5 = 5, 6 = 2×3, so LCM = 2²×3×5 = 60. We want remainder 1, so add 1: the smallest number is 61.",
        markScheme: [
          "find LCM(4,5,6) = 60",
          "remainder 1 means add 1",
          "answer 61",
        ],
        commonError: "Giving 60 (the LCM) and forgetting to add the remainder of 1.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "challenge",
        numericAnswer: 61,
        hints: [
          "First find the smallest number that divides exactly by 4, 5 and 6.",
          "That is LCM(4,5,6) = 60.",
          "To leave remainder 1, the number is one more than a multiple of 60.",
        ],
        strategy: "Work backwards",
        solutions: [
          {
            label: "LCM then shift",
            steps: ["LCM(4,5,6) = 2²×3×5 = 60.", "60 leaves remainder 0; we want 1.", "Smallest such number = 60 + 1 = 61."],
          },
        ],
      },
      {
        id: "pwn-qa-q08",
        question:
          "What is the smallest number that is divisible by all of 1, 2, 3, 4, 5 and 6?",
        modelAnswer:
          "We need the LCM of 1–6. Prime powers needed: 2² (from 4), 3 (from 3 and 6) and 5. So LCM = 2² × 3 × 5 = 60. 60 is divisible by 1, 2, 3, 4, 5 and 6.",
        markScheme: [
          "recognise LCM of 1 to 6",
          "highest powers 2², 3, 5",
          "60",
        ],
        commonError: "Multiplying 1×2×3×4×5×6 = 720, forgetting shared factors should not be double-counted.",
        guideRef: "Common factors, HCF, LCM and co-primes",
        difficulty: "core",
        numericAnswer: 60,
        hints: ["You need the LCM, not the product.", "Which is the highest power of 2 needed? (4 = 2²)", "2² × 3 × 5 = 60."],
        strategy: "Use prime factorisation",
        solutions: [
          {
            label: "Highest powers",
            steps: ["List primes up to 6: 2, 3, 5.", "Highest powers needed: 2² (for 4), 3, 5.", "LCM = 4 × 3 × 5 = 60."],
          },
        ],
      },
      {
        id: "pwn-qa-q09",
        question:
          "The number 3,4_2 (a four-digit number with a missing tens digit shown as a blank) is divisible by 9. What digit goes in the blank?",
        modelAnswer:
          "Known digits sum to 3 + 4 + 2 = 9. For divisibility by 9 the total digit sum must be a multiple of 9. The next multiple reachable is 9 itself (blank = 0) or 18 (blank = 9). A single digit can be 0 or 9; the question expects the non-trivial digit 9, but 0 also works. So the blank is 0 or 9.",
        markScheme: [
          "use digit-sum rule for 9",
          "3 + 4 + 2 = 9; total must be a multiple of 9",
          "blank = 0 or 9",
        ],
        commonError: "Forgetting that 0 also makes the digit sum (9) a multiple of 9.",
        guideRef: "Divisibility rules — and why they work",
        difficulty: "core",
        hints: ["Add the three known digits.", "The full digit sum must be a multiple of 9.", "9 + 0 = 9 and 9 + 9 = 18 are both multiples of 9."],
        strategy: "Work backwards",
      },
      {
        id: "pwn-qa-q10",
        question:
          "Explain why 6 is the only number from 1 to 10 that is a perfect number, by checking each candidate.",
        modelAnswer:
          "A perfect number equals the sum of its proper factors (those below itself). Check: 1 has none; 2→1; 3→1; 4→1+2=3; 5→1; 6→1+2+3=6 ✓; 7→1; 8→1+2+4=7; 9→1+3=4; 10→1+2+5=8. Only 6 equals its proper-factor sum, so 6 is the only perfect number from 1 to 10.",
        markScheme: [
          "definition: sum of proper factors equals the number",
          "show 6 → 1+2+3 = 6",
          "show the others fail",
        ],
        commonError: "Including the number itself in the factor sum (e.g. saying 6 = 1+2+3+6).",
        guideRef: "Factors and multiples",
        difficulty: "core",
        hints: ["List the factors of each number below itself.", "Add those factors up.", "Which number's factor-sum equals the number?"],
        strategy: "Try small cases",
      },
    ],
  },
  questionBank: {
    mcqPapers: [],
    qaPapers: [],
  },
};

// Group the canonical quiz questions into sittable papers (same objects, no new ids).
playingWithNumbers.questionBank.mcqPapers = [
  { id: "pwn-mcq-paper-1", title: "Playing with Numbers — MCQ Set A", questions: playingWithNumbers.quiz.mcq.slice(0, 10) },
  { id: "pwn-mcq-paper-2", title: "Playing with Numbers — MCQ Set B", questions: playingWithNumbers.quiz.mcq.slice(10) },
];
playingWithNumbers.questionBank.qaPapers = [
  { id: "pwn-qa-paper-1", title: "Playing with Numbers — Written Practice A", questions: playingWithNumbers.quiz.qa.slice(0, 5) },
  { id: "pwn-qa-paper-2", title: "Playing with Numbers — Written Practice B", questions: playingWithNumbers.quiz.qa.slice(5) },
];

export default playingWithNumbers;
