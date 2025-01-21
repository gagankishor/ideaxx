'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const HomePage = () => {
  const titleControls = useAnimation();
  const titleY = useMotionValue(0);

  useEffect(() => {
    const titleAnimation = async () => {
      await titleControls.start({
        y: ['-140px', '0px'],
        opacity: [0, 1],
        transition: { duration: 2 },
      });
      titleControls.start({
        y: ['0px', '-10px', '0px'],
        transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
      });
    };
    titleAnimation();
  }, [titleControls]);

  const cryptoImageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <>
      <Image src="/images/bg_home.svg" layout="fill" objectFit="cover" className="z-[-1]" alt="Background" />
      <div className="md:min-h-[91vh] bg-black min-h-[50vh] flex flex-col justify-center items-center">
        <div className="relative w-full max-w-4xl text-center">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cryptoImageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`absolute sm:block hidden ${
                i === 1
                  ? 'top-0 left-0 sm:-top-12 sm:-left-12 md:-top-24 md:-left-24'
                  : i === 2
                  ? 'top-0 right-0 sm:-top-12 sm:-right-12 md:-top-24 md:-right-24'
                  : i === 3
                  ? 'top-1/2 -translate-y-1/2 left-0 sm:-left-16 md:-left-32'
                  : 'top-1/2 -translate-y-1/2 right-0 sm:-right-16 md:-right-32'
              }`}
            >
              <Image
                src={`/images/cryptocurrency_${i}.svg`}
                width={60}
                height={60}
                alt={`cryptocurrency_${i}`}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </motion.div>
          ))}

          <motion.h1
            animate={titleControls}
            style={{ y: titleY }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:block"
          >
            Turn Special Moments into NFTs
          </motion.h1>

          <motion.h2
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-2xl md:text-3xl text-white mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-center"
          >
            <Image
              src="/images/solana-icon.png"
              width={48}
              height={48}
              alt="solana icon"
              className="mb-2 sm:mb-0 sm:mr-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            Your Memories, Your Assets
          </motion.h2>
        </div>

        <div className="w-full max-w-4xl flex justify-center items-center space-x-4">
          <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
            <Link
              href="#downloadApp"
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-lg sm:text-xl rounded-md shadow inline-block transition duration-500"
              role="button"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomePage;