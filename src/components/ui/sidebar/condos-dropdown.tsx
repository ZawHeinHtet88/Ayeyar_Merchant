import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { Building, ChevronsUpDown } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const CondosDropdown = () => {
  const { user, changeCondo, selectedCondo } = useAuthStore();
  const { isMobile } = useSidebar();
  const navigate = useNavigate();

  const handleChangeCondo = async (condo: { _id: string; name: string }) => {
    if (condo._id === selectedCondo!._id) return;
    changeCondo(condo);
    navigate("/dashboard");
    toast.success("Condo Changed Successfully");
  };

  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size={"lg"}>
                <div className="bg-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Building className="size-4" />
                </div>
                <div className="flefx-1 grid text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {selectedCondo?.name}
                  </span>
                </div>{" "}
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-muted-foreground text-xs">
                Condos
              </DropdownMenuLabel>
              {user?.condos?.map((condo) => (
                <DropdownMenuItem
                  key={condo._id}
                  onClick={() => handleChangeCondo(condo)}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 p-2",
                    selectedCondo!._id === condo._id && "opacity-50",
                  )}
                  disabled={selectedCondo!._id === condo._id}
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <Building className="size-4 shrink-0" />
                  </div>
                  <span>{condo.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
