import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Technology from "./components/Technology/Tech";
import Choose from "./components/Choose/Choose";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Routes } from "react-router-dom";
const App = () => {
  return (
   <>
      <Navbar />
      <div className="container">
        <Main />
        <Services />
        <Choose />
        <Technology />
        <Contact />
        <Footer/>
      </div>
      </>
  );
};

export default App;
