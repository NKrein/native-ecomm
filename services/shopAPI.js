import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firebase/config'

export const shopAPI = createApi({
  reducerPath: 'shopAPI',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products.json`
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
    }),
    getCategories: builder.query({
      query: () => `categories.json`
    }),
  })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery } = shopAPI