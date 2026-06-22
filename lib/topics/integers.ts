import type { Topic } from "../types";

// CBSE Class 6 — Integers (negative numbers, the number line, ordering,
// absolute value, addition/subtraction, predecessor/successor).
// AoPS style: discovery openers, derive-don't-decree, hint ladders,
// multi-method solutions, genuine challenge problems.

const integers: Topic = {
  id: "integers",
  title: "Integers (The Other Side of Zero)",
  subject: "Maths",
  chapter: "Ganita Prakash Ch. 10 / NCERT Ch. 6 (Integers)",
  icon: "🌡️",
  color: "#ef4444",
  intro:
    "Some things are naturally less than nothing: a temperature below freezing, a basement below the ground floor, money you owe a friend. Integers stretch the counting numbers across zero into the negatives, giving every number a mirror-twin on the other side. Once you can picture the number line running both ways, adding and subtracting them becomes a short walk left or right.",
  guide: [
    {
      heading: "Why we need numbers below zero",
      discovery: {
        problem:
          "A lift starts on the ground floor (call it 0). It goes UP 3 floors, then DOWN 5 floors to a parking level. Plain counting numbers can't name where it ends up — 3 − 5 has no answer in 0, 1, 2, 3, … . Where is the lift?",
        idea:
          "We invent numbers to the LEFT of zero: −1, −2, −3, … . The lift ends 2 floors below ground, written −2. Every real-life 'opposite' (up/down, gain/loss, hot/cold) needs this other side of zero.",
      },
      body:
        "The **integers** are the whole numbers together with their negatives:\n\n… −3, −2, −1, **0**, 1, 2, 3 …\n\nA negative number describes a quantity *in the opposite direction* to a positive one.\n\n- Temperature: 5°C above zero is +5; five degrees below is **−5**.\n- Sea level: a hill 100 m high is +100; a valley 100 m below the sea is **−100**.\n- Money: a profit of ₹50 is +50; owing ₹50 is **−50**.\n- Floors: two floors below ground is **−2**.\n\nZero is special — it is neither positive nor negative. It is the dividing line.",
      keyPoints: [
        "Integers = …, −3, −2, −1, 0, 1, 2, 3, … (whole numbers and their negatives).",
        "A negative sign means 'the opposite direction': below, owed, lost, down.",
        "0 is an integer but is neither positive nor negative.",
        "Every positive integer has a mirror-twin: the opposite of 4 is −4.",
      ],
      diagrams: [
        '<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A thermometer showing five degrees below zero marked at minus five"><rect x="100" y="10" width="20" height="110" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="110" cy="130" r="16" fill="#ef4444" stroke="#334155" stroke-width="2"/><rect x="104" y="80" width="12" height="50" fill="#ef4444"/><line x1="100" y1="35" x2="120" y2="35" stroke="#334155" stroke-width="2"/><text x="130" y="39" font-size="11" fill="#334155">+10</text><line x1="100" y1="65" x2="120" y2="65" stroke="#334155" stroke-width="2"/><text x="138" y="69" font-size="11" fill="#334155">0</text><line x1="100" y1="80" x2="120" y2="80" stroke="#0ea5e9" stroke-width="2"/><text x="130" y="84" font-size="11" fill="#0ea5e9">-5</text><text x="10" y="84" font-size="11" fill="#0ea5e9">five below</text></svg>',
      ],
      whyItWorks:
        "Counting numbers only point one way. The moment two directions appear (up and down a lift, into and out of a wallet), we need a number that points the other way. Putting a minus sign in front flips the direction without changing the size.",
      strategies: ["Look for opposites", "Use a real-life model"],
    },
    {
      heading: "The integer number line, ordering and 'how far from zero'",
      discovery: {
        problem:
          "On a cold morning Leh is −7°C and Shimla is −3°C. Which place is COLDER? Many people pick −3 because 3 is the smaller-looking number. Are they right?",
        idea:
          "Draw a number line. Numbers grow as you move RIGHT. −7 sits further left than −3, so −7 is the smaller number — Leh is colder. The more negative a number is, the smaller it is.",
      },
      body:
        "Draw a line, mark **0** in the middle, the positives to the right and the negatives to the left, equally spaced:\n\nThe number line gives two facts at a glance.\n\n- **Order:** for any two integers, the one further to the *right* is *greater*. So −2 > −5, and every negative number is less than every positive number, and less than 0.\n- **Distance from zero** (its *absolute value*, written |n|): just how many steps the number is from 0, ignoring the sign. |−5| = 5 and |5| = 5. Distance is never negative.\n\nA handy picture: two numbers that are opposites, like −4 and 4, are the *same distance* from 0 on opposite sides.",
      keyPoints: [
        "Further right = greater; further left = smaller.",
        "Every negative < 0 < every positive.",
        "|n| = distance of n from 0, so it is never negative: |−6| = 6.",
        "Opposites (−4 and 4) are equally far from zero.",
      ],
      diagrams: [
        '<svg viewBox="0 0 420 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A number line from minus five to five with zero in the middle"><line x1="20" y1="40" x2="400" y2="40" stroke="#334155" stroke-width="2"/><polygon points="400,40 390,35 390,45" fill="#334155"/><polygon points="20,40 30,35 30,45" fill="#334155"/><line x1="48" y1="33" x2="48" y2="47" stroke="#334155" stroke-width="2"/><text x="48" y="62" text-anchor="middle" font-size="12" fill="#0ea5e9">-5</text><line x1="86" y1="33" x2="86" y2="47" stroke="#334155" stroke-width="2"/><text x="86" y="62" text-anchor="middle" font-size="12" fill="#0ea5e9">-4</text><line x1="124" y1="33" x2="124" y2="47" stroke="#334155" stroke-width="2"/><text x="124" y="62" text-anchor="middle" font-size="12" fill="#0ea5e9">-3</text><line x1="162" y1="33" x2="162" y2="47" stroke="#334155" stroke-width="2"/><text x="162" y="62" text-anchor="middle" font-size="12" fill="#0ea5e9">-2</text><line x1="200" y1="33" x2="200" y2="47" stroke="#334155" stroke-width="2"/><text x="200" y="62" text-anchor="middle" font-size="12" fill="#0ea5e9">-1</text><line x1="238" y1="30" x2="238" y2="50" stroke="#334155" stroke-width="3"/><text x="238" y="64" text-anchor="middle" font-size="13" fill="#334155">0</text><line x1="276" y1="33" x2="276" y2="47" stroke="#334155" stroke-width="2"/><text x="276" y="62" text-anchor="middle" font-size="12" fill="#16a34a">1</text><line x1="314" y1="33" x2="314" y2="47" stroke="#334155" stroke-width="2"/><text x="314" y="62" text-anchor="middle" font-size="12" fill="#16a34a">2</text><line x1="352" y1="33" x2="352" y2="47" stroke="#334155" stroke-width="2"/><text x="352" y="62" text-anchor="middle" font-size="12" fill="#16a34a">3</text></svg>',
      ],
      whyItWorks:
        "On a horizontal line, 'bigger' should mean 'further along in the positive direction', i.e. further right. That single rule fixes the order of every integer at once — no special cases for negatives needed.",
      strategies: ["Draw a diagram", "Compare positions, not digits"],
      thinkDeeper:
        "Is there a smallest integer? A largest? Why does this make the integers different from the counting numbers, which DO have a smallest member (1)?",
    },
    {
      heading: "Adding integers — walking the line and using tokens",
      discovery: {
        problem:
          "You owe a friend ₹6 (that's −6). You then earn ₹4 (that's +4) and give it all to her. Do you still owe money, and how much? Try it before reading on.",
        idea:
          "Start at −6 and move 4 steps in the positive direction → you land on −2. You still owe ₹2. Adding a positive moves you RIGHT; adding a negative moves you LEFT.",
      },
      body:
        "**Number-line method:** start at the first number. To add a *positive*, step **right**; to add a *negative*, step **left**. Where you stop is the answer.\n\n- (−6) + 4 → start at −6, step right 4 → **−2**.\n- (−2) + (−3) → start at −2, step left 3 → **−5**.\n\n**Token / charge method:** let a red token be +1 and a blue token be −1. A red and a blue together make a **zero pair** and cancel. To add, throw all the tokens together and remove every zero pair; whatever survives is the answer.\n\n- For (−6) + 4: six blue and four red give four zero pairs, leaving 2 blue → **−2**.\n\nTwo quick rules fall out:\n\n- **Same sign:** add the sizes, keep the sign. (−3) + (−5) = −8.\n- **Opposite signs:** subtract the smaller size from the larger, keep the sign of the bigger one. (−7) + 4 = −3; 7 + (−4) = 3.",
      keyPoints: [
        "Add a positive → step right; add a negative → step left.",
        "A +1 and a −1 form a zero pair and cancel.",
        "Same signs: add sizes, keep the sign.",
        "Different signs: subtract sizes, take the sign of the larger one.",
      ],
      diagrams: [
        '<svg viewBox="0 0 420 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing minus six plus four landing on minus two"><line x1="20" y1="55" x2="400" y2="55" stroke="#334155" stroke-width="2"/><line x1="48" y1="50" x2="48" y2="60" stroke="#334155" stroke-width="2"/><text x="48" y="74" text-anchor="middle" font-size="11" fill="#0ea5e9">-6</text><line x1="86" y1="50" x2="86" y2="60" stroke="#334155" stroke-width="2"/><text x="86" y="74" text-anchor="middle" font-size="11" fill="#0ea5e9">-5</text><line x1="124" y1="50" x2="124" y2="60" stroke="#334155" stroke-width="2"/><text x="124" y="74" text-anchor="middle" font-size="11" fill="#0ea5e9">-4</text><line x1="162" y1="50" x2="162" y2="60" stroke="#334155" stroke-width="2"/><text x="162" y="74" text-anchor="middle" font-size="11" fill="#0ea5e9">-3</text><line x1="200" y1="50" x2="200" y2="60" stroke="#334155" stroke-width="3"/><text x="200" y="74" text-anchor="middle" font-size="11" fill="#ef4444">-2</text><line x1="238" y1="50" x2="238" y2="60" stroke="#334155" stroke-width="2"/><text x="238" y="74" text-anchor="middle" font-size="11" fill="#0ea5e9">-1</text><line x1="276" y1="48" x2="276" y2="62" stroke="#334155" stroke-width="2"/><text x="276" y="74" text-anchor="middle" font-size="11" fill="#334155">0</text><path d="M48 40 Q124 18 200 40" fill="none" stroke="#16a34a" stroke-width="2"/><polygon points="200,40 191,35 193,44" fill="#16a34a"/><text x="124" y="20" text-anchor="middle" font-size="11" fill="#16a34a">+4 (4 steps right)</text></svg>',
      ],
      whyItWorks:
        "Adding a number is just 'continue travelling that far in that number's direction'. A positive points right, a negative points left, so a single trip along the line settles every sum. Zero pairs work because +1 and −1 are exact opposites: together they cancel to nothing.",
      strategies: ["Use a model (number line / tokens)", "Cancel zero pairs"],
    },
    {
      heading: "Subtracting integers — and why minus-a-minus is a plus",
      discovery: {
        problem:
          "At 6 a.m. it was −4°C. By noon it was 9°C. By HOW MANY degrees did the temperature rise? Subtraction of integers answers 'how far apart, and which way'.",
        idea:
          "The rise is 9 − (−4). On the line, −4 up to 9 is 13 steps. So 9 − (−4) = 13 — subtracting the negative gave a *bigger* answer than 9. Subtracting is the same as adding the opposite.",
      },
      body:
        "The key rule: **to subtract an integer, add its opposite.**\n\na − b = a + (−b)\n\n- 5 − 8 = 5 + (−8) = **−3**.\n- 3 − (−6) = 3 + (+6) = **9**.\n- (−2) − (−5) = (−2) + (+5) = **3**.\n\nSo a *double minus* turns into a plus: − (−6) means 'the opposite of −6', which is +6.\n\n**On the line**, a − b is the journey *from* b *to* a: count the steps and note the direction (right = positive, left = negative). From −4 to 9 is 13 steps right, so 9 − (−4) = 13.",
      keyPoints: [
        "Subtract by adding the opposite: a − b = a + (−b).",
        "− (−n) = +n  (minus a minus is a plus).",
        "a − b is the signed distance from b to a on the number line.",
        "Subtracting a negative makes the answer larger.",
      ],
      whyItWorks:
        "Think with tokens: taking away 3 blue (−1) tokens leaves the pile MORE positive by 3 — exactly the same effect as ADDING 3 red (+1) tokens. Removing negatives and adding positives do the same job, which is why a − (−3) = a + 3.",
      strategies: ["Add the opposite", "Work backwards (gap on the line)"],
      thinkDeeper:
        "Is integer subtraction commutative? Test 5 − 3 against 3 − 5. What is the relationship between a − b and b − a in general?",
    },
    {
      heading: "Neighbours: predecessor and successor",
      discovery: {
        problem:
          "What is the number just BEFORE −7 on the number line? And the one just after? People often say −6 comes before −7. Check on the line.",
        idea:
          "The *successor* is one step right (add 1); the *predecessor* is one step left (subtract 1). The successor of −7 is −6, and its predecessor is −8 — going left makes a negative number SMALLER.",
      },
      body:
        "Every integer has exactly two neighbours.\n\n- **Successor** = the next integer, one step *right*: successor of n is n + 1. Successor of −1 is 0; successor of −7 is −6.\n- **Predecessor** = the previous integer, one step *left*: predecessor of n is n − 1. Predecessor of 0 is −1; predecessor of −7 is −8.\n\nUnlike the counting numbers, the integers run forever in *both* directions — there is no first and no last integer.",
      keyPoints: [
        "Successor of n = n + 1 (one step right).",
        "Predecessor of n = n − 1 (one step left).",
        "For negatives, the predecessor is more negative (smaller): pred(−7) = −8.",
        "Integers have no smallest and no largest member.",
      ],
      whyItWorks:
        "On the number line consecutive integers are one step apart. 'Just after' simply means 'one step in the positive direction', i.e. +1; 'just before' means one step the other way, i.e. −1. The rule is the same everywhere, positive or negative.",
      strategies: ["Step along the line", "Beware the negative trap"],
    },
  ],
  learn: {
    flashcards: [
      { front: "What are the integers?", back: "The whole numbers together with their negatives: …, −3, −2, −1, 0, 1, 2, 3, …" },
      { front: "Is 0 positive or negative?", back: "Neither — 0 is the dividing line between the positives and negatives." },
      { front: "Which is greater, −2 or −5?", back: "−2 (it is further right on the number line; −5 is smaller)." },
      { front: "What does |n| mean?", back: "The distance of n from 0, so it is never negative: |−6| = 6." },
      { front: "How do you subtract an integer?", back: "Add its opposite: a − b = a + (−b). So 3 − (−6) = 3 + 6 = 9." },
      { front: "What is the successor of −7?", back: "−6 (one step right, i.e. add 1)." },
      { front: "Adding two negatives, e.g. (−3) + (−5)?", back: "Same sign → add the sizes and keep the sign: −8." },
    ],
    formulae: [
      { name: "Opposite (additive inverse)", rule: "n + (−n) = 0; the opposite of n is −n" },
      { name: "Absolute value", rule: "|n| = distance of n from 0 (never negative)" },
      { name: "Subtraction", rule: "a − b = a + (−b)" },
      { name: "Double negative", rule: "−(−n) = n" },
      { name: "Successor / predecessor", rule: "succ(n) = n + 1, pred(n) = n − 1" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "int-mcq-q01",
        question: "A submarine is 200 m below sea level. Which integer represents its depth?",
        options: ["+200", "−200", "200²", "0"],
        answerIndex: 1,
        explanation: "Below sea level is the negative direction, so 200 m below is −200.",
        guideRef: "Why we need numbers below zero",
        difficulty: "warmup",
        strategy: "Look for opposites",
      },
      {
        id: "int-mcq-q02",
        question: "Which of these is an integer but is neither positive nor negative?",
        options: ["1", "−1", "0", "½"],
        answerIndex: 2,
        explanation: "0 is an integer and sits exactly between the positives and negatives, so it is neither.",
        guideRef: "Why we need numbers below zero",
        difficulty: "warmup",
      },
      {
        id: "int-mcq-q03",
        question: "What is the opposite (additive inverse) of −9?",
        options: ["9", "−9", "0", "1/9"],
        answerIndex: 0,
        explanation: "The opposite of −9 is +9, because −9 + 9 = 0.",
        guideRef: "Why we need numbers below zero",
        difficulty: "warmup",
      },
      {
        id: "int-mcq-q04",
        question: "On the number line, which integer is the greatest?",
        options: ["−10", "−1", "0", "3"],
        answerIndex: 3,
        explanation: "The number furthest to the right is greatest. 3 is the only positive, so it is the greatest.",
        guideRef: "The integer number line, ordering and 'how far from zero'",
        difficulty: "warmup",
      },
      {
        id: "int-mcq-q05",
        question: "What is the value of |−7|?",
        options: ["−7", "7", "0", "14"],
        answerIndex: 1,
        explanation: "Absolute value is distance from 0, so |−7| = 7. It is never negative.",
        guideRef: "The integer number line, ordering and 'how far from zero'",
        difficulty: "warmup",
      },
      {
        id: "int-mcq-q06",
        question: "What is the successor of −1?",
        options: ["−2", "0", "1", "−1"],
        answerIndex: 1,
        explanation: "The successor is one step right: −1 + 1 = 0.",
        guideRef: "Neighbours: predecessor and successor",
        difficulty: "warmup",
      },
      {
        id: "int-mcq-q07",
        question: "Which is colder: a temperature of −7°C or −3°C?",
        options: ["−7°C", "−3°C", "Same", "Cannot tell"],
        answerIndex: 0,
        explanation: "−7 is further left on the number line, so it is the smaller number — colder. (Bigger digit, but more negative.)",
        guideRef: "The integer number line, ordering and 'how far from zero'",
        difficulty: "core",
        hints: [
          "Picture both numbers on the number line.",
          "Which one is further to the LEFT of zero?",
          "Further left = smaller = colder.",
        ],
        strategy: "Compare positions, not digits",
      },
      {
        id: "int-mcq-q08",
        question: "What is (−6) + 4?",
        options: ["−10", "−2", "2", "10"],
        answerIndex: 1,
        explanation: "Start at −6 and step right 4 → −2. (Different signs: 6 − 4 = 2, keep the sign of the larger size, which is negative.)",
        guideRef: "Adding integers — walking the line and using tokens",
        difficulty: "core",
        hints: [
          "Adding +4 means stepping right.",
          "Start at −6 and count 4 steps right.",
          "Signs differ → subtract 6 − 4 and keep the negative sign.",
        ],
        strategy: "Use a model (number line / tokens)",
      },
      {
        id: "int-mcq-q09",
        question: "What is (−3) + (−5)?",
        options: ["−8", "2", "−2", "8"],
        answerIndex: 0,
        explanation: "Same sign: add the sizes (3 + 5 = 8) and keep the sign → −8.",
        guideRef: "Adding integers — walking the line and using tokens",
        difficulty: "core",
        hints: ["Both numbers are negative.", "Add the sizes 3 + 5.", "Keep the negative sign."],
        strategy: "Cancel zero pairs",
      },
      {
        id: "int-mcq-q10",
        question: "What is 5 − 8?",
        options: ["3", "−3", "13", "−13"],
        answerIndex: 1,
        explanation: "5 − 8 = 5 + (−8) = −3.",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "core",
        hints: ["Rewrite as 5 + (−8).", "Different signs → subtract sizes.", "8 − 5 = 3, keep the negative sign."],
        strategy: "Add the opposite",
      },
      {
        id: "int-mcq-q11",
        question: "What is 3 − (−6)?",
        options: ["−3", "−9", "9", "3"],
        answerIndex: 2,
        explanation: "Subtract by adding the opposite: 3 − (−6) = 3 + 6 = 9.",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "core",
        hints: ["A minus-a-minus becomes a plus.", "Rewrite as 3 + 6.", "Add them."],
        strategy: "Add the opposite",
      },
      {
        id: "int-mcq-q12",
        question: "What is the predecessor of −7?",
        options: ["−6", "−8", "6", "7"],
        answerIndex: 1,
        explanation: "Predecessor is one step left: −7 − 1 = −8.",
        guideRef: "Neighbours: predecessor and successor",
        difficulty: "core",
        hints: ["Predecessor = the number just before.", "Move one step LEFT.", "Going left makes a negative smaller: −8."],
        strategy: "Step along the line",
      },
      {
        id: "int-mcq-q13",
        question: "Arrange from smallest to largest: −2, 3, −5, 0.",
        options: ["−5, −2, 0, 3", "−2, −5, 0, 3", "0, −2, −5, 3", "3, 0, −2, −5"],
        answerIndex: 0,
        explanation: "Reading the number line left to right: −5 < −2 < 0 < 3.",
        guideRef: "The integer number line, ordering and 'how far from zero'",
        difficulty: "core",
        hints: ["Smallest is furthest LEFT.", "−5 is more negative than −2.", "Then 0, then the positive 3."],
        strategy: "Draw a diagram",
      },
      {
        id: "int-mcq-q14",
        question: "Which integer has the same absolute value as 8?",
        options: ["−8", "4", "0", "16"],
        answerIndex: 0,
        explanation: "|8| = 8 and |−8| = 8. Opposites are the same distance from 0.",
        guideRef: "The integer number line, ordering and 'how far from zero'",
        difficulty: "core",
        hints: ["Absolute value is distance from 0.", "What other number is 8 steps from 0?", "Its opposite, −8."],
        strategy: "Look for opposites",
      },
      {
        id: "int-mcq-q15",
        question: "At 6 a.m. it was −4°C; by noon it was 9°C. By how many degrees did it rise?",
        options: ["5", "13", "−13", "36"],
        answerIndex: 1,
        explanation: "Rise = 9 − (−4) = 9 + 4 = 13°C.",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "core",
        hints: ["Rise = final − start.", "9 − (−4).", "Minus a minus is plus: 9 + 4 = 13."],
        strategy: "Add the opposite",
      },
      {
        id: "int-mcq-q16",
        question: "What is (−2) − (−5)?",
        options: ["−7", "3", "−3", "7"],
        answerIndex: 1,
        explanation: "(−2) − (−5) = (−2) + 5 = 3.",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "core",
        hints: ["Add the opposite of −5, which is +5.", "−2 + 5.", "Different signs → 5 − 2 = 3, positive."],
        strategy: "Add the opposite",
      },
      {
        id: "int-mcq-q17",
        question: "What is (−12) + 7 + (−3)?",
        options: ["−8", "−2", "2", "8"],
        answerIndex: 0,
        explanation: "Group the negatives: (−12) + (−3) = −15; then −15 + 7 = −8.",
        guideRef: "Adding integers — walking the line and using tokens",
        difficulty: "challenge",
        hints: [
          "Collect all the negatives together first.",
          "(−12) + (−3) = −15.",
          "−15 + 7: subtract sizes, keep the negative → −8.",
        ],
        strategy: "Cancel zero pairs",
      },
      {
        id: "int-mcq-q18",
        question: "Which statement is ALWAYS true for any two integers a and b?",
        options: [
          "a − b = b − a",
          "a − b = a + (−b)",
          "|a| is always equal to a",
          "If a is bigger-looking, a is greater",
        ],
        answerIndex: 1,
        explanation: "Subtraction always means adding the opposite. The others fail for negatives (e.g. 5 − 3 ≠ 3 − 5, |−4| ≠ −4).",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "challenge",
        hints: [
          "Test each option with a negative example.",
          "Does 5 − 3 equal 3 − 5? Does |−4| equal −4?",
          "Only the 'add the opposite' rule never fails.",
        ],
        strategy: "Try small cases",
      },
      {
        id: "int-mcq-q19",
        question: "The sum of three consecutive integers is 0. What is the largest of them?",
        options: ["0", "1", "2", "3"],
        answerIndex: 1,
        explanation: "Consecutive integers around 0: −1, 0, 1 add to 0. The largest is 1. (The middle one must be the average, 0.)",
        guideRef: "Neighbours: predecessor and successor",
        difficulty: "challenge",
        hints: [
          "Consecutive integers are n−1, n, n+1.",
          "Their sum is 3n. Set 3n = 0.",
          "So n = 0 and the integers are −1, 0, 1.",
        ],
        strategy: "Introduce a variable",
      },
      {
        id: "int-mcq-q20",
        question: "Starting at 0, a token moves +5, then −8, then +2, then −1. Where does it end?",
        options: ["−2", "2", "−4", "16"],
        answerIndex: 0,
        explanation: "Positives: 5 + 2 = 7. Negatives: 8 + 1 = 9. Total = 7 − 9 = −2.",
        guideRef: "Adding integers — walking the line and using tokens",
        difficulty: "challenge",
        hints: [
          "Add all the rightward moves, then all the leftward moves.",
          "Right total = 5 + 2 = 7; left total = 8 + 1 = 9.",
          "7 − 9 = −2.",
        ],
        strategy: "Cancel zero pairs",
      },
    ],
    qa: [
      {
        id: "int-qa-q01",
        question:
          "A lift starts at the ground floor (0). It goes up 3 floors, down 7 floors, then up 1 floor. Which floor does it end on? Show your working.",
        modelAnswer:
          "Combine the moves: 0 + 3 − 7 + 1. Up 3 → floor 3; down 7 → 3 − 7 = −4; up 1 → −4 + 1 = −3. The lift ends on floor −3, i.e. 3 floors below the ground.",
        markScheme: [
          "write the moves as 0 + 3 − 7 + 1 | combine in order",
          "reach −4 after the down 7 | correct intermediate",
          "−3 | floor 3 below ground",
        ],
        commonError: "Ignoring direction and just adding 3 + 7 + 1 = 11, or stopping at a positive answer.",
        guideRef: "Adding integers — walking the line and using tokens",
        difficulty: "core",
        numericAnswer: -3,
        hints: ["Up is positive, down is negative.", "Do the moves one at a time.", "0 + 3 − 7 + 1 = ?"],
        strategy: "Use a model (number line / tokens)",
        solutions: [
          {
            label: "Step by step on the line",
            steps: ["Start at 0, up 3 → 3.", "Down 7 → 3 − 7 = −4.", "Up 1 → −4 + 1 = −3."],
          },
          {
            label: "Group same directions",
            steps: ["Up total = 3 + 1 = 4.", "Down total = 7.", "4 − 7 = −3."],
          },
        ],
      },
      {
        id: "int-qa-q02",
        question: "Work out (−8) + 5. Explain in words what happens on the number line.",
        modelAnswer:
          "Start at −8. Adding +5 means stepping 5 places to the right, landing on −3. Because the signs differ, you subtract the sizes (8 − 5 = 3) and keep the sign of the larger size (negative), giving −3.",
        markScheme: [
          "start at −8 and step right 5 | step right for a positive",
          "subtract sizes 8 − 5 = 3",
          "−3",
        ],
        commonError: "Adding the sizes to get −13, or giving +3 (wrong sign).",
        guideRef: "Adding integers — walking the line and using tokens",
        difficulty: "core",
        numericAnswer: -3,
        hints: ["Adding a positive moves you right.", "Signs differ → subtract the sizes.", "Keep the sign of the bigger size."],
        strategy: "Use a model (number line / tokens)",
      },
      {
        id: "int-qa-q03",
        question: "Compute 3 − (−6) − 2. Show each step and state the rule you used.",
        modelAnswer:
          "Subtracting means adding the opposite. 3 − (−6) = 3 + 6 = 9. Then 9 − 2 = 7. So 3 − (−6) − 2 = 7.",
        markScheme: [
          "use a − b = a + (−b) | minus a minus is plus",
          "3 + 6 = 9",
          "7",
        ],
        commonError: "Treating 3 − (−6) as 3 − 6 = −3 (forgetting the double negative becomes a plus).",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "core",
        numericAnswer: 7,
        hints: ["Deal with − (−6) first.", "− (−6) = +6.", "Then subtract the 2."],
        strategy: "Add the opposite",
      },
      {
        id: "int-qa-q04",
        question: "Put these in order from smallest to largest and explain how you decided: 4, −6, 0, −1, 2.",
        modelAnswer:
          "Reading the number line from left (smallest) to right (largest): −6, −1, 0, 2, 4. The further left an integer sits, the smaller it is, so the most negative number, −6, comes first and the largest positive, 4, comes last.",
        markScheme: [
          "−6, −1, 0, 2, 4 | correct order",
          "further left = smaller | use the number line",
          "−6 smallest and 4 largest",
        ],
        commonError: "Ordering by digit size and putting −1 before −6 (forgetting −6 is smaller).",
        guideRef: "The integer number line, ordering and 'how far from zero'",
        difficulty: "core",
        hints: ["Place each number on a number line.", "Smallest is furthest left.", "Negatives come before 0, which comes before positives."],
        strategy: "Draw a diagram",
      },
      {
        id: "int-qa-q05",
        question:
          "The temperature in Srinagar was −2°C at midnight. It fell by 4 degrees by 3 a.m., then rose by 9 degrees by noon. What was the noon temperature? Show your working.",
        modelAnswer:
          "Fell by 4: −2 − 4 = −6°C at 3 a.m. Rose by 9: −6 + 9 = 3°C at noon. The noon temperature was 3°C.",
        markScheme: [
          "−2 − 4 = −6 | fall is subtraction",
          "−6 + 9 = 3 | rise is addition",
          "3°C",
        ],
        commonError: "Adding the 4 instead of subtracting it (a fall lowers the temperature).",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "core",
        numericAnswer: 3,
        hints: ["A fall means subtract; a rise means add.", "Start at −2, subtract 4.", "Then add 9 to your answer."],
        strategy: "Use a model (number line / tokens)",
        solutions: [
          {
            label: "Two steps",
            steps: ["−2 − 4 = −6.", "−6 + 9 = 3."],
          },
          {
            label: "Net change first",
            steps: ["Net change = −4 + 9 = +5.", "−2 + 5 = 3."],
          },
        ],
      },
      {
        id: "int-qa-q06",
        question:
          "Riya has ₹15. She owes ₹20 to Aman and ₹8 to Sara. If she paid everyone what she could right now, what would her overall position be (in rupees, with sign)? Explain what the sign means.",
        modelAnswer:
          "Her money is +15; her debts are −20 and −8, totalling −28. Overall position = 15 + (−28) = −13. The negative sign means she would still OWE ₹13 after paying all she has.",
        markScheme: [
          "money +15, debts −20 and −8 | represent debt as negative",
          "total debt −28 and 15 − 28",
          "−13 (still owes ₹13)",
        ],
        commonError: "Treating debts as positive and getting +43, or ignoring the sign of the final answer.",
        guideRef: "Adding integers — walking the line and using tokens",
        difficulty: "core",
        numericAnswer: -13,
        hints: ["Money is positive, debt is negative.", "Total the debts: −20 + (−8).", "Add her +15 to that total."],
        strategy: "Use a model (number line / tokens)",
      },
      {
        id: "int-qa-q07",
        question:
          "Challenge: Find the sum of all the integers from −50 to 50 inclusive. Explain a clever way to do it without adding 101 numbers one by one.",
        modelAnswer:
          "Every positive integer is paired with its opposite: (−50) + 50 = 0, (−49) + 49 = 0, and so on. All such pairs cancel to 0, and 0 itself adds nothing. So the total is 0.",
        markScheme: [
          "pair each n with −n | use opposites",
          "each pair sums to 0",
          "0",
        ],
        commonError: "Trying to add term by term, or forgetting 0 is included and panicking about an 'odd one out'.",
        guideRef: "Why we need numbers below zero",
        difficulty: "challenge",
        numericAnswer: 0,
        hints: [
          "Don't add in order — look for cancellation.",
          "What does n + (−n) equal?",
          "Pair 50 with −50, 49 with −49, … everything cancels.",
        ],
        strategy: "Look for invariants",
        solutions: [
          {
            label: "Pair the opposites",
            steps: [
              "List as (−50 + 50) + (−49 + 49) + … + (−1 + 1) + 0.",
              "Each bracket is 0.",
              "Sum of all those zeros (plus 0) is 0.",
            ],
          },
        ],
      },
      {
        id: "int-qa-q08",
        question:
          "Challenge: Two integers add up to −3. Their difference (larger minus smaller) is 11. Find the two integers.",
        modelAnswer:
          "Call them a (larger) and b (smaller). a + b = −3 and a − b = 11. Adding the two equations: 2a = 8, so a = 4. Then b = −3 − 4 = −7. The integers are 4 and −7. Check: 4 + (−7) = −3 and 4 − (−7) = 11. ✓",
        markScheme: [
          "set up a + b = −3 and a − b = 11 | name the integers",
          "add equations → 2a = 8, a = 4",
          "b = −7 and a = 4 (check both conditions)",
        ],
        commonError: "Forgetting one integer is negative, or computing the difference as 4 − 7 instead of 4 − (−7).",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "challenge",
        hints: [
          "Name the larger a and the smaller b.",
          "Write a + b = −3 and a − b = 11.",
          "Add the equations to remove b.",
        ],
        strategy: "Introduce a variable",
        solutions: [
          {
            label: "Add the equations",
            steps: ["a + b = −3, a − b = 11.", "Add: 2a = 8 → a = 4.", "b = −3 − 4 = −7."],
          },
          {
            label: "Reason about the gap",
            steps: [
              "They are 11 apart and average to −3 ÷ ... actually sum −3.",
              "Half the gap is 5.5 above/below the midpoint −1.5.",
              "−1.5 + 5.5 = 4 and −1.5 − 5.5 = −7.",
            ],
          },
        ],
      },
      {
        id: "int-qa-q09",
        question:
          "Challenge: On a number line, point A is at −12 and point B is at 8. A bug starts at A and must reach B. (a) How many unit steps right does it take? (b) If instead it walks from B to A, what signed value describes its trip? Explain the link between the two answers.",
        modelAnswer:
          "(a) Distance A to B = 8 − (−12) = 8 + 12 = 20 steps to the right. (b) From B to A = A − B = −12 − 8 = −20, i.e. 20 steps in the negative (left) direction. The two trips cover the same 20-step distance but in opposite directions, so the signed values are opposites: +20 and −20.",
        markScheme: [
          "8 − (−12) = 20 | distance is 20",
          "−12 − 8 = −20 | reverse trip is signed −20",
          "same distance, opposite sign | they are opposites",
        ],
        commonError: "Getting 8 − 12 = −4 for the distance by mishandling the double negative.",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "challenge",
        numericAnswer: 20,
        hints: [
          "Distance from b to a is a − b.",
          "8 − (−12): the double negative becomes +12.",
          "Reverse trip swaps the order → opposite sign.",
        ],
        strategy: "Work backwards (gap on the line)",
        solutions: [
          {
            label: "Subtract to find the gap",
            steps: ["A→B = 8 − (−12) = 20 (rightward).", "B→A = −12 − 8 = −20 (leftward).", "Same size, opposite signs."],
          },
        ],
      },
      {
        id: "int-qa-q10",
        question:
          "Explain, using tokens (a red = +1, a blue = −1), why subtracting a negative is the same as adding a positive. Use 5 − (−3) as your example.",
        modelAnswer:
          "Represent 5 as five red tokens. To subtract −3 you must REMOVE three blue tokens — but there are none, so first add three zero pairs (3 red + 3 blue), which doesn't change the value. Now remove the three blue tokens. What remains is five red + three red = eight red = 8. Removing three −1 tokens left the pile exactly as if you had ADDED three +1 tokens, so 5 − (−3) = 5 + 3 = 8.",
        markScheme: [
          "model 5 as red tokens | set up tokens",
          "add zero pairs so there are blues to remove | doesn't change value",
          "remove the 3 blues to leave 8 | result equals 5 + 3 = 8",
        ],
        commonError: "Thinking 5 − (−3) = 5 − 3 = 2 (treating it as an ordinary subtraction).",
        guideRef: "Subtracting integers — and why minus-a-minus is a plus",
        difficulty: "challenge",
        numericAnswer: 8,
        hints: [
          "Adding a zero pair (one red + one blue) changes nothing.",
          "You need blue tokens before you can remove blue tokens.",
          "Compare 'remove 3 blues' with 'add 3 reds'.",
        ],
        strategy: "Use a model (number line / tokens)",
        solutions: [
          {
            label: "Tokens / zero pairs",
            steps: [
              "Start: 5 red (= 5).",
              "Add 3 zero pairs: 8 red and 3 blue (still = 5).",
              "Remove (subtract) the 3 blue: 8 red left = 8.",
            ],
          },
          {
            label: "Rule",
            steps: ["5 − (−3) = 5 + 3 = 8."],
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
integers.questionBank.mcqPapers = [
  { id: "int-mcq-paper-1", title: "Integers — MCQ Set A", questions: integers.quiz.mcq.slice(0, 10) },
  { id: "int-mcq-paper-2", title: "Integers — MCQ Set B", questions: integers.quiz.mcq.slice(10) },
];
integers.questionBank.qaPapers = [
  { id: "int-qa-paper-1", title: "Integers — Written Practice A", questions: integers.quiz.qa.slice(0, 6) },
  { id: "int-qa-paper-2", title: "Integers — Challenge Problems", questions: integers.quiz.qa.slice(6) },
];

export default integers;
