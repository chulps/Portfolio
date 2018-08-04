import React from "react";

const About = () => {
  return (
    <div id="about" className="text-primary bg-white py-5">
      <div className="container h-100 pb-md-0 mb-md-5">  
      <h2 className="py-5 text-center mb-0">About</h2>

        <div className='row m-0 h-50'>
        <div className='bg-dot-blue col-10 offset-1 col-md-6 offset-md-0 text-center'>   
          <img className='circle hover-obj img-fluid' href='' alt='' src='https://i.imgur.com/H8IrVLl.jpg'/>                   
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
