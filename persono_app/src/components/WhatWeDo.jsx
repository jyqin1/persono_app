import React from 'react';
import './WhatWeDo.css';
import pillowImage from '../assets/vertical1.jpg'; // Adjust the import path as necessary

const WhatWeDo = () => {
    return (
      <section className="what-we-do">
        <h2 className="section-title">What Do We Do?</h2> {/* Added class for styling */}
        <div className="container">
          <div className="buttons-section">
            <button>Take Our Quiz</button>
            <button>Download Our App</button>
            <button>About Us</button>
          </div>
          <div className="info-section">
            <p>Information about the pillow...</p>
          </div>
          <div className="image-section">
            <img src={pillowImage} alt="Pillow" />
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatWeDo;
