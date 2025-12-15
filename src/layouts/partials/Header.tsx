import type { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="header  py-3">
      <div className="container">
        <div className="header__wrap">
          <nav className="header__nav nav nav-pills">
            <ul className="header__list">
              <li className="header__item nav-item">
                <Link
                  className="header__link header__link--main nav-link"
                  to="/"
                >
                  <div className="header__link-wrap">
                    <i className="bi bi-infinity"></i>
                    Algo Playground
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
