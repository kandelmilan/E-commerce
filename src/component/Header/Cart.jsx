import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../../redux/Reducers/cartSlice";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";  

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.item || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDecrease = (item) => {
    item.quantity > 1
      ? dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
      : dispatch(removeFromCart(item.id));
  };

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Product removed from cart"); 
  };

  const handleBuyNow = (item) => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    navigate("/checkout", {
      state: {
        buyNowItem: {
          id: item.id,
          title: item.title,
          price: item.price,
          chairimage: item.chairimage || item.image,
          quantity: item.quantity,
        },
      },
    });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400 gap-3">
          <ShoppingCart size={70} />
          <h3 className="text-xl font-semibold">Your cart is empty</h3>
          <p>Start shopping and add your favorite products</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white shadow hover:shadow-lg transition p-4"
              >
                {/* Delete */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="p-1 bg-white rounded-full shadow hover:bg-red-100 text-red-500"
                  >
                    <BsTrash size={14} />
                  </button>
                </div>

                {/* Image */}
                <div className="w-full h-32 sm:h-36 md:h-40 flex items-center justify-center mb-3 overflow-hidden">
                  <img
                    src={item.chairimage || item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-sm font-semibold line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Rs. {item.price}
                </p>

                <div className="flex items-center justify-between border-t mt-3 pt-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="p-1 bg-gray-100 hover:bg-gray-200"
                    >
                      <IoMdRemove size={14} />
                    </button>

                    <span className="text-sm font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleIncrease(item)}
                      className="p-1 bg-gray-100 hover:bg-gray-200"
                    >
                      <IoMdAdd size={14} />
                    </button>
                  </div>

                  <span className="text-sm font-semibold">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => handleBuyNow(item)}
                  className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white py-1.5 text-sm"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white shadow flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-lg font-semibold">
              Total:{" "}
              <span className="text-purple-600">
                Rs. {totalPrice.toFixed(2)}
              </span>
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => dispatch(clearCart())}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
