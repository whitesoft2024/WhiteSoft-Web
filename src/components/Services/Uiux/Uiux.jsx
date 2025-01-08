import React from "react";
import "./Uiux.css";

const Uiux = () => {
  return (
    <div className="uiux-container">
      <h1>UI/UX Design</h1>
      <p className="uiux-intro">
        At <strong>Whitesoft Ads</strong>, we specialize in crafting exceptional
        UI/UX designs that deliver visually stunning and user-friendly digital
        experiences.
      </p>
      <div className="uiux-content">
        <div className="uiux-left">
          <img src=" " alt="UI/UX Design" className="uiux-image" />
        </div>
        <div className="uiux-right">
          <h2>Creative Design Approach</h2>
          <p>
            Our creative team combines art and technology to deliver
            aesthetically pleasing and functional UI/UX designs. We ensure every
            design element aligns with your brand identity and goals.
          </p>

          <h2>User-Centric Designs</h2>
          <p>
            We prioritize user needs by crafting designs that provide intuitive
            navigation, responsive layouts, and seamless interactions. This
            ensures a superior user experience for your audience.
          </p>

          <h2>Wireframing & Prototyping</h2>
          <p>
            We create wireframes and prototypes to give you a clear vision of
            your digital product before development begins. Our iterative
            approach ensures the final design meets your expectations.
          </p>

          <h2>Responsive Design</h2>
          <p>
            With mobile-first strategies and responsive designs, we guarantee
            your website or app looks and performs perfectly across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uiux;
