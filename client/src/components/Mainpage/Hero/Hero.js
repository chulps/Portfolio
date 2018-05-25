import React from 'react';
import ParticlesComp from './ParticlesComp';
import Social from './Social';
import California from './California';
import C from './C';

const Hero = () => {

  return (

    <div id='hero' className='row vh-100 mt-minus-4 text-white'>
      <div className='container-fluid'>
      
        <div className='filter-glow'>
          <ParticlesComp/>
        </div>
        
        <div className='row w-100 h-100 position-absolute px-3 z-100'>
          
          <California/>
          <C/>
          <Social />

        </div>
      </div>

    </div>
  );
}

export default Hero;
