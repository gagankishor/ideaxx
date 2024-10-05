import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); 
  };

  useEffect(() => {
    checkAuthStatus(); 
  }, []);
  const login = async (token,email) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
