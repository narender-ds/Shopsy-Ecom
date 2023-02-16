import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/CartSlice";
import productsReducer from "../redux/slice/ProductDetailSlice";
import uiReducer from "../redux/slice/uiSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer
  }
});
