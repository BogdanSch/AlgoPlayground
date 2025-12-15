import { useEffect, useRef, useState, type FC } from "react";
import {
  ArrayDisplay,
  BubbleSortTemplate,
  SortingAlgorithmSelectionForm,
} from "../../components";
import { numbersSequenceGenerator } from "../../utils/numbersGenerators";
import { sortingStepGeneratorsTable } from "../../utils";
import pseudocodeBubble from "../../images/Pseudobubble.png";

const BubbleSortPage: FC = () => {
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
    <section className="array-sort">
      <div className="container">
        <div className="array-sort__wrap">
          <article className="array-sort__article">
            <h1 className="heading">Bubble Sort</h1>
            <p className="text">
              Bubble sort is a very simple algorithm that repeatedly swaps
              adjacent elements if they are not in the correct order. It is easy
              to understand but inefficient compared to other sorting
              algorithms. However, it is important to understand how it works
              because it helps you better understand more advanced algorithms.{" "}
            </p>
            <h3>Pseudocode:</h3>
            <img src={pseudocodeBubble} alt="pseudo"></img>
            <p> </p>
            <nav>
              <p className="LinkText">If you want to see how fast different languages sort download these codes:</p>
              <a
                className="Download"
                href="/pythonCode/bubblesort.py"
                download={true}
              >
                {" "}
                Python
          
              </a>
                    <a
                className="Download"
                href="/pythonCode/bubblesort.js"
                download={true}
              >
                {" "}
                Javascript
              </a>
            </nav>
            <p></p>
            <h2>Code explanation:</h2>
            <p> </p>
            <h3>Important variables</h3>
            <ul>
              <li>
                <code>n</code> = number of elements in arr.
              </li>
              <li>
                <code>i</code> = index for the outer loop (how many full passes
                have been completed).
              </li>
              <li>
                <code>j</code> = index for the inner loop (compare and swap
                neighboring elements <code>arr[j]</code> and{" "}
                <code>arr[j+1]</code>).
              </li>
            </ul>
            <h3>Outer Loop</h3>
            <p className="CodeExp">
              <code>for i = 0 to n - 1 </code>
            </p>
            <p>This loop controls how many times we go through the list.</p>
            <p>
              After each full pass, one element is guaranteed to be in the
              correct final position (at the end).{" "}
            </p>
            <p>
              Therefore, the number of elements we need to check becomes smaller
              each time.
            </p>
            <h3> Inner Loop</h3>
            <p className="CodeExp">
              <code>for j = 0 to n - i - 2</code>
            </p>
            <p>The two neighbouring elements are compared each time</p>
            <li>
              <code>arr[j]</code>
            </li>
            <li>
              <code>arr[j+1]</code>
            </li>
            <p> </p>
            <h3>The Comparison</h3>
            <p className="CodeExp">
              <code>if arr[j] {">"} arr[j+1]</code>
            </p>
            <li>
              If the left element is bigger than the right one, they must be
              swapped
            </li>

            <h2 id="Table"> Example:</h2>
            <table className="table">
              <tbody>
                <p>Input:</p>
                <tr>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>23</td>
                  <td>7</td>
                  <td>10</td>
                  <td>17</td>
                  <td>3</td>
                </tr>
                <p>After i=0</p>
                <tr>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>10</td>
                  <td>17</td>
                  <td>3</td>
                  <td>23</td>
                </tr>
                <p>After i=1</p>
                <tr>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>10</td>
                  <td>3</td>
                  <td>17</td>
                  <td>23</td>
                </tr>
                <p>After i=2</p>
                <tr>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>3</td>
                  <td>10</td>
                  <td>17</td>
                  <td>23</td>
                </tr>
                <p>After i=3</p>
                <tr>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>7</td>
                  <td>10</td>
                  <td>17</td>
                  <td>23</td>
                </tr>
              </tbody>
            </table>
          </article>
          <ArrayDisplay
            className="mt-5"
            id="sourceArrayDisplay"
            collection={sourceNumbers}
          >
            <h2 className="title">Row data</h2>
            <p className="text">This is your original array.</p>
          </ArrayDisplay>
          <BubbleSortTemplate highlightIds={highlightIds} />
          <SortingAlgorithmSelectionForm
            className="mt-5"
            collection={sourceNumbers}
            showSortingSteps={showSortingSteps}
            setShowSortingSteps={setShowSortingSteps}
            setCollection={setSortedNumbers}
            displayMessage={displayMessage}
            defaultAlgorithmName={
              sortingStepGeneratorsTable.find(
                (stg) => stg.displayName === "Bubble Sort"
              )?.name
            }
          />
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
export default BubbleSortPage;
