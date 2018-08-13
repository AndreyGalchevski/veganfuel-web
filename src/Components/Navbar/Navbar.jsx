import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue">
            <span className="brand-logo center">VeganFuel</span>
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
              <i className="fas fa-chevron-left" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
