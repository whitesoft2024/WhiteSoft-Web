import React from "react";
import "./Footer.css";

const Footer = () => {
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
              Identification Number:(LLPIN)ACB-6550
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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Career</li>
            <li>Events</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
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
            <li>HR : +91 8593833370</li>
            <li>Office : +91 8943627627</li>
            <li>Landline : 0480 2991234</li>
            <li>Email : whitesoftllp@gmail.com</li>
            <li>Email :whitesoft252@gmail.com </li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright">
        <p>
          Copyright © 2023 - Whitesoft Ads & It Support LLP. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
