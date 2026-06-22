import type { ComprehensiveExam, MCQ, QA } from "../types";

// The Big Maths Exam — a cross-topic paper with its own globally-unique ids ("ex-...").
// Independent of the per-topic files; covers every Class 6 strand.

const mcq: MCQ[] = [
  {
    id: "ex-mcq-q01",
    question: "Write the number 5,07,432 in the International system with commas.",
    options: ["507,432", "5,07,432", "50,7432", "5074,32"],
    answerIndex: 0,
    explanation: "The International system groups in threes from the right: 507,432.",
    difficulty: "warmup",
  },
  {
    id: "ex-mcq-q02",
    question: "Which of these is a prime number?",
    options: ["1", "21", "29", "33"],
    answerIndex: 2,
    explanation: "29 has only factors 1 and 29. (1 is neither prime nor composite; 21 = 3×7; 33 = 3×11.)",
    difficulty: "warmup",
  },
  {
    id: "ex-mcq-q03",
    question: "What is 3/4 written as a decimal?",
    options: ["0.34", "0.75", "0.4", "1.33"],
    answerIndex: 1,
    explanation: "3/4 = 75/100 = 0.75.",
    difficulty: "warmup",
  },
  {
    id: "ex-mcq-q04",
    question: "The temperature was 4°C and dropped by 9°C. What is it now?",
    options: ["−5°C", "5°C", "−13°C", "13°C"],
    answerIndex: 0,
    explanation: "4 − 9 = −5°C.",
    difficulty: "core",
    hints: ["Start at 4 on a number line.", "Move 9 steps to the left (down).", "Count past zero into the negatives."],
    strategy: "Draw a diagram",
  },
  {
    id: "ex-mcq-q05",
    question: "A rectangle is 8 cm by 5 cm. What is its area?",
    options: ["13 cm²", "26 cm²", "40 cm²", "40 cm"],
    answerIndex: 2,
    explanation: "Area = length × breadth = 8 × 5 = 40 cm². (Area uses square units.)",
    difficulty: "core",
    hints: ["Area of a rectangle = length × breadth.", "8 × 5.", "Remember the units are cm²."],
  },
  {
    id: "ex-mcq-q06",
    question: "How many lines of symmetry does a square have?",
    options: ["2", "4", "1", "Infinite"],
    answerIndex: 1,
    explanation: "A square has 4 lines of symmetry: 2 diagonals and 2 through the midpoints of opposite sides.",
    difficulty: "core",
  },
  {
    id: "ex-mcq-q07",
    question: "Simplify the ratio 18 : 24 to its simplest form.",
    options: ["9 : 12", "3 : 4", "2 : 3", "6 : 8"],
    answerIndex: 1,
    explanation: "HCF of 18 and 24 is 6. 18÷6 : 24÷6 = 3 : 4.",
    difficulty: "core",
    hints: ["Find the HCF of 18 and 24.", "It is 6.", "Divide both parts by 6."],
    strategy: "Use factors (HCF)",
  },
  {
    id: "ex-mcq-q08",
    question: "If n = 7, what is the value of 3n − 5?",
    options: ["16", "21", "26", "15"],
    answerIndex: 0,
    explanation: "3 × 7 − 5 = 21 − 5 = 16.",
    difficulty: "core",
    hints: ["Replace n with 7.", "Work out 3 × 7 first.", "Then subtract 5."],
  },
  {
    id: "ex-mcq-q09",
    question: "What is the LCM of 6 and 8?",
    options: ["48", "14", "24", "2"],
    answerIndex: 2,
    explanation: "Multiples of 8: 8,16,24… 24 is the first one also divisible by 6. LCM = 24.",
    difficulty: "core",
    hints: ["List multiples of 8.", "Find the first that is also a multiple of 6.", "Check 24 ÷ 6 = 4."],
    strategy: "Find a pattern",
  },
  {
    id: "ex-mcq-q10",
    question: "Which decimal is the largest?",
    options: ["0.4", "0.39", "0.409", "0.41"],
    answerIndex: 3,
    explanation: "Compare place by place: 0.41 = 0.410 is bigger than 0.409, 0.40 and 0.39.",
    difficulty: "core",
    hints: ["Give them all the same number of decimal places.", "0.40, 0.39, 0.409, 0.41 → 0.410.", "Now compare the thousandths."],
  },
  {
    id: "ex-mcq-q11",
    question: "A pictograph uses 🍎 = 10 apples. A row shows 4½ apples. How many apples is that?",
    options: ["14", "45", "40", "9"],
    answerIndex: 1,
    explanation: "Each symbol is 10, so 4½ × 10 = 45 apples.",
    difficulty: "core",
    hints: ["One symbol stands for 10.", "Half a symbol is 5.", "4 × 10 + 5."],
  },
  {
    id: "ex-mcq-q12",
    question: "What is the perimeter of a square garden of side 12 m?",
    options: ["24 m", "48 m", "144 m", "36 m"],
    answerIndex: 1,
    explanation: "Perimeter of a square = 4 × side = 4 × 12 = 48 m.",
    difficulty: "warmup",
  },
  {
    id: "ex-mcq-q13",
    question: "A cuboid has how many edges?",
    options: ["6", "8", "12", "4"],
    answerIndex: 2,
    explanation: "A cuboid has 12 edges, 8 vertices and 6 faces.",
    difficulty: "core",
  },
  {
    id: "ex-mcq-q14",
    question:
      "The sum of the first n odd numbers (1 + 3 + 5 + …) is always a perfect square. What is 1 + 3 + 5 + 7 + 9 + 11?",
    options: ["35", "36", "30", "42"],
    answerIndex: 1,
    explanation: "There are 6 odd numbers, so the sum is 6² = 36.",
    difficulty: "challenge",
    hints: ["Count how many odd numbers there are.", "There are 6 of them.", "The sum of the first n odds is n²."],
    strategy: "Look for a pattern",
  },
  {
    id: "ex-mcq-q15",
    question:
      "Two ropes are 36 m and 48 m long. They are cut into equal pieces of the greatest possible length with none left over. How long is each piece?",
    options: ["6 m", "12 m", "9 m", "4 m"],
    answerIndex: 1,
    explanation: "The greatest equal length that divides both is HCF(36, 48) = 12 m.",
    difficulty: "challenge",
    hints: ["'Greatest length that divides both' means HCF.", "Factorise: 36 = 2²×3², 48 = 2⁴×3.", "HCF = 2²×3 = 12."],
    strategy: "Work backwards",
  },
  {
    id: "ex-mcq-q16",
    question:
      "A rectangle and a square have the same perimeter of 24 cm. The rectangle is 8 cm long. Which has the larger area?",
    options: ["The rectangle", "The square", "They are equal", "Cannot tell"],
    answerIndex: 1,
    explanation:
      "Square side = 24÷4 = 6, area 36 cm². Rectangle breadth = 12 − 8 = 4, area 8×4 = 32 cm². The square is larger.",
    difficulty: "challenge",
    hints: [
      "Find the square's side from its perimeter.",
      "For the rectangle, length + breadth = 12, so breadth = 4.",
      "Compare 6×6 with 8×4.",
    ],
    strategy: "Try small cases",
  },
];

