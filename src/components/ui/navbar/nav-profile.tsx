import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { LogOutIcon, UserPen } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Button } from "../button";
import ImageAvatar from "../ImageAvatar";
import { getImageUrl } from "@/utils/image";

const NavProfile = () => {
  const { user, logout } = useAuthStore((state) => state);
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-4" asChild>
        <Button variant={"ghost"} className="flex items-center">
          <ImageAvatar
            src={getImageUrl({ resource: "user", fileName: user?.image }) || ""}
            alt={user?.name ?? "John Doe"}
          />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium ">
              {user?.name ?? "John Doe"}
            </span>
            <span className="text-muted-foreground truncate text-xs">
              {user?.email ?? "jd@gmail.com"}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={"bottom"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <ImageAvatar
              src={
                getImageUrl({
                  resource: "user",
                  fileName: user?.image ?? "",
                }) || ""
              }
              alt={user?.name ?? "John Doe"}
            />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {user?.name ?? "John Doe"}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {user?.email ?? "jd@gmail.com"}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to={`/dashboard/admins/edit/${user?._id}`}>
              <UserPen />
              Edit Account
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavProfile;
