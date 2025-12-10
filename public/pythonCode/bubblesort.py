def bubbleSort(arr):
                    for i in range(len(arr)):
                            
                        flag = True
                        for j in range(0, len(arr) - i - 1):

                            if arr[j] > arr[j + 1]:
                                (arr[j], arr[j + 1]) = (arr[j + 1], arr[j])
                                flag = False
                                    
                          if flag:
                            break
                    arr = [2, 45, 0, 11, 9]
                    bubbleSort(arr)
                    print('Sorted array:')
                    print(arr)