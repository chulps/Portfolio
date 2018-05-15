import React from "react";
import "./Work.css";


const Work = () => {
  return (
    <div id="work" className="py-5 bg-transparent row">
      
      <div className="text-center container">

        <h2 className="pb-3 pt-5">Recent Work</h2>

        <div className="row bg-dot-grid">

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 mx-auto p-5">
            <div >
              <img className="img-thumbnail rounded-circle p-5" alt=''/>
              <div className="card-body">
                <h5 className="card-title">Roaster</h5>
                <p className="card-text">Roast your friends with this fun social App build using React.js</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 mx-auto p-5 mx-3">
            <div >
            <img className="img-thumbnail rounded-circle p-5" alt=''/>
              <div className="card-body">
                <h5 className="card-title">Crystal Game</h5>
                <p className="card-text">A fun little math game for nerds built with Bootstrap and JQuery</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 mx-auto p-5 mx-3">
            <div >
            <img className="img-thumbnail rounded-circle p-5" alt=''/>
              <div className="card-body">
                <h5 className="card-title">Cholors</h5>
                <p className="card-text">Random color scheme generator. There are others like it but this one is mine!</p>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <a href="#contact" className="btn btn-lg btn-dark mx-auto mt-5">See More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
