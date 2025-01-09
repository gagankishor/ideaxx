import { Blogs } from '@/components/components/Blogs';
import { Pletforms } from '@/components/components/Pletforms';
import { FaTools } from 'react-icons/fa'
export const ToolCRM = () => {
    const platforms = [
        { id: 1, name: "", logo: "/keyChainq.png", link: "" },
        { id: 2, name: "", logo: "/keyChainq.png", link: "#" },
        { id: 3, name: "", logo: "/keyChainq.png", link: "#" },
        { id: 4, name: "", logo: "/keyChainq.png", link: "#" },
       
        ];
        const blogs = [
            {
              id: 1,
              name: "Blog",
              logo: "blog.webp",
              link: "#",
            },
            {
              id: 2,
              name: "Blog",
              logo: "blog.webp",
              link: "#",
            },
            {
              id: 3,
              name: "Blog",
              logo: "blog.webp",
              link: "#",
            },
            {
              id: 4,
              name: "Blog",
              logo: "blog.webp",
              link: "#",
            },
          ];
  return (
    <>
    <div className="dashboard container">
      <div className="content">
        <h1 id="heading">
        <FaTools /> Business Tools
        </h1>
        <form className='form' action="">
            <Pletforms platforms={platforms} title="Platforms" />
            <Blogs blogs={blogs} title='Blogs'/>
            
        </form>
      </div>
    </div>
  </>
  )
}
