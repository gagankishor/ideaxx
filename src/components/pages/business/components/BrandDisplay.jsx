// BrandDisplay.js
import PropTypes from 'prop-types';

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
BrandDisplay.propTypes = {
  brandData: PropTypes.shape({
    brand_name: PropTypes.string,
    logo: PropTypes.string,
    primary_font: PropTypes.string,
  }),
  ideaFont: PropTypes.string.isRequired,
};

// Define default props (optional)
BrandDisplay.defaultProps = {
  brandData: {
    brand_name: "",
    logo: "/logo.png",
    primary_font: "Arial",
  },
};