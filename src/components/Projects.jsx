import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);   

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects-background">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag. 
          Please download the video <a href="/video.mp4">here</a>.
        </video>
      </div>

      {/* Projects Content */}
      <h2>Our Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img
              src={`data:image/jpeg;base64,${project.image}`}
              alt={project.title}
            />
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
