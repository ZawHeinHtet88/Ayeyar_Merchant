import RoleGuard from "@/middlewares/role-guard";
import type { RouteObject } from "react-router";
import WithDrawList from "./pages/withdraw-list";

export const withdrawRoute: RouteObject[] = [
  {
    path: "withdraw",
    element: <RoleGuard role="seller" />,
    children: [
      {
        path: "",
        index: true,
        element: <WithDrawList />,
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
