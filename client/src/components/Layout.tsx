import { Suspense } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import Loader from "./Loader/Loader";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <Suspense fallback={<Loader />}>
          <main className="flex-1 overflow-y-auto  background-pattern pt-20 ">
            <Outlet />
          </main>
        </Suspense>
      </div>
    </div>
  );
}
