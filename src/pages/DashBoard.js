import React from "react";
import Categories from "../components/Categories";
import Instagram from "../components/blog/Instagram";
import Banner from "../components/layouts/Banner";
import productData from "../constant/ProductData"
import MainProducts from "../components/products/MainProducts";
console.log('productData', productData)
const DashBoard = () => {
  return (
    <>
      <Banner />
      <section className="product spad" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  Best Sellers
                </li>
                <li data-filter=".new-arrivals">New Arrivals</li>
                <li data-filter=".hot-sales">Hot Sales</li>
              </ul>
            </div>
          </div>
          <MainProducts />
        </div>
        <Categories />
        <Instagram />
       
      </section>
    </>
  );
};

export default DashBoard;
