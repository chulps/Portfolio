import React from "react";
import logo from "./logo.json";

const Skills = () => {
  return (
    <div id="skills" className="py-5 text-white">
      <div className="container">
      <div className="text-center py-5">
        <h2>Skills</h2>
        <p>Here are some of the things that I know</p>
      </div>

      <div className="row justify-content-around bg-dot-grid p-5">
        {logo.map((element) => {
          return(
            <div key={element.id}
              className="mx-4 mb-5">
              <img height={70} src={element.image} alt=""/>
            </div>
          );
        })}
        
      </div>
      <div className="text-center">
        <button href="https://github.com/chulps" target="blank" className="btn btn-danger btn-lg mx-auto mt-5" href='#contact'>
          Check out my Github
        </button>
      </div>
      </div>
    </div>
  );
};

export default Skills;
