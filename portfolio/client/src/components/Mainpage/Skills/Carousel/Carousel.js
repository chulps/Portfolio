import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import logo from "./logos.json";

class DemoCarousel extends Component {
    render() {
        return (
          <Carousel width="75%" showArrows={true} showStatus={false}
             dynamicHeight={true} showThumbs={true} infiniteLoop={true}>
            {
              logo.map((element, index) => (
                  <div key={index}>
                     <img height={350} src={element.image} />
                     <p>{element.type}</p>
                  </div>
              ))
            }
          </Carousel>
        );
    }
}

export default DemoCarousel;
