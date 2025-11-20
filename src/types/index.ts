export type SortStep = {
  message: string;
  newArray: number[];
  highlightIds: string[];
  leftActiveIndices: number[];
  rightActiveIndices: number[];
};

export type SortingStepGenerator = {
  displayName: string;
  name: string;
  method: (numbers: number[]) => SortStep[];
};
