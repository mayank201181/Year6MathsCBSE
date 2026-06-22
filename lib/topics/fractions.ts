import type { Topic } from "../types";

// SAMPLE / TEMPLATE TOPIC. Demonstrates the full contract: AoPS guide sections
// (discovery + whyItWorks + strategies + diagrams), flashcards + formulae,
// MCQs and QAs tagged with difficulty + hint ladders + multi-method solutions.

const fractions: Topic = {
  id: "fractions",
  title: "Fractions",
  subject: "Maths",
  chapter: "NCERT Ch. 7 (Fractions)",
  icon: "🍕",
  color: "#f97316",
  intro:
    "A fraction is a way of talking about a part of a whole — or a part of a group. Once you can picture fractions as pieces of a bar or slices of a pizza, adding, comparing and simplifying them stops being scary and starts being fun.",
  guide: [
    {
      heading: "What a fraction really means",
      discovery: {
        problem:
          "Two pizzas are the same size. One is cut into 4 equal slices, the other into 8. You take 3 slices from the first and 6 from the second. Did you eat the same amount, or more from one?",
        idea: "A fraction a/b means 'split the whole into b equal parts, then take a of them'. 3/4 and 6/8 cover exactly the same amount — they are equivalent fractions.",
      },
      body:
        "In the fraction **3/4**, the bottom number (**denominator**) tells you how many equal parts the whole is split into. The top number (**numerator**) tells you how many of those parts you take.\n\nThe key word is *equal*. If the parts are not equal, the fraction doesn't mean anything sensible.",
      keyPoints: [
        "Denominator = number of equal parts the whole is cut into.",
        "Numerator = how many parts you take.",
        "The same amount can be written many ways (3/4 = 6/8 = 9/12).",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bar split into four equal parts with three shaded"><rect x="10" y="20" width="300" height="40" fill="none" stroke="#334155" stroke-width="2"/><rect x="10" y="20" width="75" height="40" fill="#fb923c"/><rect x="85" y="20" width="75" height="40" fill="#fb923c"/><rect x="160" y="20" width="75" height="40" fill="#fb923c"/><line x1="85" y1="20" x2="85" y2="60" stroke="#334155" stroke-width="2"/><line x1="160" y1="20" x2="160" y2="60" stroke="#334155" stroke-width="2"/><line x1="235" y1="20" x2="235" y2="60" stroke="#334155" stroke-width="2"/><text x="160" y="14" text-anchor="middle" font-size="13" fill="#334155">three quarters shaded = 3/4</text></svg>',
      ],
      whyItWorks:
        "Multiplying top and bottom by the same number just cuts every piece into more equal pieces — the shaded amount never changes. That is why 3/4 = 6/8.",
      strategies: ["Draw a diagram", "Look for equal parts"],
    },
    {
      heading: "Equivalent fractions and simplest form",
      body:
        "To make an **equivalent fraction**, multiply (or divide) the numerator and denominator by the *same* number.\n\nA fraction is in **simplest form** (lowest terms) when the only number that divides both top and bottom is 1. To simplify, divide top and bottom by their HCF (highest common factor).",
      keyPoints: [
        "Multiply/divide top and bottom by the same number → equivalent fraction.",
        "Simplest form: divide by the HCF of numerator and denominator.",
        "12/18 → divide by 6 → 2/3.",
      ],
      whyItWorks:
        "Dividing top and bottom by their HCF removes the largest shared factor in one step, so nothing is left to cancel.",
      strategies: ["Find a pattern", "Use factors (HCF)"],
    },
    {
      heading: "Comparing, adding and subtracting fractions",
      discovery: {
        problem: "Which is bigger, 2/3 or 3/5? You are not allowed to use a calculator.",
        idea: "Rewrite both with the SAME denominator (a common denominator) so you are comparing equal-sized pieces. 2/3 = 10/15 and 3/5 = 9/15, so 2/3 is bigger.",
      },
      body:
        "To **compare, add or subtract** fractions you first make the denominators the same — a **common denominator** (often the LCM of the denominators). Then you simply compare or add/subtract the numerators, keeping the denominator.\n\nExample: 1/4 + 2/3 = 3/12 + 8/12 = **11/12**.",
      keyPoints: [
        "Same denominator → just add/subtract the numerators.",
        "Use the LCM of the denominators as the common denominator.",
        "Always give the final answer in simplest form.",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two bars showing one quarter plus two thirds rewritten over twelfths"><text x="0" y="22" font-size="12" fill="#334155">1/4 = 3/12</text><rect x="90" y="10" width="216" height="20" fill="none" stroke="#334155"/><rect x="90" y="10" width="54" height="20" fill="#60a5fa"/><text x="0" y="62" font-size="12" fill="#334155">2/3 = 8/12</text><rect x="90" y="50" width="216" height="20" fill="none" stroke="#334155"/><rect x="90" y="50" width="144" height="20" fill="#34d399"/><text x="0" y="100" font-size="12" fill="#334155">sum = 11/12</text><rect x="90" y="88" width="216" height="20" fill="none" stroke="#334155"/><rect x="90" y="88" width="198" height="20" fill="#fbbf24"/></svg>',
      ],
      whyItWorks:
        "You can only add things that are the same size. Quarters and thirds are different-sized pieces, so we re-cut both into twelfths first — then they add like ordinary counting.",
      strategies: ["Use a common denominator", "Draw a diagram"],
      thinkDeeper:
        "Can you add 1/2 + 1/3 + 1/6 in your head? What clever common denominator makes it easy?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What does the denominator tell you?", back: "How many equal parts the whole is split into." },
      { front: "How do you simplify a fraction?", back: "Divide the numerator and denominator by their HCF." },
      { front: "How do you add fractions with different denominators?", back: "Rewrite them over a common denominator (the LCM), then add the numerators." },
      { front: "What is an improper fraction?", back: "A fraction where the numerator is bigger than (or equal to) the denominator, e.g. 7/4." },
      { front: "Convert 7/4 to a mixed number.", back: "1 3/4 (because 7 ÷ 4 = 1 remainder 3)." },
    ],
    formulae: [
      { name: "Equivalent fraction", rule: "a/b = (a×k)/(b×k) for any non-zero k" },
      { name: "Simplest form", rule: "Divide top and bottom by HCF(a, b)" },
      { name: "Add/subtract", rule: "a/c ± b/c = (a ± b)/c (same denominator)" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "fra-mcq-q01",
        question: "What fraction of this shape is shaded if 3 out of 4 equal parts are coloured?",
        options: ["3/4", "4/3", "1/4", "3/7"],
        answerIndex: 0,
        explanation: "3 shaded parts out of 4 equal parts is 3/4. The numerator counts shaded parts; the denominator counts all equal parts.",
        guideRef: "What a fraction really means",
        difficulty: "warmup",
        strategy: "Draw a diagram",
      },
      {
        id: "fra-mcq-q02",
        question: "Which fraction is equivalent to 2/3?",
        options: ["3/4", "6/9", "4/9", "2/6"],
        answerIndex: 1,
        explanation: "Multiply top and bottom of 2/3 by 3: (2×3)/(3×3) = 6/9.",
        guideRef: "Equivalent fractions and simplest form",
        difficulty: "warmup",
      },
      {
        id: "fra-mcq-q03",
        question: "Write 12/18 in its simplest form.",
        options: ["6/9", "2/3", "3/4", "4/6"],
        answerIndex: 1,
        explanation: "HCF of 12 and 18 is 6. Dividing both by 6 gives 2/3.",
        guideRef: "Equivalent fractions and simplest form",
        difficulty: "core",
        hints: [
          "What is the biggest number that divides both 12 and 18?",
          "Both 12 and 18 are divisible by 6.",
          "12 ÷ 6 = 2 and 18 ÷ 6 = 3.",
        ],
        strategy: "Use factors (HCF)",
      },
      {
        id: "fra-mcq-q04",
        question: "Which is greater: 3/5 or 2/3?",
        options: ["3/5", "2/3", "They are equal", "Cannot tell"],
        answerIndex: 1,
        explanation: "Common denominator 15: 3/5 = 9/15 and 2/3 = 10/15, so 2/3 is greater.",
        guideRef: "Comparing, adding and subtracting fractions",
        difficulty: "core",
        hints: [
          "Make the denominators the same.",
          "The LCM of 5 and 3 is 15.",
          "Compare 9/15 with 10/15.",
        ],
        strategy: "Use a common denominator",
      },
      {
        id: "fra-mcq-q05",
        question: "What is 1/4 + 2/3?",
        options: ["3/7", "11/12", "3/12", "1/2"],
        answerIndex: 1,
        explanation: "Common denominator 12: 1/4 = 3/12, 2/3 = 8/12, sum = 11/12.",
        guideRef: "Comparing, adding and subtracting fractions",
        difficulty: "core",
        hints: ["Find a common denominator for 4 and 3.", "Use 12.", "3/12 + 8/12 = ?"],
        strategy: "Use a common denominator",
      },
      {
        id: "fra-mcq-q06",
        question:
          "A fraction equals 1/2. Its numerator and denominator add up to 27. What is the fraction?",
        options: ["9/18", "13/14", "12/15", "10/17"],
        answerIndex: 0,
        explanation:
          "Fractions equal to 1/2 look like k/2k, so numerator + denominator = 3k = 27, giving k = 9. The fraction is 9/18.",
        guideRef: "Equivalent fractions and simplest form",
        difficulty: "challenge",
        hints: [
          "Every fraction equal to 1/2 can be written as k/(2k).",
          "Then k + 2k = 27.",
          "Solve 3k = 27.",
        ],
        strategy: "Introduce a variable",
      },
    ],
    qa: [
      {
        id: "fra-qa-q01",
        question: "Explain, using a diagram in words, why 1/2 is the same as 4/8.",
        modelAnswer:
          "If you split a bar into 2 equal parts and shade 1, you shade half the bar. If instead you split the same bar into 8 equal parts, that same half now contains 4 of the small parts. So 1/2 and 4/8 shade exactly the same amount — they are equivalent.",
        markScheme: [
          "split a whole into equal parts | bar into parts",
          "1 of 2 parts is the same shaded area as 4 of 8",
          "multiply top and bottom by 4 | equivalent",
        ],
        commonError: "Thinking 4/8 is bigger because the numbers are bigger.",
        guideRef: "Equivalent fractions and simplest form",
        difficulty: "core",
        hints: ["Picture the same bar cut two different ways.", "How many eighths fit in one half?"],
        solutions: [
          {
            label: "Picture / area model",
            steps: [
              "Draw a bar split into 2; shade 1 half.",
              "Cut each half into 4 → 8 equal parts.",
              "The shaded half now shows 4 of the 8 parts → 4/8.",
            ],
          },
          {
            label: "By calculation",
            steps: ["1/2 = (1×4)/(2×4) = 4/8."],
          },
        ],
      },
      {
        id: "fra-qa-q02",
        question: "Work out 5/6 − 1/4, giving your answer in simplest form. Show your steps.",
        modelAnswer:
          "Common denominator of 6 and 4 is 12. 5/6 = 10/12 and 1/4 = 3/12. 10/12 − 3/12 = 7/12, which is already in simplest form.",
        markScheme: [
          "common denominator 12 | lcm 12",
          "10/12 and 3/12",
          "7/12",
        ],
        commonError: "Subtracting numerators and denominators separately (5−1)/(6−4).",
        guideRef: "Comparing, adding and subtracting fractions",
        difficulty: "core",
        numericAnswer: 7 / 12,
        tolerance: 0.001,
        hints: ["LCM of 6 and 4?", "Rewrite both over 12.", "Subtract the numerators only."],
        solutions: [
          {
            label: "Common denominator",
            steps: ["LCM(6,4) = 12.", "5/6 = 10/12, 1/4 = 3/12.", "10/12 − 3/12 = 7/12 (simplest)."],
          },
        ],
      },
      {
        id: "fra-qa-q03",
        question:
          "Challenge: Riya ate 1/3 of a cake. Her brother ate 1/4 of the same cake. What fraction of the cake is left? What is the smallest number of equal slices the cake could have been cut into so that each portion was a whole number of slices?",
        modelAnswer:
          "Eaten = 1/3 + 1/4 = 4/12 + 3/12 = 7/12. Left = 1 − 7/12 = 5/12. For both 1/3 and 1/4 to be whole numbers of slices, the number of slices must be a common multiple of 3 and 4 — the smallest is the LCM, 12 slices.",
        markScheme: [
          "1/3 + 1/4 = 7/12",
          "left = 5/12",
          "lcm of 3 and 4 | 12 slices",
        ],
        commonError: "Forgetting to subtract from 1 (a whole), or adding 1/3 + 1/4 as 2/7.",
        guideRef: "Comparing, adding and subtracting fractions",
        difficulty: "challenge",
        strategy: "Use a common denominator",
        hints: [
          "First find the fraction eaten altogether.",
          "Whole cake = 12/12. Subtract what was eaten.",
          "Slices must divide evenly into thirds AND quarters → common multiple of 3 and 4.",
        ],
        solutions: [
          {
            label: "Step by step",
            steps: [
              "1/3 + 1/4 = 7/12 eaten.",
              "Left = 12/12 − 7/12 = 5/12.",
              "Need a number divisible by 3 and 4 → LCM(3,4) = 12 slices.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [],
    qaPapers: [],
  },
};

// Group the canonical quiz questions into sittable papers (same objects, no new ids).
fractions.questionBank.mcqPapers = [
  { id: "fra-mcq-paper-1", title: "Fractions — MCQ Set A", questions: fractions.quiz.mcq.slice(0, 4) },
  { id: "fra-mcq-paper-2", title: "Fractions — MCQ Set B", questions: fractions.quiz.mcq.slice(4) },
];
fractions.questionBank.qaPapers = [
  { id: "fra-qa-paper-1", title: "Fractions — Written Practice", questions: fractions.quiz.qa },
];

export default fractions;
