import React from "react";

const Navbar = () => {
  
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-dark bg-md-dark navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='brand border border-white text-white p-2 text-center rounded'>Chuck Howard</div>

        <div className="collapse navbar-collapse" id="navToggle">
          <ul className="bg-dot-grid pt-1 pl-1 navbar-nav ml-auto mt-2 text-center" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
            
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
              <a className="nav-link active" href="#contact">
              
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
