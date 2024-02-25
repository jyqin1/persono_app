import React from 'react';
import './CallToAction.css';
import ctaVideo from '../assets/cta-video.mp4'; 

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="cta-text">
        <h1>Better Sleep Begins With You!</h1>
        <p>Can you imagine having a comfortable pillow that also comes with a built-in sleep tracker? With Persono it's as simple as "nothing to wear, nothing to charge".</p>
        <form className="email-signup-form">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="cta-video">
        <video src={ctaVideo} autoPlay loop muted playsInline width="100%" height="auto" />
      </div>
    </div>
  );
}

export default CallToAction;
