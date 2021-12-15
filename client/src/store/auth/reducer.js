import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userRegister, userLogout } from './actions'
import checkTerminationToken from '../../services/checkTerminationToken'

const userToken = () => {
  let user = JSON.parse(localStorage.getItem('user'))
  if (user && checkTerminationToken(user)) {
    localStorage.removeItem('user')
    user = JSON.parse(localStorage.getItem('user'))
  }
  return user
}
const user = userToken()

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }

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
