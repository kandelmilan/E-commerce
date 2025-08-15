import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import ProductCard from "./pages/ProductPage/ProductCard";
import Details from "./component/Details";
import LoginForm from "./pages/Auth/Login";





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="products" element={<div>hello this is product page</div>}/>
          <Route path="products/:id" element={<Details/>}/>
        </Route>


        <Route path="login" element={<LoginForm/>}/>
        <Route path="ProductCard" element={<ProductCard/>}/>
      </Routes>
    </>
  );
}

export default App;