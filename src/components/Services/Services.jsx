import React from "react";
import "./Services.css";

function Services() {
  return (
    <>
      <section id="services">
        <h2 className="heading"><span>Services</span> we offer :</h2>
        <div className="shade"></div>
        <div className="app-container">
          <div className="cards-grid">
            <div className="service-card">
              <div className="card-content">
                <div className="card-icon">
                  <img src="./web.png" alt="" className="card-iconsize" />
                </div>
                <h3 className="card-number">01</h3>
                <h2 className="card-title">Web Development</h2>
                <p className="card-description">
                  Transforming your ideas into outstanding websites that make a
                  lasting impact. Our web development expertise is your pathway to
                  online success.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-content">
                <div className="card-icon">
                  <img src="./mob.png" alt="" className="card-iconsize" />
                </div>
                <h3 className="card-number">02</h3>
                <h2 className="card-title">Web & Mobile App Development</h2>
                <p className="card-description">
                  Enhance your online impact with our mastery of Web and Mobile
                  Apps, Web Design, and UI/UX Excellence. We turn your ideas into
                  digital magic.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-content">
                <div className="card-icon">
                  <img src="./digi.png" alt="" className="card-iconsize" />
                </div>
                <h3 className="card-number">03</h3>
                <h2 className="card-title">Digital Marketing</h2>
                <p className="card-description">
                  From getting more clicks to turning them into real customers, we
                  are here as your trusted online growth partner. Build a powerful
                  online presence to make your business grow faster.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-content">
                <div className="card-icon">
                  <img src="./uiux.png" alt="" className="card-iconsize" />
                </div>
                <h3 className="card-number">04</h3>
                <h2 className="card-title">UI/UX Designing</h2>
                <p className="card-description">
                  Crafting digital experiences that are user-friendly, visually
                  compelling, and brand-enhancing. Create visually impressive user
                  interfaces now.
                </p>
                <div className="shade"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
