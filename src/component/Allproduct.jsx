import React, { useState } from "react";
import { latestProducts } from "../assets/mockdata";
import Breadcrum from "./BreadCrum"; 
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";        // ✅ import dispatch
import { addtocart } from "../redux/Reducers/cartSlice";   // ✅ import action

const Allproduct = () => {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(6);
  const navigate = useNavigate();
  const dispatch = useDispatch();                 // ✅ get dispatch function

  const filtered = latestProducts.filter((p) =>
    p.title.toUpperCase().includes(search.toUpperCase())
  );
  const visibleProducts = filtered.slice(0, perPage);

  const handleAddToCart = (item) => {
    dispatch(addtocart(item));                     // ✅ dispatch addToCart
  };

  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 w-full h-[220px] flex flex-col justify-center px-6 sm:px-12">
        <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-[38px] px-14 text-purple-700 leading-snug">
          Product
        </h1>
        <div className="mt-2">
          <Breadcrum />
        </div>
      </div>

      {/* Filter Controls */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
          <h2 className="text-xl font-semibold text-gray-800">
            Ecommerce Accessories & Fashion Items
          </h2>

          <div className="flex gap-4 items-center">
            {/* Per Page */}
            <label className="text-sm text-gray-600 flex items-center gap-2">
              Per Page:
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded-md p-1 text-sm"
              >
                {[2,4,6,8,10,12,14,16,18,20].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                -{Math.round(((item.price - item.discountPrice)/item.price)*100)}%
              </div>

              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-purple-600 font-bold text-lg">
                      ${item.discountPrice.toFixed(2)}
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    High-quality product to enhance your lifestyle.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-4 text-gray-500 justify-between items-center">
                  <div className="flex gap-3">
                    <button className="hover:text-purple-600 text-xl p-2 rounded-full hover:bg-purple-50 transition">
                      <FaRegHeart />
                    </button>
                    <button
                      className="hover:text-purple-600 text-xl p-2 rounded-full hover:bg-purple-50 transition"
                      onClick={() => navigate(`/products/${item.id}`)}
                    >
                      <BiMessageAltDetail />
                    </button>
                  </div>
                  <button
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-1 transition"
                    onClick={() => handleAddToCart(item)} // ✅ add to cart
                  >
                    <IoCartOutline />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Allproduct;
