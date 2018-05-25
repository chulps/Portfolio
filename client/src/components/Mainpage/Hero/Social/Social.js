import React from "react";
import social from "./social.json";

const Social = () => {
  return (
    <div className='
    col-12 
    col-xs-12 
    col-sm-12 
    order-last
    order-sm-0
    col-md-1 
    col-lg-1 
    col-xl-1 
    p-0 
    align-self-center 
    text-center 
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

