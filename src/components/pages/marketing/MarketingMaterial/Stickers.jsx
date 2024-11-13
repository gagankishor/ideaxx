 
import { Helmet } from 'react-helmet'
import { SideBar } from '../../../components/Sidebar'
import { RiSeoLine } from 'react-icons/ri'
import { PletformsNew } from '../../../components/Pletforms copy'

export const Stickers = () => {
    
      const platforms = [
        { id: 1, name: "", logo: "/Stickers.png", link: "#" },
        { id: 2, name: "", logo: "/Stickers.png", link: "#" },
        { id: 3, name: "", logo: "/Stickers.png", link: "#" },
        { id: 4, name: "", logo: "/Stickers.png", link: "#" },
        { id: 5, name: "", logo: "/Stickers.png", link: "#" },
        { id: 6, name: "", logo: "/Stickers.png", link: "#" },
        { id: 7, name: "", logo: "/Stickers.png", link: "#" },
        { id: 8, name: "", logo: "/Stickers.png", link: "#" },
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

            <PletformsNew platforms={platforms} title="Stickers" />

          </div>
        </div>
      </div>
    </>
  )
}
