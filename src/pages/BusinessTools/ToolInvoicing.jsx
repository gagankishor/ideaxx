import React from 'react'
import { RiMapPin2Line } from 'react-icons/ri'
import { SideBar } from '../../components/Sidebar'
import { Helmet } from 'react-helmet'
import { FaTools } from 'react-icons/fa'

export const ToolInvoicing = () => {
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
        Create Invoice

        
      </div>
    </div>
  </>
  )
}
