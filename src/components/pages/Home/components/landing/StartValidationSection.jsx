import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

const StartValidationSection = () => {
  return (
    <div className="bg-black text-center py-10 px-4 sm:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        <motion.span
          className="text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#29DAB9] to-[#9348FB]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Start validating{" "}
        </motion.span>
        your business idea with IDX
      </h2>
      <div className="btns-container mt-10">
        <Link
          href="/mainWizard"
          className="btn flex items-center mt-7 justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mx-auto"
          style={{ fontSize: "14px", margin: "auto" }}
        >
          Test Your Idea <FaArrowAltCircleRight />
        </Link>
      </div>
      <div className="pt-4 text-white">Total Free!</div>
    </div>
  );
};
export default StartValidationSection;