import type { RouteObject } from "react-router";
import LoginPage from "./pages/login";

export const authRoute: RouteObject[] =
    [
        {
            path: "/login",
            element: <LoginPage />
        }
    ]