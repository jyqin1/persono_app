import React from 'react';
import './TrackerFeatures.css'; // Ensure the CSS is updated for new layout
import trackerImage from '../assets/chip.png'; // Update with the correct path

function TrackerFeatures() {
  return (
    <div className="tracker-features">
      <h2>Sleep Smart: The Invisible Tracker</h2>
      <p>Our Smart Pillow comes with an integrated sleep tracker, designed to monitor your sleep without interrupting it.</p>
      
      <img src={trackerImage} alt="Sleep Tracker" className="tracker-image" />
      
      <div className="feature">
        <h3>Built-In Convenience</h3>
        <p>Seamlessly integrated into the pillow, our tracker monitors your sleep hassle-free.</p>
      </div>
      
      <div className="feature">
        <h3>Compact Design</h3>
        <p>As small as a quarter, the tracker remains unnoticed to ensure your comfort.</p>
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
