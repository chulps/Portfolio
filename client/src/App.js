import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminSignIn from "./components/AdminPage/Components/AdminSignIn";
import AdminAuthentication from "./components/AdminPage/AdminAuthentication";
import NoMatch from "./components/NoMatch/NoMatch";


class App extends Component {
  render() {
    return (
      <Router className="App">
        <div className="bg-primary">
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Mainpage} />
              <Route exact path="/Admin" component={AdminSignIn}/>
              <Route exact path="/AdminPage" component={AdminAuthentication}/>
              <Route component={NoMatch} />
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
