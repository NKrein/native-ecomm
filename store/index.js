import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../features/shopSlice'
import cartReducer from '../features/cartSlice'

export default configureStore({
  reducer: {
    shopReducer,
    cartReducer,
  }
})