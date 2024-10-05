

import React from 'react'
import { Helmet } from 'react-helmet'
import { SideBar } from '../../../components/Sidebar'
import { TbSearch, TbSocial } from 'react-icons/tb'
import { Blogs } from '../../../components/Blogs'
import { Pletforms } from '../../../components/Pletforms'
import { EnterpriseLaunch } from '../../../components/EnterpriseLaunch'
import { RiSeoLine } from 'react-icons/ri'

export const KeyChain = () => {
    const blogs = [
        { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
      ];
      const platforms = [
        { id: 1, name: "", logo: "/keyChain.png", link: "" },
        { id: 2, name: "", logo: "/keyChain.png", link: "#" },
        { id: 3, name: "", logo: "/keyChain.png", link: "#" },
        { id: 4, name: "", logo: "/keyChain.png", link: "#" },
        { id: 5, name: "", logo: "/keyChain.png", link: "" },
        { id: 6, name: "", logo: "/keyChain.png", link: "#" },
        { id: 7, name: "", logo: "/keyChain.png", link: "#" },
        { id: 8, name: "", logo: "/keyChain.png", link: "#" },
      ];
  return (
    <>
       <Helmet>
        <title>KeyChain | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />

          KeyChain

          </h1>
          <div className="form">

            <Pletforms platforms={platforms} title="Key Chain" />

          </div>
        </div>
      </div>
    </>
  )
}
