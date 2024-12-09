
 
import { Helmet } from 'react-helmet'
import { SideBar } from '../../../components/Sidebar'
import { Pletforms } from '../../../components/Pletforms'
import { RiSeoLine } from 'react-icons/ri'
export const PenAndNotebook = () => {
    
      const platforms = [
        { id: 1, name: "", logo: "/penAndBook.png", link: "https://canva.com/" },
        { id: 2, name: "", logo: "/penAndBook.png", link: "#" },
        { id: 3, name: "", logo: "/penAndBook.png", link: "#" },
        { id: 4, name: "", logo: "/penAndBook.png", link: "#" },
        { id: 5, name: "", logo: "/penAndBook.png", link: "https://canva.com/" },
        { id: 6, name: "", logo: "/penAndBook.png", link: "#" },
        { id: 7, name: "", logo: "/penAndBook.png", link: "#" },
        { id: 8, name: "", logo: "/penAndBook.png", link: "#" },
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

            <Pletforms platforms={platforms} title="Pen & Notebook" />

          </div>
        </div>
      </div>
    </>
  )
}
