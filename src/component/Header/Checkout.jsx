// src/pages/Checkout.jsx
import React, { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl grid md:grid-cols-2 gap-6 p-6">
        
        {/* Billing & Payment Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Billing & Payment</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
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

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="border p-2 rounded"
            rows={3}
            required
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={form.cardNumber}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <div className="flex gap-2">
            <input
              type="text"
              name="expiry"
              placeholder="Expiry MM/YY"
              value={form.expiry}
              onChange={handleChange}
              className="border p-2 rounded flex-1"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={form.cvv}
              onChange={handleChange}
              className="border p-2 rounded w-24"
              required
            />
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded mt-2">
            Checkout
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>Product 1</span>
              <span>$120</span>
            </div>
            <div className="flex justify-between">
              <span>Product 2</span>
              <span>$80</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>$200</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
