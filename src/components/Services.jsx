import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import * as Icons from "react-icons/fa"; // Import react-icons dynamically

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize React Router navigation

  // Fetch services data from the API
  const fetchServices = async () => {
    try {
      const response = await axios.get("/api/services");
      setServices(response.data);
    } catch (err) {
      console.error("Error fetching services:", err.message);
      setError("Failed to fetch services. Please try again later.");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Handle click event for each service card
  const handleServiceClick = (routes) => {
    if (routes) {
      navigate(routes); // Navigate to the respective route
    } else {
      console.error("No route defined for this service.");
    }
  };

  return (
    <section id="services" className="services-background">
      <div className="container">
        {/* <h2 className="section-title">Our Services</h2> */}
        {error && <p className="error-message">{error}</p>}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = Icons[service.icon];
            return (
              <div
                className="service-card"
                key={service.id}
                onClick={() => handleServiceClick(service.routes)} // Use `routes` instead of `route`
              >
                <div className="service-icon-container">
                  {Icon ? <Icon className="service-icon" /> : null}
                </div>
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
