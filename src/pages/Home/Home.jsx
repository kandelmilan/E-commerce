import React, { Component } from 'react'
import Slider from "../Home/Component/Slider"
import { Link } from 'react-router-dom'
import { latestBlog, latestProducts, TrendingProduct } from "../../assets/mockdata"
import ProductCard from "../ProductPage/ProductCard"
import Slider1 from './Component/Slider1'
import support from '../../assets/image/support.png'
import premium from '../../assets/image/premium.png'
import cashback from '../../assets/image/cashback.png'
import free from '../../assets/image/free.png'
import Sofa from "../../assets/image/Shopa.png"
import Images1 from "../../assets/image/Discount.png"
import ProductPage from './ProductPage'
import background from "../../assets/image/background.png"
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";

function Home() {
  return (
    <div className='container '>
      <Slider />

      <div>
        <Slider1 />
      </div>


      <div className='text-center my-8'>
        <div>
          <h3 className='text-4xl font-semibold my-8 mt-16 text-primary'>Latest Products</h3>
          <ul className='flex justify-center gap-8 text-primary font-semibold'>
            <nav className='flex gap-4'>
              <Link to="">New Arrivals </Link>
              <Link to="/">Best Seller </Link>
              <Link to="/">Featured </Link>
              <Link to="/">Special Offer </Link>
            </nav>
          </ul>
        </div>
      </div>



      <section className="grid justify-items-center mt-5 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-4 ">
        {
          latestProducts.map((el) => {
            return (
              <div key={el.id}>
                <ProductCard data={el} />

              </div>
            )

          })
        }
      </section>


      <section className="container mx-auto">
        <h1 className="text-[32px] text-center text-primary font-bold mt-10">
          What Shopex Offer!
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-10">

          <div className="w-[270px] h-[320px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 hover:border-2 hover:border-primary transition">
            <img src={free} alt="Free Delivery" className="mb-4 w-16 h-16" />
            <h2 className="text-primary font-bold text-lg">24/7 Support</h2>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>


          <div className="w-[270px] h-[320px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 hover:border-2 hover:border-primary transition">
            <img src={cashback} alt="Cashback" className="mb-4 w-16 h-16" />
            <h2 className="text-primary font-bold text-lg">24/7 Support</h2>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>


          <div className="w-[270px] h-[320px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 hover:border-2 hover:border-primary transition">
            <img src={premium} alt="Premium" className="mb-4 w-16 h-16" />
            <h2 className="text-primary font-bold text-lg">24/7 Support</h2>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>


          <div className="w-[270px] h-[320px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 hover:border-2 hover:border-primary transition">
            <img src={support} alt="Support" className="mb-4 w-16 h-16" />
            <h2 className="text-primary font-bold text-lg">24/7 Support</h2>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F0FF] mt-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">

          {/* Image */}
          <img
            src={Sofa}
            alt="Sofa"
            className="w-full max-w-[400px] lg:max-w-[509px] h-auto lg:h-[550px] object-contain"
          />

          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="font-bold text-[24px] sm:text-[28px] lg:text-[35px] text-primary leading-snug">
              Unique Features Of Latest Trending Products
            </h1>

            <ul className="text-[#ACABC3] list-disc pl-6 mt-5 leading-relaxed tracking-wide text-sm sm:text-base">
              <li className="marker:text-red-500 mb-4">
                All frames constructed with hardwood solids and laminates
              </li>
              <li className="marker:text-blue-500 mb-4">
                Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails
              </li>
              <li className="marker:text-green-500 mb-4">
                Arms, backs and seats are structurally reinforced
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mt-6">
              <button className="primary-btn ">
                Add To Cart
              </button>
              <div className="text-primary text-center sm:text-left">
                <h3 className="text-[16px] font-semibold">B&B Italian Sofa</h3>
                <span className="text-[14px]">$32.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {<ProductPage />}


      <section>
        <div className="flex flex-col items-center justify-center mt-10 bg-white px-6">
          {/* Title Section */}
          <h2 className="text-[40px] font-bold text-indigo-900 mb-4">Discount Item</h2>
          <div className="flex gap-4 mb-12 text-sm">
            <a href="#" className="text-pink-600">
              Wood Chair
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-indigo-900 hover:text-pink-600">
              Plastic Chair
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-indigo-900 hover:text-pink-600">
              Sofa Collection
            </a>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
            {/* Left Side */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-indigo-900">
                20% Discount Of All Products
              </h3>
              <h4 className="text-pink-600 font-semibold">Eams Sofa Compact</h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 text-gray-500 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-indigo-900 font-bold">✔</span> Material
                  expose like metals
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-900 font-bold">✔</span> Clear lines
                  and geomatric figures
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-900 font-bold">✔</span> Simple neutral
                  colours
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-900 font-bold">✔</span> Material
                  expose like metals
                </p>
              </div>

              {/* Button */}
              <button className="primary-btn">
                Shop Now
              </button>
            </div>

            {/* Right Side (Image) */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-100 rounded-full scale-125 -z-10"></div>
                <img
                  src={Images1}
                  alt="Chair"
                  className="w-80 object-contain relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center py-10">
        <div
          className="w-[1230px] h-[462px] flex flex-col justify-center items-center shadow-lg bg-cover bg-center text-center px-6"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="text-primary text-3xl md:text-4xl font-bold max-w-2xl leading-snug">
            Get Latest Updates by Subscribing to Our Newsletter
          </h1>
          <button className="primary-btn mt-4">
            Shop Now
          </button>
        </div>
      </section>


      {/* Latest-Blog */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Latest Blog</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {latestBlog.map((data) => (
            <div
              key={data.id}
              className="max-w-sm bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={data.image}
                alt="blog"
                className="w-full h-56 object-cover rounded-md"
              />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <span className="flex items-center gap-1 text-primary">
                  <FaPenFancy /> {data.title}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegCalendarAlt /> {data.Date}
                </span>
              </div>
              <h2 className="mt-2 text-lg font-bold text-[#1D1D4E]">
                {data.subHeading}
              </h2>
              <p className="mt-2 text-gray-500 text-sm">{data.description}</p>
              <a href="#" className="mt-3 inline-block text-sm text-[#1D1D4E] underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>








  )
}

export default Home
