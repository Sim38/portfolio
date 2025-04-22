import { Outlet } from "react-router";
import MainSideBar from "./main_sidebar";
import AnimatedBackground from "./animated-background/animated_layer";
import MobiileNavbar from "./mobile_hamburger_nav";

export default function MainLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <AnimatedBackground />
      <MainSideBar className="hidden md:flex md:flex-1/4 pl-15" />
      <MobiileNavbar className="md:hidden" />
      <main className="sm:flex-3/4 sm:px-0 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
