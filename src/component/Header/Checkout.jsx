import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import {
  FaMoneyBillWave,
  FaUniversity,
  FaMobileAlt,
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.item || []);
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");

  const shippingCharge = 5;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  const totalPrice = subtotal + shippingCharge;

  const orderId = `ORD-${Date.now()}`;
  const orderDate = new Date().toLocaleDateString();

  const handleCancel = () => navigate("/cart");

  const handlePayment = () => {
    if (!selectedPayment) {
      toast.error("Please select a payment method");
      return;
    }
    navigate(`/payment?method=${selectedPayment}`);
  };

  const paymentMethods = [
    {
      id: "esewa",
      name: "eSewa",
      icon: <FaMobileAlt />,
      color: "bg-green-600",
      desc: "Pay using your eSewa wallet",
    },
    {
      id: "khalti",
      name: "Khalti",
      icon: <FaMobileAlt />,
      color: "bg-purple-600",
      desc: "Fast and secure Khalti payment",
    },
    {
      id: "banking",
      name: "Net Banking",
      icon: <FaUniversity />,
      color: "bg-blue-600",
      desc: "Pay directly from your bank",
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: <FaMoneyBillWave />,
      color: "bg-gray-800",
      desc: "Pay when your order arrives",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 flex justify-center">
      <ToastContainer />

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ORDER DETAILS */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Order Details
          </h2>

          {/* Meta Info */}
          <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Order ID</span>
              <span className="font-medium">{orderId}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Order Date</span>
              <span>{orderDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Payment Status</span>
              <span className="text-orange-600 font-semibold">Pending</span>
            </div>
          </div>

          {/* Products */}
          <div className="bg-white rounded-2xl border p-4 space-y-4 max-h-[420px] overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center p-3 rounded-xl hover:bg-gray-50 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg border"
                />

                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ${item.discountPrice.toFixed(2)} × {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-gray-800">
                    ${(item.discountPrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="bg-gray-50 rounded-2xl p-5 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping Charge</span>
              <span className="font-medium">${shippingCharge.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/*  RIGHT: SHIPPING & PAYMENT  */}
        <div className="flex flex-col gap-6">

          {/* Shipping Address */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              Shipping Address
            </h3>

            <input

              placeholder="Full Name"
              className="w-full border p-3 rounded-lg bg-gray-100 text-sm"
            />
            <input

              placeholder="Email Address"
              className="w-full border p-3 rounded-lg bg-gray-100 text-sm"
            />
            <input

              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg bg-gray-100 text-sm"
            />
            <textarea

              rows="3"
              placeholder="Full Address"
              className="w-full border p-3 rounded-lg bg-gray-100 text-sm"
            />
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Payment Method
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition
                    ${selectedPayment === method.id
                      ? "ring-2 ring-purple-600 bg-purple-50"
                      : "border hover:shadow-md"
                    }`}
                >
                  <div
                    className={`w-11 h-11 flex items-center justify-center rounded-full text-white ${method.color}`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{method.name}</p>
                    <p className="text-sm text-gray-500">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCancel}
              className="flex-1 border border-gray-400 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              className="flex-1 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
