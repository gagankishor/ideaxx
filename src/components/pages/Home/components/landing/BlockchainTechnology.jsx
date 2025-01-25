
const BlockchainTechnology = () => {
  return (
    <div className="bg-gray-900 mt-20 text-gray-100 py-12 px-6 sm:px-16">
      {/* Headline */}
      <h2
        className="text-4xl  font-bold text-left mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#29DAB9] to-[#9348FB] "
        
      >
        Our Blockchain Technology
      </h2>

      {/* Main Subheadline */}
      <section
        className="mb-12"
        
      >
        <h3 className="text-2xl text-left font-semibold mb-4 text-[#29DAB9]">
          Harness the Speed of Solana
        </h3>
        <p className="text-lg text-left text-gray-300 leading-7">
          Ideax leverages the Solana network, renowned for its exceptional
          processing capabilities, with the ability to handle over{" "}
          <span className="font-bold text-[#9348FB]">
            65,000 transactions per second
          </span>{" "}
          at a fraction of the cost found on most other blockchains. This
          incredible speed and efficiency make ideaX ideal for businesses that
          require rapid transaction processing without the burden of hefty
          fees.
        </p>
      </section>

      {/* Reduced Operational Costs */}
      <section
        className="mb-12"
        
      >
        <h3 className="text-xl text-left font-semibold mb-4 text-[#29DAB9]">
          Reduced Operational Costs
        </h3>
        <p className="text-lg text-left text-gray-300 leading-7">
          By utilizing the Solana network&rsquo;s low transaction costs, ideaX
          significantly reduces the expenses associated with traditional
          financial transactions. This efficiency not only speeds up business
          operations but also saves costs, allowing your business to reinvest
          these savings into growth and innovation.
        </p>
      </section>

      {/* Security Features */}
      <section
        
      >
        <h3 className="text-xl text-left font-semibold mb-4 text-[#29DAB9]">
          Security Features
        </h3>
        
        <p className="text-lg text-left text-gray-300 leading-7">
          
          Enhanced Data Protection 
        Ideax employs state-of-the-art encryption methods to protect sensitive
          data transmitted across the network. This ensures that your business
          information remains confidential and secure from unauthorized access.
        </p>
      </section>
    </div>
  );
};

export default BlockchainTechnology;
