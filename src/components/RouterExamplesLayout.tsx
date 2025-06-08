import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer";
import {Outlet} from "react-router";
import ExampleSection from "./ExampleSection.tsx";

const RouterExamplesLayout = () => {
    return (
        <>
        <HeaderResponsive/>
            <HeaderResponsive/>
            <div className="container mx-auto min-h-[95vh] pt-24">
             <Outlet/>
            </div>
            <ExampleSection/>
            <Footer/>
        </>
    )
}

export default RouterExamplesLayout;