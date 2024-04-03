import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../features/shopSlice'
import cartReducer from '../features/cartSlice'
import authReducer from '../features/authSlice'
import { shopAPI } from '../services/shopAPI'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authAPI } from '../services/authAPI'

const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    authReducer,
    [shopAPI.reducerPath]: shopAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware()
      .concat(shopAPI.middleware)
      .concat(authAPI.middleware)
  )
})

setupListeners(store.dispatch)
export default store