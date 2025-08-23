import React from 'react'
import Breadcrum from './BreadCrum'

function Contact() {
    return (
        <section className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white ">

                <div className="bg-[#F6F5FF] w-[1235px] h-[280px] conatainer">
                    <h1 className="font-bold text-[24px] p-16 sm:text-[28px] lg:text-[35px] text-primary leading-snug">Contact</h1>
                    <Breadcrum />
                </div>
            </div>
            <div className='container'>
                <div>
                    <h2>Information About us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
                        porro ipsam quasi, culpa tempora velit aliquam optio quam!
                        Perferendis, doloremque voluptatum!</p>
                </div>
                <div>
                    <h2>Contact Way</h2>
                    <ul>
                        <li><div>
                            Tel: 877-67-88-99
                            E-Mail: shop@store.com
                        </div></li>
                        <li className='flex flex-col mx-109'>
                            <div>
                                Support Forum
                                </div>
                                <div>
                                For over 24hr
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Contact
