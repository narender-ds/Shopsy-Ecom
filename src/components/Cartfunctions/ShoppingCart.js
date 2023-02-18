import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/slice/uiSlice";
import {
  increament,
  decrement,
  clear,
  removeItem,
} from "../../redux/slice/CartSlice";
import { cartTotalPriceSelector } from "../../redux/Selectors";
import {
  CartProductAction,
  CartProductSubtotal,
  ActionButton,
  CartProductQuantity,
  CartTotal,
  Mask,
  EmptyCart,
} from "./CartFunctions";
const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <>
      <section class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="breadcrumb__links">
              <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
              <span>Shopping Cart</span>
            </div>
          </div>
        </div>
      </section>
      {cart.length > 0 ? "" : <EmptyCart>Your Cart is Empty</EmptyCart>}
      <section className="shopping-cart spad" visible={ui.cartDrawerVisible}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  {cart.map((cartItem) => {
                    return (
                      <>
                        <tbody>
                          <tr>
                            <td
                              className="product__cart__item"
                              key={cartItem.id}
                            >
                              <div className="product__cart__item__pic">
                                <img src={cartItem.thumbnail} alt="" />
                              </div>
                              <div className="product__cart__item__text">
                                <h6>{cartItem.title}</h6>
                                <h5>{cartItem.price}</h5>
                              </div>
                            </td>
                            <td className="quantity__item">
                              <div className="quantity">
                                <div className="pro-qty-2">
                                  {cartItem.quantity}
                                </div>
                              </div>
                            </td>
                            <td className="cart__price">
                              {" "}
                              <CartProductSubtotal>
                                $ {cartItem.quantity * cartItem.price}
                              </CartProductSubtotal>
                            </td>

                            <td className="cart__close">
                              <i
                                className="fa fa-close"
                                onClick={() => {
                                  dispatch(removeItem(cartItem.id));
                                }}
                              />
                            </td>
                          </tr>
                          <CartProductAction>
                            <ActionButton
                              disabled={cartItem.quantity === 1}
                              onClick={() => {
                                dispatch(decrement(cartItem.id));
                              }}
                            >
                              -
                            </ActionButton>
                            <CartProductQuantity>
                              {cartItem.quantity}
                            </CartProductQuantity>
                            <ActionButton
                              onClick={() => {
                                dispatch(increament(cartItem.id));
                              }}
                            >
                              +
                            </ActionButton>
                          </CartProductAction>
                        </tbody>
                      </>
                    );
                  })}
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/shop">Continue Shopping</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <Link
                      to="#"
                      onClick={() => {
                        dispatch(clear());
                      }}
                    >
                      <i className="fa fa-spinner" /> Update cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  {cart.map((catItem) => {
                    return (
                      <>
                        <li>
                          {catItem.title}
                          <span>
                            <CartProductSubtotal>
                               {catItem.quantity * catItem.price}
                            </CartProductSubtotal>
                          </span>
                        </li>
                      </>
                    );
                  })}
<hr/>
                  <li>
                     {totalPrice > 0 &&  <CartTotal >Total $ {totalPrice}</CartTotal>}
                  </li>
                </ul>
                <Link to="/checkout" className="primary-btn">
                  Proceed to checkout
                </Link>
                {ui.cartDrawerVisible && (
                  <Mask
                    onClick={() => {
                      dispatch(toggle());
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
