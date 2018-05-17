import React from "react";

const Navbar = () => {
  
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-dark bg-transparent bg-md-dark navbar-expand-lg">
      <a className="navbar-brand" href="/">Chuck Howard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navToggle">
          
          <ul className="navbar-nav ml-auto mt-2">
            
            <li className="nav-item">
              <a className="nav-link" href="#about">
              
              About 
              
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#skills">
              
              Skills
              
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
              
              Services
              
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#work">
              
              Work
              
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
              
              Contact
              
              </a>
            </li>
            
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
