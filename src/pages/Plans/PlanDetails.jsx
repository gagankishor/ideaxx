import React from 'react';
import './PlanDetails.css'
const Plans = () => {
  return (
    <div className="main-plan-container">
    <h1 className="heading">Our Plans</h1>
    <div className="plans-container">
      {/* One Life-Time Plan - Start-Up */}
      <div className="plan-card">
        <h2 className="plan-title">One Life-Time Plan</h2>
        <p className="plan-subtitle">START-UP</p>
        <ul className="plan-features">
          <li><span>✔</span> Track your work anywhere with our iOS and Android apps</li>
          <li><span>✔</span> AI assistant to track your idea's progress</li>
          <li><span>✔</span> Access essential data for starting or advancing your idea</li>
          <li><span>✔</span> Guiding your project through the proper stages of development</li>
          <li><span>✔</span> Advanced solutions for your idea</li>
          <li><span>✔</span> Advice and tips from similarly successful projects</li>
          <li><span>✔</span> Exclusive business community to share your ideas and thoughts with other successful individuals</li>
          <li><span>✔</span> Receive periodic market trend reports and analytics</li>
          <li><span>✔</span> 1 GB secure cloud storage for your business documents and resources</li>
          <li><span>✔</span> Sell and buy ideas</li>
          <li><span>✔</span> Unlimited AI idea tests</li>
        </ul>
        <button className="subscribe-button">Subscribe Now</button>
      </div>

      {/* Enterprise Launch Plan */}
      <div className="plan-card">
        <h2 className="plan-title">Enterprise Launch</h2>
        <ul className="plan-features">
          <li><span>✔</span> All lifetime startup plan plus+</li>
          <li><span>✔</span> Virtual meetings with global experts for insightful consultations</li>
          <li><span>✔</span> Dedicated full-team support for a swift idea launch or development</li>
          <li><span>✔</span> Professional enterprise web presence</li>
          <li><span>✔</span> Professional enterprise App</li>
          <li><span>✔</span> Develop a specially designed and programmed CRM for your idea</li>
          <li><span>✔</span> Comprehensive SEO services customized for your business</li>
          <li><span>✔</span> Comprehensive SMO services customized for your business</li>
          <li><span>✔</span> Corporate brand establishment for your enterprise</li>
          <li><span>✔</span> Personalized Assistance: Dedicated business advisor</li>
          <li><span>✔</span> 5 GB secure cloud storage for your business documents and resources</li>
          <li><span>✔</span> Personalized TOTAL FREE platform to manage your company</li>
        </ul>
        <button className="subscribe-button">Subscribe Now</button>
      </div>
    </div>
  </div>
  );
};

export default Plans;
