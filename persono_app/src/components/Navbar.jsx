import React from 'react';
// Import the logo image
import logo from '../assets/logo-black.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo image */}
            <a href="#" className="flex items-center py-5 px-2">
              <img src={logo} alt="Persono logo" className="h-8 w-auto" /> {/* Adjust the size as needed */}
            </a>
          </div>
          
          {/* Join Waitlist Button */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-300">Join Waitlist</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;