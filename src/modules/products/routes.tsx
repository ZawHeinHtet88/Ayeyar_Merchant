import type { RouteObject } from "react-router";
import ProductListPage from "./pages/products-list";
import CreateProduct from "./pages/create-product";
import EditProduct from "./pages/edit-product";
import RoleGuard from "@/middlewares/role-guard";


export const productRoutes: RouteObject[] = [
    {
        path: "products",
        element : <RoleGuard role="seller"/>,
        children: [
            {
                path: "",
                index: true,
                element: <ProductListPage />,
            },
            {
                path: "create",
                element: <CreateProduct />,
            },
            {
                path: "edit/:id",
                element: <EditProduct />,
            },
        ],
    },
];
