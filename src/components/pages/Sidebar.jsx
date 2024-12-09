"use client"; // This makes the component work in Next.js App Router
import { usePathname } from "next/navigation";
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
  FaWeibo,
} from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import { TbSeo, TbSocial } from "react-icons/tb";
import {
  SiAmazonsimpleemailservice,
  SiBillboard,
  SiGotomeeting,
  SiMarketo,
} from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { RiCalendarEventLine, RiPresentationLine } from "react-icons/ri";
import { TiBusinessCard } from "react-icons/ti";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GiArchiveRegister, GiClawHammer, GiFloatingPlatforms } from "react-icons/gi";
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GrCertificate, GrTemplate } from "react-icons/gr";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LogoutButton } from "./auth/Logout";
import Link from "next/link";

export default function SideBar () {
  const pathname = usePathname(); // Replaces useLocation from react-router-dom

  // Determine which section is active based on the pathname
  const isIdeaRoute = pathname.includes("/idea");
  const isBusinessRoute = pathname.includes("/business-identity");
  const isMarketingRoute = pathname.includes("/marketing");
  const isMarketingSocialMideaRoute = pathname.includes("/marketing/social-media");
  const isMarketingBlogsRoute = pathname.includes("/marketing/blogs");
  const isMarketingMaterialRoute = pathname.includes("/marketing/marketing-material");
  const isMarketingEventsRoute = pathname.includes("/marketing/events");
  const isLegalRoute = pathname.includes("/legal");
  const isTeamRoute = pathname.includes("/team");
  const isBusinessToolsRoute = pathname.includes("/business-tools");
  return ( 
    <div className="sidebar">
      <div className="part-one">
        <ul>
          <li>
            <Link
              href="/"
              // className={location.pathname === "/" ? "active" : undefined}
            >
              <FaEye />
              Overview
            </Link>
          </li>
          <li>
            <Link href="/idea/new" className={isIdeaRoute ? "active" : undefined}>
              <FaLightbulb />
              Idea
            </Link> 
          </li>
          <li>
            <Link
              href="/business-identity/brand"
              className={isBusinessRoute ? "active" : undefined}
            >
              <FaBusinessTime />
              Business identity
            </Link>
          </li>
          <li>
            <Link 
              href="/marketing/social-media/home"
              className={isMarketingRoute ? "active" : undefined}
            >
              <FaCompass />
              Marketing
            </Link>
          </li>
          <li>
            <Link 
              href="/legal/contact"
              className={isLegalRoute ? "active" : undefined}
            >
              <FaConfluence />
              Legal
            </Link>
          </li>
          <li>
            <Link 
              href="/team/myteam"
              className={isTeamRoute ? "active" : undefined}
            >
              <FaPeopleCarry />
              Team
            </Link>
          </li>
          <li>
            <Link 
              href="/business-tools/website"
              className={isBusinessToolsRoute ? "active" : undefined}
            >
              <FaTools /> Business Tools
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaCoins /> Cash Flow
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaHandsHelping /> Consulting
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaBoxOpen /> Entrepreneur
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaSuperpowers /> Strategies
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaUser /> Community
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaCartPlus /> Buy-Sell
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaFolder /> My Files
            </Link>
          </li>
          <li>
            <Link href="#">
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
                href="/"
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
                  href="/idea/new"
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
                  href="/idea/my"
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
                  href="/idea/find"
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
                  href="/business-identity/brand"
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
                  href="/business-identity/logo"
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
                  href="/business-identity/font"
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
                  href="/business-identity/color"
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
                  href="/business-identity/slogan"
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
                  href="/marketing/social-media/home"
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
                      href="/marketing/social-media/home"
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
                    href="/marketing/social-media/my-design"
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
                    href="/marketing/social-media/new-design"
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
                  href="/marketing/email-marketing"
                  // href="#"
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
                  // href="/business-identity/font"
                  href="/marketing/seo"

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
                  // href="/business-identity/font"
                  href="/marketing/blogs/home"

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
                        href="/marketing/blogs/create-new-blog"
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
                      href="/marketing/blogs/my-blogs"
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
                  // href="/business-identity/color"
                  href="/marketing/marketing-material/home"

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
                        href="/marketing/marketing-material/pen-and-notebook"
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

                      href="/marketing/marketing-material/key-chain"
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
                      href="/marketing/marketing-material/t-shirts"
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
                      href="/marketing/marketing-material/mugs"
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
                      href="/marketing/marketing-material/tote-bags"
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
                      href="/marketing/marketing-material/stickers"
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
                      href="/marketing/marketing-material/gift-cards"
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
                  href="/marketing/business-card"
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
                  // href="/business-identity/slogan"
                  href="/marketing/events/home"
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
                        href="/marketing/events/new-event"
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

                      href="/marketing/events/event-schedule"
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

                      href="/marketing/events/my-event"
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
                  // href="/business-identity/slogan"
                  href="/marketing/billboards/home"

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
                  // href="/business-identity/slogan"
                  href="/marketing/online-campaigns/home"

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
                  href="/legal/contact"
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
                  href="/legal/email"
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
                  href="/legal/location"
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
                  href="/legal/letterhead"
                ><SlEnvolopeLetter />


                  Letterhead
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/legal/rc" ? "active" : undefined
                  }
                  href="/legal/rc"
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
                  href="/legal/brand-registration"
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
                  href="/legal/additional-certificates"
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
                  href="/legal/legal-consultation"
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
                  href="/team/myteam"
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
                  href="/team/meeting"
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
                  href="/team/platforms"
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
                  href="/team-legal"
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
                  href="/business-tools/website"
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
                  href="/business-tools/App"
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
                  href="/business-tools/CRM"
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
                  href="/business-tools/equipment"
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
                  href="/business-tools/templates"
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
                  href="/business-tools/platforms"
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
                  href="/business-tools/invoicing"
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
  )
}
