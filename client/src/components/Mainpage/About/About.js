import React from "react";

const About = () => {
  return (
    <div id="about" className="vh-100 text-primary bg-white pb-5 pt-0 pt-md-5">
      <div className="container h-100 m0 pb-md-5 mb-md-5">  
      <h2 className="py-5 text-center">About</h2>

        <div className='row'>
        <div className='bg-dot-blue col-10 offset-1 offset-md-0 col-sm-10 col-md-6 col-lg-6 col-xl-6 text-center'>   
          <img className='circle hover-obj img-fluid' href='' alt='' src='https://i.imgur.com/H8IrVLl.jpg'/>                   
        </div>

        <div className='text-center text-md-left p-0 pl-md-5 mt-5 col-10 offset-1 offset-md-0 mt-sm-5 col-md-6 mt-md-0 col-lg-6 col-xl-6'>
          <h4>I can do Everything...</h4>  
          <br/> 
          <p className='text-left'>
              Well... I can't do EVERYTHING, but I can do a lot! 
              I'm a web developer, with a background in design, illustration, and animation.
              I wasn't born in Memphis but that's where I say I'm from. Now I call Los Angeles home.
          </p> 
          <p> I'm actively seeking a role as a web developer where I can use my creative experience to make a cooler, more beautiful internet.</p>
        </div>

        </div>
      </div>
     
    </div>
  );
};

export default About;
