import React from "react";

const WebDevelopment = () => {
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
          <h1>ANIMATIONS</h1>
          <p>
          Your one step solution. For comprehensive software and design needs. We are committed to transforming your ideas into custom digital experiences, tailored to your specific needs. Making client saisfaction our top priority. We turn your vision into reality.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="3d animation.gif" alt="Software Development" />
              <h3>3D Art & Animation</h3>
              <p>We specialize in creating stunning 3D art and animations that bring your concepts to life with dynamic visuals and intricate details. Our team combines artistic expertise and cutting-edge technology to produce engaging animations for commercials, product showcases, games, and more. Whether you're looking to tell a story, explain a process, or captivate your audience, our 3D animations deliver an immersive, high-quality experience that leaves a lasting impression.</p>
            </div>
            <div className="offer-item">
              <img src="Character Animation.gif" alt="Network Security" />
              <h3>Character Animation</h3>
              <p>We bring characters to life through dynamic and expressive animations that captivate and engage your audience. Our team creates unique, memorable characters with personality, using expert animation techniques to tell compelling stories or deliver powerful messages. Whether for games, advertising, or film, we focus on every detail—from movement and emotion to timing and interaction—to ensure your characters resonate and leave a lasting impact.</p>
            </div>
            <div className="offer-item">
              <img src="story board.png" alt="Cloud Hosting" />
              <h3>Story Board Animation</h3>
              <p>We specialize in creating detailed and engaging storyboard animations that visualize your ideas from concept to final production. Our team works closely with you to sketch and animate each scene, ensuring a clear narrative flow and effective storytelling. Whether for commercials, films, or digital content, our storyboard animations provide a dynamic preview of your project, helping you visualize the sequence, pacing, and overall impact before moving to full-scale production.</p>
            </div>
            <div className="offer-item">
              <img src="environmental animation.png" alt="Cloud Hosting" />
              <h3>Enviormental Animation</h3>
              <p>We create immersive and visually stunning environmental animations that bring your landscapes, settings, and worlds to life. From natural scenes to architectural designs, our team crafts detailed, realistic environments that capture the essence and atmosphere you envision. Whether for films, virtual tours, or product showcases, our environmental animations transport your audience to captivating spaces, enhancing storytelling and providing a dynamic experience that engages and inspires.</p>
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
