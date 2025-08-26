import { createSlice } from "@reduxjs/toolkit";

// Load initial cart from localStorage
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: initialCart,
  },
  reducers: {
    addtocart: (state, action) => {
      const item = action.payload;
      const existing = state.item.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity ? item.quantity : 1;
      } else {
        state.item.push({ ...item, quantity: item.quantity || 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.item));
    },

    removeFromCart: (state, action) => {
      state.item = state.item.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.item));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.item.find((i) => i.id === id);
      if (existing) {
        existing.quantity = quantity;
        if (existing.quantity < 1) {
          state.item = state.item.filter((i) => i.id !== id);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.item));
    },
    
    clearCart: (state) => {
      state.item = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addtocart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
