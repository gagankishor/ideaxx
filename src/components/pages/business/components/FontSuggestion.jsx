import PropTypes from 'prop-types';

export const FontSuggestion = ({ fontSugg, ideaFont, handleCardClick }) => (
  <div className="slider" style={{ justifyContent: "space-around" }}>
    {fontSugg.map((item, index) => (
      <div
        key={index}
        className="brand-name-sugg-card"
        onClick={() => handleCardClick(item)}
        style={{
          borderRadius: "5px",
          fontFamily: item,
          backgroundColor: ideaFont === item ? "#d3d3d3" : "var(--bg-highlight)"
        }}
      >
        <p className="item">{item}</p>
      </div>
    ))}
  </div>
);

// Define propTypes
FontSuggestion.propTypes = {
  fontSugg: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of font names
  ideaFont: PropTypes.string.isRequired, // Current font selected
  handleCardClick: PropTypes.func.isRequired, // Function to handle clicks
};

// Define defaultProps (optional)
FontSuggestion.defaultProps = {
  fontSugg: [],
  ideaFont: "",
};

export default FontSuggestion;
