import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router';

function ProductCard({ data }) {
    const navigate= useNavigate();
    return (
        <div className='h-[266px] w-[360px] my-3 cursor-pointer hover:scale-[1.05] ' onClick={() =>navigate(`/products/${data.id}`)}> 
            <div className=' bg-[#F7F7F7] h-[230px] flex items-center justify-center group relative '>
                <img src={data.image} className="h-[200px] aspect-square object-fit" alt="" />
                <div className='hidden group-hover:flex flex-col gap-5 absolute  left-5 '>
                    <div className='hover:bg-[#EEEFFB] p-2 rounded-full'><BsCart3 className='text-2xl' onClick={(e)=>e.stopPropagation()} /> </div>
                    <div className='hover:bg-[#EEEFFB] p-2 rounded-full'><CiHeart className='text-2xl'   onClick={(e)=>e.stopPropagation()}/> </div>

                </div>
            </div>

            <div className='flex justify-between items-center py-2  font-semibold '>
                <div>
                    <p className='text-primary'>{data.title}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='text-primary'>${data.discountPrice}</p>
                    <p className='text-red-500 line-through'>$ {data.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard