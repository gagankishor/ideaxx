import React from "react";
import {
  FaArrowAltCircleRight,
  FaBook,
  FaBookOpen,
  FaClock,
  FaDatabase,
  FaLock,
} from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import Slider from "react-slick";
import { GrValidate } from "react-icons/gr";
import { RiPassValidFill } from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { HiRocketLaunch } from "react-icons/hi2";

const ProductLineupSection = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(180deg, #341E81 0%, #341E81 100%)",
    padding: "50px",
    color: "white",
  };

  const topSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "50px",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "#362976",
    // padding: "10px 20px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    width: "200px",
    height: "50px",
  };

  const cardSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "left",
    width: "31%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    border: "1px solid white",
  };

  const iconStyle = {
    fontSize: "40px",
    marginBottom: "20px",
  };

  const titleStyle = {
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "700",
    color: "white",
    textAlign: "start",
    // minHeight:'60px'
  };

  const textStyle = {
    fontSize: "14px",
    color: "white",
    textAlign: "start",
  };

  const bottomTextStyle = {
    marginTop: "50px",
    fontWeight: "200",
    fontSize: "12px",
    textAlign: "center",
    color: "#f4f8fb",
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div style={{ padding: "0px 0px" }}>
      <div style={{ backgroundColor: "black", zIndex: "0" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <p style={{ fontSize: "2.75rem", fontWeight: "200", color: "white" }}>
            {" "}
            One core platform powered by <span style={{color:'blue',fontWeight:'400'}}>AI</span>  for all your work{" "}
          </p>
          {/* Background Image */}
          <div style={{ position: "absolute", zIndex: 1,left:"470px",top:'340px' }}>
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/michael-testing/Ellipse_5790.png"
              alt="Background"
              style={{ width: "50%", margin: "auto" }}
            />
          </div>

          {/* Main Content */}
          <div
            className=""
            style={{
              width: "800px",
              height: "900px",
              margin: "auto",
              marginTop: "100px",
              display: "flex",
              position: "relative",
            }}
          >
            {/* Stage Border */}
            {/* <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/platform2.0/Stage_border.png"
              alt="Stage Border"
              style={{ position: "absolute", width: "100%" }}
            /> */}

            {/* Product Blocks */}
            <div
              style={{
                position: "relative",
                width: "310px",
                height: "255px",
                margin: "300px 0px 0px -40px",
                border: "1px solid blue",
                borderRadius: "5px",
              }}
            >
              <img
                src="/darksection1/Integrity.jpg"
                alt="Product"
                style={{ width: "300px", borderRadius: "15px" }}
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div
              style={{
                position: "relative",
                width: "310px",
                height: "245px",
                margin: "20px 150px 50px 10px",
                border: "1px solid blue",
                borderRadius: "5px",
                backgroundColor: "black",
              }}
            >
              <img
                src="/darksection1/innovation.jpg"
                alt="Product"
                style={{ width: "300px" }}
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div
              style={{
                position: "relative",
                width: "310px",
                height: "228px",
                margin: "200px -60px",
                border: "1px solid blue",
                borderRadius: "5px",
              }}
            >
              <img
                src="/darksection1/collaboration.jpg"
                alt="Product"
                style={{ width: "300px", borderRadius: "15px" }}
              />

              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            {/* <div
              style={{
                position: "relative",
                width: "210px",
                height: "210px",
                margin: "100px 10px",
                border: "1px solid blue",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/platform2.0/Tailored_products.png"
                alt="Product"
                style={{ width: "200px" }}
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div
        style={{
          backgroundColor: "black",
          zIndex: "0",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <span style={{ fontSize: "60px", fontWeight: "200", color: "white" }}>
          What our clints have say about us.
        </span>
        <p style={{ color: "white", fontSize: "16px" }}>
          Step into a world of seamless work experiences.
        </p>
        <div>
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto:best/remote_mondaycom_static/uploads/NaamaGros/Switcher_2.png"
            alt=""
            style={{ width: "600px", margin: "auto" }}
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <video
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/uploads/Yotam_Ron/110224-card-vid-wm-v1.mp4"
            style={{ width: "49%" }}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <video
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/uploads/Yotam_Ron/110224-card-vid-crm-v1.mp4"
            style={{ width: "49%" }}
            autoPlay
            loop
            muted
            playsInline
          ></video>

          <video
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/uploads/Yotam_Ron/110224-card-vid-crm-v1.mp4"
            style={{ width: "49%" }}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <video
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/uploads/Yotam_Ron/110224-card-vid-wm-v1.mp4"
            style={{ width: "49%" }}
            autoPlay
            loop
            muted
            playsInline
          ></video>
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
        <span style={{ fontSize: "60px", fontWeight: "200", color: "white" }}>
          Work together
        </span>
        <p
          style={{
            color: "white",
            fontSize: "16px",
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          Now any team can streamline work, collaborate, and solve their most
          complex problems together with our suite of products.
        </p>
      </div>
      <div style={containerStyle}>
        <div style={topSectionStyle}>
          <h1>How It Works</h1>
          <button style={buttonStyle}>Talk to Sales</button>
        </div>
        <div style={cardSectionStyle}>
          <div style={cardStyle}>
            <div style={iconStyle}>
              {/* <FaDatabase /> */}
              {/* <GrValidate /> */}
              <RiPassValidFill />
            </div>{" "}
            {/* Replace with an actual icon */}
            <div>
              <h3 style={titleStyle}>Validate Your Idea</h3>
              <p style={textStyle}>Sign up and submit your business idea.</p>
              <p style={textStyle}>
                Receive an instant report with AI-driven insights.
              </p>
            </div>
          </div>
          <div style={cardStyle}>
            <div style={iconStyle}>
              {/* <FaLock /> */}
              <PiPlugsConnectedFill />
            </div>
            <div>
              <h3 style={titleStyle}>Connect with Your Team</h3>
              <p style={textStyle}>
                Choose from our pool of experts in various fields to join your
                idea.
              </p>
              <p style={textStyle}>
                Collaborate seamlessly through our platform.
              </p>
            </div>
          </div>
          <div style={cardStyle}>
            <div style={iconStyle}>
              {/* <FaClock /> */}
              <HiRocketLaunch />
            </div>
            <div>
              <h3 style={titleStyle}>Launch & Grow</h3>
              <p style={textStyle}>
                Execute your strategy with ongoing support and optimization.
              </p>
              <p style={textStyle}>
                Monitor progress and make data-driven decisions
              </p>
            </div>
          </div>
          {/* <div style={cardStyle}>
            <div style={iconStyle}>
              <FaSeedling />
            </div>
            <div>

            <h3 style={titleStyle}>Intuitive adoption across the org</h3>
            <p style={textStyle}>
              Get teams on the same page with a platform they'll love, allowing</p>
              <p style={textStyle}>
              real-time, accurate visibility of your organization's OKRs and
              metrics.
            </p>
            </div>
          </div> */}
        </div>

        <div className="impact-section">
          {/* Header section with client logos in slider */}
          <h2 className="impact-title">
            Delivering impact across 200+ industries
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <div>
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola_1.png"
                alt="Zippo"
                className="client-logo"
                width={180}
              />
            </div>
            <div>
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola_1.png"
                alt="Canva"
                className="client-logo"
                width={180}
              />
            </div>
            <div>
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola_1.png"
                alt="Universal Music Group"
                className="client-logo"
                width={180}
              />
            </div>
            <div>
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola_1.png"
                alt="Motorola"
                className="client-logo"
                width={180}
              />
            </div>
          </div>
          <Slider {...settings} className="logo-slider custom-slider">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Slider>
          <div className="impact-details">
            <Slider {...settings} className="stats-slider">
              <div className="stat-item">
                <div style={{ position: "absolute" }}>
                  <video
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/video/video-library/Zippo_-_FC1.2_-_Clean_dark.mp4"
                    alt=""
                    style={{ width: "100%", zIndex: "0" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div style={{ zIndex: "1000" }}>
                  <div className="row">
                    <div
                      className="col stat-item-content-left"
                      style={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end", // Content aligned to the bottom
                        alignItems: "flex-start", // Align content to the left
                        
                      }}
                    >
                      <div>
                      <p style={{ textAlign: "left", margin: "0 0 10px 0",fontSize:'14px',fontWeight:'500px' }}>
                        "Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corrupti dolore deserunt alias dolorem error
                        suscipit perferendis labore. Ab dolore dignissimos
                        placeat adipisci distinctio sit esse fugiat, aut tempore
                        numquam nam, veniam odit totam laboriosam nulla."
                      </p>
                        <div >
                        <div>
                        </div>
                        <div>
                        <p style={{ textAlign: "left", margin: "0 0 10px 0" ,fontSize:'16px',fontWeight:'700px'}}>John due</p>
                        <p style={{ textAlign: "left", margin: "0 0 10px 0" ,fontSize:'14px',fontWeight:'500px'}}>Ceo Xyz</p>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="col" style={{ textAlign: "left" }}>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-item">
                <div style={{ position: "absolute" }}>
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola-bg.png"
                    alt=""
                    style={{ width: "100%", zIndex: "0" }}
                  />
                </div>
                <div style={{ zIndex: "1000" }}>
                  <div className="row">
                  <div
                      className="col stat-item-content-left"
                      style={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end", // Content aligned to the bottom
                        alignItems: "flex-start", // Align content to the left
                        
                      }}
                    >
                      <div>
                      <p style={{ textAlign: "left", margin: "0 0 10px 0",fontSize:'14px',fontWeight:'500px' }}>
                        "Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corrupti dolore deserunt alias dolorem error
                        suscipit perferendis labore. Ab dolore dignissimos
                        placeat adipisci distinctio sit esse fugiat, aut tempore
                        numquam nam, veniam odit totam laboriosam nulla."
                      </p>
                        <div >
                        <div>
                        </div>
                        <div>

                        <p style={{ textAlign: "left", margin: "0 0 10px 0" ,fontSize:'16px',fontWeight:'700px'}}>John due</p>
                        <p style={{ textAlign: "left", margin: "0 0 10px 0" ,fontSize:'14px',fontWeight:'500px'}}>Ceo Xyz</p>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="col" style={{ textAlign: "left" }}>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-item">
                <div style={{ position: "absolute" }}>
                  <video
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/video/video-library/Zippo_-_FC1.2_-_Clean_dark.mp4"
                    alt=""
                    style={{ width: "100%", zIndex: "0" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div style={{ zIndex: "1000" }}>
                  <div className="row">
                  <div
                      className="col stat-item-content-left"
                      style={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end", // Content aligned to the bottom
                        alignItems: "flex-start", // Align content to the left
                        
                      }}
                    >
                      <div>
                      <p style={{ textAlign: "left", margin: "0 0 10px 0",fontSize:'14px',fontWeight:'500px' }}>
                        "Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corrupti dolore deserunt alias dolorem error
                        suscipit perferendis labore. Ab dolore dignissimos
                        placeat adipisci distinctio sit esse fugiat, aut tempore
                        numquam nam, veniam odit totam laboriosam nulla."
                      </p>
                        <div >
                        <div>
                        </div>
                        <div>

                        <p style={{ textAlign: "left", margin: "0 0 10px 0" ,fontSize:'16px',fontWeight:'700px'}}>John due</p>
                        <p style={{ textAlign: "left", margin: "0 0 10px 0" ,fontSize:'14px',fontWeight:'500px'}}>Ceo Xyz</p>

                        </div>
                        </div>
                      
                      </div>
                    </div>
                    <div className="col" style={{ textAlign: "left" }}>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-item">
                <div style={{ position: "absolute" }}>
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola-bg.png"
                    alt=""
                    style={{ width: "100%", zIndex: "0" }}
                  />
                </div>
                <div style={{ zIndex: "1000" }}>
                  <div className="row">
                  <div
                      className="col stat-item-content-left"
                      style={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end", // Content aligned to the bottom
                        alignItems: "flex-start", // Align content to the left
                        
                      }}
                    >
                      <div>
                      <p style={{ textAlign: "left", margin: "0 0 10px 0",fontSize:'14px',fontWeight:'500px' }}>
                        "Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corrupti dolore deserunt alias dolorem error
                        suscipit perferendis labore. Ab dolore dignissimos
                        placeat adipisci distinctio sit esse fugiat, aut tempore
                        numquam nam, veniam odit totam laboriosam nulla."
                      </p>
                        <div >
                        <div>
                        </div>
                        <div>

                        <p style={{ textAlign: "left", margin: "0 0 10px 0" ,fontSize:'16px',fontWeight:'700px'}}>John due</p>
                        <p style={{ textAlign: "left", margin: "0 0 10px 0" ,fontSize:'14px',fontWeight:'500px'}}>Ceo Xyz</p>

                        </div>
                        </div>
                      
                      </div>
                    </div>
                    <div className="col" style={{ textAlign: "left" }}>
                      <div className="" style={{display:"flex"}}>
                        <div className="" style={{backgroundColor:'white',width:'2px',height:'100px'}}>

                        </div>
                        <div className="">

                        <h4>$121Kdsfsdff</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                        </div>
                      </div>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                      <div>
                        <h4>$121K</h4>
                        <p style={{ textAlign: "left" }}>
                          In value due to increased team productivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </Slider>
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
        <div className="awards-section" style={{maxWidth:'1400px',margin:'auto'}}>
          {/* Title */}
          <div className="title-section">
            <h1>Recognized by leaders. Loved by customers.</h1>
            <button className="cta-button">Talk to Sales →</button>
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-cards2">
              <div className="card gartner">
                <h3>Gartner</h3>
                <p>
                  monday.com named a Leader in the 2023 Gartner® Magic Quadrant™
                  for Collaborative Work Management.
                </p>
                <a href="#" className="read-more">
                  <FaBookOpen /> Read the report →
                </a>
              </div>
              <div className="card forrester">
                <h3>Forrester</h3>
                <p>
                  Forrester Total Economic Impact™ research: Motorola sees 346%
                  ROI with monday.com.
                </p>
                <a href="#" className="read-more">
                  {" "}
                  <FaBookOpen /> Read the report →
                </a>
              </div>
            </div>

            {/* Badges Section */}
            <div className="badge-section">
              <div className="badge-category">
                <div className="row">
                  <div>
                    <img
                      src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
                      width={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4>monday work management</h4>
                    <p>Leader in 21 Project Management categories</p>
                  </div>
                </div>

                {/* Add badge images */}
                <div className="badges">
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 1"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 2"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  {/* Add more badges as needed */}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#545454",
                  margin: "10px",
                }}
              ></div>
              <div className="badge-category">
                <div className="row">
                  <div>
                    <img
                      src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
                      width={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4>monday CRM</h4>
                    <p>
                      Leader in 4 Customer Relationship Management categories
                    </p>
                  </div>
                </div>

                <div className="badges">
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 1"
                    width={70}
                    height={150}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 2"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  {/* Add more badges as needed */}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#545454",
                  margin: "10px",
                }}
              ></div>

              <div className="badge-category">
                <div className="row">
                  <div>
                    <img
                      src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
                      width={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4>monday dev</h4>
                    <p>Leader in 3 Product Development categories</p>
                  </div>
                </div>

                <div className="badges">
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 1"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 2"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                    alt="Badge 3"
                    width={70}
                  />
                  {/* Add more badges as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={{ margin: "40px 150px" }}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                fontSize: "52px",
                fontWeight: "200",
                color: "white",
                width: "50%",
                lineHeight: "110%",
              }}
            >
              Deliver your best work with{" "}
              <span style={{ color: "gray" }}> ideax.in</span>
              <div className="btns-container" style={{ margin: "40px 0" }}>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "unset",
                  }}
                >
                  {" "}
                  Test Your Idea <FaArrowAltCircleRight />{" "}
                </button>
              </div>
            </span>

            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Contact_sales_lital_4.png"
                style={{ width: "300px", margin: "auto" }}
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
