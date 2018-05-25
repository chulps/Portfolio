import React, { Component } from 'react';
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Services from "./Services"
import Skills from "./Skills";
import Contact from "./Contact";

class Mainpage extends Component {
  render() {
    return (
      <div className='x-hidden'>
        <Hero/>
        <About/>
        <Skills/>
        <Services/>
        <Work/>
        <Contact/>
      </div>
    );
  }
}

export default Mainpage;
