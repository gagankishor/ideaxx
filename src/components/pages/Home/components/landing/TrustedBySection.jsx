"use client"
import "./TrustedBySection.css"; // Import the CSS file
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,  Autoplay } from 'swiper/modules';
const TrustedBySection = () => {
  return (
    <div className="base-layout-segment-component-4">
      <div className="segment-wrapper">
        <div className="top-logos-component">
          {/* Title */}
          <div style={{marginTop:'100px'}}>
            <div className="logosTitleWrapper">
              <h2 className="main-haedding-h2" >
                Trusted by 500+ customers, from startups to enterprises
              </h2>
            </div>
            <div className="logos-carousel-container py-8 ">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={false} // Disable dots
        
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {/* SwiperSlide for each logo */}
        <SwiperSlide>
          <a href="https://www.vantompower.com/" className="image-contener">
            <img
              src="TrustedBySection/Layer.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pickitup.ae/">
            <img
              src="TrustedBySection/up@300_rec.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              src="TrustedBySection/BashaExportlogos.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://360homedecor.uk/">
            <img
              src="TrustedBySection/360HOMEDECORLOGO.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tecmicra.co.in/">
            <img
              src="TrustedBySection/T.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }} 
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ameliyasafaris.com/">
            <img
              src="TrustedBySection/ameliyasafaris.jpg"
              alt="Company logo"
              className="company-logo rounded-lg object-contain my-auto mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://apsleyandheron.com">
            <img
              src="TrustedBySection/apsleyandheron.jpg"
              alt="Company logo"
              className="company-logo rounded-lg my-auto object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ocsmedecin.mu">
            <img
              src="TrustedBySection/ocsmedecin.jpg"
              alt="Company logo"
              className="company-logo rounded-lg my-auto object-contain mx-auto hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "white" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://unityhealth.mu/">
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
            {/* <div className="logos-container">
              <a href="https://www.vantompower.com/" className="image-contener">
                <img
                  src="trustedby/Layer.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "white" }}
                />
              </a>
              <a href="https://pickitup.ae/">
                <img
                  src="trustedby/up@300_rec.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "" }}
                />
              </a>
              <a href="">
                <img
                  src="trustedby/BashaExportlogos.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "" }}
                />
              </a>
              <a href="https://360homedecor.uk/">
                <img
                  src="trustedby/360HOMEDECORLOGO.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "white" }}
                />
              </a>
              <a href="https://tecmicra.co.in/">
                <img
                  src="trustedby/T.jpg"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "white" }}
                />
              </a>
              <a href="https://ameliyasafaris.com/">
                <img
                  src="https://ameliyasafaris.com/wp-content/uploads/2023/03/logo-ameliya-safaris-t-255x55.png"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "black" }}
                />
              </a>
              <a href="https://apsleyandheron.com">
                <img
                  src="https://apsleyandheron.com/cdn/shop/files/logo.png?v=1705863364&width=100"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "black" }}
                />
              </a>
              <a href="https://ocsmedecin.mu">
                <img
                  src="https://ocsmedecin.mu/wp-content/uploads/2024/03/OCS-Medecin_SVG-1.png"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "white" }}
                />
              </a>
              <a href="https://unityhealth.mu/">
                <img
                  src="https://unityhealth.mu/wp-content/uploads/2024/09/Copy-of-Unity-Health_Branding-kit.ai_3.png"
                  alt="Company logo"
                  className="company-logo"
                  style={{ backgroundColor: "white" }}
                />
              </a>
            </div> */}
          </div>
          {/* Highlight Section */}
          <div className="logos">
            <div className="highlight-section">
              <div className="col col-left">
                {/* <img
                  src="gartner.avif"
                  alt="Gartner logo"
                  className="gartner-logo"
                /> */}
                <div className="col-left-content">
                From Concept to Execution Your All-in-One Business Solutions
                </div>
              </div>
              <p className="col col-right" style={{textAlign:'left',color:"white",fontSize:'16px'}}>
                Welcome to ideax, the ultimate platform for entrepreneurs! 
                <span className="highlight-text ml-1">
                 Whether you’re brainstorming 
                your next big idea or looking for a dedicated online team to bring it to life, we offer the tools 
                and expertise you need to succeed.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrustedBySection;