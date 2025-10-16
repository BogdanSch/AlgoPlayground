import { STEP_WAITING_TIME_IN_MILLISECONDS } from "../../clientVariables";

const bubbleSort = async (
  numbers: number[],
  showSortingSteps: boolean,
  displayMessage: (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[]
  ) => void
): Promise<void> => {
  let swapped: boolean;

  for (let i: number = 0; i < numbers.length - 1; i++) {
    swapped = false;

    for (let j: number = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        displayMessage(
          `${numbers[j]} is greater than ${numbers[j + 1]} -> we need a swap.`,
          [j],
          [j + 1]
        );
        swapped = true;
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      } else {
        displayMessage(
          `${numbers[j]} is smaller than ${numbers[j + 1]} -> no need in swap.`,
          [j],
          [j + 1]
        );
      }
      if (showSortingSteps)
        await new Promise((resolve) =>
          setTimeout(resolve, STEP_WAITING_TIME_IN_MILLISECONDS)
        );
    }

    if (!swapped) {
      displayMessage("No items were swapped, exit the loop.", [], []);
      if (showSortingSteps)
        await new Promise((resolve) =>
          setTimeout(resolve, STEP_WAITING_TIME_IN_MILLISECONDS)
        );
      break;
    }
  }
};

export default bubbleSort;
