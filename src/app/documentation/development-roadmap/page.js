"use client";

import Breadcrumb from "@/components/pages/document/Breadcrumb";
import PaginationButtons from "@/components/pages/document/PaginationButtons";
import TableOfContents from "@/components/pages/document/TableOfContents";

const DevelopmentRoadmap = () => {
    const tableOfContents = [
        {
          title: "Getting Started",
          links: [
            { label: "Quick Start", href: "#" },
            { label: "Installation", href: "#" },
            { label: "Intro to Development", href: "#" },
            { label: "Wallets", href: "#" },
          ],
        },
        {
          title: "Core Concepts",
          links: [
            { label: "Solana Account Model", href: "#" },
            { label: "Transactions and Instructions", href: "#" },
            { label: "Fees on Solana", href: "#" },
            { label: "Programs on Solana", href: "#" },
          ],
        },
      ];
  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <div className="flex-1 p-8 max-w-3xl overflow-y-scroll">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Development Roadmap", href: "/development-roadmap" },
          ]}
        />
        <h1 className="text-6xl font-bold mb-6 text-[#C0C0C0]">
          Development Roadmap & Support
        </h1>

        <section className="mb-12">
          {/* <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Development Roadmap
          </h2> */}
          <p className=" text-left text-gray-300 text-lg mb-4">
          Our platform is fully operational, offering a seamless experience for our users. The website is live and equipped with robust functionality, including the &quot;test your idea&quot; option, allowing users to test and check how good their idea is and how they can further enhance it to make it market ready.
          </p>
          <p className="text-left text-gray-300 text-lg mb-4">
          In addition, our powerful CRM feature set is ready to support business operations by managing and analyzing customer interactions effectively. To further enhance user experience, we are in the process of launching dedicated apps for WordPress, Shopify, and Wix. These apps will enable our users to easily integrate the scores generated by our platform directly into their website, empowering them to:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>Integrate scores generated by our platform to engage their audience.</li>
            <li>Customize the integration to align with their brand’s look and feel.</li>
          </ul>
          <p className="text-left text-gray-300 text-lg">
          Once the apps are launched, we’ll provide detailed step-by-step guides and comprehensive documentation to ensure a smooth integration process for all users. Whether our user is an entrepreneur or a business professional, our platform and integrations are designed to build trust and get clients attention

          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Future Features
          </h2>
          <p className="text-left text-gray-300 text-lg  mb-4">
            Expected release quarters: <strong>Launching during first quarter 2025</strong>
          </p>
          <p className="mb-4 text-left text-gray-300">Upcoming Features:</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Pay global freelancers and professionals there fees seamlessly.</li>
            <li>Launching full Ai powered Business Solution platform for enterprise.</li>
            <li>MarketPlace for innovative startups.</li>
            <li>Launch of IDX on the BNB Smart Chain.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-4 text-left text-gray-300">
            Support and Resources
          </h2>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-left text-gray-300">
              Technical Support
            </h3>
            <p className="text-left text-gray-300 text-lg ">
              For technical assistance, please contact us at:
            </p>
            <ul className="list-none text-gray-300">
              <li>Email: <a href="mailto:support@ideax.in" className="text-blue-500">support@idxsolana.io</a></li>
              {/* <li>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></li> */}
              {/* <li><a href="/support" className="text-blue-500">Submit a support ticket</a></li> */}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-left text-gray-300">
              Community Resources
            </h3>
            <ul className="list-disc list-inside">
              {/* <li><a href="/#" className="text-blue-500">Forums</a></li>
              <li><a href="/#" className="text-blue-500">FAQs</a></li>
              <li><a href="/#" className="text-blue-500">User Communities</a></li> */}
              <li><a href="/https://dexscreener.com/solana/6cqsprdgtnweblhkpx7daw7fdam3g7wvjtsvatkwbwxo" target="_blank" className="text-blue-500">DEX Screener</a></li>
              <li><a href="/https://www.geckoterminal.com/solana/pools/6CQSpRdGtNWEbLhKpx7DAw7FDAm3g7wvjtsvaTKWBwxo?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults" target="_blank" className="text-blue-500">Gecko Terminal</a></li>
              <li><a href="/https://x.com/IDX_SOLANA " target="_blank" className="text-blue-500">X</a></li>
              <li><a href="/https://t.me/IDX_Solana" target="_blank" className="text-blue-500">Telegram</a></li>
              <li><a href="/https://discord.com/channels/1314881106381639680/1314881106381639683" target="_blank" className="text-blue-500">Discord</a></li>
              <li><a href="/https://substack.com/@idxsolana?utm_source=user-menu" target="_blank" className="text-blue-500">Substack</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2 text-left text-gray-300">
              Legal and Licensing Information
            </h3>
            <p className="text-left text-gray-300 text-lg ">
              <strong>License Information:</strong> IDX is offered under the XYZ license, allowing commercial use with restrictions on redistribution.
            </p>
            <p className="text-left text-gray-300 text-lg ">
              <strong>Intellectual Property:</strong> All code, visuals, and content are proprietary to IDX Corporation unless otherwise stated.
            </p>
          </div>
        </section>
        <PaginationButtons previous={{ name: "Integration Guidelines", href: "/integration-guidelines" }} next={null}/>
      </div>
      <TableOfContents data={tableOfContents}/>
    </div>
  );
};

export default DevelopmentRoadmap;