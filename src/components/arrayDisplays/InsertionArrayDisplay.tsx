import type { FC } from "react";
import { BLOCK_BASE_SIZE, SCALE_COEFFICIENT } from "../../clientVariables";
import type { IArrayDisplayProps } from "./ArrayDisplay";

interface IInsertionArrayDisplay extends IArrayDisplayProps {
  temporaryElement?: number;
}

const InsertionArrayDisplay: FC<IInsertionArrayDisplay> = ({
  className,
  id,
  collection,
  children,
  leftActiveIndices,
  rightActiveIndices,
  temporaryElement,
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
      {temporaryElement !== undefined && (
        <div className="array-display__temp card mt-5">
          <div className="card-body">
            <p className="card-text">
              Element: <span className="array-display__temp-value">{temporaryElement}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsertionArrayDisplay;
