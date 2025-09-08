import { type FC, useState } from "react";
import { numbersSequenceGenerator } from "./utils";
import { ArrayDisplay, SortingAlgorithmSelectionForm } from "./components";

const App: FC = () => {
  const [numbers, setNumbers] = useState<number[]>(
    numbersSequenceGenerator(10000)
  );

  // console.log("Unsorted: ", numbers);
  // mergeSort(numbers);
  // console.log("Sorted: ", numbers);

  return (
    <main className="main">
      <section className="app">
        <div className="container">
          <div className="app__wrap">
            <div className="text-content text-center">
              <h1 className="app">Algo Playground</h1>
              <SortingAlgorithmSelectionForm
                collection={numbers}
                setCollection={setNumbers}
              />
            </div>
            <div className="array-display">
              <ArrayDisplay collection={numbers} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
