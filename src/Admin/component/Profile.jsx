import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Admin User",
    email: "admin@example.com",
    phone: "+977-9800000000",
    address: "Kathmandu, Nepal",
    role: "Administrator",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      {/* Top section */}
      <div className="flex items-center gap-6 border-b pb-6">
        <img
          src={user.avatar}
          alt="profile"
          className="w-28 h-28 rounded-full border-4 border-gray-200 dark:border-gray-600"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">{user.role}</p>
        </div>
        <button className="ml-auto px-4 py-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
          <FaEdit /> Edit Profile
        </button>
      </div>

      {/* Info section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <FaEnvelope className="text-blue-600" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <FaPhone className="text-green-600" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Phone</p>
            <p className="font-medium">{user.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <FaMapMarkerAlt className="text-red-600" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Address</p>
            <p className="font-medium">{user.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <FaUser className="text-purple-600" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Role</p>
            <p className="font-medium">{user.role}</p>
          </div>
        </div>
      </div>

      {/* Activity / settings section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Account Settings
        </h2>
        <div className="grid gap-4">
          <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition">
            Change Password
          </button>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition">
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
