import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";

import { BubbleSortPage, Homepage, InsertionSortPage, MergeSortPage, SelectionSortPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "home", element: <Homepage /> },
    ],
  },
  {
    path: "/algorithms",
    element: <MainLayout />,
    children: [
      { path: "merge", element: <MergeSortPage /> },
      { path: "bubble", element: <BubbleSortPage/> },
      { path: "selection", element: <SelectionSortPage/> },
      { path: "insertion", element: <InsertionSortPage/> },
      // { path: "links", element: <SortingAlgorithms/> },
    ],
  },
]);
