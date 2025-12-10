import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Sidebar from "./partials/Sidebar";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <div id="content">
      <main className="main">
        <Outlet />
      </main>
      <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
