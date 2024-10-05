import React from "react";
import "./PlanDetails.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiArrowUpDoubleFill } from "react-icons/ri";
const Plans = () => {
  return (<>
  
  <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#19229A', position: 'relative' }}> 
  <div style={{ width: '45%', backgroundColor: '#161D78', padding: '80px 100px', color: 'white' }}>
    <h2>How to Build a Startup</h2>
    <div style={{marginTop:'50px'}}>Learn what it takes to build a successful startup using the Customer Development process, where entrepreneurs "get out of the building" to gather and iterate on feedback.</div>
  <div className="btns-container" style={{marginTop:"50px",width:'150px'}}>
                <a
                  className="btn2"
                  style={{ fontSize: "14px",cursor:'pointer' }}
                  to="/mainWizard"
                >
                  Start Now <FaArrowAltCircleRight/>
                </a>
              </div>
  </div>
  <div style={{ width: '55%', position: 'relative' }}>
    <img
      src="plan1.jpeg"
      alt=""
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#191C59',
        opacity: 0.5, // Adjust the opacity as per your preference
      }}
    />
  </div>
</div>

    <div className="main-plan-container">
      
      <div className="selling-points-section">
        <h2 className="selling-points-heading">Why Choose Us?</h2>
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
              every stage of your business development, from idea validation to
              market launch.
            </p>
          </div>
          <div className="selling-point">
            <h3>AI-Driven Analytics</h3>
            <p>
              Leverage AI-powered analytics to test ideas, track progress, and
              make data-driven decisions that maximize your chances of success.
            </p>
          </div>
          <div className="selling-point">
            <h3>Global Network</h3>
            <p>
              Join a community of like-minded entrepreneurs and gain access to a
              global network of potential partners, mentors, and investors.
            </p>
          </div>
        </div>
      </div>
       {/* Client Testimonials Section */}
       <div className="testimonials-section">
        <h2 className="testimonial-heading">What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "This platform has completely transformed the way we develop
              ideas. The AI assistance and market analytics have been invaluable
              to our business."
            </p>
            <h4 className="client-name">- John Doe, CEO of Startup Inc.</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The lifetime plan is a game-changer. The resources and community
              have helped me bring my project to life."
            </p>
            <h4 className="client-name">- Jane Smith, Founder of Innovate Labs</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The Enterprise Launch plan gave us the edge we needed to grow
              quickly. Highly recommend it!"
            </p>
            <h4 className="client-name">- Mike Johnson, Director at Tech Solutions</h4>
          </div>
        </div>
      </div>
      <div style={{ alignItems: "center", textAlign: "center" }}>
        <h2
          className=""
          style={{
            marginBottom: "60px",
            fontWeight: "400",
            padding: "10px",
            width: "60%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          You have reached your limit to test ideas, you can choose from the
          below mentioned plans to proceed
        </h2>
        <RiArrowUpDoubleFill 
  size={100}
  style={{
    transform: "rotate(180deg)", // Rotated downward
    fontSize: "24px",
    color: "#6161FF",
    animation: "slideDown 2s infinite"
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


        <h1 className="heading">Our Plans</h1>
      </div>  
      <div className="plans-container">
        {/* One Life-Time Plan - Start-Up */}
        <div className="plan-card">
          <div>
            <h2 className="plan-title">One Life-Time Plan START-UP</h2>
            <ul className="plan-features">
              <li>
                <span>✔</span> Track your work anywhere with our iOS and Android
                apps
              </li>
              <li>
                <span>✔</span> AI assistant to track your idea's progress
              </li>
              <li>
                <span>✔</span> Access essential data for starting or advancing
                your idea
              </li>
              <li>
                <span>✔</span> Guiding your project through the proper stages of
                development
              </li>
              <li>
                <span>✔</span> Advanced solutions for your idea
              </li>
              <li>
                <span>✔</span> Advice and tips from similarly successful
                projects
              </li>
              <li>
                <span>✔</span> Exclusive business community to share your ideas
                and thoughts with other successful individuals
              </li>
              <li>
                <span>✔</span> Receive periodic market trend reports and
                analytics
              </li>
              <li>
                <span>✔</span> 1 GB secure cloud storage for your business
                documents and resources
              </li>
              <li>
                <span>✔</span> Sell and buy ideas
              </li>
              <li>
                <span>✔</span> Unlimited AI idea tests
              </li>
            </ul>
          </div>

          <button className="subscribe-button">Subscribe Now</button>
        </div>

        {/* Enterprise Launch Plan */}
        <div className="plan-card">
          <div>
            <h2 className="plan-title">Enterprise Launch</h2>
            <ul className="plan-features">
              <li>
                <span>✔</span> All lifetime startup plan plus+
              </li>
              <li>
                <span>✔</span> Virtual meetings with global experts for
                insightful consultations
              </li>
              <li>
                <span>✔</span> Dedicated full-team support for a swift idea
                launch or development
              </li>
              <li>
                <span>✔</span> Professional enterprise web presence
              </li>
              <li>
                <span>✔</span> Professional enterprise App
              </li>
              <li>
                <span>✔</span> Develop a specially designed and programmed CRM
                for your idea
              </li>
              <li>
                <span>✔</span> Comprehensive SEO services customized for your
                business
              </li>
              <li>
                <span>✔</span> Comprehensive SMO services customized for your
                business
              </li>
              <li>
                <span>✔</span> Corporate brand establishment for your enterprise
              </li>
              <li>
                <span>✔</span> Personalized Assistance: Dedicated business
                advisor
              </li>
              <li>
                <span>✔</span> 5 GB secure cloud storage for your business
                documents and resources
              </li>
              <li>
                <span>✔</span> Personalized TOTAL FREE platform to manage your
                company
              </li>
            </ul>
          </div>

          <button className="subscribe-button">Subscribe Now</button>
        </div>
      </div>
    </div></>
  );
};

export default Plans;
