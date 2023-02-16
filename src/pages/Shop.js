import React from "react";
import { Link } from "react-router-dom";
import MainProducts from "../components/products/MainProducts";

const Shop = () => {
  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="breadcrumb__links">
              <a href="/Home">Home</a>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop__sidebar">
                <div className="shop__sidebar__search">
                  <form action="/shopping-cart">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span className="icon_search" />
                    </button>
                  </form>
                </div>
                <div className="shop__sidebar__accordion">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="/shopping-cartcollapseOne"
                        >
                          Categories
                        </Link>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        data-parent="/shopping-cartaccordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__categories">
                            <ul className="nice-scroll">
                              <li>
                                <Link to="/shopping-cart">Men (20)</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Women (20)</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Bags (20)</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Clothing (20)</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Shoes (20)</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">
                                  Accessories (20)
                                </Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Kids (20)</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Kids (20)</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Kids (20)</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="/shopping-cartcollapseTwo"
                        >
                          Branding
                        </Link>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        data-parent="/shopping-cartaccordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__brand">
                            <ul>
                              <li>
                                <Link to="/shopping-cart">Louis Vuitton</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Chanel</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Hermes</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">Gucci</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="/shopping-cartcollapseThree"
                        >
                          Filter Price
                        </Link>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse show"
                        data-parent="/shopping-cartaccordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__price">
                            <ul>
                              <li>
                                <Link to="/shopping-cart">$0.00 - $50.00</Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">
                                  $50.00 - $100.00
                                </Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">
                                  $100.00 - $150.00
                                </Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">
                                  $150.00 - $200.00
                                </Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">
                                  $200.00 - $250.00
                                </Link>
                              </li>
                              <li>
                                <Link to="/shopping-cart">250.00+</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="/shopping-cartcollapseFour"
                        >
                          Size
                        </Link>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse show"
                        data-parent="/shopping-cartaccordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__size">
                            <label htmlFor="xs">
                              xs
                              <input type="radio" id="xs" />
                            </label>
                            <label htmlFor="sm">
                              s
                              <input type="radio" id="sm" />
                            </label>
                            <label htmlFor="md">
                              m
                              <input type="radio" id="md" />
                            </label>
                            <label htmlFor="xl">
                              xl
                              <input type="radio" id="xl" />
                            </label>
                            <label htmlFor="2xl">
                              2xl
                              <input type="radio" id="2xl" />
                            </label>
                            <label htmlFor="xxl">
                              xxl
                              <input type="radio" id="xxl" />
                            </label>
                            <label htmlFor="3xl">
                              3xl
                              <input type="radio" id="3xl" />
                            </label>
                            <label htmlFor="4xl">
                              4xl
                              <input type="radio" id="4xl" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="/shopping-cartcollapseFive"
                        >
                          Colors
                        </Link>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse show"
                        data-parent="/shopping-cartaccordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__color">
                            <label className="c-1" htmlFor="sp-1">
                              <input type="radio" id="sp-1" />
                            </label>
                            <label className="c-2" htmlFor="sp-2">
                              <input type="radio" id="sp-2" />
                            </label>
                            <label className="c-3" htmlFor="sp-3">
                              <input type="radio" id="sp-3" />
                            </label>
                            <label className="c-4" htmlFor="sp-4">
                              <input type="radio" id="sp-4" />
                            </label>
                            <label className="c-5" htmlFor="sp-5">
                              <input type="radio" id="sp-5" />
                            </label>
                            <label className="c-6" htmlFor="sp-6">
                              <input type="radio" id="sp-6" />
                            </label>
                            <label className="c-7" htmlFor="sp-7">
                              <input type="radio" id="sp-7" />
                            </label>
                            <label className="c-8" htmlFor="sp-8">
                              <input type="radio" id="sp-8" />
                            </label>
                            <label className="c-9" htmlFor="sp-9">
                              <input type="radio" id="sp-9" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <Link
                          data-toggle="collapse"
                          data-target="/shopping-cartcollapseSix"
                        >
                          Tags
                        </Link>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse show"
                        data-parent="/shopping-cartaccordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__tags">
                            <Link to="/shopping-cart">Product</Link>
                            <Link to="/shopping-cart">Bags</Link>
                            <Link to="/shopping-cart">Shoes</Link>
                            <Link to="/shopping-cart">Fashio</Link>
                            <Link to="/shopping-cart">Clothing</Link>
                            <Link to="/shopping-cart">Hats</Link>
                            <Link to="/shopping-cart">Accessories</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                      <p>Showing 1–12 of 126 results</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select>
                        <option value="">Low To High</option>
                        <option value="">$0 - $55</option>
                        <option value="">$55 - $100</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <MainProducts />
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__pagination">
                    <Link className="active" to="/shopping-cart">
                      1
                    </Link>
                    <Link to="/products">2</Link>
                    <Link to="/products">3</Link>
                    <span>...</span>
                    <Link to="/products">21</Link>
                    <Link to="/shop">Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
