import type { SortStep } from "../../types";
import SortingStepGenerator from "./sortingStepGenerator";

export default class SelectionSortGenerator extends SortingStepGenerator {
  public constructor(
    displayName: string = "Selection Sort",
    name: string = "selectionSort",
    path: string = "/algorithms/selection",
  ) {
    super(displayName, name, path);
  }
  public generate(numbers: number[]): SortStep[] {
    const steps: SortStep[] = [
      {
        message: "Start sorting",
        newArray: [...numbers],
        leftActiveIndices: [],
        rightActiveIndices: [],
        highlightIds: ["start"],
      },
    ];

    for (let i: number = 0; i < numbers.length; i++) {
      let minIndex: number = i;

      steps.push({
        message: `Let's assume ${numbers[i]} is the minimum.`,
        newArray: [...numbers],
        leftActiveIndices: [i],
        rightActiveIndices: [],
        highlightIds: ["minIndex"],
      });

      for (let j: number = i + 1; j < numbers.length; j++) {
        const step: SortStep = {
          message: "",
          newArray: [...numbers],
          leftActiveIndices: [minIndex],
          rightActiveIndices: [j],
          highlightIds: ["compare"],
        };

        if (numbers[j] < numbers[minIndex]) {
          step.message = `${numbers[j]} < the minimum ${numbers[minIndex]} -> Update the minimum.`;
          step.highlightIds.push("isLess");
          minIndex = j;
        } else {
          step.message = `${numbers[j]} is >= the minimum ${numbers[minIndex]} -> No need to update the minimum.`;
        }

        steps.push(step);
      }

      [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
      steps.push({
        message: `Swap the minimum ${numbers[minIndex]} with ${numbers[i]}.`,
        newArray: [...numbers],
        leftActiveIndices: [i],
        rightActiveIndices: [minIndex],
        highlightIds: ["swap"],
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
