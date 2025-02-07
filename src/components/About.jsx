import React from "react";

const About = () => {
  return (
   <div className="about-container">
      {/* Background Video */}
      <div className="about-video-overlay">
        <video autoPlay playsInline loop muted className="about-background-video">
          <source src="/fronvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
       {/* Content Section */}
       <div className="about-content">
        <h2>About</h2>
        <h1>Devs And Visuals</h1>
        <p>
        At Devs and Visuals, we believe that your imagination is our creation. We specialize in crafting custom software and eye-catching designs that bring your vision to life. Our expert team of developers and designers work hand-in-hand to create innovative, user-friendly solutions that captivate and inspire. Whether you need powerful websites, applications, stunning visuals or animations, we are here to turn your ideas into reality.
        </p>
      </div>
    </div>
    </div>
    
    // <div className="about-sec
    // tion">
    //   {/* Header */}
    //   <div className="about-header">
    //     <h1>
    //       About <span>Us</span>
    //     </h1>
    //   </div>

    //   {/* Breadcrumb */}
    //   <div className="breadcrumb">
    //     <a href="/">Home</a> <span>&gt;</span> About Us
    //   </div>

    //   {/* Main Content */}
    //   <div className="about-content">
    //     {/* Left Section */}
    //     <div className="about-left">
    //       <h2>
    //         Wellcome to <span>Blendwise Technologies</span>
    //       </h2>
    //       <p>
    //         At Blend Wise Technologies, we believe in the power of innovation
    //         and creativity to transform businesses. Founded with a vision to
    //         deliver cutting-edge digital solutions, our software house is
    //         committed to helping clients achieve their goals through tailored
    //         technology and design services.
    //       </p>
    //     </div>

    //     {/* Right Section */}
    //     <div className="features">
    //       <button className="feature-button">Reliable</button>
    //       <button className="feature-button">Fast Work</button>
    //       <button className="feature-button">Trusted</button>
    //     </div>
    //   </div>

    //   {/* Mission and Vision Section */}
    //   <div className="mission-vision">
    //     <div className="mission-vision-item">
    //       <h3>Our Mission</h3>
    //       <p>
    //         To provide innovative and reliable software solutions that empower
    //         businesses to thrive in a competitive digital landscape.
    //       </p>
    //     </div>
    //     <div className="mission-vision-item">
    //       <h3>Our Vision</h3>
    //       <p>
    //         To be a globally recognized software house known for delivering
    //         exceptional value to clients through creativity, expertise, and
    //         collaboration.
    //       </p>
    //     </div>
    //   </div>

    //   {/* WhatsApp Button */}
    //   <div className="whatsapp-button">
    //     <a
    //       href="https://wa.me/1234567890"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <img
    //         src="/path-to-your-whatsapp-icon.png"
    //         alt="WhatsApp"
    //       />
    //     </a>
    //   </div>
    // </div>
  );
};

export default About;
