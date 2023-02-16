import { createSlice } from "@reduxjs/toolkit";

const Loader = {};

const loader = createSlice({
  name: "isLoading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { showLoading, hideLoading } = loader.actions;
export default loader.reducer;
