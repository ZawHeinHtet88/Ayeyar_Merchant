
import type { RouteObject } from "react-router";
import OrdersListPage from "./pages/orders-list";


export const orderRoutes: RouteObject[] = [
  {
    path: "orders",
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
