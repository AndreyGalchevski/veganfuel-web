import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

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
              <span className="brand-logo center">
                <img
                  src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1534172449/veganfuel-web/logo2.png"
                  alt="VeganFuel Application Logo"
                />
              </span>
              <a
                className="ios-icon right"
                href="https://play.google.com/store/apps/details?id=andreygalchevski.veganfuel&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-google-play" />
              </a>
              <a
                className="android-icon right"
                href="https://itunes.apple.com/us/app/veganfuel/id1275882059?mt=8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-app-store-ios" />
              </a>
              <Link className="back-icon left" to="/">
                <i class="fas fa-chevron-left" />
              </Link>
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
