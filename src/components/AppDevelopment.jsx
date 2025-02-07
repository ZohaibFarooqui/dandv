import React from 'react';

const AppDevelopmentScreen = () => {
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
          <h1>APP DEVELOPMENT</h1>
          <p>
          Your one step solution. For comprehensive software and design needs. We are committed to transforming your ideas into custom digital experiences, tailored to your specific needs. Making client saisfaction our top priority. We turn your vision into reality.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="CustomAppDev.png" alt="Software Development" />
              <h3>Custom App Development</h3>
              <p>We specialize in developing custom mobile applications tailored to meet the unique needs of your business and resonate with your target audience. Our experienced developers craft high-quality native apps for both iOS and Android platforms, ensuring seamless performance, intuitive user experiences, and full alignment with your company’s goals. From concept to launch, we focus on delivering solutions that enhance functionality and drive customer satisfaction.</p>
            </div>
            <div className="offer-item">
              <img src="AppdesginsandPrototype.png" alt="Network Security" />
              <h3>Custom App Designs and Prototype</h3>
              <p>We offer expert custom app design and prototyping services, bringing your app vision to life with creative and user-centered designs. Our team works closely with you to understand your objectives and target audience, crafting intuitive, visually appealing interfaces that enhance user engagement. Through detailed prototypes, we allow you to visualize the app's flow and functionality before development begins, ensuring a smooth, efficient process and a final product that aligns perfectly with your business goals.</p>
            </div>
            <div className="offer-item">
              <img src="ecommerce.png" alt="Cloud Hosting" />
              <h3>SAAS Applications</h3>
              <p>We specialize in developing custom SaaS (Software as a Service) applications that are scalable, secure, and perfectly suited to your business needs. Our team designs and builds robust cloud-based solutions that streamline processes, enhance collaboration, and improve overall efficiency. With a focus on user-friendly interfaces and seamless integrations, we ensure that your SaaS application delivers high performance, flexibility, and long-term value to your organization.</p>
            </div>
            <div className="offer-item">
              <img src="appmaintenance.png" alt="Cloud Hosting" />
              <h3>App Maintenance</h3>
              <p>We provide comprehensive app maintenance services to ensure your mobile applications run smoothly and remain up-to-date with the latest features and security standards. Our team offers regular updates, bug fixes, performance enhancements, and compatibility improvements, keeping your app optimized for a seamless user experience. With proactive monitoring and quick response times, we help you maintain app stability, security, and functionality, ensuring your users remain satisfied and engaged.</p>
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

export default AppDevelopmentScreen;
