import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from './ThemeToggle';
import "../css/Navbar.css";


function Navbar() {
    return(
        <header className="navbar">
            <nav className="nav-links">
                <Link className="nav-btn active" to="/">HOME</Link>
                <Link className="nav-btn" to="/work">WORK</Link>
                <Link className="nav-btn" to="/contact">CONTACT</Link>
                {/* <div className='header'>
                    <h3 style={{padding:'0px 10px 0px 0px'}}>Mode</h3>
                    <ThemeToggle />
                </div> */}
            </nav>
        </header>
    );
}

export default Navbar;