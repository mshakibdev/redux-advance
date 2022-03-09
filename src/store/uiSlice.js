import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isCartVisible: false,
    notification: null,
  },
  reducers: {
    //need dispatch to activate toggle
    // use {} in reducer
    toggle: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});


// Action creators are generated for each case reducer function

export const uiActions = uiSlice.actions;
export default uiSlice;
