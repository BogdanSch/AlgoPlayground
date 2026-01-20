import { useRef, useState } from "react";
import {
  ArrayDisplay,
  MergeSortTemplate,
  SortingAlgorithmSelectionForm,
  RecursiveTreeArrayDisplay,
  ArrayInputForm,
} from "../../components";
import { sortingStepGeneratorsTable } from "../../utils";
import pseudocodeMerge from "../../images/Pseudomerge.png";

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
  const sortingStepsRef = useRef<HTMLDivElement | null>(null);

  const displayMessage = (
    message: string,
    leftActiveIndices: number[],
    rightActiveIndices: number[],
    highlightIds: string[],
    leftArrayActiveIndices?: number[],
    rightArrayActiveIndices?: number[],
  ): void => {
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
          <article className="array-sort__article">
            <h1 className="heading">Merge Sort</h1>
            <p>
              Merge Sort is one of the most efficient sorting algorithms. It
              works by repeatedly dividing the problem into smaller parts,
              instead of sorting the whole list at once. By breaking a large
              problem into smaller, easier problems, Merge Sort can sort data
              very efficiently, even for large lists.
            </p>
            <h3>PseudoCode:</h3>
            <img src={pseudocodeMerge} alt="pseudo"></img>
            <p></p>
            <nav>
              <p className="LinkText">
                If you want to see how fast different languages sort download
                these codes:
              </p>
              <a
                className="Download"
                href="/pythonCode/mergesort.py"
                download={true}
              >
                {" "}
                Python
              </a>
              <a
                className="Download"
                href="/javaCode/mergesort.js"
                download={true}
              >
                {" "}
                Javascript
              </a>
            </nav>
            <h3>Important variables</h3>
            <ul>
              <li>
                <code>arr</code> = the array to be sorted.
              </li>
              <li>
                <code>left</code> = starting index of the current subarray.
              </li>
              <li>
                <code>right</code> = ending index of the current subarray.
              </li>
              <li>
                <code>mid</code> = middle index used to split the array.
              </li>
            </ul>

            <h3>Stop Condition</h3>
            <p className="CodeExp">
              <code>if left &gt; right return</code>
            </p>
            <p>This condition stops the recursion.</p>
            <p>
              If the subarray has one or zero elements, it is already sorted.
            </p>

            <h3>Find the Middle</h3>
            <p className="CodeExp">
              <code>mid = (left + right) / 2</code>
            </p>
            <p>The array is divided into two halves:</p>
            <ul>
              <li>
                Left half: <code>left</code> to <code>mid</code>
              </li>
              <li>
                Right half: <code>mid + 1</code> to <code>right</code>
              </li>
            </ul>
            <h3>Repetitive Calls</h3>
            <p className="CodeExp">
              <code>mergeSort(arr, left, mid)</code>
            </p>
            <p>This recursively sorts the left half of the array.</p>

            <p className="CodeExp">
              <code>mergeSort(arr, mid + 1, right)</code>
            </p>
            <p>This recursively sorts the right half of the array.</p>

            <h3>Merging the halves</h3>
            <p className="CodeExp">
              <code>merge(arr, left, mid, right)</code>
            </p>
            <p>
              This step combines the two sorted halves into one sorted subarray.
            </p>
            <p>
              Elements from both halves are compared and placed back into the
              array in the correct order.
            </p>
            <h2 id="Table">Example:</h2>

            <table className="table">
              <tbody>
                <tr>
                  <td colSpan={5}>Input:</td>
                </tr>
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

                <tr>
                  <td colSpan={5}>Split into halves:</td>
                </tr>
                <tr>
                  <td>[23, 7, 10] </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>[17, 3]</td>
                </tr>

                <tr>
                  <td colSpan={5}>Split again:</td>
                </tr>
                <tr>
                  <td>[23]</td>
                  <td>[7, 10] </td>
                  <td></td>
                  <td>[17]</td>
                  <td>[3]</td>
                </tr>

                <tr>
                  <td colSpan={5}>Merge sorted subarrays:</td>
                </tr>
                <tr>
                  <td>[23] + [7, 10] → [7, 10, 23]</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>[17] + [3] → [3, 17]</td>
                </tr>

                <tr>
                  <td colSpan={5}>Final merge:</td>
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
          <div className="array-sort__visualization">
            {sourceNumbers.length <= 0 ? (
              <ArrayInputForm setCollection={setSourceNumbers} />
            ) : (
              <>
                <ArrayDisplay
                  className="mt-5"
                  id="sourceArrayDisplay"
                  collection={sourceNumbers}
                >
                  <h2 className="title">Row data</h2>
                  <p className="text">This is your original array.</p>
                </ArrayDisplay>
                <MergeSortTemplate
                  className="mt-5"
                  highlightIds={highlightIds}
                />
                <SortingAlgorithmSelectionForm
                  className="mt-5"
                  collection={sourceNumbers}
                  setCollection={setSortedNumbers}
                  displayMessage={displayMessage}
                  setLeftCollection={setLeftCollection}
                  setRightCollection={setRightCollection}
                  defaultAlgorithmName={
                    sortingStepGeneratorsTable.find(
                      (stg) => stg.displayName === "Merge Sort",
                    )?.name
                  }
                />
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
                    className="array-display__steps alert alert-primary"
                    role="alert"
                    id="sortingSteps"
                    ref={sortingStepsRef}
                  >
                    Start by selecting one of the methods
                  </div>
                </RecursiveTreeArrayDisplay>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MergeSortPage;
