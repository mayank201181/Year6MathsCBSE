import type { Topic } from "../types";

const wholeNumbers: Topic = {
  id: "whole-numbers",
  title: "Whole Numbers",
  subject: "Maths",
  chapter: "NCERT Ch. 2 (Whole Numbers)",
  icon: "⚪",
  color: "#14b8a6",
  intro:
    "Start at 1 and keep counting: 1, 2, 3, … — those are the natural numbers. Add a 0 to the front and you get the whole numbers: 0, 1, 2, 3, … This chapter puts them on a number line, hunts for the patterns hidden inside them, and discovers the few simple properties that let you do big sums in your head.",
  guide: [
    {
      heading: "Natural and whole numbers on the number line",
      discovery: {
        problem:
          "Whisper the biggest whole number you can think of. Now add 1 to it. Did you just make a bigger one? Could anyone ever win this game?",
        idea:
          "Every whole number has a *successor* (the number one more than it), so the list 0, 1, 2, 3, … never ends. There is no largest whole number — but there IS a smallest: 0.",
      },
      body:
        "The **natural numbers** (also called counting numbers) are 1, 2, 3, 4, … We use them to count things.\n\nIf we include **0**, we get the **whole numbers**: 0, 1, 2, 3, 4, … So every natural number is a whole number, but 0 is a whole number that is *not* a natural number.\n\nWe picture them on a **number line**: mark a point for 0, then step equal distances to the right for 1, 2, 3, … The numbers grow as you move right and shrink as you move left.",
      keyPoints: [
        "Natural numbers: 1, 2, 3, … (start at 1).",
        "Whole numbers: 0, 1, 2, 3, … (natural numbers plus 0).",
        "0 is the smallest whole number; there is no largest.",
        "On the number line, right means bigger, left means smaller.",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A number line marked from 0 to 6 with an arrow showing it continues forever to the right"><line x1="20" y1="40" x2="340" y2="40" stroke="#334155" stroke-width="2"/><polygon points="340,40 330,35 330,45" fill="#334155"/><line x1="40" y1="33" x2="40" y2="47" stroke="#334155" stroke-width="2"/><line x1="90" y1="33" x2="90" y2="47" stroke="#334155" stroke-width="2"/><line x1="140" y1="33" x2="140" y2="47" stroke="#334155" stroke-width="2"/><line x1="190" y1="33" x2="190" y2="47" stroke="#334155" stroke-width="2"/><line x1="240" y1="33" x2="240" y2="47" stroke="#334155" stroke-width="2"/><line x1="290" y1="33" x2="290" y2="47" stroke="#334155" stroke-width="2"/><text x="40" y="62" text-anchor="middle" font-size="13" fill="#334155">0</text><text x="90" y="62" text-anchor="middle" font-size="13" fill="#334155">1</text><text x="140" y="62" text-anchor="middle" font-size="13" fill="#334155">2</text><text x="190" y="62" text-anchor="middle" font-size="13" fill="#334155">3</text><text x="240" y="62" text-anchor="middle" font-size="13" fill="#334155">4</text><text x="290" y="62" text-anchor="middle" font-size="13" fill="#334155">5</text><text x="328" y="28" text-anchor="middle" font-size="12" fill="#0d9488">forever →</text></svg>',
      ],
      whyItWorks:
        "Counting is just 'add one, and one more, and one more'. Because you can always add one more, the list cannot stop. That single move — finding the successor — is what makes the whole numbers go on forever.",
      strategies: ["Look for a pattern", "Try the extreme case"],
    },
    {
      heading: "Predecessor, successor and moving on the line",
      discovery: {
        problem:
          "A number's successor is 100. What is the number? A different number's predecessor is 100. What is that number? Why are your two answers different?",
        idea:
          "The **successor** of a number is one more (add 1); the **predecessor** is one less (subtract 1). They undo each other, so successor 100 means the number is 99, while predecessor 100 means the number is 101.",
      },
      body:
        "The **successor** of a whole number is the number that comes just after it: successor of 7 is 8 (add 1). The **predecessor** is the number just before it: predecessor of 7 is 6 (subtract 1).\n\nOn the number line, these are simply *jumps*:\n\n- **Addition** = jump to the **right**. 4 + 3 means start at 4 and hop 3 steps right, landing on 7.\n- **Subtraction** = jump to the **left**. 7 − 3 means start at 7 and hop 3 steps left, landing on 4.\n- **Multiplication** = **equal jumps**. 4 × 3 means make 4 hops of size 3, landing on 12.\n\nNote: **0 has no predecessor among the whole numbers**, because 0 − 1 is not a whole number.",
      keyPoints: [
        "Successor = number + 1; predecessor = number − 1.",
        "Add → move right; subtract → move left on the number line.",
        "Multiply → repeated equal jumps (3 × 4 = four jumps of 3).",
        "0 has a successor (1) but no whole-number predecessor.",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing 4 plus 3 as three jumps to the right landing on 7"><line x1="20" y1="60" x2="340" y2="60" stroke="#334155" stroke-width="2"/><polygon points="340,60 330,55 330,65" fill="#334155"/><line x1="40" y1="53" x2="40" y2="67" stroke="#334155" stroke-width="2"/><line x1="80" y1="53" x2="80" y2="67" stroke="#334155" stroke-width="2"/><line x1="120" y1="53" x2="120" y2="67" stroke="#334155" stroke-width="2"/><line x1="160" y1="53" x2="160" y2="67" stroke="#334155" stroke-width="2"/><line x1="200" y1="53" x2="200" y2="67" stroke="#334155" stroke-width="2"/><line x1="240" y1="53" x2="240" y2="67" stroke="#334155" stroke-width="2"/><line x1="280" y1="53" x2="280" y2="67" stroke="#334155" stroke-width="2"/><text x="40" y="82" text-anchor="middle" font-size="12" fill="#334155">0</text><text x="80" y="82" text-anchor="middle" font-size="12" fill="#334155">1</text><text x="120" y="82" text-anchor="middle" font-size="12" fill="#334155">2</text><text x="160" y="82" text-anchor="middle" font-size="12" fill="#334155">3</text><text x="200" y="82" text-anchor="middle" font-size="12" fill="#334155">4</text><text x="240" y="82" text-anchor="middle" font-size="12" fill="#334155">5</text><text x="280" y="82" text-anchor="middle" font-size="12" fill="#334155">6</text><path d="M200 50 Q220 30 240 50" fill="none" stroke="#0d9488" stroke-width="2"/><path d="M240 50 Q260 30 280 50" fill="none" stroke="#0d9488" stroke-width="2"/><path d="M280 50 Q300 30 320 50" fill="none" stroke="#0d9488" stroke-width="2"/><text x="260" y="22" text-anchor="middle" font-size="12" fill="#0d9488">4 + 3 = 7</text></svg>',
      ],
      whyItWorks:
        "Adding counts forward and subtracting counts backward, so they are opposite jumps on the same line. Multiplication is just a shortcut for adding the same hop again and again, which is why it shows up as equal-sized jumps.",
      strategies: ["Draw a diagram", "Work backwards"],
    },
    {
      heading: "The properties of whole numbers",
      discovery: {
        problem:
          "Add 17 + 36 + 3 in the order written. Now add it as (17 + 3) + 36. Which felt easier, and why did the answer stay the same?",
        idea:
          "Whole numbers can be regrouped and reordered for addition and multiplication without changing the answer. Spotting a friendly pair (17 and 3 make 20) turns a hard sum into an easy one.",
      },
      body:
        "Whole numbers obey a small set of rules that we use constantly:\n\n- **Closure:** add or multiply two whole numbers and you always get a whole number. (Subtraction and division do *not* always stay whole — 3 − 5 and 3 ÷ 2 escape.)\n- **Commutative:** order doesn't matter. a + b = b + a and a × b = b × a.\n- **Associative:** grouping doesn't matter. (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c).\n- **Distributive (× over +):** a × (b + c) = a × b + a × c.\n- **Additive identity:** adding 0 changes nothing. a + 0 = a.\n- **Multiplicative identity:** multiplying by 1 changes nothing. a × 1 = a.\n- A bonus fact: a × 0 = 0 for every whole number a.",
      keyPoints: [
        "Closure holds for + and ×, but not for − and ÷.",
        "Commutative and associative let you reorder and regroup + and ×.",
        "0 is the additive identity; 1 is the multiplicative identity.",
        "Distributive law connects × and +: a × (b + c) = a×b + a×c.",
      ],
      whyItWorks:
        "Multiplication is repeated addition, so a × (b + c) means 'a copies of (b + c)', which is the same as a copies of b plus a copies of c — that is exactly a×b + a×c. The picture below makes it obvious: a rectangle split into two pieces.",
      diagrams: [
        '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle of height 4 split into a width-10 part and a width-3 part to show 4 times 13 equals 4 times 10 plus 4 times 3"><rect x="20" y="30" width="200" height="80" fill="#5eead4" stroke="#334155" stroke-width="2"/><rect x="220" y="30" width="60" height="80" fill="#99f6e4" stroke="#334155" stroke-width="2"/><line x1="220" y1="30" x2="220" y2="110" stroke="#334155" stroke-width="2"/><text x="120" y="74" text-anchor="middle" font-size="14" fill="#0f766e">4 × 10</text><text x="250" y="74" text-anchor="middle" font-size="13" fill="#0f766e">4 × 3</text><text x="120" y="24" text-anchor="middle" font-size="12" fill="#334155">10</text><text x="250" y="24" text-anchor="middle" font-size="12" fill="#334155">3</text><text x="10" y="74" text-anchor="middle" font-size="12" fill="#334155">4</text><text x="150" y="135" text-anchor="middle" font-size="13" fill="#334155">4 × 13 = 4×10 + 4×3 = 52</text></svg>',
      ],
      strategies: ["Use a property", "Draw a diagram"],
      thinkDeeper:
        "Subtraction is not commutative (7 − 3 ≠ 3 − 7). Can you find any two different whole numbers where a − b DOES equal b − a? Why or why not?",
    },
    {
      heading: "Properties as mental-maths shortcuts",
      discovery: {
        problem:
          "Find 8 × 97 in your head in under ten seconds. No long multiplication allowed!",
        idea:
          "Rewrite 97 as 100 − 3, then distribute: 8 × 97 = 8 × 100 − 8 × 3 = 800 − 24 = 776. The distributive law turns an ugly multiplication into two easy ones.",
      },
      body:
        "The properties aren't just facts to memorise — they are *tools* for fast calculation:\n\n- **Make friendly tens** using commutative + associative: 17 + 36 + 3 = (17 + 3) + 36 = 20 + 36 = 56.\n- **Split with the distributive law:** 8 × 97 = 8 × (100 − 3) = 800 − 24 = 776. Or 6 × 105 = 6 × 100 + 6 × 5 = 630.\n- **Spot a 0 or a 1:** anything × 0 = 0; anything × 1 stays the same; adding 0 changes nothing.\n\nThe trick is always the same: look for a number that is *close to a round number* (10, 100, 1000), then split it.",
      keyPoints: [
        "Pair numbers to make tens/hundreds before adding.",
        "Rewrite near-round numbers (97 = 100 − 3) and distribute.",
        "× 1 and + 0 leave a number unchanged; × 0 collapses it to 0.",
        "Choose the easy order — the answer is guaranteed to be the same.",
      ],
      whyItWorks:
        "Because order, grouping and splitting never change the value, you are free to pick whichever route is easiest. The shortcut is not a different sum — it is the same sum wearing easier clothes.",
      strategies: ["Use a property", "Look for a friendly number"],
    },
    {
      heading: "Patterns with whole numbers",
      discovery: {
        problem:
          "Add the first few odd numbers: 1, then 1 + 3, then 1 + 3 + 5, then 1 + 3 + 5 + 7. Write down each total. Notice anything special about your list of answers?",
        idea:
          "The running totals are 1, 4, 9, 16 — the perfect squares! The sum of the first n odd numbers is always n × n. Patterns let you predict an answer without doing all the work.",
      },
      body:
        "Whole numbers are full of patterns, and arranging them as dots or shapes often explains why:\n\n- **Square numbers:** 1, 4, 9, 16, 25, … (dots that form a square). They equal 1 + 3 + 5 + … (the odd numbers).\n- **Triangular numbers:** 1, 3, 6, 10, 15, … (dots that form a triangle). Each is the sum 1 + 2 + 3 + … up to some number.\n- **Magic patterns:** 1 × 8 + 1 = 9, 12 × 8 + 2 = 98, 123 × 8 + 3 = 987, … the answers spell out 9, 98, 987, 9876, …\n\nA quick way to add 1 + 2 + 3 + … + 100: pair the ends (1 + 100, 2 + 99, …). There are 50 pairs each summing to 101, so the total is 50 × 101 = 5050.",
      keyPoints: [
        "Square numbers = sum of consecutive odd numbers (1+3+5+… = n²).",
        "Triangular numbers = 1 + 2 + 3 + … (dots in a triangle).",
        "Pairing from the ends sums a long list quickly.",
        "A good pattern lets you predict instead of compute.",
      ],
      whyItWorks:
        "Pairing works because as the front number grows by 1 the back number shrinks by 1, so every pair has the *same* total. Counting the pairs and multiplying is far faster than adding one at a time.",
      strategies: ["Find a pattern", "Use symmetry (pair the ends)"],
      thinkDeeper:
        "Without adding term by term, can you find 1 + 2 + 3 + … + 50 using the pairing trick? How many pairs are there, and what does each pair add to?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What are the whole numbers?", back: "0, 1, 2, 3, 4, … — the natural numbers together with 0." },
      { front: "What is the smallest whole number? The largest?", back: "Smallest is 0. There is no largest — you can always add 1." },
      { front: "Successor and predecessor of 50?", back: "Successor 51 (add 1), predecessor 49 (subtract 1)." },
      { front: "Which operations keep whole numbers closed?", back: "Addition and multiplication always give a whole number; subtraction and division may not." },
      { front: "State the distributive law.", back: "a × (b + c) = a × b + a × c." },
      { front: "What are the additive and multiplicative identities?", back: "0 for addition (a + 0 = a); 1 for multiplication (a × 1 = a)." },
      { front: "Quick way to do 7 × 99?", back: "7 × (100 − 1) = 700 − 7 = 693 (distributive law)." },
    ],
    formulae: [
      { name: "Commutative", rule: "a + b = b + a;  a × b = b × a" },
      { name: "Associative", rule: "(a + b) + c = a + (b + c);  (a × b) × c = a × (b × c)" },
      { name: "Distributive (× over +)", rule: "a × (b + c) = a×b + a×c" },
      { name: "Additive identity", rule: "a + 0 = a" },
      { name: "Multiplicative identity", rule: "a × 1 = a" },
      { name: "Successor / predecessor", rule: "successor = n + 1;  predecessor = n − 1" },
      { name: "Sum 1 to n (pairing)", rule: "1 + 2 + … + n = n × (n + 1) ÷ 2" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "wn-mcq-q01",
        question: "Which of these is the smallest whole number?",
        options: ["1", "0", "−1", "There isn't one"],
        answerIndex: 1,
        explanation: "The whole numbers are 0, 1, 2, 3, … so the smallest is 0. (−1 is not a whole number.)",
        guideRef: "Natural and whole numbers on the number line",
        difficulty: "warmup",
      },
      {
        id: "wn-mcq-q02",
        question: "What is the successor of 99?",
        options: ["98", "100", "990", "101"],
        answerIndex: 1,
        explanation: "The successor is one more: 99 + 1 = 100.",
        guideRef: "Predecessor, successor and moving on the line",
        difficulty: "warmup",
      },
      {
        id: "wn-mcq-q03",
        question: "What is the predecessor of 30?",
        options: ["31", "29", "0", "300"],
        answerIndex: 1,
        explanation: "The predecessor is one less: 30 − 1 = 29.",
        guideRef: "Predecessor, successor and moving on the line",
        difficulty: "warmup",
      },
      {
        id: "wn-mcq-q04",
        question: "Which whole number has no predecessor among the whole numbers?",
        options: ["0", "1", "10", "Every number has one"],
        answerIndex: 0,
        explanation: "0 − 1 = −1, which is not a whole number, so 0 has no whole-number predecessor.",
        guideRef: "Predecessor, successor and moving on the line",
        difficulty: "warmup",
      },
      {
        id: "wn-mcq-q05",
        question: "Which statement is true?",
        options: [
          "Every whole number is a natural number.",
          "Every natural number is a whole number.",
          "0 is a natural number.",
          "There are more natural numbers than whole numbers.",
        ],
        answerIndex: 1,
        explanation: "Whole numbers are 0, 1, 2, 3, … and natural numbers are 1, 2, 3, … so every natural number is a whole number, but 0 is whole and not natural.",
        guideRef: "Natural and whole numbers on the number line",
        difficulty: "warmup",
      },
      {
        id: "wn-mcq-q06",
        question: "On the number line, the operation 8 − 3 is shown as:",
        options: ["3 jumps to the right from 8", "3 jumps to the left from 8", "8 jumps to the left from 3", "3 equal jumps of 8"],
        answerIndex: 1,
        explanation: "Subtraction moves left. Starting at 8 and hopping 3 steps left lands on 5.",
        guideRef: "Predecessor, successor and moving on the line",
        difficulty: "warmup",
      },
      {
        id: "wn-mcq-q07",
        question: "Which value of the box makes 17 + ▢ = 17 true?",
        options: ["1", "17", "0", "34"],
        answerIndex: 2,
        explanation: "Adding 0 changes nothing — 0 is the additive identity. 17 + 0 = 17.",
        guideRef: "The properties of whole numbers",
        difficulty: "core",
        hints: [
          "What can you add to a number and not change it?",
          "Adding which number leaves a value exactly as it was?",
          "0 is the additive identity.",
        ],
        strategy: "Use a property",
      },
      {
        id: "wn-mcq-q08",
        question: "Which property is used in writing 23 × 6 = 6 × 23?",
        options: ["Associative", "Commutative", "Distributive", "Closure"],
        answerIndex: 1,
        explanation: "Swapping the order of a multiplication is the commutative property: a × b = b × a.",
        guideRef: "The properties of whole numbers",
        difficulty: "core",
        hints: ["Look at what changed: the order or the grouping?", "Only the order of the two numbers swapped.", "Order swapping = commutative."],
        strategy: "Use a property",
      },
      {
        id: "wn-mcq-q09",
        question: "Which property does (4 × 5) × 2 = 4 × (5 × 2) show?",
        options: ["Commutative", "Distributive", "Associative", "Identity"],
        answerIndex: 2,
        explanation: "Only the grouping (the brackets) changed, not the order — that is the associative property.",
        guideRef: "The properties of whole numbers",
        difficulty: "core",
        hints: ["Did the order of the numbers change, or just the brackets?", "The numbers stay 4, 5, 2 in order; the brackets moved.", "Regrouping = associative."],
        strategy: "Use a property",
      },
      {
        id: "wn-mcq-q10",
        question: "8 × 97 = 8 × (100 − 3). What is the value?",
        options: ["776", "800", "824", "765"],
        answerIndex: 0,
        explanation: "8 × 100 − 8 × 3 = 800 − 24 = 776 (distributive law).",
        guideRef: "Properties as mental-maths shortcuts",
        difficulty: "core",
        hints: ["Distribute the 8 over 100 − 3.", "8 × 100 = 800 and 8 × 3 = 24.", "800 − 24 = ?"],
        strategy: "Use a property",
      },
      {
        id: "wn-mcq-q11",
        question: "Which operation is NOT closed on the whole numbers (can give a non-whole answer)?",
        options: ["Addition", "Multiplication", "Subtraction", "None — all are closed"],
        answerIndex: 2,
        explanation: "3 − 5 = −2 is not a whole number, so subtraction is not closed. Addition and multiplication always stay whole.",
        guideRef: "The properties of whole numbers",
        difficulty: "core",
        hints: ["Try to leave the whole numbers using each operation.", "Can a smaller number minus a bigger one stay whole?", "3 − 5 is not a whole number."],
        strategy: "Try the extreme case",
      },
      {
        id: "wn-mcq-q12",
        question: "What is the quickest way to compute 25 × 4 × 7?",
        options: ["Multiply 4 × 7 first, then × 25", "Multiply 25 × 4 first to get 100, then × 7", "Multiply 25 × 7 first, then × 4", "There is no shortcut"],
        answerIndex: 1,
        explanation: "By the associative property you can group (25 × 4) = 100 first, then 100 × 7 = 700 — much easier.",
        guideRef: "Properties as mental-maths shortcuts",
        difficulty: "core",
        hints: ["Which two of these numbers make a round 100?", "25 × 4 = 100.", "Then 100 × 7 = 700."],
        strategy: "Look for a friendly number",
      },
      {
        id: "wn-mcq-q13",
        question: "Using a shortcut, 6 × 105 equals:",
        options: ["630", "600", "611", "650"],
        answerIndex: 0,
        explanation: "6 × 105 = 6 × 100 + 6 × 5 = 600 + 30 = 630 (distributive law).",
        guideRef: "Properties as mental-maths shortcuts",
        difficulty: "core",
        hints: ["Split 105 as 100 + 5.", "6 × 100 = 600 and 6 × 5 = 30.", "Add them."],
        strategy: "Use a property",
      },
      {
        id: "wn-mcq-q14",
        question: "The numbers 1, 4, 9, 16, 25, … are called:",
        options: ["Triangular numbers", "Square numbers", "Odd numbers", "Prime numbers"],
        answerIndex: 1,
        explanation: "These are the square numbers: 1², 2², 3², 4², 5². They can be arranged as square dot patterns.",
        guideRef: "Patterns with whole numbers",
        difficulty: "core",
        hints: ["Can the dots be arranged into a square?", "1×1, 2×2, 3×3, …", "These are n × n, the squares."],
        strategy: "Find a pattern",
      },
      {
        id: "wn-mcq-q15",
        question: "What is 1 + 3 + 5 + 7 + 9 (the first five odd numbers)?",
        options: ["20", "25", "23", "30"],
        answerIndex: 1,
        explanation: "The sum of the first n odd numbers is n × n. Here n = 5, so 5 × 5 = 25.",
        guideRef: "Patterns with whole numbers",
        difficulty: "core",
        hints: ["You could just add them, or spot the pattern.", "The sum of the first n odds is a square number.", "Five odd numbers → 5 × 5."],
        strategy: "Find a pattern",
      },
      {
        id: "wn-mcq-q16",
        question: "Riya claims there is a largest whole number, N. Why is she wrong?",
        options: [
          "Because N might be negative",
          "Because N + 1 is also a whole number and is bigger",
          "Because 0 is the largest",
          "Because whole numbers stop at 1000",
        ],
        answerIndex: 1,
        explanation: "Whatever N she picks, its successor N + 1 is a larger whole number, so no largest can exist.",
        guideRef: "Natural and whole numbers on the number line",
        difficulty: "challenge",
        hints: ["Suppose N really were the biggest. Now do something to it.", "Every whole number has a successor.", "N + 1 beats N, contradicting that N was largest."],
        strategy: "Work backwards",
      },
      {
        id: "wn-mcq-q17",
        question: "Which single computation does the distributive law make easiest?",
        options: ["43 + 57", "99 × 47", "8 × 9", "100 − 1"],
        answerIndex: 1,
        explanation: "99 × 47 = (100 − 1) × 47 = 4700 − 47 = 4653 — the distributive law turns it into two easy steps. The others don't need it.",
        guideRef: "Properties as mental-maths shortcuts",
        difficulty: "challenge",
        hints: ["The distributive law helps when one factor is near a round number.", "Which option has a factor close to 100?", "99 = 100 − 1, so distribute over 47."],
        strategy: "Use a property",
      },
      {
        id: "wn-mcq-q18",
        question: "The pattern 1 × 8 + 1 = 9, 12 × 8 + 2 = 98, 123 × 8 + 3 = 987, … What is 1234 × 8 + 4?",
        options: ["9876", "8765", "9870", "9888"],
        answerIndex: 0,
        explanation: "The answers run 9, 98, 987, 9876, … so 1234 × 8 + 4 = 9876. (Check: 9872 + 4 = 9876.)",
        guideRef: "Patterns with whole numbers",
        difficulty: "challenge",
        hints: ["Look at the list of answers, not the multiplications.", "9, 98, 987, … the digits count down from 9.", "The next answer is 9876."],
        strategy: "Find a pattern",
      },
      {
        id: "wn-mcq-q19",
        question: "What is 1 + 2 + 3 + … + 20, found by pairing the ends?",
        options: ["210", "200", "190", "220"],
        answerIndex: 0,
        explanation: "Pair 1+20, 2+19, … = 21 each. There are 10 pairs, so total = 10 × 21 = 210.",
        guideRef: "Patterns with whole numbers",
        difficulty: "challenge",
        hints: ["Pair the first and last numbers.", "1 + 20 = 21, and every pair gives 21.", "How many pairs are there in twenty numbers?"],
        strategy: "Use symmetry (pair the ends)",
      },
      {
        id: "wn-mcq-q20",
        question: "A whole number times 0 is always:",
        options: ["The number itself", "1", "0", "Undefined"],
        answerIndex: 2,
        explanation: "Multiplying any whole number by 0 gives 0 (a × 0 = 0). This is different from a × 1 = a.",
        guideRef: "The properties of whole numbers",
        difficulty: "core",
        hints: ["Multiplication is repeated addition.", "How much is zero copies of a number?", "Zero copies of anything is 0."],
        strategy: "Use a property",
      },
    ],
    qa: [
      {
        id: "wn-qa-q01",
        question: "Write the successor and predecessor of 1000. What is the difference between them?",
        modelAnswer:
          "Successor of 1000 is 1000 + 1 = 1001. Predecessor of 1000 is 1000 − 1 = 999. The difference between successor and predecessor is 1001 − 999 = 2.",
        markScheme: [
          "successor 1001",
          "predecessor 999",
          "difference 2",
        ],
        commonError: "Swapping successor and predecessor, or giving the difference as 1.",
        guideRef: "Predecessor, successor and moving on the line",
        difficulty: "core",
        numericAnswer: 2,
        hints: ["Successor = add 1; predecessor = subtract 1.", "Find both, then subtract the smaller from the larger."],
        strategy: "Work backwards",
      },
      {
        id: "wn-qa-q02",
        question: "Use the distributive law to compute 12 × 99. Show your working.",
        modelAnswer:
          "Write 99 as 100 − 1. Then 12 × 99 = 12 × (100 − 1) = 12 × 100 − 12 × 1 = 1200 − 12 = 1188.",
        markScheme: [
          "99 = 100 − 1 | rewrite 99",
          "12 × 100 − 12 × 1 | distribute",
          "1188",
        ],
        commonError: "Computing 12 × 100 − 1 = 1199 (forgetting to multiply the 1 by 12 as well).",
        guideRef: "Properties as mental-maths shortcuts",
        difficulty: "core",
        numericAnswer: 1188,
        hints: ["Rewrite 99 as a number close to a round 100.", "Distribute the 12 over (100 − 1).", "1200 − 12 = ?"],
        solutions: [
          {
            label: "Distributive (subtract)",
            steps: ["99 = 100 − 1.", "12 × (100 − 1) = 1200 − 12.", "= 1188."],
          },
          {
            label: "Distributive (add)",
            steps: ["99 = 90 + 9.", "12 × 90 = 1080 and 12 × 9 = 108.", "1080 + 108 = 1188."],
          },
        ],
      },
      {
        id: "wn-qa-q03",
        question: "Compute 25 × 16 × 4 in the easiest order, and name the property that lets you reorder.",
        modelAnswer:
          "By the commutative and associative properties I can reorder and regroup. Group (25 × 4) = 100 first, then 100 × 16 = 1600. The properties used are the commutative property (to swap 16 and 4) and the associative property (to regroup the multiplication).",
        markScheme: [
          "group 25 × 4 = 100 | reorder to make 100",
          "100 × 16 = 1600",
          "commutative | associative | reorder and regroup",
        ],
        commonError: "Believing the answer changes if you multiply in a different order.",
        guideRef: "Properties as mental-maths shortcuts",
        difficulty: "core",
        numericAnswer: 1600,
        hints: ["Which pair of numbers multiplies to a friendly 100?", "25 × 4 = 100.", "Then 100 × 16 = 1600."],
        strategy: "Look for a friendly number",
        solutions: [
          {
            label: "Regroup for a round 100",
            steps: ["Reorder: 25 × 4 × 16.", "25 × 4 = 100.", "100 × 16 = 1600."],
          },
        ],
      },
      {
        id: "wn-qa-q04",
        question: "Explain on a number line how 3 × 4 is shown, and why it gives the same answer as 4 × 3.",
        modelAnswer:
          "3 × 4 means three equal jumps of size 4: starting at 0 you land on 4, 8, 12. 4 × 3 means four equal jumps of size 3: 3, 6, 9, 12. Both land on 12. They match because multiplication is commutative — a rectangle of 3 rows of 4 dots has the same number of dots whether you count rows (3 × 4) or columns (4 × 3).",
        markScheme: [
          "3 jumps of 4 reach 12 | repeated jumps on the line",
          "4 jumps of 3 also reach 12",
          "commutative | rows = columns | same total",
        ],
        commonError: "Thinking 3 × 4 and 4 × 3 are different because the jumps look different.",
        guideRef: "Predecessor, successor and moving on the line",
        difficulty: "core",
        numericAnswer: 12,
        hints: ["Draw equal jumps from 0.", "Three jumps of 4 versus four jumps of 3 — where do you land?", "Both reach 12; multiplication is commutative."],
        strategy: "Draw a diagram",
      },
      {
        id: "wn-qa-q05",
        question: "Find 1 + 2 + 3 + … + 100 by pairing numbers from the two ends. Show the method.",
        modelAnswer:
          "Pair the first and last: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101, … Each pair adds to 101. Since there are 100 numbers, there are 50 pairs. Total = 50 × 101 = 5050.",
        markScheme: [
          "pair ends → each pair = 101",
          "50 pairs",
          "50 × 101 = 5050",
        ],
        commonError: "Using 100 pairs instead of 50 (each pair uses two numbers).",
        guideRef: "Patterns with whole numbers",
        difficulty: "core",
        numericAnswer: 5050,
        hints: ["Add the first and last numbers.", "Every such pair gives the same total, 101.", "100 numbers make 50 pairs."],
        strategy: "Use symmetry (pair the ends)",
        solutions: [
          {
            label: "Pairing",
            steps: ["1 + 100 = 101, and every end pair = 101.", "100 numbers → 50 pairs.", "50 × 101 = 5050."],
          },
          {
            label: "Formula",
            steps: ["Sum 1 to n = n × (n + 1) ÷ 2.", "= 100 × 101 ÷ 2.", "= 10100 ÷ 2 = 5050."],
          },
        ],
      },
      {
        id: "wn-qa-q06",
        question: "Explain why there is no largest whole number. Use the idea of a successor.",
        modelAnswer:
          "Suppose someone claims N is the largest whole number. Then look at N + 1. Since adding 1 to a whole number always gives another whole number, N + 1 is a whole number — and it is bigger than N. This contradicts the claim that N was largest. Because this works for any N, no largest whole number can exist.",
        markScheme: [
          "assume a largest N | suppose N is biggest",
          "N + 1 is also a whole number",
          "N + 1 > N, contradiction → no largest",
        ],
        commonError: "Saying 'infinity is the largest' — infinity is not a whole number.",
        guideRef: "Natural and whole numbers on the number line",
        difficulty: "challenge",
        hints: ["Pretend a largest number exists and call it N.", "What is the successor of N?", "Show N + 1 beats N, so the assumption breaks."],
        strategy: "Work backwards",
        solutions: [
          {
            label: "Proof by contradiction",
            steps: ["Assume N is the largest whole number.", "N + 1 is a whole number (closure of addition).", "N + 1 > N, so N was not largest — contradiction. Hence none exists."],
          },
        ],
      },
      {
        id: "wn-qa-q07",
        question:
          "Challenge: A number's successor is exactly twice its predecessor. Find the number.",
        modelAnswer:
          "Call the number n. Its successor is n + 1 and its predecessor is n − 1. The condition is n + 1 = 2 × (n − 1). Expanding: n + 1 = 2n − 2, so 1 + 2 = 2n − n, giving 3 = n. Check: the number is 3, its successor is 4, its predecessor is 2, and 4 = 2 × 2. So the number is 3.",
        markScheme: [
          "let n be the number; successor n+1, predecessor n−1",
          "set up n + 1 = 2(n − 1)",
          "n = 3",
        ],
        commonError: "Mishandling the brackets in 2 × (n − 1), e.g. writing 2n − 1 instead of 2n − 2.",
        guideRef: "Predecessor, successor and moving on the line",
        difficulty: "challenge",
        numericAnswer: 3,
        hints: ["Let the number be n and write its successor and predecessor.", "Translate 'successor is twice the predecessor' into an equation.", "Solve n + 1 = 2(n − 1)."],
        strategy: "Introduce a variable",
        solutions: [
          {
            label: "Algebra",
            steps: ["Let n be the number; successor = n + 1, predecessor = n − 1.", "n + 1 = 2(n − 1) = 2n − 2.", "3 = n. Check: successor 4 = 2 × predecessor 2. ✓"],
          },
        ],
      },
      {
        id: "wn-qa-q08",
        question:
          "Challenge: Using the distributive law twice (or a clever split), compute 102 × 98 without long multiplication.",
        modelAnswer:
          "Write 102 = 100 + 2 and 98 = 100 − 2. Then 102 × 98 = (100 + 2)(100 − 2) = 100 × 100 − 2 × 2 = 10000 − 4 = 9996. (This is the difference-of-squares pattern, but you can also distribute directly.)",
        markScheme: [
          "write as (100 + 2)(100 − 2) | split near 100",
          "100×100 − 2×2 | distribute",
          "9996",
        ],
        commonError: "Forgetting the −4 and answering 10000, or mis-multiplying the cross terms.",
        guideRef: "Properties as mental-maths shortcuts",
        difficulty: "challenge",
        numericAnswer: 9996,
        hints: ["Notice 102 and 98 are both close to 100.", "Write them as 100 + 2 and 100 − 2.", "(100 + 2)(100 − 2) = 10000 − 4."],
        strategy: "Look for a friendly number",
        solutions: [
          {
            label: "Symmetric split",
            steps: ["102 = 100 + 2, 98 = 100 − 2.", "(100 + 2)(100 − 2) = 10000 − 4.", "= 9996."],
          },
          {
            label: "Distribute directly",
            steps: ["102 × 98 = 102 × 100 − 102 × 2.", "= 10200 − 204.", "= 9996."],
          },
        ],
      },
      {
        id: "wn-qa-q09",
        question:
          "Challenge: The triangular numbers are 1, 3, 6, 10, 15, … (each is 1 + 2 + … up to some number). What is the 10th triangular number, and explain a quick way to get it.",
        modelAnswer:
          "The 10th triangular number is 1 + 2 + 3 + … + 10. Pair the ends: 1 + 10 = 11, 2 + 9 = 11, … 5 pairs each summing to 11, so total = 5 × 11 = 55. (Equivalently 10 × 11 ÷ 2 = 55.)",
        markScheme: [
          "1 + 2 + … + 10",
          "pairing → 5 × 11 or 10 × 11 ÷ 2",
          "55",
        ],
        commonError: "Counting 10 pairs instead of 5, giving 110.",
        guideRef: "Patterns with whole numbers",
        difficulty: "challenge",
        numericAnswer: 55,
        hints: ["The 10th triangular number is the sum 1 to 10.", "Pair 1 + 10, 2 + 9, … each gives 11.", "There are 5 pairs."],
        strategy: "Use symmetry (pair the ends)",
        solutions: [
          {
            label: "Pairing",
            steps: ["Sum 1 to 10. Pairs 1+10, 2+9, 3+8, 4+7, 5+6 each = 11.", "5 pairs × 11 = 55."],
          },
          {
            label: "Formula",
            steps: ["n × (n + 1) ÷ 2 with n = 10.", "10 × 11 ÷ 2 = 110 ÷ 2 = 55."],
          },
        ],
      },
      {
        id: "wn-qa-q10",
        question:
          "A shopkeeper sells 8 boxes of pens. Each box holds 25 pens that cost ₹4 each. Using properties of whole numbers, find the total value cleverly.",
        modelAnswer:
          "Total value = 8 × 25 × 4 rupees. Regroup using the associative property: (25 × 4) × 8 = 100 × 8 = 800. So the total value is ₹800.",
        markScheme: [
          "total = 8 × 25 × 4 | set up product",
          "regroup 25 × 4 = 100 (associative)",
          "₹800",
        ],
        commonError: "Multiplying left to right (8 × 25 = 200, then × 4) is correct too, but errors creep in; or forgetting the rupee total.",
        guideRef: "Properties as mental-maths shortcuts",
        difficulty: "core",
        numericAnswer: 800,
        hints: ["Write the total as a single product of the three numbers.", "Which two make a round 100?", "25 × 4 = 100, then × 8."],
        strategy: "Look for a friendly number",
        solutions: [
          {
            label: "Regroup",
            steps: ["Total = 8 × 25 × 4.", "Group 25 × 4 = 100.", "100 × 8 = ₹800."],
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
wholeNumbers.questionBank.mcqPapers = [
  { id: "wn-mcq-paper-1", title: "Whole Numbers — MCQ Set A", questions: wholeNumbers.quiz.mcq.slice(0, 10) },
  { id: "wn-mcq-paper-2", title: "Whole Numbers — MCQ Set B", questions: wholeNumbers.quiz.mcq.slice(10) },
];
wholeNumbers.questionBank.qaPapers = [
  { id: "wn-qa-paper-1", title: "Whole Numbers — Written Practice A", questions: wholeNumbers.quiz.qa.slice(0, 5) },
  { id: "wn-qa-paper-2", title: "Whole Numbers — Written Practice B", questions: wholeNumbers.quiz.qa.slice(5) },
];

export default wholeNumbers;
