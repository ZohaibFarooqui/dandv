import React from 'react';
import { Link } from 'react-router-dom';
import { FaGreaterThan, FaHome } from 'react-icons/fa';

const Contact = () => (
  <section id="contact">
     <div className="about-header">
        
        <div className="about-header-content">
          <h2>Send us a messsage</h2>
          <h1>Contact Us</h1>
        </div>
        <div className="breadcrumbs">
        <div className="breadcrumb-content">
          <Link to="/"><FaHome /> Home </Link> 
          <FaGreaterThan />
          <span>Contact Us</span>
        </div>
      </div>

      </div>
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Fill out the form below or get in touch using our contact details.</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Our Contact Details</h2>
          <p><strong>Address:</strong> Block 7 Gulistan-e-Johar, Karachi, Pakistan</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> contact@prixmotorsport.com</p>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
