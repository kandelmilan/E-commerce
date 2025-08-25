import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { addtocart, removeFromCart, updateQuantity, clearCart } from "../../redux/Reducers/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai"; // beautiful cart icon

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleClearCart = () => dispatch(clearCart());

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  return (
    <section className="p-6 flex flex-col">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-4 text-gray-500">
          <AiOutlineShoppingCart size={80} className="text-gray-300" />
          <h3 className="text-xl font-semibold">Your cart is empty</h3>
          <p className="text-center text-gray-400">
            Looks like you haven't added any items yet. Start shopping and add your favorite products!
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow rounded-lg p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4 flex flex-col">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.discountPrice.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                    >
                      <IoMdRemove />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                    >
                      <IoMdAdd />
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      <BsTrash />
                    </button>
                  </div>
                </div>
                <div className="font-semibold">${(item.discountPrice * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Grand Total: ${totalPrice.toFixed(2)}</p>
            <div className="flex gap-2">
              <button
                onClick={handleClearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
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
