"use client";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/pages/admin/AdminSidebar";
import useAxiosWithAuth from "@/config/useAxiosWithAuth";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(null);
  const axiosInstance = useAxiosWithAuth();

  useEffect(() => {
    const checkAdminPermission = async () => {
      try {
        const { data } = await axiosInstance.get("auth/profile");
        if (data?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error fetching admin permissions:", error);
        router.replace("/404");
      }
    };

    checkAdminPermission();
  }, [router, axiosInstance]);

  if (isAdmin === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  if (isAdmin === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
        <p className="text-gray-700 mt-2">You don&lsquo;t have admin access.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <div className="lg:ml-64">
        <main className="min-h-screen">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
