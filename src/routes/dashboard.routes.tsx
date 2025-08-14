
import type { RouteObject } from "react-router";
import DashboardLayout from "../components/layouts/dashboard-layout";
import AuthGuard from "@/middlewares/auth-guard";
import { productRoutes } from "@/modules/products/routes";
import { homeRoute } from '@/modules/home/routes';
import { orderRoutes } from "@/modules/orders/routes";
import { merchantRoutes } from "@/modules/merchants/routes";
import { adsRoutes } from "@/modules/ads/routes";
import { typeRoutes } from "@/modules/types/routes";
import { customerSupportRoutes } from "@/modules/customerSupports/routes";
import { financialRoutes } from "@/modules/finicial/routes";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      ...productRoutes,
      ...homeRoute,
      ...orderRoutes,
      ...merchantRoutes,
      ...adsRoutes,
      ...typeRoutes,
      ...customerSupportRoutes,
      ...financialRoutes
    ],
  },
];
