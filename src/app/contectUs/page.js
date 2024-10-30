"use client";

import { useState } from "react";

const ContactUs = () => {

  const helpSections = [
    {
      title: "AI-Powered Idea Checker",
      description: "Assess the feasibility of your business idea using our AI-driven algorithms that analyze market trends, competition, and profitability.",
      pointers: ["Market Analysis", "Competitive Landscape", "Profitability Insights"],
      icon: "/main-icon/Idea.png",
    },
    {
      title: "Business Identity",
      description: "Define a cohesive identity for your business with essential branding tools.",
      pointers: ["Brand Name", "Logo Design", "Typography", "Color Palette", "Tagline Creation"],
      icon: "/main-icon/Businessidentity.png",
    },
    {
      title: "Marketing Solutions",
      description: "Leverage targeted marketing strategies to expand your reach effectively.",
      pointers: ["Social Media Outreach", "Email Marketing", "SEO", "Marketing Events", "Campaign Management"],
      icon: "/main-icon/Marketing.png",
    },
    {
      title: "Legal Support",
      description: "Handle critical legal requirements with confidence, from registration to partnerships.",
      pointers: ["Business Registration", "Legal Compliance", "Trademarking", "Partnership Agreements"],
      icon: "/main-icon/Legal.png",
    },
    {
      title: "Team Building & Networking",
      description: "Access a network of experts and collaborators to strengthen your business team.",
      pointers: ["Recruitment Tools", "Team Collaboration", "Networking Opportunities"],
      icon: "/main-icon/team.png",
    },
    {
      title: "Business Tools",
      description: "Explore essential tools and templates to streamline business operations.",
      pointers: ["Operational Software", "Customizable Templates", "Platform Integration"],
      icon: "/main-icon/BusinessTools.png",
    },
    {
      title: "Financial Management",
      description: "Manage cash flow and optimize financial resources for growth.",
      pointers: ["Funding", "Expense Tracking", "Income Reports", "Financial Insights"],
      icon: "/main-icon/CashFlow.png",
    },
    {
      title: "Consulting & Expert Advice",
      description: "Book consultations with industry experts and leverage AI for insights.",
      pointers: ["Schedule Consultations", "AI-Powered Advice"],
      icon: "/main-icon/Consulting.png",
    },
    {
      title: "Entrepreneurial Resources",
      description: "Access tailored resources for entrepreneurs, including books, courses, and networking.",
      pointers: ["Inspiration & Ideas", "Recommended Reads", "Online Courses", "Community Interaction"],
      icon: "/main-icon/Entrepreneur.png",
    },
    {
      title: "Strategic Planning",
      description: "Develop strategies and connect with potential investors through our platform.",
      pointers: ["Business Strategy", "Investor Network"],
      icon: "/main-icon/Strategies.png",
    },
    {
      title: "Community & Partnerships",
      description: "Engage with a community of clients, suppliers, and logistics partners.",
      pointers: ["Client Engagement", "Supplier Connections", "Logistics Partnerships"],
      icon: "/main-icon/Community.png",
    },
    {
      title: "Marketplace",
      description: "Explore opportunities to buy or sell businesses, products, or services.",
      pointers: ["Buy & Sell Listings", "Market Opportunities"],
      icon: "/main-icon/Buy-Sell.png",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSections, setFilteredSections] = useState(helpSections);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter sections based on the search query
    const filtered = helpSections.filter(
      (section) =>
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query) ||
        section.pointers.some((pointer) => pointer.toLowerCase().includes(query))
    );

    setFilteredSections(filtered);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl mt-10 mb-20">
      {/* Header Section */}
      
      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#4FADEA] mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800">How does the AI Startup Checker work?</h3>
            <p className="text-gray-700 mt-1 leading-relaxed">
              Simply submit your business idea, and our AI will provide instant insights on its market potential, competition, and profitability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">How can I connect with investors?</h3>
            <p className="text-gray-700 mt-1 leading-relaxed">
              Use our &quot;Investor Access&quot; feature under Strategic Planning to connect with potential investors looking for innovative projects.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">How do I get personalized consulting?</h3>
            <p className="text-gray-700 mt-1 leading-relaxed">
              Schedule an appointment under Consulting Services to connect with our AI advisors and industry experts.
            </p>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Search for help articles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4FADEA] text-gray-700"
        />
        <button className="absolute right-3 top-3 text-[#4FADEA] font-semibold hover:text-[#3c8dbb]">
          Search
        </button>
      </div>
      <div className="space-y-12">
        {filteredSections.length > 0 ? (
          filteredSections.map((section, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={section.icon} alt={`${section.title} icon`} className="w-10 h-10 mr-4" />
                <h2 className="text-2xl font-semibold text-[#4FADEA]">{section.title}</h2>
              </div>
              <p className="text-gray-700 mb-4">{section.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.pointers.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No results found for &quot;{searchQuery}&quot;</p>
        )}
      </div>
      
  
      {/* Dynamic Help Section */}
      
  
      {/* Contact Support Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-[#4FADEA] mb-4">Still need help?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our support team is here to assist you. Get in touch if you have additional questions.
        </p>
        <a
          href="mailto:support@ideax.com"
          className="inline-block px-6 py-3 bg-[#4FADEA] text-white font-semibold rounded-lg hover:bg-[#3c8dbb] transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
  
};

export default ContactUs;
