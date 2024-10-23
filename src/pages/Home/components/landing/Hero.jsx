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
          <h1 className="idea-checker-heading">
            AI Startup/ Business Idea Checker
            <span className="idea-checker-subheading">
              <p
                className="idea-checker-description"
                style={{ fontSize: "1.2rem" }}
              >
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
      <div className="container hero-container2">
        <div className="hero-block2">
          <img src="/roadmap.jpeg" alt="Roadmap" className="hero-roadmap-img" />
          <div className="roadmap-card">
            <img
              src="/ideaX_aa.jpg"
              alt="Roadmap"
              className="roadmap-card-img"
            />
            {/* <img
              src="/idiaxsection12331.png"
              alt="Roadmap"
              className="roadmap-card-img-small"
            />
            <img
              src="/idiaxsection12332.png"
              alt="Roadmap"
              className="roadmap-card-img-tiny"
            /> */}
          </div>
          <motion.img
            src="/idiaxsection1.png"
            alt="Roadmap"
            className="motion-img1"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1, y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src="/ideaxsection1i2.png"
            alt="Roadmap"
            className="motion-img2"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1, y: [0, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </div>
      </div>
    </div>
  );
};
