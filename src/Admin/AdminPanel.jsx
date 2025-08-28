import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaBoxOpen, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
    const Navigate=useNavigate();
  return (

    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
       className={`bg-gray-900 text-white w-64 flex-shrink-0 transition-all duration-300 ${
          sidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className="text-lg font-bold">Admin Panel</h1>
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col mt-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 hover:bg-gray-700 transition ${
                isActive ? "bg-gray-800" : ""
              }`
            }
          >
            <FaHome /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 hover:bg-gray-700 transition ${
                isActive ? "bg-gray-800" : ""
              }`
            }
          >
            <FaBoxOpen /> Products
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 hover:bg-gray-700 transition ${
                isActive ? "bg-gray-800" : ""
              }`
            }
          >
            <FaUsers /> Users
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 hover:bg-gray-700 transition ${
                isActive ? "bg-gray-800" : ""
              }`
            }
          >
            <FaCog /> Settings
          </NavLink>

          <button className="flex items-center gap-3 p-3 mt-auto hover:bg-gray-700 transition">
            <FaSignOutAlt  /> Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
