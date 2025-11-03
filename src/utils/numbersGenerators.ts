export const numbersSequenceGenerator = (length: number): number[] => {
  const numbers: number[] = [];

  for (let i: number = 0; i < length; i++) {
    const randomNumber: number = Math.round(Math.random() * 200);
    numbers.push(randomNumber);
  }

  return numbers;
};

export function* range(start: number, end: number, step = 1) {
  for (let i: number = start; i < end; i += step) {
    yield i;
  }
}
