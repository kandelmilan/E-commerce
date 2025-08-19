import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./Reducers/userSlice"
import cartReducer from "./Reducers/cartSlice"

 const store = configureStore({
  reducer: {
    user:userSlice,
    cart:cartReducer,
  },
})
export default store
