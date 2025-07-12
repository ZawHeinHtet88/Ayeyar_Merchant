import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePolicy } from "@/hooks/use-policy";
import { ChevronsUpDown, Settings2Icon, WrenchIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

const items = [
  {
    title: "Parking Setting",
    url: "/dashboard/settings/parking",
    key: "parkingSetting",
  },

  {
    title: "Roles Setting",
    url: "/dashboard/settings/roles",
    key: "role",
  },
];

// in JSX

const SettingsSection = ({
  setIsCollapsed,
  isCollapsed,
}: {
  setIsCollapsed: (value: boolean) => void;
  isCollapsed: boolean;
}) => {
  const { pathname } = useLocation();
  const { canView } = usePolicy();

  const showDisplay = items?.some((item) => canView(item.key));

  if (!showDisplay) return;
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <Collapsible
            className="group/collapsible"
            open={!isCollapsed} // Control the state using open prop
            onOpenChange={(open) => {
              setIsCollapsed(!open); // Update the collapsible state
            }}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  className="flex cursor-pointer items-center justify-between"
                  isActive={pathname.includes("settings")}
                >
                  <div className="flex items-center gap-2">
                    <Settings2Icon className="size-4" /> Settings
                  </div>
                  <ChevronsUpDown />
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
            <CollapsibleContent>
              <SidebarMenuSub>
                {items.map(
                  (item) =>
                    canView(item.key) && (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          tooltip={item.title}
                          isActive={pathname.includes(item.url)}
                        >
                          <Link className="py-5" to={item.url}>
                            <WrenchIcon /> {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    ),
                )}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SettingsSection;
