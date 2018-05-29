import React from 'react';
import Logo from '../../Logo';
import Tilt from 'react-tilt'

const C = () => {
    return (
        <div id='C' className='
          hover-corners
          mt-5
          mt-md-0
          col-10 
          offset-1 
          offset-md-0
          col-xs-12
          col-sm-8
          pb-md-5
          col-md-6 
          col-lg-5
          pb-lg-5
          col-xl-4 
          align-self-center 
          text-center 
          text-white 
          text-glow-white 
          bg-dot-grid 
          py-5
          mx-auto
          '>
          <span className='hover-span'></span>
          <Tilt options={{ max : 70, scale:1.2, perspective: 1000 }} style={{width: '100%'}} >

            <div className='my-5 pb-0 pb-md-5 my-md-0 text-center jiggle filter-glow'>
              <Logo/>
            </div>
          
          </Tilt>

            
            <a href='#about'>
              <span className='hover-white hover-glow px-4 py-1 bg-primary text-white border border-white rounded'>Portfolio</span>
            </a>
            <br/>
            <div className='mt-3 down-arrow filter-glow'></div>
          
        </div>
    );
};


export default C;