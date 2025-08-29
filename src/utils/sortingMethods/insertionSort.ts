const insertionSort = (numbers: number[]): void => {
  for (let i: number = 1; i < numbers.length; i++) {
    const element: number = numbers[i];
    let j: number = i - 1;

    while (j >= 0 && element < numbers[j]) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = element;
  }
};

export default insertionSort;
