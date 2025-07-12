import { Navigate, BrowserRouter as Router, useRoutes } from "react-router-dom";

import { dashboardRoutes } from "./dashboard.routes";

import { Suspense } from "react";
import NotFoundPage from "../pages/not-found";
import { authRoute } from "@/modules/auth/routes";

const allRoutes = [
  ...authRoute,
  ...dashboardRoutes,
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  { path: "*", element: <NotFoundPage /> },
];

function RouterWrapper() {
  const routes = useRoutes(allRoutes);
  return routes;
}

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={"Loading..."}>
        <RouterWrapper />
      </Suspense>
    </Router>
  );
}
