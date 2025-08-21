import RoleGuard from "@/middlewares/role-guard";
import type { RouteObject } from "react-router";
import PaymentHistoryList from "./pages/payment-history-list";

export const paymentHistoryRoute: RouteObject[] = [
  {
    path: "payment-history",
    element: <RoleGuard role="seller" />,
    children: [
      {
        path: "",
        index: true,
        element: <PaymentHistoryList />,
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
