import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from '../firebase/authConfig'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (auth) => ({
        url: `accounts:signUp?key=${api_key}`,
        method: 'POST',
        body: auth,
      })
    }),
    logIn: builder.mutation({
      query: (auth) => ({
        url: `accounts:signInWithPassword?key=${api_key}`,
        method: 'POST',
        body: auth,
      })
    }),
  })
})

export const { useSignUpMutation, useLogInMutation } = authAPI