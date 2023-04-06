import { createSlice } from "@reduxjs/toolkit";
import{toast} from "react-toastify"
// const item=localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')):[];
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity ++;
        toast.info(`Quantity of ${action.payload.title} Increased`,{
          position:"top-left"
        })
      } else {
        state.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.title} Added to cart`,{
          position:"bottom-left"
        })
      }
      localStorage.setItem("cart", JSON.stringify(action.payload));
      console.log('action.payload',action.payload)
    },
    increament: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clear(state) {
      return [];
    },
  },
});

export const { addToCart, increament, decrement, clear, removeItem } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
