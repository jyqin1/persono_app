import React from 'react';
import './TrackerFeatures.css'; 
import trackerImage from '../assets/chip.png';
import quarterImage from '../assets/quarter.png';
import wirelessIcon from '../assets/wireless.png';
import nothingToWearIcon from '../assets/nothingtowear.png';
import batteryIcon from '../assets/battery.png';

function TrackerFeatures() {
  return (
    <div className="tracker-features">
      <h2>Sleep Smart: The Invisible Tracker</h2>
      <p1>Our Smart Pillow comes with an integrated sleep tracker, designed to monitor your sleep without interrupting it.</p1>

      <div className="comparison-container">
        <div className="text-container">
          <p>You won't even notice it.</p>
          <p2>Small as a quarter!</p2>
        </div>
        <div className="images-container">
          <img src={trackerImage} alt="Sleep Tracker" className="tracker-image" />
          <img src={quarterImage} alt="Quarter Size Comparison" className="quarter-image" />
        </div>
      </div>

      <div className="icons-container">
        <div className="icon-group">
          <img src={wirelessIcon} alt="Wireless" className="feature-icon" />
          <p><strong>Wireless data transmission to your phone</strong></p>
        </div>
        <div className="icon-group">
          <img src={nothingToWearIcon} alt="Nothing to Wear" className="feature-icon" />
          <p><strong>Nothing to wear, nothing to charge</strong></p>
        </div>
        <div className="icon-group">
          <img src={batteryIcon} alt="Battery" className="feature-icon" />
          <p><strong>Battery that lasts the lifespan of the pillow (2 years)</strong></p>
        </div>
      </div>
    </div>
  );
}


export default TrackerFeatures;
