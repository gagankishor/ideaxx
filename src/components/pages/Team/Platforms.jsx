
import { Helmet } from 'react-helmet'
import { SideBar } from '../../components/Sidebar'

import { RiSeoLine } from 'react-icons/ri'
import { Pletforms } from '../../components/Pletforms'

export const TeamPlatforms = () => {
    
      const platforms = [
        { id: 1, name: "", logo: "/penAnddBook.png", link: "https://canva.com/" },
        { id: 2, name: "", logo: "/penAnddBook.png", link: "#" },
        { id: 3, name: "", logo: "/penAnddBook.png", link: "#" },
        { id: 4, name: "", logo: "/penAnddBook.png", link: "#" },
       
      ];
  return (
    <>
       <Helmet>
        <title> Team
        | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
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
