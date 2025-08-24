import React from 'react'
import Breadcrum from './BreadCrum'
import contact from "../assets/image/contact.png"
function Contact() {
  return (
    <section className="container">
      <div className="bg-[#F6F5FF] w-[1235px] h-[280px] ">
        <h1 className="font-bold text-[24px] p-16 pb-3 sm:text-[28px] lg:text-[35px] text-primary leading-snug">Contact</h1>
        <Breadcrum />
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-20 py-12">
        {/* Left - Info About */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Information About us
          </h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>

          {/* Social dots */}
          <div className="flex space-x-3">
            <span className="w-4 h-4 bg-purple-600 rounded-full"></span>
            <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
            <span className="w-4 h-4 bg-cyan-400 rounded-full"></span>
          </div>
        </div>

        {/* Right - Contact Way */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Way</h3>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <span className="w-6 h-6 bg-purple-600 rounded-full"></span>
              <span>
                Tel: 877-67-88-99 <br /> E-Mail: shop@store.com
              </span>
            </p>
            <p className="flex items-center gap-3">
              <span className="w-6 h-6 bg-orange-400 rounded-full"></span>
              <span>
                20 Margaret st, London <br /> Great Britain, 3NM98-LK
              </span>
            </p>
            <p className="flex items-center gap-3">
              <span className="w-6 h-6 bg-pink-500 rounded-full"></span>
              <span>Support Forum For over 24hr</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="w-6 h-6 bg-green-500 rounded-full"></span>
              <span>Free standard shipping on all orders</span>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-20 py-16 items-center">
        {/* Left - Form */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Type Your Message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Right - Illustration */}
        <div className="flex justify-center">
          <img
            src={contact} // <-- replace with your illustration path
            alt="Contact Illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
