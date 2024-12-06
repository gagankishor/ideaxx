import { motion } from "framer-motion";

const BlockchainTechnology = () => {
  return (
    <div className="bg-gray-900 mt-20 text-gray-100 py-12 px-6 sm:px-16">
      {/* Headline */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#29DAB9] to-[#9348FB]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Blockchain Technology
      </motion.h1>

      {/* Main Subheadline */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#29DAB9]">
          Harness the Speed of Solana
        </h2>
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
      </motion.section>

      {/* Reduced Operational Costs */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-[#29DAB9]">
          Reduced Operational Costs
        </h2>
        <p className="text-lg text-left text-gray-300 leading-7">
          By utilizing the Solana network&rsquo;s low transaction costs, ideaX
          significantly reduces the expenses associated with traditional
          financial transactions. This efficiency not only speeds up business
          operations but also saves costs, allowing your business to reinvest
          these savings into growth and innovation.
        </p>
      </motion.section>

      {/* Security Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-[#29DAB9]">
          Security Features
        </h2>
        
        <p className="text-lg text-left text-gray-300 leading-7">
          
          Enhanced Data Protection 
        Ideax employs state-of-the-art encryption methods to protect sensitive
          data transmitted across the network. This ensures that your business
          information remains confidential and secure from unauthorized access.
        </p>
      </motion.section>
    </div>
  );
};

export default BlockchainTechnology;
