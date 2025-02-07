import React from 'react';

import {  FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* About Section */}
      <div className="footer-section about">
        <h3>About Devs & Visuals</h3>
        <p>Your trusted partner for all your design and development needs. Ensuring to bring your vision to life.</p>
      </div>

      {/* Contact Section */}
      <div className="footer-section ">
        <h3>Contact Details</h3>
        <ul>
          <li>
            <i className="fas fa-envelope"></i>
            <a href="mailto:services@devsandvisuals.com">services@devsandvisuals.com</a>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@devsandvisuals.com">info@devsandvisuals.com</a>
          </li>
          {/* <li>We reply within 1 business day!</li> */}
        </ul>
      </div>

      {/* Social Links Section */}
      <div className="footer-section social">
        <h3>Follow Us</h3>
        <ul className="social-media-links">
          <li>
            <a href="https://www.facebook.com/share/15pGfSK3hF/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
              {/* <img src="/icons/facebook.png" alt="Facebook" /> */}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/devsandvisuals/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
              {/* <img src="/icons/instagram.png" alt="Instagram" /> */}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/devs-and-visuals/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
                
              {/* <img src="/icons/linkedin.png" alt="LinkedIn" /> */}
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      <p>&copy; 2025 Devs & Visuals. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
