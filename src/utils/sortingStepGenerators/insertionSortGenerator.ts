import type { SortStep } from "../../types";

const generateInsertionSortSteps = (numbers: number[]): SortStep[] => {
  const steps: SortStep[] = [
    {
      message: "Start sorting",
      newArray: [...numbers],
      leftActiveIndices: [],
      rightActiveIndices: [],
      highlightIds: ["start"],
    },
    {
      message: "Let's consider the first element as sorted.",
      newArray: [...numbers],
      leftActiveIndices: [0],
      rightActiveIndices: [0],
      highlightIds: [],
    },
  ];

  for (let i: number = 1; i < numbers.length; i++) {
    const element: number = numbers[i];
    let j: number = i - 1;
    steps.push({
      message: `Let's take ${element} at position ${i}.`,
      newArray: [...numbers],
      leftActiveIndices: [i],
      rightActiveIndices: [i],
      highlightIds: ["elementToInsert"],
    });

    while (j >= 0 && element < numbers[j]) {
      steps.push({
        message: `${element} < ${numbers[j]} -> shift ${numbers[j]} one unit to the right.`,
        newArray: [...numbers],
        leftActiveIndices: [i],
        rightActiveIndices: [j],
        highlightIds: ["compare", "shift"],
      });

      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = element;
    steps.push({
      message: `Insert ${element} at the position with index ${j + 1}.`,
      newArray: [...numbers],
      leftActiveIndices: [j + 1],
      rightActiveIndices: [],
      highlightIds: ["insert"],
    });
  }

  steps.push({
    message: "Sorting's completed!",
    newArray: [...numbers],
    leftActiveIndices: [],
    rightActiveIndices: [],
    highlightIds: [],
  });

  return steps;
};

export default generateInsertionSortSteps;
