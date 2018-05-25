import React from 'react';
import Logo from '../../Logo';

const C = () => {
    return (
        <div className='
          mt-5
          col-10 
          offset-1 
          col-xs-10
          col-sm-8
          mt-md-0
          col-md-6 
          col-lg-5 
          col-xl-3 
          align-self-center 
          text-center 
          text-white 
          text-glow-white 
          bg-dot-grid 
          p-5
          mx-auto'>
            
            <div className='text-center jiggle filter-glow'>
              <Logo />
            </div>
            
            <a href='#about'>
              <span className='px-4 py-1 bg-primary text-white border border-white rounded'>Continue</span>
            </a>
            <br/>
            <div className='mt-3 down-arrow filter-glow'></div>
          </div>
    );
};


export default C;