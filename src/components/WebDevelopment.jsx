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
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Tagline/Header */}
        <div className="header-tagline">
          <h1>WEB DEVELOPMENT</h1>
          <p>
          Your one step solution. For comprehensive software and design needs. We are committed to transforming your ideas into custom digital experiences, tailored to your specific needs. Making client saisfaction our top priority. We turn your vision into reality.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="/website/webdevelopment.png" alt="Software Development" />
              <h3>Custom Web Development </h3>
              <p>Our custom web development services are focused on creating tailored solutions that reflect your unique brand identity and business goals. We specialize in crafting dynamic, scalable, and user-friendly websites designed to meet your specific needs. Whether you require innovative features, seamless functionality, or exceptional performance, we ensure your website stands out and delivers an engaging experience for your audience.</p>
            </div>
            <div className="offer-item">
              <img src="/website/wordpressdevelopment.png" alt="Network Security" />
              <h3>Wordpress Web Development</h3>
              <p>We specialize in delivering professional WordPress web development services that combine functionality, performance, and aesthetics. Our team focuses on creating responsive, user-friendly websites tailored to meet your unique requirements. With customizations and seamless integrations, we ensure your website not only stands out but also offers a smooth and efficient experience for both you and your audience.</p>
            </div>
            <div className="offer-item">
              <img src="/website/ecommerceweb.png" alt="Cloud Hosting" />
              <h3>E-Commerce Web Development</h3>
              <p>We create dynamic and user-focused e-commerce websites designed to enhance your online store's functionality and drive sales. Our team ensures your platform is fully optimized for smooth navigation, secure transactions, and an engaging shopping experience. Tailored to your unique business needs, our e-commerce solutions help you build a strong online presence and reach your target audience effectively.</p>
            </div>
            <div className="offer-item">
              <img src="web consulting.png" alt="Cloud Hosting" />
              <h3>Web Improvement Consulting</h3>
              <p>Our web improvement consulting services are designed to help you unlock your website's full potential. Whether you’re looking to enhance user experience, improve performance, or adopt the latest technologies, our experts provide tailored solutions and actionable insights. We work closely with you to understand your goals, identify opportunities for improvement, and deliver a strategic roadmap that drives results and aligns with your business objectives.</p>
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
