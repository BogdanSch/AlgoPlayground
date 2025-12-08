import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";

import { Homepage, MergeSortPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "home", element: <Homepage /> },
      { path: "algorithms/merge", element: <MergeSortPage /> },
      //   { path: "about", element: <About /> },
      //   { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
