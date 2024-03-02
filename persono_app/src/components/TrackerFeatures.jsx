import React from 'react';
import './TrackerFeatures.css'; // Ensure the CSS is updated for new layout
import trackerImage from '../assets/chip.png'; // Update with the correct path
import quarterImage from '../assets/quarter.png'; // Ensure this path is correct

function TrackerFeatures() {
  return (
    <div className="tracker-features">
      <h2>Sleep Smart: The Invisible Tracker</h2>
      <p1>Our Smart Pillow comes with an integrated sleep tracker, designed to monitor your sleep without interrupting it.</p1>
      
      <div className="comparison-container">
        <div className="text-container">
          <p>You won't even notice it.</p>
          <p>Small as a quarter!</p>
        </div>
        <div className="images-container">
          <img src={trackerImage} alt="Sleep Tracker" className="tracker-image" />
          <img src={quarterImage} alt="Quarter Size Comparison" className="quarter-image" />
        </div>
      </div>
      
      <div className="feature">
        <h3>Built-In Convenience</h3>
        <p>Seamlessly integrated into the pillow, our tracker monitors your sleep hassle-free.</p>
      </div>
      
      <div className="feature">
        <h3>Effortless Experience</h3>
        <p>Forget wearing devices or charging batteries. Enjoy uninterrupted sleep night after night.</p>
      </div>
      
      <button className="cta-button">Explore the Technology</button>
    </div>
  );
}

export default TrackerFeatures;
