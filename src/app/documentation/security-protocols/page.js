"use client";

import Breadcrumb from "@/components/pages/document/Breadcrumb";

const SecurityProtocols = () => {
  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <div className="flex-1 p-8 max-w-3xl overflow-y-scroll">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Security Protocols", href: "/security-protocols" },
          ]}
        />
        <h1 className="text-6xl font-bold mb-6 text-[#C0C0C0]">
          Security Protocols
        </h1>

        {/* Data Security Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Data Security
          </h2>
          <p className="mb-4 text-gray-300 text-left text-lg">
            All data is encrypted using <strong>AES-256 standards</strong>, ensuring the highest level of security for your business operations. Additionally, our website is protected with a <strong>Cloudflare SSL certificate</strong>, providing end-to-end encryption to safeguard your data during transit.
          </p>
          <p className="text-gray-300 text-left text-lg">
            This multi-layered security approach guarantees that sensitive
            information remains confidential and secure at all times.
          </p>
        </section>

        {/* Audit Reports Section */}
        <section className="mb-12 ">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Audit Reports
          </h2>
          <p className="mb-4 text-gray-300 text-left text-lg">
            Our internal audits confirm that our website adheres to established
            quality and security standards. Through a comprehensive review of
            our systems and processes, we ensure that all measures are in place
            to provide a secure, reliable, and efficient experience for our
            users.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SecurityProtocols;
