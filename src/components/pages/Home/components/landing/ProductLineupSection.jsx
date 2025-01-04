"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiPassValidFill } from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { HiRocketLaunch } from "react-icons/hi2";
import Link from "next/link";
// import ImpactSection from "./ImpactSection";
// import AwardsSection from "./AwardsSection";
// import { motion } from "framer-motion";
// import { Hero2 } from "./Hero2";

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
                src="/darksection1/box_Integrity.webp"
                alt="Product"
                className="product-image" 
              />
              <p className="p-4 text-white text-center">
              AI-powered operations ensure compliance, enhance trust, and build value  intelligent solutions for modern businesses.
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
            <div className="product-box black-background">
              <img
                // src="/darksection1/innovation.webp"
                src="/darksection1/box_Innovation.webp"
                alt="Product"
                className="product-image"
              />
              <p className="p-4 text-white text-center">
                Drive innovation—accelerate insights, streamline workflows, and empower your team to transform bold ideas into impact.
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
            <div className="product-box">
              <img
                src="/darksection1/box_Security.webp"
                alt="Security"
                className="product-image"
              />
              <p className=" p-4 text-white ">
                Discover operational efficiency by streamlining workflows, reducing manual tasks, and maximizing productivity.
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
            <div className="product-box">
              <img
                src="/darksection1/box_Efficiency.webp"
                alt="Efficiency"
                className="product-image"
              />
              <p className=" p-4 text-white ">
                Explore our platform&rsquo;s robust security measures designed to safeguard data and ensure full industry compliance.
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
        <p className="client-description md:max-w-[60%]">
          Ideax AI empowers entrepreneurs by providing innovative tools for idea
          validation and a fully integrated online team that executes their
          vision.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 gap-8">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <img
          src="landing/validetionImage.webp"
          alt="Ideax AI"
          className="w-4/5 md:w-1/2 mb-4"
        />
        <p className="text-center text-white w-full md:w-2/3 lg:w-1/2">
          Get your idea certified and boost its credibility instantly
        </p>
      </div>
      <img
        src="landing/ideas.webp"
        alt="Ideax AI"
        className="w-4/5 md:w-2/5"
      />
    </div>
        <p className="text-white pt-14  text-2xl max-w-5xl mx-auto">
        Experience the first system fully controlled via mobile app—seamlessly manage all your tasks from your phone, reducing your reliance on traditional computing devices!</p>
        <div className="video-section flex flex-wrap justify-center gap-1 md:gap-1">
          <div className="relative p-[1px] md:w-[48%]">
            <img
              src="/home-platform/2.webp"
              className="w-full"
              alt="Image 1"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-1 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/team.webp"
                    alt="Team"
                    width={40}
                    className=" bg-white rounded-md p-[2px]"
                  />
                  <h3 className="text-white text-xl font-bold mb-1">Team</h3>
                </div>
                {/* <p className="text-white text-sm text-center max-w-[70%]">
                  This is a description for Image It gives more context about
                  the image.{" "}
                </p> */}
              </div>
            </div>
          </div>
          <div className="relative p-[1px] md:w-[48%]">
            <img
              src="/home-platform/new_page_home_mob-2.webp"
              className="w-full"
              alt="Image 2"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-1 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                <img
                    src="/main-icon/hand.webp"
                    alt="Website Design"
                    width={40}
                    className=" bg-white rounded-md p-[2px]"
                  />
                  <span className="text-white text-xl font-bold mb-1">
                  Business Tools
                  </span>
                </div>
                {/* <p className="text-white text-sm text-center max-w-[70%]">
                  This is a description for Image It gives more context about
                  the image.{" "}
                </p> */}
              </div>
            </div>
          </div>
          <div className="relative p-[1px] md:w-[48%]">
            <img
              src="/home-platform/1.webp"
              className="w-full"
              alt="Image 3"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-1 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/hand.webp"
                    alt="Website Design"
                    width={40}
                    className=" bg-white rounded-md p-[2px]"
                  />
                  <span className="text-white text-xl font-bold mb-1">
                  Business Tools
                  </span>
                </div>
                {/* <p className="text-white text-sm text-center max-w-[70%]">
                  This is a description for Image It gives more context about
                  the image.{" "}
                </p> */}
              </div>
            </div>
          </div>
          <div className="relative p-[1px] md:w-[48%]">
            <img
              src="/home-platform/webpafe_landscape_sec_n_mob_2.webp"
              className="w-full"
              alt="image Mobile"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-1 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/idea3D.webp"
                    alt="Team"
                    width={40}
                    className=" bg-white rounded-md p-[2px]"
                  />
                  <h3 className="text-white text-xl font-bold mb-1">Idea</h3>
                </div>
                {/* <p className="text-white text-sm text-center max-w-[70%]">
                  This is a description for Image It gives more context about
                  the image.{" "}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          backgroundColor: "black",
          zIndex: "0",
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <div style={{ display: "flex", margin: "auto", width: "fit-content" }}>
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
        <p className="client-description md:max-w-[60%]">
          Now any team can streamline work, collaborate, and solve their most
          complex problems together with our suite of products.
        </p>
      </div> */}
      <div style={containerStyle}>
        <div className="top-section">
          <h2 className="text-4xl">How It Works</h2>
          <div className="btns-container">
            <Link
              className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontSize: "14px" }}
              href="/mainWizard"
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
              <p className="card-text text-justify">
                No need to sing up, only submit your business idea. Receive an instant report
                with AI-driven insights.
              </p>
            </div>
          </div>
          <div className="card1 items-center">
            <div className="icon">
              <PiPlugsConnectedFill />
            </div>
            <div>
              <h3 className="card-title">Improve Your Idea</h3>
              <p className="card-text text-justify">
                Enhance your idea with relevant content and expert
                recommendations. Get personalized feedback to refine your
                concept.
              </p>
            </div>
          </div>
          <div className="card1 items-center">
            <div className="icon">
              <HiRocketLaunch />
            </div>
            <div>
              <h3 className="card-title ">Launch & Grow</h3>
              <p className="card-text text-justify">
                Execute your strategy with ongoing support and optimization.
                Monitor progress and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductLineupSection;