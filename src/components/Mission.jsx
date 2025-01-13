import React from "react";

function Mission(){
    return(
        <section className="mission-section">
        <div className="mission-container">
      {/* Background Video */}
      {/* <div className="video-overlay">
        <video autoPlay loop muted className="mission-background-video">
          <source src="/mission.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      </div>
        <div className="mission-content">
          <h2>OUR MISSION</h2>
          <p>
            Our mission at Devs & Visuals is to empower businesses by delivering
            innovative, custom-tailored digital solutions that drive growth and
            success. We aim to exceed client expectations through creativity,
            precision, and the use of cutting-edge technology.
          </p>
        </div>
      </section>
        
      
      );
}

export default Mission;