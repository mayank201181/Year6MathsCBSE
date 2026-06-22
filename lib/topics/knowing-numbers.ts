import type { Topic } from "../types";

const knowingNumbers: Topic = {
  id: "knowing-numbers",
  title: "Knowing Our Numbers",
  subject: "Maths",
  chapter: "NCERT Ch. 1 (Knowing Our Numbers)",
  icon: "🔢",
  color: "#0ea5e9",
  intro:
    "Numbers don't stop at a hundred. Shopkeepers count rupees in thousands, cities count people in lakhs, and countries count them in crores. Once you understand place value — and the clever way we group digits with commas — you can read, write, compare and estimate even the biggest numbers with confidence.",
  guide: [
    {
      heading: "Place value and reading big numbers",
      discovery: {
        problem:
          "In the number 5 7 0 3, the digit 7 and the digit 3 are both there. Are they worth the same? If not, how much is each one really worth?",
        idea:
          "The same digit means different amounts depending on its *place*. In 5703 the 7 sits in the hundreds place, so it is worth 700, while the 3 sits in the ones place and is worth just 3. That is the whole idea of place value: position decides value.",
      },
      body:
        "Every digit in a number has a **place value** that depends on where it sits. Moving one place to the left multiplies the value by **10**.\n\nIn **5703**:\n- 5 → thousands → 5000\n- 7 → hundreds → 700\n- 0 → tens → 0\n- 3 → ones → 3\n\nSo 5703 = 5000 + 700 + 0 + 3. This is called the **expanded form**. The number you *read* (five thousand seven hundred three) just names those place values out loud.",
      keyPoints: [
        "Place value = (the digit) × (the value of its place).",
        "Each place to the left is worth 10 times the one to its right.",
        "Expanded form writes a number as the sum of its place values.",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Place value chart showing 5703 split into thousands hundreds tens and ones"><rect x="10" y="10" width="340" height="100" fill="none" stroke="#334155" stroke-width="2"/><line x1="95" y1="10" x2="95" y2="110" stroke="#334155" stroke-width="2"/><line x1="180" y1="10" x2="180" y2="110" stroke="#334155" stroke-width="2"/><line x1="265" y1="10" x2="265" y2="110" stroke="#334155" stroke-width="2"/><line x1="10" y1="45" x2="350" y2="45" stroke="#334155" stroke-width="2"/><text x="52" y="32" text-anchor="middle" font-size="12" fill="#334155">Thousands</text><text x="137" y="32" text-anchor="middle" font-size="12" fill="#334155">Hundreds</text><text x="222" y="32" text-anchor="middle" font-size="12" fill="#334155">Tens</text><text x="307" y="32" text-anchor="middle" font-size="12" fill="#334155">Ones</text><text x="52" y="85" text-anchor="middle" font-size="26" fill="#0ea5e9">5</text><text x="137" y="85" text-anchor="middle" font-size="26" fill="#0ea5e9">7</text><text x="222" y="85" text-anchor="middle" font-size="26" fill="#0ea5e9">0</text><text x="307" y="85" text-anchor="middle" font-size="26" fill="#0ea5e9">3</text></svg>',
      ],
      whyItWorks:
        "Our number system is base ten: there are only ten digits (0–9). Once a place fills up to ten, it 'carries' into the next place left, which is why each step left is worth ten times more. Place value is just bundling in tens, hundreds, thousands and so on.",
      strategies: ["Use a place-value chart", "Break into parts"],
    },
    {
      heading: "The Indian and International systems",
      discovery: {
        problem:
          "A newspaper writes a number as 23,45,678 and a foreign website writes the same number as 2,345,678. Same digits, different commas. Do they mean the same amount? Where exactly does each comma go?",
        idea:
          "Both write the number two million three hundred forty-five thousand six hundred seventy-eight. They group digits differently. The **Indian system** groups as 3 then 2-2-2 (ones, thousands, lakhs, crores). The **International system** groups in 3s (thousands, millions, billions).",
      },
      body:
        "Commas split a long number into easy-to-read groups, but the two systems group differently.\n\n**Indian system** (used in India): from the right, place the first comma after **3** digits, then after every **2** digits.\n- Places: ones, tens, hundreds, **thousands**, ten-thousands, **lakhs**, ten-lakhs, **crores**.\n- 1 lakh = 1,00,000 (a 1 with five zeros). 1 crore = 1,00,00,000.\n- Example: 23,45,678 reads *twenty-three lakh forty-five thousand six hundred seventy-eight*.\n\n**International system**: from the right, place a comma after every **3** digits.\n- Places: ones, **thousands**, **millions**, **billions**.\n- 1 million = 1,000,000. The same number is 2,345,678 = *two million three hundred forty-five thousand six hundred seventy-eight*.\n\nHandy bridge: **10 lakh = 1 million** and **10 million = 1 crore**.",
      keyPoints: [
        "Indian commas: 3 digits, then 2, then 2 (ones–thousands–lakhs–crores).",
        "International commas: groups of 3 (ones–thousands–millions–billions).",
        "1 lakh = 100,000; 1 crore = 10,000,000; 10 lakh = 1 million.",
      ],
      diagrams: [
        '<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Indian grouping 23,45,678 and International grouping 2,345,678 for the same number"><text x="10" y="30" font-size="13" fill="#334155">Indian system</text><text x="10" y="62" font-size="22" fill="#0ea5e9">23,45,678</text><text x="10" y="84" font-size="11" fill="#64748b">lakhs , thousands , ones (3-2-2)</text><line x1="10" y1="98" x2="370" y2="98" stroke="#cbd5e1" stroke-width="1"/><text x="10" y="120" font-size="13" fill="#334155">International:</text><text x="135" y="120" font-size="22" fill="#16a34a">2,345,678</text><text x="135" y="136" font-size="11" fill="#64748b">groups of 3</text></svg>',
      ],
      whyItWorks:
        "Commas don't change the value — every digit keeps its place value. They only chunk the digits so your eye can find lakhs or millions quickly. India counts in lakhs and crores in everyday life, so its grouping matches the words people actually say.",
      strategies: ["Group from the right", "Match commas to place names"],
      thinkDeeper:
        "If you had 1 crore rupees and spent 1 lakh every day, how many days would the money last? (Hint: how many lakhs make a crore?)",
    },
    {
      heading: "Comparing, ordering and making numbers from digits",
      discovery: {
        problem:
          "Using each of the digits 7, 0, 4, 9 exactly once, what is the greatest 4-digit number you can build? What is the smallest? Watch out for the zero!",
        idea:
          "To compare or build numbers, the leftmost (highest) place matters most. For the greatest number put the biggest digits on the left (9740); for the smallest put the smallest *non-zero* digit first so you don't waste the lead place (4079).",
      },
      body:
        "To **compare** two whole numbers: the one with more digits is bigger. If they have the same number of digits, compare place by place from the **left** — the first place where they differ decides it.\n\nTo **make the greatest number** from given digits, sort them largest-first. To make the **smallest**, sort them smallest-first — but a leading 0 is not allowed, so swap the 0 with the next smallest digit.\n\nExample with 7, 0, 4, 9: greatest = **9740**, smallest = **4079**.",
      keyPoints: [
        "More digits → bigger number; otherwise compare from the left.",
        "Greatest: arrange digits in descending order.",
        "Smallest: ascending order, but never start with 0.",
      ],
      whyItWorks:
        "A digit in a higher place is worth far more than any combination below it — a single thousand beats nine hundreds. So getting the big digits into the high places is what controls the size of the number.",
      strategies: ["Compare from the left", "Try extremal cases", "Watch the zero"],
    },
    {
      heading: "Estimation, rounding and brackets",
      discovery: {
        problem:
          "At a fair, 312 people are inside and the manager expects about 290 more. Without exact arithmetic, roughly how many people will there be? Why might 'about 600' be more useful than the exact answer?",
        idea:
          "Round each number to a friendly value (312 → 300, 290 → 300) and add: about 600. Estimation gives a quick, good-enough answer and a way to *check* exact work — if your exact answer is far from the estimate, something went wrong.",
      },
      body:
        "**Rounding** replaces a number with a nearby 'friendly' one. To round to the nearest 10/100/1000, look at the digit just to the right of that place: if it is **5 or more, round up**; if it is **4 or less, round down**.\n- 6,784 to the nearest 100 → 6,800 (the tens digit 8 ≥ 5).\n- 6,784 to the nearest 1000 → 7,000.\n\nTo **estimate a sum or product**, round each number first, then compute: 312 + 290 ≈ 300 + 300 = 600; 48 × 21 ≈ 50 × 20 = 1000.\n\n**Brackets** say 'do me first'. They let you write a calculation in one line without ambiguity: (7 + 3) × 2 = 20, but 7 + 3 × 2 = 13. Use brackets to group the step that must happen first.",
      keyPoints: [
        "Round: look at the next digit — 5 or more rounds up, 4 or less rounds down.",
        "Estimate a sum/product by rounding each number first.",
        "Brackets mean 'work this out first'.",
      ],
      whyItWorks:
        "Rounding to a place throws away the small leftovers below that place; the result stays close because those leftovers are tiny compared with the place you kept. Brackets fix the *order* of operations so everyone gets the same answer from the same expression.",
      strategies: ["Round then compute", "Estimate to check", "Group with brackets"],
      thinkDeeper:
        "Is the estimate 50 × 20 = 1000 bigger or smaller than the true 48 × 21? Can you tell *before* multiplying exactly?",
    },
    {
      heading: "Roman numerals",
      discovery: {
        problem:
          "A clock shows the hour 'IX' and a book chapter says 'XIV'. No 9 or 14 in sight — just letters. How do these letters turn into numbers, and why is one a subtraction and one an addition?",
        idea:
          "Roman numerals build numbers from letter-values. When a smaller value comes *before* a larger one you subtract (IX = 10 − 1 = 9); when it comes *after* you add (XIV = 10 + 4 = 14).",
      },
      body:
        "The Roman symbols are: **I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000**.\n\nRules:\n- Read left to right, adding values: XVI = 10 + 5 + 1 = 16.\n- A smaller symbol *before* a larger one is **subtracted**: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.\n- A symbol may repeat at most **three** times (III = 3, but 4 is IV, not IIII).\n- **V, L and D are never repeated** and never used for subtraction.\n\nExample: 2024 = MM (2000) + XX (20) + IV (4) = **MMXXIV**.",
      keyPoints: [
        "I=1, V=5, X=10, L=50, C=100, D=500, M=1000.",
        "Smaller before larger → subtract (IX = 9); smaller after → add (XI = 11).",
        "A symbol repeats at most 3 times; V, L, D never repeat.",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Roman numeral symbols and their values I one V five X ten L fifty C hundred D five hundred M thousand"><rect x="5" y="20" width="350" height="50" fill="none" stroke="#334155" stroke-width="2"/><text x="30" y="42" text-anchor="middle" font-size="16" fill="#0ea5e9">I</text><text x="30" y="62" text-anchor="middle" font-size="12" fill="#334155">1</text><text x="80" y="42" text-anchor="middle" font-size="16" fill="#0ea5e9">V</text><text x="80" y="62" text-anchor="middle" font-size="12" fill="#334155">5</text><text x="130" y="42" text-anchor="middle" font-size="16" fill="#0ea5e9">X</text><text x="130" y="62" text-anchor="middle" font-size="12" fill="#334155">10</text><text x="180" y="42" text-anchor="middle" font-size="16" fill="#0ea5e9">L</text><text x="180" y="62" text-anchor="middle" font-size="12" fill="#334155">50</text><text x="230" y="42" text-anchor="middle" font-size="16" fill="#0ea5e9">C</text><text x="230" y="62" text-anchor="middle" font-size="12" fill="#334155">100</text><text x="280" y="42" text-anchor="middle" font-size="16" fill="#0ea5e9">D</text><text x="280" y="62" text-anchor="middle" font-size="12" fill="#334155">500</text><text x="330" y="42" text-anchor="middle" font-size="16" fill="#0ea5e9">M</text><text x="330" y="62" text-anchor="middle" font-size="12" fill="#334155">1000</text></svg>',
      ],
      whyItWorks:
        "The subtraction trick is just a shorthand to avoid four-in-a-row: instead of writing IIII for 4, you put one I before V to say 'one less than five'. It keeps numerals short and readable.",
      strategies: ["Split into thousands/hundreds/tens/ones", "Spot the subtraction pairs"],
    },
  ],
  learn: {
    flashcards: [
      { front: "How many zeros in one lakh? In one crore?", back: "1 lakh = 1,00,000 (five zeros). 1 crore = 1,00,00,000 (seven zeros)." },
      { front: "Where do commas go in the Indian system?", back: "From the right: after 3 digits, then after every 2 digits (ones, thousands, lakhs, crores)." },
      { front: "Where do commas go in the International system?", back: "From the right: after every 3 digits (thousands, millions, billions)." },
      { front: "How do you round to the nearest 100?", back: "Look at the tens digit: 5 or more rounds up, 4 or less rounds down." },
      { front: "Make the greatest and smallest number from 5, 0, 8, 2.", back: "Greatest 8520; smallest 2058 (can't start with 0)." },
      { front: "What are the Roman symbol values?", back: "I=1, V=5, X=10, L=50, C=100, D=500, M=1000." },
      { front: "Why is 9 written IX, not VIIII?", back: "A smaller symbol before a larger one subtracts: IX = 10 − 1 = 9. No symbol repeats more than 3 times." },
    ],
    formulae: [
      { name: "Place value", rule: "value = digit × (place value of its position)" },
      { name: "Indian–International bridge", rule: "10 lakh = 1 million; 10 million = 1 crore" },
      { name: "Rounding rule", rule: "Next digit 5+ → round up; 4 or less → round down" },
      { name: "Roman subtraction pairs", rule: "IV=4, IX=9, XL=40, XC=90, CD=400, CM=900" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "kn-mcq-q01",
        question: "What is the place value of the digit 6 in 4,627?",
        options: ["6", "60", "600", "6000"],
        answerIndex: 2,
        explanation: "In 4627 the 6 sits in the hundreds place, so its value is 6 × 100 = 600.",
        guideRef: "Place value and reading big numbers",
        difficulty: "warmup",
        strategy: "Use a place-value chart",
      },
      {
        id: "kn-mcq-q02",
        question: "Write 3,000 + 500 + 20 + 8 as a single number.",
        options: ["3528", "3258", "30528", "3582"],
        answerIndex: 0,
        explanation: "3000 + 500 + 20 + 8 = 3528. This is the expanded form put back together.",
        guideRef: "Place value and reading big numbers",
        difficulty: "warmup",
      },
      {
        id: "kn-mcq-q03",
        question: "How many zeros are there in one lakh (1,00,000)?",
        options: ["4", "5", "6", "7"],
        answerIndex: 1,
        explanation: "One lakh is written as 1 followed by five zeros: 1,00,000.",
        guideRef: "The Indian and International systems",
        difficulty: "warmup",
      },
      {
        id: "kn-mcq-q04",
        question: "What does the Roman numeral XV represent?",
        options: ["10", "15", "5", "16"],
        answerIndex: 1,
        explanation: "X = 10 and V = 5, written largest first and added: 10 + 5 = 15.",
        guideRef: "Roman numerals",
        difficulty: "warmup",
      },
      {
        id: "kn-mcq-q05",
        question: "Round 6,784 to the nearest hundred.",
        options: ["6,700", "6,780", "6,800", "7,000"],
        answerIndex: 2,
        explanation: "To round to the nearest 100, look at the tens digit (8). Since 8 ≥ 5, round up: 6,800.",
        guideRef: "Estimation, rounding and brackets",
        difficulty: "warmup",
      },
      {
        id: "kn-mcq-q06",
        question: "Which number is the greatest?",
        options: ["9,876", "10,002", "9,999", "9,890"],
        answerIndex: 1,
        explanation: "10,002 has 5 digits while the others have 4 digits, so it is the greatest. More digits means a bigger whole number.",
        guideRef: "Comparing, ordering and making numbers from digits",
        difficulty: "warmup",
      },
      {
        id: "kn-mcq-q07",
        question: "How is the number 5,23,409 read in the Indian system?",
        options: [
          "Five lakh twenty-three thousand four hundred nine",
          "Fifty-two thousand three hundred forty nine",
          "Five million twenty-three thousand four hundred nine",
          "Five lakh two thousand three hundred forty",
        ],
        answerIndex: 0,
        explanation: "Indian grouping 5,23,409 = 5 lakh + 23 thousand + 409 = five lakh twenty-three thousand four hundred nine.",
        guideRef: "The Indian and International systems",
        difficulty: "core",
        hints: [
          "Read each comma group separately from the left.",
          "5 is in the lakhs group, 23 in the thousands group.",
          "Then the last three digits give 409.",
        ],
        strategy: "Match commas to place names",
      },
      {
        id: "kn-mcq-q08",
        question: "Place commas in 7654321 using the Indian system.",
        options: ["7,654,321", "76,54,321", "7,65,43,21", "765,43,21"],
        answerIndex: 1,
        explanation: "Indian system: from the right place a comma after 3 digits then after every 2 → 76,54,321.",
        guideRef: "The Indian and International systems",
        difficulty: "core",
        hints: [
          "Start counting from the right-hand end.",
          "First comma goes after 3 digits.",
          "After that, a comma after every 2 digits.",
        ],
        strategy: "Group from the right",
      },
      {
        id: "kn-mcq-q09",
        question: "1 crore equals how many lakhs?",
        options: ["10 lakh", "100 lakh", "1000 lakh", "1 lakh"],
        answerIndex: 1,
        explanation: "1 crore = 1,00,00,000 and 1 lakh = 1,00,000, so 1 crore = 100 lakh.",
        guideRef: "The Indian and International systems",
        difficulty: "core",
        hints: [
          "Write both numbers with all their zeros.",
          "1 crore has 7 zeros, 1 lakh has 5 zeros.",
          "Divide: how many lakhs fit into a crore?",
        ],
        strategy: "Match commas to place names",
      },
      {
        id: "kn-mcq-q10",
        question: "Using the digits 3, 8, 1, 6 once each, what is the greatest 4-digit number?",
        options: ["8631", "8613", "1368", "8361"],
        answerIndex: 0,
        explanation: "Put the biggest digits in the highest places: 8, 6, 3, 1 → 8631.",
        guideRef: "Comparing, ordering and making numbers from digits",
        difficulty: "core",
        hints: [
          "The leftmost place is worth the most.",
          "Sort the digits from largest to smallest.",
          "8 then 6 then 3 then 1.",
        ],
        strategy: "Try extremal cases",
      },
      {
        id: "kn-mcq-q11",
        question: "Using the digits 5, 0, 7, 2 once each, what is the smallest 4-digit number?",
        options: ["0257", "2057", "2075", "5027"],
        answerIndex: 1,
        explanation: "Ascending order would start with 0, which is not allowed for a 4-digit number. Swap the 0 with the next smallest (2): 2057.",
        guideRef: "Comparing, ordering and making numbers from digits",
        difficulty: "core",
        hints: [
          "Smallest means small digits on the left.",
          "But a 4-digit number can't begin with 0.",
          "Put the smallest non-zero digit first, then 0, then the rest in order.",
        ],
        strategy: "Watch the zero",
      },
      {
        id: "kn-mcq-q12",
        question: "Estimate 48 × 21 by rounding each number first.",
        options: ["About 600", "About 1000", "About 1500", "About 80"],
        answerIndex: 1,
        explanation: "Round 48 → 50 and 21 → 20, then 50 × 20 = 1000. (The exact answer 1008 is close.)",
        guideRef: "Estimation, rounding and brackets",
        difficulty: "core",
        hints: [
          "Round each number to a friendly value.",
          "48 ≈ 50 and 21 ≈ 20.",
          "Multiply the rounded values.",
        ],
        strategy: "Round then compute",
      },
      {
        id: "kn-mcq-q13",
        question: "What is the value of (7 + 3) × 2?",
        options: ["13", "20", "17", "24"],
        answerIndex: 1,
        explanation: "Brackets first: 7 + 3 = 10, then 10 × 2 = 20. (Without brackets, 7 + 3 × 2 = 13.)",
        guideRef: "Estimation, rounding and brackets",
        difficulty: "core",
        hints: [
          "Brackets mean 'do this part first'.",
          "Work out 7 + 3 before multiplying.",
          "Then multiply the result by 2.",
        ],
        strategy: "Group with brackets",
      },
      {
        id: "kn-mcq-q14",
        question: "Round 23,650 to the nearest thousand.",
        options: ["23,000", "23,600", "24,000", "23,700"],
        answerIndex: 2,
        explanation: "To round to the nearest 1000, look at the hundreds digit (6). Since 6 ≥ 5, round up: 24,000.",
        guideRef: "Estimation, rounding and brackets",
        difficulty: "core",
        hints: [
          "Which place do you want to keep? Thousands.",
          "Look at the hundreds digit just to its right.",
          "6 is 5 or more, so round up.",
        ],
        strategy: "Round then compute",
      },
      {
        id: "kn-mcq-q15",
        question: "Write the year 2024 in Roman numerals.",
        options: ["MMXXIV", "MMXXIIII", "MMXIV", "MMMXXIV"],
        answerIndex: 0,
        explanation: "2024 = 2000 + 20 + 4 = MM + XX + IV = MMXXIV. Remember 4 is IV, not IIII.",
        guideRef: "Roman numerals",
        difficulty: "core",
        hints: [
          "Split 2024 into 2000 + 20 + 4.",
          "2000 = MM, 20 = XX.",
          "4 uses the subtraction pair IV.",
        ],
        strategy: "Split into thousands/hundreds/tens/ones",
      },
      {
        id: "kn-mcq-q16",
        question: "The same number is 60 lakh in India. What is it in the International system?",
        options: ["6 million", "60 million", "600 thousand", "6 billion"],
        answerIndex: 0,
        explanation: "10 lakh = 1 million, so 60 lakh = 6 million (60 ÷ 10 = 6).",
        guideRef: "The Indian and International systems",
        difficulty: "core",
        hints: [
          "Use the bridge: 10 lakh = 1 million.",
          "How many tens of lakh are in 60 lakh?",
          "60 ÷ 10 = 6.",
        ],
        strategy: "Match commas to place names",
      },
      {
        id: "kn-mcq-q17",
        question: "Which Roman numeral is written correctly for 90?",
        options: ["LXL", "XC", "IXIX", "LXXXX"],
        answerIndex: 1,
        explanation: "90 = 100 − 10 = XC. You cannot write LXXXX because X repeats four times, and L cannot be used for subtraction.",
        guideRef: "Roman numerals",
        difficulty: "challenge",
        hints: [
          "Think of 90 as 'ten less than a hundred'.",
          "C = 100, X = 10.",
          "Put the smaller symbol before the larger to subtract: XC.",
        ],
        strategy: "Spot the subtraction pairs",
      },
      {
        id: "kn-mcq-q18",
        question:
          "Form the greatest 4-digit number using the digits 0, 4, 7 where one digit must be repeated and 0 may be used. What is it?",
        options: ["7740", "7770", "7470", "4770"],
        answerIndex: 1,
        explanation:
          "To make it greatest, fill the high places with the biggest digit. Repeating 7 gives 7, 7, 7 in the top three places, then the smallest remaining choice for the last: 7770.",
        guideRef: "Comparing, ordering and making numbers from digits",
        difficulty: "challenge",
        hints: [
          "Biggest digits belong in the highest places.",
          "You are allowed to repeat a digit — repeat the largest one.",
          "Three 7s then the leftover.",
        ],
        strategy: "Try extremal cases",
      },
      {
        id: "kn-mcq-q19",
        question:
          "Estimate the answer: ₹4,925 + ₹2,080 + ₹990 by rounding each to the nearest hundred, then adding.",
        options: ["About ₹7,000", "About ₹8,000", "About ₹6,000", "About ₹9,000"],
        answerIndex: 1,
        explanation: "Round: 4900 + 2100 + 1000 = 8000. So the total is about ₹8,000. (Exact = ₹7,995.)",
        guideRef: "Estimation, rounding and brackets",
        difficulty: "challenge",
        hints: [
          "Round each amount to the nearest 100 first.",
          "4925 ≈ 4900, 2080 ≈ 2100, 990 ≈ 1000.",
          "Add the rounded amounts.",
        ],
        strategy: "Round then compute",
      },
      {
        id: "kn-mcq-q20",
        question:
          "A 3-digit number reads the same when its digits are reversed, and the sum of its digits is 18. Its tens digit is 0. Which number is it?",
        options: ["909", "990", "918", "810"],
        answerIndex: 0,
        explanation:
          "Reading the same reversed means the hundreds and ones digits are equal (a 0 a). The digit sum is a + 0 + a = 2a = 18, so a = 9. The number is 909.",
        guideRef: "Comparing, ordering and making numbers from digits",
        difficulty: "challenge",
        hints: [
          "Same when reversed means the first digit equals the last digit.",
          "Write it as a 0 a and use the digit-sum condition.",
          "Solve 2a = 18.",
        ],
        strategy: "Introduce a variable",
      },
    ],
    qa: [
      {
        id: "kn-qa-q01",
        question: "Write 4,07,250 in expanded form and read it out in words (Indian system).",
        modelAnswer:
          "4,07,250 = 4,00,000 + 7,000 + 200 + 50. In words: four lakh seven thousand two hundred fifty.",
        markScheme: [
          "expanded form 400000 + 7000 + 200 + 50 | shows place values",
          "four lakh | 4 lakh",
          "seven thousand two hundred fifty",
        ],
        commonError: "Reading the lakhs group as thousands, e.g. saying 'forty thousand' for the 4.",
        guideRef: "The Indian and International systems",
        difficulty: "core",
        hints: ["Break the number at each comma.", "The first group from the left is lakhs.", "There are no ten-thousands here, so the thousands group is just 7."],
        solutions: [
          {
            label: "Place-value breakdown",
            steps: [
              "Groups: 4 (lakhs) | 07 (thousands) | 250 (ones).",
              "Expanded: 400000 + 7000 + 200 + 50.",
              "Words: four lakh seven thousand two hundred fifty.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q02",
        question: "Round 47,382 to the nearest (a) ten, (b) hundred, (c) thousand. Show the digit you check each time.",
        modelAnswer:
          "(a) Nearest ten: check the ones digit 2 (< 5) → 47,380. (b) Nearest hundred: check the tens digit 8 (≥ 5) → 47,400. (c) Nearest thousand: check the hundreds digit 3 (< 5) → 47,000.",
        markScheme: [
          "nearest ten 47380 | checks ones digit 2",
          "nearest hundred 47400 | checks tens digit 8",
          "nearest thousand 47000 | checks hundreds digit 3",
        ],
        commonError: "Rounding the wrong way — e.g. rounding 47,382 down to 47,300 for the nearest hundred by ignoring the tens digit 8.",
        guideRef: "Estimation, rounding and brackets",
        difficulty: "core",
        hints: ["For each part, decide which place you are keeping.", "Look only at the single digit just to its right.", "5 or more rounds up; 4 or less rounds down."],
        solutions: [
          {
            label: "Check-the-next-digit method",
            steps: [
              "Ten: next digit (ones) = 2 < 5 → 47,380.",
              "Hundred: next digit (tens) = 8 ≥ 5 → 47,400.",
              "Thousand: next digit (hundreds) = 3 < 5 → 47,000.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q03",
        question: "Convert MCMXCIV to a number, explaining each subtraction step.",
        modelAnswer:
          "M = 1000. CM = 1000 − 100 = 900. XC = 100 − 10 = 90. IV = 5 − 1 = 4. Total = 1000 + 900 + 90 + 4 = 1994.",
        markScheme: [
          "M = 1000",
          "CM = 900 and XC = 90 | identifies subtraction pairs",
          "IV = 4 and total 1994",
        ],
        commonError: "Adding the letters as if they were all separate, e.g. 1000+100+1000+10+100+1+5.",
        guideRef: "Roman numerals",
        difficulty: "core",
        numericAnswer: 1994,
        hints: ["Break the numeral into chunks.", "A smaller symbol before a larger one is a subtraction.", "Find CM, XC and IV."],
        solutions: [
          {
            label: "Chunk and add",
            steps: [
              "M = 1000.",
              "CM = 900, XC = 90, IV = 4.",
              "1000 + 900 + 90 + 4 = 1994.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q04",
        question:
          "A factory made 12,486 toys in January and 9,517 in February. Estimate the total to the nearest thousand, then find the exact total.",
        modelAnswer:
          "Estimate: 12,486 ≈ 12,000 and 9,517 ≈ 10,000, so about 22,000 toys. Exact: 12,486 + 9,517 = 22,003. The estimate is very close, which checks the exact answer.",
        markScheme: [
          "rounds to 12000 and 10000 | estimate about 22000",
          "exact 22003",
          "estimate close to exact | reasonable check",
        ],
        commonError: "Rounding 9,517 down to 9,000 instead of up to 10,000 (the hundreds digit 5 rounds up).",
        guideRef: "Estimation, rounding and brackets",
        difficulty: "core",
        numericAnswer: 22003,
        hints: ["Round each number to the nearest thousand for the estimate.", "9,517 has hundreds digit 5 → rounds up.", "Then add the real numbers for the exact total."],
        solutions: [
          {
            label: "Estimate then exact",
            steps: [
              "12,486 → 12,000; 9,517 → 10,000; estimate 22,000.",
              "Exact: 12,486 + 9,517 = 22,003.",
              "22,003 ≈ 22,000, so the answer is sensible.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q05",
        question: "Put these in order from smallest to largest: 9,099; 90,909; 9,990; 90,099.",
        modelAnswer:
          "First by number of digits: 9,099 and 9,990 are 4-digit; 90,909 and 90,099 are 5-digit. Among the 4-digit ones, 9,099 < 9,990. Among the 5-digit ones, compare from the left: 90,099 < 90,909. Order: 9,099 < 9,990 < 90,099 < 90,909.",
        markScheme: [
          "separates 4-digit from 5-digit | counts digits first",
          "9099 < 9990 and 90099 < 90909",
          "final order 9099, 9990, 90099, 90909",
        ],
        commonError: "Comparing only the first digit (all start with 9) and guessing, instead of counting digits then comparing place by place.",
        guideRef: "Comparing, ordering and making numbers from digits",
        difficulty: "core",
        hints: ["Count the digits in each number first.", "Fewer digits = smaller whole number.", "For same length, compare from the left until they differ."],
        solutions: [
          {
            label: "Digits then left-compare",
            steps: [
              "4-digit: 9,099 and 9,990 → 9,099 < 9,990.",
              "5-digit: 90,099 and 90,909 → differ at the hundreds place, 90,099 < 90,909.",
              "All 4-digit before all 5-digit: 9,099 < 9,990 < 90,099 < 90,909.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q06",
        question: "How many whole numbers lie between 99 and 1,000 (not counting 99 or 1,000)? Explain.",
        modelAnswer:
          "The whole numbers strictly between are 100, 101, …, 999. Count = 999 − 100 + 1 = 900. So there are 900 whole numbers between 99 and 1,000.",
        markScheme: [
          "first is 100 and last is 999",
          "uses last − first + 1 | 999 − 100 + 1",
          "900",
        ],
        commonError: "Doing 1000 − 99 = 901 and forgetting to exclude the endpoints / off-by-one.",
        guideRef: "Comparing, ordering and making numbers from digits",
        difficulty: "core",
        numericAnswer: 900,
        strategy: "Try small cases",
        hints: ["What is the first whole number after 99? The last before 1000?", "List the first and last: 100 and 999.", "Count with last − first + 1."],
        solutions: [
          {
            label: "Count the run",
            steps: ["First = 100, last = 999.", "Number of terms = 999 − 100 + 1.", "= 900."],
          },
          {
            label: "Try a small case to check the rule",
            steps: [
              "Numbers strictly between 9 and 20 → 10..19, that's 10 numbers.",
              "Check: 19 − 10 + 1 = 10. The rule works.",
              "Apply to 100..999 → 900.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q07",
        question:
          "Challenge: Using each of the digits 1, 2, 3, 4, 5 exactly once, make the greatest and the smallest 5-digit numbers, then find their difference.",
        modelAnswer:
          "Greatest = 54,321 (digits descending). Smallest = 12,345 (digits ascending; no zero to worry about). Difference = 54,321 − 12,345 = 41,976.",
        markScheme: [
          "greatest 54321",
          "smallest 12345",
          "difference 41976",
        ],
        commonError: "Mixing up ascending/descending order, or subtraction errors with borrowing.",
        guideRef: "Comparing, ordering and making numbers from digits",
        difficulty: "challenge",
        numericAnswer: 41976,
        strategy: "Try extremal cases",
        hints: ["Greatest: biggest digit in the highest place.", "Smallest: smallest digit first (no 0 here).", "Subtract the two numbers carefully."],
        solutions: [
          {
            label: "Build both, then subtract",
            steps: [
              "Greatest = 54,321; smallest = 12,345.",
              "54,321 − 12,345.",
              "= 41,976.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q08",
        question:
          "Challenge: A shopkeeper earned ₹1 crore last year. He wants to share it equally among his 25 workers as a bonus. How much does each worker get? Give your answer in lakhs and in rupees.",
        modelAnswer:
          "1 crore = 1,00,00,000 rupees. Divide by 25: 1,00,00,000 ÷ 25 = 4,00,000. So each worker gets ₹4,00,000, which is 4 lakh rupees.",
        markScheme: [
          "1 crore = 1,00,00,000 | 10000000",
          "divides by 25",
          "4,00,000 | 4 lakh",
        ],
        commonError: "Using the wrong number of zeros for a crore (e.g. treating 1 crore as 10,00,000) and getting 40,000.",
        guideRef: "The Indian and International systems",
        difficulty: "challenge",
        numericAnswer: 400000,
        strategy: "Break into parts",
        hints: ["First write 1 crore with all its zeros.", "1 crore = 1,00,00,000.", "Divide by 25."],
        solutions: [
          {
            label: "Direct division",
            steps: [
              "1 crore = 1,00,00,000.",
              "1,00,00,000 ÷ 25 = 4,00,000.",
              "= ₹4,00,000 = 4 lakh per worker.",
            ],
          },
          {
            label: "Simplify the division",
            steps: [
              "100 ÷ 25 = 4.",
              "So 1,00,00,000 ÷ 25 = 4 × 1,00,000 = 4,00,000.",
              "Each worker gets 4 lakh rupees.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q09",
        question:
          "Challenge: I am a 3-digit number. My hundreds digit is twice my ones digit, and my tens digit is 0. The sum of my digits is 9. What number am I?",
        modelAnswer:
          "Let the ones digit be u. Hundreds digit = 2u, tens digit = 0. Digit sum: 2u + 0 + u = 3u = 9, so u = 3. Hundreds = 6. The number is 603.",
        markScheme: [
          "sets ones = u, hundreds = 2u, tens = 0 | introduces a variable",
          "3u = 9 so u = 3",
          "603",
        ],
        commonError: "Forgetting the tens digit is 0 and inserting another digit, or solving 2u + u = 9 incorrectly.",
        guideRef: "Place value and reading big numbers",
        difficulty: "challenge",
        numericAnswer: 603,
        strategy: "Introduce a variable",
        hints: ["Call the ones digit a letter, say u.", "Write the hundreds digit in terms of u.", "Use the digit-sum clue to solve for u."],
        solutions: [
          {
            label: "Introduce a variable",
            steps: [
              "Ones = u, hundreds = 2u, tens = 0.",
              "2u + 0 + u = 9 → 3u = 9 → u = 3.",
              "Hundreds = 6, so the number is 603.",
            ],
          },
        ],
      },
      {
        id: "kn-qa-q10",
        question:
          "Estimate ₹3,12,000 ÷ 4 by rounding sensibly, then state whether your estimate is exact here and why.",
        modelAnswer:
          "3,12,000 is already friendly for dividing by 4. 3,12,000 ÷ 4 = 78,000. Since 312 is exactly divisible by 4 (312 ÷ 4 = 78), the estimate is in fact the exact answer: ₹78,000.",
        markScheme: [
          "312000 ÷ 4 = 78000",
          "notes 312 is divisible by 4 | estimate equals exact",
          "78,000 | 78000",
        ],
        commonError: "Rounding 3,12,000 to 3,00,000 and dividing to get 75,000, missing that the original divides cleanly.",
        guideRef: "Estimation, rounding and brackets",
        difficulty: "core",
        numericAnswer: 78000,
        hints: ["Check whether the number divides cleanly before rounding.", "Does 4 divide 312?", "312 ÷ 4 = 78, so attach the thousands."],
        solutions: [
          {
            label: "Divide directly",
            steps: [
              "312 ÷ 4 = 78.",
              "So 3,12,000 ÷ 4 = 78,000.",
              "It divides exactly, so the estimate is also the exact answer.",
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
knowingNumbers.questionBank.mcqPapers = [
  { id: "kn-mcq-paper-1", title: "Knowing Our Numbers — MCQ Set A", questions: knowingNumbers.quiz.mcq.slice(0, 10) },
  { id: "kn-mcq-paper-2", title: "Knowing Our Numbers — MCQ Set B", questions: knowingNumbers.quiz.mcq.slice(10) },
];
knowingNumbers.questionBank.qaPapers = [
  { id: "kn-qa-paper-1", title: "Knowing Our Numbers — Written Practice A", questions: knowingNumbers.quiz.qa.slice(0, 5) },
  { id: "kn-qa-paper-2", title: "Knowing Our Numbers — Written Practice B", questions: knowingNumbers.quiz.qa.slice(5) },
];

export default knowingNumbers;
