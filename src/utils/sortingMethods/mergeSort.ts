const mergeSort = (
  numbers: number[],
  showSortingSteps: boolean,
  displayMessage: (message: string) => void
): void => {
  if (numbers.length <= 1) {
    displayMessage(
      `The length of the array is ${numbers.length} -> No need to sort (back track).`
    );
    return;
  }

  displayMessage(`Let's split the array into two halves.`);
  const middleIndex: number = Math.floor(numbers.length / 2);
  displayMessage(`The middle index is ${middleIndex}.`);

  const leftHalf: number[] = numbers.slice(0, middleIndex);
  const rightHalf: number[] = numbers.slice(middleIndex);

  displayMessage(`The left half: [${leftHalf}].`);
  displayMessage(`The right half: [${rightHalf}].`);

  mergeSort(leftHalf, showSortingSteps, displayMessage);
  mergeSort(rightHalf, showSortingSteps, displayMessage);

  merge(leftHalf, rightHalf, numbers, showSortingSteps, displayMessage);
  displayMessage(`Merging the two halves back together.`);
};

const merge = (
  leftHalf: number[],
  rightHalf: number[],
  numbers: number[],
  showSortingSteps: boolean,
  displayMessage: (message: string) => void
): void => {
  let i: number = 0,
    j: number = 0,
    currentIndex: number = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] > rightHalf[j]) {
      displayMessage(
        `${rightHalf[j]} is less than ${leftHalf[i]} -> paste ${rightHalf[j]} into the main array.`
      );
      numbers[currentIndex++] = rightHalf[j++];
    } else {
      displayMessage(
        `${rightHalf[j]} is greater than ${leftHalf[i]} -> paste ${leftHalf[i]} into the main array.`
      );
      numbers[currentIndex++] = leftHalf[i++];
    }
  }

  displayMessage(
    `We know that one of the halves is empty -> paste the remaining elements into the main array.`
  );

  while (i < leftHalf.length) {
    displayMessage(`Pasting ${leftHalf[i]} into the main array.`);
    numbers[currentIndex++] = leftHalf[i++];
  }

  while (j < rightHalf.length) {
    displayMessage(`Pasting ${rightHalf[j]} into the main array.`);
    numbers[currentIndex++] = rightHalf[j++];
  }
};

export default mergeSort;
