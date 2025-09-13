import React from "react";

const Profile = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-md"
              src="https://via.placeholder.com/150"
              alt=""
            />
            <span className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white" title="Online"></span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">John Doe</h2>
          <p className="text-gray-500">johndoe@example.com</p>
        </div>

        {/* Account Info */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Account Info
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition">
              📍 Address: Kathmandu, Nepal
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition">
              📞 Phone: +977-9800000000
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition">
              🏢 Role: Admin
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl shadow hover:bg-indigo-700 transition">
            Edit Profile
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-xl shadow hover:bg-gray-300 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
