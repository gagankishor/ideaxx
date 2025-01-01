// import { FaArrowAltCircleRight } from "react-icons/fa";
// import Link from "next/link"; // Correct import for Link
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
export const HeroMain = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-block">
          <h1 className="idea-checker-heading">
            AI-Powered Startup and Business Idea Validator
          </h1>
          <span className="idea-checker-subheading">
            <p
              className="idea-checker-description"
              style={{ fontSize: "1.2rem", maxWidth: "700px" }}
            >
              Use our AI algorithms to assess the feasibility of your business
              idea based on market trends, competition, and potential
              profitability.
            </p>
          </span>
          <div className="btns-container">
            <Link
              className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontSize: "14px" }}
              href="/mainWizard"
            >
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
          </div>
          <div className="text-black text-sm pt-2">Enjoy our Total Free Ai Tools</div>
        </div>
      </div>
      <div className="container hero-container2 mt-6">
        <div className="hero-block2">
          <img
            src="/roadmap.webp"
            alt="Business Idea Checker"
            className="hero-roadmap-img"
          />
          <div className="roadmap-card">
            <img
              src="/landing/market-score.webp"
              alt="Roadmap"
              className="roadmap-card-img"
            />
          </div>
          <motion.img
            src="/Startup-Business-Idea-Checker-Online-Ideax.webp"
            alt="Startup Idea Checker"
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
            src="/Startup-Business-Idea-Checker-Online-Ideax-2.webp"
            alt="Business idea checker online"
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
