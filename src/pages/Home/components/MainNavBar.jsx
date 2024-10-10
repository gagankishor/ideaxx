import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxMoon } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useContext, useState } from "react";
import { ThemeToggle } from "./Theme";
import { LogoutButton } from "../../auth/Logout";
import { isAuthenticated } from "../../../config/Auth";
import { AuthContext } from "../../../config/AuthContext";
import { FaArrowAltCircleRight } from "react-icons/fa";
import EmailSignUpModal from "./EmailSignUpModal ";

export const MainNavBar = () => {
  // menu state
  const [toggle, setToggle] = useState(false);
  const isLoggedIn = !!localStorage.getItem("token");
  const { isAuthenticated, logout } = useContext(AuthContext);
  const location = useLocation();
  const [emailLoginModalOpen, setEmailLoginModalOpen] = useState(false);
  // toggle menu on mobiles
  const showMenu = () => {
    toggle ? setToggle(false) : setToggle(true);
    setEmailLoginModalOpen(toggle);
    console.log("first")
  };
  // Function to close the modal
  // const closeEmailLoginModal = () => {
  //   setEmailLoginModalOpen(false);
  // };
  return (
    <>
      <nav>
      <EmailSignUpModal
                    emailLoginModalOpen={emailLoginModalOpen}
                    setEmailLoginModalOpen={setEmailLoginModalOpen}
                  />
        <div className="container">
          <div className="logo-side">
            <Link to="/">
              <img src="/logo.png" alt="Ideax Logo" />
            </Link>
          </div>

          <div className="burger">
            {toggle ? (
              <TfiClose onClick={showMenu} color='var(--main-color)' />
            ) : (
              <RxHamburgerMenu onClick={showMenu} color='var(--main-color)'/>
            )}
          </div>

          <div className={`right-side ${toggle ? "show" : "hide"}`}>
            <ul className="logo-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>

            <ul className="main-menu">
              {isAuthenticated ? (
                <li
                  className="nav-login-btn"
                  style={{ marginLeft: "15px", cursor: "pointer",marginRight:'20px' }}
                  onClick={logout}
                >

                  <a href="#">Sing Out</a>
                  
                </li>
              ) : (
                <li style={{ marginLeft: "15px", cursor: "pointer",marginRight:'20px',fontWeight:'700' }} onClick={showMenu} >
                  
                  <span style={{color:"black"}}>

                  Sing Up
                  </span>
                
                  
                </li>
              )}
              {/* <li> */}
              <div className="btns-container">
                <Link
                  className="btn2"
                  style={{ fontSize: "14px" }}
                  to="#"
                >
                  Contact Us
                </Link>
              </div>
              {/* </li>  */}  

              {!location.pathname.includes("/mainWizard")?<div className="btns-container">
                <Link
                  className="btn"
                  style={{ fontSize: "14px" }}
                  to="/mainWizard"
                >
                  Test Your Idea <FaArrowAltCircleRight/>
                </Link>
              </div>:""}
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearspace"></div>
    </>
  );
};