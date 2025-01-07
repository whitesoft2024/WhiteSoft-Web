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

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
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
        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
