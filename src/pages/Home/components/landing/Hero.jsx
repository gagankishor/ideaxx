import {
  FaArrowAltCircleRight,
  FaBusinessTime,
  FaHeadphones,
  FaPhone,
  FaRobot,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CardSlider from "../../../../components/CardSlider";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="hero">
      {/* <img src="/heros.jpg" alt="Background" /> */}
      <div className="container">
        <div className="hero-block">
          <h1 style={{ backgroundColor: "#111111" }}>
            {" "}
            AI Startup/ Business Idea Checker
            <span style={{ margin: "20px 0px 30px 0px", fontSize: "30px" }}>
              {" "}
              <p style={{ fontSize: "20px" }}>
                {/* No Matter What you do, there's always time to chase your dreams.
                Every success story begins with an idea{" "} */}
                Use our AI algorithms to assess the feasibility of your business
                idea based on market trends, competition, and potential
                profitability.
              </p>
            </span>
          </h1>
          <div className="btns-container">
            <Link className="btn" to="/mainWizard">
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
            <span>No Credit Card Needed.</span>
          </div>
        </div>
      </div>
      <div
        className="container hero-container2"
        style={{ marginBottom: "0px", paddingBottom: "0px" }}
      >
        <div
          className="hero-block2"
          style={{
            position: "relative",
            marginBottom: "0px",
            paddingBottom: "0px",
          }}
        >
          <img
            src="/roadmap.jpeg"
            alt="Roadmap"
            style={{
              overflow: "hidden",
              objectFit: "cover",
              width: "650px",
              borderRadius: "5px",
              border: "1px solid #dfe6f2",
              margin: "50px 0px 0px 0px",
            }}
          />
          <div
            className="card"
            style={{
              width: "280px",
              position: "absolute",
              top: "0px",
              left: "490px",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 40%, rgba(240, 243, 255, 0.3) 80%)",
              borderRadius: "20px",
              height: "380px",
            }}
          ></div>
          {/* <img
            src="/card22.webp"
            alt="Roadmap"
            style={{
              overflow: "hidden",
              objectFit: "cover",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #dfe6f2",
              margin: "50px 0px 0px 0px",
              position: "absolute",
              left: "-140px",
              top: "-50px",
            }}
          /> */}
          <motion.img
            src="/card22.webp"
            alt="Roadmap"
            style={{
              overflow: "hidden",
              objectFit: "cover",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #dfe6f2",
              margin: "50px 0px 0px 0px",
              position: "absolute",
              left: "-140px",
              top: "-50px",
            }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1, y: [0, -20, 0] }} // Changed y: 20 to y: -20 for up-down effect
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          <motion.img
            src="/card23.webp"
            alt="Roadmap"
            className="hero-image2"
            style={{
              overflow: "hidden",
              objectFit: "cover",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #dfe6f2",
              margin: "50px 0px 0px 0px",
              position: "absolute",
              left: "-140px",
              top: "300px",
            }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1, y: [0, 20, 0] }} // Up and down animation for y-axis
            transition={{
              duration: 2, // Duration for one full cycle (up and down)
              repeat: Infinity, // Infinite loop
              repeatType: "mirror", // Mirror the animation for smooth transition
            }}
          />
        </div>
      </div>
    </div>
  );
};
