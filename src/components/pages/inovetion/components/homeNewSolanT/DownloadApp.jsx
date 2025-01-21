'use client';
import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../../pages/lottieAnimation/animation_3.json';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaFontAwesome } from 'react-icons/fa6';

const DownloadApp = () => {
  const [hovered, setHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotate: -5 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, type: 'spring' },
    },
  };
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3, type: 'spring', stiffness: 300 } },
  };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div
      className="min-h-screen p-8  text-white flex justify-center items-center bg-black overflow-hidden"
      id="downloadApp"
    >
      <motion.div
        className="m-auto container flex flex-col lg:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="lg:w-1/2 flex justify-center items-center relative perspective-1000"
          variants={itemVariants}
          style={{ rotateX, rotateY, z: 100 }}
        >
          <div className="relative w-full max-w-md lg:max-w-lg me-auto">
            <Lottie animationData={animationData} loop={true} style={{ height: '100%', width: '100%' }} />
          </div>
        </motion.div>
        <div className="lg:w-1/2 flex flex-col items-start lg:items-start text-center lg:text-left md:mt-0 mt-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8"
            variants={itemVariants}
          >
            Download the MomentMint App
          </motion.h2>
          <motion.p
            className="text-[12px] sm:text-sm md:text-md lg:text-lg text-gray-300 mb-10 lg:mb-12"
            variants={itemVariants}
          >
            Share real-time moments, earn crypto instantly. Blockchain verifies authenticity.
            <br />
            Turn special experiences into NFTs. Live, share, and profit from your authentic life.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center lg:justify-start gap-6 m-auto md:m-0"
            variants={itemVariants}
          >
            <motion.a
              href="https://docs.google.com/uc?export=download&id=1cMX55DsU3RVn88i-q3QUIF_0zHOujUaV"
              className="group w-full relative sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-lg sm:text-xl rounded-md shadow overflow-hidden"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: hovered ? 1.5 : 0, opacity: hovered ? 0.3 : 0 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center justify-center m-auto">
                <FaFontAwesome  className="mr-3 text-2xl" />
                Download App
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadApp;