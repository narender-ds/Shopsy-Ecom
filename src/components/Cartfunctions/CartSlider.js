import React from "react";
import { toggle } from "../../redux/slice/uiSlice";
import { increament, decrement, clear } from "../../redux/slice/CartSlice";
import { cartTotalPriceSelector } from "../../redux/Selectors";
import {
  CartContainer,
  CartClearButton,
  CartItem,
  CartProductImage,
  CartProductTitle,
  CartProductAction,
  CartProductSubtotal,
  ActionButton,
  CartProductQuantity,
  CartTotal,
  Mask,
  EmptyCart,
} from "./CartFunctions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CartSlider = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  return (
    <>
      <CartContainer visible={ui.cartDrawerVisible}>
        {/* {cart.length > 0 ? (
          <CartClearButton
            onClick={() => {
              dispatch(clear());
            }}
          >
            cart
          </CartClearButton>
        ) : (
          <EmptyCart>Your Cart is Empty</EmptyCart>
        )} */}
        {cart.length > 0 ?  <div
          className="display flex"
          style={{ alignContent: "center", justifyContent: "space-between",color: "#ff6700" }}
        >
          <h4 style={{color: "#ff6700"}}>Shopping Cart</h4>
        </div> : <EmptyCart>Your Cart is Empty</EmptyCart>}
       
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id}>
            <CartProductImage src={cartItem.thumbnail} alt={cartItem.title} />
            <div>
              <CartProductTitle>{cartItem.title}</CartProductTitle>
              <CartProductSubtotal>
                $：{cartItem.quantity * cartItem.price}
              </CartProductSubtotal>
              <CartProductAction>
                <ActionButton
                  disabled={cartItem.quantity === 1}
                  onClick={() => {
                    dispatch(decrement(cartItem.id));
                  }}
                >
                  -
                </ActionButton>
                <CartProductQuantity>{cartItem.quantity}</CartProductQuantity>
                <ActionButton
                  onClick={() => {
                    dispatch(increament(cartItem.id));
                  }}
                >
                  +
                </ActionButton>
              </CartProductAction>
            </div>
          </CartItem>
        ))}
        {totalPrice > 0 && <CartTotal>Total ${totalPrice}</CartTotal>}
        {cart.length > 0 ? <CartClearButton onClick={() => navigate("/shopping-cart")}>
          Go To Cart
        </CartClearButton> : <CartClearButton onClick={() => navigate("/shop")}>
          Shop Now
        </CartClearButton>}
        
      </CartContainer>

      {ui.cartDrawerVisible && (
        <Mask
          onClick={() => {
            dispatch(toggle());
          }}
        />
      )}
    </>
  );
};

export default CartSlider;
