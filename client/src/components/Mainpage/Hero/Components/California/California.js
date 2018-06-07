import React from 'react';
import Tilt from 'react-tilt';
import Weather from 'Weather';

const California = () => {
    return (
    <div id='california' className='
        col-10 
        col-sm-8 
        col-md-1 
        col-lg-1 
        offset-1 
        offset-sm-2
        offset-md-0 
        text-center 
        pt-5
        pb-5
        pr-0
        mb-0
        mb-md-3
        pb-md-0
        pt-md-4 
        pl-md-0
        order-last
        order-md-first 
        text-md-left 
        align-self-end 
        bg-dot-grid
        '>
            
            <img className='d-block mx-auto' src="../../../images/california.png" width={100} alt='California'/>
        <p className='d-inline font-weight-bold text-nowrap bg-primary'>
            Web Design & Development.
            <br/>
            <small>Made with Love in California.</small>
        </p>
    
    </div>
  );
};


export default California;
