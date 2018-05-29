import React from "react";
import "./Work.css";
import work from "./work.json";



const Work = () => {
  return (
    <div id="work" className="py-0 pt-0 pt-md-5 bg-transparent row text-white" data-offset="5">
      
      <div className="text-center container p-0">

        <h2 className="pb-5 mt-0 mt-md-5">Recent Work</h2>

        <div className="row justify-content-around">
        {work.map((project) => {
            return(
              <a href={project.href} className='align-self-center bg-dot-grid text-white col-10 offset-1 offset-md-0 col-md-3 p-3'>
              <div class='col-12'>
                <img className='img-fluid' src={project.image} width={200} alt=''/>
              </div>
              <div className='col-12'>
                <div className="card-body px-0">
                  <p className="card-text">{project.description}</p>
              </div>
                </div>
              </a>
            );
          })}

        </div>
        <a href="https://www.chulps.space" target="blank" className="btn btn-danger btn-lg mx-auto mt-5">
          See older work.
        </a>
      </div>
    </div>
  );
};

export default Work;
