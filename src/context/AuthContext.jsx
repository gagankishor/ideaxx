"use client";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const router = useRouter();

  // Check authentication status
  const checkAuthStatus = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Login function
  const login = async (token, email) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      setIsAuthenticated(true);
      // router.push("/dashboard"); // Redirect after login
    }
  };

  // Logout function
  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      setIsAuthenticated(false);
      // router.push("/login"); // Redirect after logout
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Prop types validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};