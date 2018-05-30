import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div className="bg-primary">
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Mainpage} />
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
