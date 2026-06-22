import type { TopicExtras } from "../types";

import patterns from "./patterns";
import knowingNumbers from "./knowing-numbers";
import wholeNumbers from "./whole-numbers";
import playingWithNumbers from "./playing-with-numbers";
import integers from "./integers";
import fractions from "./fractions";
import decimals from "./decimals";
import algebra from "./algebra";
import ratioProportion from "./ratio-proportion";
import geometryBasics from "./geometry-basics";
import shapes from "./shapes";
import perimeterArea from "./perimeter-area";
import dataHandling from "./data-handling";
import symmetry from "./symmetry";

// Engagement extras keyed by topic id. Authored separately so edits here can
// never touch the audited answer keys in lib/topics.
export const EXTRAS: Record<string, TopicExtras> = {
  patterns,
  "knowing-numbers": knowingNumbers,
  "whole-numbers": wholeNumbers,
  "playing-with-numbers": playingWithNumbers,
  integers,
  fractions,
  decimals,
  algebra,
  "ratio-proportion": ratioProportion,
  "geometry-basics": geometryBasics,
  shapes,
  "perimeter-area": perimeterArea,
  "data-handling": dataHandling,
  symmetry,
};

export function getExtras(topicId: string): TopicExtras | undefined {
  return EXTRAS[topicId];
}
