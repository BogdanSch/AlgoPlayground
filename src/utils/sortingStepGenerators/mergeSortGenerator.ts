import type { DivideAndConquerSortStep } from "../../types";
import { range } from "../numbersGenerators";

const generateMergeSortSteps = (numbers: number[]) => {
  const steps: DivideAndConquerSortStep[] = [
    {
      message: "Start sorting",
      newArray: [...numbers],
      leftActiveIndices: [],
      rightActiveIndices: [],
      newLeftArrayHalf: [],
      newRightArrayHalf: [],
      leftArrayActiveIndices: [],
      rightArrayActiveIndices: [],
      highlightIds: ["start"],
    },
  ];
  mergeSort(numbers, steps);
  return steps;
};

const mergeSort = (
  numbers: number[],
  steps: DivideAndConquerSortStep[]
): void => {
  if (numbers.length <= 1) {
    steps.push({
      newArray: [...numbers],
      message: `The length of the array is 1 -> We can't split it anymore. Let's prepare to merge the halves.`,
      leftActiveIndices: [],
      rightActiveIndices: [],
      newLeftArrayHalf: [],
      newRightArrayHalf: [],
      leftArrayActiveIndices: [],
      rightArrayActiveIndices: [],
      highlightIds: ["baseCase"],
    });
    return;
  }

  const middleIndex: number = Math.floor(numbers.length / 2);
  const leftHalf: number[] = numbers.slice(0, middleIndex);
  const rightHalf: number[] = numbers.slice(middleIndex);

  steps.push({
    newArray: [...numbers],
    message: `Let's split the array into two halves. The middle index is ${middleIndex}.`,
    leftActiveIndices: range(0, middleIndex),
    rightActiveIndices: range(middleIndex, numbers.length),
    newLeftArrayHalf: [...leftHalf],
    newRightArrayHalf: [...rightHalf],
    leftArrayActiveIndices: range(0, leftHalf.length),
    rightArrayActiveIndices: range(0, rightHalf.length),
    highlightIds: ["splittingHalves"],
  });

  mergeSort(leftHalf, steps);
  mergeSort(rightHalf, steps);

  steps.push({
    newArray: [...numbers],
    message: `Let's merge the two halves back together.`,
    leftActiveIndices: range(0, middleIndex),
    rightActiveIndices: range(middleIndex, numbers.length),
    newLeftArrayHalf: [...leftHalf],
    newRightArrayHalf: [...rightHalf],
    leftArrayActiveIndices: range(0, leftHalf.length),
    rightArrayActiveIndices: range(0, rightHalf.length),
    highlightIds: ["mergeCall"],
  });
  merge(leftHalf, rightHalf, numbers, steps);
};

const merge = (
  leftHalf: number[],
  rightHalf: number[],
  numbers: number[],
  steps: DivideAndConquerSortStep[]
): void => {
  let i: number = 0,
    j: number = 0,
    currentIndex: number = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    const step: DivideAndConquerSortStep = {
      newArray: [...numbers],
      message: "",
      leftActiveIndices: [currentIndex],
      rightActiveIndices: [],
      newLeftArrayHalf: [...leftHalf],
      newRightArrayHalf: [...rightHalf],
      leftArrayActiveIndices: [i],
      rightArrayActiveIndices: [j],
      highlightIds: [],
    };

    if (leftHalf[i] > rightHalf[j]) {
      step.message = `${rightHalf[j]} is less than or equal ${leftHalf[i]} -> paste ${rightHalf[j]} into the main array.`;
      step.highlightIds.push(`takeRight`);
      numbers[currentIndex++] = rightHalf[j++];
    } else {
      step.message = `${rightHalf[j]} is greater than ${leftHalf[i]} -> paste ${leftHalf[i]} into the main array.`;
      step.highlightIds.push(`takeLeft`);
      numbers[currentIndex++] = leftHalf[i++];
    }
    steps.push(step);
  }

  steps.push({
    newArray: [...numbers],
    message: `We know that one of the halves is empty -> let's paste the remaining elements into the main array.`,
    leftActiveIndices: [currentIndex],
    rightActiveIndices: [],
    newLeftArrayHalf: [...leftHalf],
    newRightArrayHalf: [...rightHalf],
    leftArrayActiveIndices: range(i, leftHalf.length),
    rightArrayActiveIndices: range(j, rightHalf.length),
    highlightIds: [],
  });
  while (i < leftHalf.length) {
    steps.push({
      newArray: [...numbers],
      message: `Pasting ${leftHalf[i]} into the main array.`,
      leftActiveIndices: [currentIndex],
      rightActiveIndices: [],
      newLeftArrayHalf: [...leftHalf],
      newRightArrayHalf: [...rightHalf],
      leftArrayActiveIndices: [i],
      rightArrayActiveIndices: [],
      highlightIds: ["pasteRemainingLeft"],
    });
    numbers[currentIndex++] = leftHalf[i++];
  }
  while (j < rightHalf.length) {
    steps.push({
      newArray: [...numbers],
      message: `Pasting ${rightHalf[j]} into the main array.`,
      leftActiveIndices: [currentIndex],
      rightActiveIndices: [],
      newLeftArrayHalf: [...leftHalf],
      newRightArrayHalf: [...rightHalf],
      leftArrayActiveIndices: [],
      rightArrayActiveIndices: [j],
      highlightIds: ["pasteRemainingRight"],
    });
    numbers[currentIndex++] = rightHalf[j++];
  }

  steps.push({
    newArray: [...numbers],
    message: "Finished merging both halves.",
    leftActiveIndices: range(0, numbers.length),
    rightActiveIndices: [],
    newLeftArrayHalf: [...leftHalf],
    newRightArrayHalf: [...rightHalf],
    leftArrayActiveIndices: [leftHalf.length],
    rightArrayActiveIndices: [rightHalf.length],
    highlightIds: ["mergeCompleted"],
  });
};

export default generateMergeSortSteps;
