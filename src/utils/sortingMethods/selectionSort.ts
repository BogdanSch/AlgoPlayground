const selectionSort = (numbers: number[]): void => {
  for (let i: number = 0; i < numbers.length; i++) {
    let minIndex: number = i;

    for (let j: number = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) minIndex = j;
    }

    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
  }
};

export default selectionSort;
