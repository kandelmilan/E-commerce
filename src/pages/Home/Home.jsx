import React, { Component } from 'react'
import Slider from "../Home/Component/Slider"
import { Link } from 'react-router-dom'
import { latestProducts } from "../../assets/mockdata"
import ProductCard from "../ProductPage/ProductCard"
import Slider1 from './Component/Slider1'
import support from '../../assets/image/support.png'
import premium from '../../assets/image/premium.png'
import cashback from '../../assets/image/cashback.png'
import free from '../../assets/image/free.png'
import Sofa from "../../assets/image/Shopa.png"
import ProductPage from './Component/ProductPage'



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



    {<ProductPage/>}







    </div>








  )
}

export default Home
