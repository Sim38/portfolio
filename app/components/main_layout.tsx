import { Outlet } from "react-router";
import MainSideBar from "./main_sidebar";
import AnimatedBackground from "./animated-background/animated_layer";
import MobiileNavbar from "./mobile_hamburger_nav";

export default function MainLayout() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <AnimatedBackground />
      <MainSideBar className="hidden sm:flex sm:flex-1/4" />
      <MobiileNavbar className="sm:hidden" />
      <main className="sm:flex-3/4 sm:p-12 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
