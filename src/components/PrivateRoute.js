"use client";
import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  // Render children if authenticated
  return isAuthenticated ? children : null;
};

// PropTypes validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
