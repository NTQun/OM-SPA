import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartOpen: false,
  bookingOpen: false,
  successOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartOpen = true;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
    openBooking: (state) => {
      state.bookingOpen = true;
    },
    closeBooking: (state) => {
      state.bookingOpen = false;
    },
    openSuccess: (state) => {
      state.successOpen = true;
    },
    closeSuccess: (state) => {
      state.successOpen = false;
    },
  },
});

export const {
  openCart,
  closeCart,
  openBooking,
  closeBooking,
  openSuccess,
  closeSuccess,
} = uiSlice.actions;

export default uiSlice.reducer;
