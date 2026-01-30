import type { InsertionSortStep } from "../../types";
import SortingStepGenerator from "./sortingStepGenerator";

export default class InsertionSortGenerator extends SortingStepGenerator {
  public constructor(
    displayName: string = "Insertion Sort",
    name: string = "insertionSort",
    path: string = "/algorithms/insertion",
  ) {
    super(displayName, name, path);
  }
  public generate(numbers: number[]): InsertionSortStep[] {
    const steps: InsertionSortStep[] = [
      {
        message: "Start sorting",
        newArray: [...numbers],
        leftActiveIndices: [],
        rightActiveIndices: [],
        highlightIds: ["start"],
      },
      {
        message: "Let's consider the first element as sorted.",
        newArray: [...numbers],
        leftActiveIndices: [0],
        rightActiveIndices: [0],
        highlightIds: [],
      },
    ];

    for (let i: number = 1; i < numbers.length; i++) {
      const element: number = numbers[i];
      let j: number = i - 1;
      steps.push({
        message: `Let's take ${element} at position ${i}.`,
        newArray: [...numbers],
        leftActiveIndices: [i],
        rightActiveIndices: [i],
        highlightIds: ["elementToInsert"],
        temporaryElement: element,
      });

      while (j >= 0 && element < numbers[j]) {
        steps.push({
          message: `${element} < ${numbers[j]} -> shift ${numbers[j]} one unit to the right.`,
          newArray: [...numbers],
          leftActiveIndices: [i],
          rightActiveIndices: [j],
          highlightIds: ["compare", "shift"],
          temporaryElement: element,
        });

        numbers[j + 1] = numbers[j];
        j--;
      }

      numbers[j + 1] = element;
      steps.push({
        message: `Insert ${element} at the position with index ${j + 1}.`,
        newArray: [...numbers],
        leftActiveIndices: [j + 1],
        rightActiveIndices: [],
        highlightIds: ["insert"],
      });
    }

    steps.push({
      message: "Sorting's completed!",
      newArray: [...numbers],
      leftActiveIndices: [],
      rightActiveIndices: [],
      highlightIds: [],
    });

    return steps;
  }
}
