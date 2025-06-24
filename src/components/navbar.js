import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">
          Infinity Clubhouse
        </div>
        <ul className={`nav-menu ${isMenuActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/home" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/home" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/home" className="nav-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/home" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div className={`hamburger ${isMenuActive ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
