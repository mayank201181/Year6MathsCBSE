import type { Topic } from "../types";

// Data Handling — CBSE Class 6 (NCERT Ch. 9 + Ganita Prakash Ch. 4).
// AoPS style: discovery openers, derive-don't-decree, hint ladders,
// multi-method solutions, tiered difficulty, inline SVG graphs.

const dataHandling: Topic = {
  id: "data-handling",
  title: "Data Handling",
  subject: "Maths",
  chapter: "NCERT Ch. 9 + Ganita Prakash Ch. 4 (Data Handling and Presentation)",
  icon: "📊",
  color: "#06b6d4",
  intro:
    "Data is just a pile of facts — favourite fruits, runs scored, rainy days. On its own a pile is hard to read. Data handling is the art of organising that pile (tally marks, tables) and then drawing a picture of it (pictograph, bar graph) so the story jumps out at a glance. We finish with a peek at chance: when is something certain, likely, unlikely or impossible?",
  guide: [
    {
      heading: "Collecting and organising: tally marks and frequency tables",
      discovery: {
        problem:
          "A teacher asks 20 children their favourite fruit and writes the answers in the order they are shouted out: mango, apple, mango, banana, mango, apple, mango, banana, banana, mango, apple, mango, banana, mango, apple, mango, banana, mango, mango, apple. How many like mango? Try counting — and notice how easy it is to lose your place.",
        idea:
          "Raw data in a long line is hard to count. If you make a mark for each answer next to its name (a *tally*), counting becomes safe and quick. Tallies turn a messy list into an organised **frequency table**.",
      },
      body:
        "**Data** is a collection of facts (numbers, words, measurements) gathered for a purpose.\n\nWhen you record data you make one **tally mark** for each item. To make counting easy you bundle them in fives: the fifth mark is drawn *across* the first four, like a gate. So |||| with a line through it means 5.\n\nThe number of times a value appears is its **frequency**. A **frequency table** lists each value with its tally and its frequency.\n\nFrom the fruit data above the table is:\n\n- Mango — 10\n- Apple — 5\n- Banana — 5",
      keyPoints: [
        "Data = organised facts collected for a purpose.",
        "Tally marks are bundled in fives (the 5th crosses the other four).",
        "Frequency = how many times a value occurs.",
        "A frequency table pairs each value with its tally and frequency.",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A frequency table showing mango ten, apple five, banana five using tally marks"><text x="10" y="20" font-size="13" fill="#0f172a">Fruit</text><text x="120" y="20" font-size="13" fill="#0f172a">Tally</text><text x="270" y="20" font-size="13" fill="#0f172a">Freq.</text><line x1="10" y1="28" x2="310" y2="28" stroke="#334155" stroke-width="1"/><text x="10" y="52" font-size="13" fill="#0f172a">Mango</text><line x1="120" y1="40" x2="120" y2="58" stroke="#0891b2" stroke-width="2"/><line x1="128" y1="40" x2="128" y2="58" stroke="#0891b2" stroke-width="2"/><line x1="136" y1="40" x2="136" y2="58" stroke="#0891b2" stroke-width="2"/><line x1="144" y1="40" x2="144" y2="58" stroke="#0891b2" stroke-width="2"/><line x1="116" y1="56" x2="148" y2="42" stroke="#0891b2" stroke-width="2"/><line x1="158" y1="40" x2="158" y2="58" stroke="#0891b2" stroke-width="2"/><line x1="166" y1="40" x2="166" y2="58" stroke="#0891b2" stroke-width="2"/><line x1="174" y1="40" x2="174" y2="58" stroke="#0891b2" stroke-width="2"/><line x1="182" y1="40" x2="182" y2="58" stroke="#0891b2" stroke-width="2"/><line x1="154" y1="56" x2="186" y2="42" stroke="#0891b2" stroke-width="2"/><text x="285" y="52" font-size="13" fill="#0f172a">10</text><text x="10" y="82" font-size="13" fill="#0f172a">Apple</text><line x1="120" y1="70" x2="120" y2="88" stroke="#0891b2" stroke-width="2"/><line x1="128" y1="70" x2="128" y2="88" stroke="#0891b2" stroke-width="2"/><line x1="136" y1="70" x2="136" y2="88" stroke="#0891b2" stroke-width="2"/><line x1="144" y1="70" x2="144" y2="88" stroke="#0891b2" stroke-width="2"/><line x1="116" y1="86" x2="148" y2="72" stroke="#0891b2" stroke-width="2"/><text x="288" y="82" font-size="13" fill="#0f172a">5</text><text x="10" y="112" font-size="13" fill="#0f172a">Banana</text><line x1="120" y1="100" x2="120" y2="118" stroke="#0891b2" stroke-width="2"/><line x1="128" y1="100" x2="128" y2="118" stroke="#0891b2" stroke-width="2"/><line x1="136" y1="100" x2="136" y2="118" stroke="#0891b2" stroke-width="2"/><line x1="144" y1="100" x2="144" y2="118" stroke="#0891b2" stroke-width="2"/><line x1="116" y1="116" x2="148" y2="102" stroke="#0891b2" stroke-width="2"/><text x="288" y="112" font-size="13" fill="#0f172a">5</text></svg>',
      ],
      whyItWorks:
        "Bundling tallies in fives works because our brains count groups faster than single strokes. Three full gates plus two extra marks is read instantly as 5 + 5 + 5 + 2 = 17 — no recounting needed.",
      strategies: ["Organise the data", "Count in groups"],
    },
    {
      heading: "Pictographs: one symbol can stand for many",
      discovery: {
        problem:
          "A shop sold 30, 50 and 20 ice-creams on three days. You want to draw a row of ice-cream pictures for each day. If one picture = 1 ice-cream you would need 100 tiny drawings! How could a single picture stand for more than one ice-cream?",
        idea:
          "Let one symbol mean **10** ice-creams. Then the days need 3, 5 and 2 symbols. The picture stays small but still shows the truth — as long as you write the **key** (one symbol = 10) so the reader can decode it.",
      },
      body:
        "A **pictograph** shows data using a picture or symbol. The most important part is the **key** (or scale): it tells you how many units one symbol represents.\n\nTo *read* a pictograph: count the symbols in a row and multiply by the key. To show a part of a symbol, draw half a symbol (worth half the key).\n\nIf the key is *one ⭐ = 10 books* and a row has 3½ stars, that row stands for 3½ × 10 = **35** books.",
      keyPoints: [
        "A pictograph uses symbols; the key says what one symbol is worth.",
        "Value of a row = number of symbols × key.",
        "A half-symbol means half the key's value.",
        "Always read the key first — the same picture means different amounts with different keys.",
      ],
      diagrams: [
        '<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pictograph of books read where one star equals ten books: Class A three stars, Class B four and a half stars"><text x="10" y="20" font-size="12" fill="#0f172a">Key: one star = 10 books</text><text x="10" y="55" font-size="13" fill="#0f172a">Class A</text><text x="80" y="58" font-size="22" fill="#f59e0b">★</text><text x="105" y="58" font-size="22" fill="#f59e0b">★</text><text x="130" y="58" font-size="22" fill="#f59e0b">★</text><text x="250" y="55" font-size="12" fill="#64748b">= 30</text><text x="10" y="95" font-size="13" fill="#0f172a">Class B</text><text x="80" y="98" font-size="22" fill="#f59e0b">★</text><text x="105" y="98" font-size="22" fill="#f59e0b">★</text><text x="130" y="98" font-size="22" fill="#f59e0b">★</text><text x="155" y="98" font-size="22" fill="#f59e0b">★</text><text x="180" y="98" font-size="22" fill="#fbbf24">⯨</text><text x="250" y="95" font-size="12" fill="#64748b">= 45</text></svg>',
      ],
      whyItWorks:
        "A pictograph is really a frequency table in disguise: each symbol is a unit of counting, just a bigger unit. Choosing a large key keeps the drawing small, but it only stays honest if every symbol is the same size and the key is stated.",
      strategies: ["Choose a sensible scale", "Read the key first"],
      thinkDeeper:
        "If you had to draw 7, 13 and 21 marbles, would one symbol = 10 be a good key? What key would make every row a tidy whole number of symbols?",
    },
    {
      heading: "Bar graphs: drawing, scale and reading",
      discovery: {
        problem:
          "Four friends scored 8, 6, 10 and 4 runs. You draw bars but your graph paper only has 5 lines. If you let one line = 1 run the tallest bar won't fit. What should one line on the axis be worth?",
        idea:
          "On a bar graph the height of each bar shows the value. The **scale** says how many units one step up the axis is worth. Pick a scale so the biggest bar fits *and* the numbers land on grid lines — here one step = 2 runs works nicely.",
      },
      body:
        "A **bar graph** shows data as bars of equal width with gaps between them. The **length (height)** of each bar shows its value, read off a numbered **scale** on the axis.\n\nTo *draw* one: choose a scale (e.g. 1 unit = 2), draw and label the axes, then draw each bar to the right height.\n\nTo *read* one: follow the top of a bar across to the scale.\n\nBars make it easy to compare: the tallest bar is the largest value, the shortest is the smallest. To find a total, read each bar and add.",
      keyPoints: [
        "Bars have equal width and equal gaps; only the height carries meaning.",
        "The scale fixes how many units one step on the axis is worth.",
        "Tallest bar = greatest value; shortest = least.",
        "Choose a scale so the largest value fits and values land on grid lines.",
      ],
      diagrams: [
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar graph of runs scored: Asha eight, Bina six, Charu ten, Devi four, with a vertical scale in steps of two"><line x1="50" y1="20" x2="50" y2="160" stroke="#334155" stroke-width="2"/><line x1="50" y1="160" x2="320" y2="160" stroke="#334155" stroke-width="2"/><text x="40" y="164" font-size="11" fill="#475569" text-anchor="end">0</text><line x1="46" y1="132" x2="50" y2="132" stroke="#334155"/><text x="40" y="136" font-size="11" fill="#475569" text-anchor="end">2</text><line x1="46" y1="104" x2="50" y2="104" stroke="#334155"/><text x="40" y="108" font-size="11" fill="#475569" text-anchor="end">4</text><line x1="46" y1="76" x2="50" y2="76" stroke="#334155"/><text x="40" y="80" font-size="11" fill="#475569" text-anchor="end">6</text><line x1="46" y1="48" x2="50" y2="48" stroke="#334155"/><text x="40" y="52" font-size="11" fill="#475569" text-anchor="end">8</text><line x1="46" y1="20" x2="50" y2="20" stroke="#334155"/><text x="40" y="24" font-size="11" fill="#475569" text-anchor="end">10</text><rect x="70" y="48" width="40" height="112" fill="#06b6d4"/><text x="90" y="174" font-size="11" fill="#0f172a" text-anchor="middle">Asha</text><rect x="135" y="76" width="40" height="84" fill="#06b6d4"/><text x="155" y="174" font-size="11" fill="#0f172a" text-anchor="middle">Bina</text><rect x="200" y="20" width="40" height="140" fill="#06b6d4"/><text x="220" y="174" font-size="11" fill="#0f172a" text-anchor="middle">Charu</text><rect x="265" y="104" width="40" height="56" fill="#06b6d4"/><text x="285" y="174" font-size="11" fill="#0f172a" text-anchor="middle">Devi</text><text x="185" y="194" font-size="12" fill="#0f172a" text-anchor="middle">Runs scored (1 step = 2 runs)</text></svg>',
      ],
      whyItWorks:
        "A bar graph maps amount onto length, and our eyes compare lengths effortlessly. That only stays honest if every step on the scale is equal and the axis starts at 0 — otherwise equal differences in data would look unequal on the page.",
      strategies: ["Draw a diagram", "Choose a sensible scale", "Read top of bar to the scale"],
      thinkDeeper:
        "Two bar graphs use the same data but one starts its axis at 0 and the other at 90. Why might a newspaper choose the one that does NOT start at 0?",
    },
    {
      heading: "Reading a graph to answer questions",
      body:
        "The point of a graph is to *answer questions*. Common questions:\n\n- **Most / least:** find the tallest / shortest bar (or longest / shortest pictograph row).\n- **How many more:** read two values and subtract.\n- **Total:** read every value and add.\n- **Compare:** is one value more than, less than, or double another?\n\nWork carefully: always check the **scale or key** before reading numbers, because the same bar height means different amounts under different scales.",
      keyPoints: [
        "Check the scale / key before reading any value.",
        "'How many more' means subtract the two values.",
        "'In total / altogether' means add all the values.",
        "Comparisons (twice as many, half as many) come from the numbers, not bar widths.",
      ],
      whyItWorks:
        "Every graph question is really an arithmetic question hiding behind a picture. Convert the picture back into numbers using the scale, then it is just adding, subtracting or comparing.",
      strategies: ["Read the scale first", "Translate picture into numbers"],
      discovery: {
        problem:
          "Using the runs bar graph above (Asha 8, Bina 6, Charu 10, Devi 4): how many runs did the team score altogether, and how many more did Charu score than Devi?",
        idea:
          "Read each bar with the scale, then do the arithmetic: total = 8 + 6 + 10 + 4 = 28; Charu − Devi = 10 − 4 = 6. A graph answers questions only after you turn its lengths back into numbers.",
      },
    },
    {
      heading: "Chance: certain, likely, unlikely, impossible",
      discovery: {
        problem:
          "A bag holds 9 red balls and 1 blue ball. Without looking you pull one out. Will it be red? Will it be blue? Will it be green? Describe each outcome in words.",
        idea:
          "Some things are guaranteed, some can't happen, and most are in between. We rank chance with words: **impossible**, **unlikely**, **likely**, **certain**. Red is *likely* (9 of 10), blue is *unlikely* (1 of 10), green is *impossible* (none), and 'a red or blue ball' is *certain*.",
      },
      body:
        "**Chance** (or *likelihood*) describes how possible an outcome is. We can place outcomes on a line of words:\n\n- **Impossible** — can never happen (rolling a 7 on an ordinary die).\n- **Unlikely** — could happen but probably won't (drawing the 1 blue ball from 9 red + 1 blue).\n- **Likely** — will probably happen (drawing a red ball there).\n- **Certain** — must happen (the sun rising; drawing 'red or blue' from that bag).\n\nThe more ways an outcome can happen out of all the ways, the more likely it is.",
      keyPoints: [
        "Four everyday words: impossible, unlikely, likely, certain.",
        "Impossible = no way it happens; certain = it always happens.",
        "More favourable outcomes (out of the total) → more likely.",
        "'Even chance' (like a fair coin) sits exactly between unlikely and likely.",
      ],
      diagrams: [
        '<svg viewBox="0 0 340 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A likelihood line from impossible on the left to certain on the right with even chance in the middle"><line x1="20" y1="35" x2="320" y2="35" stroke="#334155" stroke-width="2"/><circle cx="20" cy="35" r="4" fill="#ef4444"/><circle cx="170" cy="35" r="4" fill="#f59e0b"/><circle cx="320" cy="35" r="4" fill="#22c55e"/><text x="20" y="20" font-size="11" fill="#0f172a" text-anchor="middle">impossible</text><text x="110" y="55" font-size="11" fill="#0f172a" text-anchor="middle">unlikely</text><text x="170" y="20" font-size="11" fill="#0f172a" text-anchor="middle">even</text><text x="235" y="55" font-size="11" fill="#0f172a" text-anchor="middle">likely</text><text x="320" y="20" font-size="11" fill="#0f172a" text-anchor="middle">certain</text></svg>',
      ],
      whyItWorks:
        "Likelihood words are an informal version of fractions: 'unlikely' means few favourable outcomes out of many, 'even' means about half, 'certain' means all. Counting the outcomes turns a feeling into something you can reason about.",
      strategies: ["Count favourable vs total outcomes", "Place it on the likelihood line"],
    },
  ],
  learn: {
    flashcards: [
      { front: "What is a frequency?", back: "The number of times a particular value appears in the data." },
      { front: "How are tally marks grouped?", back: "In bundles of five — the fifth mark crosses the first four like a gate." },
      { front: "What does the key on a pictograph tell you?", back: "How many units one symbol stands for, e.g. one star = 10 books." },
      { front: "How do you read a value on a bar graph?", back: "Follow the top of the bar across to the numbered scale on the axis." },
      { front: "What does the scale of a bar graph fix?", back: "How many units one step (one grid line) on the axis is worth." },
      { front: "Name the four likelihood words from least to most likely.", back: "Impossible, unlikely, likely, certain." },
      { front: "Why must a bar graph axis usually start at 0?", back: "So equal differences in data look equal on the page — otherwise the graph misleads." },
    ],
    formulae: [
      { name: "Pictograph value", rule: "row value = (number of symbols) × (key)" },
      { name: "Bar value", rule: "value = (number of steps to top of bar) × (scale)" },
      { name: "How many more", rule: "difference = larger value − smaller value" },
      { name: "Total", rule: "total = sum of all the values" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "dh-mcq-q01",
        question: "In tally marks, how is the number 5 shown?",
        options: ["Five separate strokes |||||", "Four strokes with the fifth drawn across them", "A single long stroke", "The digit 5"],
        answerIndex: 1,
        explanation: "Tallies are bundled in fives: the fifth mark is drawn across the first four, making a 'gate' that is read instantly as 5.",
        guideRef: "Collecting and organising: tally marks and frequency tables",
        difficulty: "warmup",
      },
      {
        id: "dh-mcq-q02",
        question: "The frequency of a value in a data set means:",
        options: ["Its position in the list", "How many times it occurs", "Its size", "Whether it is even or odd"],
        answerIndex: 1,
        explanation: "Frequency is simply how many times a particular value appears in the data.",
        guideRef: "Collecting and organising: tally marks and frequency tables",
        difficulty: "warmup",
      },
      {
        id: "dh-mcq-q03",
        question: "On a pictograph the key says: one ⭐ = 10 books. A row has 4 stars. How many books is that?",
        options: ["4", "14", "40", "104"],
        answerIndex: 2,
        explanation: "Value of a row = number of symbols × key = 4 × 10 = 40 books.",
        guideRef: "Pictographs: one symbol can stand for many",
        difficulty: "warmup",
      },
      {
        id: "dh-mcq-q04",
        question: "On a bar graph, what does the height of a bar represent?",
        options: ["The width of the bar", "The value of that item", "The colour chosen", "The number of bars"],
        answerIndex: 1,
        explanation: "All bars have equal width; only the height (length) carries the meaning — it shows the value, read off the scale.",
        guideRef: "Bar graphs: drawing, scale and reading",
        difficulty: "warmup",
      },
      {
        id: "dh-mcq-q05",
        question: "Which word describes rolling a 7 on an ordinary six-faced die?",
        options: ["Certain", "Likely", "Unlikely", "Impossible"],
        answerIndex: 3,
        explanation: "An ordinary die only has faces 1 to 6, so a 7 can never appear — it is impossible.",
        guideRef: "Chance: certain, likely, unlikely, impossible",
        difficulty: "warmup",
      },
      {
        id: "dh-mcq-q06",
        question: "Why do we bundle tally marks in groups of five?",
        options: ["It looks neat", "Because five is the largest digit", "So we can count them quickly in fives", "It is a rule with no reason"],
        answerIndex: 2,
        explanation: "Grouping in fives lets you count 5, 10, 15 … at a glance instead of recounting single strokes.",
        guideRef: "Collecting and organising: tally marks and frequency tables",
        difficulty: "warmup",
      },
      {
        id: "dh-mcq-q07",
        question: "Look at the runs bar graph (Asha 8, Bina 6, Charu 10, Devi 4). Who scored the most runs?",
        options: ["Asha", "Bina", "Charu", "Devi"],
        answerIndex: 2,
        explanation: "The tallest bar is Charu's, reaching 10 on the scale — the greatest value.",
        guideRef: "Reading a graph to answer questions",
        difficulty: "core",
        hints: ["The most runs = the tallest bar.", "Read the top of each bar against the scale.", "Charu's bar reaches 10."],
        strategy: "Read top of bar to the scale",
      },
      {
        id: "dh-mcq-q08",
        question: "On the runs bar graph the scale goes up in steps of 2. Bina's bar reaches the line two steps below 10. How many runs is that?",
        options: ["2", "4", "6", "8"],
        answerIndex: 2,
        explanation: "Two steps of 2 below 10 is 10 − 2 − 2 = 6 runs. (Bina scored 6.)",
        guideRef: "Bar graphs: drawing, scale and reading",
        difficulty: "core",
        hints: ["Each step is worth 2, not 1.", "Start at 10 and come down two steps.", "10 − 2 − 2 = 6."],
        strategy: "Read the scale first",
      },
      {
        id: "dh-mcq-q09",
        question: "Using the runs bar graph, how many MORE runs did Charu score than Devi?",
        options: ["4", "6", "10", "14"],
        answerIndex: 1,
        explanation: "Charu = 10, Devi = 4. 'How many more' means subtract: 10 − 4 = 6.",
        guideRef: "Reading a graph to answer questions",
        difficulty: "core",
        hints: ["Read both bars first.", "'How many more' tells you to subtract.", "10 − 4 = 6."],
        strategy: "Translate picture into numbers",
      },
      {
        id: "dh-mcq-q10",
        question: "A pictograph key is one 🍎 = 5 apples. A row shows 3 whole apples and one half-apple. How many apples?",
        options: ["15", "17", "17.5", "20"],
        answerIndex: 2,
        explanation: "3 whole symbols = 15, a half symbol = half of 5 = 2.5, so 15 + 2.5 = 17.5 apples.",
        guideRef: "Pictographs: one symbol can stand for many",
        difficulty: "core",
        hints: ["Each whole symbol is worth 5.", "A half symbol is worth half the key.", "15 + 2.5 = ?"],
        strategy: "Read the key first",
      },
      {
        id: "dh-mcq-q11",
        question: "A bag has 9 red balls and 1 blue ball. Picking a red ball without looking is best described as:",
        options: ["Impossible", "Unlikely", "Likely", "Certain"],
        answerIndex: 2,
        explanation: "9 out of 10 balls are red, so a red ball is likely (but not certain, since blue is possible).",
        guideRef: "Chance: certain, likely, unlikely, impossible",
        difficulty: "core",
        hints: ["How many of the 10 balls are red?", "9 out of 10 is most but not all.", "Most but not guaranteed = likely."],
        strategy: "Count favourable vs total outcomes",
      },
      {
        id: "dh-mcq-q12",
        question: "Which is the best reason to choose the scale '1 step = 5' rather than '1 step = 1' for data values up to 50?",
        options: ["It makes the bars taller", "The graph would otherwise be far too tall to draw", "It changes the data", "Scales never matter"],
        answerIndex: 1,
        explanation: "With 1 step = 1, a value of 50 needs 50 steps — far too tall. A larger scale keeps the graph a sensible size while still showing the data honestly.",
        guideRef: "Bar graphs: drawing, scale and reading",
        difficulty: "core",
        hints: ["How many steps would 50 need if each step = 1?", "Would that fit on a page?", "A bigger step value shortens the axis."],
        strategy: "Choose a sensible scale",
      },
      {
        id: "dh-mcq-q13",
        question: "From the books pictograph (one ★ = 10 books): Class A has 3 stars, Class B has 4½ stars. How many books did the two classes read altogether?",
        options: ["70", "75", "80", "45"],
        answerIndex: 1,
        explanation: "Class A = 3 × 10 = 30; Class B = 4½ × 10 = 45; total = 30 + 45 = 75 books.",
        guideRef: "Pictographs: one symbol can stand for many",
        difficulty: "core",
        hints: ["Work out each class separately.", "A half star = 5 books.", "30 + 45 = 75."],
        strategy: "Translate picture into numbers",
      },
      {
        id: "dh-mcq-q14",
        question: "A spinner is split into 4 equal coloured parts: red, red, blue, green. Which colour is the spinner MOST likely to land on?",
        options: ["Red", "Blue", "Green", "All equally likely"],
        answerIndex: 0,
        explanation: "Red covers 2 of the 4 equal parts while blue and green cover 1 each, so red is most likely.",
        guideRef: "Chance: certain, likely, unlikely, impossible",
        difficulty: "core",
        hints: ["Count how many parts each colour covers.", "Red has 2 parts, the others have 1 each.", "More parts = more likely."],
        strategy: "Count favourable vs total outcomes",
      },
      {
        id: "dh-mcq-q15",
        question: "Why should the vertical axis of a bar graph usually start at 0?",
        options: ["To save ink", "So equal differences in the data look equal on the graph", "Because 0 is a lucky number", "To make every bar the same height"],
        answerIndex: 1,
        explanation: "If the axis starts above 0, small differences get exaggerated and the graph misleads. Starting at 0 keeps bar lengths in true proportion to the values.",
        guideRef: "Bar graphs: drawing, scale and reading",
        difficulty: "challenge",
        hints: ["What happens to a bar's length if you chop off the bottom of the axis?", "Do the bars still compare fairly?", "A cut axis exaggerates differences."],
        strategy: "Read the scale first",
      },
      {
        id: "dh-mcq-q16",
        question: "Two pictographs of the SAME data use one symbol = 5 in graph P and one symbol = 10 in graph Q. Compared with P, the rows in Q will have:",
        options: ["More symbols", "Fewer symbols", "The same number of symbols", "No symbols"],
        answerIndex: 1,
        explanation: "A bigger key means each symbol carries more, so fewer symbols are needed for the same totals. (e.g. 40 needs 8 symbols at key 5 but only 4 at key 10.)",
        guideRef: "Pictographs: one symbol can stand for many",
        difficulty: "challenge",
        hints: ["Try a value, say 40, with each key.", "40 ÷ 5 versus 40 ÷ 10.", "A larger key → fewer symbols."],
        strategy: "Choose a sensible scale",
      },
      {
        id: "dh-mcq-q17",
        question: "A bar graph shows rainfall: Mon 20 mm, Tue 30 mm, Wed 10 mm, Thu 40 mm. On how many days was the rainfall MORE than 25 mm?",
        options: ["1", "2", "3", "4"],
        answerIndex: 1,
        explanation: "More than 25: Tuesday (30) and Thursday (40) only — that is 2 days. Monday (20) and Wednesday (10) are below 25.",
        guideRef: "Reading a graph to answer questions",
        difficulty: "challenge",
        hints: ["List the four values.", "Which exceed 25?", "30 and 40 do; 20 and 10 do not → 2 days."],
        strategy: "Translate picture into numbers",
      },
      {
        id: "dh-mcq-q18",
        question: "In a class, 8 like cricket, 6 like football, and the rest of the 20 students like hockey. How many like hockey?",
        options: ["6", "8", "14", "20"],
        answerIndex: 0,
        explanation: "Cricket + football = 8 + 6 = 14, so hockey = 20 − 14 = 6.",
        guideRef: "Reading a graph to answer questions",
        difficulty: "challenge",
        hints: ["Add cricket and football first.", "Subtract that from the total of 20.", "20 − 14 = 6."],
        strategy: "Work backwards",
      },
      {
        id: "dh-mcq-q19",
        question: "A coin is tossed. Which statement is true?",
        options: ["Heads is certain", "Tails is impossible", "Heads and tails are equally likely", "Heads is more likely than tails"],
        answerIndex: 2,
        explanation: "A fair coin has two equally likely outcomes — heads or tails — an 'even chance', so neither is more likely.",
        guideRef: "Chance: certain, likely, unlikely, impossible",
        difficulty: "core",
        hints: ["How many possible outcomes are there?", "Are they the same size?", "Two equal outcomes → even chance."],
        strategy: "Count favourable vs total outcomes",
      },
      {
        id: "dh-mcq-q20",
        question: "Which display is BEST for quickly comparing the exact number of books read by 5 different classes?",
        options: ["A long unsorted list of names", "A bar graph", "A single sentence", "No display"],
        answerIndex: 1,
        explanation: "A bar graph lines the values up against one scale, so comparing five classes is instant — far easier than reading a list or a sentence.",
        guideRef: "Reading a graph to answer questions",
        difficulty: "core",
        hints: ["Which option lets you compare heights side by side?", "Lists make you hunt and count.", "Bars share one scale."],
        strategy: "Translate picture into numbers",
      },
    ],
    qa: [
      {
        id: "dh-qa-q01",
        question:
          "20 children named their favourite fruit. The tallies gave: Mango 10, Apple 5, Banana 5. Draw (describe) the frequency table and say which fruit was most popular.",
        modelAnswer:
          "Frequency table — Mango: tally of two full gates, frequency 10; Apple: one gate, frequency 5; Banana: one gate, frequency 5. The frequencies add to 10 + 5 + 5 = 20, matching the number of children. Mango is the most popular fruit (highest frequency, 10).",
        markScheme: [
          "table lists each fruit with its frequency | mango 10, apple 5, banana 5",
          "frequencies total 20",
          "mango most popular",
        ],
        commonError: "Forgetting that the frequencies should add up to the total number of children (20).",
        guideRef: "Collecting and organising: tally marks and frequency tables",
        difficulty: "core",
        hints: ["Pair each fruit with its count.", "Do the counts add to 20?", "Largest count = most popular."],
        strategy: "Organise the data",
      },
      {
        id: "dh-qa-q02",
        question:
          "A pictograph uses one ⭐ = 10 books. Class A has 3 stars, Class B has 4½ stars. How many books did Class B read, and how many more than Class A?",
        modelAnswer:
          "Class B = 4½ × 10 = 45 books. Class A = 3 × 10 = 30 books. Class B read 45 − 30 = 15 more books than Class A.",
        markScheme: [
          "Class B = 45",
          "Class A = 30",
          "difference = 15",
        ],
        commonError: "Treating the half-star as a whole star (counting Class B as 50).",
        guideRef: "Pictographs: one symbol can stand for many",
        difficulty: "core",
        numericAnswer: 15,
        hints: ["A half star is worth half the key (5).", "Work out each class.", "Subtract to compare."],
        solutions: [
          {
            label: "Read then subtract",
            steps: ["Class B = 4½ × 10 = 45.", "Class A = 3 × 10 = 30.", "45 − 30 = 15 more books."],
          },
        ],
      },
      {
        id: "dh-qa-q03",
        question:
          "Runs scored: Asha 8, Bina 6, Charu 10, Devi 4. (a) What total did the team score? (b) Suggest a sensible scale for a bar graph of this data and say why.",
        modelAnswer:
          "(a) Total = 8 + 6 + 10 + 4 = 28 runs. (b) A scale of 1 step = 2 runs is sensible: the largest value (10) needs only 5 steps, every value (8, 6, 10, 4) lands exactly on a grid line, and the graph stays a comfortable size. (1 step = 1 would also work but needs 10 steps.)",
        markScheme: [
          "total = 28",
          "scale 1 step = 2 | suitable scale chosen",
          "reason: values land on grid lines / fits the page",
        ],
        commonError: "Choosing a scale (like 1 step = 3) on which the data values do not land on grid lines.",
        guideRef: "Bar graphs: drawing, scale and reading",
        difficulty: "core",
        numericAnswer: 28,
        hints: ["Add all four scores for the total.", "For the scale, what number divides 8, 6, 10 and 4 neatly?", "Step = 2 keeps it tidy."],
        solutions: [
          {
            label: "Add and choose",
            steps: ["8 + 6 + 10 + 4 = 28.", "All values are even → step of 2 lands on grid lines.", "Largest (10) = 5 steps: fits easily."],
          },
        ],
      },
      {
        id: "dh-qa-q04",
        question:
          "Describe, using the words impossible / unlikely / likely / certain, the chance of each event when one ball is drawn from a bag of 9 red and 1 blue ball: (a) a red ball, (b) a blue ball, (c) a green ball, (d) a red OR blue ball.",
        modelAnswer:
          "(a) Red: likely — 9 of the 10 balls are red. (b) Blue: unlikely — only 1 of 10. (c) Green: impossible — there are no green balls. (d) Red or blue: certain — every ball is red or blue, so it must happen.",
        markScheme: [
          "red = likely",
          "blue = unlikely",
          "green = impossible",
          "red or blue = certain",
        ],
        commonError: "Calling the blue ball 'impossible' — it is rare (unlikely) but still possible.",
        guideRef: "Chance: certain, likely, unlikely, impossible",
        difficulty: "core",
        hints: ["Count how many balls match each event out of 10.", "0 matches = impossible; all 10 = certain.", "Few = unlikely, most = likely."],
        strategy: "Place it on the likelihood line",
      },
      {
        id: "dh-qa-q05",
        question:
          "Explain why two correct pictographs of the SAME data can look completely different, using the idea of a key.",
        modelAnswer:
          "The key sets how much one symbol is worth. If one graph uses one symbol = 5 and another uses one symbol = 10, the same total needs different numbers of symbols (e.g. 40 books = 8 symbols at key 5, but only 4 symbols at key 10). Both are correct because each states its own key; the reader must always read the key before reading the rows.",
        markScheme: [
          "key sets the value of one symbol",
          "bigger key → fewer symbols for the same data | example with a number",
          "both correct if the key is stated / read the key first",
        ],
        commonError: "Thinking the graph with more symbols must show more data — it may just have a smaller key.",
        guideRef: "Pictographs: one symbol can stand for many",
        difficulty: "core",
        hints: ["What does the key control?", "Try the same total with two keys.", "Symbols differ but the data is the same."],
        strategy: "Read the key first",
      },
      {
        id: "dh-qa-q06",
        question:
          "Challenge: A pictograph of toys sold uses one 🧸 = 4 toys. Shop A shows 6 symbols, Shop B shows 4½ symbols, Shop C shows 2 symbols. The three shops are owned by one company. How many toys did the company sell in total?",
        modelAnswer:
          "Shop A = 6 × 4 = 24; Shop B = 4½ × 4 = 18; Shop C = 2 × 4 = 8. Total = 24 + 18 + 8 = 50 toys.",
        markScheme: [
          "Shop A = 24",
          "Shop B = 18 | half symbol = 2",
          "Shop C = 8",
          "total = 50",
        ],
        commonError: "Forgetting the half symbol is worth 2 (half of 4), or adding symbol counts instead of toy values.",
        guideRef: "Pictographs: one symbol can stand for many",
        difficulty: "challenge",
        numericAnswer: 50,
        strategy: "Translate picture into numbers",
        hints: ["Convert each shop's symbols to toys first.", "Half a symbol = half the key = 2.", "Then add the three totals."],
        solutions: [
          {
            label: "Decode each row, then add",
            steps: ["A: 6 × 4 = 24.", "B: 4½ × 4 = 18.", "C: 2 × 4 = 8.", "Total = 24 + 18 + 8 = 50."],
          },
          {
            label: "Add symbols first",
            steps: ["Total symbols = 6 + 4½ + 2 = 12½.", "12½ × 4 = 50 toys.", "(Same answer, fewer multiplications.)"],
          },
        ],
      },
      {
        id: "dh-qa-q07",
        question:
          "Challenge (misleading scale): A bar graph compares two shops' sales — Shop X 102 units, Shop Y 108 units — but its axis starts at 100 instead of 0. Shop Y's bar looks THREE times as tall as Shop X's. Explain why this graph is misleading and what the true comparison is.",
        modelAnswer:
          "Because the axis starts at 100, only the part above 100 is drawn: Shop X shows 2 units of bar, Shop Y shows 8 units of bar, so Y's bar looks 4 times X's (here roughly 'three times' to the eye) even though the real sales are almost equal. The true difference is only 108 − 102 = 6 units, about a 6% difference — the bars exaggerate it hugely. Starting the axis at 0 would show two bars of almost the same height.",
        markScheme: [
          "axis starts at 100 not 0 | cut/truncated axis",
          "only the part above 100 is drawn, exaggerating the difference",
          "true difference = 6 units | sales are nearly equal",
        ],
        commonError: "Believing Shop Y really sold about three times as much as Shop X because its bar is taller.",
        guideRef: "Bar graphs: drawing, scale and reading",
        difficulty: "challenge",
        numericAnswer: 6,
        strategy: "Read the scale first",
        hints: ["Where does the axis start?", "How much of each bar is actually drawn above 100?", "Find the true difference: 108 − 102."],
        solutions: [
          {
            label: "Compare the drawn parts",
            steps: [
              "Drawn height of X = 102 − 100 = 2; of Y = 108 − 100 = 8.",
              "On the page Y looks 8 ÷ 2 = 4 times X.",
              "But real difference = 108 − 102 = 6 units only → nearly equal.",
            ],
          },
        ],
      },
      {
        id: "dh-qa-q08",
        question:
          "Challenge: A bar graph of favourite sports shows Cricket 12, Football 9 and Hockey unknown. The teacher says all 30 students voted once. (a) How many chose hockey? (b) If you spun a fair pointer to pick one student's vote at random, which sport is most likely to come up, and is hockey more or less likely than football?",
        modelAnswer:
          "(a) Hockey = 30 − 12 − 9 = 9 students. (b) Cricket (12) is the most likely single vote because it has the most students. Hockey (9) and football (9) are equally likely, since they have the same number of students.",
        markScheme: [
          "hockey = 9 | 30 − 12 − 9",
          "cricket most likely",
          "hockey and football equally likely",
        ],
        commonError: "Assuming hockey must differ from football, instead of computing it as 9 and comparing.",
        guideRef: "Reading a graph to answer questions",
        difficulty: "challenge",
        numericAnswer: 9,
        strategy: "Work backwards",
        hints: ["Total is 30; subtract the two known values.", "30 − 12 − 9 = ?", "Most votes = most likely; equal votes = equally likely."],
        solutions: [
          {
            label: "Work backwards then compare",
            steps: ["Hockey = 30 − 12 − 9 = 9.", "Most votes is Cricket (12) → most likely.", "Hockey 9 = Football 9 → equally likely."],
          },
        ],
      },
      {
        id: "dh-qa-q09",
        question:
          "A pictograph of mangoes picked uses one 🥭 = 6 mangoes. Riya picked 27 mangoes. How many symbols (whole and part) should her row show? Explain.",
        modelAnswer:
          "27 ÷ 6 = 4 remainder 3, so Riya needs 4 whole symbols (24 mangoes) plus a part symbol for the extra 3. Since 3 is half of 6, she draws half a symbol. Her row = 4½ symbols.",
        markScheme: [
          "27 ÷ 6 = 4 remainder 3",
          "4 whole symbols",
          "extra 3 = half a symbol (since 3 is half of 6) | 4½ symbols",
        ],
        commonError: "Drawing 5 whole symbols (which would mean 30) instead of 4½.",
        guideRef: "Pictographs: one symbol can stand for many",
        difficulty: "core",
        numericAnswer: 4.5,
        tolerance: 0.01,
        hints: ["How many 6s are in 27?", "What is left over, and what fraction of 6 is it?", "3 is half of 6 → half a symbol."],
        solutions: [
          {
            label: "Divide and interpret remainder",
            steps: ["27 ÷ 6 = 4 r 3.", "4 whole symbols = 24.", "Remainder 3 = 3/6 = half a symbol → 4½ symbols."],
          },
        ],
      },
      {
        id: "dh-qa-q10",
        question:
          "Challenge: In a survey of 28 people about their favourite pet, the bar graph shows Dog twice as tall as Cat, and Cat twice as tall as Fish. Everyone picked exactly one of these three pets. How many chose each?",
        modelAnswer:
          "Turn the 'twice as tall' clues into a ratio. Let Fish be 1 part; Cat is twice Fish = 2 parts; Dog is twice Cat = 4 parts. Total parts = 1 + 2 + 4 = 7, and these stand for 28 people, so one part = 28 ÷ 7 = 4. Therefore Fish = 4, Cat = 8, Dog = 16. Check: 4 + 8 + 16 = 28. ✓",
        markScheme: [
          "ratio Fish : Cat : Dog = 1 : 2 : 4",
          "parts add to 7 | one part = 28 ÷ 7 = 4",
          "Fish 4, Cat 8, Dog 16 (totalling 28)",
        ],
        commonError: "Adding the words 'twice' as if they were the actual counts instead of converting the heights into a ratio.",
        guideRef: "Reading a graph to answer questions",
        difficulty: "challenge",
        strategy: "Introduce a variable",
        numericAnswer: 16,
        hints: [
          "Let the smallest (Fish) be 1 part.",
          "Cat is twice Fish (2 parts); Dog is twice Cat (4 parts).",
          "Add the parts (7) and divide the total 28 by 7 to find one part.",
        ],
        solutions: [
          {
            label: "Ratio method",
            steps: [
              "Fish : Cat : Dog = 1 : 2 : 4 (each step doubles).",
              "Total parts = 1 + 2 + 4 = 7.",
              "One part = 28 ÷ 7 = 4 → Fish 4, Cat 8, Dog 16.",
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
dataHandling.questionBank.mcqPapers = [
  { id: "dh-mcq-paper-1", title: "Data Handling — MCQ Set A", questions: dataHandling.quiz.mcq.slice(0, 10) },
  { id: "dh-mcq-paper-2", title: "Data Handling — MCQ Set B", questions: dataHandling.quiz.mcq.slice(10) },
];
dataHandling.questionBank.qaPapers = [
  { id: "dh-qa-paper-1", title: "Data Handling — Written Practice A", questions: dataHandling.quiz.qa.slice(0, 5) },
  { id: "dh-qa-paper-2", title: "Data Handling — Written Practice B", questions: dataHandling.quiz.qa.slice(5) },
];

export default dataHandling;
