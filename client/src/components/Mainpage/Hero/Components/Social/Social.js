import React from "react";
import social from "./social.json";

const Social = () => {
  return (
    <div className='
    align-self-end 
    col-12  
    col-md-1 
    p-0 
    mb-0
    mb-md-4
    my-5
    my-md-0
    text-center
    text-md-right 
    '>

    <div id="Social" className="text-white">

        <div>
          {social.map((element) => {
            return(
              <div key={element.id} href={element.href} className="mt-3 d-inline mx-1 d-md-block mx-md-0">
                <a href={element.href} target='blank'>
                    <img className='img-responsive hover-glow m-2 m-md-0' height={40} src={element.image} target="blank" alt=""/>
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

