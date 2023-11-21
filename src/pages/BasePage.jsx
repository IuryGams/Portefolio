import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

export default function BasePage () {
    return(
        <>
            <Header/>
            <Outlet />
            <Footer />
        </>
    )
} 