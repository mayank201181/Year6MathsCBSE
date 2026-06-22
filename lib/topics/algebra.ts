import type { Topic } from "../types";

// Algebra topic for CBSE Class 6 (NCERT Ch. 11). AoPS-flavoured: discovery
// openers from matchstick/dot patterns, deriving why a variable captures "any
// number", forming and solving equations, and working-backwards puzzles.

const algebra: Topic = {
  id: "algebra",
  title: "Algebra",
  subject: "Maths",
  chapter: "NCERT Ch. 11 (Algebra)",
  icon: "✨",
  color: "#a855f7",
  intro:
    "Algebra begins the moment you let a single letter stand for 'any number'. That one idea lets you describe a whole growing pattern in one short rule, capture a word problem as an equation, and then solve it — sometimes by working cleverly backwards. It turns 'guess and check' into real power.",
  guide: [
    {
      heading: "A letter for any number: the idea of a variable",
      discovery: {
        problem:
          "You build squares in a row out of matchsticks. 1 square needs 4 sticks. 2 squares (sharing a side) need 7. 3 squares need 10. How many sticks for 10 squares — without drawing all of them?",
        idea:
          "Each new square adds 3 sticks to a starting 1. For n squares you need 3n + 1 sticks. The letter n stands for ANY number of squares, so one rule answers every case at once.",
      },
      body:
        "A **variable** is a letter (like *n*, *x* or *a*) that stands for a number we don't fix in advance — it can be *any* number. We use variables to write a single rule that works for a whole family of cases.\n\nFor the matchstick squares, instead of saying '4 sticks, then 7, then 10…', we say the count is **3n + 1**, where *n* is the number of squares. Put in n = 10 and you get 3×10 + 1 = **31** sticks.\n\nA variable is not 'the answer' — it is a placeholder. The same letter keeps the same value within one problem.",
      keyPoints: [
        "A variable is a letter standing for a number that can vary.",
        "It lets one rule describe every case in a pattern.",
        "Within a single problem, the same letter means the same number.",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matchstick squares growing: one square of four sticks, two squares of seven sticks, three squares of ten sticks"><text x="10" y="18" font-size="12" fill="#334155">1 square: 4 sticks</text><rect x="15" y="28" width="40" height="40" fill="none" stroke="#a855f7" stroke-width="3"/><text x="120" y="18" font-size="12" fill="#334155">2 squares: 7</text><rect x="120" y="28" width="40" height="40" fill="none" stroke="#a855f7" stroke-width="3"/><rect x="160" y="28" width="40" height="40" fill="none" stroke="#a855f7" stroke-width="3"/><text x="250" y="18" font-size="12" fill="#334155">3 squares: 10</text><rect x="250" y="28" width="34" height="40" fill="none" stroke="#a855f7" stroke-width="3"/><rect x="284" y="28" width="34" height="40" fill="none" stroke="#a855f7" stroke-width="3"/><rect x="318" y="28" width="34" height="40" fill="none" stroke="#a855f7" stroke-width="3"/><text x="10" y="98" font-size="13" fill="#7c3aed">Rule: sticks = 3n + 1</text></svg>',
      ],
      whyItWorks:
        "The first square costs 4 sticks. Every square after it shares one side with the square before, so it only adds 3 new sticks. After the first, there are (n − 1) extra squares, giving 4 + 3(n − 1) = 3n + 1. Counting the shared sides is what turns the picture into the rule.",
      strategies: ["Find a pattern", "Introduce a variable"],
    },
    {
      heading: "Writing and reading expressions",
      discovery: {
        problem:
          "A pencil costs ₹n. A pen costs ₹5 more than a pencil. A box holds 3 pens. Write the cost of one pen, and the cost of a full box, using n.",
        idea:
          "One pen costs n + 5. A box of 3 pens costs 3 × (n + 5) = 3(n + 5). Words like 'more than', 'times' and 'each' translate straight into + , × and brackets.",
      },
      body:
        "An **expression** is a variable combined with numbers using +, −, × or ÷. Some common translations:\n\n- *n times a number* → **2n** means 2 × n\n- *5 more than n* → **n + 5**\n- *3 less than twice n* → **2n − 3**\n- *n shared among 4* → **n ÷ 4** or n/4\n\nWe write **2n** with no multiplication sign — a number stuck to a letter always means 'multiply'. An expression has no equals sign; it is just a recipe waiting for a value of the variable.",
      keyPoints: [
        "2n means 2 × n; the number in front is the coefficient.",
        "'More than' → add; 'less than' → subtract; 'times'/'of' → multiply.",
        "An expression has no '=' — it describes a quantity, it doesn't yet make a claim.",
      ],
      whyItWorks:
        "Each word in a situation is a small instruction. 'Twice' says multiply by 2, 'more than' says add. Writing them in order builds an expression that matches the story exactly, so any value of n you choose gives the right total.",
      strategies: ["Introduce a variable", "Translate words to symbols"],
      thinkDeeper:
        "Is 2n + 3 the same as 2(n + 3)? Try n = 1 and n = 5 to decide. What is each one really saying about the order of operations?",
    },
    {
      heading: "Evaluating expressions for a value",
      body:
        "To **evaluate** an expression, replace the variable with a given number and work out the answer, following the usual order of operations (do × and ÷ before + and −).\n\nExample: evaluate **3n − 1** when n = 4. Replace n by 4: 3×4 − 1 = 12 − 1 = **11**.\n\nBe careful: 3n means 3 × n, so substitute *before* you multiply. For n = 4, 3n = 12, not 34.",
      keyPoints: [
        "Substitute the value for every copy of the variable.",
        "Multiply/divide before you add/subtract.",
        "3n with n = 4 is 12, never '34'.",
      ],
      diagrams: [
        '<svg viewBox="0 0 340 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Substituting n equals 4 into the expression 3n minus 1 to get 11"><text x="10" y="35" font-size="18" fill="#334155">3n - 1</text><text x="95" y="35" font-size="13" fill="#7c3aed">put n = 4</text><text x="10" y="70" font-size="18" fill="#334155">3 x 4 - 1 = 12 - 1 = 11</text></svg>',
      ],
      whyItWorks:
        "A variable is just a stand-in for a number. Substituting the value undoes the 'placeholder' and turns the recipe into an ordinary arithmetic sum, which has one definite answer.",
      strategies: ["Substitute carefully", "Mind the order of operations"],
    },
    {
      heading: "Equations and finding the solution",
      discovery: {
        problem:
          "I think of a number, multiply it by 3, then add 2, and get 17. A balance scale shows 3 boxes plus a 2-gram weight balancing a 17-gram weight. What is in each box?",
        idea:
          "The story is the equation 3x + 2 = 17. The scale stays level if you do the same thing to both sides. Remove 2 grams from each side (3x = 15), then split each side into 3 equal groups (x = 5). The solution is the value that makes both sides equal.",
      },
      body:
        "An **equation** has an equals sign: it claims two expressions are equal, e.g. **3x + 2 = 17**. The **solution** is the value of the variable that makes the claim true.\n\nThree honest ways to solve a simple equation:\n\n- **By inspection / trial:** try sensible numbers until both sides match.\n- **Working backwards:** undo the operations in reverse order (here: subtract 2, then divide by 3).\n- **Balance method:** do the same operation to both sides to keep it balanced.\n\nFor 3x + 2 = 17: subtract 2 (→ 3x = 15), divide by 3 (→ x = 5). Check: 3×5 + 2 = 17. ✓",
      keyPoints: [
        "An equation makes a claim (has '='); a solution makes that claim true.",
        "Working backwards: undo +/− first reversed, then ×/÷.",
        "Balance method: whatever you do to one side, do to the other.",
        "Always check by substituting your answer back in.",
      ],
      diagrams: [
        '<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A balance scale with three boxes and a 2 gram weight on the left balancing a 17 gram weight on the right"><line x1="170" y1="20" x2="170" y2="95" stroke="#334155" stroke-width="3"/><line x1="60" y1="40" x2="280" y2="40" stroke="#334155" stroke-width="3"/><line x1="150" y1="95" x2="190" y2="95" stroke="#334155" stroke-width="3"/><rect x="55" y="50" width="18" height="18" fill="#a855f7"/><rect x="78" y="50" width="18" height="18" fill="#a855f7"/><rect x="101" y="50" width="18" height="18" fill="#a855f7"/><circle cx="135" cy="59" r="9" fill="#fbbf24"/><text x="128" y="63" font-size="10" fill="#334155">2</text><circle cx="245" cy="57" r="14" fill="#34d399"/><text x="235" y="61" font-size="11" fill="#334155">17</text><text x="40" y="120" font-size="13" fill="#7c3aed">3x + 2 = 17,  so  x = 5</text></svg>',
      ],
      whyItWorks:
        "A balance only stays level when both pans hold the same amount. Adding or removing the same weight from both pans, or splitting both pans into the same number of equal groups, keeps them equal — which is exactly the rule for keeping an equation true.",
      strategies: ["Work backwards", "Use the balance idea", "Check by substitution"],
      thinkDeeper:
        "Solving by trial and by working backwards give the same answer. When is trial faster, and when does working backwards win?",
    },
    {
      heading: "Using rules and formulae",
      body:
        "A **formula** is an expression that captures a general rule, ready to use again and again. You evaluate it by substituting the values you know.\n\n- Perimeter of a square of side *s*: **P = 4s**.\n- Perimeter of a rectangle, length *l* and breadth *b*: **P = 2(l + b)**.\n- Total cost of *n* items at ₹*p* each: **C = np**.\n\nExample: a square of side 6 cm has perimeter P = 4 × 6 = **24 cm**.\n\nA formula is just a trustworthy expression — the algebra you have learned is what makes it work for *any* size.",
      keyPoints: [
        "A formula is a reusable rule written as an expression.",
        "Square perimeter P = 4s; rectangle P = 2(l + b).",
        "Substitute known values, then evaluate.",
      ],
      whyItWorks:
        "A square has 4 equal sides, so its perimeter is s + s + s + s = 4s. Writing it once as 4s means we never have to re-derive it — the variable carries the 'any side length' for us.",
      strategies: ["Use a formula", "Substitute carefully"],
    },
  ],
  learn: {
    flashcards: [
      { front: "What is a variable?", back: "A letter that stands for a number which can be anything; it lets one rule describe many cases." },
      { front: "What does 2n mean?", back: "2 × n. The number in front of a letter (the coefficient) always means multiply." },
      { front: "Evaluate 3n − 1 when n = 4.", back: "3×4 − 1 = 12 − 1 = 11. Substitute first, then follow order of operations." },
      { front: "What is the difference between an expression and an equation?", back: "An expression (like 2n + 3) has no '='; an equation (like 2n + 3 = 11) claims two sides are equal." },
      { front: "What is the solution of an equation?", back: "The value of the variable that makes both sides equal. Always check by substituting it back." },
      { front: "How do you solve by working backwards?", back: "Undo the operations in reverse order — e.g. for 3x + 2 = 17, subtract 2 then divide by 3 to get x = 5." },
      { front: "Matchstick rule for n squares in a row?", back: "3n + 1 sticks: the first square is 4, each later square adds 3." },
    ],
    formulae: [
      { name: "Expression notation", rule: "2n means 2 × n; n + 5 means add 5 to n" },
      { name: "Evaluate", rule: "Replace the variable with its value, then use order of operations" },
      { name: "Square perimeter", rule: "P = 4s" },
      { name: "Rectangle perimeter", rule: "P = 2(l + b)" },
      { name: "Solve by balance", rule: "Do the same operation to both sides to keep the equation true" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "alg-mcq-q01",
        question: "In the expression 2n, what does the number 2 tell you to do with n?",
        options: ["Add 2 to n", "Multiply n by 2", "Subtract 2 from n", "Divide n by 2"],
        answerIndex: 1,
        explanation: "A number written in front of a letter means multiply, so 2n = 2 × n.",
        guideRef: "Writing and reading expressions",
        difficulty: "warmup",
      },
      {
        id: "alg-mcq-q02",
        question: "Which of these is a variable?",
        options: ["7", "+", "x", "="],
        answerIndex: 2,
        explanation: "x is a letter standing for a number, so it is a variable. The others are a number, an operation sign and an equals sign.",
        guideRef: "A letter for any number: the idea of a variable",
        difficulty: "warmup",
      },
      {
        id: "alg-mcq-q03",
        question: "How do you write 'five more than a number n' as an expression?",
        options: ["5n", "n − 5", "n + 5", "5 − n"],
        answerIndex: 2,
        explanation: "'More than' means add, so five more than n is n + 5.",
        guideRef: "Writing and reading expressions",
        difficulty: "warmup",
      },
      {
        id: "alg-mcq-q04",
        question: "What is the value of n + 5 when n = 3?",
        options: ["8", "53", "35", "2"],
        answerIndex: 0,
        explanation: "Substitute n = 3: 3 + 5 = 8.",
        guideRef: "Evaluating expressions for a value",
        difficulty: "warmup",
      },
      {
        id: "alg-mcq-q05",
        question: "Which of these is an equation (not just an expression)?",
        options: ["2n + 1", "3x − 4", "x + 7 = 10", "5a"],
        answerIndex: 2,
        explanation: "Only x + 7 = 10 has an equals sign, so it is an equation. The others are expressions.",
        guideRef: "Equations and finding the solution",
        difficulty: "warmup",
      },
      {
        id: "alg-mcq-q06",
        question: "A square has side s. Which formula gives its perimeter?",
        options: ["s + 4", "4s", "s²", "2s"],
        answerIndex: 1,
        explanation: "A square has 4 equal sides, so perimeter = s + s + s + s = 4s.",
        guideRef: "Using rules and formulae",
        difficulty: "warmup",
      },
      {
        id: "alg-mcq-q07",
        question: "Evaluate 3n − 1 when n = 4.",
        options: ["34", "11", "12", "7"],
        answerIndex: 1,
        explanation: "3n means 3 × 4 = 12, then 12 − 1 = 11.",
        guideRef: "Evaluating expressions for a value",
        difficulty: "core",
        hints: ["3n means 3 × n, not the digits stuck together.", "First work out 3 × 4.", "Then subtract 1 from 12."],
        strategy: "Substitute carefully",
      },
      {
        id: "alg-mcq-q08",
        question: "Matchstick squares in a row use 3n + 1 sticks for n squares. How many sticks for 5 squares?",
        options: ["15", "16", "20", "8"],
        answerIndex: 1,
        explanation: "3×5 + 1 = 15 + 1 = 16 sticks.",
        guideRef: "A letter for any number: the idea of a variable",
        difficulty: "core",
        hints: ["Substitute n = 5 into 3n + 1.", "Work out 3 × 5 first.", "Then add 1."],
        strategy: "Find a pattern",
      },
      {
        id: "alg-mcq-q09",
        question: "Solve x + 7 = 10.",
        options: ["x = 17", "x = 3", "x = 70", "x = 4"],
        answerIndex: 1,
        explanation: "Undo the +7 by subtracting 7 from both sides: x = 10 − 7 = 3.",
        guideRef: "Equations and finding the solution",
        difficulty: "core",
        hints: ["What number plus 7 makes 10?", "Subtract 7 from both sides.", "10 − 7 = 3."],
        strategy: "Work backwards",
      },
      {
        id: "alg-mcq-q10",
        question: "Solve 4x = 20.",
        options: ["x = 80", "x = 16", "x = 5", "x = 24"],
        answerIndex: 2,
        explanation: "4x means 4 × x. Divide both sides by 4: x = 20 ÷ 4 = 5.",
        guideRef: "Equations and finding the solution",
        difficulty: "core",
        hints: ["4x means 4 × x.", "Divide both sides by 4.", "20 ÷ 4 = 5."],
        strategy: "Work backwards",
      },
      {
        id: "alg-mcq-q11",
        question: "A pen costs ₹n and a notebook costs ₹3 more than the pen. Which expression gives the cost of the notebook?",
        options: ["3n", "n − 3", "n + 3", "n ÷ 3"],
        answerIndex: 2,
        explanation: "'₹3 more than the pen' means add 3 to n, giving n + 3.",
        guideRef: "Writing and reading expressions",
        difficulty: "core",
        hints: ["'More than' tells you to add.", "Start from the pen's cost, n.", "Add 3 to it."],
        strategy: "Translate words to symbols",
      },
      {
        id: "alg-mcq-q12",
        question: "A rectangle has length l and breadth b. Its perimeter is:",
        options: ["l + b", "lb", "2(l + b)", "4l"],
        answerIndex: 2,
        explanation: "Going round, you pass l + b + l + b = 2(l + b).",
        guideRef: "Using rules and formulae",
        difficulty: "core",
        hints: ["A rectangle has two lengths and two breadths.", "Add all four sides.", "l + b + l + b = 2(l + b)."],
        strategy: "Use a formula",
      },
      {
        id: "alg-mcq-q13",
        question: "Solve 3x + 2 = 17.",
        options: ["x = 5", "x = 19", "x = 6", "x = 45"],
        answerIndex: 0,
        explanation: "Subtract 2: 3x = 15. Divide by 3: x = 5. Check: 3×5 + 2 = 17. ✓",
        guideRef: "Equations and finding the solution",
        difficulty: "core",
        hints: ["Undo the +2 first by subtracting 2 from both sides.", "That leaves 3x = 15.", "Now divide both sides by 3."],
        strategy: "Work backwards",
      },
      {
        id: "alg-mcq-q14",
        question: "Which value of x makes x − 4 = 9 true?",
        options: ["x = 5", "x = 13", "x = 36", "x = 4"],
        answerIndex: 1,
        explanation: "Add 4 to both sides: x = 9 + 4 = 13. Check: 13 − 4 = 9. ✓",
        guideRef: "Equations and finding the solution",
        difficulty: "core",
        hints: ["The equation subtracts 4 from x.", "Undo it by adding 4 to both sides.", "9 + 4 = 13."],
        strategy: "Work backwards",
      },
      {
        id: "alg-mcq-q15",
        question: "A row of triangles needs 2n + 1 matchsticks for n triangles. How many triangles can you make with 15 sticks?",
        options: ["6", "7", "8", "15"],
        answerIndex: 1,
        explanation: "Set 2n + 1 = 15, so 2n = 14 and n = 7 triangles.",
        guideRef: "A letter for any number: the idea of a variable",
        difficulty: "core",
        hints: ["Write the rule as an equation equal to 15.", "2n + 1 = 15, so subtract 1.", "2n = 14, then divide by 2."],
        strategy: "Introduce a variable",
      },
      {
        id: "alg-mcq-q16",
        question: "I think of a number, double it, and subtract 3. The result is 11. What was the number?",
        options: ["4", "7", "8", "14"],
        answerIndex: 1,
        explanation: "If the number is x, then 2x − 3 = 11, so 2x = 14 and x = 7. Check: 2×7 − 3 = 11. ✓",
        guideRef: "Equations and finding the solution",
        difficulty: "challenge",
        hints: ["Call the number x and write the story as an equation.", "2x − 3 = 11.", "Add 3, then divide by 2."],
        strategy: "Work backwards",
      },
      {
        id: "alg-mcq-q17",
        question: "Riya is x years old. Her father is 4 times as old. In 5 years their ages add up to 55. How old is Riya now?",
        options: ["8", "9", "10", "11"],
        answerIndex: 1,
        explanation: "Now: x and 4x. In 5 years: (x + 5) + (4x + 5) = 55, so 5x + 10 = 55, 5x = 45, x = 9.",
        guideRef: "Equations and finding the solution",
        difficulty: "challenge",
        hints: ["Write both ages now using x.", "Add 5 to each for 'in 5 years', then set the sum to 55.", "5x + 10 = 55, so solve for x."],
        strategy: "Introduce a variable",
      },
      {
        id: "alg-mcq-q18",
        question: "A pattern uses 5n − 2 dots for figure n. Which figure has exactly 23 dots?",
        options: ["Figure 4", "Figure 5", "Figure 6", "Figure 23"],
        answerIndex: 1,
        explanation: "Set 5n − 2 = 23, so 5n = 25 and n = 5. Figure 5 has 23 dots.",
        guideRef: "A letter for any number: the idea of a variable",
        difficulty: "challenge",
        hints: ["Set the rule equal to 23.", "5n − 2 = 23, so add 2.", "5n = 25, then divide by 5."],
        strategy: "Find a pattern",
      },
      {
        id: "alg-mcq-q19",
        question: "A bag has ₹1 and ₹2 coins. There are 10 coins worth ₹17 in total. How many ₹2 coins are there?",
        options: ["3", "5", "7", "8"],
        answerIndex: 2,
        explanation: "Let there be t two-rupee coins, so (10 − t) one-rupee coins. Value: 2t + (10 − t) = 17, so t + 10 = 17, t = 7.",
        guideRef: "Equations and finding the solution",
        difficulty: "challenge",
        hints: ["If t coins are ₹2, then 10 − t are ₹1.", "Total value = 2t + (10 − t).", "Set it to 17 and solve t + 10 = 17."],
        strategy: "Introduce a variable",
      },
      {
        id: "alg-mcq-q20",
        question: "For which value of n is the expression 2n + 3 equal to the expression 5n − 6?",
        options: ["n = 1", "n = 2", "n = 3", "n = 9"],
        answerIndex: 2,
        explanation: "Set 2n + 3 = 5n − 6. Then 3 + 6 = 5n − 2n, so 9 = 3n and n = 3. Check: both give 9.",
        guideRef: "Equations and finding the solution",
        difficulty: "challenge",
        hints: ["Two expressions equal makes an equation.", "Get the n terms on one side: 5n − 2n = 3 + 6.", "3n = 9, so n = 3."],
        strategy: "Introduce a variable",
      },
    ],
    qa: [
      {
        id: "alg-qa-q01",
        question: "Explain what a variable is, and give one example of how a variable lets you describe a whole pattern with a single rule.",
        modelAnswer:
          "A variable is a letter that stands for a number which is not fixed — it can be any number. For example, in a row of squares made of matchsticks, n squares need 3n + 1 sticks. The letter n stands for any number of squares, so the single rule 3n + 1 tells you the count for 1 square, 100 squares, or any number, without drawing each case.",
        markScheme: [
          "variable = letter standing for a number | a number that can vary",
          "can be any number | not fixed",
          "an example of one rule covering many cases | e.g. 3n + 1 for matchstick squares",
        ],
        commonError: "Thinking a variable is one secret fixed number you must guess, rather than a placeholder for any number.",
        guideRef: "A letter for any number: the idea of a variable",
        difficulty: "core",
        hints: ["What kind of symbol is a variable?", "Why is it useful to use a letter instead of a number?"],
      },
      {
        id: "alg-qa-q02",
        question: "Evaluate the expression 4n + 3 when n = 6. Show your working.",
        modelAnswer:
          "Substitute n = 6: 4n + 3 = 4×6 + 3 = 24 + 3 = 27.",
        markScheme: [
          "substitute n = 6 | replace n with 6",
          "4 × 6 = 24 (multiply before adding)",
          "27",
        ],
        commonError: "Adding before multiplying, e.g. 6 + 3 = 9 then ×4, or reading 4n as the digits 46.",
        guideRef: "Evaluating expressions for a value",
        difficulty: "core",
        numericAnswer: 27,
        strategy: "Substitute carefully",
        hints: ["Replace n with 6 everywhere.", "Do the multiplication first.", "24 + 3 = ?"],
        solutions: [
          {
            label: "Substitution",
            steps: ["4n + 3 with n = 6.", "4 × 6 = 24.", "24 + 3 = 27."],
          },
        ],
      },
      {
        id: "alg-qa-q03",
        question: "A taxi charges ₹50 to start, plus ₹12 for each kilometre. Write an expression for the cost of a ride of k kilometres, then find the cost of a 7 km ride.",
        modelAnswer:
          "The cost is the fixed ₹50 plus ₹12 for each of the k kilometres: cost = 50 + 12k. For k = 7: 50 + 12×7 = 50 + 84 = ₹134.",
        markScheme: [
          "expression 50 + 12k | 12k + 50",
          "substitute k = 7",
          "134 | ₹134",
        ],
        commonError: "Forgetting the fixed ₹50, or writing 62k by adding 50 and 12 first.",
        guideRef: "Writing and reading expressions",
        difficulty: "core",
        numericAnswer: 134,
        strategy: "Translate words to symbols",
        hints: ["There is a fixed part and a per-kilometre part.", "Per-kilometre cost is 12 × k.", "Add the fixed ₹50, then put k = 7."],
        solutions: [
          {
            label: "Build then evaluate",
            steps: ["Fixed ₹50 + ₹12 per km → 50 + 12k.", "Put k = 7: 12 × 7 = 84.", "50 + 84 = ₹134."],
          },
        ],
      },
      {
        id: "alg-qa-q04",
        question: "Solve the equation 5x − 4 = 21. Show your steps and check your answer.",
        modelAnswer:
          "Add 4 to both sides: 5x = 25. Divide both sides by 5: x = 5. Check: 5×5 − 4 = 25 − 4 = 21. ✓",
        markScheme: [
          "add 4 to both sides | 5x = 25",
          "divide by 5 | x = 5",
          "check 5×5 − 4 = 21",
        ],
        commonError: "Dividing by 5 before undoing the −4, or only doing the operation to one side.",
        guideRef: "Equations and finding the solution",
        difficulty: "core",
        numericAnswer: 5,
        strategy: "Work backwards",
        hints: ["Undo the −4 first.", "5x = 25 after adding 4.", "Divide both sides by 5."],
        solutions: [
          {
            label: "Working backwards",
            steps: ["5x − 4 = 21.", "Add 4: 5x = 25.", "Divide by 5: x = 5.", "Check: 5×5 − 4 = 21. ✓"],
          },
          {
            label: "Trial / inspection",
            steps: ["Try x = 4: 5×4 − 4 = 16, too small.", "Try x = 5: 5×5 − 4 = 21. ✓", "So x = 5."],
          },
        ],
      },
      {
        id: "alg-qa-q05",
        question: "Look at the dot pattern: figure 1 has 4 dots, figure 2 has 7 dots, figure 3 has 10 dots. Find a rule in terms of n for the number of dots in figure n, and use it to find the dots in figure 8.",
        modelAnswer:
          "Each figure adds 3 dots, and figure 1 has 4 = 3×1 + 1. So the rule is 3n + 1. For n = 8: 3×8 + 1 = 25 dots.",
        markScheme: [
          "notices each step adds 3 | common difference 3",
          "rule 3n + 1",
          "figure 8 has 25 dots",
        ],
        commonError: "Writing the rule as 3n (forgetting the +1 start) or as 4n by using the first term as the multiplier.",
        guideRef: "A letter for any number: the idea of a variable",
        difficulty: "core",
        numericAnswer: 25,
        strategy: "Find a pattern",
        hints: ["By how much does the count grow each step?", "That growth is the number multiplying n.", "Adjust with a +1 so figure 1 gives 4."],
        solutions: [
          {
            label: "Difference method",
            steps: ["Differences: 4 → 7 → 10 grow by 3, so the rule is 3n + something.", "At n = 1, 3×1 = 3, but we need 4, so add 1 → 3n + 1.", "Figure 8: 3×8 + 1 = 25."],
          },
        ],
      },
      {
        id: "alg-qa-q06",
        question: "A square has side s. Write the formula for its perimeter, then find the side of a square whose perimeter is 36 cm.",
        modelAnswer:
          "Perimeter P = 4s. If P = 36, then 4s = 36, so s = 36 ÷ 4 = 9 cm.",
        markScheme: [
          "P = 4s",
          "4s = 36",
          "s = 9 | 9 cm",
        ],
        commonError: "Dividing 36 by 2 instead of 4, or treating it like a rectangle.",
        guideRef: "Using rules and formulae",
        difficulty: "core",
        numericAnswer: 9,
        strategy: "Use a formula",
        hints: ["Write the perimeter formula for a square.", "Set 4s equal to 36.", "Divide both sides by 4."],
        solutions: [
          {
            label: "Formula then solve",
            steps: ["P = 4s.", "4s = 36.", "s = 36 ÷ 4 = 9 cm."],
          },
        ],
      },
      {
        id: "alg-qa-q07",
        question: "Challenge: I think of a number. I multiply it by 3, then add 7, and the result is 28. Solve it two different ways — by working backwards and by trial — and say which you preferred.",
        modelAnswer:
          "Let the number be x, so 3x + 7 = 28. Working backwards: subtract 7 → 3x = 21, divide by 3 → x = 7. By trial: x = 6 gives 25 (too small), x = 7 gives 28 ✓. Working backwards is quicker because it goes straight to the answer without guessing.",
        markScheme: [
          "sets up 3x + 7 = 28",
          "working backwards: subtract 7 then divide by 3 → x = 7",
          "trial shows x = 7 gives 28 | tries values",
          "x = 7",
        ],
        commonError: "Subtracting 7 and dividing by 3 in the wrong order, or stopping at 3x = 21 without dividing.",
        guideRef: "Equations and finding the solution",
        difficulty: "challenge",
        numericAnswer: 7,
        strategy: "Work backwards",
        hints: ["Turn the story into 3x + 7 = 28.", "Backwards: undo +7, then undo ×3.", "Trial: test whole numbers until both sides match."],
        solutions: [
          {
            label: "Working backwards",
            steps: ["3x + 7 = 28.", "Subtract 7: 3x = 21.", "Divide by 3: x = 7."],
          },
          {
            label: "Trial / inspection",
            steps: ["Try x = 6: 3×6 + 7 = 25, too small.", "Try x = 7: 3×7 + 7 = 28. ✓", "So x = 7."],
          },
        ],
      },
      {
        id: "alg-qa-q08",
        question: "Challenge (working backwards): A shopkeeper sells half of his apples, then sells 10 more, and is left with 15 apples. How many did he start with? Solve by working backwards.",
        modelAnswer:
          "Work backwards from the end. He had 15 after selling 10 more, so before that he had 15 + 10 = 25. That 25 was the half left after selling half, so the start was 2 × 25 = 50 apples. Check forwards: half of 50 is 25 left, then sell 10 → 15. ✓",
        markScheme: [
          "undo the last step: 15 + 10 = 25",
          "undo the halving: 25 × 2 = 50",
          "50 apples (check forwards)",
        ],
        commonError: "Working forwards and guessing, or doubling before adding back the 10 (order of undoing reversed).",
        guideRef: "Equations and finding the solution",
        difficulty: "challenge",
        numericAnswer: 50,
        strategy: "Work backwards",
        hints: ["Start from the 15 left and reverse each step.", "Undo 'sold 10 more' by adding 10 → 25.", "That 25 is half the start, so double it."],
        solutions: [
          {
            label: "Working backwards",
            steps: ["End with 15.", "Add back the 10 sold: 15 + 10 = 25 (the half that was left).", "Double it to undo selling half: 25 × 2 = 50."],
          },
          {
            label: "Algebra",
            steps: ["Let the start be x. After selling half, x/2 left. After selling 10 more: x/2 − 10 = 15.", "So x/2 = 25.", "x = 50."],
          },
        ],
      },
      {
        id: "alg-qa-q09",
        question: "Challenge: A box of mangoes weighs 2 kg empty. When filled with m identical mangoes it weighs 5 kg, and each mango weighs 0.25 kg. Write an equation for m and find how many mangoes are in the box.",
        modelAnswer:
          "The mangoes alone weigh 5 − 2 = 3 kg. With each mango 0.25 kg, the equation is 0.25m = 3, so m = 3 ÷ 0.25 = 12 mangoes. (As one equation: 2 + 0.25m = 5.)",
        markScheme: [
          "sets up 2 + 0.25m = 5 | mango weight = 3 kg",
          "0.25m = 3",
          "m = 12",
        ],
        commonError: "Forgetting to subtract the empty box weight, or dividing 5 by 0.25 instead of 3.",
        guideRef: "Equations and finding the solution",
        difficulty: "challenge",
        numericAnswer: 12,
        strategy: "Introduce a variable",
        hints: ["Total weight = box + mangoes.", "2 + 0.25m = 5, so the mangoes weigh 3 kg.", "Divide 3 by 0.25."],
        solutions: [
          {
            label: "Set up and solve",
            steps: ["2 + 0.25m = 5.", "Subtract 2: 0.25m = 3.", "Divide by 0.25: m = 12."],
          },
        ],
      },
      {
        id: "alg-qa-q10",
        question: "Challenge: Two friends have stickers. Anya has 3 times as many as Rohan. Together they have 48 stickers. Set up an equation and find how many each has.",
        modelAnswer:
          "Let Rohan have r stickers; Anya has 3r. Together: r + 3r = 48, so 4r = 48 and r = 12. Anya has 3×12 = 36. So Rohan has 12 and Anya has 36 (check: 12 + 36 = 48).",
        markScheme: [
          "Rohan = r, Anya = 3r",
          "r + 3r = 48 | 4r = 48",
          "Rohan 12 and Anya 36",
        ],
        commonError: "Splitting 48 equally (24 each) instead of in the ratio, or letting r be Anya's amount and dividing 48 by 3.",
        guideRef: "Equations and finding the solution",
        difficulty: "challenge",
        numericAnswer: 12,
        tolerance: 0,
        strategy: "Introduce a variable",
        hints: ["Let the smaller amount be r.", "Anya has 3r, so total is r + 3r.", "Solve 4r = 48, then find Anya's 3r."],
        solutions: [
          {
            label: "One variable",
            steps: ["Rohan = r, Anya = 3r.", "r + 3r = 4r = 48.", "r = 12, so Anya = 36."],
          },
          {
            label: "Parts (picture)",
            steps: ["Think of 4 equal parts: 1 for Rohan, 3 for Anya.", "Each part = 48 ÷ 4 = 12.", "Rohan = 12, Anya = 3 parts = 36."],
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
algebra.questionBank.mcqPapers = [
  { id: "alg-mcq-paper-1", title: "Algebra — MCQ Set A", questions: algebra.quiz.mcq.slice(0, 10) },
  { id: "alg-mcq-paper-2", title: "Algebra — MCQ Set B", questions: algebra.quiz.mcq.slice(10) },
];
algebra.questionBank.qaPapers = [
  { id: "alg-qa-paper-1", title: "Algebra — Written Practice A", questions: algebra.quiz.qa.slice(0, 6) },
  { id: "alg-qa-paper-2", title: "Algebra — Challenge Problems", questions: algebra.quiz.qa.slice(6) },
];

export default algebra;
