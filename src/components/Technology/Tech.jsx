import React from "react";
import "./Tech.css";

const technologies = [
  {
    name: "Flutter",
    type: "Mobile",
    logo: "./flutter.png",
  },
  {
    name: "MySQL",
    type: "Database",
    logo: "./mysql.png",
  },
  
  {
    name: "Node.js",
    type: "Backend",
    logo: "./node.png",
  },
  {
    name: "MongoDB",
    type: "Database",
    logo: "./mongo.png ",
  },
  { 
    name: "JavaScript",
    type: "Frontend", 
    logo: "./js.png" },

  {
    name: "React",
    logo: "./react.png",
    type: "Frontend",
  },
  {
    name: "Laravel",
    logo: "./laravel.png",
    type: "Backend- API",
  },
  {
    name: "Angular",
    logo: "./angular.png",
    type: "Frontend",
  },
];

function Technology() {
  const repeatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="technologies-section">
      <h3>Technologies</h3>
      <h1>
        <span className="highlight">Technologies</span> That We Use
      </h1>
      <div className="carousel">
        <div className="carousel-track">
          {repeatedTechnologies.map((tech, index) => (
            <div className="card" key={index}>
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="card-logo"
              />
              <h2>{tech.name}</h2>
              <p>{tech.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
