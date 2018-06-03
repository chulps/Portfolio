import React from 'react';
import Logo from '../../../../Logo';
import Tilt from 'react-tilt'

const C = () => {
    return (
        <div id='C' className='
          align-self-center 
          bg-dot-grid 
          col-10
          col-sm-8
          col-md-6 
          col-lg-5
          col-xl-3 
          hover-corners
          mt-5
          mt-md-0
          mx-auto 
          offset-1 
          offset-md-0
          pb-md-5
          pb-lg-5
          py-5
          text-center 
          text-white 
          text-glow-white 
          '>
          
          <span className='hover-span'></span>
              <Tilt options={{ max : 70, scale:1.2, perspective: 1000 }} style={{width: '100%'}} >

                <div className='my-5 pb-0 my-md-0 text-center  filter-glow'>
                  <Logo/>
                </div>
              
              </Tilt>

            
            <a href='#about'>
              <span className='hover-white hover-glow px-4 py-1 bg-primary text-white border border-white rounded'>Continue</span>
            </a>
            <br/>
            <div className='mt-3 down-arrow filter-glow'></div>
          
        </div>
    );
};


export default C;