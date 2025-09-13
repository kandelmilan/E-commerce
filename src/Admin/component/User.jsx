import React, { useState } from "react";
import { toast } from "react-toastify";

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
    if (!form.name || !form.email) return;

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
    toast.success("The user has been deleted");
  };

  const handleView = (user) => {
    toast.info(`Name: ${user.name}, Email: ${user.email}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">👤 User Management</h2>

      {/* Add User Form */}
      <form
        onSubmit={handleAddUser}
        className="bg-white p-6 rounded-xl shadow-md mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="text-sm">Active</label>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition md:col-span-2 flex items-center justify-center gap-2"
        >
          ➕ Add User
        </button>
      </form>

      {/* Users Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
        <table className="w-full border-collapse">
          <thead className="bg-indigo-50">
            <tr>
              <th className="p-3 text-left text-gray-700 font-semibold">ID</th>
              <th className="p-3 text-left text-gray-700 font-semibold">Name</th>
              <th className="p-3 text-left text-gray-700 font-semibold">Email</th>
              <th className="p-3 text-left text-gray-700 font-semibold">Role</th>
              <th className="p-3 text-left text-gray-700 font-semibold">Status</th>
              <th className="p-3 text-left text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  {user.active ? (
                    <span className="text-green-600 font-medium">Active</span>
                  ) : (
                    <span className="text-red-600 font-medium">Inactive</span>
                  )}
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleView(user)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    View
                  </button>
                  <button
                    onClick={() => toast.info("Edit feature coming soon!")}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-400">
                  No users available.
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
