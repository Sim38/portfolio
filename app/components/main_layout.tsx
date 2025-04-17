import { Outlet } from "react-router";
import MainSideBar from "./main_sidebar";
import AnimatedBackground from "./animated-background/animated_layer";

export default function MainLayout() {
  return (
    <div className="sm:flex sm:flex-row sm:h-screen">
      <AnimatedBackground />
      <MainSideBar className="sm:flex-1/4" />
      <main className="sm:flex-3/4 sm:p-12 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
