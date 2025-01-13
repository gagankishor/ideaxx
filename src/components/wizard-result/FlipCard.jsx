"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Clock } from "lucide-react";
import PropTypes from "prop-types";

const FlipCard = ({ value, label, isTop, isFlipping }) => {
  return (
    <div className="relative w-24 h-36 perspective-1000 mx-1">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 
          bg-gradient-to-br from-white/10 to-white/5 
          border border-white/20 
          rounded-2xl 
          shadow-2xl 
          backdrop-blur-sm
          flex items-center justify-center"
        >
          <div className="absolute top-0 left-0 right-0 h-1 
            bg-gradient-to-r from-transparent via-white/30 to-transparent 
            opacity-50 rounded-t-2xl"
          />
          <span className="text-6xl font-light text-white/90 
            drop-shadow-[0_4px_6px_rgba(255,255,255,0.2)]">
            {value}
          </span>
          <div className="absolute bottom-[-22px] left-0 right-0 text-center 
            text-sm text-white/60 tracking-wider uppercase"
          >
            {label}
          </div>
        </div>
      </div>

      {/* Flipping Mechanism */}
      <div className={`absolute inset-0 transform-style-3d transition-all duration-500 
        ${isFlipping ? (isTop ? '-rotate-x-180' : 'rotate-x-180') : ''}`}
      >
        {/* Top Half */}
        {/* <div className={`absolute top-0 left-0 right-0 h-1/2 overflow-hidden 
          bg-gradient-to-br from-white/20 to-white/10 
          border-b border-white/30 
          rounded-t-2xl 
          flex items-center justify-center 
          backface-hidden ${isTop ? '' : 'rotate-x-180'}`}
        >
          <span className="text-6xl font-light text-white/90 
            drop-shadow-[0_4px_6px_rgba(255,255,255,0.2)]">
            {isTop ? value : previousValue}
          </span>
        </div> */}

        {/* Bottom Half */}
        {/* <div className={`absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden 
          bg-gradient-to-br from-white/10 to-white/5 
          border-t border-white/20 
          rounded-b-2xl 
          flex items-center justify-center 
          backface-hidden ${isTop ? 'rotate-x-180' : ''}`}
        >
          <span className="text-6xl font-light text-white/90 
            drop-shadow-[0_4px_6px_rgba(255,255,255,0.2)]">
            {isTop ? previousValue : value}
          </span>
        </div> */}
      </div>
    </div>
  );
};
FlipCard.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    isTop: PropTypes.bool.isRequired,
    isFlipping: PropTypes.bool.isRequired,
    previousValue: PropTypes.number.isRequired
  };
export default function FlipCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [previousTimeLeft, setPreviousTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [flippingUnits, setFlippingUnits] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsLaunched(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };

        const newFlippingUnits = {
          seconds: newTimeLeft.seconds !== previousTimeLeft.seconds,
          minutes: newTimeLeft.minutes !== previousTimeLeft.minutes,
          hours: newTimeLeft.hours !== previousTimeLeft.hours,
          days: newTimeLeft.days !== previousTimeLeft.days
        };

        setPreviousTimeLeft(timeLeft);
        setTimeLeft(newTimeLeft);
        setFlippingUnits(newFlippingUnits);

        setTimeout(() => {
          setFlippingUnits({
            days: false,
            hours: false,
            minutes: false,
            seconds: false
          });
        }, 500);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [previousTimeLeft, timeLeft]);

  const renderFlipUnit = (value, label, isFlipping) => (
    <div className="flex flex-col items-center">
      <div className="relative flex">
        <FlipCard 
          value={Math.floor(value / 10)} 
          label={label} 
          isTop={true} 
          isFlipping={isFlipping}
          previousValue={Math.floor(previousTimeLeft[label.toLowerCase()] / 10)}
        />
        <FlipCard 
          value={value % 10} 
          label={label} 
          isTop={false} 
          isFlipping={isFlipping}
          previousValue={previousTimeLeft[label.toLowerCase()] % 10}
        />
      </div>
    </div>
  );

  if (isLaunched) {
    return (
      <div className="flex items-center justify-center h-screen 
        bg-gradient-to-br from-indigo-900 via-purple-900 to-black 
        overflow-hidden"
      >
        <motion.div 
          className="text-center space-y-6 p-8 
            bg-white/5 rounded-3xl border border-white/10 
            backdrop-blur-lg shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Rocket className="mx-auto mb-4 w-24 h-24 
            text-white animate-bounce 
            drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
          />
          <h1 className="text-6xl font-extralight text-white 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-white via-white/80 to-white/60">
            We Have Launched!
          </h1>
          <p className="text-xl text-white/70">
            Something amazing is now live!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12 
      bg-gradient-to-br from-indigo-900 via-purple-900 to-black 
      overflow-hidden relative"
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: Math.random() * 40 - 20,
              y: Math.random() * 40 - 20,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center text-white space-y-6 
        bg-white/5 p-8 rounded-3xl border border-white/10 
        backdrop-blur-lg shadow-2xl"
      >
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Clock className="mx-auto mb-4 w-16 h-16 
            text-white/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
          />
          <h1 className="text-5xl font-extralight mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-white via-white/80 to-white/60">
            🚀 Launching Soon!
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Get ready for something extraordinary
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 md:space-x-8">
          {renderFlipUnit(timeLeft.days, 'Days', flippingUnits.days)}
          {renderFlipUnit(timeLeft.hours, 'Hours', flippingUnits.hours)}
          {renderFlipUnit(timeLeft.minutes, 'Minutes', flippingUnits.minutes)}
          {renderFlipUnit(timeLeft.seconds, 'Seconds', flippingUnits.seconds)}
        </div>

        <motion.p 
          className="text-sm text-white/60 mt-18 tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Exciting updates are just around the corner!
        </motion.p>
      </div>
    </div>
  );
}

// Additional Tailwind CSS classes for 3D effects
