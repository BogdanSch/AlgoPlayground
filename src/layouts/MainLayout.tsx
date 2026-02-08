import type { FC } from "react";
import { Outlet } from "react-router-dom";
import {Header, Footer, Sidebar} from "./partials";

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
