import React from 'react';
import './Navbar.css'; 

import logo from '../assets/logo-black.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <a href="#" className="logo-link">
            <img src={logo} alt="Persono logo" className="logo" />
          </a>

          <div className="waitlist-container">
            <a href="#" className="waitlist-button">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
