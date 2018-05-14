import React from "react";
import "./skills.css";
import logo from "./logo.json";

const Skills = () => {
  return (
    <div id="skills" className="py-5 bg-dot-grid text-white">
      <div className="container">
      <div className="text-center pb-3 mt-5">
        <h2>Skills</h2>
      </div>

      <div className="row justify-content-between">
        {logo.map((element) => {
          return(
            <div key={element.id}
              className="d-inline mx-auto">
              <img height={120} src={element.image} alt=""/>
            </div>
          );
        })}
        
      </div>
      <div className="text-center">
        <button className="btn btn-dark btn-lg mx-auto">
          Let's build something new!
        </button>
      </div>
      </div>
    </div>
  );
};

export default Skills;
