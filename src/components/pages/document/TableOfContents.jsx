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
  
  const TableOfContents = () => (
    <div className="bg-[#121212] text-white p-6 h-screen  sticky top-20 right-0 space-y-4 scrollbar-hover">
      <h2 className="text-lg font-bold">Table of Contents</h2>
      <ul className="space-y-4 text-lg">
        {tableOfContents.map((section, index) => (
          <li key={index}>
            <a href="#" className="hover:text-gray-400 text-[#818384]">
              {section.title}
            </a>
            {section.links && (
              <ul className="space-y-2 ps-4 text-base">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-gray-400 text-[#818384]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default TableOfContents;
  