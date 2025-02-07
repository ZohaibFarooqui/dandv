import React from "react";

function EBook()
{
    return(
        <div className="web-development-container">
      {/* Video Section */}
      <div className="video-section">
        <video
          className="web-background-video"
          src="servicesbg.mp4"
          playsInline
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Tagline/Header */}
        <div className="header-tagline">
          <h1>E-BOOK</h1>
          <p>
          Your one step solution. For comprehensive software and design needs. We are committed to transforming your ideas into custom digital experiences, tailored to your specific needs. Making client saisfaction our top priority. We turn your vision into reality.
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-items">
            <div className="offer-item">
              <img src="ghost writing.png" alt="Software Development" />
              <h3>Ghostwriting</h3>
              <p>We offer expert e-book ghostwriting services, helping you turn your ideas into professionally written, engaging content. Our team works closely with you to capture your voice, vision, and message, creating high-quality e-books that resonate with your target audience. Whether you're looking to share knowledge, tell a story, or build your brand, we ensure your e-book is well-researched, captivating, and polished, ready for publication and success.</p>
            </div>
            <div className="offer-item">
              <img src="ebook publishing 2.png" alt="Network Security" />
              <h3>E-Book Publishing</h3>
              <p>We provide comprehensive e-book publishing services to help bring your work to a global audience. From formatting and design to distribution and marketing, our team ensures that your e-book is professionally prepared for all major platforms. Whether you're self-publishing or looking for a tailored approach, we handle every step of the process, ensuring your e-book is polished, accessible, and positioned for success in the competitive digital market.</p>
            </div>
            <div className="offer-item">
              <img src="ebook marketing.png" alt="Cloud Hosting" />
              <h3>E-Book Marketing</h3>
              <p> We offer tailored e-book marketing services designed to help your book reach its full potential. Our team employs a strategic approach, utilizing social media campaigns, email marketing, SEO, and targeted advertising to increase visibility and drive sales. We work closely with you to craft compelling promotional content, build an engaged reader base, and ensure your e-book stands out in a crowded market, ultimately helping you achieve long-term success.</p>
            </div>
          </div>
        </section>

        {/* Why Devs and Visuals Section */}
        <section className="why-devs-visuals">
          <h2>Why Devs and Visuals?</h2>
          <div className="devs-visuals-items">
            <div className="devs-item">
              <h3>Wide Network</h3>
              <img src="Wide network.png"></img>
              <p>No matter where you are, we’ve got you covered.</p>
              
            </div>
            <div className="devs-item">
              <h3>Unmatched Support</h3>
              <img src="Customer Support.png"></img>
              <p>Talk to us about any concerns, 24/7.</p>
            </div>
            <div className="devs-item">
              <h3>Beginner-Friendly</h3>
              <img src="User Friendly.png"></img>
              <p>Our interface is simple and easy to use.</p>
            </div>
          </div>
        </section>




        
      </div>
    </div>
    );
}

export default EBook;