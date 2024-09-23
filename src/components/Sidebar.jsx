import { Link, useLocation } from "react-router-dom";
import { LogoutButton } from "../pages/auth/Logout";
import {
  FaAppStore,
  FaBlog,
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
  FaRegRegistered,
  FaSearch,
  FaStore,
  FaSuperpowers,
  FaTextHeight,
  FaTools,
  FaUser,
  FaVoicemail,
  FaWeibo,
} from "react-icons/fa";
import { FaSchoolCircleXmark, FaSignsPost } from "react-icons/fa6";
import { TbSeo, TbSocial } from "react-icons/tb";
import { SiAmazonsimpleemailservice, SiBillboard, SiGotomeeting, SiMarketo } from "react-icons/si";
import { MdAlternateEmail, MdOutlineBusiness } from "react-icons/md";
import { RiCalendarEventLine, RiPresentationLine } from "react-icons/ri";
import { TiBusinessCard } from "react-icons/ti";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GiArchiveRegister, GiClawHammer, GiFloatingPlatforms } from "react-icons/gi";
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GrCertificate, GrTemplate } from "react-icons/gr";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

export const SideBar = () => {
  const location = useLocation();
  const isIdeaRoute = location.pathname.includes("/idea");
  const isBusinessRoute = location.pathname.includes("/business-identity");
  const isMarketingRoute = location.pathname.includes("/marketing");
  const isMarketingSocialMideaRoute = location.pathname.includes("/marketing/social-media");
  const isMarketingBlogsRoute = location.pathname.includes("/marketing/blogs");
  const isMarketingMaterialRoute = location.pathname.includes("/marketing/marketing-material");
  const isMarketingEventsRoute = location.pathname.includes("/marketing/events");
  const isLegalRoute = location.pathname.includes("/legal");
  const isTeamRoute = location.pathname.includes("/team");
  const isBusinessToolsRoute = location.pathname.includes("/business-tools");
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
            <Link 
              to="/legal/contact"
              className={isLegalRoute ? "active" : undefined}
            >
              <FaConfluence />
              Legal
            </Link>
          </li>
          <li>
            <Link 
              to="/team/myteam"
              className={isTeamRoute ? "active" : undefined}
            >
              <FaPeopleCarry />
              Team
            </Link>
          </li>
          <li>
            <Link 
              to="/business-tools/website"
              className={isBusinessToolsRoute ? "active" : undefined}
            >
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
                {isMarketingSocialMideaRoute &&(

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
                )}

              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/marketing/email-marketing" ? "active" : undefined
                  }
                  to="/marketing/email-marketing"
                  // to="#"
                >
                  <SiAmazonsimpleemailservice  />
                  Email Marketing

                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/marketing/seo" ? "active" : undefined
                  }
                  // to="/business-identity/font"
                  to="/marketing/seo"

                >
                  <TbSeo  />
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname.includes("/marketing/blogs") ? "active" : undefined
                  }
                  // to="/business-identity/font"
                  to="/marketing/blogs/home"

                >
                  <FaBlog />
                  Blogs
                </Link>
                {isMarketingBlogsRoute &&(
                  <ul style={{marginLeft:'10px'}}>
                    <li>
                      <Link 
                        className={
                          location.pathname.includes("/marketing/blogs/create-new-blog") ? "active" : undefined
                        }
                        to="/marketing/blogs/create-new-blog"
                      >
                        <FaPlus/>
                        Create New Blogs
                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/blogs/my-blogs") ? "active" : undefined
                      }
                      to="/marketing/blogs/my-blogs"
                      >
                        <FaBlog/>
                        My Blogs

                      </Link>
                    </li>
                  </ul>
                  )}
              </li>
              <li>
                <Link
                  className={
                    location.pathname.includes( "/marketing/marketing-material") ? "active" : undefined
                  }
                  // to="/business-identity/color"
                  to="/marketing/marketing-material/home"

                >
                  <SiMarketo  />
                  Marketing Material

                </Link>
                {isMarketingMaterialRoute &&(
                  <ul style={{marginLeft:'22px'}}>
                    <li>
                      <Link 
                        className={
                          location.pathname.includes("/marketing/marketing-material/pen-and-notebook") ? "active" : undefined
                        }
                        to="/marketing/marketing-material/pen-and-notebook"
                      >
                        {/* <FaPlus/> */}
                        Pen & Notebook
                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/marketing-material/key-chain") ? "active" : undefined
                      }

                      to="/marketing/marketing-material/key-chain"
                      >
                        {/* <FaBlog/> */}
                        Key Chain

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/marketing-material/t-shirts") ? "active" : undefined
                      }
                      to="/marketing/marketing-material/t-shirts"
                      >
                        {/* <FaBlog/> */}
                        T-shirts

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/marketing-material/mugs") ? "active" : undefined
                      }
                      to="/marketing/marketing-material/mugs"
                      >
                        {/* <FaBlog/> */}
                        Mugs

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/marketing-material/tote-bags") ? "active" : undefined
                      }
                      to="/marketing/marketing-material/tote-bags"
                      >
                        {/* <FaBlog/> */}
                        Tote Bags

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/marketing-material/stickers") ? "active" : undefined
                      }
                      to="/marketing/marketing-material/stickers"
                      >
                        {/* <FaBlog/> */}
                        Stickers

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/marketing-material/gift-cards") ? "active" : undefined
                      }
                      to="/marketing/marketing-material/gift-cards"
                      >
                        {/* <FaBlog/> */}
                        Gift Cards
                      </Link>
                    </li>
                  </ul>
                  )}
              </li>
              
              <li>
                <Link
                  className={
                    location.pathname === "/marketing/business-card" ? "active" : undefined
                  }
                  to="/marketing/business-card"
                                  >
                  <TiBusinessCard />
                  Business Card
                                  </Link>
                
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/marketing/events/home" ? "active" : undefined
                  }
                  // to="/business-identity/slogan"
                  to="/marketing/events/home"
                >
                  <RiCalendarEventLine />
                  Marketing Events
                </Link>
                {isMarketingEventsRoute &&(
                  <ul style={{marginLeft:'22px'}}>
                    <li>
                      <Link 
                        className={
                          location.pathname.includes("/marketing/events/new-event") ? "active" : undefined
                        }
                        to="/marketing/events/new-event"
                      >
                        {/* <FaPlus/> */}
                        New Event

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/events/home/event-schedule") ? "active" : undefined
                      }

                      to="/marketing/events/event-schedule"
                      >
                        {/* <FaBlog/> */}
                        Event Schedule


                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        location.pathname.includes("/marketing/events/my-event") ? "active" : undefined
                      }

                      to="/marketing/events/my-event"
                      >
                        {/* <FaBlog/> */}
                        My Events
                      </Link>
                    </li>
                    
                  </ul>
                  )}
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/marketing/billboards/home" ? "active" : undefined
                  }
                  // to="/business-identity/slogan"
                  to="/marketing/billboards/home"

                >
                  <SiBillboard/>
                  Billboards

                </Link>
                
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/marketing/online-campaigns/home" ? "active" : undefined
                  }
                  // to="/business-identity/slogan"
                  to="/marketing/online-campaigns/home"

                >
                <RiPresentationLine />
                  Online Campaigns
                </Link>
              </li>
              
            </>
          )}
          {isLegalRoute && (
            <>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/contact" ? "active" : undefined
                  }
                  to="/legal/contact"
                >
<CiPhone />
Contact
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/email" ? "active" : undefined
                  }
                  to="/legal/email"
                >
                  <MdAlternateEmail />

                  Email
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/location" ? "active" : undefined
                  }
                  to="/legal/location"
                >
                  <IoLocationOutline />

                  Location
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/letterhead" ? "active" : undefined
                  }
                  to="/legal/letterhead"
                ><SlEnvolopeLetter />


                  Letterhead
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/rc" ? "active" : undefined
                  }
                  to="/legal/rc"
                >
                  <FaRegRegistered />
                  RC
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/brand-registration" ? "active" : undefined
                  }
                  to="/legal/brand-registration"
                >
                  <GiArchiveRegister />

                  Brand Registration
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/additional-certificates" ? "active" : undefined
                  }
                  to="/legal/additional-certificates"
                >
                  <GrCertificate />

                  Additional Certificates

                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/legal-consultation" ? "active" : undefined
                  }
                  to="/legal/legal-consultation"
                >
                  <FaSearch />
                  Legal Consultation

                </Link>
              </li>
            </>
          )}
          {isTeamRoute && (
            <>
              <li>
                <Link
                  className={
                    location.pathname === "/team/myteam" ? "active" : undefined
                  }
                  to="/team/myteam"
                >
                  <BsMicrosoftTeams />

                  My Team
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/team/meeting" ? "active" : undefined
                  }
                  to="/team/meeting"
                >
                  <SiGotomeeting />

                  Meeting
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/team/platforms" ? "active" : undefined
                  }
                  to="/team/platforms"
                >
                  <GiFloatingPlatforms />

                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/team-legal" ? "active" : undefined
                  }
                  to="/team-legal"
                >
                  <GiClawHammer />

                  Legal
                </Link>
              </li>
              
            </>
          )}
          {isBusinessToolsRoute && (
            <>
              <li>
                <Link
                  className={
                    location.pathname === "/business-tools/website" ? "active" : undefined
                  }
                  to="/business-tools/website"
                >
                  <FaWeibo />

                  Website
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-tools/App" ? "active" : undefined
                  }
                  to="/business-tools/App"
                >
                  <FaAppStore />

                  App
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-tools/CRM" ? "active" : undefined
                  }
                  to="/business-tools/CRM"
                >
                  <GiFloatingPlatforms />

                  CRM
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-tools/equipment" ? "active" : undefined
                  }
                  to="/business-tools/equipment"
                >
                  <GiClawHammer />

                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-tools/templates" ? "active" : undefined
                  }
                  to="/business-tools/templates"
                >
                  <GrTemplate />
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-tools/platforms" ? "active" : undefined
                  }
                  to="/business-tools/platforms"
                >
                  <GiFloatingPlatforms />


                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/business-tools/invoicing" ? "active" : undefined
                  }
                  to="/business-tools/invoicing"
                >
                  <LiaFileInvoiceDollarSolid />

                  Invoicing
                </Link>
              </li>
              
              
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
