
import CardSlider from "@/components/CardSlider";
import AwardsSection from "@/components/pages/Home/components/landing/AwardsSection";
// import BlockchainTechnology from "@/components/pages/Home/components/landing/BlockchainTechnology";
import CoreSolutionsSection from "@/components/pages/Home/components/landing/CoreSolutionsSection";
// import { Hero2 } from "@/components/pages/Home/components/landing/Hero2";
// import { Hero } from "@/components/pages/Home/components/landing/Hero";
// import { Hero2 } from "@/components/pages/Home/components/landing/Hero2";
import { HeroMain } from "@/components/pages/Home/components/landing/HeroMain";
import ImpactSection from "@/components/pages/Home/components/landing/ImpactSection";
// import HeroSection from "@/components/pages/Home/components/landing/HeroSection";
import ProductLineupSection from "@/components/pages/Home/components/landing/ProductLineupSection";
import TestimonialsSection from "@/components/pages/Home/components/landing/TestimonialsSection";
import TrustedBySection from "@/components/pages/Home/components/landing/TrustedBySection";

// import { Helmet } from "react-helmet";

// import { Hero } from "./components/landing/Hero";
// import TrustedBySection from "./components/landing/TrustedBySection";
// import ProductLineupSection from "./components/landing/ProductLineupSection";
// import CoreSolutionsSection from "./components/landing/CoreSolutionsSection";
// import CardSlider from "@/components/CardSlider";
// import BlockchainTechnology from "./components/landing/BlockchainTechnology";
// import HeroSection from "./components/landing/HeroSection";

export default function Home() {
  return (
    <>
      {/* <Helmet>
        <title>Startup Business Idea Checker Online - Ideax</title>
        <meta name="description" content="Best AI based Startup Business Idea Checker Online free tool. Verify your business ideas and get valuable insights. Test business idea now." />
        <meta name="keywords" content="Business Idea Checker, Startup Idea Checker, Business idea checker online, Startup business idea checker, Business idea checker free, Seo data for home page" />
      </Helmet> */}
      {/* <HeroSection /> */}
      <HeroMain/>
      {/* <Hero /> */}

      <h2 className="card-slider-haedding">
        {" "}
        Simplifies business operations, reduces bureaucratic delays, and
        supports secure transactions
      </h2>
      <CardSlider />
      {/* <BlockchainTechnology /> */} 
      {/* <IconSlider/> */}
      <TrustedBySection />
      <CoreSolutionsSection />
      <ProductLineupSection />
      <ImpactSection />
      {/* <Hero2/> */}
      <AwardsSection />
      {/* <ImpactSection/> */}
      <TestimonialsSection/>
      {/* <div className="home-main-contaner">
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
      </div> */}
    </>
  );
}