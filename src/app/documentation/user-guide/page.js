"use client";

import Breadcrumb from "@/components/pages/document/Breadcrumb";
import TableOfContents from "@/components/pages/document/TableOfContents";

const UserGuide = () => {
  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <div className="flex-1 p-8 max-w-3xl overflow-y-scroll">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "User Guide", href: "/user-guide" },
          ]}
        />
        <h1 className="text-6xl font-bold mb-6 text-[#C0C0C0]"> Getting Started</h1>

        {/* Getting Started */}
        <section className="mb-12">
          {/* <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Getting Started
          </h2> */}
          <p className="mb-4 text-gray-300 text-left text-lg">
            Begin by creating an account on our platform, setting up your wallet, and connecting your existing systems. Integrate IDEAX seamlessly with your existing systems, including:
          </p>
          <ul className="list-disc ml-6 mb-4 text-[#C0C0C0]">
            <li>Google Drive</li>
            <li>CRM</li>
            <li>Online Store</li>
            <li>Cyber Security</li>
            <li>And more...</li>
          </ul>
        </section>

        {/* Operating Instructions */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Operating Instructions
          </h2>
          <p className="mb-4 text-gray-300 text-left text-lg">
            Leverage our AI Startup/Business Idea Validator to assess the feasibility of your business idea based on:
          </p>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Market trends</li>
            <li>Competition</li>
            <li>Potential profitability</li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Troubleshooting
          </h2>
          <p className="mb-4 text-gray-300 text-left text-lg">
            Integrate IDEAX seamlessly with your existing systems, including:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-300">
            <li>Google Drive</li>
            <li>CRM</li>
            <li>Online Store</li>
            <li>Cyber Security</li>
          </ul>
          <p className="mb-4 text-gray-300 text-left text-lg">
            Minimize human intervention and set a new standard in digital business operations by streamlining global company operations.
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-300">
            <li>
              Leverage advanced blockchain technology on the Solana network to eliminate bureaucratic complexities.
            </li>
            <li>
              Facilitate seamless startups and supply chain integrations.
            </li>
            <li>
              Manage remote employment effectively, ensuring prompt and accurate payments through our sophisticated currency system.
            </li>
            <li>
              Secure financial transfers through third-party channels, safeguarding sources and enabling swift global transactions.
            </li>
          </ul>
          <p className="text-gray-300 text-left text-lg">Over 10,000 transactions are processed daily.</p>
        </section>
      </div>

      <TableOfContents />
    </div>
  );
};

export default UserGuide;
