import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useContext, useEffect, useState } from "react";
import { ThemeToggle } from "./Theme";
// import { isAuthenticated } from "../config/Auth";
import { AuthContext } from "../config/AuthContext";
import { IdeaContext } from "../config/ideaDataContext";

export const Navbar = () => {
  // menu state
  const [toggle, setToggle] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { ideaData  } = useContext(IdeaContext);

  // toggle menu on mobiles
  const showMenu = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const [formData, setFormData] = useState({
    idea_name: "", // Default empty state
  });
  let userName = localStorage.getItem('userName')
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
      localStorage.setItem('idea_name',formData.idea_name) 
    }
  }, []); 

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
              {isAuthenticated ? (
                <li>
                  <h4>
                    {ideaData?.idea_name ? (
                      ideaData?.idea_name
                    ) : (
                      <Link to="/idea/new">Make Idea</Link>
                    )}
                  </h4>{" "}
                </li>
              ) : null}
            </ul>

            <ul className="main-menu">
              {isAuthenticated ? (
                <li>
                  <p>
                    Welcome <span>{userName?userName:null}</span>
                  </p>
                </li>
              ) : null}
              <li>
                <ThemeToggle />
              </li>
              {isAuthenticated ? (
                <li style={{ marginLeft: '15px', cursor: 'pointer' }} onClick={logout}>
                  Logout
                </li>
              ) : (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearspace"></div>
    </>
  );
};
