import React from "react";
import ParticlesComp from "./ParticlesComp";
import Logo from "../../Logo";
 
const Hero = () => {
  
  return (
    
    <div id='hero' className='row filter-glow mb-5'>
      <div className='container-fluid'>
            <div className='d-flex justify-content-center w-100 h-100 position-absolute'>
              <div className='align-self-center mx-auto mb-5 pb-5 text-center text-white text-glow-white  bg-dot-grid p-5'>
                <div className='jiggle'>
                  <Logo />
                </div>
                <p>Chuck Howard</p>
                <div className='down filter-glow'></div>
              </div>              
            </div>
        <ParticlesComp/>
      </div>
      
    </div>
  ); 
}

export default Hero;
