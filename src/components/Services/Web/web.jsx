import React from "react";
import "./Web.css";

const Web = () => {
  return (
    <div className="web-development-container">
      <h1 className="web-development-title">Web Development</h1>
      <p className="web-development-description">
        At Whitesoft Ads, we pride ourselves on being the best web design agency
        in Kerala, and we offer a wide range of services to meet your unique
        business needs:
      </p>
      <div className="web-development-content">
        <div className="web-development-image">
          <img src=" " alt="Web Development" />
        </div>
        <div className="web-development-services">
          <div className="service-box">
            <h3>Web Design Services</h3>
            <p>
              Our team of experienced designers specializes in creating visually
              impressive, user-friendly websites that leave a lasting impression
              on your visitors. We understand that your website is your digital
              storefront, and we ensure it represents your brand effectively.
            </p>
          </div>
          <div className="service-box">
            <h3>Web Development</h3>
            <p>
              We are not just a web design company; we are a complete web
              development solution provider. Our developers use the latest
              technologies to build websites that are not only beautiful but
              also functional and highly responsive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
