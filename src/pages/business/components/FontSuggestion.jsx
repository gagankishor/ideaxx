// FontSuggestion.js
import React from 'react';

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
