import { useAuthStore } from "@/modules/auth/store/index.store";
import UnauthorizedPage from "@/pages/unauthorized";
import { Navigate, Outlet } from "react-router";
import AuthGuard from "./auth-guard";

export default function RoleGuard({ role }: { role: "admin" | "seller" }) {
  const { user, isAuthenticated } = useAuthStore((state) => state);

  const isHasPermission = user?.role === role;

  if (!isAuthenticated) return <Navigate to="/login" replace/>;
  if (!isHasPermission)
    return (
      <AuthGuard>
        <UnauthorizedPage />
      </AuthGuard>
    );

  return <Outlet />;
}
