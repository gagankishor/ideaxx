import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const AnimatedText = ({ score }) => {
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    // If score is not defined, do nothing
    if (!score) return;

    const duration = 2000; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const increment = score / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= score) {
        clearInterval(interval);
        setCurrentScore(score); // Ensure it ends at the exact score
      } else {
        setCurrentScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [score]);

  return (
    <>
      {currentScore}
    </>
  );
};
AnimatedText.propTypes = {
 score: PropTypes.number.isRequired, // Ensure score is a required number
};
export default AnimatedText;
