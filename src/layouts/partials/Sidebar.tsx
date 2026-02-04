import type { FC } from "react";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link className="sidebar__link" to="/algorithms/bubble">
              Bubble Sort
            </Link>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to="/algorithms/insertion">
              Insertion Sort
            </Link>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to="/algorithms/merge">
              Merge Sort
            </Link>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to="/algorithms/selection">
              Selection Sort
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
