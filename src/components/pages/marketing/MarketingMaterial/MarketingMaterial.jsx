 
import { Blogs } from '@/components/components/Blogs';
import { EnterpriseLaunch } from '@/components/components/EnterpriseLaunch';
import { Pletforms } from '@/components/components/Pletforms';
import { RiSeoLine } from 'react-icons/ri'

export const MarketingMaterial = () => {
    const blogs = [
        { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
        { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
      ];
      const platforms = [
        { id: 1, name: "", logo: "/MarketingMaterial.png", link: "#" },
        { id: 2, name: "", logo: "/MarketingMaterial.png", link: "#" },
        { id: 3, name: "", logo: "/MarketingMaterial.png", link: "#" },
        { id: 4, name: "", logo: "/MarketingMaterial.png", link: "#" },
      ];
  return (
    <>
      
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />
          Marketing Material
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
