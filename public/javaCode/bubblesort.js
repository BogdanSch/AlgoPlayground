function bubbleSort(numbers) {
    const n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

// Number of elements
const amount = 10000;

const arr = Array.from({ length: amount }, () =>
    Math.floor(Math.random() * 1000) + 1
);


const start = performance.now();

bubbleSort(arr);
const end = performance.now();

console.log(arr);
console.log(`Time taken: ${(end - start).toFixed(6)} ms`);
