import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TrustpilotReviews = () => {
  return (
    <div className="trustpilot-section badge-section text-white py-24 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 py-10 max-w-6xl "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 ">
          {/* Animated Trustpilot Rating */}
          <motion.div 
            className="trustpilot-rating text-center md:text-left "
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          > <img 
          src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg" 
          alt="Trustpilot Logo" 
          className="h-10 "
        />
            <div className="flex items-center  justify-center md:justify-start space-x-2 mb-2">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <FaStar 
                    className="text-yellow-400" 
                    size={28} 
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                <div className="relative">
                  <FaStar 
                    className="text-yellow-400 opacity-30" 
                    size={28} 
                  />
                  <FaStar 
                    className="text-yellow-400 absolute top-0 left-0 overflow-hidden"
                    size={28} 
                    style={{ clipPath: 'polygon(0 0, 80% 0, 80% 100%, 0 100%)' }}
                  />
                </div>
              </motion.div>
            </div>
            <div className="text-3xl font-bold tracking-wider">
              4.8 <span className="text-gray-400 text-xl">/ 5.0</span>
            </div>
            <div className="text-gray-400 mt-2 text-sm tracking-wide">
              Verified Reviews • 500+ Customers
            </div>
            
          </motion.div>

          {/* Animated Trustpilot Logo and Link */}
          <motion.div 
            className="trustpilot-logo-container"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="https://www.trustpilot.com/review/yourcompany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="read-more flex justify-center gap-4 items-center text-blue-400 hover:underline"
            >
              
              <span className="  text-xl">
                Read Reviews
              </span>
              <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrustpilotReviews;