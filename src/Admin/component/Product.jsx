// src/pages/admin/FurnitureProducts.jsx
import React, { useState } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";

const FurnitureProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    discountEnabled: false,
    discountPrice: "",
    stock: "",
    description: "",
    imageFile: null,
    imagePreview: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (name === "imageFile") {
      const file = files[0];
      if (file) {
        setForm({
          ...form,
          imageFile: file,
          imagePreview: URL.createObjectURL(file),
        });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Add product
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) return;

    const newProduct = {
      id: products.length + 1,
      name: form.name,
      price: Number(form.price),
      discountEnabled: form.discountEnabled,
      discountPrice: form.discountEnabled ? Number(form.discountPrice) : null,
      stock: Number(form.stock),
      description: form.description,
      image: form.imagePreview,
    };

    setProducts([...products, newProduct]);

    // Reset form
    setForm({
      name: "",
      price: "",
      discountEnabled: false,
      discountPrice: "",
      stock: "",
      description: "",
      imageFile: null,
      imagePreview: "",
    });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        🛋️ Furniture Products
      </h2>

      {/* Form to add furniture */}
      <form
        onSubmit={handleAdd}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 dark:border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="discountEnabled"
            checked={form.discountEnabled}
            onChange={handleChange}
          />
          <label className="text-sm font-medium dark:text-gray-300">
            Enable Discount
          </label>
        </div>

        {form.discountEnabled && (
          <input
            type="number"
            name="discountPrice"
            placeholder="Discount Price"
            value={form.discountPrice}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        )}

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-3 rounded-lg md:col-span-2 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          rows={3}
        />

        {/* Image Upload */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="font-medium text-gray-700 dark:text-gray-300">
            Select Image:
          </label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleChange}
            className="cursor-pointer"
          />
          {form.imagePreview && (
            <img
              src={form.imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover mt-2 rounded-lg border shadow-sm"
            />
          )}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-all md:col-span-2"
        >
          <Plus size={18} /> Add Product
        </button>
      </form>

      {/* Products Table */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <table className="w-full border-collapse">
          <thead className="bg-indigo-50 dark:bg-gray-700">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Image
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Name
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Price
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Discount
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Stock
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                  ) : (
                    "No image"
                  )}
                </td>
                <td className="p-4 font-medium dark:text-white">{p.name}</td>
                <td className="p-4 text-indigo-600 font-semibold">
                  ${p.price}
                </td>
                <td className="p-4">
                  {p.discountEnabled && p.discountPrice ? (
                    <span className="text-green-600 font-semibold">
                      ${p.discountPrice}
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="p-4 dark:text-gray-200">{p.stock}</td>
                <td className="p-4 flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    <Eye size={16} /> View
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                    <Pencil size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No products added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FurnitureProducts;
