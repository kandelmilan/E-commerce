import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import ProductCard from "./pages/ProductPage/ProductCard";
import LoginForm from "./pages/Auth/Login";
import ProductDetails from "./pages/ProductPage/ProductDetails"
import SignupForm from "./pages/Auth/Signup"
import Contact from "./component/Header/Contact";
import Blog from "./component/Header/Blog";
import Allproduct from "./component/Header/Allproduct";
import Cart from "./component/Header/Cart";
import { ToastContainer } from "react-toastify";
import Wishlist from "./component/Header/WishList";


function App() {
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductCard />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="prd" element={<Allproduct />} />
          <Route path="/wishList" element={<Wishlist/>}/>
          <Route path="/cart" element={<Cart />} />

          <Route path="/pages" element={<div>this a Pages Section</div>} />
        </Route>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />

         <Route path="/admin" element={<div>this is a admin dashboard</div>} />
      </Routes>

     
    </>
  );
}

export default App;