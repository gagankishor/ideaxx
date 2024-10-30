"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-16 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-xs space-y-2 md:space-y-0 md:space-x-6 px-4">
        
        {/* Footer Text */}
        

        {/* Footer Links */}
        <div className="flex space-x-3">
          <a href="/termsOfService" className="text-white hover:text-gray-400 transition duration-200">
            Terms and Conditions
          </a>
          <a href="/privacyPolicy" className="text-white hover:text-gray-400 transition duration-200">
            Privacy Policy
          </a>
        </div>
<p className=" text-white font-light">All rights reserved &copy; 2024 - ideax</p>
        {/* Social Media Links */}
        <div className="flex space-x-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebookF size={12} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-blue-400">
            <FaTwitter size={12} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaInstagram size={12} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-blue-600">
            <FaLinkedinIn size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
