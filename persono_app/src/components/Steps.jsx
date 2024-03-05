import React from 'react';
import './Steps.css';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.png';

const Steps = () => {
    const steps = [
      {
        icon: step1,
        title: 'Buy',
        description: 'Buy your pillow empowered by Persono',
      },
      {
        icon: step2,
        title: 'Download',
        description: 'Download the Persono app and sign up (Available for iOS and Android in English or Portuguese)',
      },
      {
        icon: step3,
        title: 'Pairing',
        description: 'Pair your pillow and your phone using Bluetooth. Set your sleep goals with an intuitive onboarding process',
      },
      {
        icon: step4,
        title: 'Sleep',
        description: 'With your pillow empowered by Persono, of course',
      },
      {
        icon: step5,
        title: 'Sync',
        description: 'The next day, open your app and sync your data. If it doesn’t start by itself, click on "Receive Data" and follow instructions on screen',
      },
    ];
  
    return (
      <div className="steps-wrapper">
        <div className="steps-header">
          <h2 className="steps-title">Simple and Easy</h2>
          <p className="steps-subtitle">
            You'll be amazed at how easy it is to discover valuable insights about your sleep habits
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <img src={step.icon} alt={`Step ${index + 1}`} className="step-icon" />
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Steps;
