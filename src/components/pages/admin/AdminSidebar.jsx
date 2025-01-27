'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  BarChart,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  FileText,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState('');
  const pathname = usePathname();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: Home,
      path: '/admin/dashboard'
    },
    {
      title: 'User Management',
      icon: Users,
      path: '/admin/users'
    },
    {
      title: 'Reports',
      icon: BarChart,
      submenu: [
        {
          title: 'User Reports',
          path: '/admin/reports/users'
        },
        {
          title: 'Test Reports',
          path: '/admin/reports/tests'
        }
      ]
    },
    {
      title: 'Content',
      icon: FileText,
      submenu: [
        {
          title: 'Tests',
          path: '/admin/content/tests'
        },
        {
          title: 'Questions',
          path: '/admin/content/questions'
        }
      ]
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/admin/settings'
    }
  ];

  const handleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? '' : title);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md lg:hidden bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-white border-r border-gray-200 transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:w-64 w-64`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.submenu ? (
                // Menu item with submenu
                <div className="space-y-2">
                  <button
                    onClick={() => handleSubmenu(item.title)}
                    className={`flex items-center justify-between w-full p-2 rounded-md
                      hover:bg-gray-100 transition-colors duration-200
                      ${openSubmenu === item.title ? 'bg-gray-100' : ''}`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">{item.title}</span>
                    </div>
                    {openSubmenu === item.title ? (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                  </button>

                  {/* Submenu items */}
                  {openSubmenu === item.title && (
                    <div className="ml-6 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`block p-2 rounded-md transition-colors duration-200
                            ${isActive(subItem.path)
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Regular menu item
                <Link
                  href={item.path}
                  className={`flex items-center space-x-3 p-2 rounded-md transition-colors duration-200
                    ${isActive(item.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button
            onClick={() => {/* Add logout logic */}}
            className="flex items-center space-x-3 w-full p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;