import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-[#0A174E]">Admin Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl mt-2">1,234</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">Pending Verification</h2>
          <p className="text-2xl mt-2">56</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">Resolved Verification</h2>
          <p className="text-2xl mt-2">1,120</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">New Updates</h2>
          <p className="text-2xl mt-2">89</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">Active Sessions</h2>
          <p className="text-2xl mt-2">342</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
