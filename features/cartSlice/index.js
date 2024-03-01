import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      cart: [],
      total: 0,
      user: {},
      updateAt: Date.now().toLocaleString()
    }
  },
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload
      const indexInCart = state.value.cart.findIndex(item => item.id === productToAdd.id)
      if (indexInCart >= 0) {
        state.value.cart[indexInCart].qty += productToAdd.qty
      } else {
        state.value.cart = [...state.value.cart, productToAdd]
      }
      const updatedTotal = state.value.cart.reduce((accum, current) => accum += (current.price * current.qty), 0)
      state.value.total = updatedTotal
    },
    deleteFromCart: (state, action) => {
      const productToDelete = action.payload
      const updatedArray = state.value.cart.filter(item => item.id !== productToDelete.id)
      state.value.cart = updatedArray
      const updatedTotal = state.value.cart.reduce((accum, current) => accum += (current.price * current.qty), 0)
      state.value.total = updatedTotal
    },
    resetCart: (state) => {
      state.value.cart = []
      state.value.total = 0
    }
  }
})

export const { addToCart, deleteFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer