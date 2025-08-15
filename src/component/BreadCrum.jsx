import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router';
function BreadCrumb({ data }) {
    return (
        <div className=' bg-amber-100'>
            <div className='flex flex-col gap-5  container py-5 '>
                <p className='text-primary font-bold'>{data.title}</p>
                <div className='flex'>
                    {
                        data.link.map((el, index) => {
                            return <div key={index} className=''>
                                <Link to={el.path} className='flex gap-2 items-center'>{el.title}
                                    <FaAngleRight />
                                </Link>
                            </div>
                        })
                    }
                    <p className='text-secondary'>{data.active}</p>
                </div>
            </div>

        </div>
    )
}

export default BreadCrumb