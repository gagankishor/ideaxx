import { Helmet } from "react-helmet";
import Features from "./components/landing/Features";
import TestCard from "./components/landing/TestCard";
import More from "./components/landing/More";
import { TrustpilotWidget } from "./components/landing/Trustpilot";
import { Hero } from "./components/landing/Hero";
import Validation from "./components/landing/validation";
import CardSlider from "../../components/CardSlider";
import SlickSlider from "../../components/SlickSlider";
import IconSlider from "./components/landing/IconSlider";
import TrustedBySection from "./components/landing/TrustedBySection";
import CoreSolutionsSection from "./components/landing/CoreSolutionsSection";
import ProductLineupSection from "./components/landing/ProductLineupSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ideax | Welcome to ideax platform</title>
      </Helmet>

      <Hero />
      <h2
        className=""
        style={{
          padding: "32px 0",
          fontSize: "20px",
          fontWeight: "600",
          margin: "0",
          textAlign: "center",
        }}
      >
        {" "}
        Empowering Your Business with a Fully Integrated Online Team From
        Strategy to Execution—We’ve Got You Covered{" "}
      </h2>
      <CardSlider />
      <IconSlider/>
      <TrustedBySection />
      <CoreSolutionsSection />

      <ProductLineupSection />
      <div className="home-main-contaner">
        <Validation />
        <Features />
        <TestCard text="If you're uncertain about an idea brewing in your mind, this is the right place to test it." />
        <More />
        <div className="note">
          <div className="container">
            <h2>
              Building a company is now simplified with ideax. Our platform
              streamlines the process,{" "}
              <span>making it accessible and straightforward</span>, so you can
              focus on realizing your entrepreneurial dreams efficiently and
              effectively.
            </h2>
          </div>
        </div>
        <TestCard text="Begin exploration – Dive into your idea's potential with just one click!" />
        <TrustpilotWidget />
      </div>
    </>
  );
}
