function selectionSort(numbers) {
    const n = numbers.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }
        }


        [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
    }
}

// Number of elements
const amount = 10000;

const arr = Array.from({ length: amount }, () =>
    Math.floor(Math.random() * 1000) + 1
);

const start = performance.now();

selectionSort(arr);

const end = performance.now();

console.log(arr);
console.log(`Time taken: ${(end - start).toFixed(6)} ms`);
