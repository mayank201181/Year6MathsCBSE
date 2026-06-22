import type { Topic } from "../types";

// Topic: Symmetry (CBSE Class 6). Focus = line (reflection) symmetry:
// lines of symmetry of shapes, letters and regular polygons; mirror images;
// making and completing symmetric figures. AoPS-flavoured: discovery openers,
// hint ladders, multi-method solutions, verified line-of-symmetry counts.

const symmetry: Topic = {
  id: "symmetry",
  title: "Symmetry",
  subject: "Maths",
  chapter: "NCERT Ch. 13 + Ganita Prakash Ch. 9 (Symmetry)",
  icon: "🦋",
  color: "#d946ef",
  intro:
    "Fold a butterfly down the middle and the two wings land exactly on top of each other. That folding line is a line of symmetry. Symmetry is everywhere — in leaves, rangoli, letters and flags — and once you learn to spot the mirror line, you can complete half-drawn pictures, count the symmetries of any shape, and explain why a regular polygon is so perfectly balanced.",
  guide: [
    {
      heading: "Line of symmetry: the fold test",
      discovery: {
        problem:
          "Draw a square on paper and cut it out. Try to fold it so that one half lands exactly on top of the other. How many *different* folds work? Now try the same with a rectangle that is clearly longer than it is wide. Do you get the same number?",
        idea:
          "A fold that makes the two halves match perfectly marks a **line of symmetry** (also called the mirror line). A square has 4 such folds; a non-square rectangle has only 2. The shape decides how many lines of symmetry it has.",
      },
      body:
        "A figure has **line symmetry** (also called *reflection symmetry*) if a straight line can split it into two halves that are exact mirror images — so that folding along the line makes the two halves sit perfectly on top of each other.\n\nThat line is the **line of symmetry**, or **mirror line**. Every point on one side has a matching point on the other side, the *same distance* from the line, straight across it.\n\nNot every figure has one. A scalene triangle (all sides different) has **no** line of symmetry at all.",
      keyPoints: [
        "Line of symmetry = a fold that makes the two halves match exactly.",
        "Also called the mirror line; each point has a mirror partner the same distance across.",
        "A figure can have one, two, three, more, or no lines of symmetry.",
        "The fold test is the quickest way to check: if it matches, it's a line of symmetry.",
      ],
      diagrams: [
        '<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A butterfly with a dashed vertical line of symmetry down the middle"><line x1="120" y1="10" x2="120" y2="140" stroke="#d946ef" stroke-width="2" stroke-dasharray="6 5"/><path d="M120 40 C70 0 20 30 40 70 C20 95 60 120 110 95 Z" fill="#f0abfc" stroke="#86198f" stroke-width="2"/><path d="M120 40 C170 0 220 30 200 70 C220 95 180 120 130 95 Z" fill="#f0abfc" stroke="#86198f" stroke-width="2"/><rect x="117" y="40" width="6" height="60" rx="3" fill="#86198f"/><text x="120" y="150" text-anchor="middle" font-size="11" fill="#86198f">mirror line: left half = right half</text></svg>',
      ],
      whyItWorks:
        "Folding physically lays one half on top of the other. If every edge and corner of the top half lands exactly on the bottom half, then for each point there really is a matching point the same distance on the other side — which is exactly what 'mirror image' means.",
      strategies: ["Draw a diagram", "Use the fold test"],
    },
    {
      heading: "Counting lines of symmetry: shapes and letters",
      discovery: {
        problem:
          "Write the capital letters A, B, C, D, H, O on paper. Which can you fold left-to-right (a vertical fold) so the halves match? Which can you fold top-to-bottom (a horizontal fold)? Is there a letter where BOTH folds work?",
        idea:
          "A figure can have a vertical line of symmetry, a horizontal one, both, or neither. A (vertical only), B and C and D (horizontal only), H and O (both). O even has more, because a circle-like shape is symmetric in many directions.",
      },
      body:
        "To count the lines of symmetry of a figure, try every possible mirror line and keep only the ones that pass the fold test.\n\nSome useful counts to know:\n- **Scalene triangle:** 0 lines.\n- **Isosceles triangle:** 1 line (down from the apex).\n- **Equilateral triangle:** 3 lines.\n- **Rectangle (not a square):** 2 lines (the two midlines, not the diagonals — a diagonal fold does *not* match!).\n- **Square:** 4 lines (2 midlines + 2 diagonals).\n- **Rhombus:** 2 lines (its two diagonals).\n- **Circle:** infinitely many — every line through the centre is a line of symmetry.",
      keyPoints: [
        "Check vertical, horizontal AND diagonal candidate lines.",
        "A rectangle's diagonals are NOT lines of symmetry; a square's are.",
        "Isosceles triangle 1, equilateral 3; rhombus 2 (its diagonals).",
        "A circle has infinitely many lines of symmetry.",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle showing its two lines of symmetry and a square showing its four lines of symmetry"><rect x="20" y="35" width="100" height="60" fill="#fae8ff" stroke="#86198f" stroke-width="2"/><line x1="70" y1="25" x2="70" y2="105" stroke="#d946ef" stroke-width="2" stroke-dasharray="5 4"/><line x1="10" y1="65" x2="130" y2="65" stroke="#d946ef" stroke-width="2" stroke-dasharray="5 4"/><text x="70" y="122" text-anchor="middle" font-size="12" fill="#86198f">rectangle: 2 lines</text><rect x="210" y="30" width="70" height="70" fill="#fae8ff" stroke="#86198f" stroke-width="2"/><line x1="245" y1="20" x2="245" y2="110" stroke="#d946ef" stroke-width="2" stroke-dasharray="5 4"/><line x1="200" y1="65" x2="290" y2="65" stroke="#d946ef" stroke-width="2" stroke-dasharray="5 4"/><line x1="202" y1="22" x2="288" y2="108" stroke="#d946ef" stroke-width="2" stroke-dasharray="5 4"/><line x1="288" y1="22" x2="202" y2="108" stroke="#d946ef" stroke-width="2" stroke-dasharray="5 4"/><text x="245" y="122" text-anchor="middle" font-size="12" fill="#86198f">square: 4 lines</text></svg>',
      ],
      whyItWorks:
        "A rectangle's diagonal fold fails because the two pieces are right-angled triangles of different orientation — a long edge tries to land on a short edge, so they don't match. A square's diagonal fold works because all four sides are equal, so the two triangles are identical. That single difference (equal sides) is what gives the square its extra two lines.",
      strategies: ["Try small cases", "Use the fold test", "Check every direction"],
      thinkDeeper:
        "The letter H has 2 lines of symmetry and X also has 2. But can you find a capital letter (in plain block capitals) that has NO line of symmetry at all? (Try F, G, J, L, P, Q, R, S, Z.)",
    },
    {
      heading: "Why a regular polygon has exactly n lines of symmetry",
      discovery: {
        problem:
          "An equilateral triangle has 3 lines of symmetry, a square has 4, a regular pentagon has 5. Without drawing a regular hexagon, can you predict how many lines of symmetry it has? What about a regular polygon with 100 sides?",
        idea:
          "A **regular** n-gon (all sides equal, all angles equal) has exactly **n** lines of symmetry. So a regular hexagon has 6 and a regular 100-gon has 100. The pattern is simply: number of sides = number of lines of symmetry.",
      },
      body:
        "A **regular polygon** has all sides equal and all angles equal. Each line of symmetry passes through the centre.\n\nThere are two ways the mirror line can sit:\n- When the number of sides is **even**, the lines join opposite **vertices** (corners) and opposite **edge-midpoints** — and there are n of them in total.\n- When the number of sides is **odd**, each line runs from one **vertex** to the **midpoint of the opposite side** — again n of them.\n\nEither way the count comes out to exactly **n**, the number of sides.",
      keyPoints: [
        "Regular n-gon → exactly n lines of symmetry.",
        "Equilateral triangle 3, square 4, regular pentagon 5, regular hexagon 6.",
        "Even n: vertex-to-vertex and midpoint-to-midpoint lines.",
        "Odd n: vertex-to-opposite-midpoint lines.",
      ],
      diagrams: [
        '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A regular pentagon with its five lines of symmetry drawn from each vertex to the midpoint of the opposite side"><polygon points="110,20 186,75 157,165 63,165 34,75" fill="#fae8ff" stroke="#86198f" stroke-width="2"/><line x1="110" y1="20" x2="110" y2="165" stroke="#d946ef" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="186" y1="75" x2="48" y2="165" stroke="#d946ef" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="157" y1="165" x2="34" y2="75" stroke="#d946ef" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="63" y1="165" x2="186" y2="75" stroke="#d946ef" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="34" y1="75" x2="133" y2="165" stroke="#d946ef" stroke-width="1.5" stroke-dasharray="4 3"/><text x="110" y="192" text-anchor="middle" font-size="12" fill="#86198f">regular pentagon: 5 lines</text></svg>',
      ],
      whyItWorks:
        "Because all sides and angles are equal, the polygon looks identical from each of its n vertices. Every line of symmetry has to go through the centre, and each one is pinned down by lining up with a vertex (odd case) or a vertex and its opposite vertex (even case). Counting these positions around the polygon gives exactly n distinct mirror lines — no more, because two different lines through the centre at different angles cannot both be folds of the same regular shape beyond those n positions.",
      strategies: ["Find a pattern", "Generalise from small cases", "Use symmetry"],
    },
    {
      heading: "Reflections, mirror images and completing a figure",
      discovery: {
        problem:
          "Half a heart is drawn, with a vertical mirror line down its straight edge. If a corner of the drawn half is 3 cm to the LEFT of the mirror line, where exactly must the matching corner of the completed heart be?",
        idea:
          "To reflect a point, measure its distance to the mirror line and put its image the SAME distance on the other side, straight across. The corner 3 cm left maps to a corner 3 cm to the right. Doing this for every key point completes the symmetric figure.",
      },
      body:
        "A **reflection** flips a figure across a mirror line to produce its **mirror image**. The image is the same size and shape, but 'handed' the other way — like your reflection raising the opposite hand.\n\nTo **complete a figure** given its line of symmetry: take each key point (corner) of the given half, find its perpendicular distance to the mirror line, and mark its image the same distance on the other side. Join the images in the matching order.\n\nFun fact: this is exactly how an **ink-blot** picture works — drop ink on one side, fold the paper, and the fold line becomes a line of symmetry.",
      keyPoints: [
        "A reflection keeps size and shape but reverses 'handedness'.",
        "Image of a point = same perpendicular distance on the opposite side of the line.",
        "A point ON the mirror line stays exactly where it is.",
        "Completing a half-figure = reflect every corner, then join them up.",
      ],
      diagrams: [
        '<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A flag shape on the left of a vertical mirror line and its reflected mirror image on the right, with a point and its image marked equal distances from the line"><line x1="120" y1="10" x2="120" y2="130" stroke="#d946ef" stroke-width="2" stroke-dasharray="6 5"/><polygon points="60,30 110,45 60,60" fill="#f0abfc" stroke="#86198f" stroke-width="2"/><line x1="60" y1="30" x2="60" y2="120" stroke="#86198f" stroke-width="2"/><polygon points="180,30 130,45 180,60" fill="#f5d0fe" stroke="#86198f" stroke-width="2"/><line x1="180" y1="30" x2="180" y2="120" stroke="#86198f" stroke-width="2"/><circle cx="110" cy="45" r="3" fill="#7c3aed"/><circle cx="130" cy="45" r="3" fill="#7c3aed"/><line x1="110" y1="45" x2="130" y2="45" stroke="#7c3aed" stroke-width="1" stroke-dasharray="2 2"/><text x="120" y="138" text-anchor="middle" font-size="11" fill="#86198f">each point reflects to the same distance across the line</text></svg>',
      ],
      whyItWorks:
        "A reflection is built point-by-point: the mirror line is the perpendicular bisector of the segment joining each point to its image. 'Perpendicular bisector' just means each point and its image are the same distance from the line, straight across it — so the whole image is a balanced copy, and folding along the line lands them exactly together.",
      strategies: ["Work backwards", "Measure distances to the line", "Draw a diagram"],
      thinkDeeper:
        "If you reflect a figure across a mirror line, and then reflect the result across the SAME line again, what do you get back? Why does reflecting twice undo itself?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is a line of symmetry?", back: "A line that folds a figure into two halves that match exactly (mirror images). Also called the mirror line." },
      { front: "How many lines of symmetry does a square have?", back: "4 — two midlines and two diagonals." },
      { front: "How many lines of symmetry does a rectangle (not a square) have?", back: "2 — the two midlines. Its diagonals are NOT lines of symmetry." },
      { front: "Lines of symmetry of an equilateral triangle?", back: "3." },
      { front: "Lines of symmetry of a regular n-gon?", back: "Exactly n (e.g. regular pentagon 5, regular hexagon 6)." },
      { front: "How many lines of symmetry does a circle have?", back: "Infinitely many — every line through the centre." },
      { front: "How do you reflect a point across a mirror line?", back: "Put its image the same perpendicular distance on the opposite side of the line." },
    ],
    formulae: [
      { name: "Regular polygon", rule: "A regular n-gon has exactly n lines of symmetry" },
      { name: "Triangles", rule: "scalene 0, isosceles 1, equilateral 3 lines" },
      { name: "Quadrilaterals", rule: "square 4, rectangle 2, rhombus 2 lines" },
      { name: "Circle", rule: "infinitely many lines of symmetry (any line through the centre)" },
      { name: "Reflection rule", rule: "image point = same perpendicular distance, opposite side of the mirror line" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "sym-mcq-q01",
        question: "A line of symmetry of a figure is a line that…",
        options: [
          "divides the figure into two halves that are mirror images",
          "passes through the longest side",
          "is always horizontal",
          "always joins two corners",
        ],
        answerIndex: 0,
        explanation: "A line of symmetry folds the figure into two matching halves — each half is the mirror image of the other.",
        guideRef: "Line of symmetry: the fold test",
        difficulty: "warmup",
      },
      {
        id: "sym-mcq-q02",
        question: "Another common name for the line of symmetry is the…",
        options: ["mirror line", "number line", "base line", "tangent"],
        answerIndex: 0,
        explanation: "The line of symmetry acts like a mirror — the two halves reflect across it — so it is also called the mirror line.",
        guideRef: "Line of symmetry: the fold test",
        difficulty: "warmup",
      },
      {
        id: "sym-mcq-q03",
        question: "How many lines of symmetry does an equilateral triangle have?",
        options: ["1", "2", "3", "6"],
        answerIndex: 2,
        explanation: "An equilateral triangle (all sides equal) is a regular 3-gon, so it has 3 lines of symmetry — one from each vertex to the midpoint of the opposite side.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "warmup",
      },
      {
        id: "sym-mcq-q04",
        question: "How many lines of symmetry does a square have?",
        options: ["2", "3", "4", "8"],
        answerIndex: 2,
        explanation: "A square has 4 lines of symmetry: the two midlines (vertical and horizontal) and the two diagonals.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "warmup",
      },
      {
        id: "sym-mcq-q05",
        question: "Which capital letter has a vertical line of symmetry?",
        options: ["F", "A", "G", "P"],
        answerIndex: 1,
        explanation: "A folds left-to-right onto itself (a vertical mirror line). F, G and P do not match under any fold.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "warmup",
      },
      {
        id: "sym-mcq-q06",
        question: "Which figure has NO line of symmetry?",
        options: ["Square", "Isosceles triangle", "Scalene triangle", "Rectangle"],
        answerIndex: 2,
        explanation: "A scalene triangle has all three sides different, so no fold makes the halves match — 0 lines of symmetry.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "warmup",
      },
      {
        id: "sym-mcq-q07",
        question: "How many lines of symmetry does a rectangle that is NOT a square have?",
        options: ["1", "2", "4", "0"],
        answerIndex: 1,
        explanation: "A non-square rectangle has 2 lines of symmetry — the vertical and horizontal midlines. Its diagonals do NOT work as mirror lines.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "core",
        hints: [
          "Try folding a long thin rectangle.",
          "The two midlines work — but does a diagonal fold make the halves match?",
          "A diagonal fold of a rectangle does not match, so count only the midlines.",
        ],
        strategy: "Use the fold test",
      },
      {
        id: "sym-mcq-q08",
        question: "How many lines of symmetry does a regular hexagon have?",
        options: ["3", "5", "6", "12"],
        answerIndex: 2,
        explanation: "A regular n-gon has exactly n lines of symmetry, so a regular hexagon (6 sides) has 6.",
        guideRef: "Why a regular polygon has exactly n lines of symmetry",
        difficulty: "core",
        hints: [
          "How many lines did the equilateral triangle and square have compared with their sides?",
          "Number of sides = number of lines of symmetry for a regular polygon.",
          "A hexagon has 6 sides.",
        ],
        strategy: "Find a pattern",
      },
      {
        id: "sym-mcq-q09",
        question: "How many lines of symmetry does a regular pentagon have?",
        options: ["4", "5", "10", "1"],
        answerIndex: 1,
        explanation: "A regular pentagon has 5 sides, so it has exactly 5 lines of symmetry — each from a vertex to the midpoint of the opposite side.",
        guideRef: "Why a regular polygon has exactly n lines of symmetry",
        difficulty: "core",
        hints: [
          "Use the regular-polygon rule.",
          "Lines of symmetry = number of sides.",
          "A pentagon has 5 sides.",
        ],
        strategy: "Find a pattern",
      },
      {
        id: "sym-mcq-q10",
        question: "How many lines of symmetry does a circle have?",
        options: ["1", "2", "4", "Infinitely many"],
        answerIndex: 3,
        explanation: "Every straight line through the centre of a circle splits it into two matching halves, so a circle has infinitely many lines of symmetry.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "core",
        hints: [
          "Where must a line of symmetry of a circle pass?",
          "Any line through the centre works.",
          "How many lines can you draw through the centre?",
        ],
        strategy: "Use symmetry",
      },
      {
        id: "sym-mcq-q11",
        question: "Which letter has BOTH a vertical and a horizontal line of symmetry?",
        options: ["H", "A", "C", "E"],
        answerIndex: 0,
        explanation: "H matches under both a left-right (vertical) fold and a top-bottom (horizontal) fold. A has only vertical; C and E have only horizontal.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "core",
        hints: [
          "Test a left-right fold, then a top-bottom fold.",
          "Which letter survives both folds?",
          "Think about H's two upright posts and the bar between them.",
        ],
        strategy: "Use the fold test",
      },
      {
        id: "sym-mcq-q12",
        question: "How many lines of symmetry does an isosceles (but not equilateral) triangle have?",
        options: ["0", "1", "2", "3"],
        answerIndex: 1,
        explanation: "An isosceles triangle has exactly 1 line of symmetry — the line from the apex down to the midpoint of the unequal base.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "core",
        hints: [
          "Two of its sides are equal.",
          "The fold must swap the two equal sides.",
          "Only the line through the top vertex works.",
        ],
        strategy: "Use the fold test",
      },
      {
        id: "sym-mcq-q13",
        question: "A rhombus (not a square) has how many lines of symmetry?",
        options: ["4", "2", "1", "0"],
        answerIndex: 1,
        explanation: "A rhombus has 2 lines of symmetry — its two diagonals. (Its midlines do NOT work, unlike a rectangle.)",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "core",
        hints: [
          "All four sides of a rhombus are equal.",
          "Try folding along a diagonal — does it match?",
          "Both diagonals work; the midlines do not.",
        ],
        strategy: "Use the fold test",
      },
      {
        id: "sym-mcq-q14",
        question: "When a figure is reflected in a mirror line, the image is…",
        options: [
          "the same size and shape but flipped",
          "always smaller",
          "rotated by 90°",
          "always larger",
        ],
        answerIndex: 0,
        explanation: "A reflection keeps size and shape unchanged but reverses the 'handedness' — it flips the figure across the line.",
        guideRef: "Reflections, mirror images and completing a figure",
        difficulty: "core",
        hints: [
          "Think of your own reflection in a mirror — same size?",
          "Does it shrink or grow?",
          "Only the left/right sense is swapped.",
        ],
        strategy: "Draw a diagram",
      },
      {
        id: "sym-mcq-q15",
        question:
          "A point P is 4 cm from a vertical mirror line, on its left. Where is the reflection of P?",
        options: [
          "4 cm to the right of the line",
          "8 cm to the right of the line",
          "4 cm to the left of the line",
          "On the line",
        ],
        answerIndex: 0,
        explanation: "The image is the same distance from the mirror line but on the opposite side: 4 cm to the right.",
        guideRef: "Reflections, mirror images and completing a figure",
        difficulty: "core",
        hints: [
          "The mirror line is exactly halfway between a point and its image.",
          "Same distance, opposite side.",
          "4 cm left becomes 4 cm right.",
        ],
        strategy: "Measure distances to the line",
      },
      {
        id: "sym-mcq-q16",
        question:
          "A regular polygon has exactly 9 lines of symmetry. How many sides does it have?",
        options: ["3", "6", "9", "18"],
        answerIndex: 2,
        explanation: "For a regular polygon, lines of symmetry = number of sides. So 9 lines means 9 sides (a regular nonagon).",
        guideRef: "Why a regular polygon has exactly n lines of symmetry",
        difficulty: "challenge",
        hints: [
          "Recall the rule connecting lines of symmetry and sides.",
          "They are equal for a regular polygon.",
          "9 lines ⇒ 9 sides.",
        ],
        strategy: "Work backwards",
      },
      {
        id: "sym-mcq-q17",
        question:
          "A figure is made of TWO identical squares placed side by side to form one rectangle (a 2×1 domino shape). How many lines of symmetry does this rectangle have?",
        options: ["1", "2", "4", "0"],
        answerIndex: 1,
        explanation: "Two equal squares side by side make a 2×1 rectangle (longer than it is wide). Like any non-square rectangle, it has 2 lines of symmetry — the two midlines.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "challenge",
        hints: [
          "What shape do two equal squares side by side make?",
          "It is a rectangle, not a square.",
          "A non-square rectangle has 2 lines of symmetry.",
        ],
        strategy: "Try small cases",
      },
      {
        id: "sym-mcq-q18",
        question:
          "Which of these capital letters has a HORIZONTAL line of symmetry but NOT a vertical one?",
        options: ["B", "T", "H", "M"],
        answerIndex: 0,
        explanation: "B folds top-to-bottom onto itself (horizontal line) but a left-right fold fails. T and M have only a vertical line; H has both.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "challenge",
        hints: [
          "Test each letter with a horizontal fold first.",
          "Then check the vertical fold fails for the same letter.",
          "Think about B's two bumps on its right side only.",
        ],
        strategy: "Use the fold test",
      },
      {
        id: "sym-mcq-q19",
        question:
          "A plus sign '+' is drawn from 5 equal squares (one centre square with one square above, below, left and right). How many lines of symmetry does it have?",
        options: ["2", "4", "1", "8"],
        answerIndex: 1,
        explanation: "A plus-shape has 4 lines of symmetry: vertical, horizontal, and the two diagonals — just like a square, because it looks the same from all four arms.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "challenge",
        hints: [
          "The shape has four identical arms.",
          "Try the vertical and horizontal folds — both work.",
          "Now try the two diagonal folds — they work too.",
        ],
        strategy: "Use the fold test",
      },
      {
        id: "sym-mcq-q20",
        question:
          "A semicircle (half of a circle, with a straight diameter edge) has how many lines of symmetry?",
        options: ["0", "1", "2", "Infinitely many"],
        answerIndex: 1,
        explanation: "A semicircle has exactly 1 line of symmetry — the line through the midpoint of the diameter, perpendicular to it. The diameter itself is NOT a line of symmetry.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "challenge",
        hints: [
          "A full circle had infinitely many, but cutting it changes things.",
          "Which single fold makes the curved part match itself?",
          "It is the line perpendicular to the diameter through its midpoint.",
        ],
        strategy: "Use the fold test",
      },
    ],
    qa: [
      {
        id: "sym-qa-q01",
        question:
          "Explain what a line of symmetry is, and describe the 'fold test' you would use to check whether a line is a line of symmetry.",
        modelAnswer:
          "A line of symmetry (mirror line) is a line that divides a figure into two halves that are mirror images of each other. To use the fold test, fold the figure along the line: if the two halves land exactly on top of each other, with every edge and corner matching, then the line is a line of symmetry. If any part sticks out or fails to match, it is not.",
        markScheme: [
          "line of symmetry splits figure into two mirror-image halves",
          "fold along the line | folding test",
          "halves match exactly | land on top of each other",
        ],
        commonError: "Calling any line that 'cuts the figure in half' a line of symmetry, even when the halves don't actually match (e.g. a rectangle's diagonal).",
        guideRef: "Line of symmetry: the fold test",
        difficulty: "core",
        hints: ["What must be true about the two halves?", "Describe what happens when you fold along the line."],
      },
      {
        id: "sym-qa-q02",
        question:
          "How many lines of symmetry does a non-square rectangle have? List them and explain why the diagonals are NOT lines of symmetry.",
        modelAnswer:
          "A non-square rectangle has 2 lines of symmetry: the vertical midline (joining the midpoints of the two short sides) and the horizontal midline (joining the midpoints of the two long sides). The diagonals are not lines of symmetry because folding along a diagonal would try to land a long side onto a short side — they have different lengths, so the halves do not match.",
        markScheme: [
          "2 lines of symmetry",
          "the two midlines | vertical and horizontal midlines",
          "diagonal fold fails because long side maps onto short side | sides unequal",
        ],
        commonError: "Assuming a rectangle's diagonals are lines of symmetry (true for a square, false for a rectangle).",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "core",
        numericAnswer: 2,
        hints: ["Try the midline folds.", "Now test a diagonal fold — what lands on what?"],
        strategy: "Use the fold test",
        solutions: [
          {
            label: "Fold test",
            steps: [
              "Fold along the vertical midline → halves match. ✓ (1 line)",
              "Fold along the horizontal midline → halves match. ✓ (2 lines)",
              "Fold along a diagonal → a long edge tries to meet a short edge, no match. ✗",
              "Total = 2 lines of symmetry.",
            ],
          },
        ],
      },
      {
        id: "sym-qa-q03",
        question:
          "How many lines of symmetry does a regular octagon (8 equal sides) have? State the general rule for a regular polygon.",
        modelAnswer:
          "A regular octagon has 8 lines of symmetry. The general rule is that a regular polygon with n sides has exactly n lines of symmetry.",
        markScheme: [
          "8 lines of symmetry",
          "regular n-gon has n lines of symmetry | sides = lines",
        ],
        commonError: "Halving the number of sides (saying 4) by counting only the through-vertex lines and forgetting the edge-midpoint ones.",
        guideRef: "Why a regular polygon has exactly n lines of symmetry",
        difficulty: "core",
        numericAnswer: 8,
        hints: ["Use the regular-polygon rule.", "Lines = sides for a regular polygon."],
        strategy: "Find a pattern",
      },
      {
        id: "sym-qa-q04",
        question:
          "Half of a figure is drawn to the left of a vertical mirror line. A corner of the drawn half is 3 cm to the left of the line and 2 cm above the line's base point B. Describe exactly where the matching corner of the completed figure must be, and explain the rule you used.",
        modelAnswer:
          "The matching corner must be 3 cm to the right of the mirror line and still 2 cm above point B (the same height). The rule is: to reflect a point, keep its distance along the mirror line the same, but place its image the same perpendicular distance on the OPPOSITE side of the line. So 3 cm left becomes 3 cm right, while the up-down position is unchanged because it runs along the line.",
        markScheme: [
          "3 cm to the right of the line",
          "2 cm above B | same height unchanged",
          "same perpendicular distance, opposite side of the line",
        ],
        commonError: "Changing the height (the along-the-line position) as well, or doubling the distance to 6 cm.",
        guideRef: "Reflections, mirror images and completing a figure",
        difficulty: "core",
        hints: [
          "The mirror line is halfway between the point and its image.",
          "The perpendicular (left-right) distance flips sides but keeps its size.",
          "The along-the-line (up-down) position does not change.",
        ],
        strategy: "Measure distances to the line",
      },
      {
        id: "sym-qa-q05",
        question:
          "Sort these capital letters into three groups: vertical line of symmetry only, horizontal line of symmetry only, both. Letters: A, B, H, M, O, T, E, X.",
        modelAnswer:
          "Vertical only: A, M, T. Horizontal only: B, E. Both: H, O, X. (A and M and T match under a left-right fold; B and E match under a top-bottom fold; H, O and X match under both folds.)",
        markScheme: [
          "vertical only: A, M, T",
          "horizontal only: B, E",
          "both: H, O, X",
        ],
        commonError: "Forgetting to test both fold directions, so missing that H, O and X have two lines.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "core",
        hints: [
          "Test each letter with a vertical fold and a horizontal fold separately.",
          "Letters with two posts and a crossbar (like H) often have both.",
          "O is round, so it has both (and more).",
        ],
        strategy: "Use the fold test",
      },
      {
        id: "sym-qa-q06",
        question:
          "Challenge: A shape is made by joining an equilateral triangle exactly onto one side of a square so the triangle's base is that whole side (like a simple 'house' with a triangular roof on a square). How many lines of symmetry does the whole house shape have? Justify your answer.",
        modelAnswer:
          "The house has exactly 1 line of symmetry: the vertical line through the apex of the triangle and the centre of the square. This single line swaps the left half with the right half of both the roof and the walls. No horizontal or diagonal line works, because the top (triangle) and bottom (square) are different, so a top-bottom or diagonal fold cannot match. Hence 1 line of symmetry.",
        markScheme: [
          "1 line of symmetry",
          "the vertical line through the apex and centre",
          "no horizontal/diagonal works because top and bottom differ",
        ],
        commonError: "Adding the square's 4 lines and the triangle's 3 lines; only the lines shared by BOTH parts survive.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "challenge",
        numericAnswer: 1,
        hints: [
          "A line of symmetry of the whole shape must be a line of symmetry of EACH part at once.",
          "Which line is a symmetry line for both the square and the triangle in this position?",
          "Only the vertical centre line works for both.",
        ],
        strategy: "Use symmetry",
        solutions: [
          {
            label: "Shared-line argument",
            steps: [
              "A fold of the whole house must fold both the square and the triangle onto themselves.",
              "The square's symmetry lines: 2 midlines + 2 diagonals; the triangle's apex line is the vertical centre line.",
              "The only line common to both, in this arrangement, is the vertical centre line.",
              "So the house has exactly 1 line of symmetry.",
            ],
          },
        ],
      },
      {
        id: "sym-qa-q07",
        question:
          "Challenge: A regular polygon has 4 more lines of symmetry than an equilateral triangle. How many sides does it have, and name a real object with that many-sided regular shape (Indian context welcome).",
        modelAnswer:
          "An equilateral triangle has 3 lines of symmetry. 4 more makes 3 + 4 = 7 lines, so the polygon is a regular heptagon (7 sides), because lines of symmetry = number of sides. A real example: many countries make 7-sided (heptagonal) coins; a 50p-style coin or a Rakhi/decorative medal can be heptagonal.",
        markScheme: [
          "equilateral triangle has 3 lines",
          "3 + 4 = 7 lines | 7 sides",
          "regular heptagon | a 7-sided object example",
        ],
        commonError: "Adding 4 to the number of sides incorrectly, or forgetting the triangle has 3 (not 1) lines.",
        guideRef: "Why a regular polygon has exactly n lines of symmetry",
        difficulty: "challenge",
        numericAnswer: 7,
        hints: [
          "How many lines does an equilateral triangle have?",
          "Add 4 to that.",
          "For a regular polygon, that count equals the number of sides.",
        ],
        strategy: "Work backwards",
      },
      {
        id: "sym-qa-q08",
        question:
          "Challenge: List ALL the lines of symmetry of a square and explain why a square has more than a non-square rectangle, even though both are 'rectangles'.",
        modelAnswer:
          "A square has 4 lines of symmetry: the vertical midline, the horizontal midline, and the two diagonals. A non-square rectangle has only 2 (the midlines). The extra two come from the square having all four sides EQUAL: when you fold a square along a diagonal, the two right-angled triangles are identical and match perfectly. In a rectangle the sides are unequal, so a diagonal fold tries to land a long side onto a short side and fails. Equal sides are exactly what gives the square its 2 extra diagonal lines.",
        markScheme: [
          "square: 4 lines (2 midlines + 2 diagonals)",
          "rectangle: 2 lines (midlines only)",
          "diagonal works for square because all sides equal | fails for rectangle because sides unequal",
        ],
        commonError: "Believing a rectangle's diagonals are also lines of symmetry, or thinking a square has only 2.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "challenge",
        numericAnswer: 4,
        hints: [
          "Count the square's lines first.",
          "Which extra lines does the square have that the rectangle lacks?",
          "Explain why the diagonal fold works for equal sides but not unequal ones.",
        ],
        strategy: "Try small cases",
        solutions: [
          {
            label: "List then compare",
            steps: [
              "Square folds: vertical midline ✓, horizontal midline ✓, diagonal-1 ✓, diagonal-2 ✓ → 4.",
              "Rectangle folds: two midlines ✓, but both diagonals ✗ → 2.",
              "Difference = the 2 diagonals, which only match when all four sides are equal.",
            ],
          },
          {
            label: "Equal-sides reason",
            steps: [
              "A diagonal cuts the shape into two right-angled triangles.",
              "For the fold to match, those triangles must be identical — needs the two sides meeting at a corner to be equal.",
              "Square: equal → matches (2 diagonal lines). Rectangle: unequal → fails (0 diagonal lines).",
            ],
          },
        ],
      },
      {
        id: "sym-qa-q09",
        question:
          "How does an ink-blot picture (drop ink, then fold the paper) demonstrate line symmetry? What plays the role of the line of symmetry?",
        modelAnswer:
          "When you drop ink on one side of the paper and fold it, the ink presses onto the other side, printing a mirror-image copy of the blot. The crease (fold line) is the line of symmetry: every blob on one side now has a matching blob the same distance on the other side, so the opened-out picture is symmetric about the crease.",
        markScheme: [
          "folding prints a mirror image of the ink on the other side",
          "the crease / fold line is the line of symmetry",
          "each blob has a matching blob the same distance across",
        ],
        commonError: "Thinking the two halves are identical copies rather than mirror images (they are flipped).",
        guideRef: "Reflections, mirror images and completing a figure",
        difficulty: "core",
        hints: ["What gets pressed onto the blank half?", "What does the crease become?"],
      },
      {
        id: "sym-qa-q10",
        question:
          "Challenge: Among the 26 capital letters in plain block style, give two letters that have NO line of symmetry, and one letter that has more than 2 lines of symmetry. Briefly justify each.",
        modelAnswer:
          "No line of symmetry: F and G (also J, L, N, P, Q, R, S, Z) — no fold, vertical or horizontal, makes their halves match. More than 2 lines: O — being essentially round, it matches under the vertical fold, the horizontal fold, and many slanted folds through its centre, so it has more than 2 (in fact infinitely many for a perfect circle).",
        markScheme: [
          "two letters with no line of symmetry, e.g. F and G | from F G J L N P Q R S Z",
          "O has more than 2 lines | round letter",
          "brief justification by folding for each",
        ],
        commonError: "Claiming letters like N or S are symmetric — they have rotational symmetry, but no LINE (reflection) symmetry.",
        guideRef: "Counting lines of symmetry: shapes and letters",
        difficulty: "challenge",
        hints: [
          "Test letters with a vertical and a horizontal fold.",
          "Letters like N and S look 'balanced' but fail both folds (that is rotation, not reflection).",
          "Which letter is round enough to fold many ways?",
        ],
        strategy: "Try small cases",
      },
    ],
  },
  questionBank: {
    mcqPapers: [],
    qaPapers: [],
  },
};

// Group the canonical quiz questions into sittable papers (same objects, no new ids).
symmetry.questionBank.mcqPapers = [
  { id: "sym-mcq-paper-1", title: "Symmetry — MCQ Set A", questions: symmetry.quiz.mcq.slice(0, 10) },
  { id: "sym-mcq-paper-2", title: "Symmetry — MCQ Set B", questions: symmetry.quiz.mcq.slice(10) },
];
symmetry.questionBank.qaPapers = [
  { id: "sym-qa-paper-1", title: "Symmetry — Written Practice A", questions: symmetry.quiz.qa.slice(0, 5) },
  { id: "sym-qa-paper-2", title: "Symmetry — Written Practice B", questions: symmetry.quiz.qa.slice(5) },
];

export default symmetry;
