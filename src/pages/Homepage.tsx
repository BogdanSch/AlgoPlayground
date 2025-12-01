import { type FC, useEffect, useState, useRef } from "react";
import { numbersSequenceGenerator } from "../utils/numbersGenerators";
import {
  ArrayDisplay,
  BubbleSortTemplate,
  SelectionSortTemplate,
  InsertionSortTemplate,
  SortingAlgorithmSelectionForm,
} from "../components";

const Homepage: FC = () => {
  const [sourceNumbers, setSourceNumbers] = useState<number[]>([]);
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);

  const [leftActiveIndices, setLeftActiveIndices] = useState<number[]>([]);
  const [rightActiveIndices, setRightActiveIndices] = useState<number[]>([]);
  const [highlightIds, setHighlightIds] = useState<string[]>([]);

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
    highlightIds: string[]
  ): void => {
    if (!showSortingSteps) return;

    const sortingSteps: HTMLDivElement | null = sortingStepsRef.current;
    if (!sortingSteps) return;

    setLeftActiveIndices(leftActiveIndices);
    setRightActiveIndices(rightActiveIndices);
    setHighlightIds(highlightIds);

    sortingSteps.innerHTML = message;
  };
  return (
    <section className="app">
      <div className="container">
        <div className="app__wrap">
          <div className="text-content text-center">
            <h1 className="app__title">Algo Playground</h1>
            <p className="app__description">
              Explore and visualize various sorting algorithms in action!
            </p>
          </div>
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
            showSortingSteps={showSortingSteps}
            setShowSortingSteps={setShowSortingSteps}
            setCollection={setSortedNumbers}
            displayMessage={displayMessage}
          />
          {/* <InsertionSortTemplate highlightIds={highlightIds} /> */}
          {/* <SelectionSortTemplate highlightIds={highlightIds} /> */}
          <BubbleSortTemplate highlightIds={highlightIds} />
          <ArrayDisplay
            className="mt-5"
            id="sortedArrayDisplay"
            collection={sortedNumbers}
            leftActiveIndices={leftActiveIndices}
            rightActiveIndices={rightActiveIndices}
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
          </ArrayDisplay>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
