import type { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <section className="error not-found">
      <div className="container">
        <div className="error__wrap">
          <div className="error__card card">
            <div className="error__card-body card-body">
              <h1 className="error__title heading">404 - Page Not Found</h1>
              <p className="error__message">
                The page you are looking for does not exist. Please check the
                URL or return to the homepage.
              </p>
              <div className="mt-2">
                <Link className="btn btn-primary" to="/">
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
