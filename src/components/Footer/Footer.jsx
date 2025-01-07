import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-header">
          <h1>Connecting for Innovative Solutions</h1>
          <p>
            Our mission is to link customers with creative IT solutions. Let's
            connect today for a brighter tomorrow!
          </p>
        </div>
        <div className="footer-cta">
          <button className="get-quote-button">Get a Quote</button>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="./foot.png" alt="Logo" />
            <p>
              Whitesoft Ads & It Support LLP
              <br />
              KAKKANAD Ernakulam,
              <br />
              Kerala-682037
            </p>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => handleScrollTo("home")}>Home</li>
            <li>
              <Link className="item" to="/about">
                About
              </Link>
            </li>
            <li onClick={() => handleScrollTo("services")}>Services</li>
            <li>
              <Link className="item" to="/careers">
                Careers
              </Link>
            </li>
            <li onClick={() => handleScrollTo("contact")}>Contact Us</li>
            <li>
              <Link className="item" to="/terms">
                TermsandConditions
              </Link>
            </li>
            <li>
              <Link className="item" to="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
            <li>UI/UX Designing</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>HR : +91 79945 84544 </li>
            <li>Office : +91 95620 50524</li>
            <li>Email : whitesoftllp@gmail.com</li>
            <li>Email :whitesoft252@gmail.com </li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright">
        <p>
          Copyright © 2023 - <span>Whitesoft Ads & It Support LLP</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
