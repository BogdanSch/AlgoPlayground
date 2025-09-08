import type { FC } from "react";
import { SCALE_COEFFICIENT } from "../clientVariables";

interface IArrayDisplayProps {
  collection: number[];
}

const ArrayDisplay: FC<IArrayDisplayProps> = ({ collection }) => {
  return (
    <ul className="array-display__list">
      {collection.map((item, index) => {
        return (
          <li className="array-display__item" key={index}>
            <div
              className={"array-display__item-trend"}
              style={{ height: SCALE_COEFFICIENT * item }}
            >
              {item}
            </div>
            <span className="array-display__item-index">{index}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ArrayDisplay;
