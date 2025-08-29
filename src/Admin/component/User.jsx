// src/pages/admin/Users.jsx
import React, { useState } from "react";

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", active: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", active: true },
];

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
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleView = (user) => {
    alert(
      `Name: ${user.name}\nEmail: ${user.email}\nRole: ${user.role}\nStatus: ${
        user.active ? "Active" : "Inactive"
      }`
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Add User Form */}
      <form
        onSubmit={handleAddUser}
        className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-2 rounded"
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
          />
          <label>Active</label>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 md:col-span-2"
        >
          Add User
        </button>
      </form>

      {/* Users Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.active ? "Active" : "Inactive"}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleView(user)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => alert("Edit feature coming soon!")}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
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
