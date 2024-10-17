import React from 'react';
import Slider from 'react-slick';
import './CardSlider.css';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaCheckCircle, FaCoins, FaCommentSlash, FaDotCircle } from 'react-icons/fa';

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 2,
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
    { id: 1, title: 'Community', description: 'Community', bgImage: 'sliderLandigPage/1.jpg' },
    { id: 2, title: 'Strategies', description: 'Business', bgImage: '/sliderLandigPage/2.jpg' },
    { id: 3, title: 'Consulting', description: 'community', bgImage: '/sliderLandigPage/3.jpg' },
    { id: 4, title: 'Marketing', description: '', bgImage: '/sliderLandigPage/4.jpg' },
    { id: 5, title: 'Legal', description: '', bgImage: '/sliderLandigPage/5.jpg' },
    // { id: 6, title: 'Integrity', description: '', bgImage: '/sliderLandigPage/6.jpg' },
    // { id: 7, title: 'Inovation', description: '', bgImage: '/sliderLandigPage/7.jpg' },
    { id: 8, title: 'Idea', description: '', bgImage: '/sliderLandigPage/8.jpg' },
    { id: 9, title: 'Entrepreneur', description: '', bgImage: '/sliderLandigPage/9.jpg' },
    // { id: 10, title: 'Col', description: '', bgImage: '/sliderLandigPage/10.jpg' },
    { id: 11, title: 'Cash Flow', description: '', bgImage: '/sliderLandigPage/11.jpg' },
    { id: 12, title: 'Buy-Sell', description: '', bgImage: '/sliderLandigPage/12.jpg' },
    { id: 13, title: 'Business Tools', description: '', bgImage: '/sliderLandigPage/13.jpg' },
    { id: 14, title: 'Business identity', description: '', bgImage: '/sliderLandigPage/14.jpg' },
    { id: 15, title: 'Team', description: '', bgImage: '/sliderLandigPage/15.jpg' },
  ];
  // - idea
  // 2- Business identity 
  // 3- Marketing 
  // 4- Legal
  // 5- Team
  // 6- Business Tools
  // 7- Cash Flow
  // 8- Consulting 
  // 9- Entrepreneur 
  // 10- Strategies
  // 11- Community
  // 12- Buy-Sell
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
            {/* <div className="card-content" style={{color:'white'}}>
              <h3>{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div> */}
            <div className="card-content2">

            <h3 style={{ display: 'flex', alignItems: 'center', textAlign: 'left', fontSize: '14px' }}>
              <FaCoins
                size={30}
                style={{
                  margin: '0 5px',
                  color: 'white',
                  backgroundColor: 'blue',
                  padding: '8px',
                  borderRadius: '5px'
                }}
              /> 
              {card.title}
            </h3>
              <p className="card-description " style={{ display: 'flex', alignItems: 'center', textAlign: 'left', fontSize: '10px' ,lineHeight:'30px'}}>
                <FaCheckCircle 
                style={{
                  margin: '0 5px',
                  
                  borderRadius: '5px'
                }}/> Pointer 1</p>
                <p className="card-description " style={{ display: 'flex', alignItems: 'center', textAlign: 'left', fontSize: '10px',lineHeight:'30px' }}>
                <FaCheckCircle 
                style={{
                  margin: '0 5px',
                  
                  borderRadius: '5px'
                }}/> Pointer 1</p>
                <p className="card-description " style={{ display: 'flex', alignItems: 'center', textAlign: 'left', fontSize: '10px' ,lineHeight:'30px'}}>
                <FaCheckCircle 

                style={{
                  margin: '0 5px',
                  
                  borderRadius: '5px'
                }}/> Pointer 1</p>
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
