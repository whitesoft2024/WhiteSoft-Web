import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Technology from "./components/Technology/Tech";
import Choose from "./components/Choose/Choose";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Privacy/Privacy";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Careers from "./components/Career/Career";
import Web from "./components/Services/Web/web";
import Mobile from "./components/Services/Mobile/Mobile";
import Digital from "./components/Services/Digital/Digital";
import Uiux from "./components/Services/Uiux/Uiux";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Main />
              <Services />
              <Choose />
              <Technology />
              <Contact />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/web-development" element={<Web />} />
        <Route path="/mobile-app" element={<Mobile />} />
        <Route path="/digital-marketing" element={<Digital />} />
        <Route path="/ui-ux" element={<Uiux />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
