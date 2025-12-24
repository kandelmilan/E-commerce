import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaMoneyBillWave, FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";

const PaymentOption = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");

    const paymentMethods = [
        {
            id: "esewa",
            name: "eSewa",
            icon: <FaMobileAlt size={24} className="text-white" />,
            color: "bg-green-600",
            description: "Pay quickly using your eSewa wallet",
        },
        {
            id: "khalti",
            name: "Khalti",
            icon: <FaMobileAlt size={24} className="text-white" />,
            color: "bg-purple-600",
            description: "Pay using Khalti wallet easily",
        },
        {
            id: "banking",
            name: "Net Banking",
            icon: <FaUniversity size={24} className="text-white" />,
            color: "bg-blue-600",
            description: "Pay directly from your bank account",
        },
        {
            id: "card",
            name: "Credit/Debit/Visa Card",
            icon: <FaCreditCard size={24} className="text-white" />,
            color: "bg-black",
            description: "Secure payment using your card",
        },
        {
            id: "cod",
            name: "Cash on Delivery",
            icon: <FaMoneyBillWave size={24} className="text-white" />,
            color: "bg-gray-800",
            description: "Pay when your order is delivered",
        },
    ];

    const handleNext = () => {
        if (!selected) return;
        navigate(`/payment?method=${selected}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Choose Payment Method
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            onClick={() => setSelected(method.id)}
                            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-shadow hover:shadow-lg
              ${selected === method.id ? "ring-2 ring-purple-600 shadow-lg" : "shadow-sm"}`}
                        >
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-full ${method.color}`}
                            >
                                {method.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg">{method.name}</h3>
                                <p className="text-gray-600 text-sm">{method.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex-1 py-3 border border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!selected}
                        className={`flex-1 py-3 rounded-xl text-white ${selected
                                ? "bg-purple-600 hover:bg-purple-700"
                                : "bg-purple-300 cursor-not-allowed"
                            } transition`}
                    >
                        Proceed to Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentOption;
