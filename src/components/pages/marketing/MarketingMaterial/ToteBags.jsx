
import { PletformsNew } from '@/components/components/PletformsNew';
import { RiSeoLine } from 'react-icons/ri'
export const ToteBags = () => {
      const platforms = [
        { id: 1, name: "", logo: "/ToteBags.png", link: "#" },
        { id: 2, name: "", logo: "/ToteBags.png", link: "#" },
        { id: 3, name: "", logo: "/ToteBags.png", link: "#" },
        { id: 4, name: "", logo: "/ToteBags.png", link: "#" },
        { id: 5, name: "", logo: "/ToteBags.png", link: "#" },
        { id: 6, name: "", logo: "/ToteBags.png", link: "#" },
        { id: 7, name: "", logo: "/ToteBags.png", link: "#" },
        { id: 8, name: "", logo: "/ToteBags.png", link: "#" },
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
            <PletformsNew platforms={platforms} title="Tote Bags" />
          </div>
        </div>
      </div>
    </>
  ) 
}
