// FontOptions.js
import React from 'react';

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
