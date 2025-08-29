import type { FC } from "react";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  numbersSequenceGenerator,
} from "./utils";

const App: FC = () => {
  const numbers: number[] = numbersSequenceGenerator(100000);

  console.log("Unsorted: ", numbers);
  bubbleSort(numbers);
  console.log("Sorted: ", numbers);

  return <div className="text-3xl font-bold underline">Algo Playground</div>;
};

export default App;
