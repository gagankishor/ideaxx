"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiPassValidFill } from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { HiRocketLaunch } from "react-icons/hi2";
import Link from "next/link"; // Correct import for Link
import Slider from "react-slick";
import ImpactSection from "./ImpactSection";
import AwardsSection from "./AwardsSection";
// import ImpactSection from "./ImpactSection";
const ProductLineupSection = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(180deg, #341E81 0%, #341E81 100%)",
    padding: "50px 30px",
    color: "white",
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height: "5px",
          backgroundColor: "gray",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(50%)",
            fontSize: "12px",
          }}
        >
          {`Step ${i + 1}`} s
        </span>
      </div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        {dots}
      </div>
    ),
  };
  const testimonials = [
    {
      videoSrc: "360img.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolore deserunt alias dolorem error suscipit perferendis labore.",
      name: "John Doe",
      title: "CEO XYZ",
      stats: [
        {
          amount: "$121K",
          description: "In value due to increased team productivity",
        },
      ],
    },
    {
      videoSrc: "360img.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolore deserunt alias dolorem error suscipit perferendis labore.",
      name: "John Doe",
      title: "CEO XYZ",
      stats: [
        {
          amount: "$121K",
          description: "In value due to increased team productivity",
        },
      ],
    },
    {
      videoSrc: "360img.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolore deserunt alias dolorem error suscipit perferendis labore.",
      name: "John Doe",
      title: "CEO XYZ",
      stats: [
        {
          amount: "$121K",
          description: "In value due to increased team productivity",
        },
      ],
    },
    {
      videoSrc: "360img.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolore deserunt alias dolorem error suscipit perferendis labore.",
      name: "John Doe",
      title: "CEO XYZ",
      stats: [
        {
          amount: "$121K",
          description: "In value due to increased team productivity",
        },
      ],
    },
  ];
  return (
    <div style={{ padding: "0px 0px" }}>
      <div style={{ backgroundColor: "black", zIndex: "0" }}>
        <div className="responsive-section">
          <h2 className="main-text">
            One core platform powered by{" "}
            <span className="highlighted-text">AI</span> for all your work
          </h2>
          <div className="image-background">
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/michael-testing/Ellipse_5790.png"
              alt="Background"
              className="background-image"
            />
          </div>
          <div className="product-container">
            <div className="product-box">
              <img
                src="/darksection1/Integrity.webp"
                alt="Product"
                className="product-image"
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div className="product-box black-background">
              <img
                src="/darksection1/innovation.webp"
                alt="Product"
                className="product-image"
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div className="product-box">
              <img
                src="/darksection1/collaboration.webp"
                alt="Product"
                className="product-image"
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          zIndex: "0",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <h2 className="client-heading">
          <span className="client-heading-text">
            What our Client’s have to say about us.
          </span>
        </h2>
        <p className="client-description">
          Ideax AI empowers entrepreneurs by providing innovative tools for idea
          validation and a fully integrated online team that executes their
          vision.
        </p>
        <div>
          <img
            src="landing/ideas.png"
            alt=""
            style={{ width: "40%", margin: "auto" }}
          />
        </div>
        <div className="video-section">
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/sTH7riysqcs?si=DQ7jIjQbCzqQJMwh&loop=1&rel=0&playlist=sTH7riysqcs&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/sTH7riysqcs?si=DQ7jIjQbCzqQJMwh&loop=1&rel=0&playlist=sTH7riysqcs&controls=0&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/sTH7riysqcs?si=DQ7jIjQbCzqQJMwh&loop=1&rel=0&playlist=sTH7riysqcs&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/sTH7riysqcs?si=DQ7jIjQbCzqQJMwh&loop=1&rel=0&playlist=sTH7riysqcs&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          zIndex: "0",
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <div style={{ display: "flex", margin: "auto", width: "fit-content" }}>
          {/* <img
            src="main-icon/Idea.png"
            style={{ marginRight: "10px",color:'white' ,backgroundColor:"#6161FF",padding:"7px",borderRadius:'5px'}}
            alt=""
            width={50}
          /> */}
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
            style={{ marginRight: "10px" }}
            alt="Startup business idea checker"
            width={50}
          />
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
            style={{ marginRight: "10px" }}
            alt="Business idea checker free"
            width={50}
          />
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
            style={{ marginRight: "10px" }}
            alt=""
            width={50}
          />
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
            alt=""
            width={50}
          />
        </div>
        <h2 className="client-heading-text">Work together</h2>
        <p className="client-description">
          Now any team can streamline work, collaborate, and solve their most
          complex problems together with our suite of products.
        </p>
      </div>
      <div style={containerStyle}>
        <div className="top-section">
          <h2>How It Works</h2>
          <div className="btns-container">
            <Link
              className="btn"
              href="/mainWizard"
              style={{
                margin: "auto",
                backgroundColor: "white",
                color: "black",
                border: "none",
              }}
            >
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
        <div className="card-section">
          <div className="card1">
            <div className="icon">
              <RiPassValidFill />
            </div>
            <div>
              <h3 className="card-title">Validate Your Idea</h3>
              <p className="card-text">
                Sign up and submit your business idea.
              </p>
              <p className="card-text">
                Receive an instant report with AI-driven insights.
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="icon">
              <PiPlugsConnectedFill />
            </div>
            <div>
              <h3 className="card-title">Connect with Your Team</h3>
              <p className="card-text">
                Choose from our pool of experts in various fields to join your
                idea.
              </p>
              <p className="card-text">
                Collaborate seamlessly through our platform.
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="icon">
              <HiRocketLaunch />
            </div>
            <div>
              <h3 className="card-title">Launch & Grow</h3>
              <p className="card-text">
                Execute your strategy with ongoing support and optimization.
              </p>
              <p className="card-text">
                Monitor progress and make data-driven decisions
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImpactSection/>
      <AwardsSection/>
      {/* <ImpactSection/> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(180deg, #341E81 0%, #341E81 100%)",
          padding: "0px 30px 50px",
          color: "white",
        }}
      >
        <div style={{ margin: "40px 5%", maxWidth: "1200px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2.75rem",
                fontWeight: "200",
                color: "white",
                lineHeight: "110%",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Deliver your best work with{" "}
              <span style={{ fontWeight: "600" }}>ideax</span>
            </h2>

            <div className="btns-container" style={{ marginBottom: "40px" }}>
              <button
                className="btn"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "unset",
                  padding: "10px 20px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Test Your Idea <FaArrowAltCircleRight />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src="darksection1/ideax-bottom.png"
                style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLineupSection;
