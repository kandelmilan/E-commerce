// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], // cart items
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const existing = state.items.find((i) => i.id === item.id);
//       if (existing) {
//         existing.quantity += 1; // if item exists, increase quantity
//       } else {
//         state.items.push({ ...item, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((i) => i.id !== action.payload);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;