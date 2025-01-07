import React from "react";
import "./MobileNav.css";
import { Link, useNavigate } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const handleScrollTo = (id) => {
    navigate("/");
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
              <Link className="menu-item" to="/about">
                About
              </Link>
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
              <Link className="menu-item" to="/career">
                Career
              </Link>
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
