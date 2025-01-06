import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h3>Get in Touch</h3>
        <h1>
          Let’s discuss on <span>something cool</span> together
        </h1>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Enter email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">
          Send <span>→</span>
        </button>
      </form>
      <div className="shade"></div>
    </div>
    
  );
};

export default Contact;
