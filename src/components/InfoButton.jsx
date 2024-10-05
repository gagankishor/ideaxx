import React from "react";
import './InfoButton.css';

const InfoButton = ({title}) => {
  return (
    <div className="info-container">
      <button className="info-button">i</button>
      <div className="info-content">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default InfoButton;
