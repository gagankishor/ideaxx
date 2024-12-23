"use client";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import PropTypes from "prop-types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Overview and Introduction", href: "/" },
        { name: "User Guide", href: "/user-guide" },
      ],
    },
    {
      title: "Technical Documentation",
      items: [
        { name: "System Architecture", href: "/system-architecture" },
        { name: "Technology Stack ", href: "/technology-stack" },
        { name: "API Documentation ", href: "/api-documentation" },
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

const SidebarSection = ({ title, items, isOpen, toggleOpen, currentPath }) => (
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
          {items.map((item, index) => {
            const fullPath = `/documentation${item.href}`;
            const isActive = currentPath === fullPath;
            return (
              <Link 
                key={index} 
                className={`hover:text-white scpa cursor-pointer ${isActive ? 'text-white' : ''}`} 
                href={fullPath}
              >
                <li className={`${isActive ? 'text-white' : 'text-[#818384]'} hover:text-white cursor-pointer`}>
                  {item.name}
                </li>
              </Link>
            );
          })}
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
  currentPath: PropTypes.string.isRequired,
};

const DocumentationSidebar = () => {
    const currentPath = usePathname();
    const [openSections, setOpenSections] = useState(
        sections.reduce((acc, _, index) => {
          acc[index] = true;
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
        <div className="md:min-w-80 hidden  lg:block bg-[#121212] text-white h-screen p-4 sticky top-20">
          {sections.map((section, index) => (
            <SidebarSection
              key={index}
              title={section.title}
              items={section.items}
              isOpen={!!openSections[index]}
              toggleOpen={() => toggleSection(index)}
              currentPath={currentPath}
            />
          ))}
        </div>
    );
};

export default DocumentationSidebar;