import type { RouteObject } from "react-router";
import ProductListPage from "./pages/products-list";
import CreateProduct from "./pages/create-product";
import EditProduct from "./pages/edit-product";


export const productRoutes: RouteObject[] = [
    {
        path: "products",
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
