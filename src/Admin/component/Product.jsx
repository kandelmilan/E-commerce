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

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") setForm({ ...form, [name]: checked });
    else if (name === "imageFile" && files[0])
      setForm({ ...form, imageFile: files[0], imagePreview: URL.createObjectURL(files[0]) });
    else setForm({ ...form, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        name: form.name,
        price: form.price,
        discountEnabled: form.discountEnabled,
        discountPrice: form.discountPrice,
        stock: form.stock,
        image: form.imagePreview,
      },
    ]);

    setForm({ name: "", price: "", discountEnabled: false, discountPrice: "", stock: "", description: "", imageFile: null, imagePreview: "" });
  };

  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Furniture Products</h2>

      {/* FORM */}
      <form onSubmit={handleAdd} className="bg-white rounded-xl shadow p-4 sm:p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="input" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
          <input className="input" type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />

          <div className="flex items-center gap-2">
            <input type="checkbox" name="discountEnabled" checked={form.discountEnabled} onChange={handleChange} />
            <span className="text-sm">Enable Discount</span>
          </div>

          {form.discountEnabled && (
            <input className="input" type="number" name="discountPrice" placeholder="Discount Price" value={form.discountPrice} onChange={handleChange} />
          )}

          <input className="input" type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} required />
        </div>

        <textarea className="input mt-4" rows={3} name="description" placeholder="Description" value={form.description} onChange={handleChange} />

        <input type="file" name="imageFile" accept="image/*" onChange={handleChange} className="mt-4" />
        {form.imagePreview && <img src={form.imagePreview} alt="preview" className="w-24 h-24 mt-2 rounded border" />}

        <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 flex justify-center gap-2 items-center">
          <Plus size={16} /> Add Product
        </button>
      </form>

      {/* TABLE (DESKTOP) */}
      <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-4">{p.image ? <img src={p.image} className="w-12 h-12 rounded" /> : "—"}</td>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.discountEnabled ? `$${p.discountPrice}` : "—"}</td>
                <td>{p.stock}</td>
                <td className="flex gap-2 p-4">
                  <button className="icon-btn bg-blue-500"><Eye size={14} /></button>
                  <button className="icon-btn bg-yellow-500"><Pencil size={14} /></button>
                  <button onClick={() => handleDelete(p.id)} className="icon-btn bg-red-500"><Trash2 size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow p-4">
            {p.image && <img src={p.image} className="w-full h-40 object-cover rounded mb-3" />}
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-indigo-600">${p.price}</p>
            {p.discountEnabled && <p className="text-green-600 text-sm">Discount: ${p.discountPrice}</p>}
            <p className="text-sm">Stock: {p.stock}</p>
            <div className="flex gap-2 mt-3">
              <button className="icon-btn bg-blue-500 flex-1"><Eye size={14} /></button>
              <button className="icon-btn bg-yellow-500 flex-1"><Pencil size={14} /></button>
              <button onClick={() => handleDelete(p.id)} className="icon-btn bg-red-500 flex-1"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .input { @apply border p-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 outline-none; }
        .icon-btn { @apply text-white p-2 rounded hover:opacity-90; }
      `}</style>
    </div>
  );
};

export default FurnitureProducts;