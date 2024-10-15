import React, { useState } from "react";
// import Slider from "react-slick";
import "./CoreSolutionsSection.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import Slider from "react-slick";
import {
  FaTasks,
  FaChartLine,
  FaFilter,
  FaUsers,
  FaSuitcase,
  FaRoad,
  FaBug,
  FaBriefcase,
} from "react-icons/fa";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const icons = [
  { icon: <FaTasks />, label: "Tasks" },
  { icon: <FaChartLine />, label: "Sales pipeline" },
  { icon: <FaFilter />, label: "Lead capturing" },
  { icon: <FaUsers />, label: "Contacts" },
  { icon: <FaSuitcase />, label: "Leads" },
  { icon: <FaUsers />, label: "Customer onboarding" },
  { icon: <FaRoad />, label: "Roadmap planning" },
  { icon: <FaBug />, label: "Feature releases" },
  { icon: <FaBriefcase />, label: "Bug tracking" },
  { icon: <FaUsers />, label: "Retrospectives" },
  { icon: <FaSuitcase />, label: "Resource management" },
  { icon: <FaUsers />, label: "Recruitment" },
  { icon: <FaChartLine />, label: "Operations" },
];

const CoreSolutionsSection = () => {
  // State to track the selected icon
  const [selectedIcon, setSelectedIcon] = useState("Portfolios");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 3,
    nextArrow: (
      <button
        className="next-arrow"
        style={{
          backgroundColor: "white" /* White background for visibility */,
          borderRadius: "50%" /* Circular shape */,
          width: "40px" /* Adjust size */,
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute" /* Positioning the arrow */,
          top: "50%" /* Vertically center */,
          right: "10px" /* Position from the right */,
          transform: "translateY(-50%)" /* Adjust for perfect centering */,
          zIndex: 1000 /* Make sure it appears above other elements */,
          color: "black" /* Black arrow color */,
          border: "none" /* Remove default border */,
          cursor: "pointer" /* Pointer cursor for hover effect */,
        }}
      >
        <MdOutlineArrowForwardIos color="white" size={50} />
      </button>
    ),
    prevArrow: (
      <button
        className="prev-arrow"
        style={{
          backgroundColor: "white" /* White background for visibility */,
          borderRadius: "50%" /* Circular shape */,
          width: "40px" /* Adjust size */,
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute" /* Positioning the arrow */,
          top: "50%" /* Vertically center */,
          left: "10px" /* Position from the left */,
          transform: "translateY(-50%)" /* Adjust for perfect centering */,
          zIndex: 1000 /* Make sure it appears above other elements */,
          color: "black" /* Black arrow color */,
          border: "none" /* Remove default border */,
          cursor: "pointer" /* Pointer cursor for hover effect */,
        }}
      >
        <MdArrowBackIosNew color="white" size={50} />
      </button>
    ),
  };

  // Settings for the slider
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // const iconImages = {
  //   Portfolios: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/global-010224-icons/icon-client-projects.png",
  //   Projects: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/global-010224-icons/icon-client-projects.png",
  //   Tasks: "url-to-tasks-image.jpg",
  //   "Sales pipeline": "url-to-sales-pipeline-image.jpg",
  //   "Lead capturing": "url-to-lead-capturing-image.jpg",
  //   Contacts: "url-to-contacts-image.jpg",
  //   Leads: "url-to-leads-image.jpg",
  //   "Customer onboarding": "url-to-customer-onboarding-image.jpg",
  //   "Roadmap planning": "url-to-roadmap-planning-image.jpg",
  // };

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <div style={{ padding: "0px 0px", color: "white" }}>
      <div style={{ backgroundColor: "black", padding: "100px 0" }}>
        <div>
          <h2
            style={{
              fontSize: "2.75rem",
              width: "60%",
              textAlign: "center",
              margin: "auto",
              fontWeight: "200",
              marginTop: "1px",
              lineHeight: "100%",
              fontFamily: "Poppins,Roboto,Helvetica,Arial,sans-serif",
              wordBreak: "break-word",
            }}
          >
            Core solutions that span across your business. All on one platform.
          </h2>
        </div>
        <div className="slider-container" style={{ marginTop: "50px" }}>
          {/* <div style={{display:'flex', gap:'60px'}}>
            <FaArrowAltCircleLeft/>
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
            <img src="/darksection1/Portfolios.webp" alt="" />
          </div> */}
          <div className="left-sedow2"></div>
          <div
            className="carousel-container"
            style={{ padding: "20px", backgroundColor: "#000", color: "#fff" }}
          >
            <Slider {...settings}>
              {icons.map((item, index) => (
                <div
                  key={index}
                  className="icon-item"
                  style={{ textAlign: "center", padding: "0px" }}
                >
                  <div style={{ fontSize: "24px", cursor: "pointer" }}>
                    {item.icon}
                  </div>
                  <div
                    style={{
                      marginTop: "5px",
                      cursor: "pointer",
                      width: "80px",
                      textAlign: "center",
                      margin: "auto",
                      fontSize: "0.875rem",
                      fontWeight: "200",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="right-sedow2"></div>
          {/* <Slider {...settings}>
            {Object.keys(iconImages).map((icon) => (
              <div className="slider-item" key={icon}>
                <span
                  style={{
                    cursor: "pointer",
                    color: selectedIcon === icon ? "blue" : "white",
                  }}
                  onClick={() => handleIconClick(icon)}
                >
                  {icon}
                </span>
              </div>
            ))}
          </Slider> */}
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png"
            alt={selectedIcon}
            style={{ width: "100%", margin: "auto" }}
          />
          <div style={{ position: "absolute", zIndex: 1 }}></div>
        </div>
        <div className="btns-container" >
            <Link className="btn" to="/mainWizard" style={{margin:"auto"}}>
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
            
          </div>
      </div>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      &#8250;
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      &#8249;
    </div>
  );
}

export default CoreSolutionsSection;
