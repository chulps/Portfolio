import React from "react";

const About = () => {
  return (
    <div id="about" className="text-primary bg-white py-5">
      <div className="container h-100 pb-md-0 mb-md-5">  
      <h2 className="py-5 text-center mb-0">About</h2>

        <div className='row m-0 h-50'>
        <div className='bg-dot-blue col-10 offset-1 col-md-6 offset-md-0 text-center'>   
          <img className='circle hover-obj img-fluid' href='' alt='' src={require('./chuck.jpg')}/>                   
        </div>

        <div className='text-center
                        text-md-left
                        p-0
                        pl-md-5
                        mt-5
                        mt-md-0
                        col-10
                        offset-1
                        offset-md-0
                        col-md-6'>
          <h4>I love my job.</h4>  
          <br/> 
          <p className='text-left'>
            Design leadership is my thing.
          </p> 
          <p> 
            Currently I work at Clicktool.com as Creative Director. 
            My focus here is to oversee the look and feel of all of our products and services with a very hands-on approach.
            Every day for me is a mix of design, coding, copy writing and animation.
            My favorite thing about working here my TEAM!
            They are brilliant and we've established a lot of trust with each other.
          </p>
        </div>

        </div>
      </div>
     
    </div>
  );
};

export default About;
