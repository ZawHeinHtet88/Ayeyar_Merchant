import type { RouteObject } from "react-router";
import { paymentRoutes } from "./paymentMethod/routes";
import { paymentHistoryRoute } from "../payment-history/routes";
import { withdrawRoute } from "../withdraws/routes";

export const financialRoutes: RouteObject[] = [
  {
    path: "financial",
    children: [...paymentRoutes, ...paymentHistoryRoute, ...withdrawRoute],
  },
];
