import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Mission from "./Mission";
// import "./Home.css"; // Assuming CSS is in a separate file

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Video */}
      <div className="video-overlay">
        <video autoPlay loop muted className="background-video">
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    {/* <image className= "gray-image"src='/gray.png'></image> */}
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h2>Your One Step Solution</h2>
          <h1>For All Design and Development Needs</h1>
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
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>“The team delivered exceptional results! Their expertise
            transformed our business.”</p>
            <span>- Client A</span>
          </div>
          <div className="testimonial">
            <p>“Their innovative approach and dedication to excellence set them
            apart.”</p>
            <span>- Client B</span>
          </div>
          <div className="testimonial">
            <p>“Working with this team was a game-changer for us.”</p>
            <span>- Client C</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Vision Into Reality?</h2>
        <Link to="/projects" className="cta-button">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
