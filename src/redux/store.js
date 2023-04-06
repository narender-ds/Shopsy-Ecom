import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/slice/productSlice";
import CartReducer from "../redux/slice//CartSlice";
import uiReducer from "../redux/slice/uiSlice";
export const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart: CartReducer,
        ui: uiReducer
    },
});
