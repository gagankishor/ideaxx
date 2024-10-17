import React from "react";
import "./TrustedBySection.css"; // Import the CSS file

const TrustedBySection = () => {
  return (
    <div className="base-layout-segment-component-4">
      <div className="segment-wrapper">
        <div className="top-logos-component">
          {/* Title */}
          <div className="logosTitleWrapper">
            <h2 style={{fontWeight:'300',fontSize:'16px'}}>Trusted by 500+ customers, from startups to enterprises</h2>
          </div>
          {/* Logos section */}
          <div className="logos-container">
            <a href="https://www.vantompower.com/" className="image-contener">

            <img src="https://static.wixstatic.com/media/b2643d_716342297bd342eca48b056df9dd297e~mv2.png/v1/fill/w_210,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled-2%20(2)_edited.png" alt="Company logo" className="company-logo" style={{backgroundColor:'black'}} />
            <h3 className="image-contener-h" style={{fontWeight:"200" ,fontSize:'12px'}}>Vantom power</h3>
            </a>
            <a href="https://pickitup.ae/">

            <img src="https://pickitup.ae/images/up@300_rec.webp" alt="Company logo" className="company-logo" style={{backgroundColor:''}} />
            <h3 className="image-contener-h" style={{fontWeight:"200" ,fontSize:'12px'}}>Pickitup</h3>
            </a>
            <a href="">

            <img src="https://static.wixstatic.com/media/b2643d_b12bc7ec2a1345fb8f7b7c598ef50fd1~mv2.png/v1/fill/w_367,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Basha-Export-logos.png" alt="Company logo" className="company-logo" style={{backgroundColor:''}} />
            <h3  className="image-contener-h" style={{fontWeight:"200" ,fontSize:'12px'}}>Basha impex</h3>
            </a>
            <a href="https://360homedecor.uk/">

            <img src="https://360homedecor.uk/assets/images/Ads%C4%B1z%20tasar%C4%B1m-1.gif" alt="Company logo" className="company-logo" style={{backgroundColor:'black'}} />
            <h3  className="image-contener-h" style={{fontWeight:"200" ,fontSize:'12px'}}>360 Home Decor</h3>
            </a>
            <a href="https://tecmicra.co.in/">

            <img src="/tecmicra.png" alt="Company logo" className="company-logo" style={{backgroundColor:''}} />
            <h3  className="image-contener-h" style={{fontWeight:"200" ,fontSize:'12px'}}>Tecmicra Solutions</h3>
            </a>
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
