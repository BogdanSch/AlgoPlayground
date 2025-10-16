import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { sortingMethodsTable } from "../utils";
import type { SortingMethod } from "../types";

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
  const abortController = new AbortController();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMethodName: string = event.target.value;
    console.log(selectedMethodName);

    abortController.abort();

    const targetSortingMethod: SortingMethod | undefined =
      sortingMethodsTable.find((sm) => sm.name === selectedMethodName);

    if (targetSortingMethod) {
      const sortedArrayDisplay: HTMLElement | null =
        document.getElementById("sortedArrayDisplay");

      const collectionCopy: number[] = [...collection];
      setCollection(collectionCopy);

      sortedArrayDisplay?.scrollIntoView();

      targetSortingMethod
        .method(collectionCopy, showSortingSteps, displayMessage)
        .then(() => {
          setCollection(collectionCopy);
          console.log("Sorted: ", collectionCopy);

          sortedArrayDisplay?.scrollIntoView();
        });
    }
  };
  const handleShowSortingStepsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setShowSortingSteps(event.target.checked);
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
          {sortingMethodsTable.map((sortingMethod) => (
            <option value={sortingMethod.name} key={sortingMethod.displayName}>
              {sortingMethod.displayName}
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
      </div>
    </form>
  );
};
export default SortingAlgorithmSelectionForm;
