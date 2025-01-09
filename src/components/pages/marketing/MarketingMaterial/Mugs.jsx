
 

import { PletformsNew } from '@/components/components/PletformsNew';
import { RiSeoLine } from 'react-icons/ri'

export const Mugs = () => {
   
      const platforms = [
        { id: 1, name: "", logo: "/mugs2.png", link: "https://canva.com/" },
        { id: 2, name: "", logo: "/mugs2.png", link: "#" },
        { id: 3, name: "", logo: "/mugs2.png", link: "#" },
        { id: 4, name: "", logo: "/mugs2.png", link: "#" },
        { id: 5, name: "", logo: "/mugs2.png", link: "https://canva.com/" },
        { id: 6, name: "", logo: "/mugs2.png", link: "#" },
        { id: 7, name: "", logo: "/mugs2.png", link: "#" },
        { id: 8, name: "", logo: "/mugs2.png", link: "#" },
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

            <PletformsNew platforms={platforms} title="Mugs" />

          </div>
        </div>
      </div>
    </>
  )
}
