import React from 'react';

const DigitalMarketingScreen = () => {
  return (
    <div className="web-development-container">
      {/* Video Section */}
      <div className="video-section">
        <video
          className="web-background-video"
          src="servicesbg.mp4"
          playsInline
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Tagline/Header */}
        <div className="header-tagline">
          <h1>Digital Marketing</h1>
          <p>
            Elevate your brand’s online presence with our cutting-edge digital marketing strategies.
            We drive results through data-driven campaigns and proven marketing techniques.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="digital-marketing/affiliate-marketing.png" alt="Affiliate Marketing" />
              <h3>Affiliate Marketing</h3>
              <p>Leverage a network of partners to expand your brand’s reach and boost sales efficiently.</p>
            </div>
            <div className="offer-item">
              <img src="digital-marketing/email-marketing.png" alt="Email Marketing" />
              <h3>Email Marketing</h3>
              <p>Engage your audience with personalized email campaigns that drive conversions.</p>
            </div>
            <div className="offer-item">
              <img src="digital-marketing/smm.png" alt="Social Media Marketing" />
              <h3>Social Media Marketing (SMM)</h3>
              <p>Grow your brand’s visibility with powerful social media campaigns on multiple platforms.</p>
            </div>
            <div className="offer-item">
              <img src="digital-marketing/content-marketing.png" alt="Content Marketing" />
              <h3>Content Marketing</h3>
              <p>Create high-quality content that educates, engages, and converts your target audience.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-devs-visuals">
          <h2>Why Choose Us?</h2>
          <div className="devs-visuals-items">
            <div className="devs-item">
              <img src="digital-marketing/data-driven.png" alt="Data-Driven Strategies" />
              <h3>Data-Driven Strategies</h3>
              <p>We analyze key insights to optimize campaigns and maximize results.</p>
            </div>
            <div className="devs-item">
              <img src="digital-marketing/target-audience.png" alt="Targeted Approach" />
              <h3>Targeted Approach</h3>
              <p>We focus on your ideal audience to drive high-quality leads and conversions.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalMarketingScreen;
