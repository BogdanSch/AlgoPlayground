import type { FC, ReactNode } from "react";
import { SCALE_COEFFICIENT } from "../../clientVariables";

interface IArrayDisplayProps {
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
    </div>
  );
};

export default ArrayDisplay;
