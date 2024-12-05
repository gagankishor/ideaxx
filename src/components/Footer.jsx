"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowAltCircleRight, FaChevronDown, FaChevronUp, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa6";
export default function Footer() {
  // const [isVisible, setIsVisible] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > lastScrollY) {
  //       // Scrolling down
  //       setIsVisible(true);
  //     } else {
  //       // Scrolling up
  //       setIsVisible(false);
  //     }
  //     setLastScrollY(currentScrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const aiTools = [
    { title: "Business Idea Checker", description: "Evaluate your business idea with AI assistance." },
    { title: "Market Analysis", description: "Get insights into market trends and opportunities." },
    { title: "Competitor Research", description: "Analyze competitors to strengthen your strategy." },
    { title: "Profitability Assessment", description: "Assess the potential profitability of your idea." },
    { title: "Growth Potential Insights", description: "Discover growth opportunities for your business." },
    { title: "Investor Matchmaking", description: "Connect with potential investors for funding." },
    { title: "Startup Roadmap", description: "Plan your startup journey with AI-guided steps." },
  ];

  const solutions = [
    { title: "Entrepreneur Community", description: "Join a network of like-minded entrepreneurs." },
    { title: "Collaborative Workspace", description: "Work together with tools for collaboration." },
    { title: "Industry-Specific Insights", description: "Receive tailored insights for your industry." },
    { title: "AI-Powered Reports", description: "Generate detailed reports using AI." },
    { title: "Financial Planning Tools", description: "Plan your finances effectively." },
    { title: "Business Strategy", description: "Develop comprehensive business strategies." },
    { title: "Global Market Reach", description: "Expand your reach to global markets." },
  ];

  const services = [
    { title: "Check And Save Your Idea", description: "Validate and securely save your business idea." },
    { title: "Business Identity", description: "Establish a strong brand identity." },
    { title: "Marketing", description: "Enhance your marketing efforts with AI." },
    { title: "Legal Documentation", description: "Simplify your legal paperwork." },
    { title: "Virtual Team", description: "Build and manage a remote team." },
    { title: "Business Tools", description: "Access tools to optimize your business operations." },
    { title: "Cash Flow Management", description: "Monitor and manage your business cash flow." },
  ];
  const services2 = [
    {
      title: "Consulting",
      description: "Receive expert advice tailored to your business challenges and goals.",
    },
    {
      title: "Entrepreneur",
      description: "Support and resources to help entrepreneurs build and grow their businesses.",
    },
    {
      title: "Strategies Planning",
      description: "Develop actionable strategies to achieve your business objectives.",
    },
    {
      title: "Community",
      description: "Join a vibrant community of professionals and entrepreneurs for networking.",
    },
    {
      title: "Buy-Sell Your Idea",
      description: "Connect with buyers or sellers to trade innovative business ideas.",
    },
  ];
  // <ul className="space-y-2 text-left">
  //           <li>
  //             <Link href="#services">Consulting</Link>
  //           </li>
  //           <li>
  //             <Link href="#services">Entrepreneur</Link>
  //           </li>
  //           <li>
  //             <Link href="#services">Strategies Planing</Link>
  //           </li>
  //           <li>
  //             <Link href="#services">Community</Link>
  //           </li>
  //           <li>
  //             <Link href="#services">Buy-Sell Your Idea</Link>
  //           </li>
  //         </ul>
  const renderDropdownList = (items, startIndex) => (
    <ul className="space-y-2 text-left">
      {items.map((item, index) => {
        const fullIndex = startIndex + index;
        const isActive = activeDropdown === fullIndex;
        return (
          <li key={index}>
            <div
              className="flex items-center justify-between cursor-pointer hover:text-blue-500"
              onClick={() => toggleDropdown(fullIndex)}
            >
              <span>{item.title}</span>
              {isActive ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </div>
            {isActive && (
              <p className="mt-0 text-[12px] text-gray-500 text-left pl-2">{item.description}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
  return (
    <footer className="bg-white border-t-2 mt-2 pb-5 mb-52 py-4">
      <div
        className={`fixed bottom-0 w-full z-50 bg-white rounded-t-lg shadow-lg border-t border-gray-300 transition-transform duration-300 translate-y-0`}
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center py-0 px-6 animate-slide-up space-y-4 md:space-y-0">
          <div className=" flex flex-row justify-center items-center gap-3">

          <h4 className="text-gray-700 hidden md:block text-base md:text-lg font-light text-center md:text-left">
          Business solutions platform powered by Solana network.{" "}
          </h4>
          <Link href="https://solana.com/">
          <img src="/landing/image.png" width={35} alt="Solana logo" />
          </Link>
          </div>
          <div className="btns-container">
            <Link
              className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontSize: "14px" }}
              href="/mainWizard"
              target="_blank"
            >
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-600">
        {/* Product Column */}
        <div>
          <h4 className="font-semibold mb-4 text-left">AI Tools</h4>
          {renderDropdownList(aiTools, 0)}
          {/* <ul className="space-y-2 text-left">
            <li>
              <Link href="#features">Business Idea Checker</Link>
            </li>
            <li>
              <Link href="#features">Market Analysis</Link>
            </li>
            <li>
              <Link href="#features">Competitor Research</Link>
            </li>
            <li>
              <Link href="#features">Profitability Assessment</Link>
            </li>
            <li>
              <Link href="#features">Growth Potential Insights</Link>
            </li>
            <li>
              <Link href="#features">Investor Matchmaking</Link>
            </li>
            <li>
              <Link href="#features">Startup Roadmap</Link>
            </li>
          </ul> */}
        </div>
        {/* Services Column */}
        {/* Solutions Column */}
        <div>
          <h4 className="font-semibold mb-4 text-left">Solutions</h4>
          {renderDropdownList(solutions, aiTools.length)}
          {/* <ul className="space-y-2 text-left">
            <li>
              <Link href="#features">Entrepreneur Community</Link>
            </li>
            <li>
              <Link href="#features">Collaborative Workspace</Link>
            </li>
            <li>
              <Link href="#features">Industry-Specific Insights</Link>
            </li>
            <li>
              <Link href="#features">AI-Powered Reports</Link>
            </li>
            <li>
              <Link href="#features">Financial Planning Tools</Link>
            </li>
            <li>
              <Link href="#features">Business Strategy</Link>
            </li>
            <li>
              <Link href="#features">Global Market Reach</Link>
            </li>
          </ul> */}
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-left">Services</h4>
          {renderDropdownList(services, aiTools.length + solutions.length)}
          {/* <ul className="space-y-2 text-left">
            <li>
              <Link href="#services">Check And Save Your Idea</Link>
            </li>
            <li>
              <Link href="#services">Business identity</Link>
            </li>
            <li>
              <Link href="#services">Marketing</Link>
            </li>
            <li>
              <Link href="#services">Legal Documentation</Link>
            </li>
            <li>
              <Link href="#services">Virtual Team</Link>
            </li>
            <li>
              <Link href="#services">Business Tools</Link>
            </li>
            <li>
              <Link href="#services">Cash Flow Managment</Link>
            </li>
          </ul> */}
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-left">.</h4>
          {renderDropdownList(services2, aiTools.length + solutions.length+ services.length)}
          {/* <ul className="space-y-2 text-left">
            <li>
              <Link href="#services">Consulting</Link>
            </li>
            <li>
              <Link href="#services">Entrepreneur</Link>
            </li>
            <li>
              <Link href="#services">Strategies Planing</Link>
            </li>
            <li>
              <Link href="#services">Community</Link>
            </li>
            <li>
              <Link href="#services">Buy-Sell Your Idea</Link>
            </li>
          </ul> */}
        </div>
        {/* Resources Column */}
        {/* <div>
          <h4 className="font-semibold mb-4 text-left">Resources</h4>
          <ul className="space-y-2 text-left">
            <li><Link href="#">Ideax Blog</Link></li>
            <li><Link href="#">Privacy & Security Hub</Link></li>
            <li><Link href="#">Entrepreneur Guide</Link></li>
            <li><Link href="#">AI Trends in Business</Link></li>
          </ul>
        </div> */}
        {/* Support Column */}
        <div className="md:col-span-2 ">
          {/* <h4 className="font-semibold mb-4 text-left text-4xl">IdeaX</h4> */}
          <img src="/logo.png" alt="ideax logo" width={200} />
          <ul className="space-y-2 text-left p-2">
            <li>
              Ideax empowers entrepreneurs with AI-driven tools, market
              insights, and a supportive community, transforming ideas into
              successful ventures.
            </li>
            <li>
              <Link href="/plan-details">Subscription Plans</Link>
            </li>
            <li>
              <Link href="/learning-guide">Learning Guide</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-gray-200 pt-4 py-[20px] mb-7">
        {/* Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/profile.php?id=61568750836670"
              aria-label="Facebook"
              className="hover:text-blue-600"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UCrdNUxGAjUbpd7JmyIjer8Q"
              aria-label="YouTube"
              target="_blank"
              className="hover:text-red-600"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/ide.ax1/"
              aria-label="Instagram"
              target="_blank"
              className="hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/Ideax2025"
              aria-label="Twitter"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://pin.it/21RIzmMEz"
              aria-label="Pinterest"
              target="_blank"
              className="hover:text-red-600"
            >
              <FaPinterest />
            </a>
            <a
              href="https://www.linkedin.com/showcase/ideaxx/posts/?feedView=all"
              aria-label="LinkedIn"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex space-x-4 ">
            <Link href="/termsOfService">Terms of Use</Link>
            <Link href="/privacyPolicy">Privacy Policy</Link>
            <span>&copy; 20024-2025 Ideax, Inc</span>
          </div>
        </div>
      </div>
      <div className=" h-1"></div>
    </footer>
  );
}
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white h-16 flex items-center justify-center">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-xs space-y-2 md:space-y-0 md:space-x-6 px-4">
//         {/* Footer Text */}
//         {/* Footer Links */}
//         <div className="flex space-x-3">
//           <a href="/termsOfService" className="text-white hover:text-gray-400 transition duration-200">
//             Terms and Conditions
//           </a>
//           <a href="/privacyPolicy" className="text-white hover:text-gray-400 transition duration-200">
//             Privacy Policy
//           </a>
//         </div>
// <p className=" text-white font-light">All rights reserved &copy; 2024 - ideax</p>
//         {/* Social Media Links */}
//         <div className="flex space-x-3">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
//             <FaFacebookF size={12} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-blue-400">
//             <FaTwitter size={12} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
//             <FaInstagram size={12} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-blue-600">
//             <FaLinkedinIn size={12} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;