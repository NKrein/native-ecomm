import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    value: {
      categorySelected: {},
      productSelected: {}
    }
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload
      state.value.categorySelected = categorySelected
    },
    setProductSelected: (state, action) => {
      const productSelected = action.payload
      state.value.productSelected = productSelected
    },
  }
})

export const { setCategorySelected, setProductSelected } = shopSlice.actions

export default shopSlice.reducer