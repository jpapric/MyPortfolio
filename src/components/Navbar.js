import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";


function Navbar() {
    return(
        <header className="navbar">
            <nav className="nav-links">
                <NavLink className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} to="/" end>HOME</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} to="/work">WORK</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} to="/contact">CONTACT</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;
