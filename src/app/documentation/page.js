"use client";
import Breadcrumb from "@/components/pages/document/Breadcrumb";
import TableOfContents from "@/components/pages/document/TableOfContents";



const Documentation = () => {
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
          <p className="text-gray-300 text-lg text-left">
          An innovative business solutions platform, IDX, built on world-class artificial intelligence, is designed to streamline global company operations. Leveraging advanced blockchain technology on the Solana network, it eliminates bureaucratic complexities, facilitating seamless start-ups and supply chain integrations.
The platform also manages remote employment effectively, ensuring prompt and accurate payments through its sophisticated currency system. Over 10,000 transactions are processed daily, with an average time of less than 2 seconds across multiple network channels, thanks to Solana&lsquo;s high throughput capabilities.
Moreover, it enhances connectivity between business platforms and individual transactions, supporting specialized consulting services with robust infrastructure. This includes rapid system integrations and the capability to handle complex multi-chain interactions.
Additionally, it ensures rapid and secure financial transfers through third-party channels, crucial for safeguarding sources and facilitating swift global transactions. With its commitment to transaction security, the platform guarantees the integrity of every financial activity.
By leveraging cutting-edge AI and the latest in blockchain technology on the Solana network, it minimizes human intervention and sets a new standard in digital business operations.

          </p>
        </div>
        <TableOfContents />
        </>
  );
};

export default Documentation;
