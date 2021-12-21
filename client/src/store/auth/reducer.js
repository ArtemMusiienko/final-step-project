import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userRegister, userLogout } from './actions'

const initialState = { isLoggedIn: false, user: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userRegister.fulfilled]: (state, action) => {
      state.isLoggedIn = false
    },
    [userRegister.rejected]: (state, action) => {
      state.isLoggedIn = false
    },
    [userLogin.fulfilled]: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    [userLogin.rejected]: (state, action) => {
      state.isLoggedIn = false
      state.user = null
    },
    [userLogout.fulfilled]: (state, action) => {
      state.isLoggedIn = false
      state.user = null
    }
  }
})

const { reducer } = authSlice
export default reducer
