import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderConfirm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <FaCheckCircle className="text-green-600 mx-auto mb-4" size={60} />
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
