import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import ProductCard from "./pages/ProductPage/ProductCard";
import LoginForm from "./pages/Auth/Login";
import ProductDetails from "./pages/ProductPage/ProductDetails"
import SignupForm from "./pages/Auth/Signup"
import ScrollToHashElement from "./component/ScrollToHashElement";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import Shop from "./component/Shop";





function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductCard />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/shops" element={<Shop />} />
          <Route path="/pages" element={<div>this a Pages Section</div>} />
        </Route>

        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>

      <Routes>
        <Route path="/admin" element={<div>this is a admin dashboard</div>} />
      </Routes>
    </>
  );
}

export default App;