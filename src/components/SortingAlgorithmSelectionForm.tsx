import {
  useState,
  useEffect,
  type ChangeEvent,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import { sortingStepGeneratorsTable } from "../utils";
import type {
  SortingStepGenerator,
  SortStep,
  DivideAndConquerSortStep,
} from "../types";
import { isNullOrWhitespace } from "../utils/stringHelper";

interface ISortingAlgorithmSelectionFormProps {
  className?: string;
  defaultAlgorithmName?: string;
  collection: number[];
  setCollection: Dispatch<SetStateAction<number[]>>;
  setLeftCollection?: Dispatch<SetStateAction<number[]>>;
  setRightCollection?: Dispatch<SetStateAction<number[]>>;
  displayMessage: (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[],
    highlightIds: string[],
    rightArrayActiveIndices?: number[],
    leftArrayActiveIndices?: number[],
  ) => void;
}

const SortingAlgorithmSelectionForm: FC<
  ISortingAlgorithmSelectionFormProps
> = ({
  className = "",
  collection,
  setCollection,
  setLeftCollection,
  setRightCollection,
  displayMessage,
  defaultAlgorithmName,
}) => {
  const [steps, setSteps] = useState<SortStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const navigate = useNavigate();
  const filteredSortingStepGeneratorsTable = isNullOrWhitespace(
    defaultAlgorithmName,
  )
    ? sortingStepGeneratorsTable
    : sortingStepGeneratorsTable.filter(
        (ssg) => ssg.name === defaultAlgorithmName,
      );

  useEffect(() => {
    if (isNullOrWhitespace(defaultAlgorithmName) || collection.length <= 0)
      return;

    const targetSortingMethod: SortingStepGenerator | undefined =
      filteredSortingStepGeneratorsTable.find(
        (ssg) => ssg.name === defaultAlgorithmName,
      );
    if (!targetSortingMethod) navigate("/");

    startSorting(defaultAlgorithmName!);
  }, [defaultAlgorithmName, collection]);

  const startSorting = (methodName: string) => {
    const targetSortingMethod: SortingStepGenerator | undefined =
      sortingStepGeneratorsTable.find((ssg) => ssg.name === methodName);

    if (targetSortingMethod) {
      const sortedArrayDisplay: HTMLElement | null =
        document.getElementById("sortedArrayDisplay");

      const collectionCopy: number[] = [...collection];
      setCollection(collection);
      setCurrentStep(0);

      sortedArrayDisplay?.scrollIntoView();
      const newSteps: SortStep[] = targetSortingMethod.method(collectionCopy);
      setSteps(newSteps);

      setCollection(newSteps[0].newArray);
      displayMessage(newSteps[0].message, [], [], newSteps[0].highlightIds);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMethodName: string = event.target.value;
    console.log(selectedMethodName);
    startSorting(selectedMethodName);
  };
  function isDivideAndConquerStep(
    step: SortStep,
  ): step is DivideAndConquerSortStep {
    return (
      "newLeftArrayHalf" in step &&
      "newRightArrayHalf" in step &&
      "leftArrayActiveIndices" in step &&
      "rightArrayActiveIndices" in step
    );
  }
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
        steps[steps.length - 1].highlightIds,
      );
      return;
    }

    const step = steps[currentStep + 1];
    setCollection(step.newArray);
    if (isDivideAndConquerStep(step)) {
      setLeftCollection?.(step.newLeftArrayHalf);
      setRightCollection?.(step.newRightArrayHalf);
      displayMessage(
        step.message,
        step.leftActiveIndices,
        step.rightActiveIndices,
        step.highlightIds,
        step.leftArrayActiveIndices,
        step.rightArrayActiveIndices,
      );
    } else {
      displayMessage(
        step.message,
        step.leftActiveIndices,
        step.rightActiveIndices,
        step.highlightIds,
      );
    }

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
    if (isDivideAndConquerStep(step)) {
      setLeftCollection?.(step.newLeftArrayHalf);
      setRightCollection?.(step.newRightArrayHalf);
      displayMessage(
        step.message,
        step.leftActiveIndices,
        step.rightActiveIndices,
        step.highlightIds,
        step.leftArrayActiveIndices,
        step.rightArrayActiveIndices,
      );
    } else {
      displayMessage(
        step.message,
        step.leftActiveIndices,
        step.rightActiveIndices,
        step.highlightIds,
      );
    }
    setCurrentStep(currentStep - 1);
  };

  return (
    <form className={"sorting-form" + (className ? ` ${className}` : "")}>
      <div className="mb-3">
        <label className="form-label" htmlFor="algorithmsSelector">
          Select your sortings algorithm:
        </label>
        <select
          className="form-select"
          name="algorithmsSelector"
          id="algorithmsSelector"
          aria-label="Select numbers array sorting algorithm"
          onChange={handleChange}
          defaultValue={defaultAlgorithmName ?? ""}
        >
          <option value="" disabled={true}>
            Select a sorting algorithm
          </option>
          {filteredSortingStepGeneratorsTable.map((sortingStepGenerator) => (
            <option
              value={sortingStepGenerator.name}
              key={sortingStepGenerator.displayName}
            >
              {sortingStepGenerator.displayName}
            </option>
          ))}
        </select>
        <div className="buttons mt-3">
          <button
            type="button"
            className="btn btn-info"
            onClick={getPreviousStep}
          >
            <div className="btn__wrap">
              <i className="bi bi-caret-left-fill"></i>
            </div>
          </button>
          {steps.length >= 1 && (
            <span className="text">
              {currentStep + 1} / {steps.length}
            </span>
          )}
          <button
            type="button"
            className="btn btn-primary"
            onClick={getNextStep}
          >
            <div className="btn__wrap">
              <i className="bi bi-caret-right-fill"></i>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SortingAlgorithmSelectionForm;
