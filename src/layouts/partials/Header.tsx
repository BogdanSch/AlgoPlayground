import type { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="header d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="header__title nav-link" to="/">
            Algo Playground
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
