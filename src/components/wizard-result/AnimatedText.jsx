import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const AnimatedText = ({ score }) => {
  const [currentScore, setCurrentScore] = useState(score);

  useEffect(() => {
    // if (typeof score !== "number" || isNaN(score)) return;

    const duration = 2000; // Total duration of the animation in ms
    const steps = 60; // Number of updates during the animation
    const increment = score / steps; // Amount to increment per step
    const intervalDuration = duration / steps; // Duration per step

    let current = increment;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount += 1;
      current = stepCount === steps ? score : current + increment;

      setCurrentScore(parseFloat(current.toFixed(2)));

      if (stepCount >= steps) {
        clearInterval(interval); // Clear interval at the last step
      }
    }, intervalDuration);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [score]);

  return <>{currentScore}</>;
};

AnimatedText.propTypes = {
  score: PropTypes.number.isRequired, // Ensure score is passed and is a number
};

export default AnimatedText;
