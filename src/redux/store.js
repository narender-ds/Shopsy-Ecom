import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/CartSlice";
import productSlice from "../redux/slice/productSlice";
import uiReducer from "../redux/slice/uiSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartReducer,
    ui: uiReducer
  }
});
