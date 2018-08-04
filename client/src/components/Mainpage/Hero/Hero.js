import React from 'react';
import ParticlesComp from './Components/ParticlesComp';
import Social from './Components/Social';
import California from './Components/California';
import C from './Components/C';

const Hero = () => {

  return (

    <div id='hero' className='d-flex bg-transparent text-white pb-5 pb-md-0 m-0'>
      <div className='container-fluid vh-100 px-3'>

        <div className='filter-glow'>
          <ParticlesComp/>
        </div>

        <div className='row vh-100 mt-5 mt-md-0 mx-0'>

          <California/>
          <C/>
          <Social />

        </div>
      </div>

    </div>
  );
}

export default Hero;
