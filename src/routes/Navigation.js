import React from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Shop from "../pages/Shop";
import SearchBar from "../components/layouts/SearchBar";
import BlogDetals from "../components/blog/BlogDetals";
import AboutUs from "../components/dropdDownPages/AboutUs";
import ShoppingCart from "../components/Cartfunctions/ShoppingCart";
import ShopDetails from "../components/dropdDownPages/ShopDetails";
import CheckOut from "../components/dropdDownPages/CheckOut";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainProducts from "../components/products/MainProducts";
import SmartPhones from "../pages/SmartPhones";

const Navigation = () => {
  return (
    <div>
      <SearchBar />
      <Header />
      <Routes>
        <Route path="/Home" element={<DashBoard />} />
        <Route index element={<DashBoard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/blog-details" element={<BlogDetals />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="products" element={<MainProducts />} />
        <Route path="/smartphones" element={<SmartPhones />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Navigation;
