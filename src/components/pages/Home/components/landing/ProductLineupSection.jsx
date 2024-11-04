"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiPassValidFill } from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { HiRocketLaunch } from "react-icons/hi2";
import Link from "next/link"; // Correct import for Link
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
                // src="/darksection1/Integrity.webp"
                src="/darksection1/Integrity1.jpg"
                alt="Product"
                className="product-image"
              />
              <p className="p-4 text-white">
              We prioritize transparency and trust in all our interactions.
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div className="product-box black-background">
              <img
                // src="/darksection1/innovation.webp"
                src="/darksection1/innovation1.jpg"
                alt="Product"
                className="product-image"
              />
              <p className="p-4 text-white">
              Harnessing cutting-edge AI technology to ensure your ideas are viable.
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
            <div className="product-box">
              <img
                // src="/darksection1/collaboration.webp"
                src="/darksection1/collaboration1.jpg"
                alt="Product"
                className="product-image"
              />
              <p className=" p-4 text-white">
              A dedicated online team that works together to bring your vision to life.
              </p>
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
          Wide range of AI Based Tools, for All your Business needs.
          </span>
        </h2>
        <p className="client-description max-w-[60%]">
          Ideax AI empowers entrepreneurs by providing innovative tools for idea
          validation and a fully integrated online team that executes their
          vision.
        </p>
        <div>
          <img
            src="landing/ideas.png"
            alt="Ideax AI"
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
            alt="icon 3"
            width={50}
          />
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
            alt="icon 4"
            width={50}
          />
        </div>
        <h2 className="client-heading-text">Work together</h2>
        <p className="client-description max-w-[60%]">
          Now any team can streamline work, collaborate, and solve their most
          complex problems together with our suite of products.
        </p>
      </div>
      <div style={containerStyle}>
        <div className="top-section">
          <h2 className="text-4xl">How It Works</h2>
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
          <div className="card1 items-center">
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
          <div className="card1 items-center">
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
          <div className="card1 items-center">
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
                alt="ideax bottom"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
        <div className="mt-10">
  <h3 className="text-3xl font-semibold text-center mb-8 text-white">
    What Our Clients Say About Us
  </h3>
  <ul className="space-y-6">
    {[
      {
        quote: "IDEAX has transformed the way we manage our business!",
        author: "Sarah L., Small Business Owner",
      },
      {
        quote: "The AI features have significantly improved our decision-making process.",
        author: "Mike R., Startup Founder",
      },
      {
        quote: "Thanks to IDEAX, I found the perfect business idea that I could implement right away!",
        author: "Emily T., Entrepreneur",
      },
      {
        quote: "The community support and resources have been invaluable for my growth.",
        author: "David K., Freelance Consultant",
      },
      {
        quote: "I love the tools for managing cash flow; they make financial planning so much easier!",
        author: "Jessica P., E-commerce Manager",
      },
    ].map((testimonial, index) => (
      <li
        key={index}
        className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <p className="text-lg text-white text-left mb-2">🌟 "{testimonial.quote}"</p>
        <span className="block font-semibold text-right text-white">
          — {testimonial.author}
        </span>
      </li>
    ))}
  </ul>
</div>

    </div>
      </div>
    </div>
  );
};
export default ProductLineupSection;