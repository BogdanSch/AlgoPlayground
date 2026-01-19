export interface SortStep {
  message: string;
  newArray: number[];
  highlightIds: string[];
  leftActiveIndices: number[];
  rightActiveIndices: number[];
}

export interface DivideAndConquerSortStep extends SortStep {
  newLeftArrayHalf: number[];
  newRightArrayHalf: number[];
  leftArrayActiveIndices: number[];
  rightArrayActiveIndices: number[];
}

export type SortingStepGenerator = {
  displayName: string;
  name: string;
  path: string;
  method: (numbers: number[]) => SortStep[];
};

export interface ISortTemplateProps {
  className?: string;
  highlightIds: string[];
}
