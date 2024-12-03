import "./PlanDetails.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiArrowUpDoubleFill } from "react-icons/ri";
// import { Check, ChevronDown, ChevronUp } from "lucide-react";
// import { useState } from "react";
import SubscriptionPlans from "./SubscriptionPlans";
const Plans = () => {
  const startupFeatures = [
    {
      title: "Tailored Platform Experience",
      description:
        "Gain full access to the IDEAX platform, customized to fit the unique needs of your business. Manage and track your company's progress effortlessly, anytime and anywhere.",
    },
    {
      title: "Mobile Accessibility",
      description:
        "Stay connected with your projects through our iOS and Android apps, ensuring you can keep tabs on your business operations from anywhere in the world.",
    },
    {
      title: "AI-Powered Assistance",
      description:
        "Utilize an advanced AI assistant to monitor the progress of your ideas and receive actionable insights that keep your projects on track.",
    },
    {
      title: "Essential Data Access",
      description:
        "Unlock critical data to jumpstart new ventures or propel your current projects forward, equipping you with the knowledge to succeed.",
    },
    {
      title: "Strategic Project Guidance",
      description:
        "Navigate the complexities of business development with structured guidance that steers your projects through the necessary stages towards successful completion.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Explore advanced solutions designed to refine and enhance your business ideas, driving innovation and competitiveness.",
    },
    {
      title: "Expert Advice",
      description:
        "Benefit from a wealth of knowledge with advice and tips gleaned from successful projects, tailored to parallel your business aspirations.",
    },
    {
      title: "Exclusive Community Interaction",
      description:
        "Engage with an exclusive community of successful entrepreneurs, sharing ideas and gaining insights from like-minded individuals.",
    },
    {
      title: "Market Insights",
      description:
        "Receive periodic reports on market trends and analytics, empowering you with the information needed to make strategic marketing decisions.",
    },
    {
      title: "Secure Cloud Storage",
      description:
        "Safeguard your business documents and resources with 5 GB of secure cloud storage, ensuring your data is protected and readily accessible.",
    },
    {
      title: "Idea Marketplace",
      description:
        "Access a dynamic marketplace to buy and sell innovative ideas, expanding your business opportunities.",
    },
    {
      title: "Unlimited AI Tests",
      description:
        "Test and validate your ideas without limits using our cutting-edge AI technology, giving you the confidence to pursue the most promising ventures.",
    },
  ];

  const enterpriseFeatures = [
    {
      title: "Tailored Platform Experience",
      description:
        "Gain full access to the IDEAX platform, customized to fit the unique needs of your business. Manage and track your company's progress effortlessly, anytime and anywhere.",
    },
    {
      title: "Mobile Accessibility",
      description:
        "Stay connected with your projects through our iOS and Android apps, ensuring you can keep tabs on your business operations from anywhere in the world.",
    },
    {
      title: "AI-Powered Assistance",
      description:
        "Utilize an advanced AI assistant to monitor the progress of your ideas and receive actionable insights that keep your projects on track.",
    },
    {
      title: "Essential Data Access",
      description:
        "Unlock critical data to jumpstart new ventures or propel your current projects forward, equipping you with the knowledge to succeed.",
    },
    {
      title: "Strategic Project Guidance",
      description:
        "Navigate the complexities of business development with structured guidance that steers your projects through the necessary stages towards successful completion.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Explore advanced solutions designed to refine and enhance your business ideas, driving innovation and competitiveness.",
    },
    {
      title: "Expert Advice",
      description:
        "Benefit from a wealth of knowledge with advice and tips gleaned from successful projects, tailored to parallel your business aspirations.",
    },
    {
      title: "Exclusive Community Interaction",
      description:
        "Engage with an exclusive community of successful entrepreneurs, sharing ideas and gaining insights from like-minded individuals.",
    },
    {
      title: "Market Insights",
      description:
        "Receive periodic reports on market trends and analytics, empowering you with the information needed to make strategic marketing decisions.",
    },
    {
      title: "Secure Cloud Storage",
      description:
        "Safeguard your business documents and resources with 5 GB of secure cloud storage, ensuring your data is protected and readily accessible.",
    },
    {
      title: "Idea Marketplace",
      description:
        "Access a dynamic marketplace to buy and sell innovative ideas, expanding your business opportunities.",
    },
    {
      title: "Unlimited AI Tests",
      description:
        "Test and validate your ideas without limits using our cutting-edge AI technology, giving you the confidence to pursue the most promising ventures.",
    },
    {
      title: "Virtual Meetings with Global Experts",
      description:
        "Engage in insightful virtual consultations with global experts to refine your strategies and accelerate your business growth.",
    },
    {
      title: "Dedicated Full-Team Support",
      description:
        "Receive dedicated support from a full team committed to ensuring a swift and successful launch or development of your ideas.",
    },
    {
      title: "Professional Enterprise Web and App Development",
      description:
        "Elevate your online presence with professionally designed websites and mobile applications tailored to reflect your enterprise's branding and operational needs.",
    },
    {
      title: "Custom CRM Development",
      description:
        "Benefit from a custom-designed CRM system, programmed specifically to enhance your operational efficiency and customer relationship management.",
    },
    {
      title: "Comprehensive SEO and SMO Services",
      description:
        "Boost your online visibility with comprehensive SEO (Search Engine Optimization) and SMO (Social Media Optimization) services, customized for your business to enhance engagement and reach.",
    },
    {
      title: "Corporate Brand Establishment",
      description:
        "Establish a strong corporate brand identity with our targeted branding strategies, designed to resonate well with your target audience and build a lasting reputation.",
    },
    {
      title: "Personalized Assistance from a Dedicated Business Advisor",
      description:
        "Gain exclusive access to a dedicated business advisor who provides customized guidance and expert support tailored to your enterprise's unique needs.",
    },
    {
      title: "Enhanced Secure Cloud Storage",
      description:
        "Safeguard your important business documents and resources with 50 GB of secure cloud storage, ensuring your data is protected and accessible whenever you need it.",
    },
  ];
  // const [isExpanded, setIsExpanded] = useState("");
  
  
  return (
    <>
      <div className="flex flex-wrap bg-[#19229A] relative">
        {/* Left Section */}
        <div className="w-full lg:w-2/5 bg-[#161D78] text-white p-10 lg:p-20 box-border">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            How to Build a Startup
          </h2>
          <p className="mt-8 text-base lg:text-lg text-left text-white leading-relaxed">
            Learn what it takes to build a successful startup using the Customer
            Development process, where entrepreneurs get out of the building to
            gather and iterate on feedback.
          </p>
          <div className="mt-8">
            <a
              className="btn2 text-sm text-white lg:text-base cursor-pointer flex items-center space-x-2"
              href="/mainWizard"
            >
              <span>Start Now</span>
              <FaArrowAltCircleRight />
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-3/5 relative">
          <img
            src="plan1.jpeg"
            alt="plan"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#191C59] opacity-50"></div>
        </div>
      </div>
      <div className="main-plan-container">
        <div className="selling-points-section">
          <div className="selling-points-container">
            <div className="selling-point">
              <h3>Expert Guidance</h3>
              <p>
                Our platform offers expert insights and guidance from industry
                professionals to help you refine and execute your ideas.
              </p>
            </div>
            <div className="selling-point">
              <h3>Comprehensive Tools</h3>
              <p>
                Get access to a wide range of tools and resources to assist in
                every stage of your business development, from idea validation
                to market launch.
              </p>
            </div>
            <div className="selling-point">
              <h3>AI-Driven Analytics</h3>
              <p>
                Leverage AI-powered analytics to test ideas, track progress, and
                make data-driven decisions that maximize your chances of
                success.
              </p>
            </div>
            <div className="selling-point">
              <h3>Global Network</h3>
              <p>
                Join a community of like-minded entrepreneurs and gain access to
                a global network of potential partners, mentors, and investors.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonials-section">
          <h2 className="testimonial-heading">What Our Clients Say</h2>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;This platform has completely transformed the way we
                develop ideas. The AI assistance and market analytics have been
                invaluable to our business.&quot;
              </p>
              <h4 className="client-name">- John Doe, CEO of Startup Inc.</h4>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;The lifetime plan is a game-changer. The resources and
                community have helped me bring my project to life.&quot;
              </p>
              <h4 className="client-name">
                - Jane Smith, Founder of Innovate Labs
              </h4>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;The Enterprise Launch plan gave us the edge we needed to
                grow quickly. Highly recommend it!&quot;
              </p>
              <h4 className="client-name">
                - Mike Johnson, Director at Tech Solutions
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <RiArrowUpDoubleFill
            className="text-[24px] text-[#6161FF] mx-auto mb-5 animate-bounce"
            size={80}
            style={{
              animation: "slideDown 2s infinite",
            }}
          />
          <style>
            {`
              @keyframes slideDown {
                0% {
                  transform: translateY(0) rotate(180deg);
                }
                50% {
                  transform: translateY(10px) rotate(180deg);
                }
                100% {
                  transform: translateY(0) rotate(180deg);
                }
              }
            `}
          </style>
          <h2 className="heading mt-10 text-xl lg:text-2xl font-semibold">
            Our Plans
          </h2>
        </div>
        <div className="plans-container">
          <div className="plan-card">
            <div>
              <h2 className="plan-title">One Life-Time Plan START-UP</h2>
              <ul className="plan-features">
                {startupFeatures.map((feature, index) => (
                  <li key={index} className="flex flex-col">
                    <div className=" text-left " style={{textAlign:"left"}}>
                      <span>✔</span>
                      {feature.title}
                    </div>
                    <div className=" text-sm">{feature.description}</div>
                  </li>
                ))}
              </ul>
              <SubscriptionPlans/>

            </div>
            {/* <button className="subscribe-button">Subscribe Now</button> */}
          </div>
          <div className="plan-card">
            <div>
              <h2 className="plan-title">Enterprise Launch</h2>
              <ul className="plan-features">
                <ul className="plan-features">
                  {enterpriseFeatures.map((feature, index) => (
                    <li key={index} className="flex flex-col">
                      <div className=" text-left">
                        <span>✔</span>
                        {feature.title}
                      </div>
                      <div className=" text-sm">{feature.description}</div>
                    </li>
                  ))}
                </ul>

              </ul>
            </div>
            <button className="subscribe-button">Contect Sales</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Plans;