// BrandDisplay.js
import React from 'react';

export const BrandDisplay = ({ brandData, ideaFont }) => (
  <div className="brand-logo-font">
    <div className="card" style={{ width: "unset" }}>
      <h2 className="brand-name align-middle">
        {brandData?.brand_name || "Please select brand name"}
      </h2>
    </div>
    <div className="card">
      <h2 className="brand-name align-middle">
        <img
          src={brandData?.logo ? brandData?.logo : "/logo.png"}
          alt="Uploaded Logo"
          className="uploaded-logo"
        />
      </h2>
    </div>
    <div className="card" style={{ backgroundColor: "#d3d3d3", width: "unset", minWidth: "180px" }}>
      <h2 className="brand-name align-middle" style={{ fontFamily: ideaFont }}>
        {brandData?.primary_font || ideaFont}
      </h2>
    </div>
  </div>
);
