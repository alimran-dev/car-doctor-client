import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-5">
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;