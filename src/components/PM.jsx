import React from 'react';

const ProjectManagementScreen = () => {
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
          <h1>Project Management</h1>
          <p>
            Deliver projects on time and within budget with our expert project management services. We ensure efficiency, collaboration, and successful execution.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="pm/Agile-Management.png" alt="Agile Project Management" />
              <h3>Agile Project Management</h3>
              <p>We use agile methodologies to enhance flexibility and efficiency in project execution.</p>
            </div>
            <div className="offer-item">
              <img src="pm/RIsk-Management.png" alt="Risk Management" />
              <h3>Risk Management</h3>
              <p>We identify and mitigate project risks to ensure smooth execution.</p>
            </div>
            <div className="offer-item">
              <img src="pm/Stakeholder.png" alt="Stakeholder Communication" />
              <h3>Stakeholder Communication</h3>
              <p>We ensure clear and effective communication among all stakeholders.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-devs-visuals">
          <h2>Why Choose Us?</h2>
          <div className="devs-visuals-items">
            <div className="devs-item">
              <img src="pm/Efficiency.png" alt="Efficiency" />
              <h3>Efficiency & Productivity</h3>
              <p>We keep projects on track and optimize resource utilization.</p>
            </div>
            <div className="devs-item">
              <img src="pm/Industry-Expert.png" alt="Industry Experts" />
              <h3>Industry Experts</h3>
              <p>Our experienced project managers ensure top-tier execution.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectManagementScreen;
