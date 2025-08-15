import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EEEFFB] text-[#151875] pt-12 mt-10 container">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10">
        
        {/* Logo & Email Signup */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Hekto</h1>
          <div className="relative w-full max-w-xs mb-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-secondary py-[8px] px-[14px] rounded-[6px] text-white font-[700] text-[12px] leading-[100%] transition-all duration-300 ease-in-out cursor-pointer">
              Sign Up
            </button>
          </div>
          <p className="text-sm">Contact Info</p>
          <p className="text-sm mt-1 text-gray-600">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Catagories</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-4 max-w-7xl mx-auto">
        <p>©Webecy - All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0 text-[#151875]">
          <FaFacebookF className="hover:text-pink-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaTwitter className="hover:text-pink-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
