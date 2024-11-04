"use client"; // Ensure this component is client-rendered
import PropTypes from "prop-types";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4.8, slidesToScroll: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };
  const cards = [

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
      bgImage: "/sliderLandigPage/8.webp",
    },
    {
      pointers: ["Brand Name", "Logo", "Font", "Colors", "Slogan"],
      icon: "/main-icon/Businessidentity.png",
      id: 14,
      title: "Business identity",
      description: "",
      bgImage: "/sliderLandigPage/14.webp",
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
      bgImage: "/sliderLandigPage/4.webp",
    },
    {
      pointers: [
        "Contact details" ,"official location", "Letterhead" , "Registration Certificate", "Brand Registration" , "Additional Certificates" , "Legal Consultation"
      ],
      icon: "/main-icon/Legal.png",
      id: 5,
      title: "Legal",
      description: "",
      bgImage: "/sliderLandigPage/5.webp",
    },
    {
      pointers: ["My Team dashboard" , "Team Meetings" , "Management Platforms" ,"Legal"],
      icon: "/main-icon/team.png",
      id: 15,
      title: "Team",
      description: "",
      bgImage: "/sliderLandigPage/15.webp",
    },
    {
      pointers: [ "Website", "App", "CRM", "Equipment", "Templates",  "Management Platforms"],
      icon: "/main-icon/BusinessTools.png",
      id: 13,
      title: "Business Tools",
      description: "",
      bgImage: "/sliderLandigPage/13.webp",
    },
    {
      pointers: ["Funds", "Expenses", "Income", "Reports", "Vault", "Platforms"],
      icon: "/main-icon/CashFlow.png",
      id: 11,
      title: "Cash Flow",
      description: "",
      bgImage: "/sliderLandigPage/11.webp",
    },
    {
      pointers: ["Request Consultation", "Summary", "Resell Service"],
      icon: "/main-icon/Consulting.png",
      id: 3,
      title: "Consulting",
      description: "community",
      bgImage: "/sliderLandigPage/3.webp",
    },
    {
      pointers: ["Ideas", "Library", "Courses", "Entertainment"],
      icon: "/main-icon/Entrepreneur.png",
      id: 9,
      title: "Entrepreneur",
      description: "",
      bgImage: "/sliderLandigPage/9.webp",
    },
    {
      pointers: ["Marketing Strategies","Investors", "Investors"],
      icon: "/main-icon/Strategies.png",
      id: 2,
      title: "Strategies",
      description: "Business",
      bgImage: "/sliderLandigPage/2.webp",
    },
    {
      pointers: ["Networking", "Events", "Resource"],
      icon: "/main-icon/Community.png",
      id: 1,
      title: "Community",
      description: "Community",
      bgImage: "/sliderLandigPage/1.webp",
    },
    {
      pointers: ["Marketplace", "Evaluation", "Listings"],
      icon: "/main-icon/Buy-Sell.png",
      id: 12,
      title: "Buy-Sell",
      description: "",
      bgImage: "/sliderLandigPage/12.webp",
    },
  ];
  return (
    <section id="services" className="card-slider-improved">
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
            <div key={card.id} className="slider-card" style={{ width: "90%" }}>
              <img
                src={card.bgImage}
                alt="Slider Image"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  backgroundColor: "transparent",
                }}
                className="slider-card-image"
              />
              <div className="card-content2">
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "left",
                    fontSize: "18px",
                    fontWeight: "300",
                    padding: "0px",
                  }}
                >
                  <div
                    style={{
                      marginRight: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      padding: "0px",
                      width: "38px",
                      height: "38px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={card.icon}
                      alt={card.title}
                      width={25}
                      style={{
                        objectFit: "cover",
                        color: "white",
                      }}
                    />
                  </div>
                  {card.title}
                </h3>
                {card.pointers.map((pointer, index) => (
                  <p
                    key={index}
                    className="card-description"
                    style={{display:"flex" ,justifyContent:'left',alignItems:"center", textAlign: "left",fontSize:'12px',lineHeight:'25px' }}
                  >
                    <FaCheckCircle
                      style={{ margin: "0 5px", borderRadius: "5px" }}
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
    </section>
  );
};

const SampleNextArrow = ({ onClick }) => (
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
SampleNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired, // Validate onClick as a required function
};
const SamplePrevArrow = ({ onClick }) => (
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
SamplePrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired, // Validate onClick as a required function
};
CardSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      bgImage: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      pointers: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default CardSlider;
