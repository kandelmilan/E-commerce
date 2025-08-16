import React from 'react';
import { showcaseProducts, TrendingProduct } from '../../../assets/mockdata';
import showcase from "../../../assets/image/showcase.png"
import showcase1 from "../../../assets/image/showcase1.png"

const ProductPage = () => {
  return (
    
    <div className="bg-gray-50 min-h-screen px-4">
        {/* ======= Trending Products ======= */}
      <h1 className="text-primary text-[42px] font-[700] text-center mt-10">Trending Product</h1>
      <section className="grid justify-items-center mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {TrendingProduct.map((el, i) => (
          <div
            key={i}
            className="w-full max-w-[250px] bg-white text-center border border-gray-100 rounded-xl shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={el.image}
              alt={el.name}
              className="w-full h-[200px] object-contain p-4"
            />
            <div className="pb-6">
              <h3 className="text-[16px] font-medium text-indigo-900">{el.name}</h3>
              <div className="flex justify-center items-center gap-3 mt-2">
                <span className="text-gray-400 line-through text-sm">${el.actualPrice}</span>
                <span className="text-[#03045E] font-bold text-lg">${el.discountPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* ======= Promo and Executive Products ======= */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 py-10">
        {/* Left Promo */}
        <div className="bg-[#FFEFF4] p-6 rounded-lg w-full lg:w-1/3 flex flex-col justify-between items-start">
          <h2 className="text-[24px] font-bold text-[#03045E]">23% off in all products</h2>
          <a href="#" className="text-pink-600 mt-2 font-semibold">Shop Now</a>
          <img src={showcase} alt="clock" className="mt-6 w-[213px] h-[207px] object-contain " />
        </div>

        {/* Center Promo */}
        <div className="bg-[#EBECFD] p-6 rounded-lg w-full lg:w-1/3 flex flex-col justify-between items-start">
          <h2 className="text-[24px] font-bold text-[#03045E]">23% off in all products</h2>
          <a href="#" className="text-pink-600 mt-2 font-semibold">View Collection</a>
          <img src={showcase1} alt="furniture" className="mt-6" />
        </div>

        {/* Product List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {showcaseProducts.map(product => (
                <div
                key={product.id}
                className="flex items-center gap-4 p-4 bg-white rounded-md shadow-sm hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                >
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-[60px] h-[60px] object-contain"
                />
                <div>
                    <p className="text-[#03045E] font-semibold">{product.name}</p>
                    <p className="text-black">${product.price}</p>
                </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
