
import { Pletforms } from '@/components/components/Pletforms';
import { RiSeoLine } from 'react-icons/ri'

export const TeamPlatforms = () => {
    
      const platforms = [
        { id: 1, name: "", logo: "/penAnddBook.png", link: "https://canva.com/" },
        { id: 2, name: "", logo: "/penAnddBook.png", link: "#" },
        { id: 3, name: "", logo: "/penAnddBook.png", link: "#" },
        { id: 4, name: "", logo: "/penAnddBook.png", link: "#" },
       
      ];
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />
          Team
          </h1>
          <form className="form">
          <Pletforms platforms={platforms} title='Platforms'/>
          <Pletforms platforms={platforms} title='Description'/>
          </form>
        </div>
      </div>
    </>
  )
}
