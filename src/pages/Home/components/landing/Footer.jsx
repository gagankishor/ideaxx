import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <div className="top-footer">
        <div className="container">
          <div className="col">
            <img src="/logo.png" alt="Ideax Footer Logo" />
            <ul>
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Log in</Link>
              </li>
              <li>
                <Link>Sign up</Link>
              </li>
              <li>
                <Link>Report problem</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <div>
              <span>Features</span>
              <ul>
                <li>
                  <Link>AI Systems</Link>
                </li>
                <li>
                  <Link>Business plans</Link>
                </li>
                <li>
                  <Link>Business identity</Link>
                </li>
                <li>
                  <Link>Marketing tools</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <span>Contact</span>
            <ul>
              <li>
                <Link>support@ideax.in</Link>
              </li>
              <li>
                <Link>+91992033288</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <span>Privacy</span>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="copyright">
            <p>
              All rights reserved 2024 &copy; <Link to="/">ideax</Link>
            </p>
          </div>
          <div className="socials">
            <ul>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
