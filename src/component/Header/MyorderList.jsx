import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return navigate("/login");

        // Example fetch (replace with real API)
        fetch("http://localhost:5000/api/orders/my-orders", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setOrders(data.orders || []))
            .catch(() => setOrders([]));
    }, []);

    return (
        <section className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

            {orders.length === 0 ? (
                <p className="text-gray-500">You haven’t placed any orders yet.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order._id} className="bg-white shadow p-4">
                            {/* Order Header */}
                            <div className="flex justify-between mb-3">
                                <div>
                                    <p className="text-sm font-semibold">
                                        Order ID: {order._id}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {new Date(order.createdAt).toDateString()}
                                    </p>
                                </div>

                                <span className={`
                  text-xs px-3 py-1 rounded
                  ${order.status === "Delivered" && "bg-green-100 text-green-600"}
                  ${order.status === "Pending" && "bg-yellow-100 text-yellow-600"}
                  ${order.status === "Cancelled" && "bg-red-100 text-red-600"}
                `}>
                                    {order.status}
                                </span>
                            </div>

                            {/* Products */}
                            {order.items.map((item) => (
                                <div key={item.id} className="flex gap-3 items-center border-t py-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-14 h-14 object-contain"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{item.title}</p>
                                        <p className="text-xs text-gray-500">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>
                                    <p className="text-sm font-semibold">
                                        Rs. {item.price * item.quantity}
                                    </p>
                                </div>
                            ))}

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-semibold">
                                    Total: Rs. {order.totalAmount}
                                </p>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate(`/order/${order._id}`)}
                                        className="px-3 py-1 text-sm border"
                                    >
                                        View
                                    </button>
                                    <button className="px-3 py-1 text-sm bg-purple-600 text-white">
                                        Buy Again
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default MyOrders;
