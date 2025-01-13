import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const TaglineBar = () => {
  return (
    <div className="tagline-bar">
      <div className="tagline-content">
        <h5>Your Imagination, Our Creation</h5>
        <div className="tagline-info">
          {/* <div className="location-info">
            <FaMapMarkerAlt className="icon" />
            <span>Block 7 Gulistan-e-Johar</span>
          </div> */}
          {/* <div className="slash-divider">/</div> */}
          <div className="contact">
            <FaEnvelope className="icon" />
            <span className="email-wrapper">
              <a href="mailto:info@autolane.com">info@devandvisuals.com</a>
            </span>
          </div>
        </div>
        {/* <div className="slash-divider">/</div> */}
        <div className="social-media-links">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaX /></a> */}
          <a href="https://www.instagram.com/invites/contact/?igsh=14u3r3mfbnfdm&utm_content=wwtrbb2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/devs-and-visuals" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default TaglineBar;
