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
        <Route path="/careers" element={<Careers/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
