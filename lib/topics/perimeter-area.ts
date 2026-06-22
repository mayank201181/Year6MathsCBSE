import type { Topic } from "../types";

// Topic: Perimeter and Area (CBSE Class 6).
// AoPS-flavoured: discovery openers, derive-don't-decree (why l×b), hint ladders,
// multi-method solutions, tiered difficulty with genuine challenge problems.

const perimeterArea: Topic = {
  id: "perimeter-area",
  title: "Perimeter and Area",
  subject: "Maths",
  chapter: "NCERT Ch. 10 + Ganita Prakash Ch. 6 (Perimeter and Area)",
  icon: "📏",
  color: "#22c55e",
  intro:
    "Perimeter is the distance all the way around the edge of a flat shape — the length of fence you need. Area is the amount of flat surface inside — the number of floor tiles you need. They sound similar, but they measure completely different things, and the difference is where all the fun (and the tricky exam questions) lives.",
  guide: [
    {
      heading: "Perimeter: the distance around the boundary",
      discovery: {
        problem:
          "A farmer has a rectangular field 30 m long and 20 m wide and wants to put a wire fence all the way around it. He buys 80 m of wire. Is that enough, too little, or too much?",
        idea:
          "Walking around the boundary you cover 30 + 20 + 30 + 20 = 100 m, so 80 m is not enough. The total boundary length is called the perimeter.",
      },
      body:
        "The **perimeter** of any flat shape is the total length of its boundary — what you'd measure if you walked all the way around the edge and back to your start.\n\nFor a shape made of straight sides you just **add up the lengths of all the sides**. The unit is a length unit: **cm, m, km**.\n\nFor a **rectangle** opposite sides are equal, so perimeter = length + breadth + length + breadth = **2 × (length + breadth)**.\n\nFor a **square** all four sides are equal, so perimeter = **4 × side**.",
      keyPoints: [
        "Perimeter = total length of the boundary (add up all the sides).",
        "Rectangle: P = 2 × (l + b).",
        "Square: P = 4 × side.",
        "Perimeter is a length, so it is measured in cm, m or km — never cm².",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle with length labelled 30 m and breadth labelled 20 m, perimeter is twice the sum"><rect x="40" y="30" width="220" height="80" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><text x="150" y="22" text-anchor="middle" font-size="13" fill="#15803d">length = 30 m</text><text x="150" y="128" text-anchor="middle" font-size="13" fill="#15803d">length = 30 m</text><text x="20" y="74" text-anchor="middle" font-size="13" fill="#15803d">20 m</text><text x="280" y="74" text-anchor="middle" font-size="13" fill="#15803d">20 m</text><text x="150" y="75" text-anchor="middle" font-size="12" fill="#334155">P = 2 (30 + 20) = 100 m</text></svg>',
      ],
      whyItWorks:
        "Perimeter is just repeated addition of side lengths. For a rectangle two sides are length and two are breadth, so instead of l + b + l + b we group them as 2 lots of (l + b) — exactly the same total, written shorter.",
      strategies: ["Walk the boundary", "Add up all the sides", "Draw a diagram"],
    },
    {
      heading: "Regular polygons and irregular shapes",
      discovery: {
        problem:
          "A regular hexagon (six equal sides) has a perimeter of 48 cm. How long is one side? A square tile has a perimeter of 48 cm too — which has the longer side?",
        idea:
          "If all sides are equal, perimeter = number of sides × one side. Hexagon side = 48 ÷ 6 = 8 cm; square side = 48 ÷ 4 = 12 cm. The square has the longer side because the same total length is shared between fewer sides.",
      },
      body:
        "A **regular polygon** has all its sides equal (equilateral triangle, square, regular pentagon, regular hexagon …). So its perimeter = **number of sides × length of one side**, and you can run that backwards: one side = perimeter ÷ number of sides.\n\nFor an **irregular shape** the sides are different, so there is no shortcut — you simply add every side length. If a side length is missing, look for it: in many figures you can find it from the other sides (opposite distances must match).",
      keyPoints: [
        "Regular polygon: P = (number of sides) × (one side).",
        "Equilateral triangle: P = 3 × side. Regular hexagon: P = 6 × side.",
        "Irregular shape: add up every side — no formula.",
        "Missing side? Use the fact that opposite distances across the figure are equal.",
      ],
      whyItWorks:
        "A regular polygon is just one side length copied around the boundary. Copying the same length n times is multiplication, so P = n × side. There is nothing to memorise beyond 'all sides equal'.",
      strategies: ["Use symmetry", "Work backwards", "Find a missing length"],
      thinkDeeper:
        "An equilateral triangle and a square have the same perimeter, 36 cm. Whose single side is longer, and by how much?",
    },
    {
      heading: "Area: counting the surface inside",
      discovery: {
        problem:
          "Draw a 4 cm by 3 cm rectangle on squared paper where each square is 1 cm by 1 cm. Without any formula, how many little 1 cm squares fit inside it? Can you see them as rows?",
        idea:
          "There are 3 rows of 4 squares = 12 squares, so the area is 12 cm². Counting unit squares row by row is exactly what 'length × breadth' means.",
      },
      body:
        "**Area** is the amount of flat surface a shape covers. We measure it by counting how many **unit squares** (a 1 cm × 1 cm square = 1 cm², or a 1 m × 1 m square = 1 m²) fit inside.\n\nFor shapes drawn on a grid, count the squares. **Half-covered squares count as ½** — pair up two halves to make one whole square. A rough rule for blobs: count squares that are more than half covered as 1, ignore those less than half covered.\n\nBecause the unit is a *square*, area is measured in **square units: cm², m², km²** — never plain cm.",
      keyPoints: [
        "Area = how many unit squares fit inside the shape.",
        "Unit square: 1 cm × 1 cm = 1 cm²; 1 m × 1 m = 1 m².",
        "Two half-squares make one whole square.",
        "Area is measured in square units (cm², m²).",
      ],
      diagrams: [
        '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 4 by 3 grid of unit squares shaded to show an area of 12 square centimetres"><g fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"><rect x="20" y="20" width="40" height="40"/><rect x="60" y="20" width="40" height="40"/><rect x="100" y="20" width="40" height="40"/><rect x="140" y="20" width="40" height="40"/><rect x="20" y="60" width="40" height="40"/><rect x="60" y="60" width="40" height="40"/><rect x="100" y="60" width="40" height="40"/><rect x="140" y="60" width="40" height="40"/><rect x="20" y="100" width="40" height="40"/><rect x="60" y="100" width="40" height="40"/><rect x="100" y="100" width="40" height="40"/><rect x="140" y="100" width="40" height="40"/></g><text x="100" y="160" text-anchor="middle" font-size="13" fill="#15803d">3 rows of 4 = 12 unit squares</text><text x="100" y="180" text-anchor="middle" font-size="13" fill="#334155">Area = 12 cm²</text></svg>',
      ],
      whyItWorks:
        "Area answers 'how much surface?'. The fairest way to compare surfaces is to tile them with identical little squares and count — so the natural unit of area is a square, which is why we say cm² and m².",
      strategies: ["Count unit squares", "Pair up half squares", "Draw a diagram"],
    },
    {
      heading: "Area of rectangles and squares",
      discovery: {
        problem:
          "A floor is 6 m long and 4 m wide. Tiles are 1 m squares. Instead of drawing all the tiles, can you find the number using just the 6 and the 4?",
        idea:
          "Each row along the length holds 6 tiles, and there are 4 such rows, so 6 × 4 = 24 tiles. Area of a rectangle = length × breadth.",
      },
      body:
        "When you tile a rectangle with unit squares, each **row** has as many squares as the length, and there are as many **rows** as the breadth. So the total number of unit squares is length × breadth.\n\n**Area of a rectangle = length × breadth.** **Area of a square = side × side = side².**\n\nKeep the units consistent: if length and breadth are in metres, the area is in m². Always write the square unit in your answer.",
      keyPoints: [
        "Rectangle: Area = l × b.",
        "Square: Area = side × side = side².",
        "Length × breadth = (squares per row) × (number of rows).",
        "Use the same length unit for l and b; answer is in square units.",
      ],
      diagrams: [
        '<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle with length 6 metres and breadth 4 metres showing area equals 24 square metres"><rect x="50" y="30" width="180" height="90" fill="#86efac" stroke="#15803d" stroke-width="2"/><text x="140" y="22" text-anchor="middle" font-size="13" fill="#15803d">l = 6 m</text><text x="30" y="80" text-anchor="middle" font-size="13" fill="#15803d">b = 4 m</text><text x="140" y="82" text-anchor="middle" font-size="13" fill="#334155">Area = 6 × 4 = 24 m²</text></svg>',
      ],
      whyItWorks:
        "Multiplication is repeated addition of equal rows. A rectangle of unit squares has b equal rows of l squares each, so the count is l added b times, i.e. l × b. The formula is just an efficient way to count the tiles without drawing them.",
      strategies: ["Rows of unit squares", "Use multiplication for repeated rows"],
    },
    {
      heading: "Area vs perimeter, composite shapes and cost problems",
      discovery: {
        problem:
          "You have exactly 12 m of fence to enclose a rectangular garden with whole-metre sides. A 5 m × 1 m garden and a 3 m × 3 m garden both use the 12 m of fence — but which gives you more growing space?",
        idea:
          "Both have perimeter 12 m, but areas of 5 m² and 9 m². Same perimeter does NOT mean same area! For a fixed perimeter, the closer the rectangle is to a square, the larger its area.",
      },
      body:
        "Area and perimeter are **independent**: two shapes can share a perimeter but have very different areas, and two shapes can share an area but have very different perimeters. Never assume one tells you the other.\n\n**Composite (L-shaped) figures:** split the shape into rectangles, find each rectangle's area, then add (or subtract a cut-out corner). For perimeter, add up all the outside edges — finding any missing edge from the others first.\n\n**Real-life / cost problems:** *fencing* uses perimeter (cost = perimeter × rate per metre); *tiling, painting, turfing* use area (cost = area × rate per square metre). Read the question to decide which one is needed.",
      keyPoints: [
        "Same perimeter can give different areas (and vice versa).",
        "Fixed perimeter → area is largest when the rectangle is closest to a square.",
        "Composite shape: split into rectangles, then add areas (or subtract a cut-out).",
        "Fencing → perimeter × rate; tiling/painting → area × rate.",
      ],
      diagrams: [
        '<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An L-shaped figure split into two rectangles to find its area"><path d="M30 30 L190 30 L190 90 L110 90 L110 170 L30 170 Z" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><line x1="110" y1="90" x2="30" y2="90" stroke="#15803d" stroke-width="1.5" stroke-dasharray="5 4"/><text x="110" y="65" text-anchor="middle" font-size="12" fill="#334155">A: top rectangle</text><text x="70" y="135" text-anchor="middle" font-size="12" fill="#334155">B: bottom rectangle</text><text x="110" y="22" text-anchor="middle" font-size="12" fill="#15803d">split, find each area, then add</text></svg>',
      ],
      whyItWorks:
        "Area counts inside squares while perimeter measures the boundary, so they can change independently. Pushing a rectangle's shape towards a square keeps the boundary the same length but lets it 'wrap' more squares inside — that's why a square is the roomiest rectangle for a given perimeter. A composite shape is only a few rectangles glued together, so its area is just the sum of theirs.",
      strategies: ["Split into rectangles", "Try small cases", "Look for an invariant (fixed perimeter)"],
      thinkDeeper:
        "Of all rectangles with whole-number sides and perimeter 20 cm, which has the greatest area, and which has the least? What does the pattern tell you?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is perimeter?", back: "The total length of the boundary of a flat shape — what you measure walking all the way around it. Unit: cm, m, km." },
      { front: "What is area?", back: "The amount of flat surface a shape covers, measured by how many unit squares fit inside. Unit: cm², m², km²." },
      { front: "Perimeter of a rectangle?", back: "P = 2 × (length + breadth)." },
      { front: "Perimeter of a square?", back: "P = 4 × side." },
      { front: "Area of a rectangle?", back: "Area = length × breadth." },
      { front: "Area of a square?", back: "Area = side × side = side²." },
      { front: "Does the same perimeter mean the same area?", back: "No! Two shapes can have equal perimeters but different areas (and vice versa)." },
    ],
    formulae: [
      { name: "Perimeter of rectangle", rule: "P = 2 × (l + b)" },
      { name: "Perimeter of square", rule: "P = 4 × side" },
      { name: "Perimeter of regular polygon", rule: "P = (number of sides) × (one side)" },
      { name: "Area of rectangle", rule: "A = l × b" },
      { name: "Area of square", rule: "A = side × side = side²" },
      { name: "Fencing cost", rule: "cost = perimeter × rate per metre" },
      { name: "Tiling/painting cost", rule: "cost = area × rate per square metre" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "pa-mcq-q01",
        question: "What does the perimeter of a shape measure?",
        options: ["The surface inside it", "The total length of its boundary", "The number of corners", "The longest side"],
        answerIndex: 1,
        explanation: "Perimeter is the total length all the way around the boundary of the shape.",
        guideRef: "Perimeter: the distance around the boundary",
        difficulty: "warmup",
      },
      {
        id: "pa-mcq-q02",
        question: "Which unit is correct for an area?",
        options: ["cm", "m", "cm²", "km"],
        answerIndex: 2,
        explanation: "Area is measured in square units such as cm². The others are length units used for perimeter.",
        guideRef: "Area: counting the surface inside",
        difficulty: "warmup",
      },
      {
        id: "pa-mcq-q03",
        question: "A square has side 7 cm. What is its perimeter?",
        options: ["14 cm", "21 cm", "28 cm", "49 cm"],
        answerIndex: 2,
        explanation: "Perimeter of a square = 4 × side = 4 × 7 = 28 cm. (49 cm² would be its area.)",
        guideRef: "Perimeter: the distance around the boundary",
        difficulty: "warmup",
      },
      {
        id: "pa-mcq-q04",
        question: "A rectangle is 8 cm long and 5 cm wide. What is its area?",
        options: ["13 cm²", "26 cm²", "40 cm²", "40 cm"],
        answerIndex: 2,
        explanation: "Area of a rectangle = length × breadth = 8 × 5 = 40 cm². The unit must be cm², not cm.",
        guideRef: "Area of rectangles and squares",
        difficulty: "warmup",
      },
      {
        id: "pa-mcq-q05",
        question: "An equilateral triangle has each side 6 cm. What is its perimeter?",
        options: ["12 cm", "18 cm", "24 cm", "36 cm"],
        answerIndex: 1,
        explanation: "All three sides are equal, so P = 3 × 6 = 18 cm.",
        guideRef: "Regular polygons and irregular shapes",
        difficulty: "warmup",
      },
      {
        id: "pa-mcq-q06",
        question: "A shape on cm-grid paper covers 6 whole unit squares and 4 half squares. What is its area?",
        options: ["6 cm²", "8 cm²", "10 cm²", "14 cm²"],
        answerIndex: 1,
        explanation: "4 half squares make 2 whole squares. Total = 6 + 2 = 8 cm².",
        guideRef: "Area: counting the surface inside",
        difficulty: "warmup",
      },
      {
        id: "pa-mcq-q07",
        question: "A rectangle has length 12 m and breadth 7 m. What is its perimeter?",
        options: ["19 m", "38 m", "84 m", "38 m²"],
        answerIndex: 1,
        explanation: "P = 2 × (l + b) = 2 × (12 + 7) = 2 × 19 = 38 m.",
        guideRef: "Perimeter: the distance around the boundary",
        difficulty: "core",
        hints: ["Use P = 2 × (length + breadth).", "First add length and breadth: 12 + 7.", "Then double the result."],
        strategy: "Add up all the sides",
      },
      {
        id: "pa-mcq-q08",
        question: "A regular hexagon has a perimeter of 54 cm. How long is one side?",
        options: ["6 cm", "9 cm", "8 cm", "54 cm"],
        answerIndex: 1,
        explanation: "A regular hexagon has 6 equal sides, so one side = 54 ÷ 6 = 9 cm.",
        guideRef: "Regular polygons and irregular shapes",
        difficulty: "core",
        hints: ["A hexagon has how many equal sides?", "All sides are equal in a regular hexagon.", "Divide the perimeter by 6."],
        strategy: "Work backwards",
      },
      {
        id: "pa-mcq-q09",
        question: "A square has area 64 cm². What is the length of one side?",
        options: ["8 cm", "16 cm", "32 cm", "64 cm"],
        answerIndex: 0,
        explanation: "Area = side², so side = the number that multiplies by itself to give 64, which is 8 (since 8 × 8 = 64).",
        guideRef: "Area of rectangles and squares",
        difficulty: "core",
        hints: ["Area of a square = side × side.", "What number times itself gives 64?", "8 × 8 = 64."],
        strategy: "Work backwards",
      },
      {
        id: "pa-mcq-q10",
        question: "A rectangle has area 48 cm² and length 8 cm. What is its breadth?",
        options: ["6 cm", "8 cm", "40 cm", "12 cm"],
        answerIndex: 0,
        explanation: "Area = l × b, so b = area ÷ length = 48 ÷ 8 = 6 cm.",
        guideRef: "Area of rectangles and squares",
        difficulty: "core",
        hints: ["Area = length × breadth.", "Rearrange: breadth = area ÷ length.", "48 ÷ 8 = ?"],
        strategy: "Work backwards",
      },
      {
        id: "pa-mcq-q11",
        question: "The cost of fencing a square plot of side 25 m at ₹40 per metre is:",
        options: ["₹1000", "₹2500", "₹4000", "₹25000"],
        answerIndex: 2,
        explanation: "Fencing uses perimeter: P = 4 × 25 = 100 m. Cost = 100 × ₹40 = ₹4000.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "core",
        hints: ["Fencing follows the boundary, so use perimeter.", "Perimeter of the square = 4 × 25 = 100 m.", "Cost = perimeter × rate = 100 × 40."],
        strategy: "Decide perimeter or area first",
      },
      {
        id: "pa-mcq-q12",
        question: "Tiles cost ₹50 per square metre. How much to tile a floor 5 m by 4 m?",
        options: ["₹450", "₹900", "₹1000", "₹1800"],
        answerIndex: 2,
        explanation: "Tiling uses area: A = 5 × 4 = 20 m². Cost = 20 × ₹50 = ₹1000.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "core",
        hints: ["Tiling covers the surface, so use area.", "Area = 5 × 4 = 20 m².", "Cost = area × rate = 20 × 50."],
        strategy: "Decide perimeter or area first",
      },
      {
        id: "pa-mcq-q13",
        question: "Which of these rectangles (whole-cm sides) with perimeter 16 cm has the LARGEST area?",
        options: ["1 cm × 7 cm", "2 cm × 6 cm", "3 cm × 5 cm", "4 cm × 4 cm"],
        answerIndex: 3,
        explanation: "All have perimeter 16 cm. Areas are 7, 12, 15 and 16 cm². The 4×4 square is closest to a square, so it has the largest area.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "core",
        hints: ["Check each pair adds to 8 (half the perimeter).", "Work out l × b for each.", "Which shape is closest to a square?"],
        strategy: "Try small cases",
      },
      {
        id: "pa-mcq-q14",
        question: "A wire bent into a square of side 10 cm is straightened and bent into an equilateral triangle. How long is each side of the triangle?",
        options: ["10 cm", "Approximately 13.3 cm", "40 cm", "30 cm"],
        answerIndex: 1,
        explanation: "The wire length is the square's perimeter = 4 × 10 = 40 cm. Bent into 3 equal sides: 40 ÷ 3 ≈ 13.3 cm.",
        guideRef: "Regular polygons and irregular shapes",
        difficulty: "core",
        hints: ["The wire keeps the same total length when re-bent.", "Square perimeter = 4 × 10 = 40 cm.", "Divide 40 by 3 equal sides."],
        strategy: "Look for an invariant",
      },
      {
        id: "pa-mcq-q15",
        question: "An L-shaped room is made by removing a 2 m × 2 m corner from a 6 m × 5 m rectangle. What is its area?",
        options: ["26 m²", "30 m²", "34 m²", "11 m²"],
        answerIndex: 0,
        explanation: "Whole rectangle = 6 × 5 = 30 m². Cut-out corner = 2 × 2 = 4 m². Remaining area = 30 − 4 = 26 m².",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "core",
        hints: ["Find the area of the full rectangle first.", "Then find the area of the corner removed.", "Subtract the corner from the whole."],
        strategy: "Split into rectangles",
      },
      {
        id: "pa-mcq-q16",
        question: "A rectangle and a square both have a perimeter of 24 cm. The square's area is 36 cm². Which statement must be true?",
        options: ["The rectangle's area is also 36 cm²", "The rectangle's area is at most 36 cm²", "The rectangle's area is more than 36 cm²", "Areas can't be compared"],
        answerIndex: 1,
        explanation: "For a fixed perimeter the square has the maximum area, so any non-square rectangle with the same perimeter has area less than (at most equal to) 36 cm².",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "challenge",
        hints: ["Both share a perimeter, so half-perimeter is 12.", "The square is 6 × 6 = 36 cm².", "For a fixed perimeter, which shape gives the most area?"],
        strategy: "Use an extremal idea",
      },
      {
        id: "pa-mcq-q17",
        question: "A path 1 m wide runs around the inside edge of a square garden of side 10 m. What is the area of the path?",
        options: ["36 m²", "40 m²", "64 m²", "100 m²"],
        answerIndex: 0,
        explanation: "The garden is 10 × 10 = 100 m². The inner square left after a 1 m border on all sides is 8 × 8 = 64 m². Path = 100 − 64 = 36 m².",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "challenge",
        hints: ["Find the whole garden's area.", "A 1 m border on each side shrinks both dimensions by 2 m.", "Inner square = 8 × 8; subtract from 100."],
        strategy: "Subtract the inner region",
      },
      {
        id: "pa-mcq-q18",
        question: "Two identical squares of side 5 cm are joined edge-to-edge to make a rectangle. What is the perimeter of the rectangle?",
        options: ["40 cm", "30 cm", "20 cm", "50 cm"],
        answerIndex: 1,
        explanation: "The rectangle is 10 cm by 5 cm (the joined edges disappear inside). P = 2 × (10 + 5) = 30 cm — less than the 40 cm of two separate squares.",
        guideRef: "Perimeter: the distance around the boundary",
        difficulty: "challenge",
        hints: ["Sketch the two squares stuck together.", "What are the length and breadth of the rectangle?", "The joined edges are inside, not on the boundary."],
        strategy: "Draw a diagram",
      },
      {
        id: "pa-mcq-q19",
        question: "A rectangular field is 50 m by 30 m. Sapna jogs around it 4 times. How far does she jog in total?",
        options: ["160 m", "640 m", "1500 m", "320 m"],
        answerIndex: 1,
        explanation: "One lap = perimeter = 2 × (50 + 30) = 160 m. Four laps = 4 × 160 = 640 m.",
        guideRef: "Perimeter: the distance around the boundary",
        difficulty: "core",
        hints: ["One lap is the perimeter of the field.", "P = 2 × (50 + 30) = 160 m.", "Multiply by 4 laps."],
        strategy: "Add up all the sides",
      },
      {
        id: "pa-mcq-q20",
        question: "Floor tiles are squares of side 20 cm. How many tiles are needed to cover a floor 2 m by 1 m exactly?",
        options: ["10", "50", "100", "5"],
        answerIndex: 1,
        explanation: "Convert: 2 m = 200 cm, 1 m = 100 cm. Along the length 200 ÷ 20 = 10 tiles; along the breadth 100 ÷ 20 = 5 tiles. Total = 10 × 5 = 50 tiles.",
        guideRef: "Area of rectangles and squares",
        difficulty: "challenge",
        hints: ["Work in the same unit — convert metres to cm.", "How many 20 cm tiles fit along each side?", "Multiply tiles-per-row by number-of-rows."],
        strategy: "Rows of unit squares",
      },
    ],
    qa: [
      {
        id: "pa-qa-q01",
        question: "A rectangular garden is 15 m long and 9 m wide. Find (a) its perimeter and (b) its area. Show your steps and give the correct units.",
        modelAnswer:
          "(a) Perimeter = 2 × (l + b) = 2 × (15 + 9) = 2 × 24 = 48 m. (b) Area = l × b = 15 × 9 = 135 m².",
        markScheme: [
          "perimeter = 2 × (15 + 9) | 2 × 24",
          "perimeter = 48 m (with unit m)",
          "area = 15 × 9 = 135 m² (with unit m²)",
        ],
        commonError: "Mixing units up — giving perimeter in m² or area in m.",
        guideRef: "Area of rectangles and squares",
        difficulty: "core",
        hints: ["Perimeter uses 2 × (l + b); area uses l × b.", "Add 15 + 9 first for perimeter.", "Perimeter is in m, area is in m²."],
        solutions: [
          {
            label: "Direct formulae",
            steps: ["P = 2 × (15 + 9) = 2 × 24 = 48 m.", "A = 15 × 9 = 135 m²."],
          },
        ],
      },
      {
        id: "pa-qa-q02",
        question: "A square field has a perimeter of 100 m. Find the length of one side and the area of the field. Give units.",
        modelAnswer:
          "A square has 4 equal sides, so side = 100 ÷ 4 = 25 m. Area = side² = 25 × 25 = 625 m².",
        markScheme: [
          "side = 100 ÷ 4 = 25 m",
          "area = side × side | 25 × 25",
          "area = 625 m²",
        ],
        commonError: "Dividing the perimeter by 2 instead of 4, giving a side of 50 m.",
        guideRef: "Area of rectangles and squares",
        difficulty: "core",
        numericAnswer: 625,
        hints: ["A square's perimeter = 4 × side.", "Find the side first: 100 ÷ 4.", "Then area = side × side."],
        solutions: [
          {
            label: "Find side then area",
            steps: ["P = 4 × side, so side = 100 ÷ 4 = 25 m.", "A = side² = 25 × 25 = 625 m²."],
          },
        ],
      },
      {
        id: "pa-qa-q03",
        question:
          "A rectangular hall is 12 m long and 8 m wide. It is to be tiled at ₹60 per square metre and have a decorative border (skirting) fixed all around its perimeter at ₹25 per metre. Find the total cost.",
        modelAnswer:
          "Tiling uses area: A = 12 × 8 = 96 m², costing 96 × ₹60 = ₹5760. Skirting uses perimeter: P = 2 × (12 + 8) = 40 m, costing 40 × ₹25 = ₹1000. Total cost = ₹5760 + ₹1000 = ₹6760.",
        markScheme: [
          "area = 12 × 8 = 96 m²",
          "tiling cost = 96 × 60 = 5760 | ₹5760",
          "perimeter = 2 × (12 + 8) = 40 m",
          "skirting cost = 40 × 25 = 1000 | ₹1000",
          "total = ₹6760",
        ],
        commonError: "Using area for the skirting (border) instead of perimeter, or perimeter for the tiles.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "core",
        numericAnswer: 6760,
        strategy: "Decide perimeter or area first",
        hints: ["Tiles cover the surface → area; skirting follows the edge → perimeter.", "Area = 12 × 8; perimeter = 2 × (12 + 8).", "Multiply each by its rate and add the two costs."],
        solutions: [
          {
            label: "Area part + perimeter part",
            steps: [
              "Area = 12 × 8 = 96 m² → tiling 96 × 60 = ₹5760.",
              "Perimeter = 2 × (12 + 8) = 40 m → skirting 40 × 25 = ₹1000.",
              "Total = 5760 + 1000 = ₹6760.",
            ],
          },
        ],
      },
      {
        id: "pa-qa-q04",
        question:
          "An L-shaped park is formed from a 10 m × 6 m rectangle with a 4 m × 3 m rectangular corner removed. Find (a) the area and (b) the perimeter of the L-shape. Show how you split it.",
        modelAnswer:
          "(a) Area: whole rectangle = 10 × 6 = 60 m²; removed corner = 4 × 3 = 12 m²; L-shape area = 60 − 12 = 48 m². (b) Perimeter: the boundary still goes the full 10 m and 6 m on the outer sides; the corner cut replaces one straight path with two shorter edges (4 m and 3 m) but the total length around equals the original rectangle's outer edges because the two cut edges (4 + 3 = 7) replace the removed 4 + 3 = 7 along the top and side. So perimeter = 2 × (10 + 6) = 32 m.",
        markScheme: [
          "whole rectangle area = 10 × 6 = 60 m²",
          "removed corner = 4 × 3 = 12 m²",
          "L-shape area = 48 m²",
          "perimeter = 32 m (re-entrant corner keeps total length = 2 × (10 + 6))",
        ],
        commonError: "Subtracting the corner length from the perimeter — a notched rectangle keeps the SAME perimeter as the full rectangle.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "challenge",
        strategy: "Split into rectangles",
        numericAnswer: 48,
        hints: [
          "For area: take the full rectangle and subtract the cut-out corner.",
          "Whole = 10 × 6, corner = 4 × 3.",
          "For perimeter, trace the whole boundary — the two cut edges replace exactly the lengths removed.",
        ],
        solutions: [
          {
            label: "Whole minus corner (area)",
            steps: ["Whole rectangle = 10 × 6 = 60 m².", "Corner removed = 4 × 3 = 12 m².", "L-shape area = 60 − 12 = 48 m²."],
          },
          {
            label: "Split into two rectangles (area check)",
            steps: [
              "Cut the L into a 10 × 3 strip and a 6 × 3 strip (so 10×3 = 30 and 6×3 = 18).",
              "30 + 18 = 48 m² — matches the whole-minus-corner answer.",
            ],
          },
        ],
      },
      {
        id: "pa-qa-q05",
        question:
          "Challenge: Among all rectangles with whole-number sides and a perimeter of 20 cm, which one has the greatest area? State that area and explain the pattern you notice.",
        modelAnswer:
          "Perimeter 20 cm means length + breadth = 10 cm. Listing whole-number pairs: 1×9 = 9, 2×8 = 16, 3×7 = 21, 4×6 = 24, 5×5 = 25. The greatest area is 25 cm², from the 5 × 5 square. The pattern: for a fixed perimeter, the area grows as the sides become more equal, and is largest when the rectangle is a square.",
        markScheme: [
          "length + breadth = 10 (half the perimeter)",
          "tries pairs and finds areas 9, 16, 21, 24, 25",
          "greatest area = 25 cm² at 5 × 5",
          "pattern: most equal sides (square) gives the largest area",
        ],
        commonError: "Assuming a long thin rectangle 'looks bigger' so has more area, when in fact it has the least.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "challenge",
        strategy: "Try small cases",
        numericAnswer: 25,
        hints: [
          "If the perimeter is 20, what must length + breadth equal?",
          "List every whole-number pair adding to 10 and find each area.",
          "Notice the area peaks when the two sides are equal.",
        ],
        solutions: [
          {
            label: "Systematic listing",
            steps: [
              "P = 20 → l + b = 10.",
              "Pairs and areas: 1×9=9, 2×8=16, 3×7=21, 4×6=24, 5×5=25.",
              "Maximum area = 25 cm² for the 5 × 5 square.",
            ],
          },
        ],
      },
      {
        id: "pa-qa-q06",
        question:
          "Challenge: Tina has 36 m of fencing. She wants a rectangular pen with whole-metre sides and an area of exactly 72 m². Find the length and breadth of the pen.",
        modelAnswer:
          "Perimeter 36 m means length + breadth = 18 m. We need two whole numbers that add to 18 and multiply to 72. Testing pairs that add to 18: 6 and 12 give 6 × 12 = 72. So the pen is 12 m by 6 m.",
        markScheme: [
          "length + breadth = 18 (half of 36)",
          "need two numbers adding to 18 and multiplying to 72",
          "6 and 12 | 12 m by 6 m",
        ],
        commonError: "Using 36 directly as l + b instead of halving the perimeter first.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "challenge",
        strategy: "Work backwards",
        hints: [
          "From the perimeter, what is length + breadth?",
          "You need two numbers that ADD to 18 and MULTIPLY to 72.",
          "Try factor pairs of 72 and check which adds to 18 (6 × 12 = 72).",
        ],
        solutions: [
          {
            label: "Sum and product",
            steps: [
              "P = 36 → l + b = 18.",
              "Factor pairs of 72: 8×9, 6×12, 4×18 … which adds to 18?",
              "6 + 12 = 18 and 6 × 12 = 72, so the pen is 12 m × 6 m.",
            ],
          },
        ],
      },
      {
        id: "pa-qa-q07",
        question:
          "Estimate the area of an irregular leaf traced onto cm-squared paper if it fully covers 18 squares and partly covers 12 squares (each part more than half). Explain your method and give an estimate.",
        modelAnswer:
          "Method: count full squares as 1 each, and count each partly-covered square (more than half) as 1, ignoring squares covered less than half. Full = 18; partly covered counted as 1 each = 12. Estimated area ≈ 18 + 12 = 30 cm². (Counting the part squares as roughly ½ each would instead give 18 + 6 = 24 cm², so the true area is somewhere around 24–30 cm².)",
        markScheme: [
          "full squares = 18",
          "rule for part squares (more-than-half = 1, or ≈ half each)",
          "estimate around 24 to 30 cm² | 30 cm²",
        ],
        commonError: "Counting every touched square as a whole one, badly over-estimating the area.",
        guideRef: "Area: counting the surface inside",
        difficulty: "core",
        strategy: "Count unit squares",
        hints: ["Count the fully covered squares first.", "Decide a fair rule for the part-covered squares.", "Add the full squares to the counted part squares."],
        solutions: [
          {
            label: "Counting rule",
            steps: [
              "Full squares = 18.",
              "Part squares (more than half) counted as 1 each = 12.",
              "Estimate ≈ 18 + 12 = 30 cm² (≈ 24–30 cm² depending on the rule used).",
            ],
          },
        ],
      },
      {
        id: "pa-qa-q08",
        question:
          "A rectangle is 9 cm long and 4 cm wide. A square has the SAME area as this rectangle. Compare the perimeters of the two shapes. Which has the smaller perimeter?",
        modelAnswer:
          "Rectangle area = 9 × 4 = 36 cm². A square of the same area has side² = 36, so side = 6 cm. Rectangle perimeter = 2 × (9 + 4) = 26 cm. Square perimeter = 4 × 6 = 24 cm. The square has the smaller perimeter (24 cm < 26 cm), showing equal areas can have different perimeters.",
        markScheme: [
          "rectangle area = 36 cm²",
          "square side = 6 cm (since 6 × 6 = 36)",
          "rectangle P = 26 cm, square P = 24 cm",
          "square has the smaller perimeter",
        ],
        commonError: "Assuming equal areas must mean equal perimeters.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "challenge",
        strategy: "Compare like with like",
        numericAnswer: 24,
        hints: ["Find the rectangle's area first.", "A square with that area has side = the number whose square is 36.", "Work out both perimeters and compare."],
        solutions: [
          {
            label: "Area then perimeters",
            steps: [
              "Rectangle area = 9 × 4 = 36 cm².",
              "Square side = 6 cm (6² = 36); square P = 4 × 6 = 24 cm.",
              "Rectangle P = 2 × (9 + 4) = 26 cm, so the square's perimeter (24 cm) is smaller.",
            ],
          },
        ],
      },
      {
        id: "pa-qa-q09",
        question:
          "A regular pentagon and a square have equal perimeters. The square has side 10 cm. Find the side length of the pentagon.",
        modelAnswer:
          "Square perimeter = 4 × 10 = 40 cm. The pentagon has the same perimeter, 40 cm, shared over 5 equal sides, so each side = 40 ÷ 5 = 8 cm.",
        markScheme: [
          "square perimeter = 4 × 10 = 40 cm",
          "pentagon has 5 equal sides, same perimeter 40 cm",
          "pentagon side = 40 ÷ 5 = 8 cm",
        ],
        commonError: "Forgetting a pentagon has 5 sides, or not finding the shared perimeter first.",
        guideRef: "Regular polygons and irregular shapes",
        difficulty: "core",
        strategy: "Work backwards",
        numericAnswer: 8,
        hints: ["Find the square's perimeter first.", "The pentagon's perimeter is the same.", "A regular pentagon has 5 equal sides — divide by 5."],
        solutions: [
          {
            label: "Shared perimeter",
            steps: ["Square P = 4 × 10 = 40 cm.", "Pentagon P = 40 cm over 5 sides.", "Side = 40 ÷ 5 = 8 cm."],
          },
        ],
      },
      {
        id: "pa-qa-q10",
        question:
          "A rectangular plot is 40 m by 25 m. Fencing costs ₹35 per metre, but one 40 m side is left open as a gateway and is not fenced. Find the cost of the fencing.",
        modelAnswer:
          "Full perimeter = 2 × (40 + 25) = 130 m. Leaving one 40 m side open, the fenced length = 130 − 40 = 90 m. Cost = 90 × ₹35 = ₹3150.",
        markScheme: [
          "full perimeter = 2 × (40 + 25) = 130 m",
          "fenced length = 130 − 40 = 90 m",
          "cost = 90 × 35 = ₹3150",
        ],
        commonError: "Fencing the full perimeter (130 m) and forgetting to subtract the open gateway side.",
        guideRef: "Area vs perimeter, composite shapes and cost problems",
        difficulty: "challenge",
        strategy: "Read the question carefully",
        numericAnswer: 3150,
        hints: ["Find the full perimeter first.", "One 40 m side has no fence — subtract it.", "Multiply the fenced length by ₹35."],
        solutions: [
          {
            label: "Perimeter minus open side",
            steps: [
              "Full perimeter = 2 × (40 + 25) = 130 m.",
              "Open gateway side = 40 m, so fenced = 130 − 40 = 90 m.",
              "Cost = 90 × 35 = ₹3150.",
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
perimeterArea.questionBank.mcqPapers = [
  { id: "pa-mcq-paper-1", title: "Perimeter and Area — MCQ Set A", questions: perimeterArea.quiz.mcq.slice(0, 10) },
  { id: "pa-mcq-paper-2", title: "Perimeter and Area — MCQ Set B", questions: perimeterArea.quiz.mcq.slice(10) },
];
perimeterArea.questionBank.qaPapers = [
  { id: "pa-qa-paper-1", title: "Perimeter and Area — Written Practice A", questions: perimeterArea.quiz.qa.slice(0, 5) },
  { id: "pa-qa-paper-2", title: "Perimeter and Area — Written Practice B", questions: perimeterArea.quiz.qa.slice(5) },
];

export default perimeterArea;
