import React from "react";
import Slider from "react-slick";
import "./CardSlider.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBluetoothB,
  FaCheckCircle,
  FaCoins,
  FaLightbulb,
} from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb as solidLightbulb } from '@fortawesome/free-solid-svg-icons';
import {
  PiIdentificationCardBold,
  PiIdentificationCardLight,
} from "react-icons/pi";

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.8,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    // { id: 1, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
    // { id: 2, title: '', description: '', bgImage: '/homeslider/bisness.jpeg' },
    // { id: 3, title: '', description: '', bgImage: '/homeslider/community.jpeg' },
    // { id: 4, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
    {
      pointers: [""],
      icon: "main-icon/Buy-Sell.png",
      id: 12,
      title: "Buy-Sell",
      description: "",
      bgImage: "/sliderLandigPage/12.jpg",
    },
    {
      pointers: [
        "New Idea finalise",
        "Find and discover Ideas",
        "Save all Ideas in one place",
      ],
      icon: "/main-icon/Idea.png",
      id: 8,
      title: "Idea",
      description: "",
      bgImage: "/sliderLandigPage/8.jpg",
    },
    {
      pointers: ["Brand Name", "Logo", "Font", "Colors", "Slogan"],
      icon: "/main-icon/Businessidentity.png",
      id: 14,
      title: "Business identity",
      description: "",
      bgImage: "/sliderLandigPage/14.jpg",
    },
    {
      pointers: [
        "Social Media",
        "Email Marketing",
        "SEO",
        "Marketing Material",
        "Business Card",
        "Marketing Events",
        "Billboards",
        "Online Campaigns",
      ],
      icon: "/main-icon/Marketing.png",
      id: 4,
      title: "Marketing",
      description: "",
      bgImage: "/sliderLandigPage/4.jpg",
    },
    {
      pointers: [
        "Location",
        "Contact",
        "Registration Certificate",
        "Bank account",
        "Brand registration",
        "Partners",
      ],
      icon: "/main-icon/Legal.png",
      id: 5,
      title: "Legal",
      description: "",
      bgImage: "/sliderLandigPage/5.jpg",
    },
    {
      pointers: ["Employees"],
      icon: "/main-icon/team.png",
      id: 15,
      title: "Team",
      description: "",
      bgImage: "/sliderLandigPage/15.jpg",
    },
    {
      pointers: ["Equipment", "Templates", "Platform"],
      icon: "/main-icon/BusinessTools.png",
      id: 13,
      title: "Business Tools",
      description: "",
      bgImage: "/sliderLandigPage/13.jpg",
    },
    {
      pointers: ["Funds", "Expenses", "Income", "Reports"],
      icon: "/main-icon/CashFlow.png",
      id: 11,
      title: "Cash Flow",
      description: "",
      bgImage: "/sliderLandigPage/11.jpg",
    },
    {
      pointers: ["Book an appointment", "AI consulting"],
      icon: "/main-icon/Consulting.png",
      id: 3,
      title: "Consulting",
      description: "community",
      bgImage: "/sliderLandigPage/3.jpg",
    },
    {
      pointers: ["Ideas", "Books", "Courses", "Entertainment"],
      icon: "/main-icon/Entrepreneur.png",
      id: 9,
      title: "Entrepreneur",
      description: "",
      bgImage: "/sliderLandigPage/9.jpg",
    },
    {
      pointers: ["Marketing Strategies", "Investors"],
      icon: "/main-icon/Strategies.png",
      id: 2,
      title: "Strategies",
      description: "Business",
      bgImage: "/sliderLandigPage/2.jpg",
    },
    {
      pointers: ["Clients", "Suppliers", "logistics"],
      icon: "/main-icon/Community.png",
      id: 1,
      title: "Community",
      description: "Community",
      bgImage: "sliderLandigPage/1.jpg",
    },
    // { id: 6, title: 'Integrity', description: '', bgImage: '/sliderLandigPage/6.jpg' },
    // { id: 7, title: 'Inovation', description: '', bgImage: '/sliderLandigPage/7.jpg' },
    // { id: 10, title: 'Col', description: '', bgImage: '/sliderLandigPage/10.jpg' },
  ];
  // 1- idea
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div className="left-sedow"></div>
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="slider-card" style={{ width: "100%" }}>
                <div 
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                   
                  }}
                />
                <div className="card-content2">
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                      fontSize: "18px",
                      fontWeight: "300",
                      padding:"0px"
                    }}
                  >
                    <div
                      style={{
                        marginRight: "10px", // Adjusted spacing between icon and text
                        display: "flex", // Ensures the icon stays centered
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                        padding: "0px",
                        width: "38px",
                        height: "38px", // Ensures the div is square
                        borderRadius: "5px",
                      }}
                    >
                      <img
                        src={card.icon}
                        alt={card.title}
                        width={25}
                        style={{
                          objectFit: "cover",
                          color: "white", // Correcting the color to apply to the icon (if SVG)
                        }}
                      />
                    </div>
                    {card.title}
                  </h3>
                  {card.pointers.map((pointer) => (
                    <p
                      className="card-description"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "left",
                        fontSize: "10px",
                        lineHeight: "30px",
                      }}
                    >
                      <FaCheckCircle
                        style={{
                          margin: "0 5px",
                          borderRadius: "5px",
                        }}
                      />
                      {pointer}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
          <div className="right-sedow"></div>
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
        display: "block",
        background: "black",
        color: "white",
        borderRadius: "50%",
        padding: "10px",
        width: "60px",
        height: "60px",
        textAlign: "center",
        lineHeight: "20px",
        fontSize: "18px",
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
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
        display: "block",
        background: "black",
        color: "white",
        borderRadius: "50%",
        padding: "10px",
        width: "60px",
        height: "60px",
        textAlign: "center",
        lineHeight: "20px",
        fontSize: "18px",
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        content: "none",
      }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

export default CardSlider;
