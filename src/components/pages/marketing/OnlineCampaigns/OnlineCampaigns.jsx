 
import { Helmet } from 'react-helmet'
import { SideBar } from '../../../components/Sidebar'
import { Blogs } from '../../../components/Blogs'
import { RiSeoLine } from 'react-icons/ri'
import { FaFacebook, FaGoogle, FaInstagram, FaSnapchat, FaTiktok, FaYoutube } from 'react-icons/fa'

export const OnlineCampaigns= () => {
    const blogs = [
        { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
      ];
      
  return (
    <>
       <Helmet>
        <title>SEO | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />

          Marketing Events


          </h1>
          <div className="form">
          <Blogs blogs={blogs} title="Blogs" />
          {/* <Pletforms platforms={platforms} title="My Events" /> */}
          <div>
            <h2 id="section-heading">
                Create New Campaign
            </h2>
            <div>
            <div className="social-media-icons">
            <div className="social-media-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" style={{ color: '#4267B2' }} /> {/* Facebook */}
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" style={{ color: '#C13584' }} /> {/* Instagram */}
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="social-icon" style={{ color: '#FF0000' }} /> {/* YouTube */}
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon" style={{ color: '#010101' }} /> {/* TikTok */}
        </a>
        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
          <FaSnapchat className="social-icon" style={{ color: '#FFFC00' }} /> {/* Snapchat */}
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <FaGoogle className="social-icon" style={{ color: '#4285F4' }} /> {/* Google */}
        </a>
      </div>
      </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
