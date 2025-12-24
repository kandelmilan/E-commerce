import React from "react";
import { useLocation, useNavigate } from "react-router";

const Payment = () => {
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const method = query.get("method");

    const handleSuccess = () => {
        navigate("/orderConform");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    {method?.toUpperCase()} Payment
                </h2>

                {method === "card" ? (
                    <form className="space-y-3">
                        <input placeholder="Card Number" className="border p-2 w-full rounded" />
                        <input placeholder="Expiry MM/YY" className="border p-2 w-full rounded" />
                        <input placeholder="CVV" className="border p-2 w-full rounded" />
                        <button
                            type="button"
                            onClick={handleSuccess}
                            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
                        >
                            Pay with Card
                        </button>
                    </form>
                ) : (
                    <button
                        onClick={handleSuccess}
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:opacity-90 transition"
                    >
                        Pay with {method?.toUpperCase()}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Payment;
