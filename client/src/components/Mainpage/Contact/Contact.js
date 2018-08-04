import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id='contact' className="py-5 text-white">
      <div className='container p-0'>
      <h2 className='py-5 text-center m-0'>Contact</h2>
        <div className='row justify-content-center hover-corners bg-dot-grid py-5  col-10 col-md-8 col-lg-6 mx-auto px-0'>
        <form action="mailto:chuckoward@gmail.com" method="post" encType="text/plain" >
            <a><button type="submit" className="hover-glow mx-auto my-5 btn btn-default">Email me</button></a>
        </form>
        <span className='hover-span'></span>
        </div>
      </div>
    </div>
  );
};

export default Contact;