import React, { useEffect, useState } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";

const INITIAL_FORM = {
  name: "",
  price: "",
  discountEnabled: false,
  discountPrice: "",
  stock: "",
  description: "",
  imageFile: null,
  imagePreview: "",
};

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative animate-fadeIn">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-xl font-bold"
      >
        ✕
      </button>
      {children}
    </div>
  </div>
);

const FurnitureProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(INITIAL_FORM);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mode, setMode] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm((p) => ({ ...p, [name]: checked }));
      return;
    }

    if (type === "file" && files?.[0]) {
      const preview = URL.createObjectURL(files[0]);
      setForm((p) => ({ ...p, imageFile: files[0], imagePreview: preview }));
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) return;

    if (form.discountEnabled && Number(form.discountPrice) >= Number(form.price)) {
      alert("Discount price must be less than price");
      return;
    }

    setProducts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: form.name,
        price: Number(form.price),
        discountEnabled: form.discountEnabled,
        discountPrice: form.discountEnabled ? Number(form.discountPrice) : null,
        stock: Number(form.stock),
        description: form.description,
        image: form.imagePreview,
      },
    ]);

    setForm(INITIAL_FORM);
  };

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
    setMode(null);
  };

  useEffect(() => {
    return () => {
      if (form.imagePreview) URL.revokeObjectURL(form.imagePreview);
    };
  }, [form.imagePreview]);

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Furniture Products</h2>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white rounded-2xl shadow-xl p-8 mb-12 transition-all hover:shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="input rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3"
            placeholder="Product Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="input rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3"
            type="number"
            placeholder="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="discountEnabled"
              checked={form.discountEnabled}
              onChange={handleChange}
              className="w-5 h-5 accent-indigo-500"
            />
            <span className="text-sm font-medium text-gray-700">Enable Discount</span>
          </div>

          {form.discountEnabled && (
            <input
              className="input rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3"
              type="number"
              placeholder="Discount Price"
              name="discountPrice"
              value={form.discountPrice}
              onChange={handleChange}
            />
          )}

          <input
            className="input rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3"
            type="number"
            placeholder="Stock"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          className="input mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3 w-full resize-none"
          rows={3}
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="mt-4 w-full"
        />

        {form.imagePreview && (
          <img
            src={form.imagePreview}
            alt="Preview"
            className="w-32 h-32 mt-4 rounded-xl object-cover border border-gray-200 shadow-sm"
          />
        )}

        <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl flex justify-center items-center gap-3 transition-all shadow-md hover:shadow-lg">
          <Plus size={18} /> Add Product
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-600 uppercase">
              <th className="p-4 rounded-tl-2xl">Product</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Stock</th>
              <th className="p-4 text-right rounded-tr-2xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-400">
                  No products added
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50 transition-all">
                  <td className="p-4 flex items-center gap-3">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-14 h-14 rounded-xl object-cover border border-gray-200"
                      />
                    ) : (
                      <div className="w-14 h-14 bg-gray-200 rounded-xl" />
                    )}
                    <div>
                      <p className="font-medium text-gray-800">{p.name}</p>
                      <p className="text-xs text-gray-400">Stock: {p.stock}</p>
                    </div>
                  </td>
                  <td className="text-gray-700 font-medium">${p.price}</td>
                  <td>
                    {p.discountEnabled ? (
                      <span className="text-green-600 font-medium">${p.discountPrice}</span>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="text-gray-700">{p.stock}</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="icon-btn bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
                        onClick={() => {
                          setSelectedProduct(p);
                          setMode("view");
                        }}
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        className="icon-btn bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-lg transition"
                        onClick={() => {
                          setSelectedProduct(p);
                          setMode("edit");
                        }}
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        className="icon-btn bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
                        onClick={() => {
                          setSelectedProduct(p);
                          setMode("delete");
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {mode === "view" && selectedProduct && (
        <Modal title="Product Details" onClose={() => setMode(null)}>
          {selectedProduct.image && (
            <img
              src={selectedProduct.image}
              className="w-full h-56 object-cover rounded-xl mb-4 border border-gray-200"
            />
          )}
          <p className="text-gray-800 font-semibold"><b>Name:</b> {selectedProduct.name}</p>
          <p className="text-gray-800 font-semibold"><b>Price:</b> ${selectedProduct.price}</p>
          {selectedProduct.discountEnabled && (
            <p className="text-green-600 font-semibold">
              <b>Discount:</b> ${selectedProduct.discountPrice}
            </p>
          )}
          <p className="text-gray-800 font-semibold"><b>Stock:</b> {selectedProduct.stock}</p>
          <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
        </Modal>
      )}

      {/* Edit Modal */}
      {mode === "edit" && selectedProduct && (
        <Modal title="Edit Product" onClose={() => setMode(null)}>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setProducts((prev) =>
                prev.map((p) => (p.id === selectedProduct.id ? selectedProduct : p))
              );
              setMode(null);
            }}
          >
            <input
              className="input rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3 w-full"
              value={selectedProduct.name}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
            />
            <input
              type="number"
              className="input rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3 w-full"
              value={selectedProduct.price}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, price: Number(e.target.value) })}
            />
            <input
              type="number"
              className="input rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3 w-full"
              value={selectedProduct.stock}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, stock: Number(e.target.value) })}
            />
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
              Save Changes
            </button>
          </form>
        </Modal>
      )}

      {/* Delete Modal */}
      {mode === "delete" && selectedProduct && (
        <Modal title="Delete Product" onClose={() => setMode(null)}>
          <p className="mb-4 text-gray-700">
            Delete <b>{selectedProduct.name}</b>?
          </p>
          <div className="flex gap-3">
            <button
              className="flex-1 border border-gray-300 rounded-xl py-2 hover:bg-gray-50 transition"
              onClick={() => setMode(null)}
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl py-2 transition"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FurnitureProducts;
