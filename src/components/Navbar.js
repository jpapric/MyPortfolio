import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from './ThemeToggle';
import "../css/Navbar.css";


function Navbar() {
    return(
        <header className="navbar">
            <nav className="nav-links">
                <NavLink className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} to="/" end>HOME</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} to="/work">WORK</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} to="/contact">CONTACT</NavLink>
                {/* <div className='header'>
                    <h3 style={{padding:'0px 10px 0px 0px'}}>Mode</h3>
                    <ThemeToggle />
                </div> */}
            </nav>
        </header>
    );
}

export default Navbar;
