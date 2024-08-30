import { Link, useLocation } from "react-router-dom";
import { LogoutButton } from "../pages/auth/Logout";
import {
  FaBook,
  FaBoxOpen,
  FaBusinessTime,
  FaCartPlus,
  FaCog,
  FaCoins,
  FaCompass,
  FaConfluence,
  FaEye,
  FaFolder,
  FaFont,
  FaHandsHelping,
  FaLayerGroup,
  FaLightbulb,
  FaPalette,
  FaPallet,
  FaPeopleCarry,
  FaPlus,
  FaSearch,
  FaStore,
  FaSuperpowers,
  FaTextHeight,
  FaTools,
  FaUser,
} from "react-icons/fa";

export const SideBar = () => {
  const location = useLocation();
  const isIdeaRoute = location.pathname.includes("/idea");
  const isBusinessRoute = location.pathname.includes("/business-identity");

  return (
    <div className="sidebar">
      <div className="part-one">
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : undefined}
            >
              <FaEye />
              Overview
            </Link>
          </li>
          <li>
            <Link to="/idea/new" className={isIdeaRoute ? "active" : undefined}>
              <FaLightbulb />
              Idea
            </Link>
          </li>
          <li>
            <Link
              to="/business-identity/brand"
              className={isBusinessRoute ? "active" : undefined}
            >
              <FaBusinessTime />
              Business identity
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaCompass />
              Marketing
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaConfluence />
              Legal
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaPeopleCarry />
              Team
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaTools /> Business Tools
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaCoins /> Cash Flow
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaHandsHelping /> Consulting
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaBoxOpen /> Entrepreneur
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaSuperpowers /> Strategies
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaUser /> Community
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaCartPlus /> Buy-Sell
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaFolder /> My Files
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaCog /> Settings
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
      <div className="part-two">
        <ul>
          {location.pathname === "/" && (
            <li>
              <Link
                className={location.pathname === "/" ? "active" : undefined}
                to="/"
              >
                <FaLayerGroup />
                Welcome
              </Link>
            </li>
          )}

          {isIdeaRoute && (
            <>
              <li>
                <Link
                  className={
                    location.pathname === "/idea/new" ? "active" : undefined
                  }
                  to="/idea/new"
                >
                  <FaPlus />
                  New Idea
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/idea/my" ? "active" : undefined
                  }
                  to="/idea/my"
                >
                  <FaStore />
                  My Ideas
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/idea/find" ? "active" : undefined
                  }
                  to="/idea/find"
                >
                  <FaSearch />
                  Find Idea
                </Link>
              </li>
            </>
          )}

          {isBusinessRoute && (
            <>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/new" ? "active" : undefined
                  }
                  to="/business-identity/brand"
                >
                  <FaBook />
                  Brand Name
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/logo" ? "active" : undefined
                  }
                  to="/business-identity/logo"
                >
                  <FaPallet />
                  Logo Design
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/font" ? "active" : undefined
                  }
                  to="/business-identity/font"
                >
                  <FaFont />
                  Font
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/color" ? "active" : undefined
                  }
                  to="/business-identity/color"
                >
                  <FaPalette />
                  Color
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/slogan" ? "active" : undefined
                  }
                  to="/business-identity/slogan"
                >
                  <FaTextHeight />
                  Slogan
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
