import React from 'react'
import Breadcrum from './BreadCrum'

function Blog() {
  return (
    <section className='container'>
      {/* head part  */}
      <div className="bg-[#F6F5FF] w-[1235px] h-[280px] ">
        <h1 className="font-bold text-[24px] p-16 pb-3 sm:text-[28px] lg:text-[35px] px-14 text-primary leading-snug">Blogs pages</h1>
        <Breadcrum />
      </div>

      <div className='mt-12'>
        <div className='flex gap-80'>

            <div className='mx-20'>
              <h3>Ecommerce Acceories & Fashion item</h3>
              <p>About 9,620 results (0.62 seconds)</p>
            </div>

            <div>
              <label htmlFor="PerPage">Per Page:</label>
              <input type="number" min="1" className='w-10 border-1' />

              <label htmlFor="Sort"> Sort By:</label>
              <input type="radio" />
            </div>
        </div>
      </div>

    </section>
  )
}

export default Blog
