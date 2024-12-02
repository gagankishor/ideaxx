import PropTypes from "prop-types";
import { useState, useEffect } from "react";
const AnimatedText = ({ score }) => {
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    if (typeof score !== "number" || isNaN(score)) return; 
    const duration = 2000; 
    const steps = 60; 
    const increment = score / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= score) {
        clearInterval(interval);
        setCurrentScore(score); 
      } else {
        setCurrentScore(current);
      }
    }, duration / steps);
    return () => clearInterval(interval); 
  }, [score]);
  return (
    <>
      {typeof currentScore === "number" && !isNaN(currentScore)
        ? currentScore.toFixed(2)
        : "0.00"}
    </>
  );
};
AnimatedText.propTypes = {
  score: PropTypes.number.isRequired, 
};
export default AnimatedText;