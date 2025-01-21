'use client';
import Lottie from 'lottie-react';
import animationData from '../../../../pages/lottieAnimation/animation_1.json';
import { motion } from 'framer-motion';
import { FaCameraRetro, FaDiamond, FaFontAwesome } from 'react-icons/fa6';
import { FaCoins, FaLock } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaCameraRetro,
      title: 'Real-Time Sharing',
      description: 'Capture and share authentic moments as they happen.',
    },
    {
      icon: FaCoins,
      title: 'Earn Crypto',
      description: 'Get rewarded with cryptocurrency for sharing your experiences.',
    },
    {
      icon: FaLock,
      title: 'Blockchain Verified',
      description: 'Ensure the authenticity of your shared moments with blockchain technology.',
    },
    {
      icon: FaDiamond,
      title: 'Create NFTs',
      description: 'Turn your special moments into unique digital collectibles.',
    },
  ];
  return (
    <div className="min-h-screen bg-black p-8 md:p-16 bg-gradient-to-b from-[#131128] to-[#1D1B3F] text-white flex flex-col justify-evenly overflow-hidden">
      <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-0 capitalize">Your life highlights, now with rewards</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 m-auto max-w-screen-lg relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className={`bg-[#1D1B3F] shadow-xl p-6 rounded-2xl relative overflow-hidden group ${
              index === 1 ? 'md:col-start-3' : ''
            }`}
          >
            <div className="bg-[#6639e4] w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4">
              <FaFontAwesome icon={feature.icon} className="text-lg md:text-2xl" width={30} height={30} />
            </div>
            <h3 className="text-lg md:text-xl text-left text-white font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="md:col-start-2 md:row-start-1 md:row-span-2 flex items-center justify-center sm:block hidden"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Lottie animationData={animationData} loop={true} style={{ height: '100%', width: '100%' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;