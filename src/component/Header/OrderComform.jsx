import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OrderConfirm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="flex justify-center"
        >
          <FaCheckCircle className="text-green-500 drop-shadow-lg" size={80} />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold mt-4 text-gray-800">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
           Thank you for your purchase. <br />
          Your order has been placed successfully.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md hover:scale-105 transform transition"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-700 font-semibold shadow-sm hover:bg-gray-100 hover:scale-105 transform transition"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirm;
