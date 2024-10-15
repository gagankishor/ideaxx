import React from "react";
import "./TrustedBySection.css"; // Import the CSS file

const TrustedBySection = () => {
  return (
    <div className="base-layout-segment-component-4">
      <div className="segment-wrapper">
        <div className="top-logos-component">
          {/* Title */}
          <div className="logosTitleWrapper">
            <h2>Trusted by 225,000+ customers, from startups to enterprises</h2>
          </div>

          {/* Logos section */}
          <div className="logos-container">
            {["cocacola.png", "cocacola.png", "cocacola.png", "cocacola.png"].map((src, index) => (
              <img key={index} src={src} alt="Company logo" className="company-logo" />
            ))}
          </div>

          {/* Highlight Section */}
          <div className="logos">
            <div className="highlight-section">
              <div className="col col-left">
                <img src="gartner.avif" alt="Gartner logo" className="gartner-logo" />
                <div className="col-left-content" style={{fontSize:'38px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>

              <div className="col col-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span className="highlight-text">
                  Sapiente impedit fugiat voluptatibus accusamus incidunt expedita quos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
