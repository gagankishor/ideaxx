
import { Blogs } from '@/components/components/Blogs';
import { EnterpriseLaunch } from '@/components/components/EnterpriseLaunch';
import { Pletforms } from '@/components/components/Pletforms';
import { RiSeoLine } from 'react-icons/ri'

export const SEO = () => {
    const blogs = [
        { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
      ];
      const platforms = [
        { id: 1, name: "ahrefs", logo: "/ahrefs.png", link: "https://ahrefs.com/" },
        { id: 2, name: "semrush", logo: "/semrush.png", link: "https://www.semrush.com/" },
        { id: 3, name: "key word tool", logo: "/keyword-tool-logo.webp", link: "https://keywordtool.io/" },
        { id: 4, name: "Moz", logo: "/moz.png", link: "https://moz.com/" },
      ];
  return (
    <>
      
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />
            Search Engine Optimization (SEO)
          </h1>
          <div className="form">
            <Pletforms platforms={platforms} title="Platforms" />
            <Blogs blogs={blogs} title="Blogs" />
            <EnterpriseLaunch/>
          </div>
        </div>
      </div>
    </>
  )
}
