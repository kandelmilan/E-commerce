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





function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductCard />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Pages" element={<div>this a Pages Section</div>}/>
        </Route>

        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;