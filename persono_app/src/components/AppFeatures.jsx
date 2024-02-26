import React from 'react';
import './AppFeatures.css'; // Make sure this CSS file exists and is properly linked
import appFeature1 from '../assets/app1.png'; // Update the path as necessary
import appFeature2 from '../assets/app2.png'; // Update the path as necessary
import appFeature3 from '../assets/app3.png'; // Update the path as necessary

function AppFeatures() {
  return (
    <div className="app-features">
      <h2>Optimize Your Sleep with Our App</h2>
      <p>Engage with a personalized sleep journey that adapts to your lifestyle and improves your wellbeing.</p>
      
      <div className="feature">
        <img src={appFeature1} alt="Sleep Goals Tracking" className="app-feature-image" />
        <p>Set and track your sleep goals for a more restful and productive life.</p>
      </div>
      
      <div className="feature">
        <img src={appFeature2} alt="Sleep Statistics" className="app-feature-image" />
        <p>Gain insights into your sleep patterns with stats like total time in bed and total sleep time.</p>
      </div>
      
      <div className="feature">
        <img src={appFeature3} alt="Daily Reflection Questionnaire" className="app-feature-image" />
        <p>Reflect on your daily activities and feelings with our tailored questionnaire, fostering better sleep habits.</p>
      </div>
      
      <button className="cta-button">Learn More</button>
    </div>
  );
}

export default AppFeatures;