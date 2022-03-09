import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  // By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
