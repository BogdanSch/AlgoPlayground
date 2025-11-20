import type { SortStep } from "../../types";

const generateSelectionSortSteps = (numbers: number[]): SortStep[] => {
  const steps: SortStep[] = [
    {
      message: "Start sorting",
      newArray: [...numbers],
      leftActiveIndices: [],
      rightActiveIndices: [],
    },
  ];

  for (let i: number = 0; i < numbers.length; i++) {
    let minIndex: number = i;

    steps.push({
      message: `Let's assume ${numbers[i]} is the minimum.`,
      newArray: [...numbers],
      leftActiveIndices: [i],
      rightActiveIndices: [],
    });

    for (let j: number = i + 1; j < numbers.length; j++) {
      const step: SortStep = {
        message: "",
        newArray: [...numbers],
        leftActiveIndices: [minIndex],
        rightActiveIndices: [j],
      };

      if (numbers[j] < numbers[minIndex]) {
        step.message = `${numbers[j]} < the minimum ${numbers[minIndex]} -> Update the minimum.`;
        minIndex = j;
      } else {
        step.message = `${numbers[j]} is >= the minimum ${numbers[minIndex]} -> No need to update the minimum.`;
      }

      steps.push(step);
    }

    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
    steps.push({
      message: `Swap the minimum ${numbers[minIndex]} with ${numbers[i]}.`,
      newArray: [...numbers],
      leftActiveIndices: [i],
      rightActiveIndices: [minIndex],
    });
  }

  return steps;
};

export default generateSelectionSortSteps;
