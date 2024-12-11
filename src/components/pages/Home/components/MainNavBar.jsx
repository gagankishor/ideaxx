"use client";
import Link from "next/link"; // Correct import for Link
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext"; // Ensure this context is set up correctly
import { FaArrowAltCircleRight } from "react-icons/fa";

export const MainNavBar = () => {
  const [toggle, setToggle] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  // const router = useRouter();
  // const pathname = router.pathname;

  const showMenu = () => {
    setToggle(!toggle); // Simplified toggle logic
  };
  const pathname = usePathname();
  return (
    <>
      <nav className="border-b-[1px] border-gray-100">
        <div className="container border-b-[1px] border-gray-100">
          <div className="logo-side">
            <Link href="/">
              {" "}
              {/* Use href instead of to */}
              <img src="/logo.png" sizes="10" className="" alt="Ideax Logo" />
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
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="/plan-details">Subscription Plans</Link>
              </li>
              <li>
                <Link href="#services">Connect Your Wallet</Link>
              </li>
            </ul>
            <ul className="main-menu">
              {isAuthenticated ? (
                <li className="nav-login-btn" onClick={logout}>
                  <span
                    className="font-bold pl-3 lg:mr-3"
                    style={{
                      cursor: "pointer",
                      marginRight: "20px",
                      color: "black",
                    }}
                  >
                    Sign Out
                  </span>
                </li>
              ) : (
                <li
                  style={{
                    cursor: "pointer",
                    marginRight: "20px",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  <Link href="/login" style={{ color: "black" }}>
                    Sign Up
                  </Link>
                </li>
              )}
              <div className="btns-container">
                <Link
                  className="btn2"
                  style={{ fontSize: "14px" }}
                  href="/learning-guide"
                >
                  Learning Guide
                </Link>
              </div>
              {/* <div className="btns-container">
                <Link className="btn2" style={{ fontSize: "14px" }} href="/learning-guide">Connect Your Wallet</Link>
              </div> */}
              {/* Conditionally render the button based on the current pathname */}
              {pathname !== "/mainWizard" && (
                <div className="btns-container">
                  <Link
                    className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{ fontSize: "14px" }}
                    href="/mainWizard"
                  >
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
