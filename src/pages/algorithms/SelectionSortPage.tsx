import type { FC } from "react";
import pseudocodeSelection from "../../images/Pseudoselection.png";

const SelectionSortPage: FC = () => {
    return <section>
        <div className="container">
        <h1>Selection Sort</h1>
        <p className="text">The idea of ​​Selection sort is that we repeatedly find the smallest element of the array and swap it with the first element and sort that into the new array.</p>
        <h2>Pseudocode:</h2>
        <img src={pseudocodeSelection} alt="pseudo"></img>
        <h2>Explanation:</h2>
          <ul>
                 <li><code>arr</code> = the list of numbers you want to sort</li> 
                 <li><code>n</code> = number of elements in arr</li>
                 <li><code>i</code> = index for the outer loop (marks the boundary between sorted and unsorted part)</li> 
                 <li><code>j</code> = index for the inner loop (used to search for the smallest element)</li>
            </ul>
        <h3>Outer Loop</h3>
        <p className="CodeExp"><code>Iterate (n - 1) times</code></p>
            <p>You repeat the process for each element except the last one, because the last element will automatically be in the correct place.</p>
            <h3>Set the first unsorted element index as the <code>min</code></h3>
                <p>The array can be split into two parts:</p>
                <ul>
                    <li>Sorted part (left)</li>
                    <li>Unsorted part (right)</li>
                </ul>
                <p>
                At the start, nothing is sorted, so you assume the first element is the smallest.<br />
                You store the index of this element in a variable called <code>min</code>.
                </p>

            <h3>Loop through the unsorted elements</h3>
                <p><code>for each of the unsorted elements:</code></p>
                <code>if element &lt; currentMin:
                set element's index as new min
                </code>
                <p>
                You check every element after the current position.
                If you find a number smaller than the number at <code>min</code>,
                you update <code>min</code> to that index.
                This finds the smallest value in the remaining unsorted part.
                </p>


            <h3>4. Swap the element at <code>min</code> with the first unsorted position</h3>
                <p>
                After the loop, you know the location of the smallest number.
                You swap:
                </p> 
                <ul>
                <li>The smallest value</li>
                <li>The element at the first unsorted index</li>
                </ul>
                <p>This expands the sorted part by one element.</p>
        <h1 id="Table"> Example:</h1>
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
                    <td>23</td>
                    <td>10</td>
                    <td>17</td>
                    <td>3</td>
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
                    <td>10</td>
                    <td>23</td>
                    <td>17</td>
                    <td>3</td>
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
                    <td>7</td>
                    <td>10</td>
                    <td>17</td>
                    <td>23</td>
                    <td>3</td>
                </tr>
                <p>After i=4</p> 
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

export default SelectionSortPage;