import React from "react";
import "./MobileNav.css";
const MobileNav = ({ isOpen, toggleMenu }) => {
  
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={() => toggleMenu()}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./public/logo.png" alt="" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">About</a>
            </li>
            <li>
              <a className="menu-item">Services</a>
            </li>
            <li>
              <a className="menu-item">Career</a>
            </li>
            <li>
              <a className="menu-item">Contact Us</a>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
