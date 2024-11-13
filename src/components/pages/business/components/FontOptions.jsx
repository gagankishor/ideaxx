import PropTypes from 'prop-types';

export const FontOptions = ({ fonts, handleFontChange }) => (
  <>
    <h2 id="section-heading">Primary Font Options</h2>
    <select className="font-options" onChange={handleFontChange}>
      <option>Select Primary Font</option>
      {fonts.map((font, index) => (
        <option key={index} value={font.value}>
          {font.name}
        </option>
      ))}
    </select>
    <p>
      This is the main font used in your logo and primary brand elements.
      It should be distinctive, easy to read, and reflective of your brand identity.
    </p>
  </>
);

// Define propTypes
FontOptions.propTypes = {
  fonts: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleFontChange: PropTypes.func.isRequired,
};

// Define defaultProps (optional)
FontOptions.defaultProps = {
  fonts: [],
};

export default FontOptions;
