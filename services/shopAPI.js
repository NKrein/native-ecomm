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
    postOrder: builder.mutation({
      query: (order) => ({
        url: 'orders.json',
        method: 'POST',
        body: {...order}
      })
    }),
    getOrdersByUserId: builder.query({
      query: (uid) => `orders.json?orderBy="userId"&equalTo="${uid}"`
    }),
    getProfileImage: builder.query({
      query: (uid) => `profileImages/${uid}.json`
    }),
    postProfileImage: builder.mutation({
      query: ({ image, uid }) => ({
        url: `profileImages/${uid}.json`,
        method: 'PUT',
        body: { image }
      })
    }),
    getUserLocationsList: builder.query({
      query: (uid) => `locations/${uid}.json`
    }),
    postUserLocation: builder.mutation({
      query: ({ location, uid }) => ({
        url: `locations/${uid}.json`,
        method: 'PUT',
        body: { ...location }
      })
    }),
  })
})

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  usePostOrderMutation,
  useGetOrdersByUserIdQuery,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetUserLocationsListQuery,
  usePostUserLocationMutation } = shopAPI