
import type { RouteObject } from "react-router";
import DashboardLayout from "../components/layouts/dashboard-layout";
import AuthGuard from "@/middlewares/auth-guard";
import { productRoutes } from "@/modules/products/routes";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      ...productRoutes
    ],
  },
];
