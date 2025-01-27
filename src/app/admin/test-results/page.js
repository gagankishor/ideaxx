"use client"
import { useState, useEffect } from 'react';
import { Eye, UserIcon } from 'lucide-react';
import { RestAPI } from '@/config/Api';
import { useRouter } from 'next/navigation';

const AdminTestResults = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${RestAPI}/admin/wizard-results`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token auth
        }
      });
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // const handleEdit = (user) => {
  //   setSelectedUser(user);
  //   setIsEditing(true);
  // };
  const handleView = (user) => {
    router.push(`/admin/test-results/${user.uniqueKey}`);
  };

  // const handleDelete = async (id) => {
  //   if (!confirm('Are you sure you want to delete this user?')) return;
    
  //   try {
  //     const response = await fetch(`${RestAPI}/admin/users/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Authorization': `Bearer ${localStorage.getItem('token')}`
  //       }
  //     });
      
  //     if (!response.ok) throw new Error('Failed to delete user');
      
  //     setUsers(users.filter(user => user.id !== id));
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${RestAPI}/admin/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(selectedUser)
      });
      
      if (!response.ok) throw new Error('Failed to update user');
      
      const updatedUser = await response.json();
      setUsers(users.map(user => 
        user.id === updatedUser.user.id ? updatedUser.user : user
      ));
      setIsEditing(false);
      setSelectedUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <UserIcon className="w-6 h-6 text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Test Results</h1>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {isEditing ? (
            <form onSubmit={handleUpdate} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Idea Description</label>
                <input
                  type="text"
                  value={selectedUser.name}
                  onChange={e => setSelectedUser({...selectedUser, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={selectedUser.email}
                  onChange={e => setSelectedUser({...selectedUser, email: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Available Tests</label>
                <input
                  type="number"
                  value={selectedUser.availableTest}
                  onChange={e => setSelectedUser({...selectedUser, availableTest: parseInt(e.target.value)})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setSelectedUser(null);
                  }}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Idea Description 
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map(user => (
                    <tr key={user.uniqueKey}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium  text-gray-900"> {user?.idea_description?.slice(0, 50)}{user?.idea_description?.length > 50 ? '...' : ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.userName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.userEmail}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleView(user)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        {/* <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTestResults;