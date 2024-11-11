"use client";

// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white h-16 flex items-center justify-center">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-xs space-y-2 md:space-y-0 md:space-x-6 px-4">
        
//         {/* Footer Text */}
        

//         {/* Footer Links */}
//         <div className="flex space-x-3">
//           <a href="/termsOfService" className="text-white hover:text-gray-400 transition duration-200">
//             Terms and Conditions
//           </a>
//           <a href="/privacyPolicy" className="text-white hover:text-gray-400 transition duration-200">
//             Privacy Policy
//           </a>
//         </div>
// <p className=" text-white font-light">All rights reserved &copy; 2024 - ideax</p>
//         {/* Social Media Links */}
//         <div className="flex space-x-3">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
//             <FaFacebookF size={12} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-blue-400">
//             <FaTwitter size={12} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
//             <FaInstagram size={12} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-blue-600">
//             <FaLinkedinIn size={12} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from 'next/link';
import { FaFacebook, FaFacebookF } from 'react-icons/fa';
import { FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-white  py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-600">
        {/* Product Column */}
        <div>
          <h4 className="font-semibold mb-4 text-left">Product</h4>
          <ul className="space-y-2 text-left">
            <li><Link href="#">Website Templates</Link></li>
            <li><Link href="#">Website Builder</Link></li>
            <li><Link href="#">Website Design</Link></li>
            <li><Link href="#">Ideax Features</Link></li>
            <li><Link href="#">App Market</Link></li>
            <li><Link href="#">Web Hosting</Link></li>
            <li><Link href="#">Domain Names</Link></li>
            <li><Link href="#">Website Accessibility</Link></li>
            <li><Link href="#">Mobile App Builder</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-left">Product</h4>
          <ul className="space-y-2 text-left">
            <li><Link href="#">Website Templates</Link></li>
            <li><Link href="#">Website Builder</Link></li>
            <li><Link href="#">Website Design</Link></li>
            <li><Link href="#">Ideax Features</Link></li>
            <li><Link href="#">App Market</Link></li>
            <li><Link href="#">Web Hosting</Link></li>
            <li><Link href="#">Domain Names</Link></li>
            <li><Link href="#">Website Accessibility</Link></li>
            <li><Link href="#">Mobile App Builder</Link></li>
          </ul>
        </div>

        {/* Solutions Column */}
        <div>
          <h4 className="font-semibold mb-4 text-left">Solutions</h4>
          <ul className="space-y-2 text-left">
            <li><Link href="#">Online Store</Link></li>
            <li><Link href="#">Online Booking</Link></li>
            <li><Link href="#">Restaurant Website</Link></li>
            <li><Link href="#">Blog Website</Link></li>
            <li><Link href="#">Portfolio Website</Link></li>
            <li><Link href="#">eCommerce Website</Link></li>
            <li><Link href="#">Ideax Studio</Link></li>
            <li><Link href="#">Enterprise Solutions</Link></li>
            <li><Link href="#">Student Website</Link></li>
          </ul>
        </div>

        {/* Learn Column */}
        <div>
          <h4 className="font-semibold mb-4 text-left">Learn</h4>
          <ul className="space-y-2 text-left">
            <li><Link href="#">Ideax Blog</Link></li>
            <li><Link href="#">Privacy and Security Hub</Link></li>
            <li><Link href="#">SEO Learning Hub</Link></li>
            <li><Link href="#">Ideax Encyclopedia</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="font-semibold mb-4 text-left">Support</h4>
          <ul className="space-y-2 text-left">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Hire a Professional</Link></li>
            <li><Link href="#">Report Abuse</Link></li>
            <li><Link href="#">System Status</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-left text-4xl">IdeaX</h4>
          <ul className="space-y-2 text-left">
            <li>The Ideax  offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-gray-200 pt-4">
       
          {/* Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-black">
              <FaTiktok />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-red-600">
              <FaPinterest />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
          </div>

          

          {/* Footer Links */}
          <div className="flex space-x-4">
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
            <span>&copy; 2006-2024 Idiax.in, Inc</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

