"use client";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkAuthStatus = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      console.log(token,"token",!!token)
      setIsAuthenticated(!!token);
      setLoading(false);
    }
  };
  useEffect(() => {
    checkAuthStatus();
  }, []);
  const login = (token, email) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      setIsAuthenticated(true);
    }
  };
  const logout = () => {
    if (typeof window !== "undefined") { 
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      setIsAuthenticated(false);
    }
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};