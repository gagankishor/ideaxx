
import React from 'react'
import { Helmet } from 'react-helmet'

import { RiSeoLine } from 'react-icons/ri'
import { SideBar } from '../../components/Sidebar'
import { Blogs } from '../../components/Blogs'
import { EnterpriseLaunch } from '../../components/EnterpriseLaunch'

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
       <Helmet>
        <title> Additional Certificates
        | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
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
