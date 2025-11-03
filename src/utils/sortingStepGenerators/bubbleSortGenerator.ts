import type { SortStep } from "../../types";

const generateBubbleSortSteps = (numbers: number[]): SortStep[] => {
  const steps: SortStep[] = [];
  let swapped: boolean = false;

  for (let i: number = 0; i < numbers.length - 1; i++) {
    swapped = false;

    for (let j: number = 0; j < numbers.length - i - 1; j++) {
      const step: SortStep = {
        message: "",
        newArray: [...numbers],
        leftActiveIndices: [j],
        rightActiveIndices: [j + 1],
      };

      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        swapped = true;
        step.message = `${numbers[j + 1]} > ${numbers[j]}, swapping...`;
      } else {
        step.message = `${numbers[j]} <= ${numbers[j + 1]}, no swap.`;
      }

      // step.newArray = [...numbers];
      steps.push(step);
    }

    if (!swapped) break;
  }

  return steps;
};

export default generateBubbleSortSteps;
