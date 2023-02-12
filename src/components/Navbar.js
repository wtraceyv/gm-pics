import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    // https://reactrouter.com/en/main/components/nav-link 
    let activeStyle = {
        textDecoration: "underline",
        textDecorationThickness: "2px",
        textDecorationColor: "#78b028",
        color: "white",
        fontSize: "x-large",
        borderRadius: "15px",
        margin: ".75em",
        padding: ".5em",
    };

    let normalStyle = {
        textDecoration: "none",
        color: "white",
        fontSize: "x-large",
        borderRadius: "15px",
        margin: ".75em",
        padding: ".5em",
    }

    return (
        <div className="navbar flex-inline">
            <NavLink 
                to='/' 
                style={({ isActive }) =>
                    isActive ? activeStyle : normalStyle 
                }
                className="page-links"
            >
                Instructions
            </NavLink>
            <NavLink 
                to='/naming-tool' 
                style={({ isActive }) =>
                    isActive ? activeStyle : normalStyle 
                }
                className="page-links"
            >
                Naming Tool
            </NavLink>
        </div>
    )
}

export default Navbar;