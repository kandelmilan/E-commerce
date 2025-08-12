import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { BiHeartSquare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <div>
      <header className="">
        {/* <div className="bg-background hidden md:block">
          <div className="container flex justify-between text-white items-center py-2"> */}
           <div className="bg-background">
      <div className="container px-4 py-2 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 cursor-pointer">
                <CiMail />
                <a href="mailto:tradig@gmail.com">
                  <p>tradig@gmail.com</p>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlinePhoneInTalk className="cursor-pointer" />
                <a href="tel:+1234567890">
                  {" "}
                  <p>+977 984514548554</p>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <p>English</p>
                  <FaChevronDown />
                </div>
                <div className="flex items-center gap-2">
                  <p>USD</p>
                  <FaChevronDown />
                </div>

                <div className="flex items-center gap-2">
                  <p>Login</p>
                  <FaRegUser />
                </div>
                <div className="flex items-center gap-2">
                  <p>Wishlist</p>
                  <FaRegHeart />
                </div>
              </div>

              <div>
                <BsCart />
              </div>
            </div>

          </div>
        </div>

        <section className=" flex justify-between items-center container  mx-auto mt-3 mb-3">
          <div className="flex items-center gap-24">
            <h1 className="font-[600] text-[Josefin Sans] text-[34px]  ">Hekto</h1>
            <nav className="flex items-center gap-5 list-none">
              <li className="flex items-center text-[#FB2E86]">Home <IoIosArrowDown /></li>
              <li>Pages</li>
              <li>Products</li>
              <li>Blogs</li>
              <li>Shop</li>
              <li>Contact</li>
            </nav>
          </div>

          <div className="flex items-center ">
            <input type="text"  className="h-7 border-2-grey border-r-0 bg-[#E7E6EF]" />
              <CiSearch className="text-white bg-secondary w-5 h-7"/>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;