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
                <div  style={{height:"800px"}}class="container">
                <div class="row">
                    <div id="adminSignInFrom" class="span12">
                       
                          <fieldset className="fieldset">
                            <div id="legend">
                              <legend class="">Admin Login</legend>
                            </div>
                            <div class="control-group">
                      
                              <label class="control-label"  for="username">Username</label>
                              <div class="controls">
                                <input onChange={this.handleInputUsername} value={this.state.username}type="text" id="username" name="username" placeholder="" class="input-xlarge"/>
                              </div>
                            </div>
                            <div class="control-group">
                       
                              <label class="control-label" for="password">Password</label>
                              <div class="controls">
                                <input onChange={this.handleInputPassword} value={this.state.password} type="password" id="password" name="password" placeholder="" class="input-xlarge"/>
                              </div>
                            </div>
                            <div class="control-group">
            
                              <div class="controls text-center pt-2">
                                <button onClick={this.handleInputSubmit} class="btn btn-primary ">Login</button>
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