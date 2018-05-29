import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id='contact' className="py-5 text-white">
      <div className='container p-0'>
      <h2 className='py-5 text-center m-0'>Contact</h2>

        <form action="mailto:chuckoward@gmail.com" method="post" enctype="text/plain" className='row justify-content-center bg-dot-grid py-5  col-10 offset-1 col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 px-0'>
            <a><button type="submit" className="hover-glow mx-auto my-5 btn btn-lg btn-white">Email me</button></a>
        </form>

      </div>
    </div>
  );
};

export default Contact;
