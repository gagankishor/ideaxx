"use client";
import Breadcrumb from "@/components/pages/document/Breadcrumb";
import PaginationButtons from "@/components/pages/document/PaginationButtons";
import TableOfContents from "@/components/pages/document/TableOfContents";
const Documentation = () => {
  const tableOfContents = [
    {
      title: "Overview and Introduction",
      links: [
        { label: "Overview", href: "#" },
        // { label: "Installation", href: "#" },
        // { label: "Intro to Development", href: "#" },
        // { label: "Wallets", href: "#" },
      ],
    },
    // {
    //   title: "Core Concepts",
    //   links: [
    //     { label: "Solana Account Model", href: "#" },
    //     { label: "Transactions and Instructions", href: "#" },
    //     { label: "Fees on Solana", href: "#" },
    //     { label: "Programs on Solana", href: "#" },
    //   ],
    // },
  ];
  return (
    <>
      <div className="flex-1 p-8 bg-[#121212] text-white max-w-3xl overflow-y-scroll">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Solana Documentation", href: "/docs" },
            { label: "Getting Started" },
          ]}
        />
        <h1 className="text-6xl font-bold mb-4 text-[#C0C0C0]">
          Overview and Introduction
        </h1>
        
        <h2 className="text-4xl font-bold mb-4 text-[#C0C0C0] text-left" >
          IDEAX Platform: An Analytical Examination of Business Transformation
        </h2>
        <p className="text-gray-300 text-lg text-left">
          Conceived and launched in December 2024 by a team based in India, the
          IDEAX Platform integrates artificial intelligence and blockchain
          technology to address systemic inefficiencies in modern business
          operations. Designed to simplify processes, it leverages the Solana
          blockchain network to eliminate bureaucratic obstacles, enable
          seamless enterprise launches, and optimize supply chain integrations.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-[#C0C0C0] text-left">
          Optimization of Payment Mechanisms and Transaction Throughput
        </h3>
        <p className="text-gray-300 text-lg text-left">
          The IDEAX Platform facilitates efficient financial transactions
          through a sophisticated digital currency infrastructure. Supporting
          over 10,000 daily transactions with latencies averaging under two
          seconds, this mechanism utilizes Solana’s high throughput and
          reliability to ensure prompt and precise disbursements for remote
          professionals and contractors.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-[#C0C0C0] text-left">
          Advancing System Interoperability and Connectivity
        </h3>
        <p className="text-gray-300 text-lg text-left">
          IDEAX enhances connectivity by bridging disparate business platforms
          and enabling seamless multi-chain operations. Its robust
          infrastructure and specialized consulting services support rapid
          system integrations, fostering cohesive organizational workflows and
          strategic decision-making capabilities.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-[#C0C0C0] text-left">
          Strengthening Financial Integrity and Security
        </h3>
        <p className="text-gray-300 text-lg text-left">
          The platform prioritizes secure and rapid financial transfers through
          third-party channels, mitigating risks in cross-border transactions.
          By safeguarding resources, IDEAX reinforces trust in global business
          operations and ensures compliance with industry standards.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-[#C0C0C0] text-left">
          Predictive Analytics and Artificial Intelligence Integration
        </h3>
        <p className="text-gray-300 text-lg text-left">
          By integrating AI-driven predictive analytics, the IDEAX Platform
          empowers businesses to anticipate market dynamics and streamline
          operations. This data-driven approach minimizes manual intervention
          and fosters proactive operational management, enhancing organizational
          agility and resilience.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-[#C0C0C0] text-left">
          Enhancing Transparency in Supply Chain Management
        </h3>
        <p className="text-gray-300 text-lg text-left">
          IDEAX automates supply chain processes, promoting transparency and
          meticulous tracking. These innovations reduce errors and support
          adherence to industry standards, making the platform a strategic asset
          for businesses in competitive markets.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-[#C0C0C0] text-left">
          Modular Scalability and Accessibility
        </h3>
        <p className="text-gray-300 text-lg text-left">
          The platform’s modular architecture ensures scalability for
          enterprises of all sizes, from startups to multinational corporations.
          Its user-friendly interface democratizes access, enabling stakeholders
          with diverse technical expertise to leverage its advanced tools
          effectively.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-[#C0C0C0] text-left">
          Cultivating a Collaborative Ecosystem
        </h3>
        <p className="text-gray-300 text-lg text-left">
          IDEAX fosters collaboration by connecting users to expert
          consultations and peer-to-peer support. This interactive framework
          promotes the exchange of best practices and co-creation of innovative
          solutions, enriching the platform’s community-driven ecosystem.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-[#C0C0C0] text-left">
          Comprehensive Solutions for Contemporary Challenges
        </h3>
        <p className="text-gray-300 text-lg text-left">
          By combining artificial intelligence with blockchain technology, the
          IDEAX Platform addresses challenges such as remote workforce
          management, financial security, and operational scalability. It stands
          as a versatile tool for driving growth and innovation in today’s
          dynamic business environment.
        </p>
        <PaginationButtons
          previous={null}
          next={{ href: "/user-guide", name: "User Guide" }}
        />
      </div>
      <TableOfContents data={tableOfContents} />{" "}
    </>
  );
};
export default Documentation;
