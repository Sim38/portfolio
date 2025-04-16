import { Outlet } from "react-router";
import MainHeader from "./main_header";

export default function MainLayout() {
  return (
    <div>
      <MainHeader />
      <main className="p-8 sm:p-12">
        <Outlet />
      </main>
    </div>
  );
}
