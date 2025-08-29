const numbersSequenceGenerator = (length: number): number[] => {
  const numbers: number[] = [];

  for (let i: number = 0; i < length; i++) {
    const randomNumber: number = Math.round(Math.random() * 1000) - 500;
    numbers.push(randomNumber);
  }

  return numbers;
};

export default numbersSequenceGenerator;
