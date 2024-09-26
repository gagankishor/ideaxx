import React from 'react';
import Slider from 'react-slick';
import './CardSlider.css';
const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const cards = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1',bgImage:'/bisness.webp' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2',bgImage:'/web development.webp' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3',bgImage:'/web development.webp' },
    { id: 4, title: 'Card 4', description: 'Description for Card 4',bgImage:'/web development.webp' },
    { id: 5, title: 'Card 5', description: 'Description for Card 5',bgImage:'/web development.webp' },
  ];

  return (
    <div className="card-slider-new">
    <Slider {...settings}>
      {cards.map((card) => (
        <div key={card.id} className="card" style={{ width:"50px" }}>
          <img src={card.bgImage} alt="" style={{ width:'100px',height:'200px' }} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default CardSlider;
