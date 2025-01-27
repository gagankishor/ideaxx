"use client"
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="bg-black text-gray-100 py-16 px-6 sm:px-12 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#29DAB9] to-[#9348FB]">
        Empower Your Business with IDX on Solana
      </h1>
      <div className="flex items-baseline space-x-0 mb-8">
        <img src="/logo2.webp" width={200} height={200} alt="IDX Token" className="" />
      </div>
      <p className="text-lg sm:text-xl text-center text-gray-300 mb-8 max-w-lg">
        Streamline operations, enhance security, and drive efficiency with our AI-driven blockchain solution.
      </p>
      <div className="btns-container px-10">
        <Link
          className="btn flex items-center justify-center gap-2 px-4 py-4 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 pr-10"
          style={{ fontSize: "14px", paddingRight: "35px" }}
          href="/mainWizard"
        >
          Get Started <FaArrowAltCircleRight />
        </Link>
      </div>
      <span className="pt-3">Total Free!</span>
    </div>
  );
};
export default HeroSection;