const mergeSort = (numbers: number[]): void => {
  if (numbers.length <= 1) 
    return;

  const middleIndex: number = Math.floor(numbers.length / 2);

  const leftHalf: number[] = numbers.slice(0, middleIndex);
  const rightHalf: number[] = numbers.slice(middleIndex);

  mergeSort(leftHalf);
  mergeSort(rightHalf);

  merge(leftHalf, rightHalf, numbers);
};

const merge = (leftHalf: number[], rightHalf: number[], numbers: number[]): void => {
  let i: number = 0, j: number = 0, currentIndex = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] > rightHalf[j]) {
      numbers[currentIndex++] = (rightHalf[j++]);
    } else {
      numbers[currentIndex++] = (leftHalf[i++]);
    }
  }

  while(i < leftHalf.length){
    numbers[currentIndex++] = leftHalf[i++];
  }

  while(j < rightHalf.length){
    numbers[currentIndex++] = rightHalf[j++];
  }

  // for (let i: number = 0; i < leftHalf.length; i++) {
  //   numbers.push(leftHalf[i]);
  // }
  // for (let i: number = 0; i < rightHalf.length; i++) {
  //   numbers.push(rightHalf[i]);
  // }

  // return numbers;
};

export default mergeSort;
