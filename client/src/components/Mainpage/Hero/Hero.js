import React from "react";
import ParticlesComp from "./ParticlesComp";
import Logo from "../../Logo";
 
const Hero = () => {
  
  return (
    
    <div id='hero' className='row filter-glow'>
      <div className='container-fluid'>
            <div className='d-flex justify-content-center w-100 h-100 position-absolute'>
              <div className='align-self-center mb-5 pb-5'>
                <Logo />
              </div>
            </div>
        <ParticlesComp/>
      </div>
      
    </div>
  ); 
}

export default Hero;
