import React from 'react';

const BusinessAnalysisScreen = () => {
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
          <h1>Business Analysis</h1>
          <p>
            Unlock your business potential with our expert analysis services. We help organizations make data-driven decisions for sustained growth and efficiency.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="/ba/Market-Research.png" alt="Market Research" />
              <h3>Market & Competitive Research</h3>
              <p>We analyze industry trends and competitors to help you gain an edge in the market.</p>
            </div>
            <div className="offer-item">
              <img src="ba/Process-Improvement.png" alt="Process Improvement" />
              <h3>Process Optimization</h3>
              <p>Our business analysts help streamline workflows and increase operational efficiency.</p>
            </div>
            <div className="offer-item">
              <img src="ba/Risk-Assesment.png" alt="Risk Assessment" />
              <h3>Risk Assessment & Mitigation</h3>
              <p>We identify potential risks and provide actionable solutions to mitigate them.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-devs-visuals">
          <h2>Why Choose Us?</h2>
          <div className="devs-visuals-items">
            <div className="devs-item">
              <img src="ba/Data-Driven.png" alt="Data Driven" />
              <h3>Data-Driven Insights</h3>
              <p>We base our strategies on real data and industry best practices.</p>
            </div>
            <div className="devs-item">
              <img src="ba/Custom-Solutions.png" alt="Custom Solutions" />
              <h3>Customized Solutions</h3>
              <p>Our approach is tailored to your specific business needs.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BusinessAnalysisScreen;
