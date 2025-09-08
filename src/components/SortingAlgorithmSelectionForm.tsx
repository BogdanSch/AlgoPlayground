import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { sortingMethodsTable } from "../utils";
import type { SortingMethod } from "../types";

interface ISortingAlgorithmSelectionFormProps {
  collection: number[];
  setCollection: Dispatch<SetStateAction<number[]>>;
}

const SortingAlgorithmSelectionForm: FC<
  ISortingAlgorithmSelectionFormProps
> = ({ collection, setCollection }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMethodName: string = event.target.value;
    console.log(selectedMethodName);

    const targetMethod: SortingMethod | undefined = sortingMethodsTable.find(
      (sm) => sm.name === selectedMethodName
    );

    if (targetMethod) {
      const collectionCopy: number[] = [...collection];
      targetMethod.method(collectionCopy);

      setCollection(collectionCopy);
      console.log("Sorted: ", collectionCopy);
    }
  };

  return (
    <form className="sorting-form">
      <div className="mb-3">
        <label className="form-label">Select your sortings algorithm: </label>
        <select
          className="form-select"
          aria-label="Select array sorting algorithm"
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Select a sorting algorithm
          </option>
          {sortingMethodsTable.map((sortingMethod) => (
            <option value={sortingMethod.name} key={sortingMethod.displayName}>
              {sortingMethod.displayName}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
export default SortingAlgorithmSelectionForm;
