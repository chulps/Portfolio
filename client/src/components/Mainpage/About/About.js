import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-white box-glow p-5">
      <div className="row text-primary">  

        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center'>   
          <img className='circle hover-obj img-fluid' href='' src='https://i.imgur.com/H8IrVLl.jpg'/>                   
        </div>

        <div className='mt-5 col-xs-12 mt-xs-5 col-sm-12 mt-sm-5 col-md-6 mt-md-0 col-lg-4 col-xl-4'>
          <h2>I'm probably somewhere... <br/>wearing a headband.</h2>   
          <p>I'm a Full-Stack Web Developer, Designer & Illustrator. 
          I currently live in Los Angeles. Welcome to my portfolio website. </p>   
        </div>


      </div>
     
    </div>
  );
};

export default About;
