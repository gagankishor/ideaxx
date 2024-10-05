import React from "react";

const TrustedBySection = () => {
  return (
    <div className="base-layout-segment-component-4" style={{ padding: "70px" }}>
      <div className="segment-wrapper">
        <div className="top-logos-component">
          {/* Title */}
          <div className="logosTitleWrapper" style={{ textAlign: "center" }}>
            <h2> Trusted by 225,000+ customers, from startups to enterprises </h2>
          </div>

          {/* Logos section */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0px 200px",
            }}
          >
            {["cocacola.png", "cocacola.png", "cocacola.png", "cocacola.png"].map(
              (src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Company logo"
                  style={{ width: "80px", margin: "0px 20px" }}
                />
              )
            )}
          </div>

          {/* Highlight Section */}
          <div className="logos" style={{ padding: "150px 40px" }}>
            <div
              className="row"
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                height: "400px",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="col"
                style={{
                  padding: "80px",
                  width: "50%",
                  fontSize: "50px",
                  position: "relative",
                }}
              >
                <img
                  src="gartner.avif"
                  alt="Gartner logo"
                  style={{ width: "180px", position: "absolute", top: "0" }}
                />
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>

              <div
                className="col"
                style={{
                  padding: "80px",
                  width: "50%",
                  fontSize: "22px",
                  fontWeight: "300",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span style={{ fontWeight: "700" }}>
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
