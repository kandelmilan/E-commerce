
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { latestProducts } from "../../assets/mockdata";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Breadcrum from "../../component/BreadCrum";
import { addtocart } from "../../redux/Reducers/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../redux/Reducers/wishListSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = latestProducts.find((p) => p.id === parseInt(id));

  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  const isWished = product ? wishlistItems.some((item) => item.id === product.id) : false;

  if (!product) return <h2 className="text-center text-xl mt-10">Product not found</h2>;

  const handleWishlistToggle = () => {
    if (isWished) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-2xl shadow-md w-full">
   <div className="bg-[#F6F5FF] w-[1235px] h-[280px] ">
        <h1 className="font-bold text-[24px] p-16 pb-3 sm:text-[28px] lg:text-[35px] px-14 text-primary leading-snug">Product Details</h1>
        <Breadcrum />
      </div>

      <br />

      <div className="flex gap-4">
        <div className="flex flex-col gap-4 w-24">
          {product.thumbnails?.map((thumb, idx) => (
            <img
              key={idx}
              src={thumb}
              alt={`thumb-${idx}`}
              className="w-full h-24 object-cover rounded-lg cursor-pointer border hover:border-blue-500"
            />
          ))}
        </div>

        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

        <div className="flex items-center gap-2 text-yellow-400">
          {"★★★★★"} <span className="text-gray-500 text-sm">(22)</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-gray-900">${product.discountPrice}</span>
          <span className="text-xl line-through text-gray-400">${product.price}</span>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">Color</h4>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
            onClick={() => dispatch(addtocart(product))}
          >
            Add To Cart
          </button>

          {/* Wishlist Button */}
          <button
            className="p-2 rounded-full border hover:bg-gray-100"
            onClick={handleWishlistToggle}
          >
            {isWished ? <AiFillHeart size={22} className="text-red-500" /> : <AiOutlineHeart size={22} />}
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p><span className="font-semibold">Categories:</span> Bags, Accessories</p>
          <p><span className="font-semibold">Tags:</span> Black, Leather</p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <span className="font-semibold">Share</span>
          <FaFacebookF className="cursor-pointer text-blue-600" />
          <FaTwitter className="cursor-pointer text-sky-500" />
          <FaPinterestP className="cursor-pointer text-red-600" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

