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
  },
  {
    displayName: "Insertion Sort",
    name: generateInsertionSortSteps.name,
    method: generateInsertionSortSteps,
  },
  {
    displayName: "Selection Sort",
    name: generateSelectionSortSteps.name,
    method: generateSelectionSortSteps,
  },
  {
    displayName: "Merge Sort",
    name: generateMergeSortSteps.name,
    method: generateMergeSortSteps,
  },
];

export default sortingStepGeneratorsTable;
