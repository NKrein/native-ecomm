import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    value: {
      user: null,
      token: null
    },
  },
  reducers: {
    setUser: (state, action) => {
      const data = action.payload
      state.value = {
        user: data,
        token: data.idToken
      }
    },
    clearUser: (state) => {
      state.value = {
        user: null,
        token: null  
      }
    }
  }
})

export const {setUser, clearUser} = authSlice.actions

export default authSlice.reducer