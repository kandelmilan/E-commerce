import React, { useState, useRef, useEffect } from "react";
import { CiMail, CiSearch } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BiHeartSquare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addToWishlist } from "../redux/Reducers/wishListSlice";

function Header() {
  const user = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.item);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // for wishList
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-background">
        <div className="container px-4 py-2 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 cursor-pointer">
              <CiMail />
              <a href="mailto:tradig@gmail.com">
                <p>tradig@gmail.com</p>
              </a>
            </div>
            <div className="md:flex items-center gap-2">
              <MdOutlinePhoneInTalk className="cursor-pointer" />
              <a href="tel:+1234567890">
                <p>+977 984514548554</p>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <p>English</p>
                <FaChevronDown />
              </div>
              <div className="flex items-center gap-2">
                <p>USD</p>
                <FaChevronDown />
              </div>

              <div>
                {user.userName ? (
                  user.userName
                ) : (
                  <div className="flex gap-2 items-center cursor-pointer"
                    onClick={() => { navigate("/login") }}>
                    <p>Login</p>
                    <FaRegUser />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <p>Wishlist</p>
                <FaRegHeart onClick={() => navigate("/wishlist")} />
                {/* {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlistItems.length}
                  </span>
                )} */}
              </div>
            </div>


            {/* Cart Icon */}
            <div className="relative cursor-pointer">
              <BsCart
                size={20}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => navigate("/cart")}
              />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </div>


          </div>
        </div>
      </div>

      {/* Main Nav */}
      <section className="hidden md:flex justify-between items-center container mx-auto mt-3 mb-3">
        <div className="flex items-center gap-24">
          <h1 className="font-[600] text-[Josefin Sans] text-[34px]"
            onClick={() => navigate("/")}>Hekto</h1>
          <nav className="flex items-center gap-5 list-none">
            <ul className="flex gap-6">
              <li>
                <NavLink to="/" className="flex pt-1.5 hover:text-[#FB2E86] text-gray-600">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/pages" className="flex pt-1.5 hover:text-[#FB2E86] text-gray-600">
                  Pages
                </NavLink>
              </li>
              <li>
                <NavLink to="/prd" className="flex pt-1.5 hover:text-[#FB2E86] text-gray-600">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="flex pt-1.5 hover:text-[#FB2E86] text-gray-600">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="flex pt-1.5 hover:text-[#FB2E86] text-gray-600">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="h-7 border-2-grey border-r-0 bg-[#E7E6EF] px-2"
            placeholder="Search..."
          />
          <CiSearch className="text-white bg-secondary w-5 h-7" />
        </div>
      </section>
    </header>
  );
}

export default Header;
