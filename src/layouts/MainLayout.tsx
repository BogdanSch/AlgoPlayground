import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
