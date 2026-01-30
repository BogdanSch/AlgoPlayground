import {
  useState,
  useEffect,
  type ChangeEvent,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import type { SortStep } from "../../types";
import {
  createConfetti,
  SortingStepGenerator,
  sortingStepGeneratorsTable,
} from "../../utils";
import { isNullOrWhitespace } from "../../utils/stringHelper";

interface ISortingAlgorithmSelectionFormProps {
  className?: string;
  defaultAlgorithmName?: string;
  collection: number[];
  setCollection: Dispatch<SetStateAction<number[]>>;
  setLeftCollection?: Dispatch<SetStateAction<number[]>>;
  setRightCollection?: Dispatch<SetStateAction<number[]>>;
  displayMessage: (step?: SortStep) => void;
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
  let successAudio = new Audio("/assets/audio/success.mp3");

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
      const newSteps: SortStep[] = targetSortingMethod.generate(collectionCopy);
      setSteps(newSteps);

      setCollection(newSteps[0].newArray);
      displayMessage(newSteps[0]);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMethodName: string = event.target.value;
    console.log(selectedMethodName);
    startSorting(selectedMethodName);
  };
  const getStep = (stepIndex: number): void => {
    if (stepIndex === steps.length - 1) {
      successAudio.play();
      createConfetti();
    }
    const step = steps[stepIndex];
    setCollection(step.newArray);
    if (
      step.hasOwnProperty("newLeftArrayHalf") &&
      step.hasOwnProperty("newRightArrayHalf")
    ) {
      setLeftCollection?.((step as any).newLeftArrayHalf);
      setRightCollection?.((step as any).newRightArrayHalf);
    }
    displayMessage(step);
  };
  const getNextStep = (): void => {
    if (steps.length < 1) {
      displayMessage();
      return;
    }
    if (currentStep + 1 >= steps.length) {
      return;
    }
    const nextStepIndex: number = currentStep + 1;
    getStep(nextStepIndex);
    setCurrentStep(nextStepIndex);
  };
  const getPreviousStep = (): void => {
    if (steps.length < 1) {
      displayMessage();
      return;
    }
    if (currentStep === 0) {
      setCollection(steps[0].newArray);
      displayMessage(steps[0]);
      return;
    }
    const previousStepIndex: number = currentStep - 1;
    getStep(previousStepIndex);
    setCurrentStep(previousStepIndex);
  };
  const getLastStep = () => {
    if (steps.length < 1) {
      displayMessage();
      return;
    }
    const lastStepIndex: number = steps.length - 1;
    getStep(lastStepIndex);
    setCurrentStep(lastStepIndex);
  };
  const getFirstStep = () => {
    if (steps.length < 1) {
      displayMessage();
      return;
    }
    const firstStepIndex: number = 0;
    getStep(firstStepIndex);
    setCurrentStep(firstStepIndex);
  };

  return (
    <form className={"sorting-form" + (className ? ` ${className}` : "")}>
      <div className="mb-3">
        <label className="form-label" htmlFor="algorithmsSelector">
          Sorting algorithm:
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
            className="btn btn-primary btn-icon"
            onClick={getFirstStep}
          >
            <i className="bi bi-caret-left-square"></i>
          </button>
          <button
            type="button"
            className="btn btn-info btn-icon"
            onClick={getPreviousStep}
          >
            <i className="bi bi-caret-left-fill"></i>
          </button>
          {steps.length >= 1 && (
            <span className="text">
              {currentStep + 1} / {steps.length}
            </span>
          )}
          <button
            type="button"
            className="btn btn-primary btn-icon"
            onClick={getNextStep}
          >
            <i className="bi bi-caret-right-fill"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-icon"
            onClick={getLastStep}
          >
            <i className="bi bi-caret-right-square"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SortingAlgorithmSelectionForm;
