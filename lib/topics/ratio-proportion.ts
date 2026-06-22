import type { Topic } from "../types";

// Ratio and Proportion (CBSE Class 6, NCERT Ch. 12).
// AoPS-flavoured: discovery openers, derive-don't-decree, hint ladders,
// multi-method solutions, tiered difficulty with genuine challenge problems.

const ratioProportion: Topic = {
  id: "ratio-proportion",
  title: "Ratio and Proportion",
  subject: "Maths",
  chapter: "NCERT Ch. 12 (Ratio and Proportion)",
  icon: "⚖️",
  color: "#10b981",
  intro:
    "A ratio is a way of comparing two quantities by division — how many of one for each of the other. Once you can read a ratio like 2 : 3, scale it up and down like an equivalent fraction, and split a quantity in a given ratio, real-life problems about recipes, prices and speed become easy and even fun.",
  guide: [
    {
      heading: "What a ratio really means",
      discovery: {
        problem:
          "Aanya mixes orange squash like this: 2 cups of squash to 3 cups of water. Vikram mixes 3 cups of squash to 5 cups of water. Whose drink tastes stronger (more squash-y)?",
        idea:
          "A ratio compares two amounts by division, not by subtraction. To compare 2 : 3 and 3 : 5 fairly, turn each into a fraction of squash: 2/5 of Aanya's cup is squash, but only 3/8 of Vikram's is. Since 2/5 = 0.40 and 3/8 = 0.375, Aanya's drink is stronger.",
      },
      body:
        "A **ratio** compares two quantities of the *same kind* by division. We write 'the ratio of squash to water is 2 to 3' as **2 : 3** and read it 'two to three'.\n\nThe two numbers are called the **terms** of the ratio. Order matters: 2 : 3 is *not* the same as 3 : 2.\n\nThe quantities must be in the **same unit** before you compare them. To compare 50 paise and ₹2, first write ₹2 as 200 paise, so the ratio is 50 : 200 = 1 : 4.",
      keyPoints: [
        "A ratio compares two like quantities by division, written a : b.",
        "Order matters: 2 : 3 means something different from 3 : 2.",
        "Always convert to the same unit before forming a ratio.",
        "A ratio has no unit itself — it is a pure comparison.",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bar showing two parts squash to three parts water in the ratio two to three"><rect x="10" y="25" width="300" height="40" fill="none" stroke="#334155" stroke-width="2"/><rect x="10" y="25" width="120" height="40" fill="#fb923c"/><rect x="130" y="25" width="180" height="40" fill="#60a5fa"/><line x1="70" y1="25" x2="70" y2="65" stroke="#334155" stroke-width="1"/><line x1="130" y1="25" x2="130" y2="65" stroke="#334155" stroke-width="2"/><line x1="190" y1="25" x2="190" y2="65" stroke="#334155" stroke-width="1"/><line x1="250" y1="25" x2="250" y2="65" stroke="#334155" stroke-width="1"/><text x="70" y="18" text-anchor="middle" font-size="12" fill="#334155">squash (2)</text><text x="220" y="18" text-anchor="middle" font-size="12" fill="#334155">water (3)</text><text x="160" y="82" text-anchor="middle" font-size="12" fill="#334155">squash : water = 2 : 3</text></svg>',
      ],
      whyItWorks:
        "Subtraction asks 'how many more?', but a ratio asks 'how many times as much?'. Mixing 2 : 3 and mixing 200 : 300 taste identical even though the second has 100 more cups of each — because the multiplying relationship between the two amounts is the same.",
      strategies: ["Draw a diagram", "Compare by division, not subtraction"],
    },
    {
      heading: "Equivalent ratios and simplest form",
      discovery: {
        problem:
          "A recipe for 4 people uses 2 cups of rice and 6 cups of water. You cook for 12 people. How much rice and water now? Did the ratio of rice to water change?",
        idea:
          "Scale everything by the same factor (×3): 6 cups of rice, 18 cups of water. The ratio 6 : 18 is the *same* as 2 : 6 — both simplify to 1 : 3. Equivalent ratios work exactly like equivalent fractions.",
      },
      body:
        "Two ratios are **equivalent** if one can be obtained from the other by multiplying (or dividing) *both* terms by the same number.\n\nThis is identical to equivalent fractions: 2 : 6 is just the fraction 2/6, and 2/6 = 1/3, so 2 : 6 = **1 : 3**.\n\nA ratio is in **simplest form** when the only number that divides both terms is 1. To simplify, divide both terms by their **HCF** (highest common factor).",
      keyPoints: [
        "Multiply or divide both terms by the same number → equivalent ratio.",
        "Simplest form: divide both terms by their HCF.",
        "18 : 24 → divide by 6 → 3 : 4.",
        "A ratio is really a fraction in disguise.",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two bars showing the ratio two to three is equivalent to four to six"><text x="0" y="25" font-size="12" fill="#334155">2 : 3</text><rect x="40" y="12" width="100" height="22" fill="#34d399"/><rect x="140" y="12" width="150" height="22" fill="#a7f3d0"/><rect x="40" y="12" width="250" height="22" fill="none" stroke="#334155"/><text x="0" y="80" font-size="12" fill="#334155">4 : 6</text><rect x="40" y="67" width="100" height="22" fill="#34d399"/><rect x="140" y="67" width="150" height="22" fill="#a7f3d0"/><rect x="40" y="67" width="250" height="22" fill="none" stroke="#334155"/><line x1="90" y1="67" x2="90" y2="89" stroke="#334155"/><line x1="190" y1="67" x2="190" y2="89" stroke="#334155"/><line x1="240" y1="67" x2="240" y2="89" stroke="#334155"/><text x="160" y="110" text-anchor="middle" font-size="12" fill="#334155">same split, finer pieces: 2 : 3 = 4 : 6</text></svg>',
      ],
      whyItWorks:
        "Multiplying both terms by the same number cuts each part into more equal pieces without changing how the whole is shared. The fraction (first term)/(second term) stays the same — that is exactly the test for equivalent ratios.",
      strategies: ["Find a pattern", "Use factors (HCF)", "Treat the ratio as a fraction"],
    },
    {
      heading: "Sharing a quantity in a given ratio",
      discovery: {
        problem:
          "₹600 is to be shared between Meena and Ravi in the ratio 2 : 3. How much does each get? (Hint: how many equal shares is ₹600 cut into?)",
        idea:
          "Add the terms to count the total shares: 2 + 3 = 5 shares. So one share = ₹600 ÷ 5 = ₹120. Meena gets 2 shares = ₹240; Ravi gets 3 shares = ₹360. Check: 240 + 360 = 600. ✓",
      },
      body:
        "To **divide a quantity in a ratio** a : b, add the terms to find the total number of equal shares, then find the value of *one* share, then multiply.\n\n- Total shares = a + b\n- One share = quantity ÷ (a + b)\n- The parts are a × (one share) and b × (one share)\n\nAlways **check** that your two parts add back to the original quantity.",
      keyPoints: [
        "Total shares = sum of the ratio terms.",
        "One share = total quantity ÷ (sum of terms).",
        "Multiply one share by each term to get the parts.",
        "Check: the parts must add back to the whole.",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bar of six hundred rupees split into five equal shares, two shaded for Meena and three for Ravi"><rect x="10" y="25" width="300" height="40" fill="none" stroke="#334155" stroke-width="2"/><rect x="10" y="25" width="120" height="40" fill="#f472b6"/><rect x="130" y="25" width="180" height="40" fill="#38bdf8"/><line x1="70" y1="25" x2="70" y2="65" stroke="#334155"/><line x1="130" y1="25" x2="130" y2="65" stroke="#334155" stroke-width="2"/><line x1="190" y1="25" x2="190" y2="65" stroke="#334155"/><line x1="250" y1="25" x2="250" y2="65" stroke="#334155"/><text x="70" y="18" text-anchor="middle" font-size="12" fill="#334155">Meena ₹240</text><text x="220" y="18" text-anchor="middle" font-size="12" fill="#334155">Ravi ₹360</text><text x="160" y="82" text-anchor="middle" font-size="12" fill="#334155">5 shares of ₹120 each</text></svg>',
      ],
      whyItWorks:
        "Sharing in 2 : 3 means cutting the whole into 2 + 3 = 5 equal pieces, then handing 2 pieces to one person and 3 to the other. Every piece must be the same size, so each piece is the whole divided by 5.",
      strategies: ["Count the total shares", "Find the value of one share", "Check your answer"],
      thinkDeeper:
        "If ₹600 is shared in the ratio 2 : 3 : 5 among three friends, can you adapt the method? How many shares is the rupee cut into now?",
    },
    {
      heading: "Proportion: when two ratios are equal",
      discovery: {
        problem:
          "Are the ratios 6 : 8 and 15 : 20 in proportion? Find a quick test that does not need you to simplify both.",
        idea:
          "Two ratios are in proportion if they are equal. A fast check is **cross-multiplication**: 6 : 8 = 15 : 20 exactly when 6 × 20 = 8 × 15. Both equal 120, so yes — they are in proportion.",
      },
      body:
        "When two ratios are **equal**, the four numbers are said to be **in proportion**. We write 6 : 8 :: 15 : 20, read 'six is to eight as fifteen is to twenty'.\n\nThe outer terms (6 and 20) are the **extremes**; the inner terms (8 and 15) are the **means**.\n\n**Cross-check rule:** the numbers are in proportion when *product of extremes = product of means*. For a : b :: c : d, that means a × d = b × c.",
      keyPoints: [
        "Proportion = two equal ratios, written a : b :: c : d.",
        "Extremes are the outer terms; means are the inner terms.",
        "In proportion ⇔ product of extremes = product of means (a × d = b × c).",
        "Equivalently, a/b = c/d.",
      ],
      whyItWorks:
        "Writing a : b :: c : d as the equation a/b = c/d and multiplying both sides by b × d clears the fractions: a × d = c × b. So the cross-products are equal exactly when the two ratios are equal — that is why the cross-check works.",
      strategies: ["Cross-multiply", "Look for a quick test"],
      thinkDeeper:
        "Three of the four numbers in a proportion are 4, 6 and 10. What could the missing number be, and does its position (extreme or mean) matter?",
    },
    {
      heading: "The unitary method and real-life problems",
      discovery: {
        problem:
          "5 identical notebooks cost ₹90. How much do 8 such notebooks cost? Try to find the cost of just ONE notebook first.",
        idea:
          "Find the value of one unit, then scale up. One notebook costs ₹90 ÷ 5 = ₹18. So 8 notebooks cost 18 × 8 = ₹144. This 'find one, then find many' move is the **unitary method**.",
      },
      body:
        "The **unitary method** solves 'so many cost so much, how much do this many cost?' problems in two steps:\n\n- **Step 1 — find one:** divide to get the value of a single unit.\n- **Step 2 — find many:** multiply by how many you want.\n\nIt powers everyday maths: unit prices, recipe scaling, and speed problems (distance per hour, then for any number of hours).",
      keyPoints: [
        "Unitary method = find the value of ONE, then multiply for MANY.",
        "Step 1 divides; Step 2 multiplies.",
        "Speed = distance ÷ time gives distance for one hour; multiply for more.",
        "Many ratio word-problems can be solved either by scaling or by the unitary method.",
      ],
      whyItWorks:
        "Quantities that scale together stay in the same ratio. Cost ÷ number gives the cost of one item; because the ratio cost : number is constant, multiplying that unit cost by any new number gives the matching cost.",
      strategies: ["Find the value of one", "Scale up or down", "Pick the easier method"],
      thinkDeeper:
        "A car travels 240 km in 4 hours. Could you answer 'how far in 7 hours?' both by the unitary method AND by writing a proportion? Which feels faster?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is a ratio?", back: "A comparison of two like quantities by division, written a : b." },
      { front: "Does order matter in a ratio?", back: "Yes. 2 : 3 is not the same as 3 : 2." },
      { front: "How do you make a ratio equivalent?", back: "Multiply or divide both terms by the same non-zero number." },
      { front: "How do you write a ratio in simplest form?", back: "Divide both terms by their HCF." },
      { front: "How do you share a quantity in ratio a : b?", back: "One share = quantity ÷ (a + b); then the parts are a and b shares." },
      { front: "What does 'in proportion' mean?", back: "Two ratios are equal, e.g. a : b :: c : d." },
      { front: "What is the unitary method?", back: "Find the value of one unit (divide), then multiply for the number you want." },
    ],
    formulae: [
      { name: "Equivalent ratio", rule: "a : b = (a×k) : (b×k) for any non-zero k" },
      { name: "Simplest form", rule: "Divide both terms by HCF(a, b)" },
      { name: "Sharing in a ratio", rule: "One share = total ÷ (a + b); parts = a shares and b shares" },
      { name: "Proportion (cross rule)", rule: "a : b :: c : d  ⇔  a × d = b × c" },
      { name: "Unitary method", rule: "value of one = total ÷ number; value of many = (value of one) × number" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "rp-mcq-q01",
        question: "There are 4 mangoes and 6 apples in a basket. What is the ratio of mangoes to apples?",
        options: ["6 : 4", "2 : 3", "4 : 10", "3 : 2"],
        answerIndex: 1,
        explanation: "Mangoes : apples = 4 : 6. Dividing both by their HCF 2 gives 2 : 3.",
        guideRef: "What a ratio really means",
        difficulty: "warmup",
        strategy: "Compare by division, not subtraction",
      },
      {
        id: "rp-mcq-q02",
        question: "How do you read the ratio 5 : 2?",
        options: ["five plus two", "two to five", "five to two", "five times two"],
        answerIndex: 2,
        explanation: "a : b is read 'a to b', so 5 : 2 is read 'five to two'.",
        guideRef: "What a ratio really means",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q03",
        question: "Which ratio is equivalent to 2 : 5?",
        options: ["4 : 7", "6 : 15", "5 : 2", "3 : 6"],
        answerIndex: 1,
        explanation: "Multiply both terms of 2 : 5 by 3: (2×3) : (5×3) = 6 : 15.",
        guideRef: "Equivalent ratios and simplest form",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q04",
        question: "Write the ratio 18 : 24 in its simplest form.",
        options: ["9 : 12", "3 : 4", "4 : 3", "6 : 8"],
        answerIndex: 1,
        explanation: "HCF of 18 and 24 is 6. Dividing both by 6 gives 3 : 4.",
        guideRef: "Equivalent ratios and simplest form",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q05",
        question: "The ratio of boys to girls in a class is 3 : 4. If there are 12 boys, how many girls are there?",
        options: ["9", "16", "13", "12"],
        answerIndex: 1,
        explanation: "3 : 4 with 12 boys means each term is multiplied by 4 (since 3×4 = 12), so girls = 4×4 = 16.",
        guideRef: "Equivalent ratios and simplest form",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q06",
        question: "Express 50 paise to ₹2 as a ratio in simplest form.",
        options: ["50 : 2", "25 : 1", "1 : 4", "1 : 40"],
        answerIndex: 2,
        explanation: "Use the same unit: ₹2 = 200 paise. So 50 : 200 = 1 : 4 (divide both by 50).",
        guideRef: "What a ratio really means",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q07",
        question: "₹500 is divided between Sita and Geeta in the ratio 2 : 3. How much does Geeta get?",
        options: ["₹200", "₹250", "₹300", "₹350"],
        answerIndex: 2,
        explanation: "Total shares = 2 + 3 = 5; one share = 500 ÷ 5 = ₹100. Geeta gets 3 shares = ₹300.",
        guideRef: "Sharing a quantity in a given ratio",
        difficulty: "core",
        hints: [
          "How many equal shares is ₹500 cut into?",
          "Add the ratio terms: 2 + 3 = 5.",
          "One share = 500 ÷ 5 = ₹100; Geeta gets 3 shares.",
        ],
        strategy: "Find the value of one share",
      },
      {
        id: "rp-mcq-q08",
        question: "Are 4 : 6 and 6 : 9 in proportion?",
        options: ["No", "Yes", "Only if you add 1", "Cannot be decided"],
        answerIndex: 1,
        explanation: "Cross-multiply: 4 × 9 = 36 and 6 × 6 = 36. Equal products, so they are in proportion.",
        guideRef: "Proportion: when two ratios are equal",
        difficulty: "core",
        hints: [
          "Two ratios are in proportion when they are equal.",
          "Try cross-multiplication: product of extremes vs product of means.",
          "4 × 9 = 6 × 6?",
        ],
        strategy: "Cross-multiply",
      },
      {
        id: "rp-mcq-q09",
        question: "If 6 pens cost ₹72, what is the cost of 1 pen?",
        options: ["₹12", "₹10", "₹14", "₹8"],
        answerIndex: 0,
        explanation: "Unitary method: cost of one = 72 ÷ 6 = ₹12.",
        guideRef: "The unitary method and real-life problems",
        difficulty: "core",
        hints: ["To find the cost of one, divide.", "72 ÷ 6 = ?"],
        strategy: "Find the value of one",
      },
      {
        id: "rp-mcq-q10",
        question: "5 kg of rice cost ₹250. What is the cost of 8 kg of the same rice?",
        options: ["₹400", "₹360", "₹420", "₹450"],
        answerIndex: 0,
        explanation: "Cost of 1 kg = 250 ÷ 5 = ₹50. Cost of 8 kg = 50 × 8 = ₹400.",
        guideRef: "The unitary method and real-life problems",
        difficulty: "core",
        hints: ["First find the cost of 1 kg.", "250 ÷ 5 = ₹50.", "Now multiply by 8."],
        strategy: "Find the value of one",
      },
      {
        id: "rp-mcq-q11",
        question: "In the proportion 3 : 7 :: 12 : x, what is the value of x?",
        options: ["16", "21", "28", "24"],
        answerIndex: 2,
        explanation: "Product of extremes = product of means: 3 × x = 7 × 12 = 84, so x = 84 ÷ 3 = 28.",
        guideRef: "Proportion: when two ratios are equal",
        difficulty: "core",
        hints: [
          "Use product of extremes = product of means.",
          "Extremes are 3 and x; means are 7 and 12.",
          "3 × x = 84, so x = ?",
        ],
        strategy: "Cross-multiply",
      },
      {
        id: "rp-mcq-q12",
        question: "A car covers 180 km in 3 hours at a steady speed. How far does it go in 5 hours?",
        options: ["240 km", "300 km", "360 km", "270 km"],
        answerIndex: 1,
        explanation: "Distance in 1 hour = 180 ÷ 3 = 60 km. In 5 hours = 60 × 5 = 300 km.",
        guideRef: "The unitary method and real-life problems",
        difficulty: "core",
        hints: ["Find the distance in one hour first.", "180 ÷ 3 = 60 km per hour.", "Multiply by 5 hours."],
        strategy: "Find the value of one",
      },
      {
        id: "rp-mcq-q13",
        question: "Which of these ratios is the largest?",
        options: ["1 : 2", "2 : 3", "3 : 5", "4 : 9"],
        answerIndex: 1,
        explanation: "Compare as fractions: 1/2 = 0.50, 2/3 ≈ 0.67, 3/5 = 0.60, 4/9 ≈ 0.44. The largest is 2 : 3.",
        guideRef: "Equivalent ratios and simplest form",
        difficulty: "core",
        hints: [
          "Turn each ratio into a fraction (first term ÷ second term).",
          "Compare 1/2, 2/3, 3/5 and 4/9.",
          "Which decimal is biggest?",
        ],
        strategy: "Treat the ratio as a fraction",
      },
      {
        id: "rp-mcq-q14",
        question: "A recipe for 4 people uses 200 g of flour. How much flour is needed for 6 people?",
        options: ["300 g", "250 g", "280 g", "320 g"],
        answerIndex: 0,
        explanation: "Flour for 1 person = 200 ÷ 4 = 50 g. For 6 people = 50 × 6 = 300 g.",
        guideRef: "The unitary method and real-life problems",
        difficulty: "core",
        hints: ["Find the flour for one person first.", "200 ÷ 4 = 50 g each.", "Now multiply by 6."],
        strategy: "Find the value of one",
      },
      {
        id: "rp-mcq-q15",
        question: "The ratio of the present ages of Rohan and his father is 2 : 5. The father is 35. How old is Rohan?",
        options: ["10", "14", "12", "15"],
        answerIndex: 1,
        explanation: "Father is 5 shares = 35, so one share = 7. Rohan is 2 shares = 2 × 7 = 14.",
        guideRef: "Sharing a quantity in a given ratio",
        difficulty: "core",
        hints: [
          "The father's age is 5 shares.",
          "One share = 35 ÷ 5 = 7 years.",
          "Rohan is 2 shares.",
        ],
        strategy: "Find the value of one share",
      },
      {
        id: "rp-mcq-q16",
        question: "Two squashes are mixed: drink A is squash : water = 1 : 3 and drink B is 2 : 5. Which is stronger (more squash per cup)?",
        options: ["A", "B", "Equal", "Cannot tell"],
        answerIndex: 1,
        explanation: "Squash fraction of A = 1/4 = 0.25; of B = 2/7 ≈ 0.286. B has more squash per cup, so B is stronger.",
        guideRef: "What a ratio really means",
        difficulty: "challenge",
        hints: [
          "Work out what fraction of each cup is squash.",
          "A: squash is 1 out of 1+3 = 4 parts; B: 2 out of 2+5 = 7 parts.",
          "Compare 1/4 with 2/7.",
        ],
        strategy: "Treat the ratio as a fraction",
      },
      {
        id: "rp-mcq-q17",
        question: "₹880 is shared among three children in the ratio 2 : 3 : 5. How much does the child with the largest share get?",
        options: ["₹440", "₹264", "₹176", "₹400"],
        answerIndex: 0,
        explanation: "Total shares = 2 + 3 + 5 = 10; one share = 880 ÷ 10 = ₹88. Largest share = 5 × 88 = ₹440.",
        guideRef: "Sharing a quantity in a given ratio",
        difficulty: "challenge",
        hints: [
          "Add all three terms to count the shares.",
          "2 + 3 + 5 = 10 shares; one share = 880 ÷ 10.",
          "The largest share is 5 shares.",
        ],
        strategy: "Find the value of one share",
      },
      {
        id: "rp-mcq-q18",
        question: "In a proportion the means are 6 and 8 and one extreme is 4. What is the other extreme?",
        options: ["10", "12", "16", "48"],
        answerIndex: 1,
        explanation: "Product of means = 6 × 8 = 48 = product of extremes = 4 × (other). So other = 48 ÷ 4 = 12.",
        guideRef: "Proportion: when two ratios are equal",
        difficulty: "challenge",
        hints: [
          "Product of extremes = product of means.",
          "Means multiply to 6 × 8 = 48.",
          "4 × (other) = 48.",
        ],
        strategy: "Cross-multiply",
      },
      {
        id: "rp-mcq-q19",
        question: "The ratio of girls to boys in a class is 3 : 2. If there are 10 more girls than boys, how many students are there in all?",
        options: ["50", "40", "25", "60"],
        answerIndex: 0,
        explanation: "The difference 3 − 2 = 1 share equals 10 students, so one share = 10. Total = (3 + 2) × 10 = 50.",
        guideRef: "Sharing a quantity in a given ratio",
        difficulty: "challenge",
        hints: [
          "The difference in shares is 3 − 2 = 1 share.",
          "That 1 share equals the 10 extra girls.",
          "Total shares = 3 + 2 = 5; multiply by the share value.",
        ],
        strategy: "Work with the difference of shares",
      },
      {
        id: "rp-mcq-q20",
        question: "8 workers build a wall in 6 days. Working at the same rate, how many days would 12 workers take (do more workers take more or fewer days)?",
        options: ["9 days", "4 days", "8 days", "3 days"],
        answerIndex: 1,
        explanation: "Total work = 8 × 6 = 48 worker-days. With 12 workers, days = 48 ÷ 12 = 4. More workers means fewer days (inverse).",
        guideRef: "The unitary method and real-life problems",
        difficulty: "challenge",
        hints: [
          "More workers should take fewer days, not more.",
          "Find the total work in 'worker-days': 8 × 6.",
          "Divide that total by 12 workers.",
        ],
        strategy: "Find the total, then divide",
      },
    ],
    qa: [
      {
        id: "rp-qa-q01",
        question: "Express the ratio 35 : 49 in its simplest form. Show your working.",
        modelAnswer:
          "The HCF of 35 and 49 is 7. Dividing both terms by 7 gives 35 ÷ 7 : 49 ÷ 7 = 5 : 7. So 35 : 49 = 5 : 7.",
        markScheme: [
          "HCF of 35 and 49 is 7",
          "divide both terms by 7",
          "5 : 7",
        ],
        commonError: "Dividing only one term, or subtracting (giving 0 : 14).",
        guideRef: "Equivalent ratios and simplest form",
        difficulty: "core",
        hints: ["What is the biggest number dividing both 35 and 49?", "Both are multiples of 7.", "35 ÷ 7 and 49 ÷ 7."],
        strategy: "Use factors (HCF)",
      },
      {
        id: "rp-qa-q02",
        question: "A length of ribbon is 84 cm. Cut it in the ratio 3 : 4. How long is each piece? Show your method.",
        modelAnswer:
          "Total shares = 3 + 4 = 7. One share = 84 ÷ 7 = 12 cm. So the pieces are 3 × 12 = 36 cm and 4 × 12 = 48 cm. Check: 36 + 48 = 84 cm. ✓",
        markScheme: [
          "total shares 3 + 4 = 7",
          "one share = 84 ÷ 7 = 12",
          "36 cm and 48 cm",
        ],
        commonError: "Dividing 84 by 3 and by 4 separately instead of by the total number of shares (7).",
        guideRef: "Sharing a quantity in a given ratio",
        difficulty: "core",
        numericAnswer: 48,
        hints: ["Add the ratio terms to count the shares.", "84 ÷ 7 = one share.", "Multiply one share by 3 and by 4."],
        solutions: [
          {
            label: "Share method",
            steps: [
              "Total shares = 3 + 4 = 7.",
              "One share = 84 ÷ 7 = 12 cm.",
              "Pieces = 3 × 12 = 36 cm and 4 × 12 = 48 cm.",
            ],
          },
        ],
      },
      {
        id: "rp-qa-q03",
        question: "Check whether 12, 18, 20 and 30 are in proportion (in that order). Show how you decide.",
        modelAnswer:
          "Test 12 : 18 :: 20 : 30 using product of extremes = product of means. Extremes: 12 × 30 = 360. Means: 18 × 20 = 360. The products are equal, so 12, 18, 20, 30 ARE in proportion.",
        markScheme: [
          "use cross-products | product of extremes = product of means",
          "12 × 30 = 360 and 18 × 20 = 360",
          "equal, so in proportion",
        ],
        commonError: "Adding the numbers, or comparing 12 with 18 and 20 with 30 separately without cross-multiplying.",
        guideRef: "Proportion: when two ratios are equal",
        difficulty: "core",
        hints: ["Two ratios are in proportion if equal.", "Compare product of extremes with product of means.", "12 × 30 vs 18 × 20."],
        solutions: [
          {
            label: "Cross-product test",
            steps: ["Extremes: 12 × 30 = 360.", "Means: 18 × 20 = 360.", "Equal products → in proportion."],
          },
          {
            label: "Simplify each ratio",
            steps: ["12 : 18 = 2 : 3 (÷6).", "20 : 30 = 2 : 3 (÷10).", "Both equal 2 : 3 → in proportion."],
          },
        ],
      },
      {
        id: "rp-qa-q04",
        question: "If 9 identical books cost ₹360, find the cost of 14 such books using the unitary method.",
        modelAnswer:
          "Cost of 1 book = 360 ÷ 9 = ₹40. Cost of 14 books = 40 × 14 = ₹560.",
        markScheme: [
          "cost of one = 360 ÷ 9 = 40",
          "multiply by 14",
          "₹560",
        ],
        commonError: "Multiplying before dividing, or dividing 360 by 14.",
        guideRef: "The unitary method and real-life problems",
        difficulty: "core",
        numericAnswer: 560,
        hints: ["Find the cost of one book first.", "360 ÷ 9 = ₹40.", "Multiply by 14."],
        solutions: [
          {
            label: "Unitary method",
            steps: ["One book = 360 ÷ 9 = ₹40.", "14 books = 40 × 14 = ₹560."],
          },
          {
            label: "Scaling (proportion)",
            steps: ["9 : 360 :: 14 : x.", "9 × x = 360 × 14 = 5040.", "x = 5040 ÷ 9 = ₹560."],
          },
        ],
      },
      {
        id: "rp-qa-q05",
        question: "A train travels 270 km in 3 hours at a steady speed. How far will it travel in 7 hours? Solve it two different ways.",
        modelAnswer:
          "Speed = 270 ÷ 3 = 90 km in one hour. In 7 hours it covers 90 × 7 = 630 km. Alternatively, by proportion 270 : 3 :: x : 7, so 3x = 270 × 7 = 1890 and x = 630 km.",
        markScheme: [
          "distance in 1 hour = 270 ÷ 3 = 90",
          "90 × 7 | proportion 3x = 1890",
          "630 km",
        ],
        commonError: "Adding 4 more hours' worth onto 270 instead of finding the per-hour distance.",
        guideRef: "The unitary method and real-life problems",
        difficulty: "core",
        numericAnswer: 630,
        hints: ["Find the distance in one hour first.", "270 ÷ 3 = 90 km/h.", "Multiply by 7 hours."],
        solutions: [
          {
            label: "Unitary method",
            steps: ["Distance per hour = 270 ÷ 3 = 90 km.", "In 7 hours = 90 × 7 = 630 km."],
          },
          {
            label: "Proportion",
            steps: ["270 : 3 :: x : 7.", "3 × x = 270 × 7 = 1890.", "x = 1890 ÷ 3 = 630 km."],
          },
        ],
      },
      {
        id: "rp-qa-q06",
        question:
          "Challenge: ₹1200 is shared among Asha, Bina and Chetan in the ratio 1 : 2 : 3. How much does each receive, and how much more does Chetan get than Asha?",
        modelAnswer:
          "Total shares = 1 + 2 + 3 = 6. One share = 1200 ÷ 6 = ₹200. Asha = ₹200, Bina = ₹400, Chetan = ₹600. Chetan gets 600 − 200 = ₹400 more than Asha. Check: 200 + 400 + 600 = 1200. ✓",
        markScheme: [
          "total shares = 6",
          "one share = 1200 ÷ 6 = 200",
          "₹200, ₹400, ₹600 | Chetan − Asha = ₹400",
        ],
        commonError: "Using only two shares (1 + 2) or forgetting to add the third term.",
        guideRef: "Sharing a quantity in a given ratio",
        difficulty: "challenge",
        numericAnswer: 400,
        strategy: "Find the value of one share",
        hints: [
          "Add all three ratio terms first.",
          "1 + 2 + 3 = 6 shares; one share = 1200 ÷ 6.",
          "Chetan has 3 shares, Asha has 1 share — find the difference.",
        ],
        solutions: [
          {
            label: "Share method",
            steps: [
              "Shares = 1 + 2 + 3 = 6; one share = 1200 ÷ 6 = ₹200.",
              "Asha ₹200, Bina ₹400, Chetan ₹600.",
              "Chetan − Asha = 600 − 200 = ₹400.",
            ],
          },
        ],
      },
      {
        id: "rp-qa-q07",
        question:
          "Challenge: In a basket the ratio of red to green apples is 5 : 3. If 16 more red apples are added, the ratio becomes 7 : 3. How many green apples are there?",
        modelAnswer:
          "Green apples never change, and in both ratios green is '3 shares'. So one share is the same value throughout. Reds rise from 5 shares to 7 shares — a rise of 2 shares — and that rise equals the 16 added apples. So one share = 16 ÷ 2 = 8 apples. Green = 3 shares = 3 × 8 = 24 apples.",
        markScheme: [
          "green stays the same, so one share value is unchanged",
          "extra reds = 7 − 5 = 2 shares = 16, so one share = 8",
          "green = 3 × 8 = 24",
        ],
        commonError: "Treating the two ratios as unrelated, or assuming the total stays the same when only reds are added.",
        guideRef: "Sharing a quantity in a given ratio",
        difficulty: "challenge",
        numericAnswer: 24,
        strategy: "Look for an invariant",
        hints: [
          "What quantity does NOT change when only red apples are added?",
          "Green is 3 shares in both ratios, so the share value is fixed.",
          "The reds go up by 7 − 5 = 2 shares, and that equals 16 apples.",
        ],
        solutions: [
          {
            label: "Invariant share",
            steps: [
              "Green is unchanged: 3 shares before and after, so one share is constant.",
              "Reds increase 5 → 7 shares = +2 shares = 16 apples ⇒ one share = 8.",
              "Green = 3 × 8 = 24 apples.",
            ],
          },
        ],
      },
      {
        id: "rp-qa-q08",
        question:
          "Challenge: A 20-litre mixture of paint has white and blue in the ratio 3 : 2. How many litres of blue paint must be added so that the new ratio of white to blue becomes 1 : 1?",
        modelAnswer:
          "In 20 litres at 3 : 2 there are 3 + 2 = 5 shares, so one share = 20 ÷ 5 = 4 litres. White = 3 × 4 = 12 L, blue = 2 × 4 = 8 L. White is not changed. For 1 : 1 the blue must equal the white, i.e. 12 L of blue. We already have 8 L, so we must add 12 − 8 = 4 litres of blue.",
        markScheme: [
          "one share = 20 ÷ 5 = 4, white = 12 L, blue = 8 L",
          "for 1 : 1, blue must equal white = 12 L",
          "add 12 − 8 = 4 litres",
        ],
        commonError: "Trying to add white as well, or making the new total 20 L instead of letting blue increase.",
        guideRef: "Sharing a quantity in a given ratio",
        difficulty: "challenge",
        numericAnswer: 4,
        strategy: "Work backwards",
        hints: [
          "First find how many litres of white and blue are in the 20 L.",
          "One share = 20 ÷ 5 = 4 L, so white = 12 L and blue = 8 L.",
          "Only blue is added; for 1 : 1 blue must reach 12 L.",
        ],
        solutions: [
          {
            label: "Find amounts, then balance",
            steps: [
              "One share = 20 ÷ 5 = 4 L ⇒ white 12 L, blue 8 L.",
              "1 : 1 means blue must equal white = 12 L (white unchanged).",
              "Add 12 − 8 = 4 litres of blue.",
            ],
          },
        ],
      },
      {
        id: "rp-qa-q09",
        question:
          "Two ratios 4 : 6 and 10 : 15 are claimed to be equal. Decide whether the claim is correct, and explain what equal ratios have in common.",
        modelAnswer:
          "Simplify each: 4 : 6 = 2 : 3 (÷2) and 10 : 15 = 2 : 3 (÷5). Both reduce to 2 : 3, so the claim is correct. (Cross-check: 4 × 15 = 60 = 6 × 10.) Equal ratios share the same simplest form — one is the other with both terms scaled by the same number.",
        markScheme: [
          "4 : 6 = 2 : 3 and 10 : 15 = 2 : 3",
          "equal | correct claim",
          "same simplest form | cross-products equal",
        ],
        commonError: "Comparing 4 with 10 and 6 with 15 directly and concluding they differ.",
        guideRef: "Proportion: when two ratios are equal",
        difficulty: "core",
        hints: ["Put both ratios in simplest form.", "4 : 6 ÷ 2 and 10 : 15 ÷ 5.", "Do they give the same ratio?"],
        solutions: [
          {
            label: "Simplest form",
            steps: ["4 : 6 = 2 : 3.", "10 : 15 = 2 : 3.", "Same simplest form → equal."],
          },
          {
            label: "Cross-product",
            steps: ["4 × 15 = 60.", "6 × 10 = 60.", "Equal products → equal ratios."],
          },
        ],
      },
      {
        id: "rp-qa-q10",
        question:
          "Challenge: 6 taps fill a tank in 80 minutes. Working at the same rate, how long would 8 taps take to fill the same tank? Explain why the answer is less than 80.",
        modelAnswer:
          "Total work = 6 taps × 80 minutes = 480 tap-minutes to fill the tank. With 8 taps, time = 480 ÷ 8 = 60 minutes. More taps share the same job, so each minute fills more — the time must be less than 80 minutes (this is an inverse relationship).",
        markScheme: [
          "total work = 6 × 80 = 480 tap-minutes",
          "time = 480 ÷ 8 = 60",
          "fewer minutes because more taps | inverse relationship",
        ],
        commonError: "Scaling up (using 8/6 × 80) as if more taps need more time — it is an inverse relationship.",
        guideRef: "The unitary method and real-life problems",
        difficulty: "challenge",
        numericAnswer: 60,
        strategy: "Find the total, then divide",
        hints: [
          "Should more taps take more time or less?",
          "Find the total work in 'tap-minutes': 6 × 80.",
          "Divide that total by 8 taps.",
        ],
        solutions: [
          {
            label: "Total-work method",
            steps: [
              "Work to fill tank = 6 × 80 = 480 tap-minutes.",
              "With 8 taps: 480 ÷ 8 = 60 minutes.",
              "Less than 80 because more taps do the job faster (inverse).",
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
ratioProportion.questionBank.mcqPapers = [
  { id: "rp-mcq-paper-1", title: "Ratio & Proportion — MCQ Set A", questions: ratioProportion.quiz.mcq.slice(0, 10) },
  { id: "rp-mcq-paper-2", title: "Ratio & Proportion — MCQ Set B", questions: ratioProportion.quiz.mcq.slice(10) },
];
ratioProportion.questionBank.qaPapers = [
  { id: "rp-qa-paper-1", title: "Ratio & Proportion — Written Practice A", questions: ratioProportion.quiz.qa.slice(0, 5) },
  { id: "rp-qa-paper-2", title: "Ratio & Proportion — Written Practice B", questions: ratioProportion.quiz.qa.slice(5) },
];

export default ratioProportion;
