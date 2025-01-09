 
import { Pletforms } from "@/components/components/Pletforms";
import { FaBlog } from "react-icons/fa";
import { Blogs } from "@/components/components/Blogs";
import { EnterpriseLaunch } from "@/components/components/EnterpriseLaunch";

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
      
      <div className="dashboard container">
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
