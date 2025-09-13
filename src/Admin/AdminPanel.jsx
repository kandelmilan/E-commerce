import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaBell,
} from "react-icons/fa";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h1
            className={`text-lg font-bold tracking-wide transition-all duration-300 ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            Admin Panel
          </h1>
          <button
            className="text-gray-600 md:hidden"
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
                  isActive ? "bg-indigo-50 font-semibold" : "hover:bg-gray-50"
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
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
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
        <header className="flex items-center justify-between p-4 shadow-md bg-white text-gray-800">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaBars size={20} />
          </button>

          {/* Page Title / Breadcrumb */}
          <h2 className="text-lg font-semibold">Welcome Admin</h2>

          {/* Right side: actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative hover:text-blue-500">
              <FaBell size={18} />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded-full">
                3
              </span>
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2"
              >
                <img
                  src="https://i.pravatar.cc/40"
                  alt="avatar"
                  className="w-8 h-8 rounded-full border"
                />
                <span className="hidden md:block font-medium">Admin</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white text-gray-800">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => navigate("/admin/profile")}
                  >
                    Profile
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
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
