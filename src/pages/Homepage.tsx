import { type FC } from "react";
import { Link } from "react-router-dom";
import { sortingStepGeneratorsTable } from "../utils";
import algorithmsInAction from "../assets/images/algorithmsInAction.gif";
// https://cdn-images-1.medium.com/max/564/1*qcn0d0W74ZC4duWXwgiTMA.gif

const Homepage: FC = () => {
  return (
    <>
      <section className="app">
        <div className="container">
          <div className="app__wrap">
            <div className="text-content text-center">
              <h1 className="app__title">Algo Playground</h1>
              <img className="app__image" src={algorithmsInAction} />
              <p className="app__description mt-2 mb-1">
                Explore and visualize various algorithms in action.
              </p>
              <p className="app__description">
                <mark className="text-bold">
                  Our goal isn't memorization, but understanding how algorithms
                  actually work.
                </mark>
              </p>
              <a className="btn btn-primary btn-icon" href={`#sorting`}>
                <i className="bi bi-search"></i>
                <span>Check out</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sorting" id="sorting">
        <div className="container">
          <div className="sorting__wrap">
            <div className="text-content text-center">
              <h2 className="app__title">Array Sorting Algorithms</h2>
              <p className="app__description">
                Explore and visualize various sorting algorithms.
              </p>
            </div>
            <ul className="sorting__list">
              {sortingStepGeneratorsTable.map((ssg, index) => {
                return (
                  <li className="sorting__item" key={`sort-${index}`}>
                    <div className="card sorting__item-card">
                      <div className="card-body">
                        <h5 className="card-title">{ssg.displayName}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link to={ssg.path} className="btn btn-outline-primary">
                          Check the {ssg.displayName}
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
