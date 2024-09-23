import React from 'react'
import { RiMapPin2Line } from 'react-icons/ri'
import { SideBar } from '../../components/Sidebar'
import { Helmet } from 'react-helmet'
import { FaTools } from 'react-icons/fa'
import { Pletforms } from '../../components/Pletforms'
import { Blogs } from '../../components/Blogs'

export const ToolCRM = () => {
    const platforms = [
        { id: 1, name: "", logo: "/keyChainq.png", link: "" },
        { id: 2, name: "", logo: "/keyChainq.png", link: "#" },
        { id: 3, name: "", logo: "/keyChainq.png", link: "#" },
        { id: 4, name: "", logo: "/keyChainq.png", link: "#" },
       
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
      <title> Location | ideax</title>
    </Helmet>
    <div className="dashboard container">
      <SideBar />
      <div className="content">
        <h1 id="heading">
        <FaTools /> Business Tools
        </h1>
        <form className='form' action="">
            <Pletforms platforms={platforms} title="Platforms" />
            <Blogs blogs={blogs} title='Blogs'/>
            
        </form>
      </div>
    </div>
  </>
  )
}
