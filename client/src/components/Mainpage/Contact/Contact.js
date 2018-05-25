import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id='contact' className="py-5 text-white">
      <div className='container'>
      <h2 className='py-5 text-center'>Contact</h2>
        <form action="mailto:chuckoward@gmail.com" method="post" enctype="text/plain" className='row bg-dot-grid py-5  col-10 offset-1 col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3'>
          <button type="submit" class="mx-auto my-5 btn-lg btn-white">Email me</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
