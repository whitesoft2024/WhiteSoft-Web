import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <a className="menu-item" onClick={() => handleScrollTo("home")}>
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleScrollTo("about")}>
                About
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => handleScrollTo("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleScrollTo("career")}>
                Career
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => handleScrollTo("contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
