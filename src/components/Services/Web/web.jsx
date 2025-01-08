import React from "react";
import "./Web.css";

const Web = () => {
  return (
    <div className="web-dev-container">
      <h1>Web Development</h1>
      <p className="web-dev-intro">
        At <strong>Whitesoft Ads</strong>, we pride ourselves on being the best
        web design agency in Kerala, offering a wide range of services to meet
        your unique business needs.
      </p>
      <div className="web-dev-content">
        <div className="web-dev-left">
          <div className="shade"></div>
          <img
            src="./webdev.png"
            alt="Web Development"
            className="web-dev-image"
          />
        </div>
        <div className="web-dev-right">
          <h2>Web Design Services</h2>
          <p>
            Our team of experienced designers specializes in creating visually
            impressive, user-friendly websites that leave a lasting impression
            on your visitors. We ensure your website represents your brand in
            the best possible way.
          </p>

          <h2>Web Development</h2>
          <p>
            We are not just a web design company; we are a complete web
            development solution provider. Our developers use the latest
            technologies to build websites that are not only beautiful but also
            functional and highly responsive.
          </p>
        </div></div>
          <div className="web-dev-bottom">
            <h2>Web Marketing</h2>
            <p>
              In today's competitive digital landscape, having a website is not
              enough. We provide web marketing services to help you reach your
              target audience and drive traffic to your site. From SEO
              optimization to social media marketing, we have you covered.
            </p>

            <h2>SEO-Friendly Websites</h2>
            <p>
              We optimize every website for visibility in the online world. Our
              SEO experts ensure your website ranks well for relevant keywords,
              attracting organic traffic and growing your online presence.
            </p>

            <h2>Responsive Design</h2>
            <p>
              With the increasing number of mobile users, having a responsive
              website is crucial. Whitesoft Ads ensures your website looks and
              functions flawlessly on all devices, providing a seamless user
              experience.
            </p>
          </div>
        </div>
      
    
  );
};

export default Web;
