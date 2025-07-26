import type { RouteObject } from "react-router";
import ProductListPage from "./pages/products-list";
import CreateProduct from "./pages/create-product";


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
            // {
            //     path: "edit/:id",
            //     element: <EditDelivery />,
            //     meta: { resource: "delivery", action: "update" },
            // },
        ],
    },
];
