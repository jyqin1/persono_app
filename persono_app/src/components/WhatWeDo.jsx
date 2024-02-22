import React from 'react';
import './WhatWeDo.css';
import pillowImage from '../assets/vertical1.jpg';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <h2>What Do We Do?</h2>
      <div className="content-container">
        <div className="text-and-buttons">
        <p className="bordered-paragraph">Discover how Persono improves your sleep with a personalized pillow, tailored to your sleep habits.</p>
          <div className="buttons">
            <div className="tooltip-container">
              <button className="quiz-btn">Take Our Quiz</button>
              <span className="tooltip-content">Find the perfect pillow for you!</span>
            </div>
            <div className="tooltip-container">
              <button className="app-btn">Download Our App</button>
              <span className="tooltip-content">Get a personalized sleeping experience.</span>
            </div>
            <div className="tooltip-container">
              <button className="about-btn">About Us</button>
              <span className="tooltip-content">Learn more about our mission and team.</span>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={pillowImage} alt="Pillow" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
