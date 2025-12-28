import React, { useState } from "react";
import { toast } from "react-toastify";
import { Plus, Eye, Edit, Trash2, User, Mail, Shield } from "lucide-react";

const initialUsers = [];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState({ name: "", email: "", role: "User", active: true });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill all required fields!");
      return;
    }

    const newUser = {
      id: users.length + 1,
      ...form,
    };

    setUsers([...users, newUser]);
    setForm({ name: "", email: "", role: "User", active: true });
    toast.success("User added successfully!");
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    toast.success(" User deleted successfully!");
  };

  const handleView = (user) => {
    toast.info(` Name: ${user.name}\nEmail: ${user.email}\n Role: ${user.role}`);
  };

  return (
    <div className="p-6 md:p-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-700 flex items-center gap-3">
        👥 User Management
      </h2>

      {/* Add User Form */}
      <form
        onSubmit={handleAddUser}
        className="bg-white p-6 rounded-2xl shadow-xl mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 transition hover:shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <User className="text-indigo-500" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-indigo-500" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <Shield className="text-indigo-500" />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
            className="w-5 h-5 accent-indigo-600"
          />
          <label className="text-sm font-medium">Active</label>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition flex items-center justify-center gap-3 shadow-md hover:shadow-lg font-semibold"
        >
          <Plus size={18} /> Add User
        </button>
      </form>

      {/* Users Table */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <table className="w-full border-collapse hidden md:table">
          <thead className="bg-indigo-100">
            <tr>
              <th className="p-4 text-left font-semibold text-gray-700">ID</th>
              <th className="p-4 text-left font-semibold text-gray-700">Name</th>
              <th className="p-4 text-left font-semibold text-gray-700">Email</th>
              <th className="p-4 text-left font-semibold text-gray-700">Role</th>
              <th className="p-4 text-left font-semibold text-gray-700">Status</th>
              <th className="p-4 text-left font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-8 text-center text-gray-400">
                  🚫 No users available.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-indigo-50 transition-all"
                >
                  <td className="p-4 font-medium text-gray-700">{user.id}</td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4 text-gray-600">{user.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${user.role === "Admin"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-gray-100 text-gray-600"
                        }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    {user.active ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold">
                        Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-xs font-semibold">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => handleView(user)}
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-sm"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => toast.info("✏️ Edit feature coming soon!")}
                      className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition shadow-sm"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4 p-4">
          {users.length === 0 ? (
            <p className="text-center text-gray-400">🚫 No users available.</p>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex flex-col gap-2 transition hover:shadow-lg"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">#{user.id} - {user.name}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(user)}
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-sm"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => toast.info("✏️ Edit feature coming soon!")}
                      className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition shadow-sm"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600">{user.email}</p>
                <div className="flex justify-between items-center">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold ${user.role === "Admin"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {user.role}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold ${user.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                      }`}
                  >
                    {user.active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
