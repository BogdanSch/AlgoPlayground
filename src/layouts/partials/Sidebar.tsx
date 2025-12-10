import type { FC } from "react";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
    return <aside className="sidebar">
        <ul>
            <li><Link className="Pages" to="/algorithms/bubble">Bubble Sort</Link></li>
            <li><Link className="Pages" to="/algorithms/insertion">Insertion Sort</Link></li>
            <li><Link className="Pages" to="/algorithms/merge">Merge Sort</Link></li>
            <li><Link className="Pages" to="/algorithms/selection">Selection Sort</Link></li>
        </ul>
      </aside>
}

export default Sidebar;