import React from "react";
import { Blogs } from "../../../components/Blogs";
import { Pletforms } from "../../../components/Pletforms";
import { SideBar } from "../../../components/Sidebar";
import { Helmet } from "react-helmet";
import { TbMail, TbSocial } from "react-icons/tb";
import { EnterpriseLaunch } from "../../../components/EnterpriseLaunch";
import { FaBlog } from "react-icons/fa";

export const MarketingBlogs = () => {
  const blogs = [
    { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
  ];
  const platforms = [
    { id: 1, name: "WordPress", logo: "/WordPress.png", link: "https://wordpress.com/" },
    { id: 2, name: "Blogger", logo: "/Blogger.png", link: "https://www.blogger.com/blog" },
    { id: 3, name: "Wix", logo: "/Wix.png", link: "https://www.wix.com/" },
    { id: 4, name: "Substack", logo: "/Substack.png", link: "https://substack.com/" },
  ];
  return (
    <>
      <Helmet>
        <title>Blogs | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
          <FaBlog />

          Blogs
          </h1>
          <div className="form">

            <Pletforms platforms={platforms} title="Platforms" />
            <Blogs blogs={blogs} title="Blogs" />
            <EnterpriseLaunch/>
          </div>
          
        </div>
      </div>
    </>
  );
};
