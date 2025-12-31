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
import AdminPanel from "./Admin/AdminPanel";
import Dashboard from "./Admin/component/Dashboard";
import Product from "./Admin/component/Product";
import Error from "./Admin/component/Error";
import User from "./Admin/component/User";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Checkout from "./component/Header/Checkout";
import OrderConfirm from "./component/Header/OrderComform";
import Setting from "./Admin/component/Setting";
import Profile from "./Admin/component/Profile";
import CategoriesPage from "./component/Header/Page";
import Payment from "./component/Header/PaymentOption";
import PaymentOption from "./component/Header/PaymentOption";
import MyOrders from "./component/Header/Myorder";




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
          <Route path="/prd" element={<Allproduct />} />
          <Route path="/wishList" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderconform" element={<OrderConfirm />} />
          <Route path="/paymentOption" element={<PaymentOption />} />
          <Route path="/error" element={<Error />} />
          <Route path="/order" element={<MyOrders />} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />

          <Route path="/pages" element={<CategoriesPage />} />
        </Route>

        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>

      <Routes>

        <Route path="/admin" element=
          {
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="users" element={<User />} />
          <Route path="settings" element={<Setting />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>


    </>
  );
}

export default App;