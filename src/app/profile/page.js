"use client"
import { useContext, useEffect, useState } from 'react';
import useAxiosWithAuth from "@/config/useAxiosWithAuth";
import Image from "next/image";
import {  User, Building, Edit } from "lucide-react";
import { AuthContext } from '@/context/AuthContext';

const ProfilePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const axiosInstance = useAxiosWithAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axiosInstance.get("auth/profile", {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/json",
          },
        });
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]);

  const formatName = (email) => {
    return email
      .split("@")[0]
      .replace(/[^a-zA-Z\s]/g, "")
      .replace(/_/g, " ")
      .replace(/\./g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <Image
              width={120}
              height={120}
              src={`https://ui-avatars.com/api/?name=${user?.name || user?.email}&size=120`}
              alt="Profile Picture"
              className="rounded-full ring-4 ring-gray-100 shadow-lg"
            />
            <button
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit size={16} className="text-gray-600" />
            </button>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {user?.name || formatName(user?.email)}
          </h1>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Profile Information */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Personal Information Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <User className="text-blue-500" size={20} />
                Personal Information
              </h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">Full Name</label>
                <p className="text-gray-900 text-left">{user?.name || formatName(user?.email)}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="text-gray-900 text-left">{user?.email}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">Member Since</label>
                <p className="text-gray-900 text-left">
                  {new Date(user?.created_at || Date.now()).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Account Settings Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Building className="text-blue-500" size={20} />
                Account Settings
              </h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates and notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;