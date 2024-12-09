// import { Link } from 'next/link';
// import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// export const Footer = () => {
//   return (
//     <>
//       <div className="top-footer">
//         <div className="container">
//           <div className="col">
//             <img src="/logo.png" alt="Ideax Footer Logo" />
//             <ul>
//               <li>
//                 <Link>Pricing</Link>
//               </li>
//               <li>
//                 <Link>Log in</Link>
//               </li>
//               <li>
//                 <Link>Sign up</Link>
//               </li>
//               <li>
//                 <Link>Report problem</Link>
//               </li>
//               <li>
//                 <Link>FAQ</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col">
//             <div>
//               <span>Features</span>
//               <ul>
//                 <li>
//                   <Link>AI Systems</Link>
//                 </li>
//                 <li>
//                   <Link>Business plans</Link>
//                 </li>
//                 <li>
//                   <Link>Business identity</Link>
//                 </li>
//                 <li>
//                   <Link>Marketing tools</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col">
//             <span>Contact</span>
//             <ul>
//               <li>
//                 <Link>support@ideax.in</Link>
//               </li>
//               <li>
//                 <Link>+91992033288</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col">
//             <span>Privacy</span>
//             <ul>
//               <li>
//                 <Link>Privacy Policy</Link>
//               </li>
//               <li>
//                 <Link>Terms of Use</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <footer>
//         <div className="container">
//           <div className="copyright">
//             <p>
//               All rights reserved 2024 &copy; <Link to="/">ideax</Link>
//             </p>
//           </div>
//           <div className="socials">
//             <ul>
//               <li>
//                 <a href="#">
//                   <FaFacebook />
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <FaWhatsapp />
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };


import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
        {/* Product Column */}
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><Link href="#">Website Templates</Link></li>
            <li><Link href="#">Website Builder</Link></li>
            <li><Link href="#">Website Design</Link></li>
            <li><Link href="#">Wix Features</Link></li>
            <li><Link href="#">App Market</Link></li>
            <li><Link href="#">Web Hosting</Link></li>
            <li><Link href="#">Domain Names</Link></li>
            <li><Link href="#">Website Accessibility</Link></li>
            <li><Link href="#">Mobile App Builder</Link></li>
          </ul>
        </div>

        {/* Solutions Column */}
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2">
            <li><Link href="#">Online Store</Link></li>
            <li><Link href="#">Online Booking</Link></li>
            <li><Link href="#">Restaurant Website</Link></li>
            <li><Link href="#">Blog Website</Link></li>
            <li><Link href="#">Portfolio Website</Link></li>
            <li><Link href="#">eCommerce Website</Link></li>
            <li><Link href="#">Wix Studio</Link></li>
            <li><Link href="#">Enterprise Solutions</Link></li>
            <li><Link href="#">Student Website</Link></li>
          </ul>
        </div>

        {/* Learn Column */}
        <div>
          <h4 className="font-semibold mb-4">Learn</h4>
          <ul className="space-y-2">
            <li><Link href="#">Wix Blog</Link></li>
            <li><Link href="#">Privacy and Security Hub</Link></li>
            <li><Link href="#">SEO Learning Hub</Link></li>
            <li><Link href="#">Wix Encyclopedia</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Hire a Professional</Link></li>
            <li><Link href="#">Report Abuse</Link></li>
            <li><Link href="#">System Status</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-gray-200 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-4">
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
            <span>&copy; 2006-2024 Wix.com, Inc</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
