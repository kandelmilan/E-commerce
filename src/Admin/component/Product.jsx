// src/pages/admin/FurnitureProducts.jsx
import React, { useState } from "react";

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
    <div>
      <h2 className="text-2xl font-bold mb-4">Furniture Products</h2>

      {/* Form to add furniture */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="discountEnabled"
            checked={form.discountEnabled}
            onChange={handleChange}
          />
          <label>Enable Discount</label>
        </div>

        {form.discountEnabled && (
          <input
            type="number"
            name="discountPrice"
            placeholder="Discount Price"
            value={form.discountPrice}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        )}

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
          rows={3}
        />

        {/* Image Upload */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="font-medium">Select Image:</label>
          <input type="file" name="imageFile" accept="image/*" onChange={handleChange} />
          {form.imagePreview && (
            <img
              src={form.imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover mt-2 rounded border"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 md:col-span-2"
        >
          Add Product
        </button>
      </form>

      {/* Products Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Discount</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    "No image"
                  )}
                </td>
                <td className="p-3">{p.name}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3">
                  {p.discountEnabled && p.discountPrice ? `$${p.discountPrice}` : "—"}
                </td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3 flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    View
                  </button>
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FurnitureProducts;
