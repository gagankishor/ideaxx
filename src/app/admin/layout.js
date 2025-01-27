"use client";

import  { useState } from "react";
import PropTypes from 'prop-types';

const AdminLayout = ({ children }) => {
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Get the current page title from the pathname
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      
      <div className="lg:ml-64">
        {/* Top Navigation Bar */}

        {/* Main Content Area */}
        <main className=" ">
          {/* Breadcrumbs */}
          {/* <AdminSidebar /> */}
          {/* Page Content */}
          <div className="">{children}</div>
        </main>
      </div>

      {/* Click Away Listeners */}
      {(showNotifications || showUserMenu) && (
        <div
          className="fixed inset-0 z-20"
          onClick={() => {
            setShowNotifications(false);
            setShowUserMenu(false);
          }}
        />
      )}
    </div>
  );
};
AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AdminLayout;
