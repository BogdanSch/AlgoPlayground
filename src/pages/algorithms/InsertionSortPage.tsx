import type { FC } from "react";

const InsertionSortPage: FC = () => {
    return <section>
        <div className="container">
        <h1>Insertion Sort</h1>
        <p>Insertion sort is a sorting algorithm that puts one element at a time in the correct place by inserting each new element into its correct position, just as if you were sorting playing cards in your hand.</p>
        <img src="Pseudoinsertion.png" alt="pseudo"></img>
        <p>
            1. "Consider 0th element as sorted part"

            The algorithm assumes the first element of the array is already sorted.

            2. Loop through the rest of the elements
            for each element from i = 2 to n-1


            In real code this is usually:

            for i = 1 to n-1


            So it starts from the second element.

            3. Store the current element
            tmp = arr[i]


            We save the element we want to insert into the sorted part.

            4. Compare it with all elements to the left
            for j = i-1 down to 0


            We move leftwards through the sorted portion.

            5. Shift larger elements to the right
            If a[j] {">"} tmp
            
                Then right shift it by one position


            We shift elements to make space for the new one.

            6. Insert the element into the correct position
            put tmp at current j


            Once we find the correct spot, we place tmp there.
        </p>
        </div></section>;
        

}
export default InsertionSortPage;