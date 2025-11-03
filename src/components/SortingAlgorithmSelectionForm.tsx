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
  collection: number[];
  setCollection: Dispatch<SetStateAction<number[]>>;
  showSortingSteps: boolean;
  setShowSortingSteps: Dispatch<SetStateAction<boolean>>;
  displayMessage: (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[]
  ) => void;
}

const SortingAlgorithmSelectionForm: FC<
  ISortingAlgorithmSelectionFormProps
> = ({
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
      setCollection(collectionCopy);
      setCurrentStep(0);

      sortedArrayDisplay?.scrollIntoView();
      setSteps(targetSortingMethod.method(collectionCopy));

      if (!showSortingSteps) {
        setCollection(steps[steps.length - 1].newArray);
        displayMessage("Sorting's completed!", [], []);
      }
    }
  };
  const getNextStep = (): void => {
    if (currentStep >= steps.length) {
      displayMessage("Sorting's completed!", [], []);
      return;
    }

    const step = steps[currentStep];
    setCollection(step.newArray);
    displayMessage(
      step.message,
      step.leftActiveIndices,
      step.rightActiveIndices
    );
    setCurrentStep(currentStep + 1);
  };

  return (
    <form className="sorting-form">
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
            Check me out
          </label>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-danger">
            Abort
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
