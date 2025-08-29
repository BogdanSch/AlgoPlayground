const mergeSort = (numbers: number[]): number[] => {
  if (numbers.length <= 1) {
    return numbers;
  }

  const middleIndex: number = Math.floor(numbers.length / 2);

  const leftHalf: number[] = numbers.slice(0, middleIndex);
  const rightHalf: number[] = numbers.slice(middleIndex);

  const mergedLeftHalf = mergeSort(leftHalf);
  const mergedRightHalf = mergeSort(rightHalf);

  return merge(mergedLeftHalf, mergedRightHalf);
};

const merge = (leftHalf: number[], rightHalf: number[]): number[] => {
  const numbers: number[] = [];

  while (leftHalf.length > 0 && rightHalf.length > 0) {
    if (leftHalf[0] > rightHalf[0]) {
      const item: number = rightHalf.shift()!;
      numbers.push(item);
    } else {
      const item: number = leftHalf.shift()!;
      numbers.push(item);
    }
  }

  for (let i: number = 0; i < leftHalf.length; i++) {
    numbers.push(leftHalf[i]);
  }
  for (let i: number = 0; i < rightHalf.length; i++) {
    numbers.push(rightHalf[i]);
  }

  return numbers;
};

export default mergeSort;
