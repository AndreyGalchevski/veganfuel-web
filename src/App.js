import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Home from "./Components/Home/Home";
import Foods from "./Components/Foods/Foods";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue">
              <span className="brand-logo center">VeganFuel</span>
            </div>
          </nav>
        </div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/nutrients/:nutrientId" component={Foods} />
      </div>
    );
  }
}

export default App;
