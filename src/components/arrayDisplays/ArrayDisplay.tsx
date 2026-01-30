import type { FC, ReactNode } from "react";
import { SCALE_COEFFICIENT, BLOCK_BASE_SIZE } from "../../clientVariables";

export interface IArrayDisplayProps {
  collection: number[];
  className?: string;
  id: string;
  children?: ReactNode;
  leftActiveIndices?: number[];
  rightActiveIndices?: number[];
}

const ArrayDisplay: FC<IArrayDisplayProps> = ({
  className,
  id,
  collection,
  children,
  leftActiveIndices,
  rightActiveIndices,
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
    </div>
  );
};

export default ArrayDisplay;
