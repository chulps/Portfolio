import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id={'contact'} className="py-5 mt-5 text-white">
    <h2 className='text-center'>Contact</h2>
      <form className='py-5col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3'>
        
      <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input type="name" class="form-control" id="exampleInputPassword1" placeholder="Type your name here" />
        </div>
        
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">I will never give your email address to anyone. Ever.</small>
        </div>

        <textarea className="form-control" rows="3" placeholder="Write your message here..."></textarea>

        <button type="submit" class="btn btn-white">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
