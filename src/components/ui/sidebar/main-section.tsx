import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "../sidebar";
import {
  ChevronsUpDown,
  Cloud,
  FileDown,
  Layers2,
  LayoutDashboardIcon,
  Podcast,
  ReceiptIcon,
  ShoppingBag,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";
import { useAuthStore } from "@/modules/auth/store/index.store";

type SidebarItem = {
  title: string;
  url: string;
  icon: React.ElementType;
  children?: SidebarItem[];
  key?: string;
};

const items: SidebarItem[] = [
  // {
  //   title: "Dashboard",
  //   url: "/dashboard",
  //   icon: LayoutDashboardIcon,
  //   key: "admin",
  // },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon,
    key: "seller",
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: ShoppingBag,
    key: "seller",
  },
  {
    title: "Bulk Upload",
    url: "/dashboard/products/bulk-upload",
    icon: Cloud,
    key: "seller",
  },
  {
    title: "Orders",
    url: "/dashboard/orders",
    icon: ReceiptIcon,
    key: "seller",
  },

  {
    title: "Merchants",
    url: "/dashboard/merchants",
    icon: Users,
    key: "admin",
  },
  {
    title: "Ads",
    url: "/dashboard/ads",
    icon: Podcast,
    key: "admin",
  },
  {
    title: "Types",
    url: "/dashboard/types",
    icon: Layers2,
    key: "admin",
  },
  {
    title: "Customer Support",
    url: "/dashboard/customers-support",
    icon: Users,
    key: "admin",
  },

  {
    title: "Financial",
    url: "/financial",
    icon: LayoutDashboardIcon,
    key: "seller",
    children: [
      {
        title: "Payment Method",
        url: "/dashboard/financial/payments",
        icon: LayoutDashboardIcon,
        key: "seller",
      },
      {
        title: "Payment History",
        url: "/dashboard/financial/payment-history",
        icon: LayoutDashboardIcon,
        key: "seller",
      },
      {
        title: "Widthdraw",
        url: "/dashboard/financial/withdraw",
        icon: LayoutDashboardIcon,
        key: "seller",
      },
    ],
  },
  {
    title: "Withdrawal",
    url: "/dashboard/withdrawals",
    icon: FileDown,
    key: "admin",
  },
];

const MainSection = () => {
  const { pathname } = useLocation();
  const { user } = useAuthStore((state) => state);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Apps</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            if (item.children) {
              if (item.key !== user?.role) return;

              return (
                <Collapsible className="group/collapsible" key={item.title}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className="flex cursor-pointer items-center justify-between"
                        isActive={pathname.includes(item.url)}
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="size-4" /> {item.title}
                        </div>
                        <ChevronsUpDown />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.title}>
                          <SidebarMenuButton
                            asChild
                            tooltip={child.title}
                            isActive={
                              !pathname.endsWith(child.url) &&
                              pathname.includes(child.url)
                                ? false
                                : pathname.includes(child.url)
                            }
                          >
                            <Link className="py-5" to={child.url}>
                              <child.icon /> {child.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              );
            }

            if (item.key !== user?.role) return;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={
                    item.url === "/dashboard"
                      ? pathname.endsWith(item.url)
                      : pathname.includes(item.url)
                  }
                >
                  <Link to={item.url}>
                    <item.icon /> {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default MainSection;
