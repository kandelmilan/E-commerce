import React from "react";
import { useParams } from "react-router-dom";
import { latestProducts } from "../../assets/mockdata";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Breadcrum from "../../component/BreadCrum";

// function ProductDetails({ product }) {
//   const dispatch = useDispatch();

function ProductDetails() {
  const { id } = useParams();
  const product = latestProducts.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="text-center text-xl mt-10">Product not found</h2>;

  return (
    

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-2xl shadow-md">
      {/* Product Details */}
         <div className="bg-[#F6F5FF] w-[1235px] h-[280px] conatainer">
            <h1 className="font-bold text-[24px] p-16 sm:text-[28px] lg:text-[35px] text-primary leading-snug">Product Details</h1>
            <Breadcrum/>
        </div>
        <br />
        {/* <div>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Add To Cart
      </button>
    </div> */}

      {/* Left side: Images */}
      <div className="flex gap-4">
        {/* Thumbnail column */}
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

        {/* Main image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Right side: Details */}
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 text-yellow-400">
          {"★★★★★"} <span className="text-gray-500 text-sm">(22)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-gray-900">${product.discountPrice}</span>
          <span className="text-xl line-through text-gray-400">${product.price}</span>
        </div>

        {/* Color */}
        <div>
          <h4 className="font-semibold text-gray-700">Color</h4>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
            porttitor purus, et volutpat sit.
          </p>
        </div>

        {/* Add to Cart */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
          >
            Add To Cart
          </button>
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <AiOutlineHeart size={22} />
          </button>
        </div>

        {/* Categories & Tags */}
        <div className="mt-4 text-sm text-gray-600">
          <p><span className="font-semibold">Categories:</span> Bags, Accessories</p>
          <p><span className="font-semibold">Tags:</span> Black, Leather</p>
        </div>

        {/* Share */}
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
