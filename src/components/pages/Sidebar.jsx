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
  const pathname = usePathname();
  // console.log(pathname,"pathname");
  // console.log(location,"location");
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
  const isCashFlowRoute = pathname.includes("/cash-flow");
  const isConsultingRoute = pathname.includes("/consulting");
  const isEntrepreneurRoute = pathname.includes("/entrepreneur");
  const isStrategiesRoute = pathname.includes("/strategies");
  const isCommunityRoute = pathname.includes("/community");
  const isBuySellRoute = pathname.includes("/buy-sell");
  const isMyFilesRoute = pathname.includes("/my-files");
  const isSettingsRoute = pathname.includes("/settings");
  return ( 
    <div className="sidebar">    
      <div className="part-one">
        <ul>
          <li>
            <Link
              href="/dashboard"
              className={pathname === "/dashboard" ? "active" : undefined}
            >
              <FaEye />
              Overview
            </Link>
          </li>
          <li>
            <Link href="/dashboard/idea/new" className={isIdeaRoute ? "active" : undefined}>
              <FaLightbulb />
              Idea
            </Link> 
          </li>
          <li>
            <Link
              href="/dashboard/business-identity/brand"
              className={isBusinessRoute ? "active" : undefined}
            >
              <FaBusinessTime />
              Business identity
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/marketing/social-media/home"
              className={isMarketingRoute ? "active" : undefined}
            >
              <FaCompass />
              Marketing
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/legal/contact"
              className={isLegalRoute ? "active" : undefined}
            >
              <FaConfluence />
              Legal
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/team/myteam"
              className={isTeamRoute ? "active" : undefined}
            >
              <FaPeopleCarry />
              Team
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/business-tools/website"
              className={isBusinessToolsRoute ? "active" : undefined}
            >
              <FaTools /> Business Tools
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/cash-flow/funds"
              className={isCashFlowRoute ? "active" : undefined}
            >
              <FaCoins /> Cash Flow
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/consulting/new-request"
              className={isConsultingRoute ? "active" : undefined}
            >
              <FaHandsHelping /> Consulting
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/entrepreneur/my-ideas"
              className={isEntrepreneurRoute ? "active" : undefined}
            >
              <FaBoxOpen /> Entrepreneur
            </Link>
          </li>
          <li>
          <Link 
              href="/dashboard/strategies/market-strategies"
              className={isStrategiesRoute ? "active" : undefined}
            >
              <FaSuperpowers /> Strategies
            </Link>
          </li>
          <li>
          <Link 
              href="/dashboard/community/community"
              className={isCommunityRoute ? "active" : undefined}
            >
              <FaUser /> Community
            </Link>
          </li>
          <li>
          <Link 
              href="/dashboard/buy-sell/buy-sell"
              className={isBuySellRoute ? "active" : undefined}
            >
              <FaCartPlus /> Buy-Sell
            </Link>
          </li>
          <li>
          <Link 
              href="/dashboard/my-files/files"
              className={isMyFilesRoute ? "active" : undefined}
            >
              <FaFolder /> My Files
            </Link>
          </li>
          <li>
          <Link 
              href="/dashboard/settings/settings"
              className={isSettingsRoute  ? "active" : undefined}
            >
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
          {pathname === "/dashboard" && (
            <li>
              <Link
                className={pathname === "/dashboard" ? "active" : undefined}
                href="/dashboard"
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
                    pathname === "/dashboard/idea/new" ? "active" : undefined
                  }
                  href="/dashboard/idea/new"
                >
                  <FaPlus />
                  New Idea
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/idea/my" ? "active" : undefined
                  }
                  href="/dashboard/idea/my"
                >
                  <FaStore />
                  My Ideas
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/idea/find" ? "active" : undefined
                  }
                  href="/dashboard/idea/find"
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
                    pathname === "/dashboard/business-identity/brand" ? "active" : undefined
                  }
                  href="/dashboard/business-identity/brand"
                >
                  <FaBook />
                  Brand Name
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-identity/logo" ? "active" : undefined
                  }
                  href="/dashboard/business-identity/logo"
                >
                  <FaPallet />
                  Logo Design
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-identity/font" ? "active" : undefined
                  }
                  href="/dashboard/business-identity/font"
                >
                  <FaFont />
                  Font
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-identity/color" ? "active" : undefined
                  }
                  href="/dashboard/business-identity/color"
                >
                  <FaPalette />
                  Color
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-identity/slogan" ? "active" : undefined
                  }
                  href="/dashboard/business-identity/slogan"
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
                    pathname.includes("/dashboard/marketing/social-media") ? "active" : undefined
                  }
                  href="/dashboard/marketing/social-media/home"
                >
                  <TbSocial />
                  Social Media

                </Link>
                {isMarketingSocialMideaRoute &&(

                <ul style={{marginLeft:'10px'}}>
                  <li>
                    <Link 
                      className={
                        pathname.includes("/dashboard/marketing/social-media/home") ? "active" : undefined
                      }
                      href="/dashboard/marketing/social-media/home"
                    >
                    <FaHome/>
                     Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                    className={
                      pathname.includes("/dashboard/marketing/social-media/my-design") ? "active" : undefined
                    }
                    href="/dashboard/marketing/social-media/my-design"
                    >
                    <FaDesktop/>
                    My Designs

                    </Link>
                  </li>
                  <li>
                    <Link
                    className={
                      pathname.includes("/dashboard/marketing/social-media/new-design") ? "active" : undefined
                    }
                    href="/dashboard/marketing/social-media/new-design"
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
                    pathname === "/dashboard/marketing/email-marketing" ? "active" : undefined
                  }
                  href="/dashboard/marketing/email-marketing"
                  // href="#"
                >
                  <SiAmazonsimpleemailservice  />
                  Email Marketing

                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/marketing/seo" ? "active" : undefined
                  }
                  // href="/business-identity/font"
                  href="/dashboard/marketing/seo"

                >
                  <TbSeo  />
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname.includes("/dashboard/marketing/blogs") ? "active" : undefined
                  }
                  // href="/business-identity/font"
                  href="/dashboard/marketing/blogs/home"

                >
                  <FaBlog />
                  Blogs
                </Link>
                {isMarketingBlogsRoute &&(
                  <ul style={{marginLeft:'10px'}}>
                    <li>
                      <Link 
                        className={
                          pathname.includes("/dashboard/marketing/blogs/create-new-blog") ? "active" : undefined
                        }
                        href="/dashboard/marketing/blogs/create-new-blog"
                      >
                        <FaPlus/>
                        Create New Blogs
                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/blogs/my-blogs") ? "active" : undefined
                      }
                      href="/dashboard/marketing/blogs/my-blogs"
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
                    pathname.includes( "/dashboard/marketing/marketing-material") ? "active" : undefined
                  }
                  // href="/business-identity/color"
                  href="/dashboard/marketing/marketing-material/home"

                >
                  <SiMarketo  />
                  Marketing Material

                </Link>
                {isMarketingMaterialRoute &&(
                  <ul style={{marginLeft:'22px'}}>
                    <li>
                      <Link 
                        className={
                          pathname.includes("/dashboard/marketing/marketing-material/pen-and-notebook") ? "active" : undefined
                        }
                        href="/dashboard/marketing/marketing-material/pen-and-notebook"
                      >
                        {/* <FaPlus/> */}
                        Pen & Notebook
                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/marketing-material/key-chain") ? "active" : undefined
                      }

                      href="/dashboard/marketing/marketing-material/key-chain"
                      >
                        {/* <FaBlog/> */}
                        Key Chain

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/marketing-material/t-shirts") ? "active" : undefined
                      }
                      href="/dashboard/marketing/marketing-material/t-shirts"
                      >
                        {/* <FaBlog/> */}
                        T-shirts

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/marketing-material/mugs") ? "active" : undefined
                      }
                      href="/dashboard/marketing/marketing-material/mugs"
                      >
                        {/* <FaBlog/> */}
                        Mugs

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/marketing-material/tote-bags") ? "active" : undefined
                      }
                      href="/dashboard/marketing/marketing-material/tote-bags"
                      >
                        {/* <FaBlog/> */}
                        Tote Bags

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/marketing-material/stickers") ? "active" : undefined
                      }
                      href="/dashboard/marketing/marketing-material/stickers"
                      >
                        {/* <FaBlog/> */}
                        Stickers

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/marketing-material/gift-cards") ? "active" : undefined
                      }
                      href="/dashboard/marketing/marketing-material/gift-cards"
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
                    pathname === "/dashboard/marketing/business-card" ? "active" : undefined
                  }
                  href="/dashboard/marketing/business-card"
                                  >
                  <TiBusinessCard />
                  Business Card
                                  </Link>
                
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/marketing/events/home" ? "active" : undefined
                  }
                  // href="/business-identity/slogan"
                  href="/dashboard/marketing/events/home"
                >
                  <RiCalendarEventLine />
                  Marketing Events
                </Link>
                {isMarketingEventsRoute &&(
                  <ul style={{marginLeft:'22px'}}>
                    <li>
                      <Link 
                        className={
                          pathname.includes("/dashboard/marketing/events/new-event") ? "active" : undefined
                        }
                        href="/dashboard/marketing/events/new-event"
                      >
                        {/* <FaPlus/> */}
                        New Event

                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/events/home/event-schedule") ? "active" : undefined
                      }

                      href="/dashboard/marketing/events/event-schedule"
                      >
                        {/* <FaBlog/> */}
                        Event Schedule


                      </Link>
                    </li>
                    <li>
                      <Link 
                      className={
                        pathname.includes("/dashboard/marketing/events/my-event") ? "active" : undefined
                      }

                      href="/dashboard/marketing/events/my-event"
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
                    pathname === "/dashboard/marketing/billboards/home" ? "active" : undefined
                  }
                  // href="/business-identity/slogan"
                  href="/dashboard/marketing/billboards/home"

                >
                  <SiBillboard/>
                  Billboards

                </Link>
                
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/marketing/online-campaigns/home" ? "active" : undefined
                  }
                  // href="/business-identity/slogan"
                  href="/dashboard/marketing/online-campaigns/home"

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
                    pathname === "/dashboard/legal/contact" ? "active" : undefined
                  }
                  href="/dashboard/legal/contact"
                >
                  <CiPhone />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/legal/email" ? "active" : undefined
                  }
                  href="/dashboard/legal/email"
                >
                  <MdAlternateEmail />
                  Email
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/legal/location" ? "active" : undefined
                  }
                  href="/dashboard/legal/location"
                >
                  <IoLocationOutline />
                  Location
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/legal/letterhead" ? "active" : undefined
                  }
                  href="/dashboard/legal/letterhead"
                ><SlEnvolopeLetter />
                  Letterhead
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/legal/rc" ? "active" : undefined
                  }
                  href="/dashboard/legal/rc"
                >
                  <FaRegRegistered />
                  RC
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/legal/brand-registration" ? "active" : undefined
                  }
                  href="/dashboard/legal/brand-registration"
                >
                  <GiArchiveRegister />

                  Brand Registration
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/legal/additional-certificates" ? "active" : undefined
                  }
                  href="/dashboard/legal/additional-certificates"
                >
                  <GrCertificate />
                  Additional Certificates
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/legal/legal-consultation" ? "active" : undefined
                  }
                  href="/dashboard/legal/legal-consultation"
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
                    pathname === "/dashboard/team/myteam" ? "active" : undefined
                  }
                  href="/dashboard/team/myteam"
                >
                  <BsMicrosoftTeams />

                  My Team
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/team/meeting" ? "active" : undefined
                  }
                  href="/dashboard/team/meeting"
                >
                  <SiGotomeeting />

                  Meeting
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/team/platforms" ? "active" : undefined
                  }
                  href="/dashboard/team/platforms"
                >
                  <GiFloatingPlatforms />

                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/team-legal" ? "active" : undefined
                  }
                  href="/dashboard/team-legal"
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
                    pathname === "/dashboard/business-tools/website" ? "active" : undefined
                  }
                  href="/dashboard/business-tools/website"
                >
                  <FaWeibo />

                  Website
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-tools/App" ? "active" : undefined
                  }
                  href="/dashboard/business-tools/App"
                >
                  <FaAppStore />

                  App
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-tools/CRM" ? "active" : undefined
                  }
                  href="/dashboard/business-tools/CRM"
                >
                  <GiFloatingPlatforms />

                  CRM
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-tools/equipment" ? "active" : undefined
                  }
                  href="/dashboard/business-tools/equipment"
                >
                  <GiClawHammer />

                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-tools/templates" ? "active" : undefined
                  }
                  href="/dashboard/business-tools/templates"
                >
                  <GrTemplate />
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-tools/platforms" ? "active" : undefined
                  }
                  href="/dashboard/business-tools/platforms"
                >
                  <GiFloatingPlatforms />


                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/business-tools/invoicing" ? "active" : undefined
                  }
                  href="/dashboard/business-tools/invoicing"
                >
                  <LiaFileInvoiceDollarSolid />

                  Invoicing
                </Link>
              </li>
            </>
          )}
           {isCashFlowRoute && (
            <>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/cash-flow/funds" ? "active" : undefined
                  }
                  href="/dashboard/cash-flow/funds"
                >
                  <FaWeibo />
                  Funds
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/cash-flow/expenses" ? "active" : undefined
                  }
                  href="/dashboard/cash-flow/expenses"
                >
                  <FaAppStore />

                  Expenses
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/cash-flow/income" ? "active" : undefined
                  }
                  href="/dashboard/cash-flow/income"
                >
                  <GiFloatingPlatforms />

                  Income
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/cash-flow/reports" ? "active" : undefined
                  }
                  href="/dashboard/cash-flow/reports"
                >
                  <GiClawHammer />

                  Reports
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/cash-flow/vault" ? "active" : undefined
                  }
                  href="/dashboard/cash-flow/vault"
                >
                  <GrTemplate />
                  Vault
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/cash-flow/platforms" ? "active" : undefined
                  }
                  href="/dashboard/cash-flow/platforms"
                >
                  <GiFloatingPlatforms />
                  Platforms
                </Link>
              </li>
              
            </>
          )}
          {isConsultingRoute && (
            <>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/consulting/new-request" ? "active" : undefined
                  }
                  href="/dashboard/consulting/new-request"
                >
                  <FaWeibo />

                  New Request
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/consulting/summary" ? "active" : undefined
                  }
                  href="/dashboard/consulting/summary"
                >
                  <FaAppStore />

                  Summary
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/consulting/resell-service" ? "active" : undefined
                  }
                  href="/dashboard/consulting/resell-service"
                >
                  <GiFloatingPlatforms />
                  Resell Service
                </Link>
              </li>
            </>
          )}
          {isEntrepreneurRoute && (
            <>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/entrepreneur/my-ideas" ? "active" : undefined
                  }
                  href="/dashboard/entrepreneur/my-ideas"
                >
                  <FaWeibo />
                  Ideas
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/entrepreneur/library" ? "active" : undefined
                  }
                  href="/dashboard/entrepreneur/library"
                >
                  <FaAppStore />
                  Library
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/entrepreneur/courses" ? "active" : undefined
                  }
                  href="/dashboard/entrepreneur/courses"
                >
                  <GiFloatingPlatforms />
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/entrepreneur/entertainment" ? "active" : undefined
                  }
                  href="/dashboard/entrepreneur/entertainment"
                >
                  <GiFloatingPlatforms />
                  Entertainment
                </Link>
              </li>
            </>
          )}
          {isStrategiesRoute && (
            <>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/strategies/market-strategies" ? "active" : undefined
                  }
                  href="/dashboard/strategies/market-strategies"
                >
                  <FaWeibo />
                  Market Strategies
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/strategies/investors" ? "active" : undefined
                  }
                  href="/dashboard/strategies/investors"
                >
                  <FaAppStore />
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/strategies/partners" ? "active" : undefined
                  }
                  href="/dashboard/strategies/partners"
                >
                  <GiFloatingPlatforms />
                  Partners
                </Link>
              </li>
            </>
          )}
          {isCommunityRoute && (
            <>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/community/community" ? "active" : undefined
                  }
                  href="/dashboard/community/community"
                >
                  <FaWeibo />
                  Community
                </Link>
              </li>
              {/* <li>
                <Link
                  className={
                    pathname === "/dashboard/community/summary" ? "active" : undefined
                  }
                  href="/dashboard/community/summary"
                >
                  <FaAppStore />
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/community/summary" ? "active" : undefined
                  }
                  href="/dashboard/community/summary"
                >
                  <GiFloatingPlatforms />
                  Platforms
                </Link>
              </li> */}
            </>
          )}
          {isBuySellRoute && (
            <>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/buy-sell/buy-sell" ? "active" : undefined
                  }
                  href="/dashboard/buy-sell/buy-sell"
                >
                  <FaWeibo />
                  Buy-Sell
                </Link>
              </li>
              {/* <li>
                <Link
                  className={
                    pathname === "/dashboard/buy-sell/summary" ? "active" : undefined
                  }
                  href="/dashboard/buy-sell/summary"
                >
                  <FaAppStore />
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/buy-sell/summary" ? "active" : undefined
                  }
                  href="/dashboard/buy-sell/summary"
                >
                  <GiFloatingPlatforms />
                  Platforms
                </Link>
              </li> */}
            </>
          )}
          {isMyFilesRoute && (
            <>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/my-files/files" ? "active" : undefined
                  }
                  href="/dashboard/my-files/files"
                >
                  <FaWeibo />
                  Files
                </Link>
              </li>
              {/* <li>
                <Link
                  className={
                    pathname === "/dashboard/my-files/summary" ? "active" : undefined
                  }
                  href="/dashboard/my-files/summary"
                >
                  <FaAppStore />
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/my-files/summary" ? "active" : undefined
                  }
                  href="/dashboard/my-files/summary"
                >
                  <GiFloatingPlatforms />
                  Platforms
                </Link>
              </li> */}
            </>
          )}
          {isSettingsRoute && (
            <>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/settings/settings" ? "active" : undefined
                  }
                  href="/dashboard/settings/settings"
                >
                  <FaWeibo />
                  Settings
                </Link>
              </li>
              {/* <li>
                <Link
                  className={
                    pathname === "/dashboard/settings/summary" ? "active" : undefined
                  }
                  href="/dashboard/settings/summary"
                >
                  <FaAppStore />
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/dashboard/settings/summary" ? "active" : undefined
                  }
                  href="/dashboard/settings/summary"
                >
                  <GiFloatingPlatforms />
                  Platforms
                </Link>
              </li> */}
              </>
          )}
          
          
        </ul>
      </div>
    </div>
  )
}
