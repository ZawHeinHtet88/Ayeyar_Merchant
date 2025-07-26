import { ModeToggle } from "../../mode-toggle";
import { SidebarTrigger } from "../sidebar";
import Navprofile from "./nav-profile";

export default function Navbar() {
  return (
    <header className="bg-sidebar sticky m-4 h-16 rounded-lg">
      <nav className="flex w-full items-center justify-between px-4 py-2">
        <SidebarTrigger size="icon" />
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <Navprofile />
        </div>
      </nav>
    </header>
  );
}
