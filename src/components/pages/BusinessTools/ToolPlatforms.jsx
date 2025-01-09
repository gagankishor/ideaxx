
import { Pletforms } from '@/components/components/Pletforms';
import { FaTools } from 'react-icons/fa'

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
    <div className="dashboard container">
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
