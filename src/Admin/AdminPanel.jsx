import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { to: "/admin/dashboard", label: "Dashboard", icon: <FaHome /> },
    { to: "/admin/products", label: "Products", icon: <FaBoxOpen /> },
    { to: "/admin/users", label: "Users", icon: <FaUsers /> },
    { to: "/admin/settings", label: "Settings", icon: <FaCog /> },
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1
            className={`text-lg font-bold tracking-wide transition-all duration-300 ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            Admin Panel
          </h1>
          <button
            className="text-white md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ✕
          </button>
        </div>

        {/* Nav Menu */}
        <nav className="flex-1 mt-4">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 mx-2 my-1 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-gray-700 shadow-lg"
                    : "hover:bg-gray-700 hover:shadow"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span
                className={`transition-all duration-300 ${
                  sidebarOpen ? "block" : "hidden"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Logout at bottom */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            <FaSignOutAlt className="text-lg" />
            <span
              className={`transition-all duration-300 ${
                sidebarOpen ? "block" : "hidden"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaBars size={20} />
          </button>
          <h2 className="text-lg font-semibold text-gray-800">Welcome Admin</h2>
        </header>

        {/* Page content */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
