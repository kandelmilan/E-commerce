import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./Reducers/userSlice"
import cartReducer from "./Reducers/cartSlice"
import wishList from "./Reducers/wishListSlice"

 const store = configureStore({
  reducer: {
    user:userSlice,
    cart:cartReducer,
    wishlist: wishList, 
  },
})
export default store
