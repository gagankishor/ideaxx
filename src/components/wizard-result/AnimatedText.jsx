import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const AnimatedText = ({ score }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const parsedScore = parseFloat(score);
  
  useEffect(() => {
    if (typeof parsedScore !== "number" || isNaN(parsedScore)) {
      console.error("Invalid score value:", parsedScore);
      setCurrentScore(0); // Fallback value
      return;
    }
    else{

      
      const duration = 2000; // Total animation duration in ms
    const steps = 60; // Number of steps for the animation
    const increment = parsedScore / steps; // Value to add per step
    const intervalDuration = duration / steps; // Time per step in ms

    let current = 0; // Ensure `current` is always a number
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount += 1;
      current = stepCount === steps ? parsedScore : current + increment;

      // Ensure current is a valid number before updating the state
      if (typeof current === "number" && !isNaN(current)) {
        setCurrentScore(parseFloat(current.toFixed(2)));
      } else {
        console.error("Invalid current value during animation:", current);
        clearInterval(interval);
      }
      
      if (stepCount >= steps) {
        clearInterval(interval); // Clear the interval at the final step
      }
    }, intervalDuration);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }
  }, [score]);

  return <>{currentScore}</>;
};

AnimatedText.propTypes = {
  score: PropTypes.number.isRequired, // Ensure score is a required number
};

export default AnimatedText;
