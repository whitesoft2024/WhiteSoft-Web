import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Technology from "./components/Technology/Tech";
const App = () => {
  return (
    <>
      <Navbar />
       <div className="container">
        <Main />
        <Services/>
        <Technology/>
      </div>
    </>
  );
};

export default App;
