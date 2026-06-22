import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  hook: "Your school ruler hides a secret: every centimetre is 0.01 of a metre, so the tiny mm marks are really thousandths. A ruler is a decimal number line you can hold!",
  didYouKnow: [
    "The dot we use as a decimal point is not universal — many countries write 3,45 with a comma instead of 3.45.",
    "100 paise make ₹1, which is exactly why prices like ₹49.99 use two decimal places.",
    "Some fractions like 1/3 become 0.3333… and never stop, while 1/4 stops neatly at 0.25 — it all depends on whether the denominator fits into powers of 10.",
  ],
  experiments: [
    {
      title: "Shade a hundredths grid",
      materials: ["A 10×10 grid drawn on paper", "Coloured pencils"],
      steps: [
        "Shade 7 whole columns and call it 0.7.",
        "Now count the small squares you shaded — you should get 70.",
        "Write it as 70/100 and as 0.70.",
      ],
      whatHappens: "You see with your own eyes that 0.7 and 0.70 cover the exact same area, so they are equal.",
    },
    {
      title: "Rupee–paise market",
      materials: ["Some coins or paper price tags", "A notebook"],
      steps: [
        "Tag three 'items' with prices like ₹12.50, ₹8.75 and ₹5.30.",
        "Add any two by lining up the decimal points.",
        "Pretend to pay with a ₹50 note and work out the change.",
      ],
      whatHappens: "Money makes the 'line up the points' rule obvious — rupees go with rupees, paise with paise.",
    },
  ],
  interactive: "number-line",
};

export default extras;
