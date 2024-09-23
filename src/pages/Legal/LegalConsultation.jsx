
import React from 'react'
import { Helmet } from 'react-helmet'

import { RiSeoLine } from 'react-icons/ri'
import { SideBar } from '../../components/Sidebar'
import { EnterpriseLaunch } from '../../components/EnterpriseLaunch'

export const LegalConsultation = () => {
    
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
        <title> Legal Consultation
        | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />
          Legal Consultation
          </h1>
          <form className="form">
            <div>

              <label htmlFor="text">Type your legal concern and your team will review it to the lawyer
              </label>
              <textarea style={{width:'500px',height:'300px', padding:'30px'}} name="legal" id=""></textarea>
            </div>
            <button type='button' className='btn' style={{margin:'auto'}}>Apply</button>

            <EnterpriseLaunch/>
          </form>
        </div>
      </div>
    </>
  )
}
