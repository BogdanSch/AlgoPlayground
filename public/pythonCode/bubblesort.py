import time
import random

def bubbleSort(numbers: list[int]) -> None:
    n: int = len(numbers)
    for i in range(n - 1):
        swapped: bool = False
        for j in range(n - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
                swapped = True
        if not swapped:
            break


amount = 10000
#Number of elements (You can change this to see how long it take to completely sort the array)
arr = [random.randint(1, 1000) for i in range(amount)]
start = time.time()
bubbleSort(arr)
end = time.time()

print(arr)
print(f"Time taken: {end - start:.6f} seconds")