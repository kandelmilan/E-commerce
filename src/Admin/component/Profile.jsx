import React from "react";

const ProfilePage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">Account Info</h3>
          <ul className="mt-2 text-gray-700">
            <li>📍 Address: Kathmandu, Nepal</li>
            <li>📞 Phone: +977-9800000000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
