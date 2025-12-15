function mergeSort(numbers) {
    const n = numbers.length;
    if (n <= 1) return;

    const mid = Math.floor(n / 2);
    const leftHalf = numbers.slice(0, mid);
    const rightHalf = numbers.slice(mid);

    mergeSort(leftHalf);
    mergeSort(rightHalf);
    merge(leftHalf, rightHalf, numbers);
}

function merge(leftHalf, rightHalf, numbers) {
    let i = 0, j = 0, k = 0;

    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] > rightHalf[j]) {
            numbers[k] = rightHalf[j];
            j++;
        } else {
            numbers[k] = leftHalf[i];
            i++;
        }
        k++;
    }

    while (i < leftHalf.length) {
        numbers[k] = leftHalf[i];
        i++;
        k++;
    }

    while (j < rightHalf.length) {
        numbers[k] = rightHalf[j];
        j++;
        k++;
    }
}

// Number of elements
const amount = 10000;

const arr = Array.from({ length: amount }, () =>
    Math.floor(Math.random() * 1000) + 1
);

const start = performance.now();

mergeSort(arr);


const end = performance.now();

console.log(arr);
console.log(`Time taken: ${(end - start).toFixed(6)} ms`);