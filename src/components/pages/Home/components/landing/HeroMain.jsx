// import { FaArrowAltCircleRight } from "react-icons/fa";
// import Link from "next/link"; // Correct import for Link
// import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Inter } from 'next/font/google';
import Image from "next/image";
const inter = Inter({ subsets: ['latin'] });

export const HeroMain = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-block">
        <h1 className={`idea-checker-heading ${inter.className}`}>
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
          <Image
            src="/roadmap.webp"
            alt="Business Idea Checker"
            className="hero-roadmap-img"
            height={400}
            width={400}
          />
          <div className="roadmap-card">
            <Image
              src="/landing/market-score.webp"
              alt="Roadmap"
              className="roadmap-card-img"
              width={50}
              height={50}
            />
          </div>
          <Image
            width={400}
            height={400}
            src="/Startup-Business-Idea-Checker-Online-Ideax.webp"
            alt="Startup Idea Checker"
            className="motion-img1 animate-bounce-up"
          />
          <Image
            width={400}
            height={400}
            src="/Startup-Business-Idea-Checker-Online-Ideax-2.webp"
            alt="Business idea checker online"
            className="motion-img2 animate-bounce-down"
          />
        </div>
      </div>
    </div>
  );
};