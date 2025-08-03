import { useAuthStore } from "@/modules/auth/store/index.store";
import UnauthorizedPage from "@/pages/unauthorized";
import { Outlet } from "react-router";
import AuthGuard from "./auth-guard";

export default function RoleGuard({role}:{role: "admin"|"seller"}) {
  const { user } = useAuthStore((state) => state);

  const isHasPermission = user?.role === role;

  if (!isHasPermission)
    return (
      <AuthGuard>
        <UnauthorizedPage />
      </AuthGuard>
    );

  return <Outlet />;
}
