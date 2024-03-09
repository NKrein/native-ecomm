import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    value: {
      user: null,
      token: null,
      profileImage: null
    },
  },
  reducers: {
    setUser: (state, action) => {
      const data = action.payload
      state.value = {
        ...state.value,
        user: data,
        token: data.idToken
      }
    },
    clearUser: (state) => {
      state.value = {
        user: null,
        token: null,
        profileImage: null
      }
    },
    setProfileImage: (state, action) => {
      state.value = {
        ...state.value,
        profileImage: action.payload,
      }
    }
  }
})

export const { setUser, clearUser, setProfileImage } = authSlice.actions

export default authSlice.reducer