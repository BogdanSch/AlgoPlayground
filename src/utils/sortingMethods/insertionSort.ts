import { STEP_WAITING_TIME_IN_MILLISECONDS } from "../../clientVariables";

const insertionSort = async (
  numbers: number[],
  showSortingSteps: boolean,
  displayMessage: (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[]
  ) => void
): Promise<void> => {
  if (showSortingSteps)
    displayMessage("Let's consider the first element as sorted.", [0], [0]);

  for (let i: number = 1; i < numbers.length; i++) {
    const element: number = numbers[i];
    let j: number = i - 1;

    while (j >= 0 && element < numbers[j]) {
      displayMessage(
        `${element} is less than ${numbers[j]} -> shift ${numbers[j]} one unit to the right.`,
        [i],
        [j]
      );
      if (showSortingSteps)
        await new Promise((resolve) =>
          setTimeout(resolve, STEP_WAITING_TIME_IN_MILLISECONDS)
        );

      numbers[j + 1] = numbers[j];
      j--;
    }
    displayMessage(
      `Insert ${element} at the position with index ${j + 1}.`,
      [j + 1],
      []
    );
    if (showSortingSteps)
      await new Promise((resolve) =>
        setTimeout(resolve, STEP_WAITING_TIME_IN_MILLISECONDS)
      );
    numbers[j + 1] = element;
  }
};

export default insertionSort;
