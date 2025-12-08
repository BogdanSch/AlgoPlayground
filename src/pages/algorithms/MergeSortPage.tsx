import { useEffect, useRef, useState } from "react";
import { numbersSequenceGenerator } from "../../utils/numbersGenerators";
import {
  ArrayDisplay,
  MergeSortTemplate,
  SortingAlgorithmSelectionForm,
} from "../../components";
import RecursiveTreeArrayDisplay from "../../components/arrayDisplays/RecursiveTreeArrayDisplay";

const MergeSortPage = () => {
  const [sourceNumbers, setSourceNumbers] = useState<number[]>([]);
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [leftCollection, setLeftCollection] = useState<number[]>([]);
  const [rightCollection, setRightCollection] = useState<number[]>([]);

  const [leftActiveIndices, setLeftActiveIndices] = useState<number[]>([]);
  const [rightActiveIndices, setRightActiveIndices] = useState<number[]>([]);
  const [highlightIds, setHighlightIds] = useState<string[]>([]);

  const [leftArrayActiveIndices, setLeftArrayActiveIndices] = useState<
    number[]
  >([]);
  const [rightArrayActiveIndices, setRightArrayActiveIndices] = useState<
    number[]
  >([]);

  const [showSortingSteps, setShowSortingSteps] = useState<boolean>(true);
  const sortingStepsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sequence: number[] = numbersSequenceGenerator(10);
    setSourceNumbers(sequence);
  }, []);

  const displayMessage = (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[],
    highlightIds: string[],
    leftArrayActiveIndices?: number[],
    rightArrayActiveIndices?: number[]
  ): void => {
    if (!showSortingSteps) return;

    const sortingSteps: HTMLDivElement | null = sortingStepsRef.current;
    if (!sortingSteps) return;

    setLeftActiveIndices(leftActiveIndices);
    setRightActiveIndices(rightActiveIndices);
    setHighlightIds(highlightIds);
    setLeftArrayActiveIndices(leftArrayActiveIndices ?? []);
    setRightArrayActiveIndices(rightArrayActiveIndices ?? []);

    sortingSteps.innerHTML = message;
  };

  return (
    <section className="array-sort">
      <div className="container">
        <div className="array-sort__wrap">
          <h1 className="heading">Merge Sort Algorithm</h1>
          <ArrayDisplay
            className="mt-5"
            id="sourceArrayDisplay"
            collection={sourceNumbers}
          >
            <h2 className="title">Row data</h2>
            <p className="text">This is your original array.</p>
          </ArrayDisplay>
          <SortingAlgorithmSelectionForm
            className="mt-5"
            collection={sourceNumbers}
            setCollection={setSortedNumbers}
            showSortingSteps={showSortingSteps}
            setShowSortingSteps={setShowSortingSteps}
            displayMessage={displayMessage}
            setLeftCollection={setLeftCollection}
            setRightCollection={setRightCollection}
          />
          <MergeSortTemplate highlightIds={highlightIds} />
          <RecursiveTreeArrayDisplay
            className="mt-5"
            id="sortedArrayDisplay"
            collection={sortedNumbers}
            leftActiveIndices={leftActiveIndices}
            rightActiveIndices={rightActiveIndices}
            leftCollection={leftCollection}
            rightCollection={rightCollection}
            leftArrayActiveIndices={leftArrayActiveIndices}
            rightArrayActiveIndices={rightArrayActiveIndices}
          >
            <h2 className="title">Sorted data</h2>
            <p className="text">
              This will be the result of the sorting operations
            </p>
            <div
              className="array-display__steps"
              id="sortingSteps"
              ref={sortingStepsRef}
            >
              Start by selecting one of the methods
            </div>
          </RecursiveTreeArrayDisplay>
        </div>
      </div>
    </section>
  );
};

export default MergeSortPage;
