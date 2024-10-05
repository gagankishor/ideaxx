import React from 'react'
import { Helmet } from 'react-helmet'
import { SideBar } from '../../../components/Sidebar'
import { TbSearch, TbSocial } from 'react-icons/tb'
import { Blogs } from '../../../components/Blogs'
import { Pletforms } from '../../../components/Pletforms'
import { EnterpriseLaunch } from '../../../components/EnterpriseLaunch'
import { RiSeoLine } from 'react-icons/ri'
import { PletformsNew } from '../../../components/Pletforms copy'

export const BusinessCard = () => {
    const blogs = [
        { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
      ];
      const platforms = [
        { id: 1, name: "canva", logo: "/platforms/canva.png", link: "#" },
        { id: 2, name: "canva", logo: "/platforms/canva.png", link: "#" },
        { id: 3, name: "Canva", logo: "/platforms/canva.png", link: "#" },
        { id: 4, name: "Canva", logo: "/platforms/canva.png", link: "#" },
      ];
      const Templets = [
        { id: 1, name: "", logo: "/business-card.png", link: "#" },
        { id: 2, name: "", logo: "/business-card.png", link: "#" },
        { id: 3, name: "", logo: "/business-card.png", link: "#" },
        { id: 4, name: "", logo: "/business-card.png", link: "#" },
        { id: 5, name: "", logo: "/business-card.png", link: "#" },
        { id: 6, name: "", logo: "/business-card.png", link: "#" },
        { id: 7, name: "", logo: "/business-card.png", link: "#" },
        { id: 8, name: "", logo: "/business-card.png", link: "#" },
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

           Business Cards

          </h1>
          <div className="form">

            <Pletforms platforms={platforms} title="Platforms" />
            <Blogs blogs={blogs} title="Blogs" />
            <EnterpriseLaunch/>
            <div>

            <PletformsNew platforms={Templets} title="Business Cards"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
