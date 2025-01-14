"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
// import { AuthContext } from "@/context/AuthContext";

const PrivateRoute = ({ children }) => {
  // const { isAuthenticated } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();
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
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, loading, router]);
  if (loading) return <div className="flex justify-center items-center min-h-[60vh]">
  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
</div>;
  return isAuthenticated ? children : null;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
