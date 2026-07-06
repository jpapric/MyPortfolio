import React from "react";
import "../css/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <span className="footer-name">Jovana Paprić</span>

        <nav className="footer-links">
          <a
            href="https://github.com/jpapric"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:jovana.papric2@gmail.com">Email</a>
        </nav>

        <span className="footer-copy">© {year} · All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
