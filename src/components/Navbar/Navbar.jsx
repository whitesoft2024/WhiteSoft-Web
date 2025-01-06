import React, { useState } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import MobileNav from "./MobileNav/MobileNav.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavigation = (id) => {
    navigate("/"); // Update URL if needed
    const section = document.getElementById(id); // Find section by ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
    if (openMenu) {
      setOpenMenu(false); // Close menu if open
    }
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./logo.png" alt="Logo" />
          <ul>
            <li>
              <a
                className="menu-item"
                onClick={() => handleNavigation("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => handleNavigation("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => handleNavigation("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => handleNavigation("career")}
              >
                Career
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => handleNavigation("contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span style={{ fontSize: "1.5rem" }}>
              {openMenu ? <FaWindowClose /> : <IoMenu />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
