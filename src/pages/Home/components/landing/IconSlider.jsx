import React from 'react';
import Slider from 'react-slick';
import './IconSlider.css'; // Custom CSS for your slider

const IconSlider = () => {
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

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <span>Portfolios</span>
        </div>
        <div className="slider-item">
          <span>Projects</span>
        </div>
        <div className="slider-item">
          <span>Tasks</span>
        </div>
        <div className="slider-item">
          <span>Sales pipeline</span>
        </div>
        <div className="slider-item">
          <span>Lead capturing</span>
        </div>
        <div className="slider-item">
          <span>Contacts</span>
        </div>
        <div className="slider-item">
          <span>Leads</span>
        </div>
        <div className="slider-item">
          <span>Customer onboarding</span>
        </div>
        <div className="slider-item">
          <span>Roadmap planning</span>
        </div>
      </Slider>
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

export default IconSlider;
