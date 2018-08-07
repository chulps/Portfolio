import React from "react"
import Headspace from "react-headspace"

const Navbar = () => {
  
  return (
    <Headspace>
      <nav className="navbar navbar-dark bg-md-dark navbar-expand-lg">
        <button className="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href='#hero' className='hover-white brand border border-white text-white p-2 text-center rounded'>Chuck Howard</a>

        <div className="collapse navbar-collapse" id="navToggle">
          <ul className="navbar-nav ml-auto text-center" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
            
            <li className="nav-item">
              <a className="nav-link p-auto pr-md-0 ml-0 ml-md-2" href="#about">
              
              About 
              
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link p-auto pr-md-0 ml-0 ml-md-2" href="#skills">
              
              Skills
              
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link p-auto pr-md-0 ml-0 ml-md-2" href="#work">
              
              Work
              
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link p-auto pr-md-0 ml-0 ml-md-2 ml-0 ml-md-1 active" href="#contact">
              
              Contact
              
              </a>
            </li>
            
          </ul>

        </div>
      </nav>
      </Headspace>
  );
};

export default Navbar;
