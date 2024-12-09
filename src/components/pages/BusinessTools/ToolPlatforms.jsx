 
import { SideBar } from '../../components/Sidebar'
import { Helmet } from 'react-helmet'
import { FaTools } from 'react-icons/fa'
import { Pletforms } from '../../components/Pletforms'

export const ToolPlatforms = () => {
const platforms = [
    { id: 1, name: "", logo: "/keyChainq.png", link: "" },
    { id: 2, name: "", logo: "/keyChainq.png", link: "#" },
    { id: 3, name: "", logo: "/keyChainq.png", link: "#" },
    { id: 4, name: "", logo: "/keyChainq.png", link: "#" },
    { id: 5, name: "", logo: "/keyChainq.png", link: "" },
    { id: 6, name: "", logo: "/keyChainq.png", link: "#" },
    { id: 7, name: "", logo: "/keyChainq.png", link: "#" },
    { id: 8, name: "", logo: "/keyChainq.png", link: "#" },
    ];
  return (
    <>
    <Helmet>
      <title> Location | ideax</title>
    </Helmet>
    <div className="dashboard container">
      <SideBar />
      <div className="content">
        <h1 id="heading">
        <FaTools /> Business Tools
        </h1>
        <form className='form' action="">

            <Pletforms platforms={platforms} title="Business tools platforms" />
        </form>
      </div>
    </div>
  </>
  )
}
