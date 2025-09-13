// src/pages/admin/AdminPanel.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaBell,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Sync dark mode with <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const menuItems = [
    { to: "/admin/dashboard", label: "Dashboard", icon: <FaHome /> },
    { to: "/admin/products", label: "Products", icon: <FaBoxOpen /> },
    { to: "/admin/users", label: "Users", icon: <FaUsers /> },
    { to: "/admin/settings", label: "Settings", icon: <FaCog /> },
    { to: "/admin/profile", label: "Profile", icon: <FaUsers /> },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col`}
      >
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

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            <FaSignOutAlt className="text-lg" />
            <span className={`${sidebarOpen ? "block" : "hidden"}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:text-indigo-600 transition"
          >
            <FaBars size={20} />
          </button>

          <h2 className="text-lg font-semibold">Welcome Admin</h2>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative hover:text-indigo-500">
              <FaBell size={18} />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">
                3
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
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
                <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <NavLink
                    to="/admin/profile"
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/admin/settings"
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Settings
                  </NavLink>
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

        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
