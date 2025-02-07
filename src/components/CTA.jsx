import React from "react";
import { Link } from "react-router-dom";
function CTA(){
    return(  
      <section className="cta-section">
      <h2>Ready to Transform Your Vision Into Reality?</h2>
      <Link to="/projects" className="cta-button">
        Get Started
      </Link>
    </section>
    );
}

export default CTA;