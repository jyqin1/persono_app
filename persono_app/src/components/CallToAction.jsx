import React from 'react';
import './CallToAction.css';
import heroBg from '../assets/hero-bg.jpg'; 

const CallToAction = () => {
  return (
    <div className="cta-container" style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>Better Sleep Begins With You!</h1>
      <p>Sign up now for your own personalized pillow</p>
      <form className="email-signup-form">
        <input type="email" placeholder="Email address" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default CallToAction;