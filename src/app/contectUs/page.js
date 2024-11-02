"use client";

import { useState } from "react";

const ContactUs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // FAQ data
  const helpSections = [
    {
      title: "What is included in the Business Identity service?",
      description:
        "Our Business Identity service provides tools to create a cohesive brand for your business, including logo design, brand name suggestions, typography, color palette selection, and tagline creation.",
    },
    {
      title: "How can I start using the Marketing Solutions?",
      description:
        "To start, simply navigate to the Marketing Solutions section. You’ll find tools and strategies like social media outreach, SEO, and campaign management designed to help you reach a wider audience.",
    },
    {
      title: "Do you offer tools for financial management?",
      description:
        "Yes, our Financial Management section provides tools to track expenses, manage income, and generate insightful financial reports to help you optimize cash flow.",
    },
    {
      title: "Can I find partners or collaborators on this platform?",
      description:
        "Absolutely! Our Team Building & Networking section connects you with a network of experts and collaborators to build a strong business team.",
    },
    {
      title: "What kind of legal support is provided?",
      description:
        "The Legal Support section covers essential services such as business registration, legal compliance, trademarking, and drafting partnership agreements.",
    },
    {
      title: "How do I access the Entrepreneurial Resources?",
      description:
        "Head over to the Entrepreneurial Resources section for curated books, online courses, and community interactions tailored for entrepreneurs at all stages.",
    },
    {
      title: "Is there a marketplace where I can buy or sell business assets?",
      description:
        "Yes, our Marketplace feature allows you to explore opportunities to buy or sell businesses, products, and services in one convenient place.",
    },
    {
      title: "How can I stay connected with clients and suppliers?",
      description:
        "Our Community & Partnerships section facilitates client engagement and allows you to connect with suppliers and logistics partners, helping you build essential business relationships.",
    },
    {
      title: "What is the AI-Powered Idea Checker?",
      description:
        "Our AI-Powered Idea Checker assesses the feasibility of your business idea by analyzing market trends, competition, and profitability, giving you valuable insights before you launch.",
    },
    {
      title: "What tools are available under Business Tools?",
      description:
        "Our Business Tools include operational software, customizable templates, and platform integrations to streamline and optimize your daily business activities.",
    },
    {
      title: "How do I access Consulting & Expert Advice?",
      description:
        "Our Consulting & Expert Advice service offers personalized consultations with industry experts and AI-driven insights tailored to your business needs.",
    },
    {
      title: "How can I benefit from Strategic Planning?",
      description:
        "Strategic Planning helps you develop business strategies and connect with investors, making it easier to navigate growth opportunities and secure funding.",
    }
    // Add more FAQ entries here as needed
  ];
  

  const [filteredSections, setFilteredSections] = useState(helpSections); 

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter sections based on the search query
    const filtered = helpSections.filter(
      (section) =>
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query)
    );

    setFilteredSections(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl mt-10 mb-20">
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

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#4FADEA] mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {filteredSections.length > 0 ? (
            filteredSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium text-gray-800">{section.title}</h3>
                <p className="text-gray-700 mt-1 leading-relaxed">{section.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No results found for &quot;{searchQuery}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
