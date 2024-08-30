import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./Theme";
import { isAuthenticated } from "../config/Auth";

export const Navbar = () => {
  // menu state
  const [toggle, setToggle] = useState(false);

  // toggle menu on mobiles
  const showMenu = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const [formData, setFormData] = useState({
    idea_name: "", // Default empty state
  });
  let userName = localStorage.getItem('userName')
  console.log(userName)
  useEffect(() => {
    // Attempt to load formData from localStorage
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData)); // Update state with stored data
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo-side">
            <Link to="/">
              <img src="/logo.png" alt="Ideax Logo" />
            </Link>
          </div>

          <div className="burger">
            {toggle ? (
              <TfiClose onClick={showMenu} />
            ) : (
              <RxHamburgerMenu onClick={showMenu} />
            )}
          </div>

          <div className={`right-side ${toggle ? "show" : "hide"}`}>
            <ul className="logo-menu">
              {isAuthenticated() ? (
                <li>
                  <h4>
                    {formData.idea_name ? (
                      formData.idea_name
                    ) : (
                      <Link to="/idea/new">Make Idea</Link>
                    )}
                  </h4>{" "}
                </li>
              ) : null}
            </ul>

            <ul className="main-menu">
              {isAuthenticated() ? (
                <li>
                  <p>
                    Welcome <span>{userName?userName:null}</span>
                  </p>
                </li>
              ) : null}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearspace"></div>
    </>
  );
};
