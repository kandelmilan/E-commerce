import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import ProductCard from "./component/ProductCard";
import { DiVim } from "react-icons/di";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="products" element={<>hello</>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;