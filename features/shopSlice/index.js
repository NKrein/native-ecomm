import { createSlice } from '@reduxjs/toolkit'
import products from '../../assets/data/products.json'
import categories from '../../assets/data/categories.json'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    value: {
      products,
      categories,
      categorySelected: {},
      productsFiltered: [],
      productSelected: {}
    }
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload
      const productsFiltered = products.filter(item => item.region === categorySelected.title)
      state.value.categorySelected = categorySelected
      state.value.productsFiltered = productsFiltered
    },
    setProductSelected: (state, action) => {
      const productSelected = action.payload
      state.value.productSelected = productSelected
    },
  }
})

export const { setCategorySelected, setProductSelected } = shopSlice.actions

export default shopSlice.reducer