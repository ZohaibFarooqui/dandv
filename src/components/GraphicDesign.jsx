import React from "react";

const WebDevelopment = () => {
  return (
    <div className="web-development-container">
      {/* Video Section */}
      <div className="video-section">
        <video
          className="web-background-video"
          src="servicesbg.mp4"
          autoPlay
          playsInline
          loop
          muted
        ></video>
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Tagline/Header */}
        <div className="header-tagline">
          <h1>Graphic Design</h1>
          <p>
          Your one step solution. For comprehensive software and design needs. We are committed to transforming your ideas into custom digital experiences, tailored to your specific needs. Making client saisfaction our top priority. We turn your vision into reality.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="graphic/logo design.png" alt="Software Development" />
              <h3>Logo Design</h3>
              <p>We craft distinctive and memorable logos that reflect the core of your brand and connect with your target audience. Our logo design process includes in-depth research, creative brainstorming, and close collaboration with you to ensure the final design perfectly represents your brand identity and leaves a lasting impression.</p>
            </div>
            <div className="offer-item">
              <img src="graphic/branding.png" alt="Network Security" />
              <h3>Branding & Identity</h3>
              <p>We help build strong, cohesive brands that leave a lasting impact. Our branding and identity services focus on creating a unique, consistent visual and emotional experience across all touchpoints. From logo design to color palettes, typography, and messaging, we work closely with you to develop a brand identity that resonates with your audience and clearly communicates your values, mission, and vision.</p>
            </div>
            <div className="offer-item">
              <img src="/graphic/illustration.png" alt="Cloud Hosting" />
              <h3>Illustration</h3>
              <p>We create captivating and custom illustrations that bring your ideas to life with creativity and precision. Our talented illustrators work closely with you to craft unique visuals that align with your brand’s message and aesthetic. Whether for marketing materials, websites, or product packaging, our illustrations add a personal touch that engages and inspires your audience.</p>
            </div>
          </div>
        </section>

        {/* Why Devs and Visuals Section */}
        <section className="why-devs-visuals">
          <h2>Why Devs and Visuals?</h2>
          <div className="devs-visuals-items">
            <div className="devs-item">
              <h3>Wide Network</h3>
              <img src="Wide network.png"></img>
              <p>No matter where you are, we’ve got you covered.</p>
              
            </div>
            <div className="devs-item">
              <h3>Unmatched Support</h3>
              <img src="Customer Support.png"></img>
              <p>Talk to us about any concerns, 24/7.</p>
            </div>
            <div className="devs-item">
              <h3>Beginner-Friendly</h3>
              <img src="User Friendly.png"></img>
              <p>Our interface is simple and easy to use.</p>
            </div>
          </div>
        </section>


        
      </div>
    </div>
  );
};

export default WebDevelopment;
