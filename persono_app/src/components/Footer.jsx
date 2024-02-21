import React from 'react';
import './Footer.css'; // Ensure you have this CSS file

const Footer = () => {
    return (
        <footer className="site-footer">
            <p className="sleep-message">Better sleep begins with you!</p>
            <p className="subscribe-message">Don't forget to subscribe and download our app for the best experience with Persono.</p>
            <div className="footer-cta">
                <form>
                    <input type="email" placeholder="Email address" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="social-media">
                <p>Follow us on social media:</p>
                <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {/* Add more social media links as needed */}
            </div>
        </footer >
    );
};

export default Footer;
