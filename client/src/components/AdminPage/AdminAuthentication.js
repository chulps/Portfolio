import React from "react";
import axios from "axios";
import AdminProfilePage from "./AdminProfilePage"
import AdminSignIn from "./Components/AdminSignIn";


class AdminAuthentication extends React.Component{
    constructor(props) {
        super()

        this.state = {
            token: "",
       
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    };

    componentDidMount(e) {
        this.setState = this.setState.bind(this);
        const storageToken = localStorage.getItem("user_token");
        const storageUsername = localStorage.getItem("user_name");

        axios.post("/api/loginAutentication", {
            username: storageUsername,
            token:storageToken 
       }).then((response) => {
            if ( response.data.token === storageToken && response.data.username===storageUsername ){
                this.setState({
                    loggedIn: true
                });
            }
        });
    };

    
    authenticationCheck() {
        if (this.state.loggedIn === true || this.props.redirect) {
            return (<AdminProfilePage />)
        } else {
            return ( <AdminSignIn /> )
        }
    };
 
render(){
    return( 
        this.authenticationCheck() 
    )
};


};;
 
export default AdminAuthentication;