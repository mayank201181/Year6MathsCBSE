import type { Topic } from "../types";

// Topic: Patterns in Mathematics (CBSE Class 6, Ganita Prakash Ch. 1).
// AoPS-flavoured: discovery openers, "why it works" derivations, hint ladders,
// multi-method solutions, numeric answers, and inline SVG diagrams.

const patterns: Topic = {
  id: "patterns",
  title: "Patterns in Mathematics",
  subject: "Maths",
  chapter: "Ganita Prakash Ch. 1 (Patterns in Mathematics)",
  icon: "🔷",
  color: "#6366f1",
  intro:
    "Mathematics is full of patterns hiding in plain sight — in number sequences, in shapes made of dots, even in the way petals grow on a flower. A pattern lets you predict what comes next without doing all the work. Once you learn to spot the rule, you can leap straight to the 100th term.",
  guide: [
    {
      heading: "Sequences and the rule behind them",
      discovery: {
        problem:
          "Look at 2, 5, 8, 11, 14, … What number is in the 10th place? Try to find it WITHOUT writing out all ten terms.",
        idea:
          "Each term jumps up by 3, so the sequence is built from the starting number plus a fixed number of jumps. The nth term = 2 + (n−1)×3. The 10th term is 2 + 9×3 = 29 — no need to list them all.",
      },
      body:
        "A **sequence** is a list of numbers in a definite order. Each number is called a **term**.\n\nMany sequences grow by adding the *same* amount each time — this fixed amount is the **common difference**. For 2, 5, 8, 11, … the common difference is 3.\n\nTo find a term far down the list, look for the **rule** (the nth term) instead of counting one by one. For a sequence that starts at *a* and goes up by *d* each time, the nth term is `a + (n − 1)×d`.",
      keyPoints: [
        "A term is one number in a sequence; its position is n.",
        "Constant jump = common difference d.",
        "nth term of such a sequence = a + (n − 1)×d.",
        "A rule lets you jump straight to any term.",
      ],
      whyItWorks:
        "From the 1st term you take (n − 1) jumps to reach the nth term — one fewer jump than the position, because the 1st term took zero jumps. Each jump adds d, so you add (n − 1)×d to the start.",
      strategies: ["Find a pattern", "Look at differences"],
    },
    {
      heading: "Triangular, square and cube numbers",
      discovery: {
        problem:
          "You stack cannonballs (or laddoos!) in a triangle: 1 in the top row, 2 in the next, then 3, then 4. How many in a triangle with 4 rows? With 100 rows?",
        idea:
          "The triangular numbers are 1, 3, 6, 10, 15, … — each is the running total 1+2+3+…+n. There is a shortcut: the nth triangular number is n×(n+1)÷2. So 100 rows hold 100×101÷2 = 5050 balls.",
      },
      body:
        "Some sequences come from shapes made of dots:\n\n- **Triangular numbers**: 1, 3, 6, 10, 15, … (dots arranged in a growing triangle). Tn = 1+2+…+n = n×(n+1)÷2.\n- **Square numbers**: 1, 4, 9, 16, 25, … (dots in a square). The nth one is n×n = n².\n- **Cube numbers**: 1, 8, 27, 64, 125, … (little cubes stacked into a big cube). The nth one is n×n×n = n³.\n\nThese are sometimes called *figurate* numbers because they come from figures.",
      keyPoints: [
        "Triangular: Tn = n(n+1)/2 → 1, 3, 6, 10, 15…",
        "Square: n² → 1, 4, 9, 16, 25…",
        "Cube: n³ → 1, 8, 27, 64, 125…",
        "Picture the dots and the rule explains itself.",
      ],
      diagrams: [
        '<svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangular numbers shown as growing triangles of dots: one, three, six and ten"><text x="20" y="120" font-size="11" fill="#334155">1</text><circle cx="20" cy="95" r="5" fill="#6366f1"/><text x="70" y="120" font-size="11" fill="#334155">3</text><circle cx="70" cy="80" r="5" fill="#6366f1"/><circle cx="62" cy="95" r="5" fill="#6366f1"/><circle cx="78" cy="95" r="5" fill="#6366f1"/><text x="140" y="120" font-size="11" fill="#334155">6</text><circle cx="140" cy="65" r="5" fill="#6366f1"/><circle cx="132" cy="80" r="5" fill="#6366f1"/><circle cx="148" cy="80" r="5" fill="#6366f1"/><circle cx="124" cy="95" r="5" fill="#6366f1"/><circle cx="140" cy="95" r="5" fill="#6366f1"/><circle cx="156" cy="95" r="5" fill="#6366f1"/><text x="220" y="120" font-size="11" fill="#334155">10</text><circle cx="220" cy="50" r="5" fill="#6366f1"/><circle cx="212" cy="65" r="5" fill="#6366f1"/><circle cx="228" cy="65" r="5" fill="#6366f1"/><circle cx="204" cy="80" r="5" fill="#6366f1"/><circle cx="220" cy="80" r="5" fill="#6366f1"/><circle cx="236" cy="80" r="5" fill="#6366f1"/><circle cx="196" cy="95" r="5" fill="#6366f1"/><circle cx="212" cy="95" r="5" fill="#6366f1"/><circle cx="228" cy="95" r="5" fill="#6366f1"/><circle cx="244" cy="95" r="5" fill="#6366f1"/></svg>',
      ],
      whyItWorks:
        "Put two copies of the nth triangle together and they form a rectangle that is n tall and (n+1) wide — n(n+1) dots in all. One triangle is half of that, so Tn = n(n+1)/2. That is the pairing trick young Gauss famously used.",
      strategies: ["Draw a diagram", "Use symmetry", "Try small cases"],
      thinkDeeper:
        "Add two triangular numbers that are next to each other, like 6 + 10. What kind of number do you always get? Why might that be?",
    },
    {
      heading: "Why odd numbers add up to squares",
      discovery: {
        problem:
          "Add up odd numbers in order: 1, then 1+3, then 1+3+5, then 1+3+5+7. Write down each total. Do you recognise the totals?",
        idea:
          "The totals are 1, 4, 9, 16 — the square numbers! Adding the first n odd numbers always gives n². So 1+3+5+…+(2n−1) = n².",
      },
      body:
        "One of the most beautiful patterns: the sum of the first n **odd numbers** is exactly n².\n\n- 1 = 1²\n- 1 + 3 = 4 = 2²\n- 1 + 3 + 5 = 9 = 3²\n- 1 + 3 + 5 + 7 = 16 = 4²\n\nThis isn't a coincidence — it can be *seen* with dots.",
      keyPoints: [
        "1 + 3 + 5 + … + (2n − 1) = n².",
        "Each new odd number is an L-shaped layer added to a square.",
        "Patterns you can see are patterns you can trust.",
      ],
      diagrams: [
        '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A four by four square of dots built from L-shaped layers of one, three, five and seven dots showing one plus three plus five plus seven equals sixteen"><rect x="20" y="20" width="40" height="40" fill="#a5b4fc"/><rect x="60" y="20" width="40" height="40" fill="#818cf8"/><rect x="20" y="60" width="40" height="40" fill="#818cf8"/><rect x="100" y="20" width="40" height="40" fill="#6366f1"/><rect x="20" y="100" width="40" height="40" fill="#6366f1"/><rect x="60" y="60" width="40" height="40" fill="#6366f1"/><rect x="100" y="60" width="40" height="40" fill="#6366f1"/><rect x="60" y="100" width="40" height="40" fill="#6366f1"/><rect x="140" y="20" width="40" height="40" fill="#4338ca"/><rect x="140" y="60" width="40" height="40" fill="#4338ca"/><rect x="140" y="100" width="40" height="40" fill="#4338ca"/><rect x="20" y="140" width="40" height="40" fill="#4338ca"/><rect x="60" y="140" width="40" height="40" fill="#4338ca"/><rect x="100" y="140" width="40" height="40" fill="#4338ca"/><rect x="140" y="140" width="40" height="40" fill="#4338ca"/><text x="100" y="195" text-anchor="middle" font-size="12" fill="#334155">1 + 3 + 5 + 7 = 16 = 4 squared</text></svg>',
      ],
      whyItWorks:
        "Start with a 1×1 square (1 dot). To grow it into a 2×2 square you add an L-shaped layer of 3 dots along the right and bottom. To grow into 3×3 you add an L of 5. Each L is the next odd number, and each step makes the next perfect square — so the running total of odds is always a square.",
      strategies: ["Draw a diagram", "Look for invariants"],
    },
    {
      heading: "The Virahanka–Fibonacci numbers and growing shapes",
      discovery: {
        problem:
          "1, 1, 2, 3, 5, 8, 13, … Each number is made from the two before it. What rule are they following, and what comes after 13?",
        idea:
          "Each term is the SUM of the previous two: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13, and 8+13=21. These are the Virahanka–Fibonacci numbers, first described by the Indian scholar Virahanka.",
      },
      body:
        "Not every pattern adds a fixed amount. In the **Virahanka–Fibonacci** sequence each term is the sum of the two before it:\n\n`1, 1, 2, 3, 5, 8, 13, 21, 34, …`\n\nThe jumps themselves keep changing, so you find the next term by *adding the last two* rather than adding a constant.\n\n**Shape (geometric) patterns** grow too. If a pattern of matchsticks adds the same number of sticks at each stage, the count is a sequence with a common difference — and you can find a rule for the nth shape.",
      keyPoints: [
        "Virahanka–Fibonacci: next = sum of previous two.",
        "1, 1, 2, 3, 5, 8, 13, 21, 34…",
        "Growing-shape counts often form a sequence — find its rule.",
        "Always check the rule against the next known term.",
      ],
      whyItWorks:
        "For a growing shape, work out how many pieces are added at each stage (the common difference) and how many you started with. Then nth count = start + (n − 1)×(added each time) — the same rule as any constant-jump sequence.",
      strategies: ["Find a pattern", "Look at differences", "Work backwards"],
      thinkDeeper:
        "Add up the first few Virahanka–Fibonacci numbers: 1+1+2+3+5 = 12. Compare that to a term further along the sequence. Spot anything?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is the common difference of a sequence?", back: "The fixed amount added to get from each term to the next, e.g. 3 in 2, 5, 8, 11…" },
      { front: "nth term of a constant-jump sequence?", back: "a + (n − 1)×d, where a is the first term and d is the common difference." },
      { front: "What is the nth triangular number?", back: "Tn = n×(n+1)÷2 → 1, 3, 6, 10, 15…" },
      { front: "Sum of the first n odd numbers?", back: "n² (the nth square number). 1+3+5+7 = 16 = 4²." },
      { front: "What are the cube numbers?", back: "n³ → 1, 8, 27, 64, 125…" },
      { front: "How does the Virahanka–Fibonacci sequence grow?", back: "Each term is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13…" },
    ],
    formulae: [
      { name: "nth term (constant difference)", rule: "a + (n − 1)×d" },
      { name: "Triangular number", rule: "Tn = n(n+1)/2" },
      { name: "Square number", rule: "n²" },
      { name: "Cube number", rule: "n³" },
      { name: "Sum of first n odd numbers", rule: "1 + 3 + … + (2n − 1) = n²" },
      { name: "Virahanka–Fibonacci", rule: "F(n) = F(n−1) + F(n−2)" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "pat-mcq-q01",
        question: "What number comes next in the pattern 3, 6, 9, 12, … ?",
        options: ["13", "14", "15", "16"],
        answerIndex: 2,
        explanation: "The sequence goes up by 3 each time, so after 12 comes 15.",
        guideRef: "Sequences and the rule behind them",
        difficulty: "warmup",
        strategy: "Find a pattern",
      },
      {
        id: "pat-mcq-q02",
        question: "What is the common difference in the sequence 7, 11, 15, 19, … ?",
        options: ["3", "4", "5", "7"],
        answerIndex: 1,
        explanation: "Each term is 4 more than the one before (11 − 7 = 4), so the common difference is 4.",
        guideRef: "Sequences and the rule behind them",
        difficulty: "warmup",
        strategy: "Look at differences",
      },
      {
        id: "pat-mcq-q03",
        question: "Which of these is a square number?",
        options: ["18", "24", "36", "40"],
        answerIndex: 2,
        explanation: "36 = 6×6 = 6², so it is a square number. The others are not perfect squares.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "warmup",
      },
      {
        id: "pat-mcq-q04",
        question: "What is the next triangular number after 1, 3, 6, 10, … ?",
        options: ["13", "14", "15", "16"],
        answerIndex: 2,
        explanation: "Triangular numbers add 1, 2, 3, 4, 5… in turn. After 10 you add 5, giving 15.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "warmup",
      },
      {
        id: "pat-mcq-q05",
        question: "Which sequence is made by adding the two previous terms each time?",
        options: ["2, 4, 6, 8, 10", "1, 1, 2, 3, 5", "1, 4, 9, 16, 25", "5, 10, 20, 40, 80"],
        answerIndex: 1,
        explanation: "1, 1, 2, 3, 5 is the Virahanka–Fibonacci sequence: each term is the sum of the two before it.",
        guideRef: "The Virahanka–Fibonacci numbers and growing shapes",
        difficulty: "warmup",
      },
      {
        id: "pat-mcq-q06",
        question: "What is the next cube number after 1, 8, 27, … ?",
        options: ["36", "48", "64", "81"],
        answerIndex: 2,
        explanation: "Cube numbers are n³. After 3³ = 27 comes 4³ = 64.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "warmup",
      },
      {
        id: "pat-mcq-q07",
        question: "The nth term of a sequence is 2 + (n − 1)×5. What is the 4th term?",
        options: ["12", "15", "17", "22"],
        answerIndex: 2,
        explanation: "Put n = 4: 2 + (4 − 1)×5 = 2 + 15 = 17.",
        guideRef: "Sequences and the rule behind them",
        difficulty: "core",
        hints: [
          "Substitute n = 4 into the rule.",
          "First work out (4 − 1)×5.",
          "Then add 2.",
        ],
        strategy: "Find a pattern",
      },
      {
        id: "pat-mcq-q08",
        question: "What is the sum 1 + 3 + 5 + 7 + 9 ?",
        options: ["20", "25", "27", "30"],
        answerIndex: 1,
        explanation: "It is the sum of the first 5 odd numbers, which equals 5² = 25.",
        guideRef: "Why odd numbers add up to squares",
        difficulty: "core",
        hints: [
          "How many odd numbers are being added?",
          "The sum of the first n odd numbers is n².",
          "Here n = 5, so the answer is 5².",
        ],
        strategy: "Look for invariants",
      },
      {
        id: "pat-mcq-q09",
        question: "Which number is BOTH a square number and appears in 1, 4, 9, 16, … as the 5th term?",
        options: ["20", "25", "30", "36"],
        answerIndex: 1,
        explanation: "The 5th square number is 5² = 25.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "core",
        hints: ["The list is the square numbers.", "Find the 5th one.", "5² = ?"],
        strategy: "Find a pattern",
      },
      {
        id: "pat-mcq-q10",
        question: "In the sequence 5, 8, 11, 14, …, what is the 10th term?",
        options: ["29", "32", "35", "38"],
        answerIndex: 1,
        explanation: "Start 5, common difference 3. 10th term = 5 + (10 − 1)×3 = 5 + 27 = 32.",
        guideRef: "Sequences and the rule behind them",
        difficulty: "core",
        hints: [
          "Find the common difference.",
          "Use a + (n − 1)×d with a = 5, d = 3, n = 10.",
          "5 + 9×3 = ?",
        ],
        strategy: "Find a pattern",
      },
      {
        id: "pat-mcq-q11",
        question: "What comes next: 1, 4, 9, 16, 25, … ?",
        options: ["30", "34", "36", "40"],
        answerIndex: 2,
        explanation: "These are square numbers; after 5² = 25 comes 6² = 36.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "core",
        hints: ["Look at the gaps: 3, 5, 7, 9…", "They increase by 2 each time.", "Or note they are 1², 2², 3², … so next is 6²."],
        strategy: "Look at differences",
      },
      {
        id: "pat-mcq-q12",
        question: "The 6th term of the Virahanka–Fibonacci sequence 1, 1, 2, 3, 5, … is:",
        options: ["6", "7", "8", "9"],
        answerIndex: 2,
        explanation: "Add the last two: 3 + 5 = 8, so the 6th term is 8.",
        guideRef: "The Virahanka–Fibonacci numbers and growing shapes",
        difficulty: "core",
        hints: ["Each term is the sum of the previous two.", "The 4th and 5th terms are 3 and 5.", "3 + 5 = ?"],
        strategy: "Find a pattern",
      },
      {
        id: "pat-mcq-q13",
        question: "A matchstick pattern uses 4 sticks for 1 square, 7 for 2 squares, 10 for 3 squares. How many for 5 squares?",
        options: ["13", "16", "19", "20"],
        answerIndex: 1,
        explanation: "Each extra square adds 3 sticks: 4, 7, 10, 13, 16. So 5 squares need 16 sticks. (Rule: 3n + 1.)",
        guideRef: "The Virahanka–Fibonacci numbers and growing shapes",
        difficulty: "core",
        hints: [
          "How many sticks are added for each new square?",
          "Start 4, then add 3 each time.",
          "4, 7, 10, 13, 16 — count to 5 squares.",
        ],
        strategy: "Look at differences",
      },
      {
        id: "pat-mcq-q14",
        question: "Which row sum in a number grid is being shown: 11 + 12 + 13 + 14 + 15 = ?",
        options: ["63", "65", "67", "70"],
        answerIndex: 1,
        explanation: "The five numbers average 13 (the middle one), and 5×13 = 65.",
        guideRef: "Sequences and the rule behind them",
        difficulty: "core",
        hints: ["The numbers are evenly spaced.", "The average is the middle number, 13.", "Sum = 5 × 13."],
        strategy: "Use symmetry",
      },
      {
        id: "pat-mcq-q15",
        question: "What is the 10th triangular number (1, 3, 6, 10, …)?",
        options: ["45", "50", "55", "60"],
        answerIndex: 2,
        explanation: "T10 = 10×11÷2 = 55.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "core",
        hints: ["Use Tn = n(n+1)/2.", "Put n = 10.", "10 × 11 ÷ 2 = ?"],
        strategy: "Find a pattern",
      },
      {
        id: "pat-mcq-q16",
        question: "The sum of the first n odd numbers is 49. What is n?",
        options: ["5", "6", "7", "8"],
        answerIndex: 2,
        explanation: "The sum is n², so n² = 49 means n = 7.",
        guideRef: "Why odd numbers add up to squares",
        difficulty: "challenge",
        hints: [
          "The sum of the first n odd numbers equals n².",
          "So you need n² = 49.",
          "What number squared is 49?",
        ],
        strategy: "Work backwards",
      },
      {
        id: "pat-mcq-q17",
        question: "Adding two neighbouring triangular numbers, 6 + 10, gives:",
        options: ["A triangular number", "A square number", "A cube number", "A prime number"],
        answerIndex: 1,
        explanation: "6 + 10 = 16 = 4². Two consecutive triangular numbers always add to a square number.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "challenge",
        hints: [
          "Work out 6 + 10 first.",
          "Is 16 a special kind of number?",
          "16 = 4×4 — it is a perfect square.",
        ],
        strategy: "Try small cases",
      },
      {
        id: "pat-mcq-q18",
        question: "In a calendar, you frame any 3 across × 3 down block of 9 dates. The sum of all 9 numbers equals 9 times which date?",
        options: ["The top-left date", "The centre date", "The bottom-right date", "The smallest date"],
        answerIndex: 1,
        explanation: "The block is symmetric about its centre: numbers pair up around the middle, so the total is 9 × (centre date).",
        guideRef: "Sequences and the rule behind them",
        difficulty: "challenge",
        hints: [
          "Try a real 3×3 block of dates and add them.",
          "Pair the date before the centre with the one after it.",
          "Each pair averages the centre, and there are 9 numbers.",
        ],
        strategy: "Use symmetry",
      },
      {
        id: "pat-mcq-q19",
        question: "A shape pattern follows the rule 3n + 1 tiles for shape n. Which shape number uses 31 tiles?",
        options: ["9", "10", "11", "12"],
        answerIndex: 1,
        explanation: "Solve 3n + 1 = 31 → 3n = 30 → n = 10.",
        guideRef: "The Virahanka–Fibonacci numbers and growing shapes",
        difficulty: "challenge",
        hints: [
          "Set the rule equal to 31.",
          "3n + 1 = 31, so 3n = 30.",
          "Divide by 3.",
        ],
        strategy: "Work backwards",
      },
      {
        id: "pat-mcq-q20",
        question: "Which number is a triangular number, a square number, and appears below 50?",
        options: ["28", "36", "45", "49"],
        answerIndex: 1,
        explanation: "36 = 6² is square, and 36 = 8×9÷2 = T8 is triangular too. It is the only such number below 50 (after 1).",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "challenge",
        hints: [
          "List triangular numbers up to 50: 1, 3, 6, 10, 15, 21, 28, 36, 45.",
          "List square numbers up to 50: 1, 4, 9, 16, 25, 36, 49.",
          "Which appears in BOTH lists (other than 1)?",
        ],
        strategy: "Try small cases",
      },
    ],
    qa: [
      {
        id: "pat-qa-q01",
        question: "Write the next three terms of the sequence 4, 9, 14, 19, … and state the common difference.",
        modelAnswer:
          "The sequence goes up by 5 each time, so the common difference is 5. The next three terms are 24, 29 and 34.",
        markScheme: [
          "common difference 5 | adds 5",
          "next terms 24, 29, 34",
        ],
        commonError: "Misreading the gap (e.g. saying 4 instead of 5) by subtracting the wrong pair.",
        guideRef: "Sequences and the rule behind them",
        difficulty: "core",
        hints: ["Subtract a term from the next one.", "Keep adding that amount."],
        strategy: "Look at differences",
      },
      {
        id: "pat-qa-q02",
        question: "Find the 20th triangular number. Show your method.",
        modelAnswer:
          "Use Tn = n(n+1)/2 with n = 20: T20 = 20×21÷2 = 420÷2 = 210.",
        markScheme: [
          "use Tn = n(n+1)/2 | 20×21/2",
          "20×21 = 420",
          "210",
        ],
        commonError: "Forgetting to divide by 2 and giving 420.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "core",
        numericAnswer: 210,
        hints: ["Use the triangular-number rule.", "Put n = 20.", "20 × 21 ÷ 2 = ?"],
        solutions: [
          {
            label: "Formula",
            steps: ["Tn = n(n+1)/2.", "T20 = 20×21÷2.", "= 420÷2 = 210."],
          },
          {
            label: "Pairing trick",
            steps: [
              "Add 1+2+…+20 by pairing ends: 1+20, 2+19, … each pair = 21.",
              "There are 10 such pairs.",
              "10 × 21 = 210.",
            ],
          },
        ],
      },
      {
        id: "pat-qa-q03",
        question: "Explain why 1 + 3 + 5 + 7 + 9 + 11 equals a square number, and say which square.",
        modelAnswer:
          "This is the sum of the first 6 odd numbers. The sum of the first n odd numbers is always n², because each new odd number is an L-shaped layer that grows a square into the next bigger square. So the total is 6² = 36.",
        markScheme: [
          "sum of first n odd numbers = n²",
          "n = 6 | six odd numbers",
          "36",
        ],
        commonError: "Adding wrongly, or thinking the answer is 6 rather than 6².",
        guideRef: "Why odd numbers add up to squares",
        difficulty: "core",
        numericAnswer: 36,
        hints: ["Count how many odd numbers there are.", "The sum of the first n odd numbers is n².", "Here n = 6."],
        solutions: [
          {
            label: "Rule",
            steps: ["There are 6 odd numbers.", "Sum of first n odds = n².", "6² = 36."],
          },
          {
            label: "Picture",
            steps: [
              "Each odd number is an L-layer added to a square.",
              "Six layers build a 6×6 square of dots.",
              "6×6 = 36.",
            ],
          },
        ],
      },
      {
        id: "pat-qa-q04",
        question: "Write the first eight Virahanka–Fibonacci numbers starting 1, 1, and explain the rule you used.",
        modelAnswer:
          "Each term is the sum of the two before it. Starting 1, 1: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13. So the first eight terms are 1, 1, 2, 3, 5, 8, 13, 21.",
        markScheme: [
          "rule: add previous two | sum of two before",
          "1, 1, 2, 3, 5, 8, 13, 21",
        ],
        commonError: "Treating it as a constant-difference sequence and adding the same number each time.",
        guideRef: "The Virahanka–Fibonacci numbers and growing shapes",
        difficulty: "core",
        hints: ["The rule is not 'add a fixed amount'.", "Add the two most recent terms to get the next."],
        strategy: "Find a pattern",
      },
      {
        id: "pat-qa-q05",
        question: "A tiling pattern uses 5 tiles for stage 1, 9 for stage 2, 13 for stage 3. Find a rule for stage n, then find the stage that uses 41 tiles.",
        modelAnswer:
          "Each stage adds 4 tiles, and stage 1 uses 5, so stage n uses 5 + (n − 1)×4 = 4n + 1. Setting 4n + 1 = 41 gives 4n = 40, so n = 10. Stage 10 uses 41 tiles.",
        markScheme: [
          "common difference 4 | adds 4",
          "rule 4n + 1 | 5 + (n−1)×4",
          "n = 10",
        ],
        commonError: "Writing the rule as 4n (forgetting the +1), which gives the wrong stage.",
        guideRef: "The Virahanka–Fibonacci numbers and growing shapes",
        difficulty: "core",
        numericAnswer: 10,
        hints: ["Find how many tiles are added each stage.", "Build the rule: start + (n−1)×difference.", "Then set the rule equal to 41 and solve."],
        strategy: "Work backwards",
        solutions: [
          {
            label: "Find the rule, then solve",
            steps: [
              "Differences are 4, so rule = 5 + (n−1)×4 = 4n + 1.",
              "Set 4n + 1 = 41.",
              "4n = 40, n = 10.",
            ],
          },
          {
            label: "Count up",
            steps: ["5, 9, 13, 17, 21, 25, 29, 33, 37, 41.", "Count the terms: 41 is the 10th.", "So stage 10."],
          },
        ],
      },
      {
        id: "pat-qa-q06",
        question: "Challenge: How many dots are in the 100th triangular pattern? Explain the clever shortcut.",
        modelAnswer:
          "The 100th triangular number is 1+2+…+100. Pair the ends: 1+100, 2+99, 3+98, … each pair sums to 101, and there are 50 such pairs, giving 50×101 = 5050. (Equivalently, Tn = n(n+1)/2 = 100×101÷2 = 5050.)",
        markScheme: [
          "pair the numbers | use n(n+1)/2",
          "100×101 = 10100 | 50 pairs of 101",
          "5050",
        ],
        commonError: "Multiplying 100×101 but forgetting to halve, giving 10100.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "challenge",
        numericAnswer: 5050,
        strategy: "Use symmetry",
        hints: [
          "You need 1 + 2 + 3 + … + 100.",
          "Pair the smallest with the largest: 1+100, 2+99, …",
          "Each pair makes 101; how many pairs are there?",
        ],
        solutions: [
          {
            label: "Gauss pairing",
            steps: [
              "Pair 1+100, 2+99, … = 101 each.",
              "100 numbers make 50 pairs.",
              "50 × 101 = 5050.",
            ],
          },
          {
            label: "Formula",
            steps: ["Tn = n(n+1)/2.", "T100 = 100×101÷2.", "= 10100 ÷ 2 = 5050."],
          },
        ],
      },
      {
        id: "pat-qa-q07",
        question: "Challenge: Pick any four numbers in a row from a number line, such as 7, 8, 9, 10. Add the first and last, then the middle two. What do you notice, and will it ALWAYS be true? Explain.",
        modelAnswer:
          "First + last = 7 + 10 = 17, and the middle two = 8 + 9 = 17 — they are equal. This is always true for four consecutive numbers. If the numbers are a, a+1, a+2, a+3, then first+last = a + (a+3) = 2a+3, and middle two = (a+1)+(a+2) = 2a+3. The two sums are identical, so it holds for every starting number — an invariant.",
        markScheme: [
          "both sums equal | 17 and 17",
          "always true | invariant",
          "first+last = 2a+3 = middle two | algebra or worded reason",
        ],
        commonError: "Checking one case and assuming it works, without explaining WHY it must always hold.",
        guideRef: "Sequences and the rule behind them",
        difficulty: "challenge",
        strategy: "Look for invariants",
        hints: [
          "Work out both sums for 7, 8, 9, 10.",
          "Try another four-in-a-row to test it.",
          "Call the first number a and write the four numbers as a, a+1, a+2, a+3.",
        ],
        solutions: [
          {
            label: "Algebra",
            steps: [
              "Let the numbers be a, a+1, a+2, a+3.",
              "First + last = a + (a+3) = 2a+3.",
              "Middle two = (a+1)+(a+2) = 2a+3 — equal, so always true.",
            ],
          },
          {
            label: "Pairing picture",
            steps: [
              "Going inward, the last drops as much as the first rises to meet the middle pair.",
              "So shifting from the ends to the middle keeps the sum unchanged.",
              "The two sums must match for any starting number.",
            ],
          },
        ],
      },
      {
        id: "pat-qa-q08",
        question: "Challenge: A pattern of squares has 1 square in row 1, 3 in row 2, 5 in row 3, and so on. How many squares are in the whole figure after 8 rows? Give the quickest reason.",
        modelAnswer:
          "Each row holds the next odd number: 1, 3, 5, …, 15. The total of the first 8 odd numbers is 8² = 64, because summing the first n odd numbers always gives n². So there are 64 squares.",
        markScheme: [
          "rows are odd numbers 1,3,5,…,15",
          "sum of first n odd numbers = n²",
          "8² = 64",
        ],
        commonError: "Adding the odd numbers one by one and slipping, instead of using the n² shortcut.",
        guideRef: "Why odd numbers add up to squares",
        difficulty: "challenge",
        numericAnswer: 64,
        strategy: "Look for invariants",
        hints: [
          "What numbers are in each row?",
          "You are adding the first 8 odd numbers.",
          "Sum of first n odd numbers = n².",
        ],
        solutions: [
          {
            label: "Odd-number shortcut",
            steps: [
              "Rows: 1, 3, 5, 7, 9, 11, 13, 15.",
              "Sum of first 8 odds = 8².",
              "8² = 64.",
            ],
          },
        ],
      },
      {
        id: "pat-qa-q09",
        question: "The nth term of a sequence is 6n − 1. Which term equals 89, and what is the 12th term?",
        modelAnswer:
          "Set 6n − 1 = 89 → 6n = 90 → n = 15, so 89 is the 15th term. The 12th term is 6×12 − 1 = 72 − 1 = 71.",
        markScheme: [
          "6n − 1 = 89 → n = 15",
          "12th term = 6×12 − 1",
          "71",
        ],
        commonError: "Forgetting the −1, e.g. solving 6n = 89 or giving the 12th term as 72.",
        guideRef: "Sequences and the rule behind them",
        difficulty: "core",
        numericAnswer: 71,
        strategy: "Work backwards",
        hints: ["For the first part, set 6n − 1 = 89 and solve.", "For the second, substitute n = 12.", "6×12 − 1 = ?"],
      },
      {
        id: "pat-qa-q10",
        question: "Challenge: Look at 1, 8, 27, 64, … . What kind of numbers are these? Now add the first three together (1 + 8 + 27). What familiar number do you get, and what is the surprising connection?",
        modelAnswer:
          "These are cube numbers: 1³, 2³, 3³, 4³. Adding the first three cubes: 1 + 8 + 27 = 36, which is 6². And 6 = 1 + 2 + 3 = T3, the 3rd triangular number. In general, the sum of the first n cubes equals the square of the nth triangular number — a beautiful link between cubes, squares and triangular numbers.",
        markScheme: [
          "cube numbers | n³",
          "1 + 8 + 27 = 36 = 6²",
          "6 is the 3rd triangular number | sum of cubes = (Tn)²",
        ],
        commonError: "Recognising 36 as a square but missing that 6 is itself the triangular number 1+2+3.",
        guideRef: "Triangular, square and cube numbers",
        difficulty: "challenge",
        numericAnswer: 36,
        strategy: "Find a pattern",
        hints: [
          "What is each number to a power? 1=1³, 8=2³…",
          "Add 1 + 8 + 27.",
          "36 = 6²; where have you seen 6 = 1+2+3 before?",
        ],
        solutions: [
          {
            label: "Spot the connection",
            steps: [
              "1, 8, 27, 64 are the cubes 1³, 2³, 3³, 4³.",
              "1 + 8 + 27 = 36 = 6².",
              "6 = 1+2+3 = T3, so sum of first 3 cubes = (T3)².",
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
patterns.questionBank.mcqPapers = [
  { id: "pat-mcq-paper-1", title: "Patterns — MCQ Set A", questions: patterns.quiz.mcq.slice(0, 10) },
  { id: "pat-mcq-paper-2", title: "Patterns — MCQ Set B", questions: patterns.quiz.mcq.slice(10) },
];
patterns.questionBank.qaPapers = [
  { id: "pat-qa-paper-1", title: "Patterns — Written Practice A", questions: patterns.quiz.qa.slice(0, 5) },
  { id: "pat-qa-paper-2", title: "Patterns — Written Practice B", questions: patterns.quiz.qa.slice(5) },
];

export default patterns;
