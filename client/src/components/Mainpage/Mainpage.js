import React, { Component } from 'react';
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "../Navbar";

class Mainpage extends Component {
  render() {
    return (
      <div className='x-hidden bg-primary"'>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </div>
    );
  }
}

export default Mainpage;
