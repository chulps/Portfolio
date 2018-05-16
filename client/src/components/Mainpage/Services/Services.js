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
              <p className="card-text">Let's build responsive sites and apps.</p>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3 mx-auto">
          <div >
          <img className="img-thumbnail rounded-circle p-5" alt=''/>
            <div className="card-body">
              <h5 className="card-title">Illustration</h5>
              <p className="card-text">I'm artistic!</p>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-5'>I'm still working on this site and I haven't finished this section yet, so... here is a link to my old portfolio site</p>
      <a href="https//:www.chulps.space" target="blank"className="btn btn-lg btn-dark mx-auto">Check it out</a>
    </div>
  </div>
  );
};

export default Services;
