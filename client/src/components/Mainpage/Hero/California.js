import React from 'react';
import Tilt from 'react-tilt'

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
        pr-0
        pt-md-5 
        pl-md-0
        ml-md-0
        order-last
        order-md-first 
        text-md-left 
        align-self-end 
        bg-dot-grid
        '>
        <Tilt options={{ max : 60, scale:1.3, perspective: 1000 }}>
            <img className='d-block mx-auto mx-md-0' src="../../../images/california.png" width={100} alt='California'/>
        </Tilt>
        <p className='d-inline font-weight-bold text-nowrap bg-primary'>
            Web Design & Development.
            <br/>
            <small>Made with Love in California.</small>
        </p>
        <br/>
        <br/>
    
    </div>
  );
};


export default California;
