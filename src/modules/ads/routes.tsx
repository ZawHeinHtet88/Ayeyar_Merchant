import RoleGuard from "@/middlewares/role-guard";
import type { RouteObject } from "react-router";
import AdsListPage from "./pages/ads-list";


export const adsRoutes: RouteObject[] = [
    {
        path: "ads",
        element : <RoleGuard role="admin"/>,
        children: [
            {
                path: "",
                index: true,
                element: < AdsListPage/>,
            },
           
        ],
    },
];
