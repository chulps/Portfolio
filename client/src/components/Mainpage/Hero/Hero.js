import React from 'react';
import ParticlesComp from './ParticlesComp';
import Logo from '../../Logo';

const Hero = () => {

  return (

    <div id='hero' className='row filter-glow vh-100 mt-minus-4'>
      <div className='container-fluid'>
        <div className='d-flex justify-content-around w-100 h-100 position-absolute'>
          <div className='align-self-center mx-auto mb-5 text-center text-white text-glow-white bg-dot-grid p-4'>
            <div className='jiggle'>
              <Logo />
            </div>
            <p>Chuck Howard</p>
            <div className='down-arrow filter-glow'></div>
          </div>

        </div>
        <ParticlesComp />
      </div>

    </div>
  );
}

export default Hero;
