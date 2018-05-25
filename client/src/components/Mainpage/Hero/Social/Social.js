import React from "react";
import social from "./social.json";

const Social = () => {
  return (
    <div className='
    col-12 
    col-xs-12 
    col-sm-12 
    col-md-1 
    col-lg-1 
    col-xl-1 
    p-0 
    align-self-center 
    text-center
    ml-2
    mt-1
    mt-md-0
    ml-md-0
    mr-4
    text-md-right 
    mt-minus-4'>

    <div id="Social" className="py-5 text-white">

        <div>
          {social.map((element) => {
            return(
              <div key={element.id} href={element.href} className="my-3 d-inline mx-1 d-md-block mx-md-0">
                <a href={element.href} target='blank'>
                    <img className='img-responsive' height={40} src={element.image} target="blank" alt=""/>
                </a>
              </div>
            );
          })} 
        </div>

        </div>

    </div>
  );
};

export default Social;

