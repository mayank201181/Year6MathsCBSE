import type { Topic } from "../types";

// Understanding Shapes & Constructions (CBSE Class 6).
// Covers 2D shape classification, triangles, quadrilaterals, polygons,
// 3D solids (faces/edges/vertices, nets) and ruler-and-compass constructions.
// Follows the AoPS-flavoured contract: discovery openers, derivations,
// hint ladders, multi-method solutions and verified numeric answers.

const shapes: Topic = {
  id: "shapes",
  title: "Understanding Shapes & Constructions",
  subject: "Maths",
  chapter: "NCERT Ch. 5 + Ganita Prakash Ch. 8 (Playing with Constructions)",
  icon: "🔺",
  color: "#ec4899",
  intro:
    "Shapes are everywhere — in a kite, a slice of barfi, a brick, a football. In this topic you learn to *sort* shapes by their sides and angles, discover why a square is secretly also a rectangle and a rhombus, count the faces, edges and vertices of solids, and draw exact figures with just a ruler and compass.",
  guide: [
    {
      heading: "Sorting 2D shapes: sides and angles",
      discovery: {
        problem:
          "Here are four flat shapes: a square, a long rectangle, a kite and a circle. If a friend can only ask you 'How many straight sides does it have?', which two shapes could they still mix up — and what *other* question fixes that?",
        idea:
          "Counting sides separates a circle (0 straight sides) from the others, but a square and a rectangle both have 4 sides. To tell shapes apart we need TWO ideas: the number of sides AND facts about the sides and angles (lengths equal? angles right?).",
      },
      body:
        "A **polygon** is a closed flat shape made only of straight line segments. We name polygons by how many sides they have:\n\n- 3 sides → **triangle**\n- 4 sides → **quadrilateral**\n- 5 sides → **pentagon**\n- 6 sides → **hexagon**\n- 8 sides → **octagon**\n\nA **circle** is not a polygon — it has no straight sides. A shape is **regular** when *all its sides are equal AND all its angles are equal* (like a square or an equilateral triangle).",
      keyPoints: [
        "Polygon = closed shape made of straight sides only.",
        "Name a polygon by counting its sides.",
        "Regular polygon = all sides equal AND all angles equal.",
        "A circle is not a polygon (no straight sides).",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangle, a square, a pentagon and a hexagon shown side by side as polygons"><polygon points="40,90 70,30 100,90" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><text x="70" y="105" text-anchor="middle" font-size="11" fill="#334155">3 sides</text><rect x="130" y="35" width="55" height="55" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><text x="157" y="105" text-anchor="middle" font-size="11" fill="#334155">4 sides</text><polygon points="240,32 268,52 257,86 223,86 212,52" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><text x="240" y="105" text-anchor="middle" font-size="11" fill="#334155">5 sides</text><polygon points="320,35 345,35 357,60 345,85 320,85 308,60" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><text x="332" y="105" text-anchor="middle" font-size="11" fill="#334155">6 sides</text></svg>',
      ],
      whyItWorks:
        "Two facts — how many sides and whether sides/angles are equal — are enough to place almost every classroom shape, because they capture the only things a polygon can vary in: its number of corners and how 'even' it is.",
      strategies: ["Sort and classify", "Ask the right question"],
    },
    {
      heading: "Triangles: by sides and by angles",
      discovery: {
        problem:
          "A triangle has one angle of 90° and two sides of equal length. Is that allowed? Sketch one — what do its angles add up to?",
        idea:
          "Yes! A right-angled isosceles triangle (angles 90°, 45°, 45°) exists. A triangle can be described TWO ways at once: by its sides AND by its angles. The three angles always add to 180°.",
      },
      body:
        "We classify triangles in **two independent ways**.\n\n**By sides:**\n- **Equilateral** — all 3 sides equal (and all angles 60°).\n- **Isosceles** — exactly 2 sides equal.\n- **Scalene** — all 3 sides different.\n\n**By angles:**\n- **Acute** — all 3 angles less than 90°.\n- **Right** — one angle exactly 90°.\n- **Obtuse** — one angle more than 90°.\n\nThe three angles of *any* triangle always add up to **180°**.",
      keyPoints: [
        "By sides: equilateral (3 equal), isosceles (2 equal), scalene (0 equal).",
        "By angles: acute (<90° all), right (one 90°), obtuse (one >90°).",
        "A triangle can be both, e.g. 'right isosceles'.",
        "Angles of any triangle sum to 180°.",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three triangles: equilateral with equal sides, isosceles with two equal sides, and a right-angled triangle"><polygon points="50,95 20,95 35,40" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><text x="35" y="112" text-anchor="middle" font-size="11" fill="#334155">equilateral</text><polygon points="170,95 120,95 145,35" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><text x="145" y="112" text-anchor="middle" font-size="11" fill="#334155">isosceles</text><polygon points="245,95 245,40 305,95" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><rect x="245" y="83" width="12" height="12" fill="none" stroke="#be185d" stroke-width="1.5"/><text x="275" y="112" text-anchor="middle" font-size="11" fill="#334155">right-angled</text></svg>',
      ],
      whyItWorks:
        "Sides and angles describe different things, so the two systems do not clash — that is why a single triangle can carry one label from each list. The 180° fact comes from tearing off the three corners and laying them along a straight line: they fit exactly, and a straight line is 180°.",
      strategies: ["Classify two ways", "Use the angle sum"],
      thinkDeeper:
        "Can a triangle be both equilateral AND right-angled? Use the angle sum to decide.",
    },
    {
      heading: "The quadrilateral family",
      discovery: {
        problem:
          "I am thinking of a shape with 4 equal sides and 4 right angles. Is it a square, a rectangle, or a rhombus? Could it honestly be called all three at once?",
        idea:
          "A square ticks every box: '4 right angles' makes it a rectangle, and '4 equal sides' makes it a rhombus. So a square IS a special rectangle AND a special rhombus. Shape families overlap.",
      },
      body:
        "A **quadrilateral** has 4 sides. The important members:\n\n- **Trapezium** — exactly one pair of parallel sides.\n- **Parallelogram** — both pairs of opposite sides parallel (and equal); opposite angles equal.\n- **Rhombus** — a parallelogram with *all 4 sides equal*.\n- **Rectangle** — a parallelogram with *4 right angles*.\n- **Square** — has *both*: 4 equal sides and 4 right angles.\n\nSo a square is a rectangle (it has the right angles) *and* a rhombus (it has the equal sides) *and* a parallelogram — but a rectangle is not always a square.",
      keyPoints: [
        "Parallelogram: opposite sides parallel and equal.",
        "Rectangle = parallelogram + 4 right angles.",
        "Rhombus = parallelogram + 4 equal sides.",
        "Square = rectangle AND rhombus (both conditions).",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A family diagram showing parallelogram splitting into rectangle and rhombus, both meeting at square"><rect x="115" y="8" width="90" height="26" rx="4" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><text x="160" y="26" text-anchor="middle" font-size="12" fill="#334155">parallelogram</text><rect x="30" y="62" width="90" height="26" rx="4" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><text x="75" y="80" text-anchor="middle" font-size="12" fill="#334155">rectangle</text><rect x="200" y="62" width="90" height="26" rx="4" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><text x="245" y="80" text-anchor="middle" font-size="12" fill="#334155">rhombus</text><rect x="115" y="116" width="90" height="26" rx="4" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><text x="160" y="134" text-anchor="middle" font-size="12" fill="#334155">square</text><line x1="140" y1="34" x2="75" y2="62" stroke="#be185d" stroke-width="1.5"/><line x1="180" y1="34" x2="245" y2="62" stroke="#be185d" stroke-width="1.5"/><line x1="75" y1="88" x2="150" y2="116" stroke="#be185d" stroke-width="1.5"/><line x1="245" y1="88" x2="170" y2="116" stroke="#be185d" stroke-width="1.5"/></svg>',
      ],
      whyItWorks:
        "Each shape is the one above it plus an *extra* rule. A square obeys every rule on the way down both branches, so it belongs to all the families at once — the way a tiger is a cat is a mammal.",
      strategies: ["Build families", "Use defining properties"],
      thinkDeeper:
        "Is every rectangle a parallelogram? Is every parallelogram a rectangle? The answers are different — why?",
    },
    {
      heading: "3D solids: faces, edges and vertices",
      discovery: {
        problem:
          "Take a cube (like a dice). Count its flat surfaces, then its straight edges, then its corners. Add faces + vertices, then subtract edges. What number do you get? Now try the same on a square pyramid.",
        idea:
          "A cube gives 6 + 8 − 12 = 2. A square pyramid gives 5 + 5 − 8 = 2. For these solids, Faces + Vertices − Edges always equals 2 — that is Euler's famous rule.",
      },
      body:
        "A **solid** (3D shape) has three things to count:\n\n- **Face** — a flat (or curved) surface.\n- **Edge** — a line where two faces meet.\n- **Vertex** — a corner where edges meet (plural *vertices*).\n\nKey solids and their counts:\n\n- **Cube:** 6 faces, 12 edges, 8 vertices.\n- **Cuboid:** 6 faces, 12 edges, 8 vertices.\n- **Square pyramid:** 5 faces, 8 edges, 5 vertices.\n- **Triangular prism:** 5 faces, 9 edges, 6 vertices.\n- **Cylinder:** 2 flat faces + 1 curved, 0 vertices.\n- **Cone:** 1 flat face + 1 curved, 1 vertex (the apex).\n- **Sphere:** 1 curved surface, no edges, no vertices.\n\nFor solids with flat faces (polyhedra), **Faces + Vertices − Edges = 2** (Euler's formula).",
      keyPoints: [
        "Face = surface, Edge = where two faces meet, Vertex = corner.",
        "Cube & cuboid: 6 faces, 12 edges, 8 vertices.",
        "Square pyramid: 5 faces, 8 edges, 5 vertices.",
        "Euler: F + V − E = 2 for any polyhedron.",
      ],
      diagrams: [
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cube drawn in perspective with labels for one face, one edge and one vertex"><polygon points="40,50 150,50 150,140 40,140" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><polygon points="40,50 80,20 190,20 150,50" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><polygon points="150,50 190,20 190,110 150,140" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/><circle cx="40" cy="50" r="4" fill="#be185d"/><text x="95" y="100" text-anchor="middle" font-size="12" fill="#334155">face</text><text x="118" y="160" text-anchor="middle" font-size="11" fill="#334155">edge</text><line x1="95" y1="142" x2="95" y2="150" stroke="#334155" stroke-width="1"/><text x="22" y="44" text-anchor="middle" font-size="11" fill="#334155">vertex</text></svg>',
      ],
      whyItWorks:
        "Faces, edges and vertices are not random: every time you cut a solid into more pieces you add faces, edges and vertices together in a balanced way, so the combination F + V − E never changes for a polyhedron. It always lands on 2.",
      strategies: ["Count systematically", "Look for invariants"],
    },
    {
      heading: "Nets and ruler-and-compass constructions",
      discovery: {
        problem:
          "Cut six identical squares joined in a cross shape (four in a row, one above and one below the second square). If you fold along the joins, do they close up into a cube with no gaps or overlaps?",
        idea:
          "Yes — that cross is one of the 11 different nets of a cube. A **net** is a flat pattern that folds up into a solid. Not every arrangement of 6 squares folds into a cube, though.",
      },
      body:
        "A **net** is a 2D pattern you can fold to make a 3D solid. A cube has 6 square faces, so its net is 6 squares joined edge-to-edge in a way that folds without overlap.\n\n**Constructions** use only a ruler (for straight lines) and a compass (for circles and equal lengths):\n\n- *Line segment of given length* — mark the length on the ruler and draw.\n- *Circle of given radius* — open the compass to the radius, place the point, sweep.\n- *Copy a segment* — open the compass to the segment's length, then strike that same length onto a new line.\n- *Perpendicular* (informally) — equal arcs from both ends of a segment cross above and below; join the crossing points.\n\nThe compass guarantees **equal lengths** without measuring, which is why constructions are exact.",
      keyPoints: [
        "Net = flat pattern that folds into a solid.",
        "A cube net is 6 squares; not every 6-square arrangement works.",
        "Ruler draws straight lines; compass copies lengths and draws circles.",
        "A compass radius keeps a length fixed, giving exact equal lengths.",
      ],
      diagrams: [
        '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cross-shaped net of six squares that folds into a cube"><rect x="75" y="15" width="50" height="50" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><rect x="15" y="65" width="50" height="50" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><rect x="75" y="65" width="50" height="50" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><rect x="135" y="65" width="50" height="50" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><rect x="75" y="115" width="50" height="50" fill="#fce7f3" stroke="#be185d" stroke-width="2"/><rect x="75" y="165" width="50" height="50" fill="#fce7f3" stroke="#be185d" stroke-width="2"/></svg>',
      ],
      whyItWorks:
        "A net works only if, after folding, every edge meets exactly one other edge with no face landing on top of another. The compass makes constructions exact because a fixed compass opening is a copy of one length you can stamp anywhere.",
      strategies: ["Visualise folding", "Use the compass to copy lengths"],
      thinkDeeper:
        "There are exactly 11 distinct nets of a cube. Can you sketch a 6-square arrangement that does NOT fold into a cube?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What makes a polygon 'regular'?", back: "All its sides are equal AND all its angles are equal." },
      { front: "Name a triangle with all three sides equal.", back: "An equilateral triangle (all angles are 60°)." },
      { front: "How is a square related to a rectangle?", back: "A square is a special rectangle — it has 4 right angles AND 4 equal sides." },
      { front: "Cube: faces, edges, vertices?", back: "6 faces, 12 edges, 8 vertices." },
      { front: "Square pyramid: faces, edges, vertices?", back: "5 faces, 8 edges, 5 vertices." },
      { front: "What is a net?", back: "A flat pattern of faces that folds up into a 3D solid." },
      { front: "What does Euler's formula say?", back: "For a polyhedron, Faces + Vertices − Edges = 2." },
    ],
    formulae: [
      { name: "Triangle angle sum", rule: "angle1 + angle2 + angle3 = 180°" },
      { name: "Euler's formula", rule: "F + V − E = 2 (for any polyhedron)" },
      { name: "Regular polygon", rule: "all sides equal and all angles equal" },
      { name: "Square", rule: "4 equal sides + 4 right angles (= rectangle + rhombus)" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "shp-mcq-q01",
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answerIndex: 1,
        explanation: "A hexagon has 6 sides (hexa- means six).",
        guideRef: "Sorting 2D shapes: sides and angles",
        difficulty: "warmup",
      },
      {
        id: "shp-mcq-q02",
        question: "A triangle with all three sides equal is called:",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        answerIndex: 2,
        explanation: "All three sides equal means equilateral; its angles are all 60°.",
        guideRef: "Triangles: by sides and by angles",
        difficulty: "warmup",
      },
      {
        id: "shp-mcq-q03",
        question: "Which of these is NOT a polygon?",
        options: ["Triangle", "Pentagon", "Circle", "Square"],
        answerIndex: 2,
        explanation: "A circle has no straight sides, so it is not a polygon.",
        guideRef: "Sorting 2D shapes: sides and angles",
        difficulty: "warmup",
      },
      {
        id: "shp-mcq-q04",
        question: "How many faces does a cube have?",
        options: ["4", "6", "8", "12"],
        answerIndex: 1,
        explanation: "A cube has 6 square faces (like a dice).",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "warmup",
      },
      {
        id: "shp-mcq-q05",
        question: "A quadrilateral with exactly one pair of parallel sides is a:",
        options: ["Square", "Trapezium", "Rhombus", "Rectangle"],
        answerIndex: 1,
        explanation: "A trapezium has exactly one pair of parallel sides.",
        guideRef: "The quadrilateral family",
        difficulty: "warmup",
      },
      {
        id: "shp-mcq-q06",
        question: "How many vertices (corners) does a cube have?",
        options: ["6", "8", "10", "12"],
        answerIndex: 1,
        explanation: "A cube has 8 vertices — one at each corner.",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "warmup",
      },
      {
        id: "shp-mcq-q07",
        question: "A triangle has angles 50°, 60° and 70°. It is:",
        options: ["Acute", "Right-angled", "Obtuse", "Impossible"],
        answerIndex: 0,
        explanation: "All three angles are less than 90°, so it is an acute triangle. (They sum to 180°.)",
        guideRef: "Triangles: by sides and by angles",
        difficulty: "core",
        hints: [
          "Check the angles add to 180°.",
          "Now look: is any angle 90° or more?",
          "All under 90° means acute.",
        ],
        strategy: "Use the angle sum",
      },
      {
        id: "shp-mcq-q08",
        question: "Which shape is a parallelogram with all four sides equal but not necessarily right angles?",
        options: ["Rectangle", "Rhombus", "Trapezium", "Square"],
        answerIndex: 1,
        explanation: "A rhombus has 4 equal sides; its angles need not be right angles (if they are, it becomes a square).",
        guideRef: "The quadrilateral family",
        difficulty: "core",
        hints: [
          "Which family member is defined by EQUAL sides?",
          "A square also has equal sides but adds right angles.",
          "Equal sides, angles not required to be 90° → rhombus.",
        ],
        strategy: "Use defining properties",
      },
      {
        id: "shp-mcq-q09",
        question: "How many edges does a cube have?",
        options: ["8", "10", "12", "16"],
        answerIndex: 2,
        explanation: "A cube has 12 edges: 4 on top, 4 on the bottom, 4 vertical.",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "core",
        hints: [
          "An edge is where two faces meet.",
          "Count the top square (4) and bottom square (4).",
          "Then add the 4 vertical edges joining them.",
        ],
        strategy: "Count systematically",
      },
      {
        id: "shp-mcq-q10",
        question: "Which solid has 1 curved surface, 1 flat face and exactly 1 vertex?",
        options: ["Cylinder", "Cone", "Sphere", "Cuboid"],
        answerIndex: 1,
        explanation: "A cone has a circular flat base, a curved surface and one vertex at the apex.",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "core",
        hints: [
          "It has a single pointed tip.",
          "A cylinder has no vertex; a sphere has no flat face.",
          "One flat circle + one point at the top → cone.",
        ],
        strategy: "Use defining properties",
      },
      {
        id: "shp-mcq-q11",
        question: "Which statement is ALWAYS true?",
        options: [
          "Every rectangle is a square",
          "Every square is a rectangle",
          "Every rhombus is a square",
          "Every trapezium is a parallelogram",
        ],
        answerIndex: 1,
        explanation: "A square has 4 right angles, so it satisfies the rectangle definition — every square is a rectangle. The reverse is not always true.",
        guideRef: "The quadrilateral family",
        difficulty: "core",
        hints: [
          "A square obeys every rectangle rule.",
          "But a long rectangle is not a square.",
          "So 'every square is a rectangle' holds; the others fail.",
        ],
        strategy: "Build families",
      },
      {
        id: "shp-mcq-q12",
        question: "A triangular prism has how many faces?",
        options: ["4", "5", "6", "9"],
        answerIndex: 1,
        explanation: "A triangular prism has 2 triangular faces and 3 rectangular faces, so 5 faces in total.",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "core",
        hints: [
          "It has two triangular ends.",
          "How many rectangles join the two triangles?",
          "2 triangles + 3 rectangles = 5.",
        ],
        strategy: "Count systematically",
      },
      {
        id: "shp-mcq-q13",
        question: "A regular polygon must have:",
        options: [
          "All sides equal only",
          "All angles equal only",
          "All sides equal AND all angles equal",
          "An even number of sides",
        ],
        answerIndex: 2,
        explanation: "Regular means both: all sides equal AND all angles equal.",
        guideRef: "Sorting 2D shapes: sides and angles",
        difficulty: "core",
        hints: [
          "A rectangle has equal angles but unequal sides — not regular.",
          "A rhombus has equal sides but unequal angles — not regular.",
          "You need BOTH conditions.",
        ],
        strategy: "Use defining properties",
      },
      {
        id: "shp-mcq-q14",
        question: "Two angles of a triangle are 90° and 45°. The third angle is:",
        options: ["35°", "45°", "55°", "90°"],
        answerIndex: 1,
        explanation: "Angles sum to 180°, so the third = 180° − 90° − 45° = 45°. (A right isosceles triangle.)",
        guideRef: "Triangles: by sides and by angles",
        difficulty: "core",
        hints: [
          "The three angles add to 180°.",
          "180 − 90 − 45 = ?",
          "It comes to 45° — two equal angles, so isosceles.",
        ],
        strategy: "Use the angle sum",
      },
      {
        id: "shp-mcq-q15",
        question: "Which tool guarantees two lengths are exactly equal without measuring with numbers?",
        options: ["Ruler", "Protractor", "Compass", "Set square"],
        answerIndex: 2,
        explanation: "A fixed compass opening is a copy of one length, so it stamps the same length anywhere.",
        guideRef: "Nets and ruler-and-compass constructions",
        difficulty: "core",
        hints: [
          "Think about what stays fixed when you swing it.",
          "A ruler needs you to read numbers.",
          "The compass opening keeps a length constant.",
        ],
        strategy: "Use the compass to copy lengths",
      },
      {
        id: "shp-mcq-q16",
        question: "Using Euler's formula, a polyhedron has 8 faces and 12 vertices. How many edges does it have?",
        options: ["16", "18", "20", "22"],
        answerIndex: 1,
        explanation: "F + V − E = 2, so 8 + 12 − E = 2, giving E = 18.",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "challenge",
        hints: [
          "Write down Euler's formula.",
          "Substitute F = 8 and V = 12.",
          "8 + 12 − E = 2 → E = 18.",
        ],
        strategy: "Look for invariants",
      },
      {
        id: "shp-mcq-q17",
        question: "How many triangles (of any size) are in a single triangle that has one straight line drawn from the top vertex to the middle of the opposite side?",
        options: ["2", "3", "4", "6"],
        answerIndex: 1,
        explanation: "The line makes 2 small triangles, plus the whole original triangle = 3 triangles in total.",
        guideRef: "Triangles: by sides and by angles",
        difficulty: "challenge",
        hints: [
          "Count the small triangles first.",
          "Don't forget the big original triangle.",
          "2 small + 1 big = 3.",
        ],
        strategy: "Count systematically",
      },
      {
        id: "shp-mcq-q18",
        question: "A net of 6 squares folds into a cube. After folding, each edge of the cube is formed by:",
        options: [
          "One square edge alone",
          "Two square edges meeting",
          "Three square edges meeting",
          "A curved join",
        ],
        answerIndex: 1,
        explanation: "When a cube net folds, free edges pair up — two square edges meet to form each cube edge.",
        guideRef: "Nets and ruler-and-compass constructions",
        difficulty: "challenge",
        hints: [
          "A cube has 12 edges; the 6 squares have 24 edges in total.",
          "24 ÷ 12 = 2.",
          "So each cube edge is two square edges meeting.",
        ],
        strategy: "Visualise folding",
      },
      {
        id: "shp-mcq-q19",
        question: "Can a triangle have two right angles?",
        options: [
          "Yes, easily",
          "Yes, if it is large",
          "No — the angles would sum to more than 180°",
          "Only if it is isosceles",
        ],
        answerIndex: 2,
        explanation: "Two right angles already total 180°, leaving 0° for the third — impossible for a real triangle.",
        guideRef: "Triangles: by sides and by angles",
        difficulty: "challenge",
        hints: [
          "Add up two right angles.",
          "90° + 90° = 180°, the whole angle sum.",
          "Nothing is left for the third angle, so it cannot happen.",
        ],
        strategy: "Use the angle sum",
      },
      {
        id: "shp-mcq-q20",
        question: "A square pyramid sits on a cube (base to top face). Without the shared face, how many faces does the new solid show on its outside?",
        options: ["8", "9", "10", "11"],
        answerIndex: 1,
        explanation: "Cube shows 5 faces (its top is hidden), pyramid shows its 4 triangular faces (its base is hidden): 5 + 4 = 9.",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "challenge",
        hints: [
          "Which face of the cube is now covered?",
          "Which face of the pyramid is now covered?",
          "Cube: 6 − 1 = 5 visible; pyramid: 5 − 1 = 4 visible; add them.",
        ],
        strategy: "Count systematically",
      },
    ],
    qa: [
      {
        id: "shp-qa-q01",
        question: "Explain in your own words why every square is also a rectangle, but not every rectangle is a square.",
        modelAnswer:
          "A rectangle is defined as a quadrilateral with 4 right angles. A square has 4 right angles too, so it meets the rectangle definition — every square is a rectangle. But a rectangle only needs right angles; its sides can be unequal (like a door). A square also demands 4 equal sides, which an ordinary rectangle does not have. So a square is a special rectangle, but a general rectangle is not a square.",
        markScheme: [
          "rectangle defined by 4 right angles",
          "square also has 4 right angles | square meets rectangle definition",
          "square needs 4 equal sides | rectangle sides can be unequal",
        ],
        commonError: "Believing the two words are interchangeable, or that a square is 'not allowed' to be a rectangle.",
        guideRef: "The quadrilateral family",
        difficulty: "core",
        strategy: "Use defining properties",
        hints: [
          "Write the defining rule for a rectangle.",
          "Does a square obey that rule?",
          "What EXTRA rule does a square add that a rectangle need not?",
        ],
      },
      {
        id: "shp-qa-q02",
        question: "A triangle has angles in the ratio 1 : 2 : 3. Find all three angles and say what type of triangle it is (by angles).",
        modelAnswer:
          "The three parts add to 1 + 2 + 3 = 6 parts, which must equal 180°. So 1 part = 180° ÷ 6 = 30°. The angles are 30°, 60° and 90°. Because one angle is exactly 90°, it is a right-angled triangle.",
        markScheme: [
          "6 parts = 180° | one part = 30°",
          "angles 30°, 60°, 90°",
          "right-angled triangle",
        ],
        commonError: "Splitting 180° into three equal parts instead of into 6 ratio-parts.",
        guideRef: "Triangles: by sides and by angles",
        difficulty: "core",
        strategy: "Introduce a variable",
        numericAnswer: 90,
        hints: [
          "Let one 'part' be x; the angles are x, 2x, 3x.",
          "x + 2x + 3x = 180°.",
          "Solve 6x = 180° then list the angles.",
        ],
        solutions: [
          {
            label: "Ratio parts",
            steps: [
              "Total parts = 1 + 2 + 3 = 6.",
              "One part = 180° ÷ 6 = 30°.",
              "Angles = 30°, 60°, 90° → right-angled.",
            ],
          },
          {
            label: "Algebra",
            steps: [
              "Let the angles be x, 2x, 3x.",
              "x + 2x + 3x = 6x = 180°, so x = 30°.",
              "Angles are 30°, 60°, 90°; the 90° makes it right-angled.",
            ],
          },
        ],
      },
      {
        id: "shp-qa-q03",
        question: "List the faces, edges and vertices of a cuboid, and check that they satisfy Euler's formula F + V − E = 2.",
        modelAnswer:
          "A cuboid has 6 faces (rectangles), 12 edges and 8 vertices. Check: F + V − E = 6 + 8 − 12 = 2. ✓ It satisfies Euler's formula.",
        markScheme: [
          "6 faces",
          "12 edges and 8 vertices",
          "6 + 8 − 12 = 2 | satisfies Euler",
        ],
        commonError: "Confusing edges (12) with vertices (8), or counting only the 3 visible faces in a drawing.",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "core",
        strategy: "Count systematically",
        numericAnswer: 2,
        hints: [
          "A cuboid is box-shaped like a brick.",
          "Faces = 6, vertices = 8, edges = 12.",
          "Put them into F + V − E.",
        ],
        solutions: [
          {
            label: "Count then check",
            steps: [
              "Faces: top, bottom, front, back, left, right = 6.",
              "Vertices: 4 top corners + 4 bottom corners = 8.",
              "Edges: 4 top + 4 bottom + 4 vertical = 12.",
              "F + V − E = 6 + 8 − 12 = 2. ✓",
            ],
          },
        ],
      },
      {
        id: "shp-qa-q04",
        question: "Describe, step by step, how to construct a line segment exactly 6 cm long and then copy it onto a different line using a compass.",
        modelAnswer:
          "Step 1: Draw a long straight line with the ruler and mark a point A on it. Step 2: Place the ruler's 0 mark at A and mark point B at 6 cm; join AB — that is the 6 cm segment. Step 3: To copy it, open the compass so the metal point is on A and the pencil is on B (the compass opening is now 6 cm). Step 4: Draw a new line and mark a point P on it. Step 5: Without changing the compass, place the point on P and draw an arc cutting the new line at Q. Then PQ = 6 cm, an exact copy of AB.",
        markScheme: [
          "draw line and mark A, then B at 6 cm | join AB",
          "open compass to length AB",
          "strike same opening from P to get Q | PQ = AB = 6 cm",
        ],
        commonError: "Re-measuring with the ruler instead of keeping the compass opening fixed (which is what makes the copy exact).",
        guideRef: "Nets and ruler-and-compass constructions",
        difficulty: "core",
        strategy: "Use the compass to copy lengths",
        hints: [
          "First make the 6 cm segment with the ruler.",
          "Set the compass to the length of that segment.",
          "Without changing it, stamp the same length on the new line.",
        ],
      },
      {
        id: "shp-qa-q05",
        question: "Sketch and name three different types of quadrilateral, giving one defining property of each.",
        modelAnswer:
          "Three examples: (1) Rectangle — a quadrilateral with 4 right angles and opposite sides equal. (2) Rhombus — a parallelogram with all 4 sides equal. (3) Trapezium — a quadrilateral with exactly one pair of parallel sides. (Any three valid quadrilaterals with correct properties are acceptable.)",
        markScheme: [
          "three different quadrilaterals named",
          "a correct defining property for each",
          "properties match the named shapes",
        ],
        commonError: "Giving the same property for two shapes, or describing a square and a rectangle as if completely unrelated.",
        guideRef: "The quadrilateral family",
        difficulty: "core",
        strategy: "Use defining properties",
        hints: [
          "Pick shapes from the quadrilateral family diagram.",
          "Each needs ONE property that pins it down.",
          "E.g. trapezium → exactly one pair of parallel sides.",
        ],
      },
      {
        id: "shp-qa-q06",
        question: "Challenge: A solid is made of identical small cubes stacked into a 2 × 2 × 2 big cube. How many of the small cubes have exactly 3 of their faces painted if the whole outside of the big cube is painted?",
        modelAnswer:
          "A 2 × 2 × 2 cube has 8 small cubes, and every one of them sits at a corner of the big cube. A corner cube shows exactly 3 outer faces, so all 8 have exactly 3 painted faces. The answer is 8.",
        markScheme: [
          "2×2×2 has 8 small cubes",
          "each small cube is a corner cube",
          "corner cube has 3 painted faces → 8 cubes",
        ],
        commonError: "Assuming there are hidden 'inside' cubes — in a 2×2×2 there are none; every cube touches the surface.",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "challenge",
        strategy: "Try small cases",
        numericAnswer: 8,
        hints: [
          "How many small cubes are there in total?",
          "In a 2×2×2 cube, are there any cubes fully inside?",
          "Every small cube is a corner — and corners show 3 faces.",
        ],
        solutions: [
          {
            label: "Spot the corners",
            steps: [
              "Total small cubes = 2 × 2 × 2 = 8.",
              "A 2×2×2 cube has no interior cubes; all 8 are corners.",
              "A corner cube has 3 painted faces, so the answer is 8.",
            ],
          },
        ],
      },
      {
        id: "shp-qa-q07",
        question: "Challenge: A polyhedron has 6 faces and 12 edges. Use Euler's formula to find the number of vertices, and name a solid this could be.",
        modelAnswer:
          "Euler's formula: F + V − E = 2. Substituting F = 6 and E = 12 gives 6 + V − 12 = 2, so V = 8. A solid with 6 faces, 12 edges and 8 vertices is a cube or a cuboid.",
        markScheme: [
          "use F + V − E = 2",
          "6 + V − 12 = 2 → V = 8",
          "name a cube or cuboid",
        ],
        commonError: "Rearranging the formula wrongly (e.g. V = E − F instead of V = 2 − F + E).",
        guideRef: "3D solids: faces, edges and vertices",
        difficulty: "challenge",
        strategy: "Look for invariants",
        numericAnswer: 8,
        hints: [
          "Write Euler's formula and put in the known numbers.",
          "6 + V − 12 = 2.",
          "Solve for V, then think which everyday solid fits.",
        ],
        solutions: [
          {
            label: "Algebra with Euler",
            steps: [
              "F + V − E = 2.",
              "6 + V − 12 = 2 → V − 6 = 2 → V = 8.",
              "6 faces, 12 edges, 8 vertices → a cube/cuboid.",
            ],
          },
        ],
      },
      {
        id: "shp-qa-q08",
        question: "Challenge: In the figure a big triangle is divided by two straight lines from the top vertex to two different points on the base, splitting the base into three parts. How many triangles of any size are in the figure altogether?",
        modelAnswer:
          "The two lines split the big triangle into 3 small triangles sitting side by side. You can also join neighbouring small triangles into bigger ones. The triangles are: 3 small ones; 2 made of two adjacent smalls; and 1 whole big triangle made of all three. Total = 3 + 2 + 1 = 6 triangles.",
        markScheme: [
          "3 smallest triangles",
          "2 triangles each made of two adjacent pieces",
          "1 whole triangle → 3 + 2 + 1 = 6",
        ],
        commonError: "Counting only the 3 smallest triangles and forgetting the combined ones.",
        guideRef: "Triangles: by sides and by angles",
        difficulty: "challenge",
        strategy: "Count systematically",
        numericAnswer: 6,
        hints: [
          "Count the smallest triangles first.",
          "Now glue two neighbouring smalls together — how many ways?",
          "Add the single biggest triangle: 3 + 2 + 1.",
        ],
        solutions: [
          {
            label: "Group by size",
            steps: [
              "Smallest triangles: 3.",
              "Pairs of adjacent triangles: 2.",
              "The whole triangle: 1.",
              "Total = 3 + 2 + 1 = 6.",
            ],
          },
        ],
      },
      {
        id: "shp-qa-q09",
        question: "Two sides of a triangle are equal and the angle between them is 90°. Find the other two angles and name the triangle by BOTH systems (sides and angles).",
        modelAnswer:
          "The two equal sides make it isosceles, so the two base angles are equal. The three angles sum to 180°, and one is 90°, leaving 180° − 90° = 90° to be shared equally between the two base angles: each is 45°. So the angles are 90°, 45°, 45°. By sides it is isosceles; by angles it is right-angled. It is a right isosceles triangle.",
        markScheme: [
          "equal sides → isosceles, two equal base angles",
          "180 − 90 = 90 shared → 45° each",
          "right isosceles triangle | by sides isosceles, by angles right",
        ],
        commonError: "Forgetting that the two base angles must be equal because the two sides are equal.",
        guideRef: "Triangles: by sides and by angles",
        difficulty: "challenge",
        strategy: "Use the angle sum",
        numericAnswer: 45,
        hints: [
          "Equal sides mean equal base angles.",
          "The angles add to 180°; one is 90°.",
          "Share the remaining 90° equally between the two base angles.",
        ],
        solutions: [
          {
            label: "Angle sum + isosceles",
            steps: [
              "Equal sides → two equal base angles, call each a.",
              "90° + a + a = 180° → 2a = 90° → a = 45°.",
              "Angles 90°, 45°, 45°: right isosceles triangle.",
            ],
          },
        ],
      },
      {
        id: "shp-qa-q10",
        question: "Describe how to construct a circle of radius 4 cm with a compass, and state how many lines of symmetry the circle has.",
        modelAnswer:
          "Step 1: Use a ruler to open the compass so the distance between the metal point and the pencil tip is 4 cm. Step 2: Mark a point O for the centre. Step 3: Place the compass point firmly on O and turn the pencil all the way round to draw the circle. Every point on the circle is exactly 4 cm from O, so the radius is 4 cm. A circle has infinitely many lines of symmetry — every line through its centre is a line of symmetry.",
        markScheme: [
          "set compass opening to 4 cm | radius 4 cm",
          "fix point on centre O and sweep full turn",
          "infinitely many lines of symmetry | every diameter is a line of symmetry",
        ],
        commonError: "Setting the compass to 4 cm meaning the diameter instead of the radius, or saying a circle has only a few lines of symmetry.",
        guideRef: "Nets and ruler-and-compass constructions",
        difficulty: "core",
        strategy: "Use the compass to copy lengths",
        hints: [
          "The compass opening IS the radius.",
          "Keep the point fixed and sweep a full turn.",
          "Think how many lines through the centre cut it into matching halves.",
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
shapes.questionBank.mcqPapers = [
  { id: "shp-mcq-paper-1", title: "Shapes — MCQ Set A", questions: shapes.quiz.mcq.slice(0, 10) },
  { id: "shp-mcq-paper-2", title: "Shapes — MCQ Set B", questions: shapes.quiz.mcq.slice(10) },
];
shapes.questionBank.qaPapers = [
  { id: "shp-qa-paper-1", title: "Shapes — Written Practice A", questions: shapes.quiz.qa.slice(0, 5) },
  { id: "shp-qa-paper-2", title: "Shapes — Written Practice B", questions: shapes.quiz.qa.slice(5) },
];

export default shapes;
