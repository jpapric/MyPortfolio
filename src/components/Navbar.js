import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="brand" onClick={close}>
          Jovana Paprić
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <NavLink className={linkClass} to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink className={linkClass} to="/work" onClick={close}>
            Work
          </NavLink>
          <NavLink className={linkClass} to="/contact" onClick={close}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
