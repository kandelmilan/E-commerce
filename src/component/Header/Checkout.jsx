import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearCart } from "../../redux/Reducers/cartSlice";
import { FaCheckCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.item || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }




    toast.success(
      <div className="flex items-center gap-2">
        <FaCheckCircle /> Order placed successfully!
      </div>,
      { autoClose: 3000 }
    );


    dispatch(clearCart());


    setTimeout(() => navigate("/orderConform"), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ToastContainer />
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

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded mt-2"
          >
            Checkout
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white shadow rounded-lg p-2"
              >
                <span>{item.title} x {item.quantity}</span>
                <span>${(item.discountPrice * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;