import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../assets/logo-black.png';

const Navbar = ({ toggleWaitlist }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Persono logo" className="logo" />
          </Link>

          <div className="waitlist-container">
            <button onClick={toggleWaitlist} className="waitlist-button">Join Waitlist</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
