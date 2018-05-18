import React from 'react';
import ParticlesComp from './ParticlesComp';
import Logo from '../../Logo';
 
const Hero = () => {
  
  return (
    
    <div id='hero' className='row filter-glow mt-minus-4'>
      <div className='container-fluid'>
            <div className='d-flex justify-content-around w-100 h-100 position-absolute'>
              
              <ul className='list-group align-self-center'>
                <a href='' className='list-group-item list-group-item-action'>A</a>
                <a href='' className='list-group-item list-group-item-action'>B</a>
                <a href='' className='list-group-item list-group-item-action'>C</a>
                <a href='' className='list-group-item list-group-item-action'>D</a>
                <a href='' className='list-group-item list-group-item-action'>E</a>
              </ul>
              
              <div className='align-self-center mx-auto mb-5 text-center text-white text-glow-white bg-dot-grid p-5'>
                <div className='jiggle'>
                  <Logo />
                </div>
                <p>Chuck Howard</p>
                <div className='down filter-glow'></div>
              </div> 
              
              <ul className='list-group align-self-center'>
                <a href='' className='list-group-item list-group-item-action'>A</a>
                <a href='' className='list-group-item list-group-item-action'>B</a>
                <a href='' className='list-group-item list-group-item-action'>C</a>
                <a href='' className='list-group-item list-group-item-action'>D</a>
                <a href='' className='list-group-item list-group-item-action'>E</a>
              </ul>             
            </div>
        <ParticlesComp/>
      </div>
      
    </div>
  ); 
}

export default Hero;
