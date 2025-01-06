import React, { useState } from "react";
import "./Navbar.css";

import { IoMenu } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import MobileNav from "./MobileNav/MobileNav.jsx";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./logo.png" alt="" />
          
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

          <button class="menu-btn" onClick={toggleMenu}>
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
