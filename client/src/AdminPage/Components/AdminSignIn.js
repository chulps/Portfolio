import React from "react";
import axios from "axios";
import AdminAuthentication from "../AdminAuthentication";
import {Redirect } from "react-router-dom";
 
 
 
class Admin extends React.Component{
    
    constructor(){
        super()

    this.state = {
        username:"",
        password:"",
        redirect:false,
        rendomeToken:"",
        usernameToken:"",
        message:""
    };
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
};




    handleInputUsername = (event) =>{
       this.setState({
            username:event.target.value
       });
    };

    handleInputPassword = (event) =>{
        this.setState({
            password:event.target.value
        });
    };

    handleInputSubmit = (e) => {
 
    this.setState = this.setState.bind(this)
        axios.post("/api/adminLogin", { 
            username: this.state.username,
            password: this.state.password
            }
            ).then(function (res) {
                if(res.data==="WRONG INFORMATION"){
                    this.setState({
                        message:res.data
                    })
                }
                console.log(res)
                if(this.state.username === res.data.username && this.state.password === res.data.password){
                    localStorage.setItem("user_token", res.data.token);
                    localStorage.setItem("user_name", res.data.username);
                    this.setState({
                    redirect:true,
                    });
                } 
            }.bind(this)
            ).catch(function (error) {
                console.log(error)
             });
    };
    
  
    render(){
      
        if(this.state.redirect!==true){
            return(
                <div  style={{height:"800px"}}className="container">
                <div className="row">
                    <div id="adminSignInFrom" className="span12">
                       
                          <fieldset className="fieldset">
                            <div id="legend">
                              <legend className="">Admin Login</legend>
                            </div>
                            <div className="control-group">
                      
                              <label className="control-label"  htmlFor="username">Username</label>
                              <div className="controls">
                                <input onChange={this.handleInputUsername} value={this.state.username}type="text" id="username" name="username" placeholder="" className="input-xlarge"/>
                              </div>
                            </div>
                            <div className="control-group">
                       
                              <label className="control-label" htmlFor="password">Password</label>
                              <div className="controls">
                                <input onChange={this.handleInputPassword} value={this.state.password} type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
                              </div>
                            </div>
                            <div className="control-group">
            
                              <div className="controls text-center pt-2">
                                <button onClick={this.handleInputSubmit} className="btn btn-primary ">Login</button>
                              </div>
                            </div>
                          </fieldset>
                    
                    </div>
                </div>
            </div>
            )
         
        }else{
            return(
                <div>
                    <AdminAuthentication 
                      redirect={this.state.redirect}
                    />
                    <Redirect to="/AdminPage" /> 
              
                   
                  
                </div>
            )
         }
        

     
    };
};

export default Admin;