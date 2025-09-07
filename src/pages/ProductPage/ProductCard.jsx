import React from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router";

function ProductCard({ data }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-[360px] h-[300px] cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] bg-white"
      onClick={() => navigate(`/products/${data.id}`)}
    >
      {/* Image Section */}
      <div className="relative group h-[230px] bg-[#F7F7F7] flex items-center justify-center">
        <img
          src={data.image}
          className="h-[200px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          alt={data.title}
        />

        {/* Hover Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 rounded-full bg-white shadow hover:bg-[#EEEFFB] transition">
            <BiSolidMessageDetail className="text-2xl text-gray-600" />
          </div>
          <div className="p-2 rounded-full bg-white shadow hover:bg-[#EEEFFB] transition">
            <CiHeart className="text-2xl text-gray-600" />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex justify-between items-center px-3 py-2">
        <p className="text-gray-800 font-semibold text-base truncate">
          {data.title}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-primary font-bold">${data.discountPrice}</p>
          <p className="text-sm text-red-500 line-through">${data.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
