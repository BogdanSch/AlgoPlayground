import type { FC, ReactNode } from "react";
import { SCALE_COEFFICIENT } from "../../clientVariables";

interface IRecursiveTreeArrayDisplay {
  collection: number[];
  className?: string;
  id: string;
  children?: ReactNode;
  leftActiveIndices?: number[];
  rightActiveIndices?: number[];
  leftCollection: number[];
  rightCollection: number[];
  leftArrayActiveIndices?: number[];
  rightArrayActiveIndices?: number[];
}

const RecursiveTreeArrayDisplay: FC<IRecursiveTreeArrayDisplay> = ({
  className,
  id,
  collection,
  children,
  leftActiveIndices,
  rightActiveIndices,
  leftCollection,
  rightCollection,
  leftArrayActiveIndices,
  rightArrayActiveIndices,
}) => {
  return (
    <div className={`array-display${className ? ` ${className}` : ``}`} id={id}>
      {children}
      <ul className="array-display__list">
        {collection.length > 0 ? (
          collection.map((item, index) => {
            let isLeftActive: boolean =
              leftActiveIndices?.includes(index) ?? false;
            let isRightActive: boolean =
              rightActiveIndices?.includes(index) ?? false;

            return (
              <li className={"array-display__item"} key={index}>
                <div
                  className={`array-display__item-trend ${
                    isLeftActive ? " left-active" : ""
                  }${isRightActive ? " right-active" : ""}`}
                  style={{ height: SCALE_COEFFICIENT * Math.abs(item) + 24 }}
                >
                  {item}
                </div>
                <span className="array-display__item-index">{index}</span>
              </li>
            );
          })
        ) : (
          <p>No data to display</p>
        )}
      </ul>
      <div className="array-display__sub-displays mt-4">
        <ul className="array-display__list card">
          {leftCollection.length > 0 ? (
            leftCollection.map((item, index) => {
              let isActive: boolean =
                leftArrayActiveIndices?.includes(index) ?? false;

              return (
                <li className={"array-display__item"} key={index}>
                  <div
                    className={`array-display__item-trend ${
                      isActive ? " left-active" : ""
                    }`}
                    style={{ height: SCALE_COEFFICIENT * Math.abs(item) + 24 }}
                  >
                    {item}
                  </div>
                  <span className="array-display__item-index">{index}</span>
                </li>
              );
            })
          ) : (
            <p>No left hand data to display</p>
          )}
        </ul>
        <ul className="array-display__list card">
          {rightCollection.length > 0 ? (
            rightCollection.map((item, index) => {
              let isActive: boolean =
                rightArrayActiveIndices?.includes(index) ?? false;
              return (
                <li className={"array-display__item"} key={index}>
                  <div
                    className={`array-display__item-trend ${
                      isActive ? " right-active" : ""
                    }`}
                    style={{ height: SCALE_COEFFICIENT * Math.abs(item) + 24 }}
                  >
                    {item}
                  </div>
                  <span className="array-display__item-index">{index}</span>
                </li>
              );
            })
          ) : (
            <p>No right hand data to display</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecursiveTreeArrayDisplay;
