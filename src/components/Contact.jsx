import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i3zybnk", // Replace with your EmailJS Service ID
        "template_prxy0mh", // Replace with your EmailJS Template ID
        form.current, {publicKey: 'LPklQf6m-XQ-YUZ2U',}
        
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    // Reset the form fields
    e.target.reset();
  };

  return (
    <div className="contact-container">
      {/* Background Video */}
      <div className="video-overlay">
        <video autoPlay loop playsInline muted className="background-video">
          <source src="/fronvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Left Section: Contact Details */}
      <div className="left-section">
        <h2>Get a quote or set up a consultation.</h2>
        <div className="details">
          {/* <p><strong>PHONE</strong><br />(123) 456-7890</p> */}
          <p><strong>EMAIL</strong><br />info@devsandvisuals.com</p>
           <p><strong>SOCIAL</strong></p>
         <div className="social-media-links">
                    <a href="https://www.facebook.com/share/15pGfSK3hF/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                   {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaX /></a>  */}
                   <a href="https://www.instagram.com/devsandvisuals/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                   <a href="https://www.linkedin.com/company/devs-and-visuals/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                 </div>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="right-section">
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
