import { STEP_WAITING_TIME_IN_MILLISECONDS } from "../../clientVariables";

const selectionSort = async (
  numbers: number[],
  showSortingSteps: boolean,
  displayMessage: (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[]
  ) => void
): Promise<void> => {
  for (let i: number = 0; i < numbers.length; i++) {
    let minIndex: number = i;

    displayMessage(`Let's assume ${numbers[i]} is the minimum.`, [i], []);
    if (showSortingSteps)
      await new Promise((resolve) =>
        setTimeout(resolve, STEP_WAITING_TIME_IN_MILLISECONDS)
      );

    for (let j: number = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        displayMessage(
          `${numbers[j]} is less than the minimum ${numbers[minIndex]} -> Update the minimum.`,
          [minIndex],
          [j]
        );
        minIndex = j;
      } else {
        displayMessage(
          `${numbers[j]} is greater than the minimum ${numbers[minIndex]} -> No need to update the minimum.`,
          [minIndex],
          [j]
        );
      }
      if (showSortingSteps)
        await new Promise((resolve) =>
          setTimeout(resolve, STEP_WAITING_TIME_IN_MILLISECONDS)
        );
    }

    displayMessage(
      `Swap the minimum ${numbers[minIndex]} with ${numbers[i]}.`,
      [i],
      [minIndex]
    );
    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];

    if (showSortingSteps)
      await new Promise((resolve) =>
        setTimeout(resolve, STEP_WAITING_TIME_IN_MILLISECONDS)
      );
  }
};

export default selectionSort;
