import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import bookingReducer from "./booking/bookingSlice";
import uiReducer from "./ui/uiSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    booking: bookingReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
