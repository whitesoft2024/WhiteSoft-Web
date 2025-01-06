import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h1>
          <span className="highlight">WHITESOFT ADS </span> & IT SUPPORT LLP
        </h1>

        <p>
          Welcome to <span className="highlight">WHITESOFT ADS</span>, your
          destination for all your IT needs in Kerala. As the leading IT company
          in Kerala, we are dedicated to giving you a wide range of services
          including website development, app development, digital marketing,
          search engine optimization services, media works, branding, and
          graphic designing. Our dedication to quality and technology sets us
          apart, making WHITESOFT ADS your suitable IT companion.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon"></div>
          <img className="main-img" src="./logo.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Main;
