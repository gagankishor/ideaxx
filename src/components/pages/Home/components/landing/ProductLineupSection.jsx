"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiPassValidFill } from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { HiRocketLaunch } from "react-icons/hi2";
import Link from "next/link";
import ImpactSection from "./ImpactSection";
import AwardsSection from "./AwardsSection";
import { motion } from "framer-motion";

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
                src="/darksection1/box_Integrity.jpg"
                alt="Product"
                className="product-image"
              />
              <p className="p-4 text-white text-center">
                AI-powered platform ensuring integrity at every level—streamline
                operations, uphold compliance, and foster trust with
                intelligent, transparent solutions for modern...
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div className="product-box black-background">
              <img
                // src="/darksection1/innovation.webp"
                src="/darksection1/box_Innovation.jpg"
                alt="Product"
                className="product-image"
              />
              <p className="p-4 text-white text-center">
                Driving innovation—accelerate insights, streamline workflows,
                and empower your team to turn bold ideas into impactful...
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
            <div className="product-box">
              <img
                // src="/darksection1/collaboration.webp"
                src="/darksection1/box_Security.jpg"
                alt="Security"
                className="product-image"
              />
              <p className=" p-4 text-white ">
                Discover how our platform enhances operational efficiency by
                streamlining workflows, minimizing manual processes, and
                maximizing productivity across all...
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
            <div className="product-box">
              <img
                // src="/darksection1/collaboration.webp"
                src="/darksection1/box_Efficiency.jpg"
                alt="Efficiency"
                className="product-image"
              />
              <p className=" p-4 text-white ">
                Explore the robust security measures embedded within our
                platform, designed to safeguard your data and ensure full
                compliance with the highest industry...
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
        <div className=" flex flex-row items-center justify-center">
          <div className=" flex flex-col justify-center items-center">
            <img
              src="landing/validetionImage.png"
              alt="Ideax AI"
              style={{ width: "48%", margin: "" }}
            />
            <p className=" text-center text-white max-w-[40%]">
              Get your idea certified and boost its credibility instantly
            </p>
          </div>
          <img
            src="landing/ideas.webp"
            alt="Ideax AI"
            style={{ width: "40%", margin: "" }}
          />
        </div>
        <div className="video-section flex flex-wrap justify-center gap-1 md:gap-1">
          <div className="relative p-[1px] md:w-[48%]">
            <img
              src="/platforms/webpafe_landscape.jpg"
              className="w-full"
              alt="Image 1"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/Businessidentity.png"
                    alt="Team"
                    width={40}
                    className=" bg-white rounded-md p-1"
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
              src="/platforms/webpafe_landscape_eq.jpg"
              className="w-full"
              alt="Image 2"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/Businessidentity.png"
                    alt="Business Tools"
                    width={40}
                    className="bg-white rounded-md p-1"
                  />
                  <h3 className="text-white text-xl font-bold mb-1">
                    Business Tools
                  </h3>
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
              src="/platforms/webpafe_landscape_web.jpg"
              className="w-full"
              alt="Image 3"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/Businessidentity.png"
                    alt="Website Design"
                    width={40}
                    className=" bg-white rounded-md p-1"
                  />
                  <h3 className="text-white text-xl font-bold mb-1">
                    Website Design
                  </h3>
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
              src="/home-platform/imageMobile.png"
              className="w-full"
              alt="image Mobile"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/Businessidentity.png"
                    alt="Team"
                    width={40}
                    className=" bg-white rounded-md p-1"
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
                Sign up and submit your business idea. Receive an instant report
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
      <ImpactSection />
      <AwardsSection />
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

            <div className="btns-container">
              <Link
                className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ fontSize: "14px" }}
                href="/mainWizard"
              >
                Test Your Idea <FaArrowAltCircleRight />
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              className="mt-10"
            >
              <img
                src="darksection1/image.png"
                style={{ width: "100%", maxWidth: "1000px", height: "auto" }}
                alt="ideax bottom"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-3xl font-semibold text-center mb-8 text-white">
            What Our Clients Say About Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
            {[
              {
                quote: "IDEAX has transformed the way we manage our business!",
                author: "Mr. Ashish Maan",
                role: "Startup Founder",
                image: "/landing/1711453307385.jpg", // Replace with actual image URLs
                company: "BizCorp",
              },
              {
                quote:
                  "The AI features have significantly improved our decision-making process.",
                author: "Mr Vikas Puri",
                role: "JMD EXPORTS M. D.",

                image: "/landing/efacd3a2-633e-4ea0-8813-21e574eb1291.jpg",
                company: "TechStart",
              },
              {
                quote:
                  "Thanks to IDEAX, I found the perfect business idea that I could implement right away!",
                author: "Mr. Eyad Abdulla COO",
                role: "Diamond GVT Ceramic",
                image: "/landing/ventom.jpeg",
                company: "Visionary Inc.",
              },
              {
                quote:
                  "I love the tools for managing cash flow; they make financial planning so much easier!",
                author: "Mr. Ayman Basha",
                role: "GM of BASHA IMPEX",
                image: "/landing/AymanBasha.jpeg",
                company: "ShopEase",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto shadow-md rounded-lg bg-[#ffffffcb] text-black p-8 flex flex-col items-center relative mt-10"
              >
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden absolute top-[-15%] ">
                  <img
                    src={testimonial.image}
                    // src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/zippo_image.png'
                    alt={`${testimonial.author}'s photo`}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="text-center mt-5">
                  <h4 className="font-semibold text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-black mb-4">{testimonial.role}</p>
                  <p className="text-sm text-black italic">
                    “{testimonial.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-10 px-4 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          <motion.span
            className="text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#29DAB9] to-[#9348FB]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Start validating{" "}
          </motion.span>
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Start validating
          </span> */}
          your business idea with IDX
        </h2>
        <div className="btns-container mt-10 ">
          <Link
            className="btn flex items-center mt-7 justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mx-auto"
            style={{ fontSize: "14px", margin: "auto" }}
            href="/mainWizard"
          >
            Test Your Idea <FaArrowAltCircleRight />
          </Link>
        </div>
        <div className="pt-4 text-white">Total Free!</div>
      </div>
    </div>
  );
};
export default ProductLineupSection;
