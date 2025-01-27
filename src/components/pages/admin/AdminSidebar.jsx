'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  LogOut,
  Menu,
  X,
  Home,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import PropTypes from 'prop-types';

const menuItems = [
  {
    title: 'Admin Dashboard',
    icon: Home,
    path: '/admin'
  },
  {
    title: 'User Management',
    icon: Users,
    path: '/admin/users'
  },
  {
    title: 'Test Results',
    icon: Users,
    path: '/admin/test-results'
  },
  // {
  //   title: 'Test Results',
  //   icon: BarChart,
  //   submenu: [
  //     {
  //       title: 'User Reports',
  //       path: '/admin/test-results'
  //     },
  //     {
  //       title: 'Test Reports',
  //       path: '/admin/reports/tests'
  //     }
  //   ]
  // },
  // {
  //   title: 'Content',
  //   icon: FileText,
  //   submenu: [
  //     {
  //       title: 'Tests',
  //       path: '/admin/content/tests'
  //     },
  //     {
  //       title: 'Questions',
  //       path: '/admin/content/questions'
  //     }
  //   ]
  // },
  // {
  //   title: 'Settings',
  //   icon: Settings,
  //   path: '/admin/settings'
  // }
];

const MenuItem = ({ item, isActive, openSubmenu, onSubmenuClick, onLinkClick }) => {
  const IconComponent = item.icon;

  if (item.submenu) {
    return (
      <div className="space-y-2">
        <button
          onClick={() => onSubmenuClick(item.title)}
          className={`flex items-center justify-between w-full p-2 rounded-md
            hover:bg-gray-100 transition-colors duration-200
            ${openSubmenu === item.title ? 'bg-gray-100' : ''}`}
          aria-expanded={openSubmenu === item.title}
          aria-controls={`submenu-${item.title}`}
        >
          <div className="flex items-center space-x-3">
            <IconComponent className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">{item.title}</span>
          </div>
          {openSubmenu === item.title ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {openSubmenu === item.title && (
          <div 
            id={`submenu-${item.title}`}
            className="ml-6 space-y-2"
          >
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.path}
                href={subItem.path}
                className={`block p-2 rounded-md transition-colors duration-200
                  ${isActive(subItem.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
                onClick={onLinkClick}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.path}
      className={`flex items-center space-x-3 p-2 rounded-md transition-colors duration-200
        ${isActive(item.path)
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-100'
        }`}
      onClick={onLinkClick}
    >
      <IconComponent className="w-5 h-5" />
      <span>{item.title}</span>
    </Link>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    path: PropTypes.string,
    submenu: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  isActive: PropTypes.func.isRequired,
  openSubmenu: PropTypes.string.isRequired,
  onSubmenuClick: PropTypes.func.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};
const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState('');
  const pathname = usePathname();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle escape key to close mobile sidebar
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSubmenu = useCallback((title) => {
    setOpenSubmenu(prev => prev === title ? '' : title);
  }, []);

  const isActive = useCallback((path) => {
    return pathname === path;
  }, [pathname]);

  const handleLinkClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, []);

  const handleLogout = useCallback(() => {
    // Add logout logic here
    console.log('Logout clicked');
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md lg:hidden bg-white shadow-md"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 h-screen bg-white border-r border-gray-200 transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:w-64 w-64 overflow-hidden`}
        aria-label="Sidebar navigation"
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <Link href="/admin" className="text-xl font-bold text-gray-800">
            Admin Panel
          </Link>
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-2 overflow-hidden" role="navigation">
          {menuItems.map((item) => (
            <MenuItem
              key={item.title}
              item={item}
              isActive={isActive}
              openSubmenu={openSubmenu}
              onSubmenuClick={handleSubmenu}
              onLinkClick={handleLinkClick}
            />
          ))}
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Logout"
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