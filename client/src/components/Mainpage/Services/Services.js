import React from "react";

const Services = () => {
  return (
    <div id="services" className="py-5 row text-white">
    <div className="text-center pb-3 container">

      <h2 className="pt-5">Services</h2>
      <p>I can take your project from concept to completion</p>

      <div className="row py-5 bg-dot-grid">

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 mx-auto">
          <div >
            <img className="img-thumbnail rounded-circle p-5" alt=''/>
            <div className="card-body">
              <h5 className="card-title">Full Service Design</h5>
              <p className="card-text">10 years experience designing a wide range of print and digital products. Together we can bring your idea to life!</p>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 mx-auto">
          <div >
          <img className="img-thumbnail rounded-circle p-5" alt=''/>
            <div className="card-body">
              <h5 className="card-title">Full-Stack Development</h5>
              <p className="card-text">From concept to completion I will be with you the entire way. </p>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 mx-auto">
          <div >
          <img className="img-thumbnail rounded-circle p-5" alt=''/>
            <div className="card-body">
              <h5 className="card-title">Illustration</h5>
              <p className="card-text">Ya... I can draw.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;
