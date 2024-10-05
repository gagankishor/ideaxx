import React, { useState } from "react";
import Slider from "react-slick";
import "./CoreSolutionsSection.css"
const CoreSolutionsSection = () => {
  // State to track the selected icon
  const [selectedIcon, setSelectedIcon] = useState("Portfolios");

  // Settings for the slider
  const settings = {
    dots: false, // To display navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in ms
    slidesToShow: 6, // Number of items to show at once
    slidesToScroll: 1, // Number of items to scroll at once
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust for smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Mapping icons to their related images
  const iconImages = {
    Portfolios: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/global-010224-icons/icon-client-projects.png",
    Projects: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/global-010224-icons/icon-client-projects.png",
    Tasks: "url-to-tasks-image.jpg",
    "Sales pipeline": "url-to-sales-pipeline-image.jpg",
    "Lead capturing": "url-to-lead-capturing-image.jpg",
    Contacts: "url-to-contacts-image.jpg",
    Leads: "url-to-leads-image.jpg",
    "Customer onboarding": "url-to-customer-onboarding-image.jpg",
    "Roadmap planning": "url-to-roadmap-planning-image.jpg",
  };

  // Function to handle icon click
  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <div style={{ padding: "0px 0px", color: "white" }}>
      <div style={{ backgroundColor: "black", padding: "100px 0" }}>
        <div>
          <h2
            style={{
              fontSize: "42px",
              width: "60%",
              textAlign: "center",
              margin: "auto",
              fontWeight: "100",
              marginTop: "1px",
            }}
          >
            Core solutions that span across your business. All on one platform.
          </h2>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {Object.keys(iconImages).map((icon) => (
              <div className="slider-item" key={icon}>
                <span
                  style={{
                    cursor: "pointer",
                    color: selectedIcon === icon ? "blue" : "white", // Highlight the selected icon
                  }}
                  onClick={() => handleIconClick(icon)}
                >
                  {icon}
                </span>
              </div>
            ))}
          </Slider>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Background Image (optional) */}
          <div style={{ position: "absolute", zIndex: 1 }}>
            <img
              src={iconImages[selectedIcon]} // Display the image related to the selected icon
              alt={selectedIcon}
              style={{ width: "100%", margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom next arrow component
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      &#8250;
    </div>
  );
}

// Custom previous arrow component
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      &#8249;
    </div>
  );
}

export default CoreSolutionsSection;
