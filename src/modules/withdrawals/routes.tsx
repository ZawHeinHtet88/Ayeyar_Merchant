import RoleGuard from "@/middlewares/role-guard";
import type { RouteObject } from "react-router";
import WithdrawalList from "./pages/withdraw-list";

export const withdrawalRoute: RouteObject[] = [
  {
    path: "withdrawals",
    element: <RoleGuard role="admin" />,
    children: [
      {
        path: "",
        index: true,
        element: <WithdrawalList />,
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
