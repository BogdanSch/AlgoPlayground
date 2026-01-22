function insertionSort(numbers) {
    const n = numbers.length;

    for (let i = 1; i < n; i++) {
        const element = numbers[i];
        let j = i - 1;

        while (j >= 0 && element < numbers[j]) {
            numbers[j + 1] = numbers[j];
            j--;
        }
        numbers[j + 1] = element;
    }
}

// Number of elements
const amount = 10000;


const arr = Array.from({ length: amount }, () =>
    Math.floor(Math.random() * 1000) + 1
);

const start = performance.now();

insertionSort(arr);
const end = performance.now();

console.log(arr);
console.log(`Time taken: ${(end - start).toFixed(6)} ms`);