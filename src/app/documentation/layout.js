import DocumentationSidebar from "@/components/pages/document/Sidebar";
import PropTypes from "prop-types";

export default function DocumentationLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      <div className="relative flex max-w-7xl mx-auto">
        <DocumentationSidebar />
        {children}
        
      </div>
    </div>
  )
}

DocumentationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};