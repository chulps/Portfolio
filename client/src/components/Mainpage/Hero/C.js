import React from 'react';
import Logo from '../../Logo';

const C = () => {
    return (
        <div className='
          mt-5
          mt-md-0
          mt-lg-0
          mb-md-5
          col-10 
          offset-1 
          col-xs-12
          col-sm-8
          pb-md-5
          col-md-6 
          col-lg-5
          pb-lg-5
          col-xl-3 
          align-self-center 
          text-center 
          text-white 
          text-glow-white 
          bg-dot-grid 
          p-5
          mx-auto
          '>
            
            <div className='text-center jiggle filter-glow'>
              <Logo />
            </div>
            
            <a href='#about'>
              <span className='px-4 py-1 bg-primary text-white rounded'>Let's build cool stuff</span>
            </a>
            <br/>
            <div className='mt-3 down-arrow filter-glow'></div>
          </div>
    );
};


export default C;