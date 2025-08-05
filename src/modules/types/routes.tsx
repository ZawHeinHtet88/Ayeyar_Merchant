import RoleGuard from "@/middlewares/role-guard";
import type { RouteObject } from "react-router";
import TypeListPage from "./pages/type-list";

export const typeRoutes: RouteObject[] = [
  {
    path: "types",
    element: <RoleGuard role="admin" />,
    children: [
      {
        path: "",
        index: true,
        element: <TypeListPage />,
      },
    ],
  },
];
