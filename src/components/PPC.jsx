import React from 'react';

const PPCScreen = () => {
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
          <h1>PPC (Pay-Per-Click Advertising)</h1>
          <p>
            Maximize your online visibility with our expert PPC services. We create data-driven campaigns tailored to your business goals, ensuring optimal ROI and brand growth.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="ppc/PPC-Srategy.png" alt="PPC Strategy" />
              <h3>Strategic PPC Campaigns</h3>
              <p>We craft high-performing PPC strategies that drive qualified traffic to your website and generate leads.</p>
            </div>
            <div className="offer-item">
              <img src="ppc/Keyword-Research.png" alt="Keyword Research" />
              <h3>Advanced Keyword Research</h3>
              <p>Our experts conduct deep keyword analysis to ensure maximum visibility and conversions.</p>
            </div>
            <div className="offer-item">
              <img src="ppc/Ad-Optimization.png" alt="Ad Optimization" />
              <h3>Ad Optimization & A/B Testing</h3>
              <p>We continuously optimize your ads through testing and performance analysis to increase effectiveness.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-devs-visuals">
          <h2>Why Choose Us?</h2>
          <div className="devs-visuals-items">
            <div className="devs-item">
              <img src="ppc/ROI.png" alt="ROI" />
              <h3>ROI-Driven Approach</h3>
              <p>Our focus is to maximize your returns and ensure high-quality leads.</p>
            </div>
            <div className="devs-item">
              <img src="ppc/Expertise.png" alt="Expertise" />
              <h3>Industry Expertise</h3>
              <p>We have a team of certified PPC specialists with a proven track record.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PPCScreen;
