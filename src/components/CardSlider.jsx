import React from 'react';
import Slider from 'react-slick';
import './CardSlider.css';
import { FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    // { id: 1, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
    // { id: 2, title: '', description: '', bgImage: '/homeslider/bisness.jpeg' },
    // { id: 3, title: '', description: '', bgImage: '/homeslider/community.jpeg' },
    // { id: 4, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
    { id: 1, title: 'Cashflow', description: 'cash flow', bgImage: '/cashflow.webp' },
    { id: 2, title: 'Business', description: 'Business', bgImage: '/bisness.webp' },
    { id: 3, title: 'Community', description: 'community', bgImage: '/community.webp' },
    { id: 4, title: 'Consult', description: '', bgImage: '/cashflow.webp' },
    { id: 5, title: 'Legal', description: '', bgImage: '/lawer.webp' },
    { id: 6, title: 'Graphic', description: '', bgImage: '/graphic.webp' },
    { id: 7, title: 'Logo', description: '', bgImage: '/logo.webp' },
    { id: 8, title: 'Slogan', description: '', bgImage: '/tagline.webp' },
    { id: 9, title: 'Team', description: '', bgImage: '/team.webp' },
    { id: 10, title: 'Web development', description: '', bgImage: '/webdevelopment.webp' },
  ];

  return (
    <>
    <div className="card-slider-improved">
      
      <div style={{display:'flex',justifyContent:'center',flexDirection:"column",position:'relative'}}>
      <div className='left-sedow'>
      </div>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div
              style={{
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '350px',
              }}
              />
            <div className="card-content" style={{color:'white'}}>
              <h3>{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
            <div className="card-content2">

              <p className="card-description">{card.description}</p>
              <h3>{card.title}</h3>
            </div>
           
          </div>
        ))}
      </Slider>
      <div className='right-sedow'>

      </div>
        </div>
    </div>
    </>

  );
};

// Custom next and previous arrows
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{
        display: 'block',
        background: 'black',
        color: 'white',
        borderRadius: '50%',
        padding: '10px',
        width: '60px',
        height: '60px',
        textAlign: 'center',
        lineHeight: '20px',
        fontSize: '18px',
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)'
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{
        display: 'block',
        background: 'black',
        color: 'white',
        borderRadius: '50%',
        padding: '10px',
        width: '60px',
        height: '60px',
        textAlign: 'center',
        lineHeight: '20px',
        fontSize: '18px',
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        content:'none'
      }}
      
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

export default CardSlider;
