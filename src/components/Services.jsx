import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import * as Icons from "react-icons/fa"; // Import react-icons dynamically
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "./Services.css"; // Ensure your styles are maintained

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { id: 1, name: "Web Development", description: "Full-stack web development services.", icon: "FaDesktop", routes: "/web-development" },
    { id: 2, name: "Graphic Designing", description: "Creative graphic designing services.", icon: "FaPaintBrush", routes: "/graphic-design" },
    { id: 3, name: "App Development", description: "Mobile App Development services.", icon: "FaMobile", routes: "/app-development" },
    { id: 4, name: "Animation", description: "2D and 3D Animations.", icon: "FaGrav", routes: "/animations" },
    { id: 5, name: "E-Book", description: "Custom Electronic Book Design.", icon: "FaBook", routes: "/ebook" },
    { id: 6, name: "Digital Marketing", description: "Digital Marketing Services.", icon: "FaHashtag", routes: "/digital-marketing" },
    { id: 7, name: "PPC", description: "Pay Per Click Services.", icon: "FaPaperPlane", routes: "/pay-per-click" },
    { id: 8, name: "BA", description: "Business Analysis Services.", icon: "FaUserTie", routes: "/business-analysis" },
    { id: 9, name: "PM", description: "Project Management Services.", icon: "FaUsers", routes: "/project-management" },
  
  ];

  // Slick Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <section id="services" className="services-background">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <Slider {...settings}>
          {services.map((service) => {
            const Icon = Icons[service.icon];
            return (
              <div 
                className="service-card" 
                key={service.id} 
                onClick={() => navigate(service.routes)}
              >
                <div className="service-icon-container">
                  {Icon ? <Icon className="service-icon" /> : null}
                </div>
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
