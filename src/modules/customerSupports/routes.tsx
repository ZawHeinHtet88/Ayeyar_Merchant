import RoleGuard from "@/middlewares/role-guard";
import type { RouteObject } from "react-router";
import CustomerSupportChatList from "./pages/customer-list";
import SupportChatRoom from "./pages/support-chat-room";

export const customerSupportRoutes: RouteObject[] = [
  {
    path: "customers-support",
    element: <RoleGuard role="admin" />,
    children: [
      {
        path: "",
        index: true,
        element: <CustomerSupportChatList />,
      },
      {
        path: ":id",
        element: <SupportChatRoom />,
      },
    ],
  },
];
