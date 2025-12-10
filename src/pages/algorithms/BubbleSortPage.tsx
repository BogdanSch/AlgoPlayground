import type { FC } from "react";

import pseudocodeBubble from "../../images/Pseudobubble.png";

const BubbleSortPage: FC = () => {
    return <section>
        <div className="container">
        <nav>
<a className="Download" href="/pythonCode/bubblesort.py" download={true}> asdasd</a>
        </nav>
        <h1>Bubble Sort</h1>
        <p className="text">Bubble sort is a very simple algorithm that repeatedly swaps adjacent elements if they are not in the correct order. It is easy to understand but inefficient compared to other sorting algorithms. However, it is important to understand how it works because it helps you better understand more advanced algorithms. </p>
        <h3>Pseudocode:</h3>
        <img src={pseudocodeBubble} alt="pseudo"></img>
            <p> </p>
            <h2>Code explanation:</h2>
            <p> </p>
            <h3>Important variables</h3>
            <ul>
                 <li>n = number of elements in arr.</li> 
                 <li>i = index for the outer loop (how many full passes have been completed).</li>
                 <li>j = index for the inner loop (compare and swap neighboring elements arr[j] and arr[j+1]).</li> 
            </ul>
            <h3>Outer Loop</h3>
            <p className="CodeExp"><code>for i = 0 to n - 1 </code></p>
                <p>This loop controls how many times we go through the list.</p>
                <p>After each full pass, one element is guaranteed to be in the correct final position (at the end). </p>
                <p>Therefore, the number of elements we need to check becomes smaller each time.</p>
            <h3> Inner Loop</h3>
            <p className="CodeExp"><code>for j = 0 to n - i - 2</code></p>
                <p>The two neighbouring elements are compared each time</p>
                <li><code>arr[j]</code></li>
                <li><code>arr[j+1]</code></li>
            <p>  </p>
            <h3>The Comparison</h3>
            <p className="CodeExp"><code>if arr[j] {">"} arr[j+1]</code></p>
                <li>If the left element is bigger than the right one, they must be swapped</li>

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
        
        </div></section>;

        
}
export default BubbleSortPage;
