import type { Topic } from "../types";

// CBSE Class 6 — Decimals (NCERT Ch. 8). AoPS-style guide with discovery openers,
// whyItWorks derivations, hint ladders, multi-method solutions and tiered difficulty.

const decimals: Topic = {
  id: "decimals",
  title: "Decimals",
  subject: "Maths",
  chapter: "NCERT Ch. 8 (Decimals)",
  icon: "🔟",
  color: "#f59e0b",
  intro:
    "A decimal is just another way to write a fraction whose denominator is 10, 100, 1000… The dot (decimal point) marks where whole numbers stop and the pieces of one begin. Once you see decimals as tenths and hundredths on a grid or a number line, money, lengths and weights all start to make sense.",
  guide: [
    {
      heading: "Tenths, hundredths and the decimal point",
      discovery: {
        problem:
          "A chocolate bar is split into 10 equal strips. You eat 7 of them. You could write this as the fraction 7/10. Is there a way to write it without a fraction line — just using the digits 0–9 and a dot?",
        idea:
          "Yes: 7/10 = 0.7. The first place after the decimal point counts tenths. Splitting each tenth into 10 again gives hundredths, the second place: 7/100 = 0.07.",
      },
      body:
        "A **decimal** extends place value to the *right* of the ones. Reading left to right, each place is ten times smaller than the one before:\n\n- **ones**, then a **decimal point**, then **tenths** (1/10), then **hundredths** (1/100).\n\nSo **3.45** means 3 ones + 4 tenths + 5 hundredths = 3 + 4/10 + 5/100. We read it as *\"three point four five\"* — the digits after the point are read one at a time, not as \"forty-five\".",
      keyPoints: [
        "First place after the point = tenths (1/10).",
        "Second place after the point = hundredths (1/100).",
        "Read the whole-number part normally, then digits after the point one by one.",
        "0.7 = 7/10 and 0.07 = 7/100 — the position changes everything.",
      ],
      diagrams: [
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A ten by ten hundredths grid with forty-five small squares shaded to show 0.45"><rect x="10" y="10" width="200" height="200" fill="none" stroke="#334155" stroke-width="2"/><g fill="#fbbf24">' +
          [0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((c) => '<rect x="' + (10 + c * 20) + '" y="' + (10 + r * 20) + '" width="20" height="20"/>').join("")).join("") +
          [0, 1, 2, 3, 4].map((c) => '<rect x="' + (10 + c * 20) + '" y="' + (10 + 4 * 20) + '" width="20" height="20"/>').join("") +
          '</g><g stroke="#94a3b8" stroke-width="1">' +
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => '<line x1="' + (10 + i * 20) + '" y1="10" x2="' + (10 + i * 20) + '" y2="210"/><line x1="10" y1="' + (10 + i * 20) + '" x2="210" y2="' + (10 + i * 20) + '"/>').join("") +
          '</g><text x="110" y="225" text-anchor="middle" font-size="12" fill="#334155">45 of 100 squares = 0.45 = 45/100</text></svg>',
      ],
      whyItWorks:
        "Whole-number place value already multiplies by 10 as you move left (ones, tens, hundreds). Decimals keep the same rule going the other way: each step right divides by 10. The decimal point is simply the marker between 'whole things' and 'parts of one thing'.",
      strategies: ["Extend a pattern", "Use a place-value table"],
    },
    {
      heading: "Decimals as fractions, and 0.7 = 0.70",
      discovery: {
        problem:
          "Aman says 0.7 is bigger than 0.70 because seven-tenths sounds smaller than seventy-hundredths. Is he right? Shade both on a 100-grid and compare.",
        idea:
          "0.7 = 7/10 = 70/100 = 0.70. Writing an extra 0 on the *right* of the last decimal place does not change the value — it just cuts each piece into smaller equal pieces. So 0.7 and 0.70 are exactly equal.",
      },
      body:
        "To turn a decimal into a fraction, write the digits after the point over 10, 100, 1000… (one zero per decimal place), then simplify:\n\n- 0.6 = 6/10 = **3/5**\n- 0.25 = 25/100 = **1/4**\n- 2.5 = 2 + 5/10 = **2½**\n\nTo go the other way, rewrite the fraction with denominator 10 or 100: 3/4 = 75/100 = **0.75**.",
      keyPoints: [
        "One decimal place → over 10; two places → over 100.",
        "Adding zeros on the right of a decimal does not change its value (0.5 = 0.50).",
        "0.25 = 1/4, 0.5 = 1/2, 0.75 = 3/4 are worth memorising.",
        "To write 3/4 as a decimal, make the denominator 100: 75/100 = 0.75.",
      ],
      whyItWorks:
        "0.7 means 7 tenths. Cut every tenth into 10 equal hundredths and the same shaded amount is now 70 hundredths. The amount is identical, so 0.7 = 0.70. The trailing zero only records that we are also counting hundredths — of which there happen to be none beyond the 70.",
      strategies: ["Rewrite over 10 or 100", "Simplify the fraction"],
      thinkDeeper:
        "1/3 = 0.3333… never stops. Why can a denominator of 3 never be turned into a clean 10 or 100, while 4 and 5 can?",
    },
    {
      heading: "Comparing and ordering decimals",
      discovery: {
        problem:
          "Two runners' times are 0.5 s and 0.45 s. A friend says 0.45 is bigger 'because 45 is bigger than 5'. Who actually ran the longer time?",
        idea:
          "Compare place by place from the LEFT, or give both the same number of decimal places first: 0.5 = 0.50. Now 0.50 vs 0.45 → 0.50 is bigger. So 0.5 > 0.45. The number of digits does not decide size.",
      },
      body:
        "To compare decimals:\n\n- First compare the **whole-number parts**.\n- If they tie, compare **tenths**, then **hundredths**, moving rightwards.\n- It often helps to give every number the **same number of decimal places** by adding trailing zeros (this never changes the value).\n\nExample: order 0.3, 0.29, 0.305 → write as 0.300, 0.290, 0.305 → 0.290 < 0.300 < 0.305.",
      keyPoints: [
        "Compare from the left: ones, then tenths, then hundredths.",
        "More digits does NOT mean a bigger number (0.5 > 0.45).",
        "Line up the decimal points; pad with trailing zeros to compare fairly.",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A number line from 0 to 1 marking 0.45 and 0.5 to show 0.5 is to the right and larger"><line x1="20" y1="55" x2="340" y2="55" stroke="#334155" stroke-width="2"/><g stroke="#334155" stroke-width="1">' +
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => '<line x1="' + (20 + i * 32) + '" y1="49" x2="' + (20 + i * 32) + '" y2="61"/>').join("") +
          '</g><text x="20" y="78" text-anchor="middle" font-size="11" fill="#334155">0</text><text x="340" y="78" text-anchor="middle" font-size="11" fill="#334155">1</text><circle cx="' + (20 + 4.5 * 32) + '" cy="55" r="4" fill="#ef4444"/><text x="' + (20 + 4.5 * 32) + '" y="40" text-anchor="middle" font-size="11" fill="#ef4444">0.45</text><circle cx="' + (20 + 5 * 32) + '" cy="55" r="4" fill="#2563eb"/><text x="' + (20 + 5 * 32) + '" y="25" text-anchor="middle" font-size="11" fill="#2563eb">0.5</text></svg>',
      ],
      whyItWorks:
        "Place value is strictly decreasing: a single tenth (0.1) is worth more than any number of hundredths up to 0.09. So the leftmost place where two decimals differ decides which is bigger — exactly like comparing whole numbers digit by digit.",
      strategies: ["Pad with trailing zeros", "Compare place by place"],
    },
    {
      heading: "Adding and subtracting decimals",
      discovery: {
        problem:
          "Reena buys a pen for ₹12.50 and a notebook for ₹8.75. She adds 1250 + 875 'because the dots are annoying'. Why does lining the decimal points up matter, and what is the real total?",
        idea:
          "You can only add digits that mean the same thing — tenths to tenths, hundredths to hundredths. Lining up the decimal points lines up the place values. ₹12.50 + ₹8.75 = ₹21.25.",
      },
      body:
        "To add or subtract decimals:\n\n- Write the numbers so the **decimal points are vertically aligned**.\n- Fill empty places with **trailing zeros** so both have the same number of decimal places.\n- Add or subtract as usual, then bring the decimal point **straight down**.\n\nExample: 4.6 + 0.85 → write 4.60 + 0.85 = **5.45**.",
      keyPoints: [
        "Line up the decimal points, not the last digits.",
        "Pad with zeros so both numbers have equal decimal places.",
        "The point in the answer sits directly below the points above.",
      ],
      whyItWorks:
        "Aligning the points makes tenths sit above tenths and hundredths above hundredths. Then ordinary column addition — with carrying between adjacent places — works because each place is still ten times the one to its right, just as for whole numbers.",
      strategies: ["Line up place values", "Pad with zeros"],
      thinkDeeper:
        "Without a calculator, what is 1 − 0.001? Why is the answer 0.999 and not 0.99 or 0.9?",
    },
    {
      heading: "Decimals in money and measurement",
      discovery: {
        problem:
          "A ribbon is 1 m 45 cm long. Your scissors mark lengths only in metres with decimals. How do you write 1 m 45 cm as a decimal number of metres?",
        idea:
          "100 cm = 1 m, so 1 cm = 0.01 m. Then 45 cm = 0.45 m and the ribbon is 1.45 m. The same idea turns 100 paise = ₹1 into ₹3 and 50 paise = ₹3.50.",
      },
      body:
        "Decimals are how we mix big and small units in one number:\n\n- **Money:** 100 paise = ₹1, so 1 paisa = ₹0.01. ₹7 and 5 paise = ₹7.05.\n- **Length:** 100 cm = 1 m, so 1 cm = 0.01 m. Also 1000 m = 1 km, so 1 m = 0.001 km.\n- **Weight:** 1000 g = 1 kg, so 1 g = 0.001 kg. So 2 kg 350 g = 2.350 kg = 2.35 kg.\n\nThe trick is always the same: count how many small units make one big unit, then place the digits accordingly.",
      keyPoints: [
        "100 paise = ₹1; so paise go in the hundredths place of rupees.",
        "100 cm = 1 m (cm → hundredths of a metre).",
        "1000 m = 1 km and 1000 g = 1 kg (thousandths).",
        "Always convert to the same unit before adding or subtracting.",
      ],
      whyItWorks:
        "Our units are built in tens: 10 mm in a cm, 100 cm in a m, 1000 g in a kg. Because the decimal system is also built in tens, each unit conversion lands neatly on a tenths/hundredths/thousandths place — no awkward fractions needed.",
      strategies: ["Convert to a common unit", "Use the place-value of each unit"],
    },
  ],
  learn: {
    flashcards: [
      { front: "What does the first place after the decimal point mean?", back: "Tenths (1/10)." },
      { front: "What does the second place after the decimal point mean?", back: "Hundredths (1/100)." },
      { front: "Is 0.7 equal to 0.70?", back: "Yes. Trailing zeros after the last decimal place do not change the value." },
      { front: "Write 0.25 as a fraction in simplest form.", back: "25/100 = 1/4." },
      { front: "How many paise are in ₹1?", back: "100 paise (so 50 paise = ₹0.50)." },
      { front: "Write 2 kg 350 g in kilograms.", back: "2.350 kg = 2.35 kg (since 1000 g = 1 kg)." },
      { front: "How do you add decimals?", back: "Line up the decimal points, pad with zeros, add column by column, bring the point straight down." },
    ],
    formulae: [
      { name: "Place value", rule: "0.abc = a/10 + b/100 + c/1000" },
      { name: "Decimal → fraction", rule: "n decimal places → write digits over 10ⁿ, then simplify" },
      { name: "Trailing zeros", rule: "0.5 = 0.50 = 0.500 (value unchanged)" },
      { name: "Money", rule: "100 paise = ₹1, so paise are hundredths of a rupee" },
      { name: "Length", rule: "100 cm = 1 m; 1000 m = 1 km" },
      { name: "Weight", rule: "1000 g = 1 kg" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "dec-mcq-q01",
        question: "What does the digit 4 represent in the number 3.45?",
        options: ["4 ones", "4 tenths", "4 hundredths", "4 tens"],
        answerIndex: 1,
        explanation: "The first place after the decimal point is the tenths place, so 4 means 4 tenths (4/10).",
        guideRef: "Tenths, hundredths and the decimal point",
        difficulty: "warmup",
        strategy: "Use a place-value table",
      },
      {
        id: "dec-mcq-q02",
        question: "How is the fraction 7/10 written as a decimal?",
        options: ["0.07", "0.7", "7.0", "0.70 only"],
        answerIndex: 1,
        explanation: "Seven tenths sits in the first decimal place: 7/10 = 0.7.",
        guideRef: "Tenths, hundredths and the decimal point",
        difficulty: "warmup",
      },
      {
        id: "dec-mcq-q03",
        question: "Which of these is equal to 0.5?",
        options: ["0.05", "5.0", "0.50", "0.005"],
        answerIndex: 2,
        explanation: "Adding a trailing zero does not change the value: 0.5 = 0.50.",
        guideRef: "Decimals as fractions, and 0.7 = 0.70",
        difficulty: "warmup",
      },
      {
        id: "dec-mcq-q04",
        question: "How do you read the number 6.08?",
        options: ["six point eight", "six point zero eight", "six point eighty", "sixty point eight"],
        answerIndex: 1,
        explanation: "After the point, digits are read one at a time: 'six point zero eight'.",
        guideRef: "Tenths, hundredths and the decimal point",
        difficulty: "warmup",
      },
      {
        id: "dec-mcq-q05",
        question: "50 paise is the same as how many rupees?",
        options: ["₹50", "₹5.00", "₹0.50", "₹0.05"],
        answerIndex: 2,
        explanation: "100 paise = ₹1, so 50 paise = 50/100 = ₹0.50.",
        guideRef: "Decimals in money and measurement",
        difficulty: "warmup",
      },
      {
        id: "dec-mcq-q06",
        question: "Which fraction is the same as 0.25?",
        options: ["1/2", "1/4", "1/5", "2/5"],
        answerIndex: 1,
        explanation: "0.25 = 25/100, and 25/100 simplifies to 1/4.",
        guideRef: "Decimals as fractions, and 0.7 = 0.70",
        difficulty: "warmup",
      },
      {
        id: "dec-mcq-q07",
        question: "Which is greater: 0.5 or 0.45?",
        options: ["0.45", "0.5", "They are equal", "Cannot tell"],
        answerIndex: 1,
        explanation: "Pad to the same places: 0.5 = 0.50. Then 0.50 > 0.45, so 0.5 is greater.",
        guideRef: "Comparing and ordering decimals",
        difficulty: "core",
        hints: [
          "Give both the same number of decimal places.",
          "Write 0.5 as 0.50.",
          "Compare 0.50 with 0.45 place by place.",
        ],
        strategy: "Pad with trailing zeros",
      },
      {
        id: "dec-mcq-q08",
        question: "Write 3/4 as a decimal.",
        options: ["0.34", "0.43", "0.75", "0.7"],
        answerIndex: 2,
        explanation: "Make the denominator 100: 3/4 = 75/100 = 0.75.",
        guideRef: "Decimals as fractions, and 0.7 = 0.70",
        difficulty: "core",
        hints: ["Can you turn the denominator 4 into 100?", "Multiply top and bottom by 25.", "75/100 = ?"],
        strategy: "Rewrite over 10 or 100",
      },
      {
        id: "dec-mcq-q09",
        question: "What is 4.6 + 0.85?",
        options: ["5.45", "1.31", "4.91", "5.21"],
        answerIndex: 0,
        explanation: "Pad to 4.60, then 4.60 + 0.85 = 5.45 (line up the decimal points).",
        guideRef: "Adding and subtracting decimals",
        difficulty: "core",
        hints: ["Write 4.6 as 4.60.", "Line up the decimal points.", "Add hundredths, then tenths, then ones."],
        strategy: "Line up place values",
      },
      {
        id: "dec-mcq-q10",
        question: "What is 5.0 − 2.35?",
        options: ["2.35", "2.65", "3.35", "2.75"],
        answerIndex: 1,
        explanation: "Write 5.00 − 2.35 and subtract: 5.00 − 2.35 = 2.65.",
        guideRef: "Adding and subtracting decimals",
        difficulty: "core",
        hints: ["Write 5.0 as 5.00.", "Line up the points.", "Borrow as you would with whole numbers."],
        strategy: "Pad with zeros",
      },
      {
        id: "dec-mcq-q11",
        question: "Write 1 m 45 cm as a decimal number of metres.",
        options: ["1.45 m", "14.5 m", "1.045 m", "1.0045 m"],
        answerIndex: 0,
        explanation: "100 cm = 1 m, so 45 cm = 0.45 m, giving 1 m 45 cm = 1.45 m.",
        guideRef: "Decimals in money and measurement",
        difficulty: "core",
        hints: ["How many cm make 1 m?", "45 cm = 45/100 m.", "Add it to 1 m."],
        strategy: "Convert to a common unit",
      },
      {
        id: "dec-mcq-q12",
        question: "Order from smallest to largest: 0.3, 0.29, 0.305.",
        options: ["0.29, 0.3, 0.305", "0.3, 0.29, 0.305", "0.305, 0.3, 0.29", "0.29, 0.305, 0.3"],
        answerIndex: 0,
        explanation: "Pad to three places: 0.290, 0.300, 0.305. So the order is 0.29 < 0.3 < 0.305.",
        guideRef: "Comparing and ordering decimals",
        difficulty: "core",
        hints: ["Give them all the same number of decimal places.", "Use three places each.", "Compare 0.290, 0.300, 0.305."],
        strategy: "Pad with trailing zeros",
      },
      {
        id: "dec-mcq-q13",
        question: "Write 2 kg 350 g in kilograms.",
        options: ["2.35 kg", "23.5 kg", "2.035 kg", "2.0350 kg"],
        answerIndex: 0,
        explanation: "1000 g = 1 kg, so 350 g = 0.350 kg, giving 2.350 kg = 2.35 kg.",
        guideRef: "Decimals in money and measurement",
        difficulty: "core",
        hints: ["How many grams make 1 kg?", "350 g = 350/1000 kg.", "0.350 = 0.35."],
        strategy: "Use the place-value of each unit",
      },
      {
        id: "dec-mcq-q14",
        question: "What is the value of the digit 9 in 0.09?",
        options: ["9 tenths", "9 hundredths", "9 ones", "9/10"],
        answerIndex: 1,
        explanation: "The second place after the point is hundredths, so 9 means 9 hundredths (9/100).",
        guideRef: "Tenths, hundredths and the decimal point",
        difficulty: "core",
        hints: ["Count the places after the point.", "First place = tenths, second = ?", "0.09 = 9/100."],
        strategy: "Use a place-value table",
      },
      {
        id: "dec-mcq-q15",
        question: "Which decimal lies exactly halfway between 0.2 and 0.3 on a number line?",
        options: ["0.23", "0.25", "0.5", "0.205"],
        answerIndex: 1,
        explanation: "Halfway between 0.20 and 0.30 is 0.25 (the average: (0.2 + 0.3) ÷ 2 = 0.25).",
        guideRef: "Comparing and ordering decimals",
        difficulty: "core",
        hints: ["What is halfway between 20 and 30 hundredths?", "Average the two numbers.", "(0.2 + 0.3) ÷ 2."],
        strategy: "Compare place by place",
      },
      {
        id: "dec-mcq-q16",
        question: "A shopkeeper gives ₹100 − ₹63.75 as change. How much is the change?",
        options: ["₹36.25", "₹37.25", "₹36.75", "₹47.25"],
        answerIndex: 0,
        explanation: "₹100.00 − ₹63.75 = ₹36.25.",
        guideRef: "Adding and subtracting decimals",
        difficulty: "core",
        hints: ["Write ₹100 as ₹100.00.", "Line up the decimal points.", "Subtract the paise first."],
        strategy: "Line up place values",
      },
      {
        id: "dec-mcq-q17",
        question:
          "Using each of the digits 4, 0 and 7 once, in the number _._ _ (one digit before, two after the point), what is the LARGEST value you can make?",
        options: ["7.40", "4.70", "0.74", "7.04"],
        answerIndex: 0,
        explanation: "To make it largest, put the biggest digit in the highest place: 7 ones, then 4 tenths, then 0 hundredths = 7.40.",
        guideRef: "Comparing and ordering decimals",
        difficulty: "challenge",
        hints: [
          "The ones place is worth the most — which digit should go there?",
          "Then the tenths place should hold the next biggest digit.",
          "Largest first: 7, then 4, then 0.",
        ],
        strategy: "Use a place-value table",
      },
      {
        id: "dec-mcq-q18",
        question: "Which of these is NOT equal to 1/2?",
        options: ["0.5", "0.50", "0.500", "0.05"],
        answerIndex: 3,
        explanation: "0.5 = 0.50 = 0.500 = 1/2, but 0.05 = 5/100 = 1/20, which is not a half.",
        guideRef: "Decimals as fractions, and 0.7 = 0.70",
        difficulty: "challenge",
        hints: [
          "Trailing zeros do not change a value — but a zero in the tenths place does.",
          "Which option puts the 5 in the hundredths place?",
          "0.05 = 5/100, not 1/2.",
        ],
        strategy: "Compare place by place",
      },
      {
        id: "dec-mcq-q19",
        question: "What is 1 − 0.001?",
        options: ["0.999", "0.99", "0.9", "0.001"],
        answerIndex: 0,
        explanation: "Write 1.000 − 0.001 = 0.999 (one is taken from the thousandths place by borrowing).",
        guideRef: "Adding and subtracting decimals",
        difficulty: "challenge",
        hints: ["Write 1 as 1.000.", "Line up to the thousandths place.", "Borrow across the zeros."],
        strategy: "Pad with zeros",
      },
      {
        id: "dec-mcq-q20",
        question:
          "Three lengths are 0.6 m, 60 cm and 6/10 m. How many of these are equal to each other?",
        options: ["None are equal", "Two are equal", "All three are equal", "Only 0.6 m and 60 cm"],
        answerIndex: 2,
        explanation: "60 cm = 0.60 m = 0.6 m, and 6/10 m = 0.6 m. All three are the same length.",
        guideRef: "Decimals in money and measurement",
        difficulty: "challenge",
        hints: [
          "Convert everything to metres in decimal form.",
          "60 cm = 60/100 m = 0.60 m.",
          "6/10 m = 0.6 m. Compare all three.",
        ],
        strategy: "Convert to a common unit",
      },
    ],
    qa: [
      {
        id: "dec-qa-q01",
        question: "Using a 100-square grid in words, explain why 0.7 and 0.70 are equal.",
        modelAnswer:
          "Shade 7 of the 10 columns of a 100-grid — that is 0.7, seven tenths. Each column is made of 10 small squares, so 7 columns is 70 small squares, which is 70/100 = 0.70. The same shaded area is described two ways, so 0.7 = 0.70. The trailing zero only says there are no extra hundredths.",
        markScheme: [
          "0.7 = 7 tenths = 70/100 | 7 columns = 70 squares",
          "same shaded area / amount unchanged",
          "0.7 = 0.70 | trailing zero adds no value",
        ],
        commonError: "Believing 0.70 is bigger because it has more digits / shows hundredths.",
        guideRef: "Decimals as fractions, and 0.7 = 0.70",
        difficulty: "core",
        strategy: "Rewrite over 10 or 100",
        hints: ["Shade seven tenths on the grid.", "How many small squares is that out of 100?", "Compare the shaded amounts."],
        solutions: [
          {
            label: "Grid picture",
            steps: [
              "0.7 = shade 7 of 10 columns.",
              "Each column = 10 small squares → 70 squares shaded.",
              "70/100 = 0.70, same shaded area, so 0.7 = 0.70.",
            ],
          },
          {
            label: "By fractions",
            steps: ["0.7 = 7/10.", "7/10 = 70/100.", "70/100 = 0.70, so 0.7 = 0.70."],
          },
        ],
      },
      {
        id: "dec-qa-q02",
        question: "Write 0.6 as a fraction in its simplest form. Show your working.",
        modelAnswer:
          "0.6 has one decimal place, so 0.6 = 6/10. The HCF of 6 and 10 is 2, so 6/10 = 3/5. The simplest form is 3/5.",
        markScheme: ["0.6 = 6/10", "divide by HCF 2", "3/5"],
        commonError: "Writing 0.6 = 6/100 (using the wrong denominator).",
        guideRef: "Decimals as fractions, and 0.7 = 0.70",
        difficulty: "core",
        numericAnswer: 0.6,
        tolerance: 0.001,
        hints: ["One decimal place → over 10.", "0.6 = 6/10.", "Divide top and bottom by 2."],
        solutions: [
          {
            label: "Over 10 then simplify",
            steps: ["0.6 = 6/10.", "HCF(6,10) = 2.", "6/10 = 3/5."],
          },
        ],
      },
      {
        id: "dec-qa-q03",
        question: "Work out 12.5 + 8.75 + 0.6. Show how you line up the decimal points.",
        modelAnswer:
          "Pad to two places: 12.50 + 8.75 + 0.60. Lining up the points and adding: 12.50 + 8.75 = 21.25, then 21.25 + 0.60 = 21.85. The total is 21.85.",
        markScheme: [
          "pad to equal decimal places | 12.50, 8.75, 0.60",
          "line up the decimal points",
          "21.85",
        ],
        commonError: "Lining up the last digits instead of the decimal points, e.g. treating 0.6 as 0.06.",
        guideRef: "Adding and subtracting decimals",
        difficulty: "core",
        numericAnswer: 21.85,
        tolerance: 0.001,
        hints: ["Give every number two decimal places.", "Stack so the points are in a column.", "Add in stages."],
        solutions: [
          {
            label: "Column addition",
            steps: ["Write 12.50, 8.75, 0.60.", "12.50 + 8.75 = 21.25.", "21.25 + 0.60 = 21.85."],
          },
        ],
      },
      {
        id: "dec-qa-q04",
        question: "Reena buys a pen for ₹12.50 and a notebook for ₹8.75 and pays with a ₹50 note. How much change does she get?",
        modelAnswer:
          "Total spent = ₹12.50 + ₹8.75 = ₹21.25. Change = ₹50.00 − ₹21.25 = ₹28.75. Reena gets ₹28.75 change.",
        markScheme: [
          "total = ₹21.25",
          "₹50.00 − ₹21.25",
          "₹28.75",
        ],
        commonError: "Subtracting each item from ₹50 separately, or forgetting to add the two prices first.",
        guideRef: "Decimals in money and measurement",
        difficulty: "core",
        strategy: "Work backwards",
        numericAnswer: 28.75,
        tolerance: 0.001,
        hints: ["First add the two prices.", "Then subtract from ₹50.00.", "Line up the decimal points."],
        solutions: [
          {
            label: "Add then subtract",
            steps: ["₹12.50 + ₹8.75 = ₹21.25.", "₹50.00 − ₹21.25 = ₹28.75."],
          },
        ],
      },
      {
        id: "dec-qa-q05",
        question: "Order these from smallest to largest: 0.4, 0.39, 0.405, 0.4001. Explain your method.",
        modelAnswer:
          "Pad all to four decimal places: 0.4000, 0.3900, 0.4050, 0.4001. Comparing place by place from the left: 0.3900 < 0.4000 < 0.4001 < 0.4050. So the order is 0.39, 0.4, 0.4001, 0.405.",
        markScheme: [
          "pad to equal places | same number of decimals",
          "compare from the left, place by place",
          "0.39, 0.4, 0.4001, 0.405",
        ],
        commonError: "Ordering by how many digits each number has (thinking 0.4001 is largest because it is 'longest').",
        guideRef: "Comparing and ordering decimals",
        difficulty: "core",
        strategy: "Pad with trailing zeros",
        hints: ["Give every number the same number of decimal places.", "Use four places.", "Compare digit by digit from the left."],
      },
      {
        id: "dec-qa-q06",
        question: "Convert 2 km 350 m into kilometres as a decimal, and into metres. Show both.",
        modelAnswer:
          "1000 m = 1 km, so 350 m = 350/1000 km = 0.350 km = 0.35 km. Therefore 2 km 350 m = 2.35 km. In metres, 2 km = 2000 m, so the total is 2000 + 350 = 2350 m.",
        markScheme: [
          "1000 m = 1 km | 350 m = 0.35 km",
          "2.35 km",
          "2350 m",
        ],
        commonError: "Writing 350 m as 0.35 km but then losing the 2, or writing 2 km 350 m = 2.350 m.",
        guideRef: "Decimals in money and measurement",
        difficulty: "core",
        numericAnswer: 2.35,
        tolerance: 0.001,
        hints: ["How many metres make 1 km?", "350 m = 350/1000 km.", "Add to 2 km; then also give the answer in metres."],
        solutions: [
          {
            label: "Unit conversion",
            steps: ["350 m = 350/1000 km = 0.35 km.", "2 km + 0.35 km = 2.35 km.", "2 km = 2000 m → 2000 + 350 = 2350 m."],
          },
        ],
      },
      {
        id: "dec-qa-q07",
        question:
          "Challenge: A ribbon is 2.5 m long. You cut three pieces of 0.45 m each. How much ribbon is left? Could you instead cut five such pieces? Explain.",
        modelAnswer:
          "Three pieces use 3 × 0.45 = 1.35 m. Left = 2.50 − 1.35 = 1.15 m. Five pieces would need 5 × 0.45 = 2.25 m, which is less than 2.5 m, so yes — five pieces fit, leaving 2.50 − 2.25 = 0.25 m.",
        markScheme: [
          "3 × 0.45 = 1.35 | left = 1.15 m",
          "5 × 0.45 = 2.25 m",
          "2.25 < 2.5 so five pieces fit (0.25 m left)",
        ],
        commonError: "Comparing 2.25 with 2.5 wrongly (thinking 2.25 > 2.5 because '225 > 25').",
        guideRef: "Adding and subtracting decimals",
        difficulty: "challenge",
        strategy: "Try small cases",
        numericAnswer: 1.15,
        tolerance: 0.001,
        hints: [
          "Find the length of three pieces first.",
          "Subtract from 2.50 m.",
          "For five pieces, compare 5 × 0.45 with 2.5 m (pad to 2.50 vs 2.25).",
        ],
        solutions: [
          {
            label: "Repeated addition",
            steps: ["3 × 0.45 = 1.35 m.", "2.50 − 1.35 = 1.15 m left.", "5 × 0.45 = 2.25 m < 2.50 m → fits, 0.25 m left."],
          },
        ],
      },
      {
        id: "dec-qa-q08",
        question:
          "Challenge: I am a decimal with two decimal places. My digits are 2, 5 and 8 used once each (one before the point, two after). I am bigger than 5 but smaller than 8. What numbers could I be? List them all.",
        modelAnswer:
          "The whole-number part must be between 5 and 8, so it is 5, ... but bigger than 5 means the ones digit can be 5 (with decimals making it > 5) or could it be 8? 8 is not smaller than 8, so the ones digit must be 5. Then the two decimals are 2 and 8 in some order: 5.28 and 5.82. Both are between 5 and 8. So the number is 5.28 or 5.82.",
        markScheme: [
          "ones digit must be 5 (between 5 and 8)",
          "remaining digits 2 and 8 after the point",
          "5.28 or 5.82",
        ],
        commonError: "Allowing 8 as the ones digit (8 is not smaller than 8), or only giving one of the two answers.",
        guideRef: "Comparing and ordering decimals",
        difficulty: "challenge",
        strategy: "Try small cases",
        hints: [
          "Which digit can go before the point so the value is between 5 and 8?",
          "8.xx would be at least 8 — too big. So the ones digit is 5.",
          "Arrange the leftover digits 2 and 8 after the point in both orders.",
        ],
        solutions: [
          {
            label: "Reason about each place",
            steps: [
              "Ones digit between 5 and 8 → must be 5 (8 gives 8.xx ≥ 8).",
              "Leftover digits 2 and 8 go after the point.",
              "Two arrangements: 5.28 and 5.82.",
            ],
          },
        ],
      },
      {
        id: "dec-qa-q09",
        question:
          "Challenge: Three bags of rice weigh 1.25 kg, 0.9 kg and 750 g. Find the total weight in kilograms. If they are shared equally among 2 people, how much does each get?",
        modelAnswer:
          "Convert 750 g = 0.75 kg. Total = 1.25 + 0.90 + 0.75 = 2.90 kg. Shared between 2: 2.90 ÷ 2 = 1.45 kg each.",
        markScheme: [
          "750 g = 0.75 kg",
          "total = 2.90 kg",
          "2.90 ÷ 2 = 1.45 kg each",
        ],
        commonError: "Adding 750 as if it were 750 kg, or forgetting to convert grams to kilograms before adding.",
        guideRef: "Decimals in money and measurement",
        difficulty: "challenge",
        strategy: "Convert to a common unit",
        numericAnswer: 1.45,
        tolerance: 0.001,
        hints: [
          "Put every weight in the same unit (kg) first.",
          "750 g = 0.75 kg.",
          "Add all three, then halve the total.",
        ],
        solutions: [
          {
            label: "Convert, add, share",
            steps: ["750 g = 0.75 kg.", "1.25 + 0.90 + 0.75 = 2.90 kg.", "2.90 ÷ 2 = 1.45 kg each."],
          },
        ],
      },
      {
        id: "dec-qa-q10",
        question: "Explain why we line up the decimal points (and not the last digits) when adding decimals.",
        modelAnswer:
          "Lining up the decimal points lines up matching place values — tenths above tenths, hundredths above hundredths. You can only add quantities that mean the same thing. If you lined up the last digits instead, you might add hundredths to tenths (for example 0.6 and 0.06), giving the wrong total. Aligning the points keeps every place in its correct column.",
        markScheme: [
          "lining up points aligns place values",
          "only add like place values (tenths with tenths)",
          "lining up last digits mixes places / gives wrong answer",
        ],
        commonError: "Right-aligning the digits like whole numbers, which mismatches the place values.",
        guideRef: "Adding and subtracting decimals",
        difficulty: "core",
        strategy: "Line up place values",
        hints: ["What does each column represent?", "Can you add tenths to hundredths?", "Think about 0.6 + 0.06 done wrongly."],
      },
    ],
  },
  questionBank: {
    mcqPapers: [],
    qaPapers: [],
  },
};

// Group the canonical quiz questions into sittable papers (same objects, no new ids).
decimals.questionBank.mcqPapers = [
  { id: "dec-mcq-paper-1", title: "Decimals — MCQ Set A", questions: decimals.quiz.mcq.slice(0, 10) },
  { id: "dec-mcq-paper-2", title: "Decimals — MCQ Set B", questions: decimals.quiz.mcq.slice(10) },
];
decimals.questionBank.qaPapers = [
  { id: "dec-qa-paper-1", title: "Decimals — Written Practice A", questions: decimals.quiz.qa.slice(0, 5) },
  { id: "dec-qa-paper-2", title: "Decimals — Written Practice B", questions: decimals.quiz.qa.slice(5) },
];

export default decimals;
