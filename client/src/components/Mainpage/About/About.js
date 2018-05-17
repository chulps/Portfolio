import React from "react";

const About = () => {
  return (
    <div id="about" className="text-white py-5 mt-92">
      <div className="container">  
      <h2 className="py-5 text-center">About</h2>

        <div className='row'>
        <div className='bg-dot-grid col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center'>   
          <img className='circle hover-obj img-fluid' href='' alt='' src='https://i.imgur.com/H8IrVLl.jpg'/>                   
        </div>

        <div className='mt-5 col-xs-12 mt-xs-5 col-sm-12 mt-sm-5 col-md-6 mt-md-0 col-lg-4 col-xl-4'>
          <h3>I'm probably somewhere... <br/>wearing a headband.</h3>   
          <p>I'm a Full-Stack Web Developer, Designer & Illustrator. 
          I currently live in Los Angeles. Welcome to my portfolio website. </p>   
        </div>

        </div>
      </div>
     
    </div>
  );
};

export default About;
