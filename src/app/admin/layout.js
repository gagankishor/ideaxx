import PropTypes from 'prop-types';
import AdminSidebar from '@/components/pages/admin/AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Main Content Area */}
        <main className="min-h-screen">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;