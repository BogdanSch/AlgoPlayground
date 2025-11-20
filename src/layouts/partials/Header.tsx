import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <a className="header__title" href="/">
            Algo Playground
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
