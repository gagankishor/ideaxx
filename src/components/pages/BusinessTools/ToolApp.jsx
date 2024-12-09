 
import { SideBar } from '../../components/Sidebar'
import { Helmet } from 'react-helmet'
import { FaTools } from 'react-icons/fa'
import { Pletforms } from '../../components/Pletforms'

export const ToolApp = () => {
    const platforms = [
        { id: 1, name: "", logo: "/keyChainq.png", link: "" },
        { id: 2, name: "", logo: "/keyChainq.png", link: "#" },
        { id: 3, name: "", logo: "/keyChainq.png", link: "#" },
        { id: 4, name: "", logo: "/keyChainq.png", link: "#" },
        ];
  return (
    <>
    <Helmet>
      <title> Website | ideax</title>
    </Helmet>
    <div className="dashboard container">
      <SideBar />
      <div className="content">
        <h1 id="heading">
        <FaTools /> Business Tools
        </h1>
        <form action="" className="form">
        <div className="row">
              

              <div
                className="card-globle"
                style={{ justifyContent: "center", width: "120px",height:'200px' }}
              >
                No App yet
              </div>
              <div className="col" >
                <textarea name="" placeholder="Website details ......" id="" style={{ justifyContent: "center", width: "400px",height:'200px' }}></textarea>
              </div>
            </div>
        <Pletforms platforms={platforms} title="Platforms" />
        </form>
      </div>
    </div>
  </>
  )
}
