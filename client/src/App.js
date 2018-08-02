import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";
import AdminSignIn from "./AdminPage/Components/AdminSignIn";
import AdminAuthentication from "./AdminPage/AdminAuthentication"
import NoMatch from "./components/NoMatch/NoMatch";
import Test from "./components/Test/Test";


class App extends Component {
  render() {
    return (
      <Router className="App">
        <div className='bg-primary'>
            <Switch>
              <Route exact path="/" component={Mainpage} />
              <Route exact path="/Admin" component={AdminSignIn}/>
              <Route exact path="/AdminPage" component={AdminAuthentication}/>
              <Route exact path="/test" component={Test}/>
              <Route component={NoMatch} />
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
