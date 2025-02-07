import React, { useState } from "react";

const projects = {
  graphicDesign: [
    { id: 1, title: "Social Media Post Design", image: "graphic/portfolio/poster.jpeg", description: "A Modern Product Discount Post for a Startup." },
    { id: 2, title: "Character Art", image: "graphic/portfolio/character.jpg", description: "A Character Art for Gamers and Streamers" },
    { id: 3, title: "Gothic Character Art", image: "graphic/portfolio/gothic.jpg", description: "A Gothic Character Art for Gamers and Streamers" },
    { id: 4, title: "Chibi Art", image: "graphic/portfolio/Chibi.jpg", description: "Charming Chibi art with vibrant colors and playful details." },
    { id: 5, title: "Furry Dragon Art", image: "graphic/portfolio/furry_dragon.jpg", description: "Delightful furry dragon art featuring soft textures and vibrant, expressive details." },
    { id: 6, title: "Full Body Art", image: "graphic/portfolio/Full Body Art.jpg", description: "Enchanting full-body witch art set in a spooky Halloween background, filled with magical details and eerie charm." },
    { id: 7, title: "Manga Character Design", image: "graphic/portfolio/manga.jpg", description: "Dynamic manga character design with bold linework, expressive details, and authentic storytelling flair." },
    { id: 8, title: "Custom Emotes", image: "graphic/portfolio/emotes.jpeg", description: "Expressive custom emotes with vibrant designs, perfect for streams, chats, and community engagement." },
  ],
  webDevelopment: [
    { id: 1, title: "Nike Landing Page", image: "website/portfolio/Nike landing page.jpg", description: "Best Sneaker Hub To Get Your Most Desired Shoes." },
    { id: 2, title: "Scented Candle Store", image: "website/portfolio/honey.png", description: "Like Candles? We have got you covered with a scent" },
    { id: 3, title: "Prix MotorSports", image: "website/portfolio/Prix MotorSport.jpeg", description: "A One Stop Shop for all your MotorSports needs." },
    { id: 4, title: "Shopelloo E-Commerce Store", image: "website/portfolio/shopello.png", description: "An E-Commerce Store for all Electronic Gadgets." },
    { id: 5, title: "Air Max Landing Page", image: "website/portfolio/Air Max.jpeg", description: "Best Place to Buy Nike Air Max" },
  ],
  appDevelopment: [
    { id: 1, title: "Medicare App", image: "app/portfolio/Medicare app.jpg", description: "Simple and easy Medicare app for users to access their medical records." },
    { id: 2, title: "Auto Fusion A Car Purchasing App", image: "app/portfolio/app 1.png", description: "Auto Fusion A Car Purchasing App built on Flutter." },
    { id: 3, title: "ECommerce Store", image: "app/portfolio/app 2.png", description: "A platform for purchasing Clothes Online." },
  ],
  animations: [
    { id: 1, title: "Character Animation", image: "/animation/a22.gif", description: "A 3D animation of a 3D Character" },
    { id: 2, title: "Game Character", image: "/GameCharacterArt.jpg", description: "A Character Art for Game Developers" },
    { id: 3, title: "Product Showcase", image: "/ProductShowcase.jpg", description: "Image showcasing the features of a new product." },
    { id: 4, title: "3D Animation", image: "/animation/a11.gif", description: "A 3D animation of a furry character" },
    { id: 5, title: "Architecture Modeling", image: "/Architecture.jpg", description: "Image showcasing the features of a new product." },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("graphicDesign");
  const [selectedProject, setSelectedProject] = useState(null);

  // Reset modal when changing tabs
  const handleTabChange = (category) => {
    setActiveTab(category);
    setSelectedProject(null); // Clear previous selection
  };

  // Render projects based on active tab
  const renderProjects = () => {
    return projects[activeTab]?.map((project) => (
      <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
      </div>
    ));
  };

  return (
    <div className="portfolio-container">
      {/* Background Image */}
      <div className="portfolio-bg-overlay">
        <div className="background-image"></div>
      </div>

      {/* Header */}
      <h1 className="portfolio-header">Our Portfolio</h1>

      {/* Tabs Navigation */}
      <div className="portfolio-tabs">
        <button className={`tab-button ${activeTab === "graphicDesign" ? "active-tab" : ""}`} onClick={() => handleTabChange("graphicDesign")}>
          Graphic Design
        </button>
        <button className={`tab-button ${activeTab === "webDevelopment" ? "active-tab" : ""}`} onClick={() => handleTabChange("webDevelopment")}>
          Web Development
        </button>
        <button className={`tab-button ${activeTab === "appDevelopment" ? "active-tab" : ""}`} onClick={() => handleTabChange("appDevelopment")}>
          App Development
        </button>
        <button className={`tab-button ${activeTab === "animations" ? "active-tab" : ""}`} onClick={() => handleTabChange("animations")}>
          3D Models and Animation
        </button>
      </div>

      {/* Project Cards */}
      <div className="portfolio-projects">{renderProjects()}</div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
