import {
  generateBubbleSortSteps,
  generateInsertionSortSteps,
  generateSelectionSortSteps,
  generateMergeSortSteps,
} from "./index";
import type { SortingStepGenerator } from "../types";

const sortingStepGeneratorsTable: SortingStepGenerator[] = [
  {
    displayName: "Bubble Sort",
    name: generateBubbleSortSteps.name,
    method: generateBubbleSortSteps,
    path: "/algorithms/bubble",
  },
  {
    displayName: "Insertion Sort",
    name: generateInsertionSortSteps.name,
    method: generateInsertionSortSteps,
    path: "/algorithms/insertion",
  },
  {
    displayName: "Selection Sort",
    name: generateSelectionSortSteps.name,
    method: generateSelectionSortSteps,
    path: "/algorithms/selection",
  },
  {
    displayName: "Merge Sort",
    name: generateMergeSortSteps.name,
    method: generateMergeSortSteps,
    path: "/algorithms/merge",
  },
];

export default sortingStepGeneratorsTable;
