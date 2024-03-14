import React, { useState } from 'react';
import './Waitlist.css';
import personoVideo from '../assets/persono_video.mov';

const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setSubmitted(true);
    };

    if (submitted) {
        return <p>Thanks for joining our waitlist! Check your inbox for a confirmation email.</p>;
    }

    return (
        <div className="waitlist-container2">
            <h2>Join Our Exclusive Waitlist!</h2>
            <p>Be the first to experience our revolutionary sleep-enhancing pillow. Exclusive early access, special discounts, and more await!</p>
            <form className="waitlist-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Join Waitlist</button>
            </form>
            <div className="video-container">
                <video controls src={personoVideo} width="640" height="360"></video>
            </div>
        </div>
    );
};

export default Waitlist;
