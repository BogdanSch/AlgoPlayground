export const numbersSequenceGenerator = (length: number): number[] => {
  const numbers: number[] = [];

  for (let i: number = 0; i < length; i++) {
    const randomNumber: number = Math.round(Math.random() * 200);
    numbers.push(randomNumber);
  }

  return numbers;
};

export const range = (start: number, end: number, step: number = 1) => {
  const numbers: number[] = [];
  for (let i: number = start; i < end; i += step) {
    numbers.push(i);
  }
  return numbers;
};
