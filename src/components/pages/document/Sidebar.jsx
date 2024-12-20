"use client";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import PropTypes from "prop-types";
import Link from "next/link";
const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Overview and Introduction", href: "/" },
        { name: "User Guide", href: "/user-guide" },
        // { name: "Intro to Development", href: "/intro_to_development" },
        // { name: "Wallets", href: "/wallets" },
      ],
    },
    {
      title: "Technical Documentation",
      items: [
        { name: "System Architecture", href: "/system-architecture" },
        { name: "Technology Stack ", href: "/technology-stack" },
        { name: "API Documentation ", href: "/api-documentation" },
        // { name: "System Architecture Diagram", href: "/programs_on_solana" },
      ],
    },
    {
      title: "Advanced Topics",
      items: [
        { name: "Security Protocols", href: "/security-protocols" },
        { name: "Integration Guidelines", href: "/integration-guidelines" },
        { name: "Development Roadmap", href: "/development-roadmap" },
      ],
    },
  ];
const SidebarSection = ({ title, items, isOpen, toggleOpen }) => (
  <div className="mb-2">
    {isOpen ? (
      <>
        <div
          onClick={toggleOpen}
          className="flex justify-between ps-2 border-s-[3px] border-s-green-300 items-center cursor-pointer py-1"
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
            <Link key={index} className="hover:text-white cursor-pointer" href={`/documentation/${item?.href}`}>
              <li className="text-[#818384] hover:text-white cursor-pointer">
                {item?.name}
              </li>
            </Link>
          ))}
        </ul>
      </>
    ) : (
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
    )}
  </div>
);

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

const DocumentationSidebar = () => {
    const [openSections, setOpenSections] = useState(
        sections.reduce((acc, _, index) => {
          acc[index] = true; // Set each section to open (true)
          return acc;
        }, {})
      );

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    // <div className="w-72 bg-[#121212] text-white h-screen p-4 overflow-y-scroll sticky top-20 scrollbar-hover">
        <div className="md:min-w-80 bg-[#121212] text-white h-screen p-4 sticky top-20">
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
  );
};


export default DocumentationSidebar;
