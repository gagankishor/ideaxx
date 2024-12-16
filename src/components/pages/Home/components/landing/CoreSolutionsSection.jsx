"use client";
import React, { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
import "./CoreSolutionsSection.css";
import { FaArrowAltCircleRight, FaRobot } from "react-icons/fa";
import Slider from "react-slick";
import { GiTeamIdea } from "react-icons/gi";
import { TiCloudStorage } from "react-icons/ti";
import {
  MdArrowBackIosNew,
  MdOutlineArrowForwardIos,
  MdOutlineSell,
} from "react-icons/md";
import Link from "next/link";
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
        "Leverage AI to evaluate the feasibility of your business idea based on market trends and potential profitability.",
    },
    {
      title: "Feedback & Insights",
      description:
        "Receive comprehensive reports with actionable insights to improve your idea and business strategy effectively.",
    },
    {
      title: "Market Research",
      description:
        "Access curated data to uncover opportunities and challenges within your target market and industry.",
    },
    {
      title: "Competitor Analysis",
      description:
        "Analyze competitors in-depth to identify your unique value proposition and stand out in the market.",
    },
    {
      title: "Risk Assessment",
      description:
        "Assess potential risks and prepare for challenges to ensure a well-rounded business strategy.",
    },
    {
      title: "Trend Analysis",
      description:
        "Discover emerging trends that could impact your business and use them to stay ahead of the curve.",
    },
  ],
  "Integrated Online Team": [
    {
      title: "Strategic Planning",
      description:
        "Comprehensive strategies to align your business goals, resources, and long-term vision effectively and efficiently.",
    },
    {
      title: "Marketing & Branding",
      description:
        "Tailored strategies and branding solutions designed to make your business unique, recognizable, and highly competitive.",
    },
    {
      title: "Design & Development",
      description:
        "Expert development of websites and applications for a strong and impactful online presence that attracts customers.",
    },
    {
      title: "Customer Support & Engagement",
      description:
        "Specialized teams to handle customer interactions and build lasting loyalty through exceptional  service.",
    },
    {
      title: "Finance & HR Services",
      description:
        "Support in finance, administration, and HR to ensure seamless operations and achieve organizational goals effectively.",
    },
    {
      title: "Project Management",
      description:
        "Complete project management services to deliver results efficiently, on time, and with high-quality standards.",
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
        "Connect with potential investors actively seeking out innovative projects to passionately support and generously fund.",
    },
  ],
  "Buy-Sell Platform": [
    {
      title: "Buy Ideas",
      description:
        "Explore a marketplace to purchase fully developed ideas or project concepts that are ready to launch or scale successfully.",
    },
    {
      title: "Sell Ideas",
      description:
        "List your innovative ideas or business projects for sale, connecting with investors who value creativity and potential.",
    },
    {
      title: "Secure Transactions",
      description:
        "Experience a safe and seamless transaction process designed to protect both buyers and sellers with ease.",
    },
  ],
  "Safe Cloud Storage": [
    {
      title: "Document Management",
      description:
        "Securely store and organize your important documents, including contracts, registrations, and records efficiently.",
    },
    {
      title: "Easy Access",
      description:
        "Access your stored documents anytime and anywhere, ensuring vital information is always available when needed most.",
    },
    {
      title: "Data Protection",
      description:
        "Enjoy robust security measures that protect your sensitive information, ensuring it remains completely confidential.",
    },
  ],
};
const CoreSolutionsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(3); // Default center index
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    afterChange: (current) => {
      // Calculate the center index based on slidesToShow
      const centerIndex = Math.floor(3 / 2); // For 5 visible slides, center is index 2
      setSelectedIndex(current + centerIndex);
    },
    nextArrow: (
      <div className="next-arrow ml-[-20px] cursor-pointer">
        <MdOutlineArrowForwardIos onClick={handleNext} color="white" size={30} />
      </div>
    ),
    prevArrow: (
      <div className="prev-arrow cursor-pointer">
        <MdArrowBackIosNew onClick={handlePrevious} color="white" size={30} />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true },
      },
    ],
  };

  React.useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(selectedIndex - Math.floor(5 / 2));
    }
  }, [selectedIndex]);

  const selectedIcon = icons[selectedIndex % icons.length].label; // Handle wrap-around indexing

  return (
    <section id="features" style={{ padding: "0px 0px", color: "white" }}>
      <div style={{ backgroundColor: "black", padding: "30px 0" }}>
        <div style={{ margin: "auto", maxWidth: "1200px" }}>
          <div
            style={{
              backgroundColor: "black",
              zIndex: "0",
              textAlign: "center",
              padding: "40px 0 0px",
            }}
          >
            <div
              style={{ display: "flex", margin: "auto", width: "fit-content" }}
            >
              <img
                src="/main-icon/hand.webp"
                style={{ marginRight: "10px" }}
                alt="icon 3"
                width={50}
                className=" bg-[#A31C2F] rounded-lg p-0"
              />
              <img
                src="/main-icon/legal.webp"
                style={{ marginRight: "10px" }}
                alt="Startup business idea checker"
                width={50}
                className=" bg-[#0A7678] rounded-lg p-0"
              />
              <img
                src="/main-icon/marketing.webp"
                style={{ marginRight: "10px" }}
                alt="Business idea checker free"
                width={50}
                className=" bg-[#0F6333] rounded-lg p-0"
              />
              <img
                src="/main-icon/team.webp"
                alt="icon 4"
                width={50}
                className=" bg-[#480D6B] rounded-lg p-0"
              />
            </div>
            <h2 className="client-heading-text mb-0 p-0">Work together</h2>
            <p
              className="client-description md:max-w-[60%]"
              style={{ padding: "10px" }}
            >
              Now any team can streamline work, collaborate, and solve their
              most complex problems together with our suite of products and much
              more.
            </p>
          </div>
          <div className="slider-container" style={{ marginTop: "50px" }}>
            <div className="left-sedow2 hover:opacity-0 pointer-events-none transition-opacity duration-300"></div>
            <div
              className="carousel-container"
              style={{
                padding: "0px ",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              <Slider {...settings} ref={sliderRef}>
        {icons.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              padding: "110px",
              width: "20%",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform:
                selectedIndex % icons.length === index
                  ? "scale(1.2)"
                  : "scale(1)", // Highlight center icon
              opacity: selectedIndex % icons.length === index ? 1 : 0.6, // Dim non-selected items
            }}
            className="icon-item"
            onClick={() => setSelectedIndex(index)}
          >
            <div
              className="icon"
              style={{
                fontSize: "24px",
                cursor: "pointer",
                textAlign: "center",
                margin: "auto",
                width: "fit-content",
                color: selectedIndex % icons.length === index ? "#6161FF" : "#b8b4b4",
              }}
            >
              {item.icon}
            </div>
            <div
              className="icon-title w-28"
              style={{
                color: selectedIndex % icons.length === index ? "white" : "#b8b4b4",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </Slider>
            </div>
            <div className="right-sedow2 hover:opacity-0 pointer-events-none transition-opacity duration-300"></div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="from-concept-continer">
              <div className="from-concept-main-card">
              {selectedIcon &&
        contentData[selectedIcon]?.map((content, idx) => (
          <div className="from-concept-card min-h-[180px]" key={idx}>
            <div>
              <h3 style={{ color: "white" }}>{content.title}</h3>
            </div>
            <div>
              <p style={{ color: "white" }} className="text-md">
                {content.description}
              </p>
            </div>
          </div>
        ))}
              </div>
            </div>
            <div style={{ position: "absolute", zIndex: 1000 }}></div>
          </div>
          <div className="btns-container flex justify-center mx-auto">
            <Link
              className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mx-auto
            "
              style={{ fontSize: "14px" }}
              href="/mainWizard"
            >
              Test Your Idea
              <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreSolutionsSection;