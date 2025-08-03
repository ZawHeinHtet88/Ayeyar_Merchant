import type { RouteObject } from "react-router";
import OrdersListPage from "./pages/orders-list";
import RoleGuard from "@/middlewares/role-guard";

export const orderRoutes: RouteObject[] = [
  {
    path: "orders",
    element: <RoleGuard role="seller" />,
    children: [
      {
        path: "",
        index: true,
        element: <OrdersListPage />,
      },
      //   {
      //     path: "create",
      //     element: <CreateProduct />,
      //   },
      //   {
      //     path: "edit/:id",
      //     element: <EditProduct />,
      //   },
    ],
  },
];
