import React from "react";

const Services = () => {
  return (
    <div id="services" className="py-5 row text-white vh-100">
    <div className="text-center pb-3 container">

      <h2 className="pb-3 py-5">Services</h2>

      <div className="row py-5 bg-dot-grid">

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 mx-auto">
          <div >
            <img className="img-thumbnail rounded-circle p-5" alt=''/>
            <div className="card-body">
              <h5 className="card-title">Full Service Design</h5>
              <p className="card-text">10 years experience. What will we come up with?</p>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 mx-auto">
          <div >
          <img className="img-thumbnail rounded-circle p-5" alt=''/>
            <div className="card-body">
              <h5 className="card-title">Full-Stack Development</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 mx-auto">
          <div >
          <img className="img-thumbnail rounded-circle p-5" alt=''/>
            <div className="card-body">
              <h5 className="card-title">Animation</h5>
              <p className="card-text">I can do stuff</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#contact" className="btn btn-lg btn-dark mx-auto mt-5">Request service</a>
    </div>
  </div>
  );
};

export default Services;
