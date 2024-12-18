"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Clock } from "lucide-react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownUnit = ({ value, label }) => (
    <motion.div 
      className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-5xl font-bold text-white tabular-nums">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm text-white/70 mt-1">{label}</span>
    </motion.div>
  );

  if (isLaunched) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-500 to-emerald-700 text-white">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Rocket className="mx-auto mb-4 w-24 h-24 text-white animate-bounce" />
          <h1 className="text-5xl font-bold">We Have Launched!</h1>
          <p className="text-xl">Something amazing is now live!</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-600 to-purple-800 overflow-hidden">
      <div className="relative w-full max-w-3xl p-6">
        <motion.div 
          className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="relative z-10 text-center text-white space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Clock className="mx-auto mb-4 w-16 h-16 text-white/80" />
            <h1 className="text-5xl font-bold mb-4">🚀 Launching Soon!</h1>
            <p className="text-xl text-white/80 mb-8">Get ready for something extraordinary</p>
          </motion.div>

          <div className="flex justify-center space-x-4 md:space-x-8">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          <motion.p 
            className="text-sm italic text-white/60 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Exciting updates are just around the corner!
          </motion.p>
        </div>
      </div>
    </div>
  );
}