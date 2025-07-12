
import { Separator } from "../separator";
import { Sidebar, SidebarContent } from "../sidebar";
import MainSection from "./main-section";

export const DashboardSidebar = () => {
  return (
    <Sidebar variant="inset">
      <h4 className="text-primary text-xl text-center font-bold mb-4">Ayeyar Marketplace</h4>
      <Separator/>
      <SidebarContent>
        <MainSection />
        {/* <Separator />
        <SettingsSection
        
        /> */} 
      </SidebarContent>
    </Sidebar>
  );
};

