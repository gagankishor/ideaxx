import React, { useState } from 'react';
import { FaDotCircle } from 'react-icons/fa';

export const SelectCard = ({ text, onClick }) => {
  const [selected, setSelected] = useState(false);

  // Toggle selected state and call the passed onClick function
  const handleClick = () => {
    setSelected(!selected);
    if (onClick) onClick(!selected); // Call the passed onClick function
  };

  return (
    <div
      className={`select-card ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <span>
        <li>
          {text}
        </li>
      </span>
    </div>
  );
};
