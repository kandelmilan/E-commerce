import React, { Component } from 'react'
import Slider from "./Slider"

function Home() {
  return (
     <div className='container '>
      <Slider />
{/* 
 <div className='text-center my-8'>
        <div>
          <h3 className='text-2xl font-semibold my-8 text-primary'>Latest Products</h3>
          <ul className='flex justify-center gap-8 text-primary font-semibold'>
            <li className='text-secondary underline'>New Arivals</li>
            <li>Best Seller</li>
            <li>Featured </li>
            <li>Special Offer </li>
          </ul>
        </div>

 <div className="grid justify-items-center text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {latestProducts.map((el, i) => (
            <ProductCard key={i} data={el} />
          ))}
        </div> 
    </div> */}
    </div>


  )
}

export default Home
