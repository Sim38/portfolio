import { Outlet } from "react-router";
import MainHeader from "./old_components/main_header_v1";
import MainSideBar from "./main_sidebar";

export default function MainLayout() {
  return (
    <div className="sm:flex sm:flex-row sm:h-screen">
      <MainSideBar className="sm:flex-1/4" />
      <main className="sm:flex-3/4 sm:p-12 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
