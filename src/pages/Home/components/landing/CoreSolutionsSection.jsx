import React, { useState } from "react";
// import Slider from "react-slick";
import "./CoreSolutionsSection.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRobot } from "react-icons/fa";

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
import { GiTeamIdea } from "react-icons/gi";
import { TiCloudStorage } from "react-icons/ti";

import { MdArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlineSell } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiCommunityFill } from "react-icons/ri";

const icons = [
  { id:1, icon: <FaRobot />, label: "AI Business Idea Checker",image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png' },
  { id:2, icon: <GiTeamIdea />, label: "Integrated Online Team Solutions",image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Bug_tracking.png' },
  { id:3, icon: <RiCommunityFill  />, label: "Community" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png' },
  { id:4, icon: <MdOutlineSell  />, label: "Buy-Sell Platform" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Bug_tracking.png'},
  { id:5, icon: <TiCloudStorage  />, label: "Safe Cloud Storage" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png' }
  
];
// { icon: <FaUsers />, label: "Customer onboarding" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Bug_tracking.png'},
//   { icon: <FaRoad />, label: "Roadmap planning" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png' },
//   { icon: <FaBug />, label: "Feature releases",image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Bug_tracking.png' },
//   { icon: <FaBriefcase />, label: "Bug tracking" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png' },
//   { icon: <FaUsers />, label: "Retrospectives" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Bug_tracking.png'},
//   { icon: <FaSuitcase />, label: "Resource management" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png' },
//   { icon: <FaUsers />, label: "Recruitment" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Bug_tracking.png'},
//   { icon: <FaChartLine />, label: "Operations" ,image:'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png' },
const contentData = {
  "AI Business Idea Checker": [
    {
      title: "Idea Validation",
      description: "Use our AI algorithms to assess the feasibility of your business idea based on market trends, competition, and potential profitability."
    },
    {
      title: "Feedback & Insights",
      description: "Receive detailed reports with actionable insights to refine your idea and strategy."
    },
    {
      title: "Market Research",
      description: "Access curated data that highlights opportunities and challenges in your industry."
    },
    {
      title: "Competitor Analysis",
      description: "Gain in-depth insights into your competitors to identify your unique value proposition."
    },
    {
      title: "Risk Assessment",
      description: "Evaluate potential risks associated with your business idea to prepare for challenges."
    }
  ],
  "Integrated Online Team Solutions": [
    {
      title: "Strategic Planning",
      description: "Comprehensive business strategy development to align your goals and resources."
    },
    {
      title: "Marketing & Branding",
      description: "Tailored marketing strategies and branding solutions to make your business stand out."
    },
    {
      title: "Design & Development",
      description: "Expert website and application development to create an impactful online presence."
    },
    {
      title: "Customer Support & Engagement",
      description: "Dedicated teams to manage customer interactions and build loyalty."
    },
    {
      title: "Finance & HR Services",
      description: "Professional support in finance, administration, and human resources to ensure smooth operations."
    },
    {
      title: "Project Management",
      description: "End-to-end project management services to keep your initiatives on track."
    }
  ],
  "Community": [
    {
      title: "Networking Opportunities",
      description: "Share your ideas with fellow entrepreneurs, financiers, and potential investors in a collaborative environment."
    },
    {
      title: "Feedback Exchange",
      description: "Gain insights and constructive feedback from a community of like-minded individuals to refine your concepts."
    },
    {
      title: "Investor Access",
      description: "Connect with potential investors who are looking for innovative projects to support and fund."
    }
  ],
  "Buy-Sell Platform": [
    {
      title: "Buy Ideas",
      description: "Explore a marketplace where you can purchase fully developed ideas or project studies, whether they are just concepts or existing businesses."
    },
    {
      title: "Sell Ideas",
      description: "List your own ideas or business projects for sale, reaching a wide audience of interested buyers."
    },
    {
      title: "Secure Transactions",
      description: "Ensure a safe and reliable transaction process for both buyers and sellers."
    }
  ],
  "Safe Cloud Storage": [
    {
      title: "Document Management",
      description: "Securely store all important documents, including employee contracts, company registrations, and other vital records."
    },
    {
      title: "Easy Access",
      description: "Access your documents anytime, anywhere, ensuring you have the necessary information at your fingertips."
    },
    {
      title: "Data Protection",
      description: "Benefit from robust security measures that keep your sensitive information safe and confidential."
    }
  ]
};
const CoreSolutionsSection = () => {
  // State to track the selected icon
  const [selectedIcon, setSelectedIcon] = useState("Community");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0,
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
        <MdOutlineArrowForwardIos color="black" size={50} />
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
        <MdArrowBackIosNew color="black" size={50} />
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
        <div style={{margin:'auto', maxWidth :"1200px"}}>

        
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
            From Concept to Execution—Your All-in-One Business Solution.
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
            style={{ padding: "20px", backgroundColor: "#000", color: "#fff",width:"70%" }}
          >
            <Slider {...settings}>
              {icons.map((item, index) => (
                <div
                key={index}
                className="icon-item"
                onClick={() => setSelectedIcon(item.label)}
                style={{ textAlign: "center", padding: "0px" }}
              >
                  <div className="icon" style={{ fontSize: "24px", cursor: "pointer",color:selectedIcon===item.label? '#6161FF':'#b8b4b4' }}>
                    {item.icon}
                  </div>
                  <div
                    className="icon-title"
                    style={{
                      marginTop: "5px",
                      cursor: "pointer",
                      width: "80px",
                      textAlign: "center",
                      margin: "auto",
                      fontSize: "0.875rem",
                      fontWeight: "200",
                      color:selectedIcon===item.label? 'white':'#b8b4b4'
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
        <div style={{  overflow: "hidden" }}>
          {/* <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png"
            alt={selectedIcon}
            style={{ width: "100%", margin: "auto" }}
          /> */}
            <div className="from-concept-continer">
  <div className="from-concept-main-card">
    {selectedIcon && contentData[selectedIcon]?.map((content, idx) => (
      <div className="from-concept-card" key={idx}>
        <div>
          <h3 style={{ color: 'white' }}>{content.title}</h3>
        </div>
        <div>
          <p style={{ color: 'white' }}>{content.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
          {/* <div className="from-concept-continer">
            <div className="from-concept-main-card">
              <div className="from-concept-card">
                <div>
                  <h3 style={{color:'white'}}> Idea Validation</h3>
                </div>
                <div>
                  <p style={{color:'white'}}>
                    Use our AI algorithms to assess the feasibility of your business idea based 
                    on market trends, competition, and potential profitability.
                  </p>

                </div>

              </div>
              <div className="from-concept-card">
                <div>
                  <h3 style={{color:'white'}}> Feedback & Insights: </h3>
                </div>
                <div>
                  <p style={{color:'white'}}>
                  Receive detailed reports with actionable insights to refine your idea 
                  and strategy.
                  </p>

                </div>

              </div>
              <div className="from-concept-card">
                <div>
                  <h3 style={{color:'white'}}> Market Research: </h3>
                </div>
                <div>
                  <p style={{color:'white'}}>
                  Access curated data that highlights opportunities and challenges in your 
                  industry.
                  </p>

                </div>

              </div>
              <div className="from-concept-card">
                <div>
                  <h3 style={{color:'white'}}> Competitor Analysis: </h3>
                </div>
                <div>
                  <p style={{color:'white'}}>
                  Gain in-depth insights into your competitors to identify your unique 
                  value proposition.
                  </p>

                </div>

              </div>
              <div className="from-concept-card">
                <div>
                  <h3 style={{color:'white'}}> Risk Assessment: </h3>
                </div>
                <div>
                  <p style={{color:'white'}}>
                  Evaluate potential risks associated with your business idea to prepare for 
                  challenges.
                  </p>

                </div>

              </div>

              


            </div>
          </div> */}
          <div style={{ position: "absolute", zIndex: 1000 }}></div>
        </div>
        <div className="btns-container" >
            <Link className="btn" to="/mainWizard" style={{margin:"auto"}}>
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
            
          </div>
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