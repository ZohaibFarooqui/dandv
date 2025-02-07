import React from "react";

function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-wrapper">
        {/* Animated Element */}
        <div className="mission-graphic">
        <img className="mission-background-video" src="missiongif.gif"></img>
          {/* <video autoPlay loop muted playsInline className="mission-background-video">
            <source src="/missiongif.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>

        {/* Text Content */}
        <div className="mission-content">
          <h2>OUR MISSION</h2>
          <p>
            Our mission at Devs & Visuals is to empower businesses and individuals by delivering
            innovative, custom-tailored digital solutions that drive growth and
            success. We aim to exceed client expectations through creativity,
            precision, and the use of cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
