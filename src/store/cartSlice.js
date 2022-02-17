import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          title: newItem.name,
        });
      } else {
        existingItem.quantity++,
        existingItem.price = existingItem.price + newItem.price
      }
    },
    removeItemFromCart: (first) => {
      second;
    },
  },
});
