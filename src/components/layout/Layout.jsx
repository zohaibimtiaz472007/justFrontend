/* eslint-disable react/prop-types */
import { useContext } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import myContext from "../../context/myContext";

const Layout = ({children}) => {
    const context = useContext(myContext)
    // const loading = context;
    return (
        <div>
            <Navbar/>
            <div className="main-content min-h-screen">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;