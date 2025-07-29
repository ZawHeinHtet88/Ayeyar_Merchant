import type { RouteObject } from "react-router";
import Home from "./pages";

export const homeRoute: RouteObject[] = [
  {
    path: "",
    index: true,
    element: <Home />,
  },
];