import React from "react";
import "./Work.css";


const Work = () => {
  return (
    <div id="work" className="py-5 bg-transparent row text-white">
      
      <div className="text-center container">

        <h2 className="pb-3 py-5">Recent Work</h2>

        <div className="row bg-dot-grid p-5">

          <a href="https://roastr-app.herokuapp.com/" target="blank" className="text-white col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 mx-auto">
            <div >
              <img className="img-thumbnail rounded-circle p-5" alt=''/>
              <div className="card-body">
                <h5 className="card-title">Roaster</h5>
                <p className="card-text">Roast your friends with this fun social App built using React.js and Bootstrap</p>
              </div>
            </div>
          </a>

          <a href="https://chulps.github.io/Crystal-Game/" target="blank" className="text-white col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 mx-auto">
            <div >
            <img className="img-thumbnail rounded-circle p-5" target="blank" alt=''/>
              <div className="card-body">
                <h5 className="card-title">Crystal Game</h5>
                <p className="card-text">A fun little math game for nerds built with Bootstrap and JQuery</p>
              </div>
            </div>
          </a>

          <a href="https://chulps.github.io/Cholors/" className="text-white col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 mx-auto">
            <div >
            <img className="img-thumbnail rounded-circle p-5" alt=''/>
              <div className="card-body">
                <h5 className="card-title">Cholors</h5>
                <p className="card-text">Random color scheme generator. There are others like it but this one is mine!</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
