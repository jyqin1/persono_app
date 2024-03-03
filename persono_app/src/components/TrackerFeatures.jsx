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
    </div>
  );
}

export default TrackerFeatures;
