import {
  SortingStepGenerator,
  BubbleSortGenerator,
  InsertionSortGenerator,
  SelectionSortGenerator,
  MergeSortGenerator,
} from "./sortingGenerators";

const sortingStepGeneratorsTable: SortingStepGenerator[] = [
  new BubbleSortGenerator(),
  new InsertionSortGenerator(),
  new SelectionSortGenerator(),
  new MergeSortGenerator(),
];

export default sortingStepGeneratorsTable;
