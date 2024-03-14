import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../assets/logo-black.png';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Persono logo" className="logo" />
          </Link>

          <div className="waitlist-container">
            {location.pathname === '/waitlist' ? (
              <Link to="/" className="waitlist-button">Go Home</Link> 
            ) : (
              <Link to="/waitlist" className="waitlist-button">Join Waitlist</Link> 
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
