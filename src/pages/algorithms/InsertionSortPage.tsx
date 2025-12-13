import type { FC } from "react";
import pseudocodeInsertion from "../../images/Pseudoinsertion.png";
const InsertionSortPage: FC = () => {
    return <section>
        <div className="container">
        <h1>Insertion Sort</h1>
        <p>Insertion sort is a sorting algorithm that puts one element at a time in the correct place by inserting each new element into its correct position, just as if you were sorting playing cards in your hand.</p>
        <h3>PseudoCode:</h3>
        <img src={pseudocodeInsertion} alt="pseudo"></img>
        <h3>Important variables</h3>
        <ul>
            <li><code>arr</code> = the array to be sorted.</li>
            <li><code>n</code> = number of elements in <code>arr</code>.</li>
            <li><code>i</code> = index for the outer loop (current element being inserted).</li>
            <li><code>j</code> = index for the inner loop (used to compare elements in the sorted part).</li>
            <li><code>tmp</code> = temporarily stores the element that needs to be inserted.</li>
        </ul>

        <h3>Initial Step</h3>
            <p>Consider the 0th element as the sorted part.</p>
            <p>This means the algorithm starts assuming the first element is already in the correct position.</p>

        <h3>Outer Loop</h3>
            <p className="CodeExp"><code>for i = 1 to n - 1</code></p>
            <p>This loop goes through each element in the unsorted part of the array.</p>
            <p>Each iteration inserts one element into the correct position in the sorted part.</p>
            <p>The sorted part grows from left to right.</p>

        <h3>Store Current Element</h3>
            <p className="CodeExp"><code>tmp = arr[i]</code></p>
            <p>The current element is stored in a temporary variable.</p>
            <p>This prevents the value from being overwritten while elements are shifted.</p>

        <h3>Inner Loop</h3>
            <p className="CodeExp"><code>for j = i - 1 down to 0</code></p>
            <p>This loop moves backwards through the sorted part of the array.</p>
            <p>Each element is compared with <code>tmp</code>.</p>

        <h3>The Comparison</h3>
            <p className="CodeExp"><code>if arr[j] &gt; tmp</code></p>
            <ul>
                <li>If the element in the sorted part is greater than <code>tmp</code>, it is shifted one position to the right.</li>
                <li>This creates space for inserting <code>tmp</code>.</li>
            </ul>

        <h3>Insert Step</h3>
            <p className="CodeExp"><code>arr[j + 1] = tmp</code></p>
            <p>Once the correct position is found, <code>tmp</code> is placed into the array.</p>
            <p>The sorted part now contains one more element.</p>
        
        <h1 id="Table">Example:</h1>
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

                <p>After i = 1</p>
                <tr>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                </tr>
                <tr>
                <td>7</td>
                <td>23</td>
                <td>10</td>
                <td>17</td>
                <td>3</td>
                </tr>

                <p>After i = 2</p>
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
                <td>23</td>
                <td>17</td>
                <td>3</td>
                </tr>

                <p>After i = 3</p>
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
                <td>23</td>
                <td>3</td>
                </tr>

                <p>After i = 4</p>
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
        </div></section>;
        

}
export default InsertionSortPage;