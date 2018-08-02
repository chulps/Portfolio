import React from "react";
import './Test.css';


const containerStyle = {
    fontFamily: 'Montserrat'
};



const Test = () => {
  return (
    <div style={containerStyle} className='row m-0 bg-transparent'>
      <div className='container'>
      <div className='row bg-light-blue justify-content-center'><h2 className='text-center text-dark-blue py-5'>Above Section</h2></div>
      <div className='row py-5 px-2'>

    
            <h2 className='mb-5 col-12 text-center text-dark-blue'>Easily Identify Most Profitable Placements</h2>
        

        <div className="col-md-6 justify-content-center mb-5">
            <img className='mx-auto img-fluid' src={require("./comp.svg")} />
            <img className='mx-auto img-fluid lens' src={require("./comp_large.svg")} />
        </div>

        <div className="col col-md-6 text-center text-md-left">
            Turn Unprofitable Campaigns Into Profitable Ones. Uncover The Real Value Of Your Traffic. Easily identify Where You Should Be Spending Your Traffic.
            <button className='btn col-12 bg-red mt-3'>Learn More</button>
            <button className='btn col-12 bg-yellow mt-3'>Earn More</button>
        </div>

        </div>
        <div className='row bg-light-blue justify-content-center'><h2 className='text-center text-dark-blue py-5'>Below Section</h2></div>
      </div>
    </div>
  );
};



export default Test;