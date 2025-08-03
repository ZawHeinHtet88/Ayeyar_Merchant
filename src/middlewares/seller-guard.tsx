import { useAuthStore } from "@/modules/auth/store/index.store";
import UnauthorizedPage from "@/pages/unauthorized";
import { Outlet } from "react-router";
import AuthGuard from "./auth-guard";

export default function SellerGuard() {
  const { user } = useAuthStore((state) => state);

  const isAdmin = user?.role === "seller";

  if (!isAdmin)
    return (
      <AuthGuard>
        <UnauthorizedPage />
      </AuthGuard>
    );

  return <Outlet />;
}
