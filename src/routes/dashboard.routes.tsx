
import type { RouteObject } from "react-router";
import DashboardLayout from "../components/layouts/dashboard-layout";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        path: "",
        element: "/dashboard"
      }

    ],
  },
];
