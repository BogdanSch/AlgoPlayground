export type SortingMethod = {
  displayName: string;
  name: string;
  method: (numbers: number[]) => void;
};