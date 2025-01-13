import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section about">
        <h3>About Devs & Visuals</h3>
        <p>
          Your trusted partner for web development and design services.
        </p>
      </div>
      <div className="footer-section contact">
        <h3>Contact Details</h3>
        <ul>
          <li><i className="fas fa-envelope"></i> services@devsandvisuals.com</li>
          <li><i className="fas fa-envelope"></i> info@devsandvisuals.com</li>
          <li>We reply within 1 day</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2025 DevsAndVisuals. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
