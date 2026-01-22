import time
import random

def mergeSort(numbers: list[int]) -> None:
    n = len(numbers)
    if n <= 1:
        return
    mid: int = n // 2
    leftHalf: list[int] = numbers[0:mid]
    rightHalf: list[int] = numbers[mid:n]
    mergeSort(leftHalf)
    mergeSort(rightHalf)
    merge(leftHalf, rightHalf, numbers)
def merge(leftHalf: list[int], rightHalf: list[int], numbers: list[int]) -> None:
    i: int = 0
    j: int = 0
    k: int = 0
    while i < len(leftHalf) and j < len(rightHalf):
        if leftHalf[i] > rightHalf[j]:
            numbers[k] = rightHalf[j]
            j += 1
        else:
            numbers[k] = leftHalf[i]
            i += 1
        k += 1
    while i < len(leftHalf):
        numbers[k] = leftHalf[i]
        i += 1
        k += 1
    while j < len(rightHalf):
        numbers[k] = rightHalf[j]
        j += 1
        k += 1
    return

amount = 10000
# You can change this to see how long it take to completely sort the array
arr = [random.randint(1, 1000) for i in range(amount)]
start = time.time()
mergeSort(arr)
end = time.time()

print(arr)
print(f"Time taken: {end - start:.6f} seconds")
