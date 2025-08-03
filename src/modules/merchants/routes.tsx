import RoleGuard from "@/middlewares/role-guard";
import type { RouteObject } from "react-router";
import CreateMerchant from "./pages/create-merchant";
import MerchantList from "./pages/merchant-list";
import EditMerchant from "./pages/edit-merchant";


export const merchantRoutes: RouteObject[] = [
    {
        path: "merchants",
        element : <RoleGuard role="admin"/>,
        children: [
            {
                path: "",
                index: true,
                element: <MerchantList />,
            },
            {
                path: "create",
                element: <CreateMerchant />,
            },
            {
                path: "edit/:id",
                element: <EditMerchant />,
            },
        ],
    },
];
