import type { RouteObject } from "react-router";
import PaymentListPage from "./pages/payment-list";
import CreatePayment from "./pages/create-payment";
import EditPayment from "./pages/edit-payment";

export const paymentRoutes: RouteObject[] = [
  {
    path: "payments",
    element: <PaymentListPage />,
  },
  {
    path: "payments/create",
    element: <CreatePayment />,
  },
  {
    path : "payments/edit/:id",
    element: <EditPayment />,
  }
];
