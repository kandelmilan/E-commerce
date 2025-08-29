// src/pages/Error.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-100 rounded-full">
            <AlertTriangle size={48} className="text-red-500" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-3 text-gray-500">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
