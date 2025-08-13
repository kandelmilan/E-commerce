import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import ProductCard from "./pages/ProductPage/ProductCard";
import Details from "./pages/ProductPage/Details";
import LoginForm from "./pages/Auth/Login";





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="products" element={<ProductCard/>}/>
          <Route path="products/:id" element={<Details/>}/>
        </Route>


        <Route path="login" element={<LoginForm/>}/>
      </Routes>
    </>
  );
}

export default App;