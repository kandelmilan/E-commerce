import React from 'react'
import Breadcrum from './BreadCrum'

function Shop() {
  return (
    <section className="container">
      <div className="bg-[#F6F5FF] w-[1235px] h-[280px] ">
        <h1 className="font-bold text-[24px] p-16 pb-3 sm:text-[28px] lg:text-[35px] text-primary leading-snug">Shop</h1>
        <Breadcrum />
      </div>
    </section>
  )
}

export default Shop
