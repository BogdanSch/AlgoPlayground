import time
import random

def insertionSort(numbers: list[int]) -> None:
    n: int = len(numbers)
    for i in range(1, n):
        element: int = numbers[i]
        j: int = i - 1
        while j >= 0 and element < numbers[j]:
            numbers[j + 1] = numbers[j]
            j -= 1
        numbers[j + 1] = element


amount = 10000
# You can change this to see how long it take to completely sort the array
arr = [random.randint(1, 1000) for i in range(amount)]
start = time.time()
insertionSort(arr)
end = time.time()

print(arr)
print(f"Time taken: {end - start:.6f} seconds")
