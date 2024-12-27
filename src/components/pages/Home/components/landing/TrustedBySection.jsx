"use client"
import "./TrustedBySection.css"; // Import the CSS file
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,  Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const TrustedBySection = () => {
  return (
    <div className="base-layout-segment-component-4">
      <div className="segment-wrapper">
        <div className="top-logos-component">
          {/* Title */}
          <div style={{marginTop:'100px'}}>
            <div className="logosTitleWrapper">
            <h2 className="main-heading-h2 text-2xl ">
  Trusted by 200+ companies and over 1,000 customers, from innovative startups to leading enterprises
</h2>
            </div>
            <div className="logos-carousel-container py-8 ">
            <Swiper
  modules={[Navigation, Autoplay]}
  slidesPerView={3}
  spaceBetween={20}
  autoplay={{
    delay: 0, // Remove delay to make it continuous
    disableOnInteraction: false, // Keep autoplay even if interacting with the Swiper
  }}
  loop={true}
  speed={5000} // Adjust speed for smooth, continuous scrolling
  breakpoints={{
    640: { slidesPerView: 3 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 6 },
  }}
  className=""
>
        {/* SwiperSlide for each logo */}
        <SwiperSlide>
          <a href="https://www.vantompower.com/"  target="_blank">
            <img
              src="TrustedBySection/Layer.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pickitup.ae/" target="_blank">
            <img
              src="TrustedBySection/up@300_rec.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.basha-impex.com/" target="_blank">
            <img
              src="TrustedBySection/BashaExportlogos.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://360homedecor.uk/" target="_blank">
            <img
              src="TrustedBySection/360HOMEDECORLOGO.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tecmicra.co.in/" target="_blank">
            <img
              src="TrustedBySection/T.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }} 
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ameliyasafaris.com/" target="_blank">
            <img
              src="TrustedBySection/ameliyasafaris.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain my-auto mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://apsleyandheron.com" target="_blank">
            <img
              src="TrustedBySection/apsleyandheron.jpg"
              alt="Company logo"
              className="company-logo rounded-lg my-auto object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ocsmedecin.mu" target="_blank">
            <img
              src="TrustedBySection/ocsmedecin.jpg"
              alt="Company logo"
              className="company-logo rounded-lg my-auto object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://unityhealth.mu/" target="_blank">
            <img
              src="TrustedBySection/unityhealth.jpg"
              alt="Company logo"
              className="company-logo rounded-lg my-auto object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
            
          </div>
          {/* Highlight Section */}
          <div className="px-4 sm:px-10 py-20 ">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black border border-gray-800 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full md:w-1/2 p-10 text-white space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              From Concept to Execution
            </h2>
            <h2 className="text-2xl font-medium text-gray-300">
              Your All-in-One Business Solutions
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}Work together

            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full md:w-1/2 p-10 bg-black bg-opacity-50 h-full"
          >
            <p className="text-lg text-white leading-relaxed">
              Welcome to <span className="font-bold text-blue-400">IDX</span>, the ultimate platform for entrepreneurs! 
              <span className="block mt-4 font-semibold text-gray-300">
                Whether you&rsquo;re brainstorming your next big idea or looking for a dedicated online team to bring it to life, 
                we offer the tools and expertise you need to succeed.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
        </div>
      </div>
    </div>
  );
};
export default TrustedBySection;