import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Mission from "./Mission";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
// import "./Home.css"; // Assuming CSS is in a separate file

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Video */}
      <div className="video-overlay">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="fronvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
    {/* <image className= "gray-image"src='/gray.png'></image> */}
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h2>Your One Step Solution</h2>
          <h1>For All Design and Development Needs</h1>
          <img src="/Landing page gif.gif"></img>
          <p>
          Welcome to Devs & Visuals, where we transform your ideas into custom digital solutions with creativity, precision, and cutting-edge technology.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="filled-button">
              Get Started
            </Link>
            <Link to="/contact" className="outlined-button">
              Learn More
            </Link>
          </div>
        </div>

        
      </header>
        <Mission/>
      
        <Services/>
        <Testimonials/>
      {/* Testimonials Section */}
      

      <CTA/>
    </div>
  );
};

export default Home;
