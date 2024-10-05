import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = () => {
  const settings = {
    dots: true,       // Display dots for navigation
    infinite: true,   // Infinite loop scrolling
    speed: 500,       // Transition speed
    slidesToShow: 3,  // Number of slides to show at a time
    slidesToScroll: 1 // Number of slides to scroll per swipe/click
  };

  return (
    <div>
      <h2>React Slick Slider</h2>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        <div>
          <h3>Slide 4</h3>
        </div>
        <div>
          <h3>Slide 5</h3>
        </div>
        <div>
          <h3>Slide 6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
