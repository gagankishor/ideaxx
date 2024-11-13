 
import { Helmet } from 'react-helmet'
import { SideBar } from '../../../components/Sidebar'
import { Blogs } from '../../../components/Blogs'
import { Pletforms } from '../../../components/Pletforms'
import { EnterpriseLaunch } from '../../../components/EnterpriseLaunch'
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
       <Helmet>
        <title>Marketing Material | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
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
