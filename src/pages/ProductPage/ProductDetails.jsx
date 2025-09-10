import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { latestProducts } from "../../assets/mockdata";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Breadcrum from "../../component/BreadCrum";
import { addtocart } from "../../redux/Reducers/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../redux/Reducers/wishListSlice";
import Logo from "../../assets/image/Logo.png";

function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = latestProducts.find((p) => p.id === parseInt(id));

  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  const isWished = product ? wishlistItems.some((item) => item.id === product.id) : false;

  const [activeTab, setActiveTab] = useState("description");

  if (!product)
    return <h2 className="text-center text-xl mt-10">Product not found</h2>;

  const handleWishlistToggle = () => {
    if (isWished) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Info" },
    { id: "reviews", label: "Reviews" },
    { id: "video", label: "Video" },
  ];

  return (
    <div>
      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-2xl shadow-md w-full">
        <div className="bg-[#F6F5FF] w-[1235px] h-[280px] ">
          <h1 className="font-bold text-[24px] p-16 pb-3 sm:text-[28px] lg:text-[35px] px-14 text-primary leading-snug">
            Product Details
          </h1>
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
            <span className="text-2xl font-bold text-gray-900">
              ${product.discountPrice}
            </span>
            <span className="text-xl line-through text-gray-400">
              ${product.price}
            </span>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">Color</h4>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
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
              {isWished ? (
                <AiFillHeart size={22} className="text-red-500" />
              ) : (
                <AiOutlineHeart size={22} />
              )}
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <span className="font-semibold">Categories:</span> Bags,
              Accessories
            </p>
            <p>
              <span className="font-semibold">Tags:</span> Black, Leather
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="font-semibold">Share</span>
            <FaFacebookF className="cursor-pointer text-blue-600" />
            <FaTwitter className="cursor-pointer text-sky-500" />
            <FaPinterestP className="cursor-pointer text-red-600" />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 p-6 bg-gray-50 rounded-xl justify-center container">
        <div className="flex gap-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-2 text-lg font-medium ${
                activeTab === tab.id
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600 hover:text-blue-800"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 text-gray-700">
          {activeTab === "description" && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Varius tempor.</h2>
              <p className="mb-4 text-sm leading-relaxed">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes,
                mauris varius ac est bibendum.
              </p>
              <h3 className="font-semibold mb-2">More details</h3>
              <ul className="list-none space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700">→</span> High quality leather
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700">→</span> Comfortable fit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700">→</span> Stylish & durable
                </li>
              </ul>
            </div>
          )}

          {activeTab === "additional" && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Additional Info</h2>
              <p className="text-sm">Material: 100% Leather</p>
              <p className="text-sm">Dimensions: 40 x 30 x 10 cm</p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
              <p className="text-sm">⭐ 4.5/5 based on 12 reviews</p>
              <div className="mt-4 space-y-3">
                <div className="border p-3 rounded-lg">
                  <p className="font-semibold">John D.</p>
                  <p className="text-sm">Great product! Highly recommend.</p>
                </div>
                <div className="border p-3 rounded-lg">
                  <p className="font-semibold">Sarah K.</p>
                  <p className="text-sm">
                    Very comfortable and looks amazing with my outfits.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "video" && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Product Video</h2>
             
            </div>
          )}
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex m-10 justify-center">
        <img src={Logo} alt="" />
      </div>

      {/* Related Product (placeholder) */}
      <div>{/* Add related products here later */}</div>
    </div>
  );
}

export default ProductDetails;
