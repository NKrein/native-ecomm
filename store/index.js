import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../features/shopSlice'
import cartReducer from '../features/cartSlice'
import { shopAPI } from '../services/shopAPI'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    [shopAPI.reducerPath]: shopAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopAPI.middleware)
})

setupListeners(store.dispatch)
export default store