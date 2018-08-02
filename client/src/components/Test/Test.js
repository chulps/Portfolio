import React from "react";
import './Test.css';


const containerStyle = {
    fontFamily: 'Montserrat'
};



const Test = () => {
  return (
    <div style={containerStyle} className='row m-0 bg-transparent'>
        <div >
            <div className='row bg-light-blue justify-content-center'>
                <div class='box'>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                </div>
            </div>

                <div className='row bg-white px-2'>
                    <div className='col-lg-9 col-xl-8 mx-auto'>
                    
                        <div className='row'>
                    
                        <h2 className='col-12 text-center text-dark-blue mb-5'>Easily Identify Most Profitable Placements</h2>
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
                    
                    </div>
                </div>


            <div className='row bg-light-blue justify-content-center'>
                <div class='boxb'>
                    <div class='waveb -oneb'></div>
                    <div class='waveb -twob'></div>
                    <div class='waveb -threeb'></div>
                    <p className='text-white'>Below Section</p>

                </div>
            </div>
        </div>
    </div>
  );
};



export default Test;