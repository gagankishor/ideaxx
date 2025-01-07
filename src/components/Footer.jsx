"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaChevronDown,
  FaChevronUp,
  FaDiscord,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import SubscribeModal from "./pages/Home/SubscribeModal";
import Image from "next/image";

export default function Footer() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const [showSubscribe, setShowSubscribe] = useState(false);
  const onSubscribeClose = () => {
    setShowSubscribe(false);
  };
  const handelShowSubscribe = () => {
    setShowSubscribe(true);
  };
  
  const aiTools = [
    {
      title: "Business Idea Checker",
      description: "Evaluate your business idea with AI assistance.",
    },
    {
      title: "Market Analysis",
      description: "Get insights into market trends and opportunities.",
    },
    {
      title: "Competitor Research",
      description: "Analyze competitors to strengthen your strategy.",
    },
    {
      title: "Profitability Assessment",
      description: "Assess the potential profitability of your idea.",
    },
    {
      title: "Growth Potential Insights",
      description: "Discover growth opportunities for your business.",
    },
    {
      title: "Investor Matchmaking",
      description: "Connect with potential investors for funding.",
    },
    {
      title: "Startup Roadmap",
      description: "Plan your startup journey with AI-guided steps.",
    },
  ];
  const solutions = [
    {
      title: "Entrepreneur Community",
      description: "Join a network of like-minded entrepreneurs.",
    },
    {
      title: "Collaborative Workspace",
      description: "Work together with tools for collaboration.",
    },
    {
      title: "Industry-Specific Insights",
      description: "Receive tailored insights for your industry.",
    },
    {
      title: "AI-Powered Reports",
      description: "Generate detailed reports using AI.",
    },
    {
      title: "Financial Planning Tools",
      description: "Plan your finances effectively.",
    },
    {
      title: "Business Strategy",
      description: "Develop comprehensive business strategies.",
    },
    {
      title: "Global Market Reach",
      description: "Expand your reach to global markets.",
    },
  ];
  const services = [
    {
      title: "Test And Save Idea",
      description: "Validate and securely save your business idea.",
    },
    {
      title: "Business Identity",
      description: "Establish a strong brand identity.",
    },
    {
      title: "Marketing",
      description: "Enhance your marketing efforts with AI.",
    },
    {
      title: "Legal Documentation",
      description: "Simplify your legal paperwork.",
    },
    { title: "Virtual Team", description: "Build and manage a remote team." },
    {
      title: "Business Tools",
      description: "Access tools to optimize your business operations.",
    },
    {
      title: "Cash Flow Management",
      description: "Monitor and manage your business cash flow.",
    },
  ];
  const services2 = [
    {
      title: "Consulting",
      description:
        "Receive expert advice tailored to your business challenges and goals.",
    },
    {
      title: "Entrepreneur",
      description:
        "Support and resources to help entrepreneurs build and grow their businesses.",
    },
    {
      title: "Strategies Planning",
      description:
        "Develop actionable strategies to achieve your business objectives.",
    },
    {
      title: "Community",
      description:
        "Join a vibrant community of professionals and entrepreneurs for networking.",
    },
    {
      title: "Buy-Sell Your Idea",
      description:
        "Connect with buyers or sellers to trade innovative business ideas.",
    },
  ];
  const renderDropdownList = (items, startIndex) => (
    <ul className="space-y-2 text-left">
      {items.map((item, index) => {
        const fullIndex = startIndex + index;
        const isActive = activeDropdown === fullIndex;
        return (
          <li key={index} className="transition-all duration-300 ease-in-out">
            <div
              className="flex items-center justify-between cursor-pointer hover:text-blue-500 py-2"
              onClick={() => toggleDropdown(fullIndex)}
            >
              <span>{item.title}</span>
              {isActive ? (
                <FaChevronUp size={10} className="text-gray-600 opacity-35" />
              ) : (
                <FaChevronDown size={10} className="text-gray-600 opacity-35" />
              )}
            </div>
            <div
              className={`
                overflow-hidden 
                transition-all 
                duration-500 
                ease-in-out 
                ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <p
                className="
                  mt-3 
                  text-xs 
                  text-gray-700 
                  text-left 
                  px-3 
                  py-2 
                  border-l-4 
                  border-blue-500 
                  bg-gray-100 
                  rounded-r-md 
                  shadow-md 
                  transition-all 
                  duration-300 
                  ease-in-out 
                  hover:shadow-lg 
                  hover:translate-x-1 
                  hover:border-blue-600 
                  relative 
                  overflow-hidden
                "
              >
                <span
                  className="
                    relative 
                    z-10 
                    block 
                    opacity-90
                  "
                >
                  {item.description}
                </span>
                <span
                  className="
                    absolute 
                    inset-0 
                    bg-gradient-to-r 
                    from-blue-100 
                    to-transparent 
                    opacity-20 
                    pointer-events-none
                  "
                />
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
  return (
    <footer className="bg-white border-t-2  pb-5  mb-52 py-12">
      <div
        className={`fixed bottom-0 w-full z-50 bg-white rounded-t-lg shadow-lg border-t border-gray-300 transition-transform duration-300 translate-y-0`}
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center py-0 px-6 animate-slide-up space-y-4 md:space-y-0">
          <div className=" flex flex-row justify-center items-center gap-2">
            <h4 className="text-gray-700 hidden md:block text-base md:text-lg font-light text-center md:text-left">
              Business solutions platform powered by Solana network{" "}
            </h4>
            <Link href="https://solana.com/" className="hidden md:block">
              <img src="/landing/image.webp" width={25} alt="Solana logo" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-600 md:h-[400px]">
        <div>
          <p className="font-semibold mb-4 text-left">AI Tools</p>
          {renderDropdownList(aiTools, 0)}
        </div>
        <div>
          <p className="font-semibold mb-4 text-left">Solutions</p>
          {renderDropdownList(solutions, aiTools.length)}
        </div>
        <div>
          <p className="font-semibold mb-4 text-left">Services</p>
          {renderDropdownList(services, aiTools.length + solutions.length)}
        </div>
        <div>
          <p className="font-semibold mb-4 text-left opacity-0">.</p>
          {renderDropdownList(
            services2,
            aiTools.length + solutions.length + services.length
          )}
        </div>
        <div className="md:col-span-2 ">
          <Image src="/logo.webp
          " alt="ideax logo" width={200} height={200} />
          <ul className="space-y-2 text-left p-2">
            <li className="">
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
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>
            <li>
              <button onClick={handelShowSubscribe} href="/career">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-black text-7xl text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        Index
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-gray-200 pt-4 py-[20px] mb-7">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://t.me/IDX_Solana"
              aria-label="Telegram"
              className="hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={30} />
            </a>
            {/* <a
              href="https://www.youtube.com/channel/UCrdNUxGAjUbpd7JmyIjer8Q"
              aria-label="YouTube"
              target="_blank"
              className="hover:text-red-600"
            >
              <FaYoutube  size={30}/>
            </a> */}
            <a
              href="https://www.instagram.com/idx_solana/?utm_source=ig_web_button_share_sheet"
              aria-label="Instagram"
              target="_blank"
              className="hover:text-pink-600"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://x.com/IDX_SOLANA"
              aria-label="Twitter"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://discord.com/idx_solana"
              aria-label="Discord"
              target="_blank"
              className="hover:text-[#5865F2]"
            >
              <FaDiscord size={30} />
            </a>
            <a
              href="https://substack.com/@idxsolana"
              aria-label="substack"
              target="_blank"
              className="hover:text-[#FF6719] "
            >
              <SiSubstack size={30} /> 
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Solana"
              aria-label="wikipedia"
              target="_blank"
              className="hover:text-[#FF6719] hidden"
            >
              <SiSubstack size={30} />
            </a>
          </div>
          <div className="flex space-x-4 ">
            <Link href="/termsOfService">Terms of Use</Link>
            <Link href="/privacyPolicy">Privacy Policy</Link>
            <span>&copy; 2024-2025 Ideax, Inc</span>
          </div>
        </div>
      </div>
      <div className=" h-1"></div>
      <SubscribeModal isOpen={showSubscribe} onRequestClose={onSubscribeClose}/>
    </footer>
  );
}
