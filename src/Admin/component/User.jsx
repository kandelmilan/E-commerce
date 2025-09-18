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
    toast.success("🎉 User added successfully!");
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    toast.success("🗑️ The user has been deleted");
  };

  const handleView = (user) => {
    toast.info(`👤 Name: ${user.name}\n📧 Email: ${user.email}`);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-700 flex items-center gap-2">
        👥 User Management
      </h2>

      {/* Add User Form */}
      <form
        onSubmit={handleAddUser}
        className="bg-white p-6 rounded-2xl shadow-lg mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200"
      >
        <div className="flex items-center gap-2">
          <User className="text-indigo-500" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-indigo-500" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Shield className="text-indigo-500" />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
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
            className="w-4 h-4 accent-indigo-600"
          />
          <label className="text-sm font-medium">Active</label>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition md:col-span-2 flex items-center justify-center gap-2 shadow-md"
        >
          <Plus size={18} /> Add User
        </button>
      </form>

      {/* Users Table */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <table className="w-full border-collapse">
          <thead className="bg-indigo-100">
            <tr>
              <th className="p-4 text-left text-gray-700 font-semibold">ID</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Name</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Email</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Role</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Status</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-indigo-50 transition"
              >
                <td className="p-4 font-medium text-gray-700">{user.id}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      user.role === "Admin"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  {user.active ? (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded-lg text-xs font-semibold">
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
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-8 text-gray-400">
                  🚫 No users available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
