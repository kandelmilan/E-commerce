// src/pages/Error.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-6">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-red-100 rounded-full shadow-lg animate-bounce">
            <AlertTriangle size={56} className="text-red-500" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-gray-800 drop-shadow-sm">
          404
        </h1>
        <h2 className="mt-3 text-3xl font-bold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-500 leading-relaxed">
          Oops! The page you’re looking for doesn’t exist, has been moved, or
          is temporarily unavailable.
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
            className="px-7 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-200"
          >
            Contact Support
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-12">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} YourApp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
