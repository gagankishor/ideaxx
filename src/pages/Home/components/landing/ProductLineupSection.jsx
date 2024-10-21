import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiPassValidFill } from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { HiRocketLaunch } from "react-icons/hi2";
import { Link } from "react-router-dom";
const ProductLineupSection = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(180deg, #341E81 0%, #341E81 100%)",
    padding: "50px 30px",
    color: "white",
  };

  return (
    <div style={{ padding: "0px 0px" }}>
      <div style={{ backgroundColor: "black", zIndex: "0" }}>
        <div className="responsive-section">
          <p className="main-text">
            One core platform powered by{" "}
            <span className="highlighted-text">AI</span> for all your work
          </p>
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
                src="/darksection1/Integrity.jpg"
                alt="Product"
                className="product-image"
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div className="product-box black-background">
              <img
                src="/darksection1/innovation.jpg"
                alt="Product"
                className="product-image"
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div className="product-box">
              <img
                src="/darksection1/collaboration.jpg"
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
        <div style={{}}>
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
            style={{ marginRight: "10px" }}
            alt=""
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
        <span className="client-heading-text" >
          Work together
        </span>
        <p 
          className="client-description"
          
        >
          Now any team can streamline work, collaborate, and solve their most
          complex problems together with our suite of products.
        </p>
      </div>
      <div style={containerStyle}>
        <div className="top-section">
          <h1>How It Works</h1>
          <div className="btns-container" >
            <Link className="btn"  to="/mainWizard" style={{ margin: "auto" ,backgroundColor:'white',color:"black",border:'none' }}>
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
      <div style={containerStyle}>
        <div style={{ margin: "40px 5%", maxWidth: "1200px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "3.25rem",
                fontWeight: "200",
                color: "white",
                lineHeight: "110%",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Deliver your best work with{" "}
              <span style={{ color: "gray" }}>ideax.in</span>
            </span>

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
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Contact_sales_lital_4.png"
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
