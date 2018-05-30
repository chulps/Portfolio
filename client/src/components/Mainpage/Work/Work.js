import React from "react";
import "./Work.css";
import work from "./work.json";



const Work = () => {
  return (
    <div id="work" className="vh-100 pt-5 mt-md-5 text-white text-center" data-offset="5">
      
      <div className="container px-0">

        <h2 className="pb-5 mt-0 mt-md-5">Recent Work</h2>

        <div className="row justify-content-between">
        {work.map((project) => {
            return(
              <a key={project.id} href={project.href} className='align-self-center bg-dot-grid text-white col-10 col-md-4 offset-1 offset-md-0 col-lg-3 py-5 mb-5'>
              <div className='col-12'>
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
