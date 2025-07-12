import { ModeToggle } from "../../mode-toggle";
import { SidebarTrigger } from "../sidebar";

export default function Navbar() {
  return (
    <header className="bg-sidebar sticky m-4 h-16 rounded-lg">
      <nav className="flex w-full items-center justify-between px-4 py-2">
        <SidebarTrigger size="icon" />
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          {/* <NavProfile /> */}
        </div>
      </nav>
    </header>
  );
}
