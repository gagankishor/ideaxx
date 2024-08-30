import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxMoon } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { useState } from 'react';
import { ThemeToggle } from './Theme';
import { LogoutButton } from '../../auth/Logout';

export const MainNavBar = () => {
  // menu state
  const [toggle, setToggle] = useState(false);
  const isLoggedIn = !!localStorage.getItem('token');

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
            {!isLoggedIn ? (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              ) : null}
              <li>
                <Link to="/mainWizard" className="btn">
                  Test Idea
                </Link>
              </li> 
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
