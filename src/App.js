import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Foods from "./Components/Foods/Foods";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact={true} path="/" component={Home} />
        <Route path="/nutrients/:nutrientId" component={Foods} />
      </div>
    );
  }
}

export default App;
