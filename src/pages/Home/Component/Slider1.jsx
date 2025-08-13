import React from "react";
import Slider from "react-slick";
import { ProductData } from "../../../assets/mockdata";


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 4000
  };
  return (
   <div className="container mx-auto px-4">
      <h2 className="text-[34px] font-bold mb-8 mt-10  text-primary text-center">
        Products
      </h2>

      <Slider {...settings}>
        {ProductData.map((el, i) => (
          <div key={i} className="px-4"> {/* wider gap between cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform w-[370px] mx-auto">
              <img
                src={el.img}
                alt={el.name}
                className="h-[260px] w-[370]  object-cover mx-auto"
              />
              <h1 className="text-lg font-medium text-secondary text-center p-4">
                {el.name}
              </h1>
              <h3 className="text-md font-medium text-center ">{el.code}</h3>
              <span className="text-sm font-medium block text-center pb-2">{el.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );
}

 export default SimpleSlider;

// import React from "react";
// import Slider from "react-slick";



// function Slider1() {
//   const settings = {
//     dots: true,           // show dots under slider
//     infinite: true,       // loop infinitely
//     speed: 500,           // animation speed
//     slidesToShow: 4,      // show 4 at a time
//     slidesToScroll: 1,    // scroll 1 at a time
//     responsive: [
//       {
//         breakpoint: 1024, // For tablets/laptops
//         settings: { slidesToShow: 3 }
//       },
//       {
//         breakpoint: 768,  // For mobile
//         settings: { slidesToShow: 2 }
//       },
//       {
//         breakpoint: 480,  // For small mobile
//         settings: { slidesToShow: 1 }
//       }
//     ]
//   };


//   return (
    // <div className="p-4">
    //   <h2 className="text-xl font-bold mb-4">Products</h2>
    //   <Slider {...settings}>
    //     {ProductDatatData.map((el,i) => (

    //       <div key={i} >
    //         <div className="border rounded-lg p-4 text-center">
    //           <img src={el.img} alt="" className="mx-auto mb-2" />
    //           <h3 className="font-medium">{el.name}</h3>
    //         </div>
    //       </div>

    //     ))}
    //   </Slider>
    // </div>
//   );
// }

// export default Slider1;
