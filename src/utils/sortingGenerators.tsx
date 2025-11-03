import {
  generateBubbleSortSteps,
  generateInsertionSortSteps,
  generateSelectionSortSteps,
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
  // { displayName: "Merge Sort", name: mergeSort.name, method: mergeSort },
];

export default sortingStepGeneratorsTable;
