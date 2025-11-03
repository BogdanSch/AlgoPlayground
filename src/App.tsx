import { type FC, useEffect, useState, useRef } from "react";
import { numbersSequenceGenerator } from "./utils/numbersGenerators";
import { ArrayDisplay, SortingAlgorithmSelectionForm } from "./components";

const App: FC = () => {
  const [sourceNumbers, setSourceNumbers] = useState<number[]>([]);
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);

  const [leftActiveIndices, setLeftActiveIndices] = useState<number[]>([]);
  const [rightActiveIndices, setRightActiveIndices] = useState<number[]>([]);

  const [showSortingSteps, setShowSortingSteps] = useState<boolean>(true);

  const sortingStepsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sequence: number[] = numbersSequenceGenerator(6);
    setSourceNumbers(sequence);
  }, []);

  const displayMessage = (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[]
  ): void => {
    if (!showSortingSteps) return;

    const sortingSteps: HTMLDivElement | null = sortingStepsRef.current;
    if (!sortingSteps) return;

    setLeftActiveIndices(leftActiveIndices);
    setRightActiveIndices(rightActiveIndices);

    sortingSteps.innerHTML = message;
  };

  return (
    <main className="main">
      <section className="app">
        <div className="container">
          <div className="app__wrap">
            <div className="text-content text-center">
              <h1 className="app">Algo Playground</h1>
              <SortingAlgorithmSelectionForm
                collection={sourceNumbers}
                showSortingSteps={showSortingSteps}
                setShowSortingSteps={setShowSortingSteps}
                setCollection={setSortedNumbers}
                displayMessage={displayMessage}
              />
            </div>
            <ArrayDisplay
              className="mt-5"
              id="sourceArrayDisplay"
              collection={sourceNumbers}
            >
              <h2 className="title">Row data</h2>
              <p className="text">This is your original array.</p>
            </ArrayDisplay>
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
                Start sorting
              </div>
            </ArrayDisplay>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
