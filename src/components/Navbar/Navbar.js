import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper blue">
          <Link to="/" className="brand-logo center">
            VeganFuel
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
