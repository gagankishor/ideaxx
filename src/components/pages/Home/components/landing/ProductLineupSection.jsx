"use client";
import { FaArrowAltCircleRight, FaCircle } from "react-icons/fa";
import { RiPassValidFill } from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { HiRocketLaunch } from "react-icons/hi2";
import Link from "next/link"; 
import ImpactSection from "./ImpactSection";
import AwardsSection from "./AwardsSection";
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
                src="/darksection1/Integrity1.webp"
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
                src="/darksection1/innovation1.webp"
                alt="Product"
                className="product-image"
              />
              <p className="p-4 text-white">
                Harnessing cutting-edge AI technology to ensure your ideas are
                viable.
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
            <div className="product-box">
              <img
                // src="/darksection1/collaboration.webp"
                src="/darksection1/collaboration1.webp"
                alt="Product"
                className="product-image"
              />
              <p className=" p-4 text-white">
                A dedicated online team that works together to bring your vision
                to life.
              </p>
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
            <div className="product-box">
              <img
                // src="/darksection1/collaboration.webp"
                src="/darksection1/collaboration1.webp"
                alt="Product"
                className="product-image"
              />
              <p className=" p-4 text-white">
                A dedicated online team that works together to bring your vision
                to life.
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
        <div>
          <img
            src="landing/ideas.webp"
            alt="Ideax AI"
            style={{ width: "40%", margin: "auto" }}
          />
        </div>
        <div className="video-section flex flex-wrap justify-center gap-1 md:gap-4">
          <div className="relative p-[10px] md:w-[48%]">
            <img
              src="home-platform/blank1.jpg"
              className="w-full"
              alt="Image 1"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/Businessidentity.png"
                    alt=""
                    width={40}
                    className=" bg-white rounded-md p-1"
                  />
                  <h3 className="text-white text-xl font-bold mb-1">
                    Brand Name
                  </h3>
                </div>
                <p className="text-white text-sm text-center max-w-[70%]">
                  This is a description for Image It gives more context about
                  the image.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="relative p-[10px] md:w-[48%]">
            <img
              src="home-platform/blank2.jpg"
              className="w-full"
              alt="Image 2"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/Businessidentity.png"
                    alt=""
                    width={40}
                    className=" bg-white rounded-md p-1"
                  />
                  <h3 className="text-white text-xl font-bold mb-1">
                    Brand Name
                  </h3>
                </div>
                <p className="text-white text-sm text-center max-w-[70%]">
                  This is a description for Image It gives more context about
                  the image.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="relative p-[10px] md:w-[48%]">
            <img
              src="home-platform/blank3.jpg"
              className="w-full"
              alt="Image 3"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/Businessidentity.png"
                    alt=""
                    width={40}
                    className=" bg-white rounded-md p-1"
                  />
                  <h3 className="text-white text-xl font-bold mb-1">
                    Brand Name
                  </h3>
                </div>
                <p className="text-white text-sm text-center max-w-[70%]">
                  This is a description for Image It gives more context about
                  the image.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="relative p-[10px] md:w-[48%]">
            <img
              src="home-platform/blank4.jpg"
              className="w-full"
              alt="Image 4"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-black bg-opacity-0 w-full">
              <div className="flex flex-col items-center mt-6">
                <div className="mb-2 flex flex-row gap-3">
                  <img
                    src="/main-icon/Businessidentity.png"
                    alt=""
                    width={40}
                    className=" bg-white rounded-md p-1"
                  />
                  <h3 className="text-white text-xl font-bold mb-1">
                    Brand Name
                  </h3>
                </div>
                <p className="text-white text-sm text-center max-w-[70%]">
                  This is a description for Image It gives more context about
                  the image.{" "}
                </p>
              </div>
            </div>
          </div>
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
        <p className="client-description md:max-w-[60%]">
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
                src="darksection1/ideax-bottom.webp"
                style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                alt="ideax bottom"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
  <h3 className="text-3xl font-semibold text-center mb-8 text-white">
    What Our Clients Say About Us
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-5">
    {[
      {
        quote: "IDEAX has transformed the way we manage our business!",
        author: "Sarah L.",
        role: "Small Business Owner",
        image: "https://via.placeholder.com/150", // Replace with actual image URLs
        company: "BizCorp",
      },
      {
        quote:
          "The AI features have significantly improved our decision-making process.",
        author: "Mike R.",
        role: "Startup Founder",
        image: "https://via.placeholder.com/150",
        company: "TechStart",
      },
      {
        quote:
          "Thanks to IDEAX, I found the perfect business idea that I could implement right away!",
        author: "Emily T.",
        role: "Entrepreneur",
        image: "https://via.placeholder.com/150",
        company: "Visionary Inc.",
      },
      {
        quote:
          "The community support and resources have been invaluable for my growth.",
        author: "David K.",
        role: "Freelance Consultant",
        image: "https://via.placeholder.com/150",
        company: "Independent",
      },
      {
        quote:
          "I love the tools for managing cash flow; they make financial planning so much easier!",
        author: "Jessica P.",
        role: "E-commerce Manager",
        image: "https://via.placeholder.com/150",
        company: "ShopEase",
      },
    ].map((testimonial, index) => (
      <div
        key={index}
        className="max-w-sm mx-auto bg-white text-black p-8 rounded-xl flex flex-col items-center shadow-lg relative mt-10"
      >
        <div className="w-20 h-20 mb-4 rounded-full overflow-hidden absolute top-[-15%] ">
          <img
            src='https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/zippo_image.png'
            alt={`${testimonial.author}'s photo`}
            className="w-full h-full object-cover "
          />
        </div>

        <div className="text-center mt-5">
          <h4 className="font-semibold text-lg">{testimonial.author}</h4>
          <p className="text-sm mb-4">{testimonial.role}</p>
          <p className="text-sm italic">“{testimonial.quote}”</p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};
export default ProductLineupSection;
