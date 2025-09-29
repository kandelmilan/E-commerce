// src/pages/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ShieldBan, Server, Lock } from "lucide-react";

function Error({ code = "404", title = "Page Not Found", message = "Oops! The page you’re looking for doesn’t exist or has been moved." }) {
  // Choose icon based on code
  const getIcon = () => {
    switch (code) {
      case "403":
        return <ShieldBan size={60} className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.7)]" />;
      case "500":
        return <Server size={60} className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]" />;
      case "401":
        return <Lock size={60} className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]" />;
      default:
        return <AlertTriangle size={60} className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]" />;
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 overflow-hidden px-6">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-24 sm:h-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66 92.83C906.67 72 823.78 31.07 743.78 14.2c-81.17-17.11-168.06-16.74-248.48 3.68C415.69 40.91 336.9 91.93 257.21 111.7 180.93 130.29 104.2 120.58 29.8 100.35-23.63 85.6-78.5 67.82-134.94 59.12V120h1335.88V92.83z"
            fill="url(#waveGradient)"
          ></path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Error Card */}
      <div className="relative z-10 text-center max-w-md w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/40">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-gray-100 rounded-full shadow-lg animate-bounce">
            {getIcon()}
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-gray-800 tracking-tight">
          {code}
        </h1>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-700">
          {title}
        </h2>
        <p className="mt-4 text-gray-500 leading-relaxed">
          {message}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-7 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transform transition duration-200"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 bg-white/90 border border-gray-300 text-gray-700 font-medium rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-200"
          >
            Contact Support
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-10">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} YourApp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
