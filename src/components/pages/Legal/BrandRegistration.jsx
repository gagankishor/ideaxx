
 
import { Helmet } from 'react-helmet'
import { SideBar } from '../../components/Sidebar'

import { RiSeoLine } from 'react-icons/ri'
import { Blogs } from '../../components/Blogs'
import { EnterpriseLaunch } from '../../components/EnterpriseLaunch'

export const BrandRegistration = () => {
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
       <Helmet>
        <title> Contact information
        | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />
          Contact information
          </h1>
          <form className="form">
          <Blogs blogs={blogs} title='Blogs'/>
          <div className="row" style={{justifyContent:'center',alignItems:'center',margin:"60px 0px"}}>
            <div style={{ textAlign:'center'}}>
            Apply for trademark registration
          <button style={{margin:'auto'}} type='button' className='btn'>Apply</button>
            </div>

          </div>
    <EnterpriseLaunch/>
          </form>
        </div>
      </div>
    </>
  )
}
