import type { RouteObject } from "react-router";
import { paymentRoutes } from "./paymentMethod/routes";

export const financialRoutes: RouteObject[] = [
  {
    path: "financial",
    children: [...paymentRoutes],
  },
];
