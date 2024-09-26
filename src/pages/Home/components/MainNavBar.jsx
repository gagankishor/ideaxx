import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxMoon } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { useContext, useState } from 'react';
import { ThemeToggle } from './Theme';
import { LogoutButton } from '../../auth/Logout';
import { isAuthenticated } from '../../../config/Auth';
import { AuthContext } from '../../../config/AuthContext';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export const MainNavBar = () => {
  // menu state
  const [toggle, setToggle] = useState(false);
  const isLoggedIn = !!localStorage.getItem('token');
  const { isAuthenticated, logout } = useContext(AuthContext);

  // toggle menu on mobiles
  const showMenu = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo-side">
            <Link to="/">
              <img src="/logo.png" alt="Ideax Logo" />
            </Link>
          </div>

          <div className="burger">{toggle ? <TfiClose onClick={showMenu} /> : <RxHamburgerMenu onClick={showMenu} />}</div>

          <div className={`right-side ${toggle ? 'show' : 'hide'}`}>
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
                <li style={{ marginLeft: '15px', cursor: 'pointer' }} onClick={logout}>
                  Logout
                </li>
              ) : (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}
              {/* <li> */}
              <div className="btns-container">
                <Link className="btn2" to="/mainWizard">
                Contact Us  
                </Link>
        </div>
              {/* </li>  */}
              
              <div className="btns-container">
                <Link className="btn" to="/mainWizard">
                  Test Your Idea <FaArrowAltCircleRight />
                </Link>
        </div>
              
             
              
              
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearspace"></div>
    </>
  );
};
