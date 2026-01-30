import type { FC, ReactNode } from "react";
import { BLOCK_BASE_SIZE, SCALE_COEFFICIENT } from "../../clientVariables";

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
      {collection.length > 0 ? (
        <ul className="array-display__list">
          {collection.map((item, index) => {
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
                  style={{
                    height:
                      SCALE_COEFFICIENT * Math.abs(item) + BLOCK_BASE_SIZE,
                  }}
                >
                  {item}
                </div>
                <span className="array-display__item-index">{index}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No data to display</p>
      )}
      <div className="array-display__sub-displays mt-4">
        {leftCollection.length > 0 ? (
          <ul className="array-display__list card">
            {leftCollection.map((item, index) => {
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
            })}
          </ul>
        ) : (
          <p>No left hand data to display</p>
        )}
        {rightCollection.length > 0 ? (
          <ul className="array-display__list card">
            {rightCollection.map((item, index) => {
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
            })}
          </ul>
        ) : (
          <p>No right hand data to display</p>
        )}
      </div>
    </div>
  );
};

export default RecursiveTreeArrayDisplay;
