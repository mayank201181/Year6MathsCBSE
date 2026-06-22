import type { Topic } from "../types";

// CBSE Class 6 — Basic Geometry: Lines & Angles.
// NCERT Ch. 4 + Ganita Prakash Ch. 2 (Lines and Angles).
// AoPS flavour: discovery openers, derive-don't-decree, hint ladders,
// multi-method solutions, genuine challenge problems, inline SVG diagrams.

const geometry: Topic = {
  id: "geometry-basics",
  title: "Basic Geometry: Lines & Angles",
  subject: "Maths",
  chapter: "NCERT Ch. 4 + Ganita Prakash Ch. 2 (Lines and Angles)",
  icon: "📐",
  color: "#3b82f6",
  intro:
    "Geometry begins with a single dot. From a point you build line segments, rays and lines; where two rays meet you get an angle. Once you can name the parts, measure an angle with a protractor and spot the families of angles, the whole world of shapes — polygons and circles included — opens up.",
  guide: [
    {
      heading: "Point, line, line segment and ray",
      discovery: {
        problem:
          "Mark two dots on paper, call them A and B. How many *different* straight paths of shortest length can you draw from A to B? And if you keep going past B in the same direction forever, what have you made?",
        idea:
          "Through two points there is exactly ONE straight line. The piece between A and B is a line segment; if it starts at A and shoots out past B forever it is a ray; if it runs forever both ways it is a line.",
      },
      body:
        "A **point** marks an exact position. It has no length, breadth or thickness — we draw a tiny dot and name it with a capital letter, like point A.\n\nJoin two points with the shortest straight path and you get a **line segment**, written AB. It has two endpoints and a definite length.\n\nStretch a line segment endlessly in *one* direction and you get a **ray**, written with one fixed endpoint first, like ray AB (start at A, go on past B forever).\n\nStretch it endlessly in *both* directions and you get a **line**, which has no endpoints and no length we can measure.",
      keyPoints: [
        "Point: a position, no size, named with a capital letter.",
        "Line segment AB: two endpoints, a fixed length.",
        "Ray AB: one endpoint (A), endless in one direction.",
        "Line: endless in both directions, no endpoints.",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A line segment, a ray and a line drawn one above the other for comparison"><text x="10" y="22" font-size="12" fill="#334155">Line segment AB</text><line x1="150" y1="18" x2="300" y2="18" stroke="#3b82f6" stroke-width="3"/><circle cx="150" cy="18" r="4" fill="#1e3a8a"/><circle cx="300" cy="18" r="4" fill="#1e3a8a"/><text x="10" y="72" font-size="12" fill="#334155">Ray AB</text><line x1="150" y1="68" x2="300" y2="68" stroke="#3b82f6" stroke-width="3"/><circle cx="150" cy="68" r="4" fill="#1e3a8a"/><polygon points="300,62 312,68 300,74" fill="#3b82f6"/><text x="10" y="122" font-size="12" fill="#334155">Line</text><line x1="120" y1="118" x2="300" y2="118" stroke="#3b82f6" stroke-width="3"/><polygon points="120,112 108,118 120,124" fill="#3b82f6"/><polygon points="300,112 312,118 300,124" fill="#3b82f6"/></svg>',
      ],
      whyItWorks:
        "Pull a thread tight between two pins and it always lies along the same straight path — that is why two points fix exactly one line. Removing an endpoint is what lets the figure run on forever, turning a segment into a ray and then a line.",
      strategies: ["Draw a diagram", "Name the parts"],
    },
    {
      heading: "Intersecting lines, parallel lines and curves",
      discovery: {
        problem:
          "Draw two straight lines on a page so that they NEVER meet, no matter how far you extend them. Now try to draw two straight lines that meet in TWO different points. Which task is impossible?",
        idea:
          "Two different straight lines can meet in at most ONE point. If they share a point they are intersecting; if they never meet they are parallel. Two straight lines can never cross twice.",
      },
      body:
        "Two lines that cross share exactly one point — they are **intersecting lines**, and the shared point is the **point of intersection**.\n\nTwo lines in the same flat sheet that never meet, however far you extend them, are **parallel lines** (like the two rails of a train track). They stay the same distance apart.\n\nA **curve** is any path you draw without lifting your pen. An **open curve** has two free ends (like the letter C); a **closed curve** ends exactly where it began, fencing off an inside from an outside (like a circle).",
      keyPoints: [
        "Intersecting lines meet at exactly one point.",
        "Parallel lines never meet and stay a constant distance apart.",
        "Open curve: free ends. Closed curve: starts and ends at the same point.",
        "A closed curve separates inside from outside.",
      ],
      diagrams: [
        '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="On the left two lines crossing at one point, on the right two parallel lines that never meet"><text x="10" y="18" font-size="12" fill="#334155">Intersecting</text><line x1="20" y1="40" x2="130" y2="110" stroke="#3b82f6" stroke-width="3"/><line x1="20" y1="110" x2="130" y2="40" stroke="#10b981" stroke-width="3"/><circle cx="75" cy="75" r="4" fill="#1e3a8a"/><text x="200" y="18" font-size="12" fill="#334155">Parallel</text><line x1="190" y1="55" x2="310" y2="55" stroke="#3b82f6" stroke-width="3"/><line x1="190" y1="95" x2="310" y2="95" stroke="#10b981" stroke-width="3"/></svg>',
      ],
      whyItWorks:
        "If two straight lines met at two points, then between those two points you would have two different straight paths — but two points fix only one line. So crossing twice is impossible: it is one point or none.",
      strategies: ["Try the impossible case", "Look for invariants"],
    },
    {
      heading: "What an angle is: vertex, arms, interior and exterior",
      discovery: {
        problem:
          "Open a pair of scissors a little, then wide. The two blades start from the same screw. What is changing as you open them, even though the blades themselves do not get any longer?",
        idea:
          "An angle is the amount of *turn* or opening between two rays that share a starting point. The shared point is the vertex; the two rays are the arms. Longer arms do not make a bigger angle — only more opening does.",
      },
      body:
        "An **angle** is formed by two rays starting from a common point. The common point is the **vertex** and the two rays are the **arms**.\n\nWe name an angle with three letters, the vertex in the *middle*: angle ABC (or ∠ABC) has its vertex at B. We can also call it ∠B if there is no confusion.\n\nThe opening between the arms is the **interior** of the angle; everything outside that opening is the **exterior**.\n\nImportant idea: the size of an angle depends only on how far one arm is turned from the other — **not** on how long you draw the arms.",
      keyPoints: [
        "Vertex = the shared point; arms = the two rays.",
        "Name with three letters, vertex in the middle: ∠ABC.",
        "Interior = inside the opening; exterior = outside it.",
        "Angle size = amount of turn, not arm length.",
      ],
      diagrams: [
        '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An angle with vertex labelled B and arms going to A and C, with the interior region shaded"><path d="M60 140 L60 40 A100 100 0 0 0 60 140 Z" fill="none"/><path d="M60 140 L60 50 A90 90 0 0 1 240 140 Z" fill="#dbeafe"/><line x1="60" y1="140" x2="60" y2="30" stroke="#3b82f6" stroke-width="3"/><line x1="60" y1="140" x2="270" y2="140" stroke="#3b82f6" stroke-width="3"/><circle cx="60" cy="140" r="4" fill="#1e3a8a"/><text x="45" y="155" font-size="14" fill="#334155">B</text><text x="50" y="26" font-size="14" fill="#334155">A</text><text x="272" y="155" font-size="14" fill="#334155">C</text><text x="105" y="120" font-size="12" fill="#1e40af">interior</text></svg>',
      ],
      whyItWorks:
        "Slide along an arm towards or away from the vertex and your direction of looking never changes — so the opening is the same. That is the proof that arm length cannot affect the angle: only the directions of the two arms matter.",
      strategies: ["Use a physical model (scissors)", "Separate what changes from what stays the same"],
    },
    {
      heading: "Measuring angles and the degree; types of angles",
      discovery: {
        problem:
          "Stand facing the door, then turn all the way around until you face the door again. People agreed to call that full turn 360 'degrees'. How many degrees is a quarter turn? Half a turn? Why might exactly half a turn look like a perfectly straight line?",
        idea:
          "A full turn is 360°. A half turn is 180° — and a half turn points you in the exact opposite direction, which lies along a straight line, so a straight angle is 180°. A quarter turn (a square corner) is 90°, a right angle.",
      },
      body:
        "We measure the opening of an angle in **degrees** (°). A full turn all the way round is **360°**.\n\nA **protractor** measures angles. Put its centre on the vertex, line up the zero line with one arm, then read where the other arm crosses the scale (use the scale that starts at 0° on your chosen arm).\n\nThe families of angles, by size:\n- **Acute**: less than 90°\n- **Right**: exactly 90° (a square corner)\n- **Obtuse**: between 90° and 180°\n- **Straight**: exactly 180° (a straight line)\n- **Reflex**: between 180° and 360°\n- **Complete**: exactly 360° (a full turn)\n\nTo *draw* an angle of a given size, draw one arm, place the protractor centre on its endpoint, mark the required degree, then join.",
      keyPoints: [
        "Full turn = 360°; half turn = straight angle = 180°; quarter turn = right angle = 90°.",
        "Acute < 90° < obtuse < 180° (straight) < reflex < 360° (complete).",
        "Protractor centre on the vertex, zero line on one arm, read the other arm.",
        "Two right angles together make a straight angle (90° + 90° = 180°).",
      ],
      diagrams: [
        '<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four angles side by side: an acute angle, a right angle, an obtuse angle and a straight angle"><g><line x1="20" y1="100" x2="70" y2="100" stroke="#3b82f6" stroke-width="3"/><line x1="20" y1="100" x2="58" y2="60" stroke="#3b82f6" stroke-width="3"/><text x="18" y="115" font-size="11" fill="#334155">acute</text></g><g><line x1="110" y1="100" x2="160" y2="100" stroke="#3b82f6" stroke-width="3"/><line x1="110" y1="100" x2="110" y2="55" stroke="#3b82f6" stroke-width="3"/><rect x="110" y="88" width="12" height="12" fill="none" stroke="#1e3a8a"/><text x="108" y="115" font-size="11" fill="#334155">right</text></g><g><line x1="210" y1="100" x2="260" y2="100" stroke="#3b82f6" stroke-width="3"/><line x1="210" y1="100" x2="178" y2="62" stroke="#3b82f6" stroke-width="3"/><text x="200" y="115" font-size="11" fill="#334155">obtuse</text></g><g><line x1="300" y1="100" x2="350" y2="100" stroke="#3b82f6" stroke-width="3"/><line x1="300" y1="100" x2="270" y2="100" stroke="#3b82f6" stroke-width="3"/><circle cx="300" cy="100" r="3" fill="#1e3a8a"/><text x="295" y="115" font-size="11" fill="#334155">straight</text></g></svg>',
      ],
      whyItWorks:
        "A straight angle is 180° because a half turn faces you the exact opposite way, and the two arms then lie in one straight line. Two equal halves of a straight angle are 90° each, which is why a right angle — a square corner — is exactly 90°.",
      strategies: ["Think in turns", "Use a benchmark (90° and 180°)"],
      thinkDeeper:
        "An acute angle and its reflex partner together make a full turn. If an angle is 70°, what is its reflex angle? (Hint: 360° − 70°.)",
    },
    {
      heading: "Polygons and the circle",
      discovery: {
        problem:
          "Five friends stand at the corners of a five-sided field and want ropes joining every friend to every *other* friend. The edges of the field already join neighbours. How many extra ropes (diagonals) cut across the inside of the field?",
        idea:
          "A polygon's diagonals join non-neighbouring corners. A pentagon has 5 diagonals. There is a tidy formula: a polygon with n sides has n(n − 3)/2 diagonals.",
      },
      body:
        "A **polygon** is a closed figure made only of straight line segments. The segments are its **sides**, the corners where two sides meet are its **vertices**, and a **diagonal** joins two vertices that are *not* next to each other.\n\nA triangle has 3 sides, a quadrilateral 4, a pentagon 5, a hexagon 6.\n\nA **circle** is the set of all points the same distance from a fixed centre. Its parts:\n- **Centre**: the fixed middle point.\n- **Radius**: a segment from the centre to the circle.\n- **Diameter**: a chord through the centre; it is twice the radius.\n- **Chord**: a segment joining two points on the circle.\n- **Circumference**: the distance all the way round the circle.\n- **Arc**: a part of the circumference.\n- **Sector**: a 'pizza slice' between two radii and an arc.",
      keyPoints: [
        "Polygon: closed figure of straight sides; vertices are the corners.",
        "Diagonal joins non-adjacent vertices; n sides give n(n − 3)/2 diagonals.",
        "Circle: all points a fixed distance (radius) from the centre.",
        "Diameter = 2 × radius; it is the longest chord and passes through the centre.",
      ],
      diagrams: [
        '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with its centre marked O, a radius, a diameter and a chord labelled"><circle cx="110" cy="100" r="80" fill="none" stroke="#3b82f6" stroke-width="3"/><circle cx="110" cy="100" r="3" fill="#1e3a8a"/><text x="115" y="98" font-size="12" fill="#334155">O</text><line x1="110" y1="100" x2="190" y2="100" stroke="#10b981" stroke-width="3"/><text x="140" y="94" font-size="11" fill="#047857">radius</text><line x1="30" y1="100" x2="190" y2="100" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/><text x="35" y="118" font-size="11" fill="#b45309">diameter</text><line x1="55" y1="42" x2="180" y2="155" stroke="#ef4444" stroke-width="3"/><text x="150" y="150" font-size="11" fill="#b91c1c">chord</text></svg>',
      ],
      whyItWorks:
        "Each vertex of an n-gon can be joined to every other vertex except itself and its two neighbours, so n − 3 diagonals leave each vertex. That counts every diagonal from both ends, so we divide by 2: n(n − 3)/2.",
      strategies: ["Find a pattern", "Count carefully and avoid double-counting"],
      thinkDeeper:
        "Why is the diameter the *longest* possible chord? (Hint: it is the only chord that passes through the centre.)",
    },
  ],
  learn: {
    flashcards: [
      { front: "How many endpoints does a ray have?", back: "One — it starts at a fixed point and goes on forever in one direction." },
      { front: "How do you name an angle with three letters?", back: "Put the vertex letter in the middle, e.g. ∠ABC has its vertex at B." },
      { front: "What is a right angle in degrees?", back: "90° — a square corner, exactly a quarter turn." },
      { front: "What is a straight angle?", back: "Exactly 180° — a half turn, lying along a straight line." },
      { front: "Acute vs obtuse angle?", back: "Acute is less than 90°; obtuse is between 90° and 180°." },
      { front: "Radius vs diameter?", back: "Radius goes from centre to circle; diameter goes right across through the centre and is twice the radius." },
      { front: "What is a diagonal of a polygon?", back: "A segment joining two vertices that are not next to each other." },
    ],
    formulae: [
      { name: "Right angle", rule: "90° = a quarter turn" },
      { name: "Straight angle", rule: "180° = two right angles = a half turn" },
      { name: "Complete angle", rule: "360° = a full turn" },
      { name: "Reflex angle", rule: "reflex = 360° − the smaller angle" },
      { name: "Diameter", rule: "diameter = 2 × radius" },
      { name: "Diagonals of a polygon", rule: "number of diagonals = n(n − 3)/2 for n sides" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "geo-mcq-q01",
        question: "Which figure has exactly two endpoints?",
        options: ["A line", "A ray", "A line segment", "A point"],
        answerIndex: 2,
        explanation: "A line segment has two endpoints and a fixed length. A ray has one endpoint; a line has none.",
        guideRef: "Point, line, line segment and ray",
        difficulty: "warmup",
      },
      {
        id: "geo-mcq-q02",
        question: "A ray AB starts at A. In which direction does it go on forever?",
        options: ["Both directions", "Past B only", "Past A only", "It does not go on forever"],
        answerIndex: 1,
        explanation: "Ray AB has its fixed endpoint at A and runs on forever in the direction of B (past B).",
        guideRef: "Point, line, line segment and ray",
        difficulty: "warmup",
      },
      {
        id: "geo-mcq-q03",
        question: "Two different straight lines can cross at most how many points?",
        options: ["0", "1", "2", "Infinitely many"],
        answerIndex: 1,
        explanation: "Two different straight lines meet at exactly one point if they intersect, or never if they are parallel — never at two points.",
        guideRef: "Intersecting lines, parallel lines and curves",
        difficulty: "warmup",
      },
      {
        id: "geo-mcq-q04",
        question: "Which of these is an example of parallel lines in real life?",
        options: ["The hands of a clock", "The two rails of a train track", "The blades of open scissors", "The spokes of a wheel"],
        answerIndex: 1,
        explanation: "Train rails stay the same distance apart and never meet — they are parallel. The others meet or share a point.",
        guideRef: "Intersecting lines, parallel lines and curves",
        difficulty: "warmup",
      },
      {
        id: "geo-mcq-q05",
        question: "The letter C is best described as a ...",
        options: ["closed curve", "open curve", "straight line", "polygon"],
        answerIndex: 1,
        explanation: "The letter C has two free ends that do not meet, so it is an open curve.",
        guideRef: "Intersecting lines, parallel lines and curves",
        difficulty: "warmup",
      },
      {
        id: "geo-mcq-q06",
        question: "In the angle ∠PQR, which point is the vertex?",
        options: ["P", "Q", "R", "There is no vertex"],
        answerIndex: 1,
        explanation: "When an angle is named with three letters, the middle letter is the vertex. So Q is the vertex of ∠PQR.",
        guideRef: "What an angle is: vertex, arms, interior and exterior",
        difficulty: "warmup",
      },
      {
        id: "geo-mcq-q07",
        question: "An angle measures 90°. What type of angle is it?",
        options: ["Acute", "Right", "Obtuse", "Reflex"],
        answerIndex: 1,
        explanation: "An angle of exactly 90° is a right angle — a square corner.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        hints: ["90° is a quarter of a full turn.", "It is the corner of a square or a page.", "Less than 90° is acute; exactly 90° is...?"],
        strategy: "Use a benchmark (90° and 180°)",
      },
      {
        id: "geo-mcq-q08",
        question: "An angle of 145° is best described as ...",
        options: ["acute", "right", "obtuse", "reflex"],
        answerIndex: 2,
        explanation: "145° is between 90° and 180°, so it is an obtuse angle.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        hints: ["Is it bigger or smaller than 90°?", "Is it bigger or smaller than 180°?", "Between 90° and 180° is obtuse."],
        strategy: "Use a benchmark (90° and 180°)",
      },
      {
        id: "geo-mcq-q09",
        question: "A straight angle is equal to how many degrees?",
        options: ["90°", "180°", "270°", "360°"],
        answerIndex: 1,
        explanation: "A straight angle is a half turn, which is 180° — two right angles together.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        hints: ["A full turn is 360°.", "A straight angle is half a full turn.", "Half of 360° is..."],
        strategy: "Think in turns",
      },
      {
        id: "geo-mcq-q10",
        question: "Which of these angle measures is a reflex angle?",
        options: ["60°", "90°", "180°", "250°"],
        answerIndex: 3,
        explanation: "A reflex angle is between 180° and 360°. Only 250° lies in that range.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        hints: ["Reflex angles are bigger than a straight angle.", "That means bigger than 180° but less than 360°.", "Which option is between 180° and 360°?"],
        strategy: "Use a benchmark (90° and 180°)",
      },
      {
        id: "geo-mcq-q11",
        question: "Two right angles are joined to make one angle. What is its size?",
        options: ["45°", "90°", "180°", "360°"],
        answerIndex: 2,
        explanation: "90° + 90° = 180°, which is a straight angle.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        hints: ["What is one right angle in degrees?", "Add two of them.", "90 + 90 = ?"],
        strategy: "Think in turns",
      },
      {
        id: "geo-mcq-q12",
        question: "Which instrument is used to measure an angle in degrees?",
        options: ["A ruler", "A compass", "A protractor", "A set square"],
        answerIndex: 2,
        explanation: "A protractor has a degree scale and is used to measure (and draw) angles.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "warmup",
      },
      {
        id: "geo-mcq-q13",
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answerIndex: 1,
        explanation: "A hexagon is a polygon with 6 sides (and 6 vertices).",
        guideRef: "Polygons and the circle",
        difficulty: "warmup",
      },
      {
        id: "geo-mcq-q14",
        question: "A chord that passes through the centre of a circle is called a ...",
        options: ["radius", "arc", "diameter", "sector"],
        answerIndex: 2,
        explanation: "A chord through the centre is a diameter — the longest chord, equal to twice the radius.",
        guideRef: "Polygons and the circle",
        difficulty: "core",
        hints: ["A radius goes only from centre to the edge.", "This chord goes right across, through the centre.", "It is twice the radius long."],
        strategy: "Name the parts",
      },
      {
        id: "geo-mcq-q15",
        question: "A circle has radius 7 cm. What is its diameter?",
        options: ["3.5 cm", "7 cm", "14 cm", "21 cm"],
        answerIndex: 2,
        explanation: "Diameter = 2 × radius = 2 × 7 = 14 cm.",
        guideRef: "Polygons and the circle",
        difficulty: "core",
        hints: ["Diameter is twice the radius.", "Multiply 7 by 2.", "2 × 7 = ?"],
        strategy: "Use the rule (diameter = 2 × radius)",
      },
      {
        id: "geo-mcq-q16",
        question: "How many diagonals does a quadrilateral (4 sides) have?",
        options: ["1", "2", "3", "4"],
        answerIndex: 1,
        explanation: "Using n(n − 3)/2 with n = 4: 4 × 1 / 2 = 2. A quadrilateral has exactly 2 diagonals.",
        guideRef: "Polygons and the circle",
        difficulty: "core",
        hints: ["A diagonal joins corners that are NOT next to each other.", "Try drawing a square and joining opposite corners.", "Formula: n(n − 3)/2 with n = 4."],
        strategy: "Draw a diagram",
      },
      {
        id: "geo-mcq-q17",
        question: "A 'pizza slice' region between two radii and the arc between them is called a ...",
        options: ["chord", "sector", "segment", "diameter"],
        answerIndex: 1,
        explanation: "The region bounded by two radii and the arc between them is a sector.",
        guideRef: "Polygons and the circle",
        difficulty: "core",
        hints: ["It is bounded by two radii.", "It looks like a slice of pizza.", "Its name starts with 'sec'."],
        strategy: "Name the parts",
      },
      {
        id: "geo-mcq-q18",
        question: "The reflex angle that goes with an angle of 110° measures ...",
        options: ["70°", "180°", "250°", "290°"],
        answerIndex: 2,
        explanation: "The angle and its reflex together make a full turn: 360° − 110° = 250°.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "challenge",
        hints: ["The angle and its reflex together make a complete turn.", "A complete turn is 360°.", "360° − 110° = ?"],
        strategy: "Work backwards",
      },
      {
        id: "geo-mcq-q19",
        question: "5 points lie on a line. Counting all line segments with endpoints among these points, how many segments are there?",
        options: ["5", "8", "10", "20"],
        answerIndex: 2,
        explanation: "Each segment is a pair of points. Number of pairs from 5 points = (5 × 4) / 2 = 10.",
        guideRef: "Point, line, line segment and ray",
        difficulty: "challenge",
        hints: ["A segment is fixed by choosing 2 of the points.", "Count the pairs without repeating.", "(5 × 4) / 2 = ?"],
        strategy: "Count carefully and avoid double-counting",
      },
      {
        id: "geo-mcq-q20",
        question: "A polygon has 9 diagonals. How many sides does it have?",
        options: ["5", "6", "7", "9"],
        answerIndex: 1,
        explanation: "Use n(n − 3)/2 = 9, so n(n − 3) = 18. Trying n = 6: 6 × 3 = 18. So it is a hexagon.",
        guideRef: "Polygons and the circle",
        difficulty: "challenge",
        hints: ["Use n(n − 3)/2 = 9.", "So n(n − 3) = 18.", "Which whole number n gives n × (n − 3) = 18?"],
        strategy: "Work backwards",
      },
    ],
    qa: [
      {
        id: "geo-qa-q01",
        question: "Explain the difference between a line, a ray and a line segment. Use the points A and B in your description.",
        modelAnswer:
          "A line segment AB is the straight path between A and B; it has two endpoints and a fixed length. A ray AB starts at the endpoint A and goes on forever past B in one direction, so it has one endpoint. A line through A and B has no endpoints and runs on forever in both directions.",
        markScheme: [
          "line segment has two endpoints / fixed length",
          "ray has one endpoint / endless one way",
          "line has no endpoints / endless both ways",
        ],
        commonError: "Saying a ray has two endpoints, or that a line has a measurable length.",
        guideRef: "Point, line, line segment and ray",
        difficulty: "core",
        hints: ["Count the endpoints of each.", "Which ones go on forever, and in how many directions?"],
        strategy: "Name the parts",
      },
      {
        id: "geo-qa-q02",
        question: "An angle measures 35°. State its type, and find its reflex angle. Show your working.",
        modelAnswer:
          "35° is less than 90°, so it is an acute angle. Its reflex angle is the rest of a full turn: 360° − 35° = 325°.",
        markScheme: [
          "acute",
          "360 − 35 | reflex = 360 minus the angle",
          "325",
        ],
        commonError: "Computing 180° − 35° = 145° instead of using the full turn 360°.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        numericAnswer: 325,
        hints: ["First compare 35° with 90°.", "A full turn is 360°.", "Reflex = 360° − the angle."],
        strategy: "Work backwards",
        solutions: [
          {
            label: "Step by step",
            steps: ["35° < 90°, so it is acute.", "Reflex = 360° − 35°.", "360 − 35 = 325°."],
          },
        ],
      },
      {
        id: "geo-qa-q03",
        question: "A circle has a diameter of 18 cm. What is its radius? Explain how you know.",
        modelAnswer:
          "The diameter is twice the radius, so the radius is half the diameter: 18 ÷ 2 = 9 cm.",
        markScheme: [
          "radius = half the diameter | diameter = 2 × radius",
          "18 ÷ 2",
          "9",
        ],
        commonError: "Doubling the diameter to get 36 cm instead of halving it.",
        guideRef: "Polygons and the circle",
        difficulty: "core",
        numericAnswer: 9,
        hints: ["How is the diameter related to the radius?", "Diameter = 2 × radius.", "So radius = 18 ÷ 2."],
        strategy: "Work backwards",
      },
      {
        id: "geo-qa-q04",
        question: "Describe how to measure an angle ∠ABC with a protractor, in clear steps.",
        modelAnswer:
          "Place the centre point of the protractor exactly on the vertex B. Line up the protractor's zero line along one arm, say BA. Look at where the other arm BC crosses the scale, reading from the scale that starts at 0° on arm BA. That number of degrees is the size of ∠ABC.",
        markScheme: [
          "centre of protractor on the vertex",
          "zero line along one arm",
          "read where the other arm crosses / use the scale that starts at 0",
        ],
        commonError: "Reading the wrong scale (the one not starting at 0° on the chosen arm), giving e.g. 120° instead of 60°.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        hints: ["Where does the centre of the protractor go?", "Which arm lines up with 0°?", "Which scale should you read from?"],
        strategy: "Use the right tool carefully",
      },
      {
        id: "geo-qa-q05",
        question: "A clock shows 3 o'clock. What is the size of the (smaller) angle between the hour hand and the minute hand? Explain.",
        modelAnswer:
          "At 3 o'clock the minute hand points to 12 and the hour hand points to 3. The clock face is a full turn of 360° split into 12 equal hour-gaps, so each gap is 360° ÷ 12 = 30°. From 12 to 3 is 3 gaps: 3 × 30° = 90°. The angle is 90°, a right angle.",
        markScheme: [
          "each hour gap = 360 ÷ 12 = 30°",
          "3 o'clock is 3 gaps apart",
          "3 × 30 = 90 | right angle",
        ],
        commonError: "Thinking the angle is 3° or guessing without splitting the 360° face into 12 equal parts.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        numericAnswer: 90,
        hints: ["The whole clock face is 360°.", "It is split into 12 equal hour gaps.", "How many gaps from 12 to 3, and what is each gap worth?"],
        strategy: "Think in turns",
        solutions: [
          {
            label: "Equal gaps",
            steps: ["360° ÷ 12 = 30° per hour gap.", "12 to 3 is 3 gaps.", "3 × 30° = 90°."],
          },
          {
            label: "Quarter turn",
            steps: ["From 12 to 3 is a quarter of the way round.", "A quarter turn is 360° ÷ 4 = 90°."],
          },
        ],
      },
      {
        id: "geo-qa-q06",
        question: "Draw (describe in words) and explain why two different straight lines cannot meet at two separate points.",
        modelAnswer:
          "Through any two points there is exactly one straight line. If two lines both passed through two separate points, then there would be two different straight lines through the same pair of points — which is impossible. So two different lines can meet at most once.",
        markScheme: [
          "two points fix exactly one line",
          "two lines through both points would mean two lines through the same pair",
          "so they meet at most once / contradiction",
        ],
        commonError: "Claiming lines can curve to meet twice — but straight lines cannot bend.",
        guideRef: "Intersecting lines, parallel lines and curves",
        difficulty: "challenge",
        hints: ["How many straight lines pass through two given points?", "Suppose two lines met at points X and Y.", "What does that say about lines through X and Y?"],
        strategy: "Look for invariants",
      },
      {
        id: "geo-qa-q07",
        question: "Challenge: 6 points are placed on a circle and every point is joined to every other point with a chord. How many chords are drawn altogether?",
        modelAnswer:
          "Each chord is decided by choosing 2 of the 6 points. The number of pairs is (6 × 5) / 2 = 15. So 15 chords are drawn.",
        markScheme: [
          "a chord = a pair of points",
          "(6 × 5) / 2 | count pairs",
          "15",
        ],
        commonError: "Getting 30 by forgetting that chord AB is the same as chord BA (double counting).",
        guideRef: "Polygons and the circle",
        difficulty: "challenge",
        numericAnswer: 15,
        hints: ["A chord is fixed once you pick its 2 endpoints.", "From 6 points, each can join 5 others.", "6 × 5 counts each chord twice, so divide by 2."],
        strategy: "Count carefully and avoid double-counting",
        solutions: [
          {
            label: "Counting pairs",
            steps: ["Each point joins the other 5: 6 × 5 = 30 ends.", "Each chord has 2 ends, counted twice.", "30 ÷ 2 = 15 chords."],
          },
          {
            label: "Build up",
            steps: ["1st point makes 5 new chords, 2nd makes 4, then 3, 2, 1.", "5 + 4 + 3 + 2 + 1 = 15."],
          },
        ],
      },
      {
        id: "geo-qa-q08",
        question: "Challenge: A regular polygon has 20 diagonals. How many sides does it have? Show your reasoning.",
        modelAnswer:
          "The number of diagonals of an n-sided polygon is n(n − 3)/2. Set n(n − 3)/2 = 20, so n(n − 3) = 40. Test whole numbers: n = 8 gives 8 × 5 = 40. So the polygon has 8 sides (an octagon).",
        markScheme: [
          "use n(n − 3)/2 = 20",
          "n(n − 3) = 40",
          "n = 8 | octagon",
        ],
        commonError: "Forgetting the divide-by-2 and solving n(n − 3) = 20 instead.",
        guideRef: "Polygons and the circle",
        difficulty: "challenge",
        numericAnswer: 8,
        hints: ["Start from the diagonals formula n(n − 3)/2.", "Set it equal to 20 and clear the 2.", "Find n with n(n − 3) = 40 by testing values."],
        strategy: "Work backwards",
        solutions: [
          {
            label: "Solve the equation",
            steps: ["n(n − 3)/2 = 20.", "n(n − 3) = 40.", "8 × 5 = 40, so n = 8 (octagon)."],
          },
        ],
      },
      {
        id: "geo-qa-q09",
        question: "Two angles sit side by side on a straight line. One of them is 65°. What is the other? Explain.",
        modelAnswer:
          "Angles on a straight line add up to a straight angle, 180°. So the other angle is 180° − 65° = 115°.",
        markScheme: [
          "angles on a straight line add to 180°",
          "180 − 65",
          "115",
        ],
        commonError: "Using 90° (a right angle) or 360° instead of the straight angle 180°.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "core",
        numericAnswer: 115,
        hints: ["Together they make a straight angle.", "A straight angle is 180°.", "180° − 65° = ?"],
        strategy: "Think in turns",
      },
      {
        id: "geo-qa-q10",
        question: "Challenge: Three rays come out of a single point, making three angles around that point. Two of the angles are 150° and 130°. What is the third angle?",
        modelAnswer:
          "The angles all the way around a point add up to a complete turn, 360°. The first two are 150° + 130° = 280°. So the third angle is 360° − 280° = 80°.",
        markScheme: [
          "angles round a point add to 360°",
          "150 + 130 = 280",
          "360 − 280 = 80",
        ],
        commonError: "Using 180° (a straight angle) instead of 360° for the angles round a full point.",
        guideRef: "Measuring angles and the degree; types of angles",
        difficulty: "challenge",
        numericAnswer: 80,
        hints: ["What do all the angles round a point add up to?", "A complete turn is 360°.", "Subtract the two known angles from 360°."],
        strategy: "Work backwards",
        solutions: [
          {
            label: "Angles round a point",
            steps: ["Total round a point = 360°.", "150° + 130° = 280°.", "360° − 280° = 80°."],
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
geometry.questionBank.mcqPapers = [
  { id: "geo-mcq-paper-1", title: "Lines & Angles — MCQ Set A", questions: geometry.quiz.mcq.slice(0, 10) },
  { id: "geo-mcq-paper-2", title: "Lines & Angles — MCQ Set B", questions: geometry.quiz.mcq.slice(10) },
];
geometry.questionBank.qaPapers = [
  { id: "geo-qa-paper-1", title: "Lines & Angles — Written Practice A", questions: geometry.quiz.qa.slice(0, 5) },
  { id: "geo-qa-paper-2", title: "Lines & Angles — Written Practice B", questions: geometry.quiz.qa.slice(5) },
];

export default geometry;
