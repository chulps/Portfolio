import React from "react";
import axios from "axios";

class Contact extends React.Component{

    constructor(){
        super()

        this.state ={
            submitMessage:""
        }
    };

    handleInputName = (e) =>{
        this.setState({
            name:e.target.value
        });
    };
    handleInputEmail = (e) =>{
        this.setState({
            email:e.target.value
        });
    }
    handleInputSubject = (e) =>{
        this.setState({
            subject:e.target.value
        });
    }
    
    handleInputMessage = (e) =>{
        this.setState({
            message:e.target.value
        });
    }
    handleInputSubmit = () =>{
        axios.post("/api/contactMe",{
            name:this.state.name,
            email:this.state.email,
            subject:this.state.subject,
            message:this.state.message
          }).then(()=>{
        });
        this.setState({
            name:"",
            email:"",
            subject:"",
            message:"",
            submitMessage:"Your message has been submited "
        });

    };
     


    contactFrom = () =>{
        return(
            <form>
                <br/>
                <h1 className="mb-4 text-center" >Contact Form</h1>
                <div className="form-group">
                    <input onChange={this.handleInputName} value={this.state.name} type="text" className="form-control" id="name" name="name" placeholder="Name" required/>
                </div>
                <div className="form-group">
                    <input onChange={this.handleInputEmail} value={this.state.email} type="text" className="form-control" id="email" name="email" placeholder="Email" required/>
                </div>
                <div className="form-group">
                    <input onChange={this.handleInputSubject} value={this.state.subject} type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group">
                    <textarea onChange={this.handleInputMessage} value={this.state.message} className="form-control" type="textarea" id="message" placeholder="Message" maxLength="140" rows="7"></textarea>
                    <span className="help-block"><p id="characterLeft" className="help-block "></p></span>  
                    <div className="text-center" >{this.state.submitMessage}</div>                  
                </div>
                <button onClick={this.handleInputSubmit} type="button" id="submit" name="submit" className="col-12 btn-danger text-light btn border-white mb-5">Submit Form</button>
            </form>
        )
    }
    render(){
        return (
            <div id='contact' className='row my-5 mx-0'>
                <div className="container px-0">
                <div className="col-12 col-md-8 col-lg-6 mx-auto p-0">
                        <div className="form-area">  
                            {this.contactFrom()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;