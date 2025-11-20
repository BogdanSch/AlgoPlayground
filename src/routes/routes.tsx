import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";

import { Homepage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "home", element: <Homepage /> },
      //   { path: "about", element: <About /> },
      //   { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
