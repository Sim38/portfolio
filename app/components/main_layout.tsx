import { Outlet } from "react-router";
import MainHeader from "./main_header";

export default function MainLayout() {
  return (
    <div>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
