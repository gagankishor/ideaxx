'use client';
import { motion, useMotionValue } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../../../pages/lottieAnimation/animation_2.json';
import { FaCameraRetro, FaChartLine, FaCoins, FaDiamond, FaUpload, FaUserPlus } from 'react-icons/fa6';

const HowItWorks = () => {
  const steps = [
    {
      icon: FaUserPlus,
      title: 'Sign Up',
      description: 'Create your profile and connect your crypto wallet.',
    },
    {
      icon: FaCameraRetro,
      title: 'Capture Moments',
      description: 'Use the app to capture real-time experiences as they happen.',
    },  
    {
      icon: FaUpload,
      title: 'Share Instantly',
      description: 'Upload and share your authentic moments with the community.',
    },
    {
      icon: FaCoins,
      title: 'Earn Crypto',
      description: 'Receive cryptocurrency rewards for your shared moments.',
    },
    {
      icon: FaDiamond,
      title: 'Create NFTs',
      description: 'Turn special moments into unique digital collectibles.',
    },
    {
      icon: FaChartLine,
      title: 'Build Your Influence',
      description: 'Grow your following and unlock more earning potential.',
    },
  ];

  // Move these hooks outside the map callback
  const xOffset = useMotionValue(0);
  const yOffset = useMotionValue(0);
  return (
    <div className="min-h-screen bg-black p-8 text-white flex flex-col justify-evenly relative overflow-hidden">
      <div className="m-auto container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 perspective-1000">Turn life into digital gold</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: 'spring', delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  style={{ x: xOffset, y: yOffset }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const moveX = (e.clientX - centerX) / 10;
                    const moveY = (e.clientY - centerY) / 10;
                    xOffset.set(moveX);
                    yOffset.set(moveY);
                  }}
                  onMouseLeave={() => {
                    xOffset.set(0); 
                    yOffset.set(0);
                  }}
                  className="bg-[#1b1b25] group backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:bg-purple-500/20"
                >
                  <div className="bg-[#272731] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <step.icon
                      className="text-2xl shadow-sm text-[#8639ff] transition-colors duration-300 group-hover:text-white"
                      width={35}
                      height={35}
                    />
                  </div>
                  <h3 className="text-2xl text-left text-white font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="lg:w-1/2 flex justify-center items-center perspective-1000"
          >
            <div className="w-full max-w-md">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
