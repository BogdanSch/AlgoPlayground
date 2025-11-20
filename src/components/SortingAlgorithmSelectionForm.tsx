import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import { sortingStepGeneratorsTable } from "../utils";
import type { SortingStepGenerator, SortStep } from "../types";

interface ISortingAlgorithmSelectionFormProps {
  className?: string;
  collection: number[];
  setCollection: Dispatch<SetStateAction<number[]>>;
  showSortingSteps: boolean;
  setShowSortingSteps: Dispatch<SetStateAction<boolean>>;
  displayMessage: (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[],
    highlightIds: string[]
  ) => void;
}

const SortingAlgorithmSelectionForm: FC<
  ISortingAlgorithmSelectionFormProps
> = ({
  className = "",
  collection,
  setCollection,
  displayMessage,
  showSortingSteps = false,
  setShowSortingSteps,
}) => {
  const [steps, setSteps] = useState<SortStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleShowSortingStepsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setShowSortingSteps(event.target.checked);
  };
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMethodName: string = event.target.value;
    console.log(selectedMethodName);

    const targetSortingMethod: SortingStepGenerator | undefined =
      sortingStepGeneratorsTable.find((ssg) => ssg.name === selectedMethodName);

    if (targetSortingMethod) {
      const sortedArrayDisplay: HTMLElement | null =
        document.getElementById("sortedArrayDisplay");

      const collectionCopy: number[] = [...collection];
      setCollection(collection);
      setCurrentStep(0);

      sortedArrayDisplay?.scrollIntoView();
      const newSteps: SortStep[] = targetSortingMethod.method(collectionCopy);
      setSteps(newSteps);

      if (!showSortingSteps) {
        displayMessage("Sorting's completed!", [], [], []);
        setCollection(newSteps[newSteps.length - 1].newArray);
      } else {
        setCollection(newSteps[0].newArray);
        displayMessage(newSteps[0].message, [], [], newSteps[0].highlightIds);
      }
    }
  };
  const getNextStep = (): void => {
    if (steps.length < 1) {
      displayMessage("There is nothing to sort!", [], [], []);
      return;
    }
    if (currentStep + 1 >= steps.length) {
      displayMessage(
        "Sorting's completed!",
        [],
        [],
        steps[steps.length - 1].highlightIds
      );
      return;
    }

    const step = steps[currentStep + 1];
    setCollection(step.newArray);
    displayMessage(
      step.message,
      step.leftActiveIndices,
      step.rightActiveIndices,
      step.highlightIds
    );
    setCurrentStep(currentStep + 1);
  };
  const getPreviousStep = (): void => {
    if (steps.length < 1) {
      displayMessage("There is nothing to sort!", [], [], []);
      return;
    }
    if (currentStep === 0) {
      setCollection(steps[0].newArray);
      displayMessage(steps[0].message, [], [], steps[0].highlightIds);
      return;
    }

    const step = steps[currentStep - 1];
    setCollection(step.newArray);
    displayMessage(
      step.message,
      step.leftActiveIndices,
      step.rightActiveIndices,
      step.highlightIds
    );
    setCurrentStep(currentStep - 1);
  };

  return (
    <form className={"sorting-form" + (className ? ` ${className}` : "")}>
      <div className="mb-3">
        <label className="form-label">Select your sortings algorithm: </label>
        <select
          className="form-select"
          name="algorithmsSelector"
          aria-label="Select array sorting algorithm"
          onChange={handleChange}
          defaultValue={""}
        >
          <option value="" disabled={true}>
            Select a sorting algorithm
          </option>
          {sortingStepGeneratorsTable.map((sortingStepGenerator) => (
            <option
              value={sortingStepGenerator.name}
              key={sortingStepGenerator.displayName}
            >
              {sortingStepGenerator.displayName}
            </option>
          ))}
        </select>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="showSortingSteps"
            id="showSortingSteps"
            checked={showSortingSteps}
            onChange={handleShowSortingStepsChange}
          />
          <label className="form-check-label" htmlFor="showSortingSteps">
            Show sorting steps
          </label>
        </div>
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={getPreviousStep}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={getNextStep}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default SortingAlgorithmSelectionForm;
