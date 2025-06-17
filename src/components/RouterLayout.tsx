import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer";
import {Outlet} from "react-router";
import {Toaster} from "sonner";

const RouterLayout = () => {
    return (
        <>
        <HeaderResponsive/>
            <HeaderResponsive/>
            <div className="container mx-auto min-h-[95vh] pt-24">
             <Outlet/>
            </div>
            <Footer/>
            <Toaster/>
        </>
    )
}

export default RouterLayout;