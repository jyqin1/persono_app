// PillowFeatures.js
import React from 'react';
import './PillowFeatures.css'; // Make sure this path is correct
import pillowImage from '../assets/pillow-xray.png'; // Update with the correct path if necessary

function PillowFeatures() {
  return (
    <div className="pillow-features">
      <h2>Custom Comfort: Your Pillow, Your Way</h2>
      <p>Experience unparalleled support and comfort with our Smart Pillow’s customizable layers.</p>
      
      <div className="features-container">
        <img src={pillowImage} alt="Smart Pillow Layers" className="pillow-image" />
        <div className="feature-description" style={{top: '20%'}}>
          <h3>Adjustable Height</h3>
          <p>Add or remove layers to find your perfect pillow height.</p>
        </div>
        <div className="feature-description" style={{top: '50%'}}>
          <h3>Customizable Softness</h3>
          <p>Different layer materials contribute to your desired softness level.</p>
        </div>
        <div className="feature-description" style={{top: '80%'}}>
          <h3>Easy to Customize</h3>
          <p>Effortlessly adjust the pillow to meet your unique needs.</p>
        </div>
      </div>
    </div>
  );
}

export default PillowFeatures;
