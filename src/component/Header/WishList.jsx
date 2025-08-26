import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../../redux/Reducers/wishListSlice";
import { addtocart } from "../../redux/Reducers/cartSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5"; 

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  const dispatch = useDispatch();

  const handleRemove = (id) => dispatch(removeFromWishlist(id));
  const handleClearWishlist = () => dispatch(clearWishlist());
  const handleAddToCart = (item) => dispatch(addtocart(item));

  return (
    <section className="p-6 flex flex-col">
      <h2 className="text-2xl font-semibold mb-6">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-4 text-gray-500">
          <AiOutlineHeart size={80} className="text-gray-300" />
          <h3 className="text-xl font-semibold">Your wishlist is empty</h3>
          <p className="text-center text-gray-400 max-w-md">
            Add your favorite products to your wishlist to see them here.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow rounded-lg p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.discountPrice.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded transition"
                  >
                    <IoCartOutline /> 
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 px-3 py-1 rounded border border-red-500 hover:bg-red-100 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleClearWishlist}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Clear Wishlist
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Wishlist;
