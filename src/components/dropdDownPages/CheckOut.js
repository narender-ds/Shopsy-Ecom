import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartTotalPriceSelector } from "../../redux/Selectors";
import { CartProductSubtotal, CartTotal } from "../Cartfunctions/CartFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CheckOut = () => {
  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  const message = () => {
    toast.success("Order Placed", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="breadcrumb__links">
              <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
              <span>Check Out</span>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <form action="#">
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <h6 className="coupon__code">
                    <span className="icon_tag_alt" /> Have a coupon?{" "}
                    <Link to="#">Click here</Link> to enter your code
                  </h6>
                  <h6 className="checkout__title">Billing Details</h6>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Fist Name<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Last Name<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Country<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Address<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="checkout__input__add"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, unite ect (optinal)"
                    />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Town/City<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Country/State<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Postcode / ZIP<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Phone<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input__checkbox">
                    <label htmlFor="acc">
                      Create an account?
                      <input type="checkbox" id="acc" />
                      <span className="checkmark" />
                    </label>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page
                    </p>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Account Password<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input__checkbox">
                    <label htmlFor="diff-acc">
                      Note about your order, e.g, special noe for delivery
                      <input type="checkbox" id="diff-acc" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Order notes<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4 className="order__title">Your order</h4>
                    <div className="checkout__order__products">
                      Product <span>Total</span>
                    </div>
                    {cart.map((cartProducts) => {
                      return (
                        <>
                          <ul className="checkout__total__products">
                            <li>
                              01. {cartProducts.title}{" "}
                              <span>
                                $ {cartProducts.quantity * cartProducts.price}
                              </span>
                            </li>
                          </ul>
                        </>
                      );
                    })}
                    <ul className="checkout__total__all">
                      {/* <li>
                        Subtotal <span> <CartProductSubtotal>
                              $： {catItem.quantity * catItem.price}
                            </CartProductSubtotal></span>
                      </li> */}
                      <li>
                        Total{" "}
                        <span>
                          {totalPrice > 0 && (
                            <CartTotal>${totalPrice}</CartTotal>
                          )}
                        </span>
                      </li>
                    </ul>

                    <Link to="/register">
                      <div className="checkout__input__checkbox">
                        <label htmlFor="acc-or">
                          Create an account?
                          <input type="checkbox" id="acc-or" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </Link>

                    <li>Easy Return & Replacement</li>
                    <li>Cash on delivery</li>
                    <li>Geneiune Products</li>
                    <br></br>

                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment">
                        Check Payment
                        <input type="checkbox" id="payment" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="paypal">
                        Paypal
                        <input type="checkbox" id="paypal" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="site-btn"
                      onClick={message()}
                    >
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default CheckOut;
