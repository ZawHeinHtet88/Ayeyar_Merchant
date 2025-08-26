import type { RouteObject } from "react-router";
import BulkUploadProduct from "./pages";

export const bulkUploadProductRoutes: RouteObject = {
  path: "bulk-upload",
  children: [
    {
      path: "",
      index: true,
      element: <BulkUploadProduct />,
    },
  ],
};
