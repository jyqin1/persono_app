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
      text: (
        <span>
          <span style={{ fontWeight: 'bold', fontSize: '48px', color: '#4E98F1' }}>Our app assists you in comprehending your nights</span>
          <br /><br />
          <span style={{ fontSize: '22px', fontWeight: 'bold' }}>
            Better sleep starts with understanding it:
          </span>
          {' '}
          <span style={{ fontSize: '22px' }}>
            Track your sleep, learn about your sleep habits and reach your sleep goals
          </span>
        </span>
      )
    },
    tab2: {
      img: appFeature2,
      text: (
        <span>
          <span style={{ fontWeight: 'bold', fontSize: '48px', color: '#4E98F1' }}>Discover the impact of sleep quality on your mood and energy levels</span>
          <br /><br />
          <span style={{ fontSize: '22px' }}>
            by simply monitoring how you feel when you wake up
          </span>
        </span>
      )
    },
    tab3: {
      img: appFeature3,
      text: (
        <span>
          <span style={{ fontWeight: 'bold', fontSize: '48px', color: '#4E98F1' }}>Uncover what is preventing you from enjoying a good night's sleep</span>
          <br /><br />
          <span style={{ fontSize: '22px' }}>
            by identifying the specific factors that are impacting your sleep quality
          </span>
        </span>
      )
    }
  };

  return (
    <div className="app-features">
      <h2>Optimize Your Sleep with Our App</h2>
      <p1>Engage with a personalized sleep journey that adapts to your lifestyle and improves your wellbeing.</p1>

      <div className="features-layout">
        <div className="tab-buttons-bar">
          <div className="tab-buttons">
            <button onClick={() => setActiveTab('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>Sleep Goals</button>
            <button onClick={() => setActiveTab('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>Sleep Stats</button>
            <button onClick={() => setActiveTab('tab3')} className={activeTab === 'tab3' ? 'active' : ''}>Daily Reflection</button>
          </div>
        </div>
        <div className="divider-line"></div>
        <div className="image-description-container">
          <div className="content-centering">
            <img src={featureInfo[activeTab].img} alt="App Feature" className="app-feature-image" />
            <p className="feature-description">{featureInfo[activeTab].text}</p>
          </div>
        </div>
        <div className="divider-line"></div>
      </div>
    </div>
  );
}

export default AppFeatures;
