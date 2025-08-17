// import React from 'react'
// import { useLocation, useParams } from 'react-router'
// import BreadCrumb from './BreadCrum'

// function Details() {
//   const params = useParams()
//   const location = useLocation()

//   console.log(params)
//   const { id } = params
//   console.log(id)
//   const breadCrub = {
//     title: "DetaProduct Details",
//     link: [{ title: "Home", path: "/" },
//     { title: "Product", path: "/product" },],
//     active: id

//   }
//   return (

//     <div>
//       <BreadCrumb data={breadCrub} />
//     </div>
//   )
// }

// export default Details

import React from 'react'
import AppBreadcrumbs from '../component/BreadCrum';

function productDetails() {
  return (
    <div className='#'>


        {/* Product details header  */}
        <div className='bg-backgroundlite container'>
            <h1 className='font-bold text-[50px] md:py-8 lg:py-8 md:px-15 lg:px-15'>
                Product Details
            </h1>
             <AppBreadcrumbs/>
             <h1 className='md:py-2 lg:py-2 md:px-15 lg:px-15 bg-backgroundlite'>

             </h1>
        </div>
        

    </div>
  )
}

export default productDetails