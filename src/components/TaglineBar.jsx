import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';


const TaglineBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="tagline-bar">
      <div className="tagline-content">
        <div className="tagline-info">
          <div className="contact">
            <FaEnvelope className="icon" />
            <span className="email-wrapper">
              <a href="mailto:info@devandvisuals.com">info@devandvisuals.com</a>
            </span>
          </div>
        </div>

        <h5>Your Imagination, Our Creation</h5>

        <div className="social-media-links">
          <a href="https://www.facebook.com/share/15pGfSK3hF/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/devsandvisuals/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/devs-and-visuals/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

        {/* Night Mode Toggle */}
        <button 
          className={`theme-toggle ${darkMode ? 'night' : 'day'}`} 
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaMoon className="moon-icon" /> : <FaSun className="sun-icon" />}
        </button>
      </div>
    </div>
  );
};

export default TaglineBar;
