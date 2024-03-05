import React from 'react';
import './Footer.css';
import logo from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/">
            <img src={logo} alt="Persono Logo" />
            <p1>Better sleep, better life</p1>
          </a>
        </div>
        <div className="footer-nav">
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className="footer-contact">
          <p>Any questions, we are always at your disposal to help at 
            <a href="mailto:contact@persono.com">contact@persono.com</a>
          </p>
          <p>Springs Global US, Inc. 205 North White Street Fort Mill, South Carolina 29716 U.S.A.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
