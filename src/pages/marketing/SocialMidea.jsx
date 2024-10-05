import { FaRobot, FaSearch } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
// import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { TbSocial } from "react-icons/tb";
import { Pletforms } from "../../components/Pletforms";
import { Blogs } from "../../components/Blogs";
import './css/SocialMidea.css'
import { EnterpriseLaunch } from "../../components/EnterpriseLaunch";
// import axios from "axios";
// import { RestAPI } from "../../config/Api";
// import { userToken } from "../../config/Auth";
// import { EnterpriseLaunch } from "../../components/EnterpriseLaunch";
// import './BusinessBrand.css'
// import { IdeaContext } from "../../config/ideaDataContext";
export default function SocialMidea() {
  
  const platforms = [
    { id: 1, name: "Face Book", logo: "/socialmidea/facebook.png", link: "https://canva.com/" },
    { id: 2, name: "Instagram", logo: "/socialmidea/instagram.png", link: "#" },
    { id: 3, name: "LinkedIn", logo: "/socialmidea/LinkedIn.png", link: "#" },
    { id: 4, name: "Whatsapp", logo: "/socialmidea/whatsapp.png", link: "#" },
  ];
  const platformsCreatePost = [
    { id: 1, name: "Canva", logo: "/platforms/canva.png", link: "https://canva.com/" },
    { id: 2, name: "Adobe Express", logo: "/platforms/Adobe.png", link: "#" },
    { id: 3, name: "Crello ", logo: "https://images.sftcdn.net/images/t_app-icon-s/p/e3660dbc-7beb-4206-8af6-e9aad6957123/87630095/crello-crello%20icon.jpg", link: "#" },
    { id: 4, name: "Fotor", logo: "https://pub-static.fotor.com/static/web/lib/fotor-bundle/6ce130d2365d8b44a294.svg", link: "#" },
  ];
  const platformsAutomate = [
    { id: 1, name: "Hootsuite", logo: "/platforms/Hootsuite.png", link: "https://canva.com/" },
    { id: 2, name: "Buffer", logo: "/platforms/Buffer.png", link: "#" },
    { id: 3, name: "SocialBee ", logo: "https://socialbee.com/wp-content/themes/socialbee/resources/logo-socialbee-small.svg", link: "#" },
    { id: 4, name: "Sprout Social", logo: "/platforms/SocialBee.png", link: "#" },
  ];
  const blogs = [
    {
      id: 1,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
    {
      id: 2,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
    {
      id: 3,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
    {
      id: 4,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Social Media
        | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
          <TbSocial />Social Media</h1>
          <form className="form">
            <h2 id="section-heading">Set your business social media accounts
            </h2>
            <Pletforms platforms={platforms} title='Platforms'/>
            <Blogs blogs={blogs} title='Blogs'/>
            <h2 id="section-heading" style={{marginTop:'100px'}}>Create Stunning Social Media Posts
            </h2>
            <Pletforms platforms={platformsCreatePost} title='Platforms'/>
            <Blogs blogs={blogs} title='Blogs'/>
            <h2 id="section-heading" style={{marginTop:'100px'}}>You can do it yourself!
            </h2>
            <Pletforms platforms={platforms} title='Platforms'/>
            <Blogs blogs={blogs} title='Blogs'/>
            <h2 id="section-heading" style={{marginTop:'100px'}}>Automate your social media posting

            </h2>
            <Pletforms platforms={platformsAutomate} title='Platforms'/>
            <Blogs blogs={blogs} title='Blogs'/>

            <div className="youtube-card-contener">
              <div className="card">

                <img src="/platforms/youtube.png" alt="YouTube" />
              </div>
            </div>
            <EnterpriseLaunch/>
          </form>
        </div>
      </div>
    </>
  );
}
