import React from 'react';
import '../index.css';

import logo from '../assets/logo-black.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center py-2 px-2">
            <img src={logo} alt="Persono logo" className="h-10 w-auto" />
          </a>

          <div className="flex items-center space-x-1">
            <a href="#" className="inline-flex items-center py-2 px-4 font-bold rounded transition-transform duration-300 bg-blue-200 hover:bg-blue-300 transform hover:scale-105 text-blue-800 hover:text-blue-900">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;