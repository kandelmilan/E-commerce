import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const mockOrders = [
    {
        _id: "ORD123456",
        createdAt: "2024-12-01T10:30:00Z",
        paymentStatus: "PAID",
        total: 3500,
        items: [
            { title: "Wireless Headphones", quantity: 1, price: 2000 },
            { title: "Phone Case", quantity: 1, price: 1500 },
        ],
        shipping: {
            name: "John Doe",
            phone: "9800000000",
            address: "Kathmandu, Nepal",
        },
    },
    {
        _id: "ORD123456",
        createdAt: "2024-12-01T10:30:00Z",
        paymentStatus: "UNPAID",
        total: 3500,
        items: [
            { title: "Wireless Headphones", quantity: 1, price: 2000 },
            { title: "Phone Case", quantity: 1, price: 1500 },
        ],
        shipping: {
            name: "John Doe",
            phone: "9800000000",
            address: "Kathmandu, Nepal",
        },
    },
];

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        setOrders(mockOrders);
    }, [navigate]);

    if (orders.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
                <h2 className="text-4xl font-extrabold text-blue-900 mb-3">
                    No Orders Yet 🛒
                </h2>
                <p className="text-gray-600 max-w-md mb-8">
                    Looks like you haven’t placed any orders yet. Discover products and
                    enjoy seamless shopping.
                </p>
                <Link
                    to="/product"
                    className="px-8 py-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-full shadow-lg hover:scale-105 transition"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
            {/* ===== HERO HEADER ===== */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-5xl font-extrabold tracking-tight">
                        My Orders
                    </h1>
                    <p className="text-blue-200 mt-3">
                        Track your purchases & delivery status
                    </p>
                </div>
            </div>

            {/* ===== ORDERS ===== */}
            <section className="max-w-6xl mx-auto px-4 py-14 space-y-12">
                {orders.map((order) => (
                    <div
                        key={order._id}
                        className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 overflow-hidden hover:shadow-2xl transition"
                    >

                        {/* Header */}
                        <div className="p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                            <div>
                                <p className="text-sm text-gray-500">Order ID</p>
                                <p className="text-lg font-bold text-gray-800">
                                    {order._id}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {new Date(order.createdAt).toDateString()}
                                </p>
                            </div>

                            <span
                                className={`px-6 py-2 text-xs font-bold rounded-full tracking-wide shadow
                  ${order.paymentStatus === "PAID"
                                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                                        : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                                    }`}
                            >
                                {order.paymentStatus}
                            </span>
                        </div>

                        {/* Items */}
                        <div className="px-8 py-6 bg-white/60">
                            <p className="font-semibold text-gray-700 mb-4">
                                Ordered Items
                            </p>
                            <div className="space-y-4">
                                {order.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm"
                                    >
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Quantity: {item.quantity}
                                            </p>
                                        </div>
                                        <p className="font-bold text-indigo-800">
                                            Rs. {item.price * item.quantity}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Delivery */}
                        <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50">
                            <p className="font-semibold text-gray-700 mb-3">
                                Delivery Details
                            </p>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>{order.shipping.name}</p>
                                <p>{order.shipping.phone}</p>
                                <p>{order.shipping.address}</p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                            <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-700">
                                Rs. {order.total}
                            </p>

                            <button
                                onClick={() => navigate(`/order/${order._id}`)}
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-800 to-indigo-800 text-white font-semibold shadow-lg hover:scale-105 transition"
                            >
                                View Order Details →
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MyOrders;