const qa: QA[] = [
  {
    id: "ex-qa-q01",
    question: "Work out 2/3 + 1/6, giving your answer in simplest form. Show your steps.",
    modelAnswer: "Common denominator 6: 2/3 = 4/6. 4/6 + 1/6 = 5/6, already in simplest form.",
    markScheme: ["common denominator 6", "2/3 = 4/6", "5/6"],
    commonError: "Adding denominators to get 3/9.",
    difficulty: "core",
    numericAnswer: 5 / 6,
    tolerance: 0.001,
    hints: ["LCM of 3 and 6 is 6.", "Rewrite 2/3 over 6.", "Add the numerators only."],
    solutions: [{ label: "Common denominator", steps: ["2/3 = 4/6.", "4/6 + 1/6 = 5/6."] }],
  },
  {
    id: "ex-qa-q02",
    question:
      "A shop sells 3 notebooks for ₹45. Using the unitary method, find the cost of 7 notebooks.",
    modelAnswer: "One notebook costs ₹45 ÷ 3 = ₹15. So 7 notebooks cost 7 × ₹15 = ₹105.",
    markScheme: ["one notebook = ₹15 | 45 ÷ 3", "7 × 15", "₹105 | 105"],
    commonError: "Multiplying 45 by 7 without first finding the cost of one.",
    difficulty: "core",
    numericAnswer: 105,
    hints: ["First find the cost of ONE notebook.", "45 ÷ 3 = 15.", "Then multiply by 7."],
    solutions: [
      { label: "Unitary method", steps: ["1 notebook = 45 ÷ 3 = ₹15.", "7 notebooks = 7 × 15 = ₹105."] },
      { label: "Scaling the ratio", steps: ["3 : 45 means ×15.", "7 × 15 = ₹105."] },
    ],
  },
  {
    id: "ex-qa-q03",
    question:
      "On a number line, start at −3. Add 8, then subtract 5. Where do you end up? Show the moves.",
    modelAnswer: "−3 + 8 = 5. Then 5 − 5 = 0. You end at 0.",
    markScheme: ["−3 + 8 = 5", "5 − 5 = 0", "ends at 0"],
    commonError: "Going the wrong way when adding to a negative.",
    difficulty: "core",
    numericAnswer: 0,
    hints: ["Adding moves you right.", "−3 + 8 lands where?", "Then move 5 left."],
  },
  {
    id: "ex-qa-q04",
    question:
      "A matchstick pattern makes 1 square with 4 sticks, 2 squares in a row with 7 sticks, 3 with 10 sticks. Write a rule for the number of sticks needed for n squares, and use it to find the sticks for 10 squares.",
    modelAnswer:
      "Each new square adds 3 sticks to the first square's 4, so sticks = 3n + 1. For n = 10: 3×10 + 1 = 31 sticks.",
    markScheme: ["3n + 1 | rule adds 3 each time", "substitute n = 10", "31"],
    commonError: "Using 4n (counting shared sticks twice).",
    difficulty: "challenge",
    numericAnswer: 31,
    strategy: "Find a pattern",
    hints: [
      "Look at how many sticks are ADDED for each extra square.",
      "It goes 4, 7, 10 … adding 3 each time.",
      "So sticks = 3n + 1; put n = 10.",
    ],
    solutions: [
      {
        label: "Spot the constant difference",
        steps: ["Differences are +3 each square.", "Rule: 3n + 1.", "n = 10 → 31 sticks."],
      },
    ],
  },
  {
    id: "ex-qa-q05",
    question:
      "Challenge: I am a 2-digit number. I am a multiple of 9, and the sum of my digits is 9. The number formed by reversing my digits is smaller than me. What numbers could I be?",
    modelAnswer:
      "Multiples of 9 with digit-sum 9 and two digits: 18, 27, 36, 45, 54, 63, 72, 81, 90. The reverse must be smaller, so the tens digit > units digit: 54, 63, 72, 81, 90.",
    markScheme: [
      "multiples of 9 are 18,27,...,90",
      "digit sum 9 holds for all of them",
      "reverse smaller means tens digit greater | 54 63 72 81 90",
    ],
    commonError: "Forgetting that the reverse-smaller condition removes 18, 27, 36, 45.",
    difficulty: "challenge",
    strategy: "Try small cases",
    hints: [
      "List the 2-digit multiples of 9.",
      "Their digit sums are all 9 already.",
      "Keep only those whose tens digit is bigger than the units digit.",
    ],
  },
  {
    id: "ex-qa-q06",
    question:
      "A bar graph shows favourite fruits: Mango 12, Apple 8, Banana 6, Orange 4. How many children were asked, and what fraction chose Mango? Give the fraction in simplest form.",
    modelAnswer:
      "Total = 12 + 8 + 6 + 4 = 30 children. Mango fraction = 12/30 = 2/5 in simplest form.",
    markScheme: ["total 30", "12/30", "2/5"],
    commonError: "Forgetting to simplify 12/30.",
    difficulty: "core",
    numericAnswer: 30,
    hints: ["Add all four counts for the total.", "Mango is 12 out of the total.", "Simplify 12/30 by dividing by 6."],
  },
];

export const comprehensiveExam: ComprehensiveExam = {
  mcqPapers: [
    { id: "ex-mcq-paper-1", title: "Big Exam — Multiple Choice (Part 1)", questions: mcq.slice(0, 8) },
    { id: "ex-mcq-paper-2", title: "Big Exam — Multiple Choice (Part 2)", questions: mcq.slice(8) },
  ],
  qaPapers: [{ id: "ex-qa-paper-1", title: "Big Exam — Written", questions: qa }],
};
