import React, { useState } from 'react';
import './AppFeatures.css';
import appFeature1 from '../assets/app1.png';
import appFeature2 from '../assets/app2.png';
import appFeature3 from '../assets/app3.png';

function AppFeatures() {
  const [activeTab, setActiveTab] = useState('tab1');

  const featureInfo = {
    tab1: {
      img: appFeature1,
      text: "Set and track your sleep goals for a more restful and productive life."
    },
    tab2: {
      img: appFeature2,
      text: "Gain insights into your sleep patterns with stats like total time in bed and total sleep time."
    },
    tab3: {
      img: appFeature3,
      text: "Reflect on your daily activities and feelings with our tailored questionnaire, fostering better sleep habits."
    }
  };

  return (
    <div className="app-features">
      <h2>Optimize Your Sleep with Our App</h2>
      <p>Engage with a personalized sleep journey that adapts to your lifestyle and improves your wellbeing.</p>
      
      <div className="features-layout">
        <div className="tab-buttons">
          <button onClick={() => setActiveTab('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>Sleep Goals</button>
          <button onClick={() => setActiveTab('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>Sleep Stats</button>
          <button onClick={() => setActiveTab('tab3')} className={activeTab === 'tab3' ? 'active' : ''}>Daily Reflection</button>
        </div>

        {/* Wrap image and description in a container */}
        <div className="image-description-container"> 
          <img src={featureInfo[activeTab].img} alt="App Feature" className="app-feature-image" />
          <p className="feature-description">{featureInfo[activeTab].text}</p>
        </div>
      </div>
    </div>
  );
}

export default AppFeatures;
