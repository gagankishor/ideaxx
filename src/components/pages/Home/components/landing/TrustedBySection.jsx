"use client"
import "./TrustedBySection.css"; // Import the CSS file

const TrustedBySection = () => {
  return (
    <div className="base-layout-segment-component-4">
      <div className="segment-wrapper">
        <div className="top-logos-component">
          {/* Title */}
          <div style={{marginTop:'100px'}}>
            <div className="logosTitleWrapper">
              <h2 className="main-haedding-h2" >
                Trusted by 500+ customers, from startups to enterprises
              </h2>
            </div>
            <div className="logos-container">
              <a href="https://www.vantompower.com/" className="image-contener">
                <img
                  src="trustedby/Layer.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "white" }}
                />
              </a>
              <a href="https://pickitup.ae/">
                <img
                  src="trustedby/up@300_rec.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "" }}
                />
              </a>
              <a href="">
                <img
                  src="trustedby/BashaExportlogos.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "" }}
                />
                
              </a>
              <a href="https://360homedecor.uk/">
                <img
                  src="trustedby/360HOMEDECORLOGO.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "white" }}
                />
              </a>
              <a href="https://tecmicra.co.in/">
                <img
                  src="trustedby/T.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "white" }}
                />
              </a>
            </div>
          </div>
          {/* Highlight Section */}
          <div className="logos">
            <div className="highlight-section">
              <div className="col col-left">
                {/* <img
                  src="gartner.avif"
                  alt="Gartner logo"
                  className="gartner-logo"
                /> */}
                <div className="col-left-content">
                From Concept to Execution Your All-in-One Business Solutions
                </div>
              </div>

              <div className="col col-right">
                Welcome to ideax, the ultimate platform for entrepreneurs! 
                <span className="highlight-text">
                 Whether you’re brainstorming 
                your next big idea or looking for a dedicated online team to bring it to life, we offer the tools 
                and expertise you need to succeed.
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