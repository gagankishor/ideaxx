"use client";
import { useState } from "react";
// import Slider from "react-slick";
import "./CoreSolutionsSection.css";
import { FaArrowAltCircleRight, FaRobot } from "react-icons/fa";

import Slider from "react-slick";
import { GiTeamIdea } from "react-icons/gi";
import { TiCloudStorage } from "react-icons/ti";

import {
  MdOutlineSell,
} from "react-icons/md";
import Link from "next/link"; // Correct import for Link
import { RiCommunityFill } from "react-icons/ri";

const icons = [
  {
    id: 1,
    icon: <FaRobot />,
    label: "AI Business Idea Checker",
    image:
      "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png",
  },
  {
    id: 2,
    icon: <GiTeamIdea />,
    label: "Integrated Online Team",
    image:
      "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Bug_tracking.png",
  },
  {
    id: 3,
    icon: <RiCommunityFill />,
    label: "Community",
    image:
      "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png",
  },
  {
    id: 4,
    icon: <MdOutlineSell />,
    label: "Buy-Sell Platform",
    image:
      "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Bug_tracking.png",
  },
  {
    id: 5,
    icon: <TiCloudStorage />,
    label: "Safe Cloud Storage",
    image:
      "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png",
  },
];
const contentData = {
  "AI Business Idea Checker": [
    {
      title: "Idea Validation",
      description:
        "Use our AI algorithms to assess the feasibility of your business idea based on market trends, competition, and potential profitability.",
    },
    {
      title: "Feedback & Insights",
      description:
        "Receive detailed reports with actionable insights to refine your idea and strategy.",
    },
    {
      title: "Market Research",
      description:
        "Access curated data that highlights opportunities and challenges in your industry.",
    },
    {
      title: "Competitor Analysis",
      description:
        "Gain in-depth insights into your competitors to identify your unique value proposition.",
    },
    {
      title: "Risk Assessment",
      description:
        "Evaluate potential risks associated with your business idea to prepare for challenges.",
    },
  ],
  "Integrated Online Team": [
    {
      title: "Strategic Planning",
      description:
        "Comprehensive business strategy development to align your goals and resources.",
    },
    {
      title: "Marketing & Branding",
      description:
        "Tailored marketing strategies and branding solutions to make your business stand out.",
    },
    {
      title: "Design & Development",
      description:
        "Expert website and application development to create an impactful online presence.",
    },
    {
      title: "Customer Support & Engagement",
      description:
        "Dedicated teams to manage customer interactions and build loyalty.",
    },
    {
      title: "Finance & HR Services",
      description:
        "Professional support in finance, administration, and human resources to ensure smooth operations.",
    },
    {
      title: "Project Management",
      description:
        "End-to-end project management services to keep your initiatives on track.",
    },
  ],
  Community: [
    {
      title: "Networking Opportunities",
      description:
        "Share your ideas with fellow entrepreneurs, financiers, and potential investors in a collaborative environment.",
    },
    {
      title: "Feedback Exchange",
      description:
        "Gain insights and constructive feedback from a community of like-minded individuals to refine your concepts.",
    },
    {
      title: "Investor Access",
      description:
        "Connect with potential investors who are looking for innovative projects to support and fund.",
    },
  ],
  "Buy-Sell Platform": [
    {
      title: "Buy Ideas",
      description:
        "Explore a marketplace where you can purchase fully developed ideas or project studies, whether they are just concepts or existing businesses.",
    },
    {
      title: "Sell Ideas",
      description:
        "List your own ideas or business projects for sale, reaching a wide audience of interested buyers.",
    },
    {
      title: "Secure Transactions",
      description:
        "Ensure a safe and reliable transaction process for both buyers and sellers.",
    },
  ],
  "Safe Cloud Storage": [
    {
      title: "Document Management",
      description:
        "Securely store all important documents, including employee contracts, company registrations, and other vital records.",
    },
    {
      title: "Easy Access",
      description:
        "Access your documents anytime, anywhere, ensuring you have the necessary information at your fingertips.",
    },
    {
      title: "Data Protection",
      description:
        "Benefit from robust security measures that keep your sensitive information safe and confidential.",
    },
  ],
};
const CoreSolutionsSection = () => {
  const [selectedIcon, setSelectedIcon] = useState("Community");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1, // Scroll one slide at a time
    nextArrow: (
      <button
        className="next-arrow"
        style={{display:'none',backgroundColor:'#47333300'}}
      >
        {/* <MdOutlineArrowForwardIos color="white" size={30} /> */}
      </button>
    ),
    prevArrow: (
      <button
        className="prev-arrow"
        style={{display:'none'}}
      >
        {/* <MdArrowBackIosNew color="white" size={30} /> */}
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    ],
  };
  return (
    <section id="features" style={{ padding: "0px 0px", color: "white" }}>
      <div style={{ backgroundColor: "black", padding: "30px 0" }}>
        <div style={{ margin: "auto", maxWidth: "1200px" }}>
          <div>
            <h2
              className=""
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
              Ideax provide
            </h2>
          </div>
          <div className="slider-container" style={{ marginTop: "50px" }}>
            <div className="left-sedow2"></div>
            <div
              className="carousel-container"
              style={{
                padding: "20px",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              <Slider {...settings}>
                {icons.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: "center",
                      padding: "110px",
                      width: "20%",

                    }}
                    className="icon-item"
                    onClick={() => setSelectedIcon(item.label)}
                  >
                    <div
                      className="icon"
                      style={{
                        fontSize: "24px",
                        cursor: "pointer",
                        textAlign:'center',
                        margin:'auto',
                        width:'fit-content',
                        color:
                          selectedIcon === item.label ? "#6161FF" : "#b8b4b4",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div
                      className="icon-title"
                      style={{
                        color:
                          selectedIcon === item.label ? "white" : "#b8b4b4",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="right-sedow2"></div>
          </div>
          <div style={{ overflow: "hidden" }}>
            {/* <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/usescases3/2Retrospectives.png"
            alt={selectedIcon}
            style={{ width: "100%", margin: "auto" }}
          /> */}
            <div className="from-concept-continer">
              <div className="from-concept-main-card">
                {selectedIcon &&
                  contentData[selectedIcon]?.map((content, idx) => (
                    <div className="from-concept-card" key={idx}>
                      <div>
                        <h3 style={{ color: "white" }}>{content.title}</h3>
                      </div>
                      <div>
                        <p style={{ color: "white" }}>{content.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div style={{ position: "absolute", zIndex: 1000 }}></div>
          </div>
          <div className="btns-container">
            <Link href="/mainWizard" className="btn" style={{ margin: "auto" }}>
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreSolutionsSection;