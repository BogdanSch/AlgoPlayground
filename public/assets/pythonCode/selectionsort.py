import time
import random

def selectionSort(numbers: list[int]) -> None:
    n: int = len(numbers)
    for i in range(n):
        minIndex: int = i
        for j in range(i + 1, n):
            if numbers[j] < numbers[minIndex]:
                minIndex = j
        numbers[i], numbers[minIndex] = numbers[minIndex], numbers[i]

amount = 10000
# You can change this to see how long it take to completely sort the array
arr = [random.randint(1, 1000) for i in range(amount)]
start = time.time()
selectionSort(arr)
end = time.time()

print(arr)
print(f"Time taken: {end - start:.6f} seconds")