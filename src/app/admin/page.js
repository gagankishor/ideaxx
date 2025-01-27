

const AdminPanel = () => {
  

  // if (loading) return (
  //   <div className="flex justify-center items-center min-h-screen">
  //     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  //   </div>
  // );

  return (
    <div className="p-8">
  <h2 className="text-xl font-bold text-gray-800 mb-4">Welcome to the Admin Panel</h2>
  <p className="text-gray-600">Manage users and their available tests from this dashboard. Use the edit and delete buttons to modify user details or remove users from the system.</p>
</div>
  );
};

export default AdminPanel;
