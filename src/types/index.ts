export type SortingMethod = {
  displayName: string;
  name: string;
  method: (
    numbers: number[],
    showSortingSteps: boolean,
    displayMessage: (
      message: string,
      leftActiveIndices: number[],
      rightActiveIndices: number[]
    ) => void
  ) => Promise<void>;
};
