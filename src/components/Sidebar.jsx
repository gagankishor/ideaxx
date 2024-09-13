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
  FaDesktop,
  FaEye,
  FaFolder,
  FaFont,
  FaHandsHelping,
  FaHome,
  FaLayerGroup,
  FaLightbulb,
  FaNeuter,
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
  FaVoicemail,
} from "react-icons/fa";
import { FaSchoolCircleXmark, FaSignsPost } from "react-icons/fa6";
import { TbSeo, TbSocial } from "react-icons/tb";
import { SiAmazonsimpleemailservice, SiBillboard, SiMarketo } from "react-icons/si";
import { MdOutlineBusiness } from "react-icons/md";
import { RiCalendarEventLine, RiPresentationLine } from "react-icons/ri";

export const SideBar = () => {
  const location = useLocation();
  const isIdeaRoute = location.pathname.includes("/idea");
  const isBusinessRoute = location.pathname.includes("/business-identity");
  const isMarketingRoute = location.pathname.includes("/marketing");
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
            <Link 
              to="/marketing/social-media/home"
              className={isMarketingRoute ? "active" : undefined}
            >
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
          {isMarketingRoute && (
            <>
              <li>
                <Link
                  className={
                    location.pathname.includes("/marketing/social-media") ? "active" : undefined
                  }
                  to="/marketing/social-media/home"
                >
                  <TbSocial />
                  Social Media

                </Link>
                <ul style={{marginLeft:'10px'}}>
                  <li>
                    <Link 
                      className={
                        location.pathname.includes("/marketing/social-media/home") ? "active" : undefined
                      }
                      to="/marketing/social-media/home"
                    >
                    <FaHome/>
                     Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                    className={
                      location.pathname.includes("/marketing/social-media/my-design") ? "active" : undefined
                    }
                    to="/marketing/social-media/my-design"
                    >
                    <FaDesktop/>
                    My Designs

                    </Link>
                  </li>
                  <li>
                    <Link
                    className={
                      location.pathname.includes("/marketing/social-media/new-design") ? "active" : undefined
                    }
                    to="/marketing/social-media/new-design"
                    >
                    <FaSignsPost/>
                    New Post Design

                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/logo" ? "active" : undefined
                  }
                  // to="/business-identity/logo"
                  to="#"
                >
                  <SiAmazonsimpleemailservice  />
                  Email Marketing

                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/font" ? "active" : undefined
                  }
                  // to="/business-identity/font"
                  to="#"

                >
                  <TbSeo  />
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/color" ? "active" : undefined
                  }
                  // to="/business-identity/color"
                  to="#"

                >
                  <SiMarketo  />
                  Marketing Material

                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/slogan" ? "active" : undefined
                  }
                  // to="/business-identity/slogan"
                  to="#"

                >
<RiCalendarEventLine />
Marketing Events

                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/slogan" ? "active" : undefined
                  }
                  // to="/business-identity/slogan"
                  to="#"

                >
                  <SiBillboard/>
                  Billboards

                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-identity/slogan" ? "active" : undefined
                  }
                  // to="/business-identity/slogan"
                  to="#"

                >
<RiPresentationLine />
Online Campaigns
                </Link>
              </li>
              
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
