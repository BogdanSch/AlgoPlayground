import type { SortStep } from "../../types";
import { range } from "../numbersGenerators";

const generateMergeSortSteps = (numbers: number[]) => {
  const steps: SortStep[] = [
    {
      message: "Start sorting",
      newArray: [...numbers],
      leftActiveIndices: [],
      rightActiveIndices: [],
    },
  ];
  mergeSort(numbers, steps);
  return steps;
};

const mergeSort = (numbers: number[], steps: SortStep[]): void => {
  if (numbers.length <= 1) {
    steps.push({
      newArray: [...numbers],
      message: `The length of the array is ${numbers.length} -> No need to sort (back track).`,
      leftActiveIndices: [],
      rightActiveIndices: [],
    });
    return;
  }

  steps.push({
    newArray: [...numbers],
    message: `Let's split the array into two halves.`,
    leftActiveIndices: [],
    rightActiveIndices: [],
  });
  const middleIndex: number = Math.floor(numbers.length / 2);
  steps.push({
    newArray: [...numbers],
    message: `The middle index is ${middleIndex}.`,
    leftActiveIndices: [middleIndex],
    rightActiveIndices: [middleIndex],
  });

  const leftHalf: number[] = numbers.slice(0, middleIndex);
  const rightHalf: number[] = numbers.slice(middleIndex);

  steps.push({
    newArray: [...leftHalf],
    message: `The left half of the original array.`,
    leftActiveIndices: range(0, leftHalf.length),
    rightActiveIndices: [],
  });
  steps.push({
    newArray: [...rightHalf],
    message: `The right half of the original array.`,
    leftActiveIndices: range(0, rightHalf.length),
    rightActiveIndices: [],
  });

  mergeSort(leftHalf, steps);
  mergeSort(rightHalf, steps);

  merge(leftHalf, rightHalf, numbers, steps);
  steps.push({
    newArray: [...numbers],
    message: `Merging the two halves back together.`,
    leftActiveIndices: range(0, numbers.length),
    rightActiveIndices: [],
  });
};

const merge = (
  leftHalf: number[],
  rightHalf: number[],
  numbers: number[],
  steps: SortStep[]
): void => {
  let i: number = 0,
    j: number = 0,
    currentIndex: number = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    const step: SortStep = {
      newArray: [...numbers],
      message: "",
      leftActiveIndices: [j],
      rightActiveIndices: [i],
    };

    if (leftHalf[i] > rightHalf[j]) {
      step.message = `${rightHalf[j]} is less than ${leftHalf[i]} -> paste ${rightHalf[j]} into the main array.`;
      numbers[currentIndex++] = rightHalf[j++];
    } else {
      step.message = `${rightHalf[j]} is greater than ${leftHalf[i]} -> paste ${leftHalf[i]} into the main array.`;
      numbers[currentIndex++] = leftHalf[i++];
    }
    steps.push(step);
  }

  steps.push({
    newArray: [...numbers],
    message: `We know that one of the halves is empty -> paste the remaining elements into the main array.`,
    leftActiveIndices: [],
    rightActiveIndices: [],
  });

  while (i < leftHalf.length) {
    steps.push({
      newArray: [...numbers],
      message: `Pasting ${leftHalf[i]} into the main array.`,
      leftActiveIndices: [currentIndex],
      rightActiveIndices: [],
    });
    numbers[currentIndex++] = leftHalf[i++];
  }

  while (j < rightHalf.length) {
    steps.push({
      newArray: [...numbers],
      message: `Pasting ${rightHalf[j]} into the main array.`,
      leftActiveIndices: [currentIndex],
      rightActiveIndices: [],
    });
    numbers[currentIndex++] = rightHalf[j++];
  }
};

export default generateMergeSortSteps;
