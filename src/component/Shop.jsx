import React, { useState } from "react";
import { products } from "../assets/mockdata";
import Breadcrum from "./BreadCrum"; 
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { Navigate } from "react-router";




const ProductList = () => {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(4);

  // Filter + Slice
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  const visibleProducts = filtered.slice(0, perPage);

  return (
    <section className="w-full">
      {/* 🟢 Shop Header Section */}
      <div className="bg-[#F6F5FF] w-full h-[200px] sm:h-[240px] lg:h-[280px] flex flex-col justify-center px-6 sm:px-12">
        <h1 className="font-bold text-[24px] sm:text-[28px] lg:text-[35px] px-14 text-primary leading-snug">
          Shop
        </h1>
        <div className="mt-2">
          <Breadcrum />
        </div>
      </div>

      {/* 🟢 Filter Controls */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Ecommerce Accessories & Fashion Items
          </h2>

          <div className="flex gap-4 items-center">
            {/* Per Page */}
            <label className="text-sm text-gray-600">
              Per Page:
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="ml-2 border border-gray-300 rounded-md p-1 text-sm"
              >
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
                <option value={14}>14</option>
                <option value={16}>16</option>
                <option value={18}>18</option>
                <option value={20}>20</option>
              </select>
            </label>

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>
        </div>

        {/* 🟢 Product Cards */}
       <div className="grid md:grid-cols-2 gap-6">
  {visibleProducts.map((item) => (
    <div
      key={item.id}
      className="flex bg-white shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:scale-[1.01] transition duration-300"
    >
      {/* Image */}
      <div className="w-44 h-36 flex-shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="ml-6 flex flex-col justify-between flex-1">
        <div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition">
            {item.title}
          </h3>

          {/* Price */}
          <div className="mt-2 flex items-center gap-3">
            <span className="text-indigo-600 font-bold text-lg">
              ${item.price.toFixed(2)}
            </span>
            <span className="line-through text-gray-400 text-sm">
              ${item.oldPrice.toFixed(2)}
            </span>
          </div>

          {/* Rating */}
          <div className="mt-1 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`${
                  i < item.rating ? "text-yellow-500" : "text-gray-300"
                } text-lg`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            {item.des}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-5 mt-4 text-gray-500">
          <button className="hover:text-indigo-600 text-xl">
            <FaRegHeart />
          </button>
          <button className="hover:text-indigo-600 text-xl" > 
            <BiMessageAltDetail />
          </button>
          <button className="hover:text-indigo-600 text-xl">
            <IoCartOutline />
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

export default ProductList;
