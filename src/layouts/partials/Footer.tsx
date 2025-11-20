import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <p className="footer__text">
            &copy; {new Date().getFullYear()} Algo Playground. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
