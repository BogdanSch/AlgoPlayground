import { type FC } from "react";

const Homepage: FC = () => {
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
        </div>
      </div>
    </section>
  );
};

export default Homepage;
