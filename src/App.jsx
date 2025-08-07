import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>THis is home page</div>} />
          <Route path="products" element={<div>THis is all product page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
  