"use client";
import SideBar from "@/components/pages/Sidebar";
import PrivateRoute from "@/components/PrivateRoute";
import {  IdeaProvider } from "@/context/ideaDataContext";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="dashboard container">
      <SideBar />
      <div className="content">
        <IdeaProvider>
          <PrivateRoute>{children}</PrivateRoute>
        </IdeaProvider>
      </div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;