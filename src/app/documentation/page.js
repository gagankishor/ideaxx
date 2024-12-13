const Documentation = () => {
  return (
    <div className=" min-h-screen bg-black">
      {/* Sidebar Navigation */}
      <div className=" flex max-w-7xl mx-auto">
        <div className="bg-black text-white p-6 space-y-4 max-w-2xl">
          <h2 className="text-lg font-bold">Getting Started</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#818384] hover:text-[#818384]">
                Quick Start
              </a>
            </li>
            <li>
              <a href="#" className="text-[#818384] hover:text-[#818384]">
                Installation
              </a>
            </li>
            {/* Add more sidebar links */}
          </ul>
          {/* Add more sidebar sections */}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 bg-black text-white max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 text-white">
            IDX Documentation
          </h1>
          <p className="mb-8 text-white text-left">
            IDX is a blockchain built for mass adoption. It a high-performance
            network that is utilized for a range of use cases, including
            finance, NFTs, payments, and gaming. IDX operates as a single global
            state machine and is open, interoperable and decentralized.
          </p>

          {/* Add main content sections */}
        </div>

        {/* Table of Contents */}
        <div className="bg-black text-white p-6 sticky top-0 right-0 space-y-4">
          <h2 className="text-lg font-bold">Table of Contents</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 text-[#818384]">
                Getting started
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#818384]">
                Start learning
              </a>
            </li>
            {/* Add more table of contents links */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Documentation;
