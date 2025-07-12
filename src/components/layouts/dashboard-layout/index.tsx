import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "../../ui/sidebar";
import Navbar from "../../ui/navbar";
import { DashboardSidebar } from "../../ui/sidebar/index";

export default function DashboardLayout() {

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="h-[calc(100svh-16px)] overflow-hidden">
        <Navbar />
        <main className="z-10 h-full w-full overflow-auto px-4 pt-6 pb-4">
          <Outlet />
        </main>
        <footer className="my-2 text-center text-xs text-gray-500">
           &copy; <a target="_blank" href="https://connected.com.mm/">Ayeyar Group</a>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
