"use client";
import Breadcrumb from "@/components/pages/document/Breadcrumb";
import TableOfContents from "@/components/pages/document/TableOfContents";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import PropTypes from "prop-types"; // Import PropTypes

const sections = [
  {
    title: "Getting Started",
    items: ["Quick Start", "Installation", "Intro to Development", "Wallets"],
  },
  {
    title: "Core Concepts",
    items: [
      "Solana Account Model",
      "Transactions and Instructions",
      "Fees on Solana",
      "Programs on Solana",
      "Program Derived Address",
      "Cross Program Invocation",
    ],
  },
  {
    title: "Advanced Topics",
    items: [
      "Security Best Practices",
      "Performance Optimization",
      "Cross-Chain Interactions",
      "Custom Program Development",
      "Solana Account Model",
      "Transactions and Instructions",
      "Fees on Solana",
      "Programs on Solana",
      "Program Derived Address",
      "Cross Program Invocation",
    ],
  },
];

const SidebarSection = ({ title, items, isOpen, toggleOpen }) => (
  <div className="mb-2">
    {isOpen ? (
      <>
        <div
          onClick={toggleOpen}
          className="flex justify-between ps-2 border-s-[3px] border-s-green-300 items-center  cursor-pointer py-1"
        >
          <h3
            className={`font-bold text-lg ${
              isOpen ? "text-white" : "text-[#818384]"
            }`}
          >
            {title}
          </h3>
          <span
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <SlArrowDown />
          </span>
        </div>
        <ul className="space-y-1 text-[#818384] ms-[1px] border-s-[1px] border-s-gray-300 pl-4 font-semibold">
          {items.map((item, index) => (
            <li key={index} className="hover:text-white cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </>
    ) : (
      <>
        <div
          onClick={toggleOpen}
          className="flex justify-between items-center cursor-pointer py-1"
        >
          <h3
            className={`font-bold text-lg ${
              isOpen ? "text-white" : "text-[#818384]"
            }`}
          >
            {title}
          </h3>
          <span
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <SlArrowDown />
          </span>
        </div>
      </>
    )}
  </div>
);
SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};
const Documentation = () => {
  // const [gettingStartedOpen, setGettingStartedOpen] = useState(true);
  // const [coreConceptsOpen, setCoreConceptsOpen] = useState(false);

  const content = [
    {
      heading: "Getting Started with IDX",
      text: "Learn how to set up and start using IDX, a blockchain designed for mass adoption and high performance. Whether you're a developer, business, or individual, this guide will help you get started.",
    },
    {
      heading: "Why Choose IDX?",
      text: "IDX offers unparalleled scalability, low transaction costs, and an open, decentralized architecture. It powers use cases like finance, NFTs, gaming, and more, providing a robust platform for innovation.",
    },
    {
      heading: "Use Cases of IDX",
      text: "From NFTs to decentralized finance, IDX is utilized for various applications, making it one of the most versatile blockchains available today.",
    },
    {
      heading: "IDX Development Tools",
      text: "Explore the suite of tools and SDKs provided by IDX to streamline your development process. Build dApps quickly and efficiently with comprehensive documentation and support.",
    },
    {
      heading: "IDX Ecosystem",
      text: "Join the growing IDX ecosystem, which includes partners, developers, and communities working together to build the future of blockchain technology.",
    },
  ];
  const [openSections, setOpenSections] = useState({});
  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className=" min-h-screen bg-[#121212] pb-24">
      <div className=" relative flex max-w-7xl mx-auto">
        <div className="w-72 bg-[#121212] text-white h-screen p-4 overflow-y-scroll sticky top-20 scrollbar-hover">
          {sections.map((section, index) => (
            <SidebarSection
              key={index}
              title={section.title}
              items={section.items}
              isOpen={!!openSections[index]}
              toggleOpen={() => toggleSection(index)}
            />
          ))}
        </div>
        <div className="flex-1 p-8 bg-[#121212] text-white max-w-3xl overflow-y-scroll">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Solana Documentation", href: "/docs" },
              { label: "Getting Started" },
            ]}
          />
          <h1 className="text-6xl font-bold mb-4 text-[#C0C0C0]">
            IDX Documentation
          </h1>
          <p className="mb-8 text-[#C0C0C0] text-left text-lg">
            Welcome to the IDX Documentation. IDX is a blockchain built for mass
            adoption, designed to handle a range of applications such as
            finance, gaming, payments, and NFTs. Here you find everything you
            need to start building on IDX.
          </p>
          {/* Dynamically generate content */}
          {content.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl text-left font-bold mb-4 text-[#C0C0C0]">
                {item.heading}
              </h3>
              <p className="mb-8 text-[#C0C0C0] text-left text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <TableOfContents />
      </div>
    </div>
  );
};
export default Documentation;
