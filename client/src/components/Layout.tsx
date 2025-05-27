import { Suspense } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import Loader from "./Loader/Loader";

export default function Layout() {
    return(
        <div>
            <Header />
            <div className="flex">
                <SideBar/>
                <Suspense fallback={<Loader />}>
                <main className="flex-1 h-[100vh] background-pattern pt-20">
<Outlet />
</main>
</Suspense>
        </div>
         </div>
    )
    
};
