const bubbleSort = (numbers: number[]): void => {
  let swapped: boolean;

  for (let i: number = 0; i < numbers.length - 1; i++) {
    swapped = false;

    for (let j: number = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        swapped = true;
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }

    if (!swapped) break;
  }
};

export default bubbleSort;
