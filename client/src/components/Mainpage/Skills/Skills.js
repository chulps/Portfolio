import React from "react";
import logo from "./logo.json";

const Skills = () => {
  return (
    <div id="skills" className="vh-100 pt-5 mt-md-5 text-white">
        <div className="container px-0">
        <div className='col-10 offset-1 col-md-12 offset-md-0 px-0'>
        <div className="text-center pt-5">
          <h2>Skills</h2>
          <p>Here are some of the things that I know</p>
        </div>

        <div className="row justify-content-around bg-dot-grid p-5">
          {logo.map((element) => {
            return(
              <div key={element.id}
                className="m-3 hover-glow text-center text-no-wrap">
                <img height={60} src={element.image} alt=""/>
                <p><small>{element.title}</small></p>
              </div>
            );
          })}
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
