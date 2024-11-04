"use client";
import Link from "next/link"; // Correct import for Link
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext"; // Ensure this context is set up correctly
import { FaArrowAltCircleRight } from "react-icons/fa";

export const MainNavBar = () => {
  const [toggle, setToggle] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const router = useRouter();
  const pathname = router.pathname;

  const showMenu = () => {
    setToggle(!toggle); // Simplified toggle logic
  };
  
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo-side">
            <Link href="/"> {/* Use href instead of to */}
              <img src="/logo.png" alt="Ideax Logo" />
            </Link>
          </div>

          <div className="burger">
            {toggle ? (
              <TfiClose onClick={showMenu} color="var(--main-color)" />
            ) : (
              <RxHamburgerMenu onClick={showMenu} color="var(--main-color)" />
            )}
          </div>
          <div className={`right-side ${toggle ? "show" : "hide"}`}>
          <ul className="logo-menu">
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#features">Features</Link></li>
          </ul>

            <ul className="main-menu">
              {isAuthenticated ? (
                <li className="nav-login-btn" onClick={logout}>
                  <span style={{ cursor: "pointer", marginRight: '20px' ,color:'black'}}>Sign Out</span>
                </li>
              ) : (
                <li style={{ cursor: "pointer", marginRight: '20px', fontWeight: '700',color:'black' }}>
                  <Link href="/login" style={{ color: "black" }}>Sign Up</Link>
                </li>
              )}
              
              <div className="btns-container">
                <Link className="btn2" style={{ fontSize: "14px" }} href="/contectUs">Help Guide</Link>
              </div>

              {/* Conditionally render the button based on the current pathname */}
              {pathname !== "/mainWizard" && (
                <div className="btns-container">
                  <Link className="btn" style={{ fontSize: "14px" }} href="/mainWizard">
                    Test Your Idea <FaArrowAltCircleRight />
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearspace"></div>
    </>
  );
};
