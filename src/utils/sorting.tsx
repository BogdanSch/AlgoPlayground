import { bubbleSort, insertionSort, mergeSort, selectionSort } from "./index";
import type { SortingMethod } from "../types";

const sortingMethodsTable: SortingMethod[] = [
  { displayName: "Bubble Sort", name: bubbleSort.name, method: bubbleSort },
  {
    displayName: "Insertion Sort",
    name: insertionSort.name,
    method: insertionSort,
  },
  {
    displayName: "Selection Sort",
    name: selectionSort.name,
    method: selectionSort,
  },
  // { displayName: "Merge Sort", name: mergeSort.name, method: mergeSort },
];

export default sortingMethodsTable;
