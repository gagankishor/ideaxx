 

import { PletformsNew } from '@/components/components/PletformsNew';
import { RiSeoLine } from 'react-icons/ri'

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
      
      <div className="dashboard container">
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
