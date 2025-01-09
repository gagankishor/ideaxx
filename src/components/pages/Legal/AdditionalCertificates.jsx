import { Blogs } from '@/components/components/Blogs';
import { EnterpriseLaunch } from '@/components/components/EnterpriseLaunch';
import { RiSeoLine } from 'react-icons/ri'
export const AdditionalCertificates = () => {
    
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
          <RiSeoLine />
          Additional Certificates
          </h1>
          <form className="form">
          <Blogs blogs={blogs} title='Blogs'/>
          <div style={{margin:'60px 0px'}}>
          <lable>
          What additional certificate you need?
          </lable>
          <input type="text" placeholder='Certificate name
' />
          <label htmlFor="rctype">Type the reason why do you need this certificate for?
          </label>
          <input type="text" placeholder='Reason ' />
          </div>
          <button className='btn' style={{margin:'auto'}}>Apply
          </button>

    <EnterpriseLaunch/>
          </form>
        </div>
      </div>
    </>
  )
}
