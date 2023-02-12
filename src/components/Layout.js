import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout(props) {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;